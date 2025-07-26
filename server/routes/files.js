// File Upload and Convert Route (routes/files.js)

const express = require('express');
const multer = require('multer');
const { convertImage } = require('../controllers/convertController');
const router = express.Router();

const upload = multer({ dest: 'uploads/' });

router.post('/convert', upload.single('file'), convertImage);

module.exports = router;
