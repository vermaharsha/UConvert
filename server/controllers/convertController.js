// Conversion Controller (controllers/convertController.js)

const path = require('path');
const fs = require('fs');
const sharp = require('sharp');

exports.convertImage = async (req, res) => {
  const { format } = req.body;
  const file = req.file;
  const supportedFormats = ['jpg', 'png', 'webp', 'avif'];

  if (!file || !supportedFormats.includes(format)) {
    return res.status(400).json({ error: 'Invalid file or format.' });
  }

  const inputPath = file.path;
  const outputPath = `${file.path}.${format}`;

  try {
    await sharp(inputPath)
      .toFormat(format)
      .toFile(outputPath);

    res.download(outputPath, `converted.${format}`, (err) => {
      fs.unlinkSync(inputPath);
      fs.unlinkSync(outputPath);
    });
  } catch (err) {
    res.status(500).json({ error: 'Conversion failed.' });
  }
};
