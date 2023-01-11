//create an array on the individual words
    //going through the array, locate the word index by taking the word order number and subtracting one
    //add the word to another array, slicing (maybe) off the number at the end
    //convert answer array to a string
    
    var sortSentence = function(s) {
        let words = s.split(" ")
        console.log(words)
        for (i = 0; i < words.length; i++) {
            wordIndex = words[i][words[i] - 1]
            console.log(wordIndex)
        }
};