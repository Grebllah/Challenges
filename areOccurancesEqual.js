// Given a string s, return true if s is a good string, or false otherwise.
// A string s is good if all the characters that appear in s have the same number of occurrences
// (i.e., the same frequency).

// Example 1:

// Input: s = "abacbc"
// Output: true
// Explanation: The characters that appear in s are 'a', 'b', and 'c'. All characters occur 2 times in s.

// Example 2:

// Input: s = "aaabb"
// Output: false
// Explanation: The characters that appear in s are 'a' and 'b'.

// Constraints:

//     1 <= s.length <= 1000
//     s consists of lowercase English letters.

//create tracking object
//loop through string
//if letter doesnt exist, add it to object with value 1
//if letter does exist, increment key value
//make array of all values
//return if all values are equal

const areOccurrencesEqual = string => {
    const trackingObject = {}
    
    for (i = 0; i < string.length; i++) {
        let key = string[i]
        if (!trackingObject[key]) trackingObject[key] = 1
        else trackingObject[key]++
    }

    const values = Object.values(trackingObject)

    return values.every((element) => element === values[0])
}


console.log(areOccurancesEqual("abacbc"))
console.log(areOccurancesEqual("aaabb"))