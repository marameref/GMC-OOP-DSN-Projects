/**
 * Dijkstra's Algorithm Implementation
 * @param {Object} graph - The adjacency list with weights
 * @param {string} start - The starting vertex
 */
function dijkstra(graph, start) {
    // 1. Create an object to store the shortest distances from start to every node
    let distances = {};
    let visited = new Set();
    let nodes = Object.keys(graph);

    // 2. Initialize all distances to Infinity, and start node to 0
    for (let node of nodes) {
        distances[node] = Infinity;
    }
    distances[start] = 0;

    while (nodes.length > 0) {
        // 3. Pick the unvisited node with the smallest distance
        // Sort nodes by their current known distance
        nodes.sort((a, b) => distances[a] - distances[b]);
        let closestNode = nodes.shift(); // Remove and get the smallest

        // 4. If the smallest distance is Infinity, remaining nodes are unreachable
        if (distances[closestNode] === Infinity) break;

        // 5. Check all neighbors of the current node
        for (let neighbor in graph[closestNode]) {
            let weight = graph[closestNode][neighbor];
            let newDistance = distances[closestNode] + weight;

            // 6. If we found a shorter path to this neighbor, update it!
            if (newDistance < distances[neighbor]) {
                distances[neighbor] = newDistance;
            }
        }
        
        visited.add(closestNode);
    }

    return distances;
}

// --- Test the Solution ---
const graph = {
    'A': { 'B': 4, 'C': 2 },
    'B': { 'A': 4, 'C': 5, 'D': 10 },
    'C': { 'A': 2, 'B': 5, 'D': 3 },
    'D': { 'B': 10, 'C': 3 }
};

console.log("Shortest distances from 'A':", dijkstra(graph, 'A'));
