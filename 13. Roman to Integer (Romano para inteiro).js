//Link da questão no LeetCode: https://leetcode.com/problems/roman-to-integer/

/**
 * @param {string} s
 * @return {number}
 */

const roman = {
    I:  1,
    IV: 4,
    V:  5,
    IX: 9,
    X:  10,
    XL: 40,
    L:  50,
    XC: 90,
    C:  100,
    CD: 400,
    D:  500,
    CM: 900,
    M:  1000
}

var romanToInt = function(s) {
    let tam = s.length
    let num = 0
    if(tam == 1) {
        return roman[s]        
    } else {
        for(let i = 0; i < tam; i++) {
            let char = s.charAt(i)
            let char2 = s.charAt(i+1) != '' ? s.charAt(i)+s.charAt(i+1) : false
            if(char2 in roman) {  //Retorna true se a propriedade existir e false caso contrário.
                num += roman[char2]
                i++
            } else {
                num += roman[char]
            }
        }
    }
    return num
}

console.log(romanToInt('MCMXCIV'))
