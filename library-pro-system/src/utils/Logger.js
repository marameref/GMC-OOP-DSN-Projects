export class Logger {
    log(message) {
        const timestamp = new Date().toLocaleTimeString();
        console.log(`🚀 [System Log ${timestamp}]: ${message}`);
    }

    error(message) {
        console.error(`❌ [System Error]: ${message}`);
    }
}
