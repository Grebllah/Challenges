//https://leetcode.com/problems/goat-latin/

// You are given a string sentence that consist of words separated by spaces.
// Each word consists of lowercase and uppercase letters only.
// We would like to convert the sentence to "Goat Latin" (a made-up language similar to Pig Latin.) 
// The rules of Goat Latin are as follows:
//     If a word begins with a vowel ('a', 'e', 'i', 'o', or 'u'), append "ma" to the end of the word.
//         For example, the word "apple" becomes "applema".
//     If a word begins with a consonant (i.e., not a vowel), remove the first letter and append it to the end, then add "ma".
//         For example, the word "goat" becomes "oatgma".
//     Add one letter 'a' to the end of each word per its word index in the sentence, starting with 1.
//         For example, the first word gets "a" added to the end, the second word gets "aa" added to the end, and so on.
// Return the final sentence representing the conversion from sentence to Goat Latin.
 
// Constraints:

//     1 <= sentence.length <= 150
//     sentence consists of English letters and spaces.
//     sentence has no leading or trailing spaces.
//     All the words in sentence are separated by a single space.

// plan:
// seperate the sentence into its individual words, perhaps into an array
// loop over the array and modify the word in the following ways:
    // look at its first letter; if it is a consonant (!a, e, i, o, u)
        // separate the first letter from the rest, remove the first, and attach it to the end,
        // then move onto the next step
    // if its a vowel, add "ma" to the end of the word
    // finally, add "a" times (index + 1) to the end of the word
// rejoin the array into a new sentence string.

// Example 1:
// Input: sentence = "I speak Goat Latin"
// Output: "Imaa peaksmaaa oatGmaaaa atinLmaaaaa"

// Example 2:
// Input: sentence = "The quick brown fox jumped over the lazy dog"
// Output: "heTmaa uickqmaaa rownbmaaaa oxfmaaaaa umpedjmaaaaaa overmaaaaaaa hetmaaaaaaaa azylmaaaaaaaaa ogdmaaaaaaaaaa"

const toGoatLatin = (sentence) => {
    const words = sentence.split(" ")
    let newWordStart = ""
    let newWord = ""
    let goatSentence = []

    console.log(words) 
    
    for (i = 0; i < words.length; i++) {
        console.log(words[i])
        goatWord = addingSuffix(wordCore(words[i]), i)
        goatSentence.push(goatWord)
    }
    console.log(goatSentence)
    return goatSentence.join(" ")
}

const wordCore = consonantCheck = (word) => {
    const vowels = "aeiouAEIOU"
    let firstLetter = word[0]
    // console.log("first letter: ", firstLetter, "is consonant?:", !vowels.includes(firstLetter))
    if (!vowels.includes(firstLetter)) {
       // console.log(firstLetter)
        newWordStart = word.slice(1, word.length)
        newWord = newWordStart + firstLetter
        return newWord + "ma"
    } else {
        return word + "ma"
    }
}

const addingSuffix = (wordCore, num) => {
    for (let i = 0; i < num + 1; i++) {
    wordCore += "a"
    }
    return wordCore
}
toGoatLatin("I speak Goat Latin")
toGoatLatin("A x gij T Ka Stsl UTK kqdc A")
toGoatLatin("The quick brown fox jumped over the lazy dog")