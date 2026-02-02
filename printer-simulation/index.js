const PrinterQueue = require('./PrinterQueue');

const officePrinter = new PrinterQueue();

// 1. Adding multiple print jobs
officePrinter.addJob("Engr. Amarachi", 15);
officePrinter.addJob("Zubairu", 5);
officePrinter.addJob("Crystal", 22);

// 2. View the queue
officePrinter.printQueue();

// 3. Process the first two jobs
officePrinter.processJob(); // Should process Amarachi
officePrinter.processJob(); // Should process Zubairu

// 4. Check the queue again
officePrinter.printQueue(); // Crystal should be remaining