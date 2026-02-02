const { ArrayQueue, LinkedListQueue } = require('./queue_structures');
const { MinHeapPQ } = require('./priority_queues');

console.log("--- Testing Basic Queues ---");
const aq = new ArrayQueue(3);
aq.enqueue("Task 1"); aq.enqueue("Task 2");
console.log("Array Dequeue:", aq.dequeue()); // Task 1

const lq = new LinkedListQueue();
lq.enqueue("Web 1"); lq.enqueue("Web 2");
console.log("Linked List Peek:", lq.peek()); // Web 1

console.log("\n--- Testing Min-Heap Priority Queue ---");
const hpq = new MinHeapPQ();
hpq.insert(50); hpq.insert(10); hpq.insert(30);
console.log("Min Priority (should be 10):", hpq.extractMin()); 
console.log("Next Priority (should be 30):", hpq.extractMin());