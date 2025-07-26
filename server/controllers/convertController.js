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
    let image = sharp(inputPath);

    // Force output format regardless of original
    switch(format) {
      case 'png':
        image = image.png({ quality: 90, force: true });
        break;
      case 'jpg':
        image = image.jpeg({ quality: 90, force: true });
        break;
      case 'webp':
        image = image.webp({ quality: 90, force: true });
        break;
      case 'avif':
        image = image.avif({ quality: 50, force: true });
        break;
    }

    await image.toFile(outputPath);

    res.download(outputPath, `converted.${format}`, (err) => {
      fs.unlinkSync(inputPath);
      fs.unlinkSync(outputPath);
    });
  } catch (err) {
    console.error('Image conversion failed:', err); // <-- YOU SEE THE ACTUAL ERROR IN TERMINAL
    res.status(500).json({ error: 'Conversion failed.', details: err.message });
  }
};
