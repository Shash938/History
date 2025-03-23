const express = require('express');
const path = require('path');
const app = express();
const PORT = 8080;

// Serve static files (HTML, CSS, JS)
app.use(express.static(path.join(__dirname)));

// Serve the wars.json file
app.get('/wars.json', (req, res) => {
    res.sendFile(path.join(__dirname, 'wars.json'));
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});