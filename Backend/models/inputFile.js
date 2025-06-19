const mongoose = require('mongoose');

const inputFileSchema = new mongoose.Schema({
  title: String,
  filePath: String,
  fileType: { type: String, 
    enum: ['video', 'audio'], 
    default: 'video', 
    required:true },
  status: { type: String, 
    enum: ['uploaded', 'processing', 'completed', 'error'], 
    default: 'uploaded' },
  targetLanguage: { type: String, 
    default: 'en' },
},{timestamps:true});

module.exports = mongoose.model('inputFile', inputFileSchema);
