# Graph Data Structure & Traversal Implementation

This project implements a flexible **Graph Data Structure** in JavaScript using an **Adjacency List**. It demonstrates fundamental graph operations and traversal algorithms used in networking, social media connections, and pathfinding.

## 🚀 Features implemented
- **Graph Class**: Supports both **Directed** and **Undirected** graph types.
- **Dynamic Edge Management**: Methods to add, remove, and check for edges between vertices.
- **Breadth-First Search (BFS)**: Traverses the graph level-by-level using a Queue (FIFO) logic.
- **Depth-First Search (DFS)**: Traverses the graph by exploring branches as deeply as possible using Recursion/Stack logic.

## 🛠️ Technical Logic
- **Adjacency List**: Chosen for space efficiency ($O(V + E)$) over an Adjacency Matrix, making it ideal for sparse social networks.
- **BFS Utility**: Useful for finding the shortest path in unweighted graphs.
- **DFS Utility**: Ideal for topological sorting and detecting cycles in a network.



## 💻 How to Use
1. Clone this repository.
2. Open `index.html` in any modern web browser (Chrome, Safari, or Edge).
3. Open the **Browser Console** (`Option + Command + J` on Mac or `F12` on Windows).
4. Click the **"Run Graph Traversal Test"** button to see the traversal order in real-time.

## 🧪 Testing Case
The test script initializes an undirected graph with the following connections:
- Adebayo ↔ Chinelo
- Adebayo ↔ Musa
- Chinelo ↔ Sarah
- Musa ↔ Sarah

The console output verifies the exact order in which each node is visited by both BFS and DFS algorithms.