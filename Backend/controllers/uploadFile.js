const fs = require('fs');
const inputFile = require('../models/inputFile');


const uploadFile = async (req, res) => {
  const file = req.file;
  const { targetLanguage } = req.body;

  if (!file) return res.status(400).json({ error: 'No file uploaded' });

  const mime = file.mimetype;

  const isAudio = mime.startsWith('audio/');
  const isVideo = mime.startsWith('video/');

  if (!isAudio && !isVideo) {
    fs.unlinkSync(file.path); // delete invalid file
    return res.status(400).json({ error: 'Only video or audio files are allowed' });
  }

  const newInputFile = new inputFile({
    title: file.originalname,
    filePath: file.path,
    fileType: isAudio ? 'audio' : 'video',
    status: 'uploaded',
    targetLanguage
  });

  await newInputFile.save();

  // TODO: Add to processing queue

  res.status(201).json({ message: 'Uploaded successfully', inputFileId: newInputFile._id });
}

module.exports = uploadFile;