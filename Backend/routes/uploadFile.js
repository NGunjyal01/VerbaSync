const express = require('express');
const multer = require('multer');
const path = require('path');

const router = express.Router();
const uploadFile = require("../controllers/uploadFile");

const storage = multer.diskStorage({
  destination: 'uploads/',
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    cb(null, `${Date.now()}${ext}`);
  }
});

const upload = multer({ storage });

router.post('/upload', upload.single('file'), uploadFile);

module.exports = router;
