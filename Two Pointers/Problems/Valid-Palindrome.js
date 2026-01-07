/**
 * 125. Valid Palindrome
 *
 * Given a string s, return true if it is a palindrome,
 * considering only alphanumeric characters and ignoring cases.
 *
 * Example 1:
 * Input: s = "A man, a plan, a canal: Panama"
 * Output: true
 *
 * Example 2:
 * Input: s = "race a car"
 * Output: false
 *
 * Example 3:
 * Input: s = " "
 * Output: true
 *
 * Constraints:
 * 1 <= s.length <= 2 * 10^5
 * s consists only of printable ASCII characters.
 *
 * LINK OF PROBLEM IN LEETCODE: (https://leetcode.com/problems/valid-palindrome/)
 */

/* ---------------------- Solution: Two Pointers (O(n)) ---------------------- */
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
    // Convert to lowercase & remove non-alphanumeric characters
    let filtered = s.toLowerCase().replace(/[^a-z\d]/g, '');

    // Initialize two pointers
    let left = 0;
    let right = filtered.length - 1;

    // Compare characters from both ends
    while (left < right) {
        if (filtered[left] !== filtered[right]) return false;
        left++;
        right--;
    }

    return true;
};

/* ---------------------- NOTES ----------------------

- Regex: /[^a-z\d]/g removes everything except letters & digits
- \d = [0-9]
- Two pointers: left starts at 0, right at end
- Use while(left < right) for comparing both ends
- Immediately return false on mismatch
- Return true if fully traversed without mismatch

----------------------- TIME AND SPACE -----------------------

-> Two Pointers Solution:
- Time: O(n) → traverse string once
- Space: O(n) → filtered string

*/

// VIDEO SOLUTION: (https://www.youtube.com/watch?v=jJXJ16kPFWg)

// SOLVED IN: (07-01-2026)
