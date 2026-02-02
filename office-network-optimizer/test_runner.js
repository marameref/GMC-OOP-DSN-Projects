const { MinHeapPQ } = require('./priority_queues');
const { PrimMST } = require('./office_network');

console.log("--- Starting Office Optimizer Tests ---");

// 1. Test Min-Heap with Objects
const pq = new MinHeapPQ();
pq.insert({ cost: 100 });
pq.insert({ cost: 10 });
pq.insert({ cost: 50 });

const min = pq.extractMin();
if (min && min.cost === 10) {
    console.log("✅ Min-Heap: Success");
} else {
    console.log("❌ Min-Heap: Failed");
}

// 2. Test Prim's Algorithm
const office = new PrimMST(3);
office.addConnection('A', 'B', 5);
office.addConnection('B', 'C', 10);
office.addConnection('A', 'C', 2);

const result = office.computeMST('A');

console.log("\n--- MST Result ---");
console.log("Total Cost:", result.totalCost);
console.log("Connections Count:", result.connections.length);

if (result.totalCost === 7 && result.connections.length === 2) {
    console.log("✅ Office Optimizer: MST Logic Correct!");
} else {
    console.log("❌ Office Optimizer: Logic Error (Cost was " + result.totalCost + ")");
}