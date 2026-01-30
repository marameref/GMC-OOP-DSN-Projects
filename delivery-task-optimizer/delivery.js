// GREEDY: O(n log n)
function greedySelect(tasks) {
    const sorted = [...tasks].sort((a, b) => a.end - b.end);
    const selected = [];
    let lastEnd = -1;
    for (const task of sorted) {
        if (task.start >= lastEnd) {
            selected.push(task);
            lastEnd = task.end;
        }
    }
    return selected;
}

// BRUTE FORCE: O(2^n) 
function bruteForceSelect(tasks) {
    let bestSet = [];
    const n = tasks.length;
    for (let i = 0; i < (1 << n); i++) {
        let subset = [];
        for (let j = 0; j < n; j++) {
            if ((i >> j) & 1) subset.push(tasks[j]);
        }
        if (isCompatible(subset) && subset.length > bestSet.length) {
            bestSet = subset;
        }
    }
    return bestSet;
}

function isCompatible(set) {
    for (let i = 0; i < set.length; i++) {
        for (let j = i + 1; j < set.length; j++) {
            if (set[i].start < set[j].end && set[j].start < set[i].end) return false;
        }
    }
    return true;
}

function runOptimizationTest() {
    console.clear();
    const sampleTasks = [
        { start: 1, end: 3 }, { start: 2, end: 5 }, { start: 4, end: 6 },
        { start: 6, end: 7 }, { start: 5, end: 9 }, { start: 8, end: 10 }
    ];

    console.log("✅ Validating Correctness...");
    console.log("Greedy Count:", greedySelect(sampleTasks).length);
    console.log("Brute Force Count:", bruteForceSelect(sampleTasks).length);

    console.log("\n⏱️ Performance Benchmark...");
    
    // Test Greedy with 10,000 tasks
    const largeInput = Array.from({length: 10000}, () => {
        let s = Math.random() * 100;
        return { start: s, end: s + (Math.random() * 10) };
    });
    
    let t0 = performance.now();
    greedySelect(largeInput);
    console.log(`Greedy (10,000 tasks): ${(performance.now() - t0).toFixed(4)}ms`);

    // Test Brute Force with only 20 tasks (anything higher will crash)
    const smallInput = largeInput.slice(0, 20);
    t0 = performance.now();
    bruteForceSelect(smallInput);
    console.log(`Brute Force (Only 20 tasks!): ${(performance.now() - t0).toFixed(4)}ms`);
}