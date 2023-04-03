// https://leetcode.com/problems/sort-the-people/

// You are given an array of strings names, and an array heights that consists of distinct positive integers.
// Both arrays are of length n.
// For each index i, names[i] and heights[i] denote the name and height of the ith person.
// Return names sorted in descending order by the people's heights. 

// Example 1:
// Input: names = ["Mary","John","Emma"], heights = [180,165,170]
// Output: ["Mary","Emma","John"]
// Explanation: Mary is the tallest, followed by Emma and John.

// Example 2:
// Input: names = ["Alice","Bob","Bob"], heights = [155,185,150]
// Output: ["Bob","Alice","Bob"]
// Explanation: The first Bob is the tallest, followed by Alice and the second Bob.

// Constraints:
//     n == names.length == heights.length
//     1 <= n <= 103
//     1 <= names[i].length <= 20
//     1 <= heights[i] <= 105
//     names[i] consists of lower and upper case English letters.
//     All the values of heights are distinct.

// plan: 
//   the trick is linking the names and heights together so that when you sort the heights,
//   the names are sorted in the same way.
// two ideas: create an object, and use the values to sort, 
// or create a new array with the names attached to the heights first, then sort it and separate the names.

const sortPeople = (names, heights) => {
    const n = names.length
    const heightChart = []
    let height = 0
    for (let i = 0; i < n; i++) {
        height = heights[i]
        heightChart.push([heights[i], names[i]])
    }
    const sortedChart = heightChart.sort((a, b) => {
        b[0] - a[0]
        }
        )
    const sortedNames = []
    for (let i = 0; i < sortedChart.length; i++) {
        sortedNames.push(sortedChart[i][1])
    }
    console.log(sortedChart, sortedNames)
        return sortedNames.reverse()
}
sortPeople(["Mary","John","Emma"], [180,165,170])