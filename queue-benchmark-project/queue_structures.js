// Array-based Queue (Fixed Size)
class ArrayQueue {
    constructor(size) {
        this.queue = new Array(size);
        this.maxSize = size;
        this.head = 0;
        this.tail = 0;
        this.count = 0;
    }
    enqueue(element) {
        if (this.count === this.maxSize) return "Queue Overflow";
        this.queue[this.tail] = element;
        this.tail = (this.tail + 1) % this.maxSize;
        this.count++;
    }
    dequeue() {
        if (this.isEmpty()) return "Queue Underflow";
        let item = this.queue[this.head];
        this.head = (this.head + 1) % this.maxSize;
        this.count--;
        return item;
    }
    peek() { return this.isEmpty() ? null : this.queue[this.head]; }
    isEmpty() { return this.count === 0; }
}

// Linked List-based Queue (Dynamic Size)
class Node { constructor(val) { this.val = val; this.next = null; } }
class LinkedListQueue {
    constructor() { this.front = this.rear = null; }
    enqueue(element) {
        let newNode = new Node(element);
        if (!this.rear) { this.front = this.rear = newNode; return; }
        this.rear.next = newNode; this.rear = newNode;
    }
    dequeue() {
        if (this.isEmpty()) return "Queue Underflow";
        let temp = this.front; this.front = this.front.next;
        if (!this.front) this.rear = null;
        return temp.val;
    }
    peek() { return this.isEmpty() ? null : this.front.val; }
    isEmpty() { return this.front === null; }
}

module.exports = { ArrayQueue, LinkedListQueue };