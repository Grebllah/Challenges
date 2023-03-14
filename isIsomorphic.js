// // https://leetcode.com/problems/isomorphic-strings/

// Given two strings s and t, determine if they are isomorphic.
// Two strings s and t are isomorphic if the characters in s can be replaced to get t.
// All occurrences of a character must be replaced with another character while preserving the order of characters.
// No two characters may map to the same character, but a character may map to itself.

// Example 1:
// Input: s = "egg", t = "add"
// Output: true

// Example 2:
// Input: s = "foo", t = "bar"
// Output: false

// Example 3:
// Input: s = "paper", t = "title"
// Output: true

 // Constraints:
//     1 <= s.length <= 5 * 104
//     t.length == s.length
//     s and t consist of any valid ascii character.

// plan:
// create an object with all the letters in the strings, and the number of each letter contained in the string
// for each letter that is a singleton, designate that letter '1'
// do so for every letter in the string, until the string now consists of numbers ('title' becomes '21211' e.g.)
// if the converted s and t number strings are the same, the strings are isomorphic

const isIsomorphic = (s, t) => {
    const trackingObject = {}
    let count = 0
    for (i = 0; i < s.length; i++) {
        let key = s[i]
        count++
        trackingObject[key] = [count]
    }
    let spreadString = [...s]
    let convertedString = spreadString.map((letter) => trackingObject[letter])

    
    const trackingObject2 = {}
    count = 0
    for (i = 0; i < t.length; i++) {
        let key2 = t[i]
        count++
        trackingObject2[key2] = [count]
    }
    let spreadString2 = [...t]
    let convertedString2 = spreadString2.map((letter) => trackingObject2[letter])

    console.log("tracking objects", trackingObject, trackingObject2, "mapped strings", convertedString, convertedString2)
    
    return convertedString.join("") === convertedString2.join("")
}