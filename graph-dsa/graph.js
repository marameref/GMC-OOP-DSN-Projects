class Graph {
    constructor(isDirected = false) {
        this.adjacencyList = {};
        this.isDirected = isDirected;
    }

    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = [];
        }
    }

    addEdge(v1, v2) {
        this.addVertex(v1);
        this.addVertex(v2);
        this.adjacencyList[v1].push(v2);
        if (!this.isDirected) {
            this.adjacencyList[v2].push(v1);
        }
    }

    hasEdge(v1, v2) {
        return this.adjacencyList[v1]?.includes(v2) || false;
    }

    removeEdge(v1, v2) {
        this.adjacencyList[v1] = this.adjacencyList[v1].filter(v => v !== v2);
        if (!this.isDirected) {
            this.adjacencyList[v2] = this.adjacencyList[v2].filter(v => v !== v1);
        }
    }

    bfs(startNode) {
        let queue = [startNode];
        let visited = new Set();
        let result = [];
        visited.add(startNode);

        while (queue.length > 0) {
            let current = queue.shift();
            result.push(current);
            this.adjacencyList[current].forEach(neighbor => {
                if (!visited.has(neighbor)) {
                    visited.add(neighbor);
                    queue.push(neighbor);
                }
            });
        }
        console.log("BFS Order:", result.join(" -> "));
    }

    dfs(startNode) {
        let visited = new Set();
        let result = [];
        const traverse = (node) => {
            if (!node) return;
            visited.add(node);
            result.push(node);
            this.adjacencyList[node].forEach(neighbor => {
                if (!visited.has(neighbor)) {
                    traverse(neighbor);
                }
            });
        };
        traverse(startNode);
        console.log("DFS Order:", result.join(" -> "));
    }

    printGraph() {
        for (let vertex in this.adjacencyList) {
            console.log(`${vertex} => ${this.adjacencyList[vertex].join(", ")}`);
        }
    }
} // <--- THE CLASS ENDS HERE

// NOW DEFINE THE FUNCTION OUTSIDE THE CLASS
function runGraphTest() {
    console.clear(); 
    console.log("--- UNDIRECTED GRAPH TEST ---");

    const myNetwork = new Graph(false); 
    myNetwork.addEdge("A", "B");
    myNetwork.addEdge("A", "C");
    myNetwork.addEdge("B", "D");
    myNetwork.addEdge("C", "E");

    console.log("Graph Structure:");
    myNetwork.printGraph();

    console.log("\n--- Traversal Results ---");
    myNetwork.bfs("A"); 
    myNetwork.dfs("A"); 
}