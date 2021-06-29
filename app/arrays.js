// 1. Given an array, move the element at index 0 to the last position in the array. 
//Return the modified array.
// Example:
// input: ['This', 'is', 'a', 'split', 'sentence.']
// output: ['is', 'a', 'split', 'sentence.', 'This']

function rearranger(arr) {
    result = arr
    //.shift will isolate the index 0 and then it's assigned to firstElem
    const firstElem = result.shift()
    //then you .push first elem to the end of the array. boom. roasted. 
    result.push(firstElem)
    return result
}
// ------------------------------------------


// 2. Given an array of numbers, return the largest number in the array.
// Example:
// input: [6, 4, 8, 33, 42, 10]
// output: 42




// ------------------------------------------


// 3. Given an array of numbers, return an array where every element in the given array is multiplied by the length of the given array.
// Example:
// input:  [4, 2, 1, 7]
// output: [16, 8, 4, 28]





// ------------------------------------------



//4. Write a function that will use the following data to return the cost of flights from boise to a neighboring city, 
//by default return the standard cost unless firstClass is set to true


// ------------------------------------------


// 5. Given a number, return the corresponding user object from the staff array that has the given number as the value of 
//their id property. If no user is found, return an object with an error property and value of "No user with that id."
// Example:
// input: 17
// output: {id: 17, name: 'St. MaryLou de la Playa Carmen'}
//Example:
// input: 1000
// output: { error: "No user with that id." } 





// ------------------------------------------


// 6. Write a function that accepts a name argument and will loop over theBand members and return the band member's 
//name and the instrument that he/she plays. Use string concatenation or interpolation to return a sentence with the 
//following structure: "[band-members-name] is in the band and plays the [band-members-instrument]".
// Example:
// input: 'Johnny P'
// output: "Johnny P is in the band and plays the sax"


