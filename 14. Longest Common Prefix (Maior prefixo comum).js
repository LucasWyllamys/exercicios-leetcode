//Link da questão no LeetCode: https://leetcode.com/problems/longest-common-prefix/

/**
 * @param {string[]} strs
 * @return {string}
 */

const strs = ['flor','fluxo','voo']
const array_strs = strs.splice(',')

var longestCommonPrefix = function(strs) {
    let char = ''
    let new_array = []
    for(let i = 0; i < strs.length; i++) {
        for(let p = 0; p < strs[i].length; p++) {
            let char1 = strs[i].charAt(p)
            let char2 = strs[i+1].charAt(p)
            if(char1 == char2) {
                char += char1
            } else {
                break
            }
        }
        new_array.push(char)
    }
    return new_char
};

console.log(longestCommonPrefix(array_strs))