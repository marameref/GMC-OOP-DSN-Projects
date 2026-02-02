
---

# 🖨️ Office Printer Queue Simulator

This project simulates a real-world office environment where multiple employees share a single printer. It utilizes a **Queue** data structure to ensure that print jobs are handled fairly and efficiently, following the **FIFO (First-In-First-Out)** principle.

---

## 🗺️ Project Structure

To maintain clean code and modularity, the project is divided into the following files:

| File | Purpose |
| --- | --- |
| **`Queue.js`** | The base Data Structure class implementing `enqueue`, `dequeue`, `peek`, and `isEmpty`. |
| **`PrinterQueue.js`** | The simulation wrapper that manages specific "Print Job" objects (Name, Pages, Timestamp). |
| **`index.js`** | The test runner that simulates multiple employees sending jobs at once. |

---

## ⚙️ Core Logic: The FIFO Principle

In this simulation, the printer acts as a "Consumer" and the employees act as "Producers."

* **Enqueue (Add Job):** When Engr. Amarachi sends a 15-page document, it is added to the **back** of the line ( complexity).
* **Dequeue (Process Job):** The printer always takes the job from the **front** of the line, ensuring that whoever sent their file first gets their paper first.
* **Peek:** Allows the system to check which job is currently "Next" without removing it from the sequence.

---

## 🚀 How to Run the Simulation

1. Ensure you have **Node.js** installed on your MacBook Pro.
2. Open your terminal and navigate to the `printer-simulation-lab` folder.
3. Run the following command:
```bash
node index.js

```

---

## 📋 Sample Output

When you run the simulation, you will see a live log of the office activity:

```text
🖨️ Job Added: Engr. Amarachi is printing 15 pages.
🖨️ Job Added: Zubairu is printing 5 pages.
⏳ Processing: Printing 15 pages for Engr. Amarachi...
✅ Done: Engr. Amarachi's print job completed.

```

---

## 🎓 Author Information

**Engr. Amarachi Crystal Omereife** Software Engineering Student

📧 **Email:** [amarachiomereife@gmail.com](mailto:amarachiomereife@gmail.com)

📞 **Phone:** 08068590823

💻 **Stack:** JavaScript (ES6) | Node.js

---

### **Submission Checklist**

* [x] Functional `Queue` class implemented.
* [x] `PrinterQueue` handles job objects (name/pages).
* [x] Logic follows the FIFO principle.
* [x] Documentation includes all contact and project details.
