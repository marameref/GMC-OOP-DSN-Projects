import { iterateWithAsyncAwait, awaitCall, concurrentRequests } from './tasks.js';

const startCheckpoint = async () => {
    console.log("--- Starting Task 01 ---");
    await iterateWithAsyncAwait(["A", "B", "C"]);

    console.log("\n--- Starting Task 02/03 ---");
    await awaitCall();

    console.log("\n--- Starting Task 04 ---");
    await concurrentRequests();
};

startCheckpoint();
