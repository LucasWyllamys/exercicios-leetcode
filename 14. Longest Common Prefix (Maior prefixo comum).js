//Link da questão no LeetCode: https://leetcode.com/problems/longest-common-prefix/

/**
 * @param {string[]} strs
 * @return {string}
 */

var strs = ["flower","flow","flight"]

var longestCommonPrefix = function(strs) {
    if(strs.length === 0) {
        return ""
    }

    let prefixo = strs[0]

    for(let i = 1; i < strs.length; i++) { //Percorre os elementos do vetor.
        while(strs[i].indexOf(prefixo) !== 0) {
            prefixo = prefixo.substring(0, prefixo.length - 1)
            if(prefixo ==="") {
                return ""
            }
        }
    }

    return prefixo
}

console.log(longestCommonPrefix(strs))