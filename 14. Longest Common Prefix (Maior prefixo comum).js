//Link da questão no LeetCode: https://leetcode.com/problems/longest-common-prefix/

/**
 * @param {string[]} strs
 * @return {string}
 */

var vetor = ["flower","flow","flight"]

var longestCommonPrefix = function(strs) {
    if(strs.length == 0) {
        return ""
    }

    let prefixo = strs[0]

    for(let i = 1; i < strs.length; i++) {     //Percorre todos os elementos/strings do vetor strs. 
        while(strs[i].indexOf(prefixo) !== 0) {     //Se retornar 0 é porque o prefixo foi encontrado em strs[i].
            prefixo = prefixo.substring(0, prefixo.length - 1)      //Retira o último caractere de prefixo.
            if(prefixo == "") {
                return prefixo
            }
        }
    }

    return prefixo
};

console.log(longestCommonPrefix(vetor))