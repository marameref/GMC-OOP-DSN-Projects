const Queue = require('./Queue');

class PrinterQueue {
    constructor() {
        this.queue = new Queue();
    }

    // Accept print jobs (name and pages)
    addJob(employeeName, pages) {
        const job = { employeeName, pages, timestamp: new Date().toLocaleTimeString() };
        this.queue.enqueue(job);
        console.log(`🖨️ Job Added: ${employeeName} is printing ${pages} pages.`);
    }

    // Process jobs one by one (FIFO)
    processJob() {
        if (this.queue.isEmpty()) {
            console.log("⚠️ No jobs in the printer queue.");
            return;
        }

        const currentJob = this.queue.dequeue();
        console.log(`⏳ Processing: Printing ${currentJob.pages} pages for ${currentJob.employeeName}...`);
        console.log(`✅ Done: ${currentJob.employeeName}'s print job completed.`);
    }

    // View current status
    printQueue() {
        if (this.queue.isEmpty()) {
            console.log("📢 The printer queue is currently empty.");
        } else {
            console.log("\n--- Current Printer Queue ---");
            this.queue.items.forEach((job, index) => {
                console.log(`${index + 1}. ${job.employeeName} (${job.pages} pages)`);
            });
            console.log("-----------------------------\n");
        }
    }
}

module.exports = PrinterQueue;