/** 
 * 49. Group Anagrams
 * 
 * 
 * Given an array of strings strs, group the anagrams together.
 * You can return the answer in any order.
 * 
 * 
 * LINK OF PROBLEM IN LEETCODE: (https://leetcode.com/problems/group-anagrams/)
    
*/
/* ---------------------- Solution 1: Sorting O(m * nlogn)---------------------- */

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let groups = {}
    strs.forEach(e =>{
        let key = e.split('').sort().join('')
        if(!groups[key]) groups[key] = [];
        return groups[key].push(e)
    })
    return Object.values(groups)
};

/* ---------------------- Solution 2: Using hashing O(n * k) ---------------------- */

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
    const res = {};

    for (let word of strs) {
        const freq = Array(26).fill(0);

        for (let ch of word) {
            freq[ch.charCodeAt(0) - 97]++;
        }

        const signature = freq.join('#');

        if (!res[signature]) res[signature] = [];
        res[signature].push(word);
    }

    return Object.values(res);
};

/* ---------------------- NOTES ----------------------

- Solution 1: Sort each word → use sorted string as key
- Solution 2: Count letter frequencies → use frequency array as key
- Object.values(groups) returns an array of grouped anagrams

----------------------- TIME AND SPACE -----------------------

-> SOLUTION 1 (Sorting):
- Time: O(m * n log n) where m = number of words, n = avg word length
- Space: O(m * n)

-> SOLUTION 2 (Frequency Hashing):
- Time: O(n * k) where n = number of words, k = max word length
- Space: O(n * k)

*/

// VIDEO SOLUTION (https://neetcode.io/solutions/group-anagrams)

// SOLVED IN: (25-11-2025)