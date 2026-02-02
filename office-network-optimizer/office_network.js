const { MinHeapPQ } = require('./priority_queues');

class PrimMST {
    constructor(numComputers) {
        this.numComputers = numComputers;
        this.adjList = new Map();
    }

    addConnection(u, v, cost) {
        if (!this.adjList.has(u)) this.adjList.set(u, []);
        if (!this.adjList.has(v)) this.adjList.set(v, []);
        this.adjList.get(u).push({ node: v, cost: cost });
        this.adjList.get(v).push({ node: u, cost: cost });
    }

    computeMST(startNode) {
        const mstEdges = [];
        let totalCost = 0;
        const visited = new Set();
        const minHeap = new MinHeapPQ();

        visited.add(startNode);
        this.addEdgesToHeap(startNode, minHeap, visited);

        while (!minHeap.isEmpty() && mstEdges.length < this.numComputers - 1) {
            const edge = minHeap.extractMin();

            if (visited.has(edge.to)) continue;

            mstEdges.push({ from: edge.from, to: edge.to, cost: edge.cost });
            totalCost += edge.cost;
            visited.add(edge.to);

            this.addEdgesToHeap(edge.to, minHeap, visited);
        }

        return { connections: mstEdges, totalCost: totalCost };
    }

    addEdgesToHeap(node, heap, visited) {
        const neighbors = this.adjList.get(node) || [];
        for (let neighbor of neighbors) {
            if (!visited.has(neighbor.node)) {
                heap.insert({ from: node, to: neighbor.node, cost: neighbor.cost });
            }
        }
    }
}

// Correctly placed outside the class
module.exports = { PrimMST };