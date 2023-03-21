// https://leetcode.com/problems/thousand-separator/
// Given an integer n, add a dot (".") as the thousands separator and return it in string format.

 // Example 1:
// Input: n = 987
// Output: "987"

// Example 2:
// Input: n = 1234
// Output: "1.234"

// Constraints:
//     0 <= n <= 231 - 1

//take the number, and work backwards from the end to find a thousands spot every 3 digits
// create a custom i loop running backwards x 3
// slice in "." into the string

const thousandSeparator = (integer) => {
    const numsArr = integer.toString().split("")
    const ansArr = []
    let firstDigits = []
    if (numsArr.length % 3 == 0) {
        let firstDigits = numsArr.slice(0, 2)
    }
    else {
        let firstDigits = numsArr.slice(0, numsArr.length % 3)
    }
    console.log(firstDigits)
    if (numsArr.length <= 3) {
        return integer.toString()
    }
    else {
        for (let i = numsArr.length - 3; i >= 0; i -= 3) {
            console.log(i, numsArr.slice(i))
            ansArr.unshift(numsArr.slice(i, i + 3).join(""))
            ansArr.unshift(".")
        }
    ansArr.unshift(firstDigits)
    return ansArr.join("")
    }
}