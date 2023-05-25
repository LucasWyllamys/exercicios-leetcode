//Link da questão no LeetCode: https://leetcode.com/problems/longest-common-prefix/

/**
 * @param {string[]} strs
 * @return {string}
 */

var strs = ["flower","flow","flight"]

var longestCommonPrefix = function(strs) {
    let pref = 'fl'
    let teste = strs[0].indexOf('fl')
    return teste
}

console.log(longestCommonPrefix(strs))