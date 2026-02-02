class Queue {
    constructor() {
        this.items = [];
    }

    // Add a job to the back of the queue (O(1))
    enqueue(element) {
        this.items.push(element);
    }

    // Remove the job from the front (O(n) in array, O(1) in linked list)
    dequeue() {
        if (this.isEmpty()) return "Underflow";
        return this.items.shift();
    }

    // Look at the next job without removing it (O(1))
    peek() {
        if (this.isEmpty()) return null;
        return this.items[0];
    }

    isEmpty() {
        return this.items.length === 0;
    }

    size() {
        return this.items.length;
    }
}

module.exports = Queue;