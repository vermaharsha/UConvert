// Basic Express Server (index.js)
const express = require('express');
const cors = require('cors');
const fileRoutes = require('./routes/files');
const app = express();

app.use(cors());
app.use('/api/files', fileRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});