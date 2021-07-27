// ASSESSMENT 3: Coding practical questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Add appropriate dependencies to the repository:
// $ yarn add jest

// Use test driven development to complete the following questions
// Run the file with the following command:
// $ yarn jest

// Reminder: The test will call your function


// --------------------1) Create a function that takes in a number (greater than 2) and returns an array of that length containing the numbers of the Fibonacci.

// a) Create a test with expect statements for each of the variables provided.

// Example input: 6
// Expected output: [1, 1, 2, 3, 5, 8]

// Example input: 10
// Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]


// b) Create the function that makes the test pass.

//Create a function that creates an array that takes in a number and outputs the fibbonacci sequence to the index of the number put in.
//input: a number
//output: fibbonacci sequence in array length equal to number
//process:
    //use a for loop
        //Why?
            //it feels like a for loop situation
    //what am I trying to do?
        //not breaking a number down, only propogating the fib sequence to a specified number of indices
    //first I need to figure out how to propogate the fibonnacci sequence
    //second I need to put in a limitation on the length of the sequence propogated
        // i<number in for loop?
    //third (but actually first probably) I need to understand fib sequence mathematically notated
        // a+b=c, b+c=d, c+d=e, d+e=f
            //but with indexes and not values
                //[0] [1] [2] [1] [2] [3] [2] [3] [4] [3] [4] [5]
                // a + b = c,  b + c = d,  c + d = e,  d + e = f
                    //simplify to iterate...
                        //current index = current index - 2 + current index -1, (so that current index is always the result)
                                //fib[i]=     fib[i - 2]    +     fib[i - 1];
                                //fib[i](current index) = fib[i -2](value at index 2 lower than current) + fib[i-1](value at index one lower than current)
                                    //***AHA moment: i = current index in loop?
                                        //loop is limited by number put in for i<x in for loop
                                            //will iterate through until reaches length(number of indeces) of input number

const fibNo = (number) => {
let fib = []

fib[0] = 1;
fib[1] = 1;
 for (var i = 2; i<(number); i++){ 
     fib[i] = fib[i - 2] + fib[i - 1];
    //  console.log(fib)
    }
    return fib
}
console.log(fibNo(10))
console.log(fibNo(6))
//----->[
//     1,  1,  2,  3,  5,
//     8, 13, 21, 34, 55
//   ]
//   [ 1, 1, 2, 3, 5, 8 ]

//***moderately unintelligible notes on thought processes... */
//--->[ 1, <1 empty item>, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN ]
    //Why is it returning an empty item???
        //if its true for all fib sequences that they begin at one, then fib[0]=1, if my loop starts at i=2, i'm skipping over 1 so that makes it empty? 
            //add fib[1] = 1?
//--->[
//   1,  1,  2,  3,  5,
//   8, 13, 21, 34, 55
// ] -----it works but why? it doesn't make sense to need fib[0]=1 and fib[1]= 1...but when I remove fib[1]=1 it breaks
// [ 1, <1 empty item>, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN ]
    //refactor fib[0]=1, fib[0]=0 returns array but with first value as 0 which is not expected output.
        //because fib seq always begins 1, 1? I'm going with it because it works even if it seems redundant.
        // [
        //     1,  1,  2,  3,  5,
        //     8, 13, 21, 34, 55
        //   ]
        //   related to for loop starting with i=2?
          //testing i=1
            //[
            //     1, NaN, NaN, NaN,
            //     NaN, NaN, NaN, NaN,
            //     NaN, NaN
            //   ]
                //testing commenting out both fib = and changing for loop to i=0
                //[
                    //   NaN, NaN, NaN, NaN,
                    //   NaN, NaN, NaN, NaN,
                    //   NaN, NaN
                    // ]
                        //didn't work, obviously, because if loop starts at zeroeth index theres not a way to [i-2] etc.. Still not sure this is the best solution, but it does work, so I'm calling it a win.


// --------------------2) Create a function that takes in an array and returns a new array of only odd numbers sorted from least to greatest.

// a) Create a test with expect statements for each of the variables provided.

var fullArr1 = [4, 9, 0, "7", 8, true, "hey", 7, 199, -9, false, "hola"]
// Expected output: [-9, 7, 9, 199]

var fullArr2 = ["hello", 7, 23, -823, false, 78, null, "67", 6, "number"]
// Expected output: [-823, 7, 23]


// b) Create the function that makes the test pass.
//create a function filterArray
    //use typeof to remove NaN
        //use % to return only odd #   
            //use sort() to return odd # < to >

// const filterArray = (array) => {
//     let filteredArray = []
//     for(let i=0; i<array.length; i++){
//         if(typeof array[i] === 'number'){
//             filteredArray.push(array[i])
//         }
//     }
//     return filteredArray
// }
// console.log(filterArray(fullArr2))
//---->[ 7, 23, -823, 78, 6 ] - halfway there, now need to use modulo to return only odd nums

// const filterArray = (array) => {
//     let filteredArray = []
//     for(let i=0; i<array.length; i++){
//         if(typeof array[i] === 'number' && array[i] %2 != 0){
//             filteredArray.push(array[i])
//         }
//     }
//     return filteredArray
// }
// console.log(filterArray(fullArr2))
//---> [ 7, 23, -823 ] now sort by least - greatest

const filterArray = (array) => {
    let filteredArray = []
    for(let i=0; i<array.length; i++){
        if(typeof array[i] === 'number' && array[i] %2 != 0){
            filteredArray.push(array[i])
        }
    }
    return filteredArray.sort((a, b) => a-b)
}
console.log(filterArray(fullArr1))
console.log(filterArray(fullArr2))
//[ -9, 199, 7, 9 ] ----> add params to sort to fix 
// [ -9, 7, 9, 199 ] IT WORKED!


// --------------------3) Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.

// a) Create a test with expect statements for each of the variables provided.
                 // [0] [1] [3] [4]
var numbersToAdd1 = [2,  4,  45, 9]   
// Excpected output: [2, 6, 51, 60]

var numbersToAdd2 = [0, 7, -8, 12]
// Expected output: [0, 7, -1, 11]

var numbersToAdd3 = []
// Expected output: []

// b) Create the function that makes the test pass.
//create a function addingNumbers
    //use a for loop to iterate through array adding next value in array to previous result
        //starting with 0, 2+0 = 2, 4+2 = 6, 45+6 = 51, 9+51 = 60
            //

// const sumsArray = (array) => {
//     for(i=0; i<array.length; i++){
//         return array.push(array[i] + array[i+1])
// }
// }
// console.log(sumsArray(numbersToAdd1))
//--->5    ????

// //const sumsArray = (array) => {
//     var x = 0 
//     let newArray =[]
//     for(i=0; i<array.length; i++){
//         return newArray.push(array[i] + array[i+1])
// }
// }
// console.log(sumsArray(numbersToAdd1))
// //----> 1   ??????
//I need to create a variable to hold the sum of x+[i] to add to value at next [i]
    // x=0 ---> x + array[0] = 2, <---new var to hold that result? 
        // let var = (x + array[0] = 2)<--- (x+ array[i+1])
// const sumsArray = (array) => {
//         let newArray = []
//         for(i=0; i<array.length; i++){
//             let x = (0 + array[i]) //<---should = 2
//             return newArray.push(x + array[i]) //<--- if x = 2, x+array[i] should add to next value in array through loop
//     }
//     }
//     console.log(sumsArray(numbersToAdd1))
    //----> 1 ???????????? WHERE IS THIS 1 COMING FROM?!?
    
    // const sumsArray = (array) => {
    //     let newArray = []
    //     for(i=0; i<array.length; i++){
    //         let x = 0 
    //         return newArray.map(x => x + array[i])
    // }
    // }
    // console.log(sumsArray(numbersToAdd1))
    //----> []   at least it's a different wrong answer
    // const sumsArray = (array) => {
    //     for(i=0; i<array.length; i++){
    //         let x = 0 
    //         return array.map(x => x + array[i+1]);
    // }
    // }
    // console.log(sumsArray(numbersToAdd1))
    //---->[ 4, 6, 47, 11 ]  LEAST WRONG!!
    // const sumsArray = (array) => {
    //     for(i=0; i<array.length; i++){
    //         let x = 0 
    //         return array.map(x => x + array[i+1]);
    // }
    // }
    // console.log(sumsArray(numbersToAdd1))
    //---> [ 6, 8, 49, 13 ]
    //      [2,  4,  45, 9]
    // 2+4 =6. 6+2 = 8. 45+4=49. 9+4=13 <----so close
    // const sumsArray = (array) => {
    //     for(i=0; i<array.length; i++){
    //         let sum = 0 
    //         return array.map(x => sum + array[i]);
    // }
    // }
    // console.log(sumsArray(numbersToAdd1))
    //---->[ 2, 2, 2, 2 ]
    // const sumsArray = (array) => {
    //     for(i=0; i<array.length; i++){
    //         let sum = 0 
    //         return array.map(x => sum + array[i+1]);
    // }
    // }
    // console.log(sumsArray(numbersToAdd1))
    //---->[ 4, 4, 4, 4 ]
    // const sumsArray = (array) => {
    //     for(i=0; i<array.length; i++){
    //         return array.map(sum => sum += array[0]);
    // }
    // }
    // console.log(sumsArray(numbersToAdd1))
    // return array.map(sum => sum += array[0]); //--->[ 4, 6, 47, 11 ]
    //return array.map(sum => sum += array[0]); --->[[ 6, 8, 49, 13 ]
    //return array.map(sum => sum += array[2]); --->[ 47, 49, 90, 54 ]
    //return array.map(sum => sum += array[3]); --->[ 11, 13, 54, 18 ]

    //I give up.
    
// const fibNo = (number) => {
// let fib = []

// fib[0] = 1;
// fib[1] = 1;
//  for (var i = 2; i<(number); i++){ 
//      fib[i] = fib[i - 2] + fib[i - 1];
//     //  console.log(fib)
//     }
//     return fib
// }

// const sumsArray = (array) => {
//     let newArray = []
//     let num = 0
//     let i = array[i]
//            return sumsArray.map(num[i-2] + num[i-1])
//     }
//     console.log(sumsArray(numbersToAdd1))

    // const sumsArray = (array) => {
    //     let sum = 0
    //     return array.map(sum => array[i-2] += array[i-1]);
    // }
    
    // console.log(sumsArray(numbersToAdd1))

    // const sumsArray = (array) => {
    //         for(i=0; i<array.length; i++){
    //             return array.map(sum => array[0] += sum);
    //     }
    //     }
    //     console.log(sumsArray(numbersToAdd1))
        //input          ---->[2,  4,  45, 9] 
        //output         ---->[ 4, 8, 53, 62 ]
        //expected output---->[2, 6, 51, 60]
        
        // const sumsArray = (array) => {
        //     for(i=0; i<array.length; i++){
        //         return array.map(sum => array[i+1] += sum);
        // }
        // }
        // console.log(sumsArray(numbersToAdd1))
        // //----> [ 6, 12, 57, 66 ]

        //I need to approach this problem differently

// const sumsArray = (array) => {
//     let num = 0
//     return array.map(num => {num += acc});
//     }
//     console.log(sumsArray(numbersToAdd1))


const sumsArray = (array) => {
  let num = 0
  return array.map(sum => num += sum);
}
console.log(sumsArray(numbersToAdd1))
console.log(sumsArray(numbersToAdd2))
console.log(sumsArray(numbersToAdd3))

//---->[ 2, 6, 51, 60 ]
// [ 0, 7, -1, 11 ]
// []
//----> halle-frickin-lujah


// // ---> alternate solution:
// var numbersToAdd1 = [2,  4,  45, 9]   
// // Excpected output: [2, 6, 51, 60]

// var numbersToAdd2 = [0, 7, -8, 12]
// // Expected output: [0, 7, -1, 11]

// var numbersToAdd3 = []
// // Expected output: []

// let accumulatedSum = (array) => {
//     let output = [];
//     for(i=0; i<array.length;i++){
//         if (output.length > 0) {
//             output.push(array[i] + output[i-1])
//         }
//         else {
//             output.push(array[i])
//         }
//     }
//     return output;
// }
// let output = accumulatedSum(numbersToAdd1);
// console.log(output);
// let output2 = accumulatedSum(numbersToAdd2);
// console.log(output2);
// let output3 = accumulatedSum(numbersToAdd3);
// console.log(output3);
