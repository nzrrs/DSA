/**
 * 167. Two Sum II – Input Array Is Sorted
 *
 * Given a 1-indexed array of integers `numbers` that is already sorted
 * in non-decreasing order, find two numbers such that they add up to
 * a specific target number.
 *
 * Return the indices of the two numbers (1-based index).
 * You may assume that each input has exactly one solution,
 * and you may not use the same element twice.
 *
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 *
 * LINK: https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/
 */

/* ---------------------- Solution: Two Pointers (O(n)) ---------------------- */
/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
  let left = 0;
  let right = numbers.length - 1;
  let sum = 0;
  while (left < right) {
    sum = numbers[right] + numbers[left];
    if (sum === target) return [left + 1, right + 1];
    sum > target ? right-- : left++;
  }
};

/* ---------------------- NOTES ----------------------


- The array is already sorted → this allows the two-pointer technique
- We place one pointer at the start (left) and one at the end (right)
- While left < right, the pointers move toward each other
- If the current sum is greater than the target:
  → the right value is too large, so we move the right pointer left
- If the current sum is smaller than the target:
  → the left value is too small, so we move the left pointer right
- Once the sum equals the target, we return the indices
- We return (index + 1) because the problem uses 1-based indexing

*/

// VIDEO SOLUTION: (https://www.youtube.com/watch?v=cQ1Oz4ckceM)

// SOLVED IN: (12-01-2026)
