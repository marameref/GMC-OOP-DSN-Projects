# Delivery Platform Backend Optimization

## 📊 Overview
This project compares two algorithmic strategies for the **Activity Selection Problem**: selecting the maximum number of non-overlapping delivery tasks.

## ⚙️ Algorithms Compared
1. **Greedy Strategy**: Sorts tasks by end time. Always selects the task that finishes earliest.
   - **Time Complexity**: $O(n \log n)$
   - **Space Complexity**: $O(n)$
2. **Brute-Force Strategy**: Explores every possible combination of tasks.
   - **Time Complexity**: $O(2^n \cdot n^2)$
   - **Space Complexity**: $O(n)$

## 📈 Performance Analysis
- **Small Inputs**: Both algorithms return the same optimal result (4 tasks for the sample input).
- **Large Inputs**: The Greedy algorithm processed **10,000 tasks** in under **5ms**. The Brute-Force algorithm took significantly longer to process just **20 tasks**. 
- **Scalability**: Brute-Force is unusable for real-world data ($n > 25$), while Greedy handles thousands of tasks per second effortlessly.

## 🏆 Recommendation
I recommend the **Greedy Algorithm** for the production backend. 
- **Why?** It is mathematically optimal for this problem, extremely fast, and maintains a low memory footprint. 
- **Maintenance**: The code is concise (approx. 10 lines) and easily understood by other engineers.