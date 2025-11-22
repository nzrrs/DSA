/**
 * 217. Contains Duplicate
 *
 * Given an integer array nums, return true if any value appears at least twice in the array,
 * and return false if every element is distinct.
 *
 * Example 1:
 * Input: nums = [1,2,3,1]
 * Output: true
 * Explanation: The element 1 occurs at the indices 0 and 3.
 *
 * Example 2:
 * Input: nums = [1,2,3,4]
 * Output: false
 * Explanation: All elements are distinct.
 *
 * Example 3:
 * Input: nums = [1,1,1,3,3,4,3,2,4,2]
 * Output: true
 *
 * Constraints:
 * 1 <= nums.length <= 10^5
 * -10^9 <= nums[i] <= 10^9
 *
 * LINK OF PROBLEM IN LEETCODE: https://leetcode.com/problems/contains-duplicate/
 */

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  let numsSet = new Set(nums);
  return numsSet.size !== nums.length;
};

// NOTES

/*

- Set doesn't have .length function instead it have .size 
- You need to pas nums directly || [...nums]


--- TIME AND SPACE COMPLEXITY NOTES

-> MY SOLUTION :

- Time complexity: O(n) — you go through each element once, adding/checking it in the set.

- Space complexity: O(n) — in the worst case (all elements distinct), the set stores all n elements.

-> BEST SOLUTION :

- Time complexity: O(n log n) because of sort

- Space complexity: O(1) if in-place

*/

nums.sort((a, b) => a - b);
for (let i = 1; i < nums.length; i++) {
  if (nums[i] === nums[i - 1]) return true;
}
return false;

// VIDEO SOLUTION (https://neetcode.io/solutions/contains-duplicate)

// SOLVED IN (22-11-2025)
