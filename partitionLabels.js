// https://leetcode.com/problems/partition-labels/
// You are given a string s. We want to partition the string into as many parts as possible so that each letter
// appears in at most one part.
// Note that the partition is done so that after concatenating all the parts in order, the resultant string should be
// s.
// Return a list of integers representing the size of these parts. 

// Example 1:
// Input: s = "ababcbacadefegdehijhklij"
// Output: [9,7,8]
// Explanation:
// The partition is "ababcbaca", "defegde", "hijhklij".
// This is a partition so that each letter appears in at most one part.
// A partition like "ababcbacadefegde", "hijhklij" is incorrect, because it splits s into less parts.

// Example 2:
// Input: s = "eccbbbbdec"
// Output: [10]

// Constraints:
//     1 <= s.length <= 500
//     s consists of lowercase English letters.

const partitionLabels = (s) => {
    const letterTrackingObject = {}
    let currentEndPos = 0
    const answerArray = []
    for (i = 0; i < s.length; i++) {
        let key = s[i]
        if (!letterTrackingObject[key]) letterTrackingObject[key] = [i, s.lastIndexOf(key)]
    }
    const values = Object.entries(letterTrackingObject)
    values.sort((a, b) => a[1][0] - b[1][0])
    let currentChunk = values[0][1]
    while (currentEndPos < s.length) {
        currentEndPos++
        console.log(currentChunk)
        const valuesContained = values.filter(value => currentChunk[0] < value[1][0] && value[1][0] < currentChunk[1])
        const valuesExceeding = valuesContained.filter(value => value[1][1] > currentChunk[1])
        if (valuesExceeding.length) {
            valuesExceeding.sort((a, b) => b[1][1] - a[1][1])
            let maxExceed = valuesExceeding[0][1][1]
            currentChunk = [currentChunk[0], maxExceed]
        } else {
            let chunk = currentChunk[1]-currentChunk[0] + 1
            answerArray.push(chunk)
            currentEndPos = currentChunk[1] + 1
            const nextChunk = values.find(value => value[1][0] === currentEndPos)
        console.log(nextChunk, "next chunk")
            // currentChunk = nextChunk[1]
        }
        
        console.log(valuesContained, valuesExceeding, answerArray)
    }
}
console.log(partitionLabels("ababcbacadefegdehijhklij"))