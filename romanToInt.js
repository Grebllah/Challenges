// https://leetcode.com/problems/roman-to-integer/
 
//  Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

// Symbol       Value
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000

// For example, 2 is written as II in Roman numeral, just two ones added together.
// 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.

// Roman numerals are usually written largest to smallest from left to right. However,
// the numeral for four is not IIII. Instead, the number four is written as IV.
// Because the one is before the five we subtract it making four.
// The same principle applies to the number nine, which is written as IX.
// There are six instances where subtraction is used:
//     I can be placed before V (5) and X (10) to make 4 and 9. 
//     X can be placed before L (50) and C (100) to make 40 and 90. 
//     C can be placed before D (500) and M (1000) to make 400 and 900.
// Given a roman numeral, convert it to an integer.

// Example 1:
// Input: s = "III"
// Output: 3
// Explanation: III = 3.

// Example 2:
// Input: s = "LVIII"
// Output: 58
// Explanation: L = 50, V= 5, III = 3.

// Example 3:
// Input: s = "MCMXCIV"
// Output: 1994
// Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.

// Constraints:
//     1 <= s.length <= 15
//     s contains only the characters ('I', 'V', 'X', 'L', 'C', 'D', 'M').
//     It is guaranteed that s is a valid roman numeral in the range [1, 3999].
// plan:
// create a loop that works from the end backwards, with the following rules:
// if the number preceding it is *not* larger than it

const romanToInt = (s) => {
    const answerArr = []
    const romanValue = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    }
    for (let i = s.length - 1; i >= 0; i--) {
        let currentNum = romanValue[s[i]]
        let previousNum = romanValue[s[i - 1]]
        let nextNum = romanValue[s[i + 1]]
        let numeral = currentNum - previousNum
        let altNumeral = currentNum - nextNum
        if (numeral > 0) {
            answerArr.push(numeral)
        } else if ((numeral <= 0) && (altNumeral >= 0)) {
            answerArr.push(currentNum)
        } else if ((numeral < 0) && (altNumeral < 0)) {
            continue
        } else if ((!numeral) && (numeral != 0)) {
            if (currentNum < nextNum) continue
            else if (currentNum >= nextNum) answerArr.push(currentNum)
        } else if ((!altNumeral) && (altNumeral != 0)) {
            if (currentNum > previousNum) answerArr.push(numeral)
            else if (currentNum <= previousNum) answerArr.push(currentNum)
        }
    }
    return answerArr.reduce((a, b) => a += b)
}

// s.length digit: checks if it is modified by the previousNum, then adds to the total
// second to last -> second digits: check if the num is modified by previousNum, then add to total
// for these two categories: 3 options
    // numeral is positive: digit is being modified, take 'numeral' and push that
    // numeral is negative or 0, altNumeral is positive or 0: push 'currentNum'
    // numeral and altNumeral are negative: continue without pushing
// first digit: check to see if the number is modifying nextNum, then either push 'currentNum' or continue   