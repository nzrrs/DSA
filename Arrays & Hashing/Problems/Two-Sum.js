/**
 * 1. Two Sum
 *
 * Given an array of integers nums and an integer target,
 * return indices of the two numbers such that they add up to target.
 *
 * LINK OF PROBLEM IN LEETCODE: (https://leetcode.com/problems/two-sum/)
 */

/* ---------------------- Solution 1: Brute Force (O(n²)) ---------------------- */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
};

/* ---------------------- Solution 2: Hash Map (Two Pass) (O(n)) ---------------------- */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const map = new Map();

  nums.forEach((value, index) => map.set(value, index));

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];

    if (map.has(complement) && map.get(complement) !== i) {
      return [i, map.get(complement)];
    }
  }
};

/* ---------------------- NOTES ----------------------

-> BRUTE FORCE:
   Time: O(n²)
   Space: O(1)

   Intuition:
   We check every pair of different elements in the array and return the first pair
   that adds up to the target. Simple but not efficient.

   Algorithm:
   - Use two nested loops to try every pair.
   - If nums[i] + nums[j] == target → return [i, j].
   - Exactly one solution is guaranteed.

-> HASH MAP (Two Pass):
   Time: O(n)
   Space: O(n)

   Intuition:
   Store each value and its index in a hash map.
   Then check if the complement (target - nums[i]) exists at a different index.

   Algorithm:
   - First pass: fill the map with value → index.
   - Second pass: compute complement and check if it exists in map.
   - If yes → return the two indices.

*/

// VIDEO SOLUTION (https://neetcode.io/solutions/two-sum)

// SOLVED IN (23-11-2025)
