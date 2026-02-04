
---

# 🛣️ Dijkstra's Shortest Path Algorithm (JavaScript)

This project implements **Dijkstra’s Algorithm** to solve the "Shortest Path" problem in a weighted graph. This is a fundamental concept in Computer Science, used in network routing (OSPF) and GPS navigation systems.

---

## 📂 Project Structure

```text
dijkstra-lab/
├── index.js          # Main implementation and test cases
└── README.md         # Documentation (this file)

```

---

## 🚀 Project Setup

1. **Create the Workspace:**
Open your terminal and create a new directory:
```bash
mkdir dijkstra-lab && cd dijkstra-lab

```


2. **Initialize the File:**
Create the `index.js` file:
```bash
touch index.js

```


3. **Requirements:**
You only need **Node.js** installed. You can check your version by running:
```bash
node -v

```

---

## 🧠 Step 1: Understanding the "Logic"

Dijkstra’s algorithm uses a **Greedy Strategy** to find the shortest distance from a "Start Node" to all other nodes in a graph.

1. **Initialization:** Mark the distance to the starting node as **0** and all other nodes as **Infinity**.
2. **Selection:** Out of all unvisited nodes, pick the one with the **smallest known distance**.
3. **Relaxation (Update):** Look at all neighbors of that node. Calculate the distance to each neighbor *through* the current node. If this new path is shorter than the previously known distance, update it.
4. **Repeat:** Mark the current node as "visited" and repeat the process until all nodes are visited.

---

## 💻 Step 2: Implementation

Paste the following code into your `index.js`:

```javascript
function dijkstra(graph, start) {
    const distances = {};
    const visited = new Set();
    const nodes = Object.keys(graph);

    // Initial State: All distances are Infinity except start
    for (let node of nodes) {
        distances[node] = Infinity;
    }
    distances[start] = 0;

    while (nodes.length > 0) {
        // Find the node with the minimum distance
        nodes.sort((a, b) => distances[a] - distances[b]);
        const closestNode = nodes.shift();

        // Stop if we hit an unreachable node
        if (distances[closestNode] === Infinity) break;

        // Explore Neighbors
        for (let neighbor in graph[closestNode]) {
            let distanceToNeighbor = graph[closestNode][neighbor];
            let totalPathDistance = distances[closestNode] + distanceToNeighbor;

            // Update if a shorter path is found
            if (totalPathDistance < distances[neighbor]) {
                distances[neighbor] = totalPathDistance;
            }
        }
    }
    return distances;
}

// --- TEST CASE ---
const graph = {
    'A': { 'B': 4, 'C': 2 },
    'B': { 'A': 4, 'C': 5, 'D': 10 },
    'C': { 'A': 2, 'B': 5, 'D': 3 },
    'D': { 'B': 10, 'C': 3 }
};

const results = dijkstra(graph, 'A');
console.log("Shortest Distances from Node A:");
console.table(results);

```

---

## 🧪 Step 3: How to Test the Project

To test your implementation, you will execute the script using the Node.js runtime.

1. **Run the Script:**
In your terminal, within the `dijkstra-lab` folder, run:
```bash
node index.js

```


2. **Verifying the Output:**
The script includes a `console.table()` at the end. If your implementation is correct, your terminal should display the following result:
| (index) | Value |
| --- | --- |
| **A** | 0 |
| **B** | 4 |
| **C** | 2 |
| **D** | 5 |


* **Analysis:** Even though B is connected to A with a weight of 4, the path to D goes through C () instead of through B (). The algorithm successfully found the most efficient route!

---

## 🎓 Author Information

**Engr. Amarachi Crystal Omereife** Software Engineering Student | AI Infrastructure Researcher

📧 **Email:** amarachiomereife@gmail.com

💻 **Tools:** JavaScript (ES6) | Node.js

---