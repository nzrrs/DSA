/**
 * 128. Longest Consecutive Sequence
 *
 * Given an unsorted array of integers nums, return the length of the
 * longest consecutive elements sequence.
 *
 * You must write an algorithm that runs in O(n) time.
 *
 * LINK OF PROBLEM IN LEETCODE:
 * https://leetcode.com/problems/longest-consecutive-sequence/
 */

/* ---------------------- Solution 1: HashSet + Sequence Start Detection ---------------------- */

var longestConsecutive = function (nums) {
    let uniqueSet = new Set(nums);
    let longest = 0;

    for (const number of uniqueSet) {
        // Start counting only if number is the beginning of a sequence
        if (!uniqueSet.has(number - 1)) {
            let current = number;
            let length = 1;

            // Count consecutive numbers forward
            while (uniqueSet.has(current + 1)) {
                current++;
                length++;
            }

            longest = Math.max(longest, length);
        }
    }

    return longest;
};

/* ---------------------- NOTES ----------------------

-> Core Idea:
-- Use a Set for O(1) lookups.
-- Only start counting when the number has no predecessor (number - 1).
-- Walk forward to count the full sequence.

-> Why it works:
-- Each number is visited at most once.
-- No sorting is used.

-> Time Complexity:
-- O(n) — each element processed once.

-> Space Complexity:
-- O(n) — Set storage.

-> Common Mistake:
-- Starting the count from every number instead of only sequence starts.

*/

// SOLVED IN: (19-12-2025)
