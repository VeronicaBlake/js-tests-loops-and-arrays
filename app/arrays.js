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

function largestNum(arr){
    result = Math.max(...arr)
    //you need to do '...'for it to take the entirety of the array
    return result
}


// ------------------------------------------


// 3. Given an array of numbers, return an array where every element in 
//the given array is multiplied by the length of the given array.
// Example:
// input:  [4, 2, 1, 7]
// output: [16, 8, 4, 28]


function elemsTimesLength(arr){ 
    const newArr = arr.map(x => x * arr.length )
    // .map will iterate all of the items in the array,
    // replacing the original values [here it's x] with the ones touched by
    // the function.
    //what happened in the perens is:
        // function(x){
        //     x * arr.length
        // }
        //that was shortened to x=> x * arr.length
    return newArr
}


// ------------------------------------------



//4. Write a function that will use the following data to return the cost of flights 
//from boise to a neighboring city, 
//by default return the standard cost unless firstClass is set to true

let flights = [
    {
    from: 'BOI',
    to: 'LAX',
    prices: {
        standard: 500,
        firstClass: 2200
    }
}, {
    from: 'BOI',
    to: 'SEA',
    prices: {
        standard: 800,
        firstClass: 1200
    }
}, {
    from: 'BOI',
    to: 'CAN',
    prices: {
        standard: 750,
        firstClass: 6200
    }
}]

function flightCost(destination, firstClass) {
    destination = destination.toUpperCase()
    //we're looking for the price of flights, hence flightPrice
    //we're searching where we're going, and if we're doing first class or not
    //.find will take the first result from the array that it finds.
    // w/o arrow notation:
    // function(flight){
    //     let flight = flight.to
    //     return where flight.to == destination
    // }
    //then evaluate if you need first class or not 
    //the if statement with firstclass does not need to be set equal to true, 
    //because just by placing it there the default is set to true. 
    //you should have a !myFlight statement as a safety check
    //i like assigning the destination as dest.toUppercase up at 87, it's cleaner
   const flightPrice = flights.find(flight => flight.to == destination) 
   if (firstClass){
       return flightPrice.prices.firstClass
   }
   return flightPrice.prices.standard
}
// ------------------------------------------


// 5. Given a number, return the corresponding user object from the staff 
// array that has the given number as the value of 
// their id property. If no user is found, return an object with an error 
//property and value of "No user with that id."

// Example:
// input: 17
// output: {id: 17, name: 'St. MaryLou de la Playa Carmen'}
//Example:
// input: 1000
// output: { error: "No user with that id." } 

let staff = [
    { id: 1, name: 'Jon' }, 
    { id: 2, name: 'Yuli' }, 
    { id: 21, name: 'Peter' },
    { id: 17, name: 'St. MaryLou de la Playa Carmen' }, 
    { id: 51, name: 'Doug' },
    { id: 881, name: 'Paul' }, 
    { id: 0, name: 'Jon' }, 
    { id: 999, name: 'Timma' }]





// ------------------------------------------


// 6. Write a function that accepts a name argument and will loop over theBand members and return the band member's 
//name and the instrument that he/she plays. Use string concatenation or interpolation to return a sentence with the 
//following structure: "[band-members-name] is in the band and plays the [band-members-instrument]".
// Example:
// input: 'Johnny P'
// output: "Johnny P is in the band and plays the sax"

let theBand = {
    homeCity: "Birmingham",
    members: [{
        name: 'Johnny P',
        instrument: 'sax'
    }, {
        name: 'River',
        instrument: 'drums'
    }, {
        name: 'Kris',
        instrument: 'guitar'
    }]
}

//.includes will do an alphabetical search to find river if you type in 'ri' 
function bandMemberDetails(name){
    name = name.toLowerCase()
    let member = theBand.members.find(member => member.name.toLowerCase().includes(name))
    if (!member){
        return "They are not in the band"
    }
    //you can say member here (not members) because you've defined member above
    return '${member.name} is in the band and plays the ${member.instrument}'
}

