/**
 * 217. Contains Duplicate
 *
 * Given an integer array nums, return true if any value appears at least twice in the array,
 * and return false if every element is distinct.
 *
 * Example 1:
 * Input: nums = [1,2,3,1]
 * Output: true
 *
 * Example 2:
 * Input: nums = [1,2,3,4]
 * Output: false
 *
 * Example 3:
 * Input: nums = [1,1,1,3,3,4,3,2,4,2]
 * Output: true
 *
 * Constraints:
 * 1 <= nums.length <= 10^5
 * -10^9 <= nums[i] <= 10^9
 *
 * LINK OF PROBLEM IN LEETCODE: (https://leetcode.com/problems/contains-duplicate/)
 */

/* ---------------------- Solution 1: Set (O(n)) ---------------------- */
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  // Create a Set → removes duplicates automatically
  const numsSet = new Set(nums);

  // If sizes differ → duplicates exist
  return numsSet.size !== nums.length;
};

/* ---------------------- Solution 2: Sorting (O(n log n)) ---------------------- */
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  // Sort numbers in ascending order
  nums.sort((a, b) => a - b);

  // Check adjacent values for duplicates
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] === nums[i - 1]) return true;
  }

  return false;
};

/* ---------------------- NOTES ----------------------

- Set uses .size instead of .length
- Pass nums directly: new Set(nums)
- Spread also works: new Set([...nums])

----------------------- TIME AND SPACE -----------------------

-> SOLUTION 1 (Set):
- Time: O(n)
- Space: O(n)

-> SOLUTION 2 (Sorting):
- Time: O(n log n)
- Space: O(1) if sort is in-place

*/

// VIDEO SOLUTION: (https://neetcode.io/solutions/contains-duplicate)

// SOLVED IN: (22-11-2025)
