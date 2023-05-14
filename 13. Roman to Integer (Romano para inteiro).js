//Link da questão no LeetCode: https://leetcode.com/problems/roman-to-integer/

/**
 * @param {string} s
 * @return {number}
 */

var roman = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
}

var romanToInt = function(s) {
    return roman[s]
}

console.log(romanToInt('C'))

