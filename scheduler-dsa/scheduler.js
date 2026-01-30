class TaskScheduler {
    constructor() {
        this.tasks = [];
    }

    // 1. Add Task
    addTask(name, start, end, priority) {
        this.tasks.push({ name, start, end, priority });
    }

    // 2. Sort Tasks by Start Time - O(n log n)
    sortTasks() {
        this.tasks.sort((a, b) => a.start - b.start);
        return this.tasks;
    }

    // 3. Group by Priority using a Hash Map - O(n)
    groupByPriority() {
        const priorityMap = {};
        this.tasks.forEach(task => {
            if (!priorityMap[task.priority]) {
                priorityMap[task.priority] = [];
            }
            priorityMap[task.priority].push(task);
        });
        return priorityMap;
    }

    // 4. Detect Overlapping Tasks - O(n) after sorting
    getOverlaps() {
        this.sortTasks(); 
        const overlaps = [];
        for (let i = 0; i < this.tasks.length - 1; i++) {
            let current = this.tasks[i];
            let next = this.tasks[i + 1];
            if (next.start < current.end) {
                overlaps.push({
                    task1: current.name,
                    task2: next.name,
                    period: `Conflict: ${next.name} starts at ${next.start} while ${current.name} is still running until ${current.end}`
                });
            }
        }
        return overlaps;
    }

    // THIS MUST BE INSIDE THE CLASS BRACKETS
    estimateMemory() {
        const numTasks = this.tasks.length;
        const estimatedBytes = numTasks * 125; 
        console.log(`📊 Estimated Memory Usage: ${estimatedBytes} bytes for ${numTasks} tasks.`);
    }
} // <--- The class ends here

// --- TRIGGER FUNCTION FOR HTML ---
function runSchedulerTest() {
    console.clear();
    const myScheduler = new TaskScheduler();

    myScheduler.addTask("Email Review", 9, 10, "Medium");
    myScheduler.addTask("Dev Meeting", 9.30, 11, "High");
    myScheduler.addTask("Coding Session", 12, 14, "High");
    myScheduler.addTask("Quick Call", 13.30, 14.30, "Low");

    console.log("📅 Sorted Tasks:", myScheduler.sortTasks());
    console.log("🏷️ Grouped by Priority:", myScheduler.groupByPriority());
    console.log("⚠️ Overlapping Tasks:", myScheduler.getOverlaps());
    
    // Call the memory estimator too!
    myScheduler.estimateMemory();
}