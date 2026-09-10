/** 
 * 659. Encode and Decode Strings
 * 
 * 
 * Design an algorithm to encode a list of strings to a single string. 
 * The encoded string is then decoded back to the original list of strings.
 * 
 * 
 * LINK OF PROBLEM IN LEETCODE: (https://neetcode.io/problems/string-encode-and-decode/question)
    
*/
/* ---------------------- Solution 1: ---------------------- */

class Solution {
  /**
   * @param {string[]} strs
   * @returns {string}
   */
  encode(strs) {
    let res = "";
    for (let s of strs) {
      res += s.length + "#" + s; // "ex: 5#hello5#world"
    }
    return res;
  }

  /**
   * @param {string} str
   * @returns {string[]}
   */
  decode(str) {
    let res = []; // Result array
    let i = 0; // starting index for while loop
    while (i < str.length) { 
      let j = i;  // Because we dont know yet if i is (1,23,99...)
      while (str[j] !== "#") j++; // We keep adding 1 until we find that str[j] === '#'

      let length = Number(str.slice(i, j)); // slice from the index of i until # (not included) and then convert to number

      let wordStart = j + 1; // starting from index of "#" + 1
      let wordEnd = j + 1 + length; // index of j + 1 so we start at the first letter of our word + length of the actual word
      res.push(str.slice(wordStart, wordEnd)); 
      i = wordEnd; // making index of i start from the end of our word so we move to the next word
    }
    return res;
  }
}

/* ---------------------- Solution 2: ---------------------- */

class Solution {
  /**
   * @param {string[]} strs
   * @returns {string}
   */
  encode(strs) {
    return JSON.stringify(strs);
  }

  /**
   * @param {string} str
   * @returns {string[]}
   */
  decode(str) {
    return JSON.parse(str);
  }
}

/* ---------------------- NOTES ----------------------



----------------------- TIME AND SPACE -----------------------

-> SOLUTION 1: Length-Prefix (length + "#" + string)

-- Time Complexity:

Encode: O(n) — iterate through all strings and their characters.

Decode: O(n) — scan through the encoded string once, extract each word.

-- Space Complexity:

O(n) — the resulting encoded string (or decoded array) requires space proportional to the total characters.

-- Notes:

Works for any string, including empty strings or strings containing #.

Slightly more code, but fully safe for arbitrary strings.

->SOLUTION 2: JSON.stringify / JSON.parse

-- Time Complexity:

Encode: O(n) — JSON.stringify iterates over all strings.

Decode: O(n) — JSON.parse iterates over the string to reconstruct the array.

-- Space Complexity:

O(n) — the JSON string can be slightly longer than Solution 1 due to quotes, commas, and brackets.

Decoded array also requires O(n) space.

-- Notes:

Extremely simple and safe.

Handles any string characters automatically.

Slightly less efficient in space than length-prefix because of JSON overhead.

*/

// VIDEO SOLUTION (https://neetcode.io/problems/string-encode-and-decode/solution)

// SOLVED IN: (12-12-2025)
