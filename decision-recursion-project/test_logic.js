const { getTicketPrice, weatherAdviser } = require('./logic_tasks');
const { fibonacci, isPalindrome } = require('./recursion_tasks');

console.log("--- 🎟️ TICKET PRICING TESTS ---");
console.log(`Age 10: $${getTicketPrice(10)}`); // 10
console.log(`Age 15: $${getTicketPrice(15)}`); // 15
console.log(`Age 25: $${getTicketPrice(25)}`); // 20

console.log("\n--- 🌦️ WEATHER ADVISER TESTS ---");
console.log(weatherAdviser(10, true));  // Cold + Rain
console.log(weatherAdviser(30, false)); // Hot + No Rain

console.log("\n--- 🧬 RECURSION TESTS ---");
console.log(`Fibonacci(6): ${fibonacci(6)}`); // 8
console.log(`Palindrome 'Racecar': ${isPalindrome("Racecar")}`); // true
console.log(`Palindrome 'Hello': ${isPalindrome("Hello")}`);     // false