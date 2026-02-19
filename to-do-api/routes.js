const { todos } = require('./data');

const handleRoutes = (req, res) => {
    const { method, url } = req;

    const sendJSON = (status, data) => {
        res.writeHead(status, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(data));
    };

    // Home Route
    if (url === '/' && method === 'GET') {
        return sendJSON(200, { message: "API is active. Go to /todos to manage tasks." });
    }

    // GET all todos
    if (url === '/todos' && method === 'GET') {
        return sendJSON(200, todos);
    }

    // POST a new todo
    if (url === '/todos' && method === 'POST') {
        let body = '';
        req.on('data', chunk => { body += chunk.toString(); });
        req.on('end', () => {
            try {
                const { title } = JSON.parse(body);
                const newTodo = { id: Date.now(), title, completed: false };
                todos.push(newTodo);
                sendJSON(201, newTodo);
            } catch (err) {
                sendJSON(400, { error: "Invalid JSON" });
            }
        });
        return;
    }

    // Handle ID-based routes (PUT/DELETE)
    if (url.startsWith('/todos/')) {
        const id = parseInt(url.split('/')[2]);
        const index = todos.findIndex(t => t.id === id);

        if (index === -1) return sendJSON(404, { error: "Task not found" });

        if (method === 'DELETE') {
            todos.splice(index, 1);
            return sendJSON(200, { message: "Deleted successfully" });
        }
    }

    sendJSON(404, { error: 'Route not found' });
};

module.exports = handleRoutes;
