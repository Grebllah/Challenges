// https://leetcode.com/problems/ransom-note/

// Given two strings ransomNote and magazine,
// return true if ransomNote can be constructed by using the letters from magazine and false otherwise.
// Each letter in magazine can only be used once in ransomNote.

// Example 1:
// Input: ransomNote = "a", magazine = "b"
// Output: false

// Example 2:
// Input: ransomNote = "aa", magazine = "ab"
// Output: false

// Example 3:
// Input: ransomNote = "aa", magazine = "aab"
// Output: true

// Constraints:
//     1 <= ransomNote.length, magazine.length <= 105
//     ransomNote and magazine consist of lowercase English letters.

const canConstruct = (ransomNote, magazine) => {
    let sortedNote = ransomNote.split("").sort()
    let sortedMag = magazine.split("").sort()
    const magObject = {}
    for (i = 0; i < sortedMag.length; i++) {
        let key = sortedMag[i]
        if (!magObject[key]) magObject[key] = 1
        else magObject[key]++
    }
    const magLetters = Object.entries(magObject)
    let currentLetter = ""
    for (let i = 0; i < sortedNote.length; i++) {
        currentLetter = sortedNote[i]
            if (magObject[currentLetter]) {
                magObject[currentLetter]--
            } else {
                console.log("false")
                return false
            }
        }
    console.log("true")
    return true
}
canConstruct("dsfdsfdppsfsdf", "dsafdsfasdfadsfasdfsdfsdf")