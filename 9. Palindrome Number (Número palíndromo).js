//Link da questão no LeetCode: https://leetcode.com/problems/palindrome-number/

/**
 * @param {number} x
 * @return {boolean}
 */

var isPalindrome = function(x) {
    let num = x.toString()   //Converte o número em string
    let num_invert = ''
    for(let i = num.length; i >= 0 ; i--) {
        num_invert +=  num.charAt(i)
    }
    if(num_invert == num) {
        return true
    } else {
        return false
    }
}

console.log(isPalindrome(121))