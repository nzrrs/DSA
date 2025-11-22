// ===================== Hashing Usage Examples =====================

// 1 Fast Lookup using Map
const map = new Map();
map.set("user1", { name: "Alice" });
console.log("Map has user1:", map.has("user1")); // true

// 2 Counting / Frequency using Object
const arr = ["a", "b", "a", "c", "b"];
const freq = {};
arr.forEach(x => freq[x] = (freq[x] || 0) + 1);
console.log("Frequency count:", freq); // { a: 2, b: 2, c: 1 }

// 3 Removing duplicates using Set
const nums = [1, 2, 2, 3, 3, 4];
const uniqueNums = [...new Set(nums)];
console.log("Unique numbers:", uniqueNums); // [1, 2, 3, 4]

// 4  Grouping items by a property
const users = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 25 },
  { name: "Charlie", age: 30 }
];
const groups = {};
users.forEach(u => {
  if (!groups[u.age]) groups[u.age] = [];
  groups[u.age].push(u.name);
});
console.log("Grouped by age:", groups); // { '25': ['Alice','Bob'], '30': ['Charlie'] }

// 5 Caching / Memoization
const fibCache = {};
function fib(n) {
  if (n <= 1) return n;
  if (fibCache[n]) return fibCache[n]; // return cached value
  fibCache[n] = fib(n - 1) + fib(n - 2); // store in cache
  return fibCache[n];
}
console.log("Fib(10):", fib(10)); // 55

// 6 Detecting pairs with sum using Set
const numbers = [1, 2, 3, 4];
const seen = new Set();
for (let n of numbers) {
  if (seen.has(5 - n)) {
    console.log(`Pair with sum 5: ${n}, ${5 - n}`);
  }
  seen.add(n);
}
// Output: Pair with sum 5: 3,2 and Pair with sum 5: 4,1
