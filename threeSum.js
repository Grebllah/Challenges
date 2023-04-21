// https://leetcode.com/problems/3sum/

// Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]]
// such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.
// Notice that the solution set must not contain duplicate triplets.

// Example 1:
// Input: nums = [-1,0,1,2,-1,-4]
// Output: [[-1,-1,2],[-1,0,1]]
// Explanation: 
// nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
// nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
// nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
// The distinct triplets are [-1,0,1] and [-1,-1,2].
// Notice that the order of the output and the order of the triplets does not matter.

// Example 2:
// Input: nums = [0,1,1]
// Output: []
// Explanation: The only possible triplet does not sum up to 0.

// Example 3:
// Input: nums = [0,0,0]
// Output: [[0,0,0]]
// Explanation: The only possible triplet sums up to 0.

// Constraints:
//     3 <= nums.length <= 3000
//     -105 <= nums[i] <= 105

// plan: create a function to determine if a given triplet has a sum of 0
// 

const threeSum = (nums) => {
    const answer = []
    const trackingObject = {}
    for (let i = 0; i < nums.length; i++) {
        let key = nums[i]
        if (!trackingObject[key]) trackingObject[key] = 1
        else trackingObject[key]++
    }
    const firstPairsArr = []
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            let firstPair = [nums[i], nums[j]]
            let pairSum = nums[i] + nums[j]
            firstPairsArr.push([firstPair, pairSum])
            let oppositeOfSum = pairSum === 0 ? 0 : -pairSum
            if (oppositeOfSum === 0 && trackingObject[oppositeOfSum] >= 3) {
                answer.push([nums[i], nums[j], oppositeOfSum].sort((a,b) => a - b))
            }
            else if (((trackingObject[oppositeOfSum]) && (![nums[i], nums[j]].includes(oppositeOfSum) || (trackingObject[oppositeOfSum] > 1 && oppositeOfSum !== 0)))) {
                answer.push([nums[i], nums[j], oppositeOfSum].sort((a,b) => a - b))
            }
        }
    }
    filterAnswer(answer)
}

const filterAnswer = (answer) => {
    const trackingObject = {}
    
    for (i = 0; i < answer.length; i++) {
        let key = answer[i]
        if (!trackingObject[key]) trackingObject[key] = answer[i]
    }
    return Object.values(trackingObject)
}

threeSum([-1,0,1,2,-1,-4])