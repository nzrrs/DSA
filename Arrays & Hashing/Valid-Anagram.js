/**
 * 242. Valid Anagram
 *
 * Given two strings s and t, return true if t is an anagram of s,
 * and return false otherwise.
 *
 * Example 1:
 * Input: s = "anagram", t = "nagaram"
 * Output: true
 *
 * Example 2:
 * Input: s = "rat", t = "car"
 * Output: false
 *
 * Constraints:
 * 1 <= s.length, t.length <= 5 * 10^4
 * s and t consist of lowercase English letters.
 *
 * LINK OF PROBLEM IN LEETCODE: (https://leetcode.com/problems/valid-anagram/)
 * 
 */

/* ---------------------- Solution 1: Hash Map (O(n)) ---------------------- */
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
    // If lengths differ → impossible to be anagrams
    if (s.length !== t.length) return false;

    const map = new Map();

    // Count chars of s
    for (const char of s) {
        map.set(char, (map.get(char) || 0) + 1);
    }

    // Reduce using chars of t
    for (const char of t) {
        if (!map.get(char)) return false; // missing or zero count
        map.set(char, map.get(char) - 1);
    }

    // All counts balanced
    return true;
};

/* ---------------------- Solution 2: Sorting (O(n log n)) ---------------------- */
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
    // Quick length check
    if (s.length !== t.length) return false;

    // Sort and compare
    const sortedS = s.split('').sort().join('');
    const sortedT = t.split('').sort().join('');

    return sortedS === sortedT;
};

/* ---------------------- NOTES ----------------------

--- TIME AND SPACE COMPLEXITY NOTES ---

-> SOLUTION 1 (Hash Map):
- Time: O(n)
- Space: O(n)

-> SOLUTION 2 (Sorting):
- Time: O(n log n)
- Space: O(1) if sort is in-place

*/

// VIDEO SOLUTION (https://neetcode.io/solutions/valid-anagram)

// SOLVED IN (22-11-2025)
