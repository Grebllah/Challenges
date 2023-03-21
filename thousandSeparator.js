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
         firstDigits = ""
    }
    else {
         firstDigits = numsArr.slice(0, numsArr.length % 3).join("")
    }
    if (numsArr.length <= 3) {
        return integer.toString()
    }
    else {
        for (let i = numsArr.length - 3; i >= 0; i -= 3) {
            ansArr.unshift(numsArr.slice(i, i + 3).join(""))
            ansArr.unshift(".")
        }
    if (firstDigits) {
        ansArr.unshift(firstDigits)
        return ansArr.join("")
        }
    else {
        return ansArr.join("").slice(1)
        }
    }
}
console.log(thousandSeparator(123456789))

