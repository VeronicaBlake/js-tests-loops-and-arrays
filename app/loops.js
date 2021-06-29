// 1. Within the factorials function, 
//write a loop that begins at 1 and multiplies every consecutive
// number up to and including the given number(num). Return the 
//total after the loop completes.
// Example:
// input: 4
// output: 24
// 1*2*3*4 = 24

//multiplication, so start with 1
//create a for loop that starts with 1 and goes up to the number input 
//every time the loop iterates, the numbers should be multiplied 
//"placeholder" for the multiplication should be 1, see line 10

function factorials(num){
    let result = 1
    for(let i=1; i<= num; i++){
        result *= i
    } 
    return result
}

// ------------------------------------------

// 2. Write a function that sums up all of the numbers in a range
// Example:
// input: 2, 6
// output: 20

//this is between two numbers
//start at number 1 
//end at number 2
//add the number each time it's iterated 
//^ should start at 0 so that you can get an accurate total


function rangeTotal(num1, num2){
    result = 0
    for(let i= num1; i<= num2; i++){
        result += i
    } 
    return result
}

// ------------------------------------------


// 3. Write a function that will take in a starting number, 
//ending number, and a divisor, iterate over the range of the numbers, and return 
//how many numbers can be divided by the divisor.

// Example:
// input: 15, 20, 5
// output: 2

//range is start - end. loop iterates over it and adds by one. 
//if i is able to be divided by divideBy, count++
//return count

function rangeDivisor(start, end, divideBy){
    let count = 0
    for(i=start; i<= end; i++){ 
        if(i % divideBy != 0){
            i++
        }
        else count++
    }
    return count
}

//alternately: this one is better because it's cleaner 
// function rangeDivisor(start, end, divideBy){
//     let count = 0
//     for(i=start; i<= end; i++){ 
//         if(i % divideBy == 0){
//         count++
//     }
//     return count
// }