/**
 * 347. Top K Frequent Elements
 *
 * Given an integer array nums and an integer k, return the k most frequent elements.
 * You may return the answer in any order.
 *
 * Example 1:
 * Input: nums = [1,1,1,2,2,3], k = 2
 * Output: [1,2]
 *
 * Example 2:
 * Input: nums = [1], k = 1
 * Output: [1]
 *
 * Example 3:
 * Input: nums = [1,2,1,2,1,2,3,1,3,2], k = 2
 * Output: [1,2]
 *
 * Constraints:
 * 1 <= nums.length <= 10^5
 * k is in the range [1, the number of unique elements in the array]
 * It is guaranteed that the answer is unique.
 *
 * LINK OF PROBLEM IN LEETCODE: (https://leetcode.com/problems/top-k-frequent-elements/)
 */

/* ---------------------- Solution 1: Sorting (O(n log n)) ---------------------- */
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  const frequency = new Map();

  // Count frequency of each number
  for (const num of nums) {
    frequency.set(num, (frequency.get(num) || 0) + 1);
  }

  // Sort by frequency descending and take top k
  return [...frequency.entries()]
    .sort((a, b) => b[1] - a[1])
    .slice(0, k)
    .map(([num]) => num);
};

/* ---------------------- Solution 2: Bucket Sort (O(n)) ---------------------- */
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  const frequency = new Map();

  // Count frequency of each number
  for (const num of nums) {
    frequency.set(num, (frequency.get(num) || 0) + 1);
  }

  // Create buckets where index = frequency
  const buckets = Array.from({ length: nums.length + 1 }, () => []);
  for (const [num, count] of frequency) {
    buckets[count].push(num);
  }

  const res = [];
  // Iterate from high frequency to low
  for (let i = buckets.length - 1; i > 0 && res.length < k; i--) {
    for (const num of buckets[i]) {
      res.push(num);
      if (res.length === k) break;
    }
  }

  return res;
};

/* ---------------------- NOTES ----------------------

-> Solution 1: Sort frequency map entries by count, then take top k

Algorithm:
1. Create a hash map to store the frequency of each number.
2. Build a list of [number, frequency] pairs from the map.
3. Sort this list in descending order based on frequency.
4. Initialize an empty result list.
5. Take the first k elements from the sorted list and append the number to the result.
6. Return the result list.

-> Solution 2: Bucket sort → index = frequency, iterate from high to low

Algorithm:
1. Build a frequency map that counts how many times each number appears.
2. Create a list of groups `buckets`, where `buckets[i]` stores all numbers that appear exactly i times.
3. For each number and its frequency, add the number to `buckets[frequency]`.
4. Initialize an empty result list.
5. Loop from the largest possible frequency down to 1:
   a. For each number in `buckets[i]`, add it to the result list.
   b. Once the result contains k numbers, return it.

- Sorting solution is simpler but O(n log n)
- Bucket sort is O(n) time and space

----------------------- TIME AND SPACE -----------------------

-> SOLUTION 1 (Sorting):
- Time: O(n log n)
- Space: O(n)

-> SOLUTION 2 (Bucket Sort):
- Time: O(n)
- Space: O(n)

*/

// VIDEO SOLUTION: (https://neetcode.io/solutions/top-k-frequent-elements)
// SOLVED IN: (26-11-2025)
