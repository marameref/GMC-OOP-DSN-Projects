
---

## ## 1. File Structure

```text
todo-api/
├── server.js          # Main server logic and routing
├── data.js            # In-memory data storage (shared state)
└── README.md          # Project documentation (Markdown format)

```

---

## ## 2. Detailed Execution & Testing Guideline

### **Execution**

1. **Create Files:** Create a folder named `todo-api` and add the files listed above.
2. **Start Server:** Open your terminal in that folder and run:
```bash
node server.js

```


3. **Monitor:** The terminal will display `Server running on http://localhost:3000`.

### **Testing (The CRUD Flow)**

Use a tool like Postman or `curl` to verify these steps in order:

* **Step 1 (READ):** `GET /todos` -> Returns `[]`.
* **Step 2 (CREATE):** `POST /todos` with body `{"title": "Complete OS Checkpoint"}` -> Returns the new task with `id: 1`.
* **Step 3 (UPDATE):** `PUT /todos/1` with body `{"completed": true}` -> Returns the task with `completed: true`.
* **Step 4 (DELETE):** `DELETE /todos/1` -> Returns a success message.

---

## ## 3. Codebase

### **data.js**

```javascript
// Centralized state management
let todos = [];

module.exports = { todos };

```

### **server.js**

```javascript
const http = require('http');
const { todos } = require('./data');

const server = http.createServer((req, res) => {
    const { method, url } = req;

    // Helper: Standardized JSON Response
    const sendJSON = (status, data) => {
        res.writeHead(status, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(data));
    };

    // --- ROUTE: GET /todos (Read All) ---
    if (url === '/todos' && method === 'GET') {
        return sendJSON(200, todos);
    }

    // --- ROUTE: POST /todos (Create) ---
    if (url === '/todos' && method === 'POST') {
        let body = '';
        req.on('data', chunk => { body += chunk.toString(); });
        req.on('end', () => {
            try {
                const { title } = JSON.parse(body);
                if (!title) return sendJSON(400, { error: 'Title is required' });
                
                const newTodo = { id: Date.now(), title, completed: false };
                todos.push(newTodo);
                sendJSON(201, newTodo);
            } catch (e) {
                sendJSON(400, { error: 'Invalid JSON format' });
            }
        });
        return;
    }

    // --- ROUTES: /todos/:id (Update & Delete) ---
    if (url.startsWith('/todos/')) {
        const id = parseInt(url.split('/')[2]);
        const index = todos.findIndex(t => t.id === id);

        if (index === -1) return sendJSON(404, { error: 'Task not found' });

        if (method === 'DELETE') {
            todos.splice(index, 1);
            return sendJSON(200, { message: `Task ${id} removed` });
        }
        
        if (method === 'PUT') {
            let body = '';
            req.on('data', chunk => { body += chunk.toString(); });
            req.on('end', () => {
                const updates = JSON.parse(body);
                todos[index] = { ...todos[index], ...updates };
                sendJSON(200, todos[index]);
            });
            return;
        }
    }

    // Fallback: 404 Not Found
    sendJSON(404, { error: 'Endpoint not found' });
});

server.listen(3000, () => console.log('Server running on http://localhost:3000'));

```

---

## ## 4. Comprehensive README (.md)

```markdown
# To-Do List Backend (Vanilla Node.js)



## 📋 Overview
A RESTful API built using only Node.js core modules. This project demonstrates how to handle HTTP requests, parse incoming data streams, and manage in-memory state without external frameworks like Express.

## 🚀 Getting Started
1. **Prerequisites:** Install [Node.js](https://nodejs.org/).
2. **Launch:**
   ```bash
   node server.js

```

3. **Base URL:** `http://localhost:3000`

## 🛣️ API Routes

| Method | Endpoint | Description |
| --- | --- | --- |
| `GET` | `/todos` | Retrieve all tasks |
| `POST` | `/todos` | Create a task (Requires `{"title": "string"}`) |
| `PUT` | `/todos/:id` | Update status/title (Requires `{"completed": bool}`) |
| `DELETE` | `/todos/:id` | Remove a task by ID |

## 🛠️ Technical Details

* **Data Persistence:** In-memory (resets when the server restarts).
* **ID Generation:** Uses `Date.now()` for unique identification.
* **Validation:** Basic checks for missing titles and invalid JSON.

## ⚠️ Requirements

* Content-Type must be `application/json` for POST and PUT requests.

```