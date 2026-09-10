// Original array
const arr = [2, 4, 1, 3];

// Step 1: Build prefix sum array
const prefix = Array(arr.length);
prefix[0] = arr[0];
for (let i = 1; i < arr.length; i++) {
  prefix[i] = prefix[i - 1] + arr[i];
}

console.log("Prefix Sum:", prefix);
// Output: [2, 6, 7, 10]

// Step 2: Function to get sum of range i → j (inclusive)
function rangeSum(prefix, i, j) {
  if (i === 0) return prefix[j];
  return prefix[j] - prefix[i - 1];
}

// Example queries
console.log(rangeSum(prefix, 0, 2)); // 2+4+1 = 7
console.log(rangeSum(prefix, 1, 3)); // 4+1+3 = 8
console.log(rangeSum(prefix, 2, 3)); // 1+3 = 4
