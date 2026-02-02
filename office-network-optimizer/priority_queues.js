class MinHeapPQ {
    constructor() {
        this.heap = [];
    }

    insert(edge) {
        this.heap.push(edge);
        this.bubbleUp(this.heap.length - 1);
    }

    bubbleUp(index) {
        while (index > 0) {
            let parentIndex = Math.floor((index - 1) / 2);
            // Compare based on the .cost property
            if (this.heap[index].cost >= this.heap[parentIndex].cost) break;
            [this.heap[index], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[index]];
            index = parentIndex;
        }
    }

    extractMin() {
        if (this.isEmpty()) return null;
        if (this.heap.length === 1) return this.heap.pop();
        
        const min = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.bubbleDown(0);
        return min;
    }

    bubbleDown(index) {
        while (true) {
            let left = 2 * index + 1;
            let right = 2 * index + 2;
            let smallest = index;

            if (left < this.heap.length && this.heap[left].cost < this.heap[smallest].cost) smallest = left;
            if (right < this.heap.length && this.heap[right].cost < this.heap[smallest].cost) smallest = right;
            if (smallest === index) break;

            [this.heap[index], this.heap[smallest]] = [this.heap[smallest], this.heap[index]];
            index = smallest;
        }
    }

    isEmpty() {
        return this.heap.length === 0;
    }
}

// Exported correctly for Node.js
module.exports = { MinHeapPQ };