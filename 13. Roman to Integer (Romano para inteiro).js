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
    let tam = s.length
    for(let i = 0; i < tam; i++) {     //Percorre todos os caracteres de s.
        console.log(s.charAt(i))
    }

    for(let i in roman) {
        let num = roman[i]
        num++
    }
    return num
}

console.log(romanToInt("ILV"))

