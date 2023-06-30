//Link da questão no LeetCode: https://leetcode.com/problems/valid-parentheses/
/*
Example 1:

Input: s = "()"
Output: true
Example 2:

Input: s = "()[]{}"
Output: true
Example 3:

Input: s = "(]"
Output: false
*/

/**
 * @param {string} s
 * @return {boolean}
 */

var isValid = function(s) {
    let vet = []
    for(let i = 0; i <= s.length; i++) {
        if(s[i] == '(') {
            vet.push(')')
        }
    }
}

console.log(isValid("()[]{}"))

