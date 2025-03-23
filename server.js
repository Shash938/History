const express = require('express');
const path = require('path');
const app = express();
const PORT = 8080;

app.use(express.static(path.join(__dirname)));

app.get('/wars.json', (req, res) => {
    res.sendFile(path.join(__dirname, 'wars.json'));
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
