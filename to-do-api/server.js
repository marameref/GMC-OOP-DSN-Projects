const http = require('http');
const handleRoutes = require('./routes'); // This pulls the logic from routes.js

// This creates the server process
const server = http.createServer((req, res) => {
    handleRoutes(req, res); // This sends the request to your routes logic
});

const PORT = 3000;

// This keeps the process running and listening for requests
server.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
    console.log('Press Ctrl+C to stop the server');
});