// Task 01: Sequential Iteration
export async function iterateWithAsyncAwait(values) {
    for (const value of values) {
        await new Promise(resolve => setTimeout(resolve, 1000));
        console.log(value);
    }
}

// Task 02 & 03: API Call with Error Handling
export async function awaitCall() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
        if (!response.ok) throw new Error("API unreachable");
        const data = await response.json();
        console.log("Data:", data);
    } catch (error) {
        console.log("User-friendly Message: Connection failed. Please try again.");
    }
}

// Task 04: Concurrent Requests
export async function concurrentRequests() {
    try {
        const [res1, res2] = await Promise.all([
            fetch('https://jsonplaceholder.typicode.com/posts/1').then(r => r.json()),
            fetch('https://jsonplaceholder.typicode.com/posts/2').then(r => r.json())
        ]);
        console.log("Results:", { res1, res2 });
    } catch (error) {
        console.log("Concurrent Error:", error);
    }
}
