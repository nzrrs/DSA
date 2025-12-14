/** 
 * 238. Product of Array Except Self
 *
 * Given an integer array nums, return an array result such that result[i] is equal
 * to the product of all the elements of nums except nums[i].
 * You cannot use division and should aim for O(n) time complexity.
 *
 * LINK OF PROBLEM IN LEETCODE: (https://leetcode.com/problems/product-of-array-except-self/)
*/

/* ---------------------- Solution 1: Prefix-Suffix Optimized ---------------------- */

var productExceptSelf = function (nums) {
    let n = nums.length;
    let result = new Array(n).fill(1);

    // PREFIX: multiply all numbers before i
    let prefix = 1;
    for (let i = 0; i < n; i++) {
        result[i] = prefix;    // store product of elements before i
        prefix *= nums[i];     // update prefix product
    }

    // SUFFIX: multiply all numbers after i
    let suffix = 1;
    for (let i = n - 1; i >= 0; i--) {
        result[i] *= suffix;   // multiply by product of elements after i
        suffix *= nums[i];     // update suffix product
    }

    return result;
};

/* ---------------------- Solution 2: Prefix and Suffix Arrays ---------------------- */

var productExceptSelf = function (nums) {
    let n = nums.length;
    let result = new Array(n).fill(1);
    let prefix = new Array(n).fill(1);
    let suffix = new Array(n).fill(1);

    // Compute prefix products: product of elements before i
    for (let i = 1; i < n; i++) {
        prefix[i] = nums[i-1] * prefix[i-1];
    }

    // Compute suffix products: product of elements after i
    for (let i = n-2; i >= 0; i--) {
        suffix[i] = nums[i+1] * suffix[i+1];
    }

    // Multiply prefix and suffix for final result
    for (let i = 0; i < n; i++) {
        result[i] = prefix[i] * suffix[i];
    }

    return result;
};

/* ---------------------- Solution 3: Brute Force using filter + reduce ---------------------- */

var productExceptSelf = function (nums) {
  let result = [];
  for (let i = 0; i < nums.length; i++) {
    // Get all elements except nums[i]
    let current = nums.filter((ele, idx) => idx !== i);

    // Multiply them
    let product = current.reduce((acc, curr) => acc * curr, 1);

    // Add product to result array
    result.push(product);
  }
  return result;
};

/* ---------------------- NOTES ----------------------

-> SOLUTION 1: Prefix-Suffix Optimized
-- Time Complexity: O(n) — two linear passes through array.
-- Space Complexity: O(1) extra space (ignoring output array).
-- Notes: Most efficient for large arrays. Uses result array to store prefix and multiplies suffix on the fly.

-> SOLUTION 2: Prefix and Suffix Arrays
-- Time Complexity: O(n) — three linear passes.
-- Space Complexity: O(n) — two extra arrays for prefix and suffix.
-- Notes: Easy to understand but uses extra space.

-> SOLUTION 3: Brute Force (filter + reduce)
-- Time Complexity: O(n²) — nested operations for each element.
-- Space Complexity: O(n) — result array plus temporary filtered arrays.
-- Notes: Simple, works for small arrays. Too slow for large input sizes.

*/

// VIDEO SOLUTION : https://neetcode.io/solutions/product-of-array-except-self
// SOLVED IN: (14-12-2025)
