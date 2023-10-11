require('dotenv').config(); // Load environment variables from .env file

const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;
// Serve static files from the 'dist' directory (where your bundle will be built)
app.use(express.static(path.join(__dirname, 'dist')));

// Define a catch-all route to serve your index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});