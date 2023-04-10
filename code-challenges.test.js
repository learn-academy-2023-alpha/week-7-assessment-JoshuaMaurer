// ASSESSMENT 6: JavaScript Coding Practical Questions with Jest

const { log } = require("console")

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in an array of objects and returns an array with a sentence about each person with their name capitalized.

// a) Create a test with an expect statement using the variable provided.

// const people = [
//   { name: "ford prefect", occupation: "a hitchhiker" },
//   { name: "zaphod beeblebrox", occupation: "president of the galaxy" },
//   { name: "arthur dent", occupation: "a radio employee" }
// ]
// Expected output: ["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."]

// input: An array of objects

// output: an array with a sentence about each person with their name capitalized.
// ["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."]

// pseudo:
// Create a function called theAnswerToTheMeaningOfLifeIs42. Pass the array containing the object through as the parameter. Use .map to iterate over the array, passing (object) through and then nesting additional functionality. Inside this, create two variables as constants. This is named firstAndLastNames and this will take the object, use .dot notation to extract the key:value name. .split(" ") with quotes will then be used to separate the words. .map will then be used to iterate over each name, passing name and then using [0] to extract the first index location (letter) with.toUppperCase() to capitalize that letter. + is then used to add the following after the capitalized letter. name.slice(1) will return a shallow copy of the name minus the letter at the first index. Since they have been added together the variable stores the names with the first letters being capitalized. The second variable will be called occupation and use .dot notation to access the key:value pair, strictly store occupation values. The variables are then returned with the string ' is ' added between them and "." added after. 

// Test:

describe("theAnswerToTheMeaningOfLifeIs42", () => {
  it("return an array with a sentence about each person with their name capitalized", () => {
    const people = [
        { name: "ford prefect", occupation: "a hitchhiker" },
        { name: "zaphod beeblebrox", occupation: "president of the galaxy" },
        { name: "arthur dent", occupation: "a radio employee" }
      ]
    expect(theAnswerToTheMeaningOfLifeIs42(people)).toEqual(["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."])
  })
})

// jest-test-1:

// FAIL  ./code-challenges.test.js
// take in an array of objects
//   ✕ return an array with a sentence about each person with their name capitalized

// ● take in an array of objects › return an array with a sentence about each person with their name capitalized

//   ReferenceError: theAnswerToTheMeaningOfLifeIs42 is not defined

//     41 |         { name: "arthur dent", occupation: "a radio employee" }
//     42 |       ]
//   > 43 |     expect(theAnswerToTheMeaningOfLifeIs42(people)).toEqual(["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."])
//        |     ^
//     44 |   })
//     45 | })
//     46 |

//     at Object.expect (code-challenges.test.js:43:5)

// Test Suites: 1 failed, 1 total
// Tests:       1 failed, 1 total

// jest-test-2:

// FAIL  ./code-challenges.test.js
// take in an array of objects
//   ✕ return an array with a sentence about each person with their name capitalized (2 ms)

// ● take in an array of objects › return an array with a sentence about each person with their name capitalized

//   expect(received).toEqual(expected) // deep equality

//   Expected: ["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."]
//   Received: undefined

//     41 |         { name: "arthur dent", occupation: "a radio employee" }
//     42 |       ]
//   > 43 |     expect(theAnswerToTheMeaningOfLifeIs42(people)).toEqual(["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."])
//        |                                                     ^
//     44 |   })
//     45 | })
//     46 |

//     at Object.toEqual (code-challenges.test.js:43:53)

// Test Suites: 1 failed, 1 total
// Tests:       1 failed, 1 total

// jest-test-3:

// PASS  ./code-challenges.test.js
// take in an array of objects
//   ✓ return an array with a sentence about each person with their name capitalized (1 ms)

// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total

// b) Create the function that makes the test pass.

// const theAnswerToTheMeaningOfLifeIs42 = (array) => {
//     return array.map((object) => {
//         const firstAndLastNames = object.name.split(" ").map((name) => name[0].toUpperCase() + name.slice(1)).join(" ")
//         const occupation = object.occupation
//         return  firstAndLastNames + " is " + occupation + "."
//     })
// }

// Refactor:
// const theAnswerToTheMeaningOfLifeIs42 = (array) => {
//     return array.map((object) => {
//         const firstAndLastNames = object.name.split(" ").map((name) => name[0].toUpperCase() + name.slice(1)).join(" ")
//         const occupation = object.occupation
//         return `${firstAndLastNames} is ${occupation}.` 
//     })
// }

// Note: On this refactor I had learned about passing the object through directly as the argument and I also HAD to make sure I got my weekly dose of regex in!
const theAnswerToTheMeaningOfLifeIs42 = (array) => {
    return array.map(({name, occupation}) => {
        let [firstNames, lastNames] = name.replace(/\b\w/g, regexMatch => regexMatch.toUpperCase()).split(' ')
        return `${firstNames} ${lastNames} is ${occupation}.`
    })
}
// --------------------2) Create a function that takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.

// a) Create a test with an expect statement using the variables provided.

// const hodgepodge1 = [23, "Heyyyy!", 45, -10, 0, "Yo", false]
// // Expected output: [ 2, 0, -1, 0 ]
// const hodgepodge2 = [5, "Hola", 43, -34, "greetings", true]
// // Expected output: [ 2, 1, -1 ]

// input: a mixed data array

// output: an array of only the REMAINDERS of the numbers when divided by 3
// [23, "Heyyyy!", 45, -10, 0, "Yo", false]
// Expected output: [ 2, 0, -1, 0 ]
// [5, "Hola", 43, -34, "greetings", true]
// Expected output: [ 2, 1, -1 ]

// pseudo:
// Create a function called "onlyTheNumbersThenTheRemainders" that takes in an array as the parameter. Use .filter to return a shallow copy of the original array but only containing the values that are strictly equal to typeof 'number'. This new array containing only numbers will then use .map to iterate over each number. % 3 is passed through so when .map returns the new array, every number is only the remainder after being divided by 3. 

// Test:

describe("onlyTheNumbersThenTheRemainders", () => {
    it("return an array of only the REMAINDERS of the numbers when divided by 3", () => {
        const hodgepodge1 = [23, "Heyyyy!", 45, -10, 0, "Yo", false]
        const hodgepodge2 = [5, "Hola", 43, -34, "greetings", true]
        const hodgepodge3 = [5, "Hola", 43, -34, "greetings", true]
        expect(onlyTheNumbersThenTheRemainders(hodgepodge1)).toEqual([ 2, 0, -1, 0 ])
        expect(onlyTheNumbersThenTheRemainders(hodgepodge2)).toEqual([ 2, 1, -1 ])
    })
})

// jest-test-1:

// FAIL  ./code-challenges.test.js
// onlyTheNumbersThenRemainders
//   ✕ return an array of only the REMAINDERS of the numbers when divided by 3 (1 ms)

// ● onlyTheNumbersThenRemainders › return an array of only the REMAINDERS of the numbers when divided by 3

//   ReferenceError: onlyTheNumbersThenRemainders is not defined

//     152 |         const hodgepodge1 = [23, "Heyyyy!", 45, -10, 0, "Yo", false]
//     153 |         const hodgepodge2 = [5, "Hola", 43, -34, "greetings", true]
//   > 154 |         expect(onlyTheNumbersThenRemainders(hodgepodge1)).toEqual([ 2, 0, -1, 0 ])
//         |         ^
//     155 |         expect(onlyTheNumbersThenRemainders(hodgepodge2)).toEqual([ 2, 1, -1 ])
//     156 |     })
//     157 | })

//     at Object.expect (code-challenges.test.js:154:9)

// Test Suites: 1 failed, 1 total
// Tests:       1 failed, 1 total

// jest-test-2:

// FAIL  ./code-challenges.test.js
// onlyTheNumbersThenRemainders
//   ✕ return an array of only the REMAINDERS of the numbers when divided by 3 (1 ms)

// ● onlyTheNumbersThenRemainders › return an array of only the REMAINDERS of the numbers when divided by 3

//   expect(received).toEqual(expected) // deep equality

//   Expected: [2, 0, -1, 0]
//   Received: undefined

//     152 |         const hodgepodge1 = [23, "Heyyyy!", 45, -10, 0, "Yo", false]
//     153 |         const hodgepodge2 = [5, "Hola", 43, -34, "greetings", true]
//   > 154 |         expect(onlyTheNumbersThenRemainders(hodgepodge1)).toEqual([ 2, 0, -1, 0 ])
//         |                                                           ^
//     155 |         expect(onlyTheNumbersThenRemainders(hodgepodge2)).toEqual([ 2, 1, -1 ])
//     156 |     })
//     157 | })

//     at Object.toEqual (code-challenges.test.js:154:59)

// Test Suites: 1 failed, 1 total
// Tests:       1 failed, 1 total

// jest-test-3:

// PASS  ./code-challenges.test.js
// onlyTheNumbersThenRemainders
//   ✓ return an array of only the REMAINDERS of the numbers when divided by 3 (1 ms)

// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total

// b) Create the function that makes the test pass.

const onlyTheNumbersThenTheRemainders = (array) => {
        return array.filter(value => typeof value === 'number').map(number => number % 3)
}        

// --------------------3) Create a function that takes in an array of numbers and returns the sum of all the numbers cubed.

// a) Create a test with an expect statement using the variables provided.

// const cubeAndSum1 = [2, 3, 4]
// // Expected output: 99
// const cubeAndSum2 = [0, 5, 10]
// // Expected output: 1125

// input: an array of numbers

// output: the sum of all the numbers cubed.

// pseudo:
// Create a function called 'allTheSumsHaveBeenCubed' and pass an array through as the parameter. Using .reduce, which uses a below written callback function (** 3)  on every number in the array. It then passes this current calculation to the preceding element called the accumulator which adds the returned current values progressively as a single value. I chose to use ** instead of Math.pow(which is actually what I found first) because I like that it looks cleaner, accepts bigInts and still accomplishes what I need it too. To ensure that the initial value starts at zero it is passed as the second argument of .filter. If no starting point is passed it will default to the number at the [0] index location and the iteration starts at the [1] index instead of [0].  

// Test:

describe("allTheSumsHaveBeenCubed", () => {
    it("return the sum of all the numbers cubed", () => {
        const cubeAndSum1 = [2, 3, 4]
        const cubeAndSum2 = [0, 5, 10]
        expect(allTheSumsHaveBeenCubed(cubeAndSum1)).toEqual(99)
        expect(allTheSumsHaveBeenCubed(cubeAndSum2)).toEqual(1125)
    })
})

// jest-test-1:

// FAIL  ./code-challenges.test.js
// theAnswerToTheMeaningOfLifeIs42
//   ✓ return an array with a sentence about each person with their name capitalized (1 ms)
// onlyTheNumbersThenRemainders
//   ✓ return an array of only the REMAINDERS of the numbers when divided by 3 (1 ms)
// allTheSumsHaveBeenCubed
//   ✕ return the sum of all the numbers cubed

// ● allTheSumsHaveBeenCubed › return the sum of all the numbers cubed

//   ReferenceError: allTheSumsHaveBeenCubed is not defined

//     244 |         const cubeAndSum1 = [2, 3, 4]
//     245 |         const cubeAndSum2 = [0, 5, 10]
//   > 246 |         expect(allTheSumsHaveBeenCubed(cubeAndSum1)).toEqual(99)
//         |         ^
//     247 |         expect(allTheSumsHaveBeenCubed(cubeAndSum2)).toEqual(1125)
//     248 |     })
//     249 | })

//     at Object.expect (code-challenges.test.js:246:9)

// Test Suites: 1 failed, 1 total
// Tests:       1 failed, 2 passed, 3 total

// jest-test-2:

// FAIL  ./code-challenges.test.js
// theAnswerToTheMeaningOfLifeIs42
//   ✓ return an array with a sentence about each person with their name capitalized (1 ms)
// onlyTheNumbersThenRemainders
//   ✓ return an array of only the REMAINDERS of the numbers when divided by 3
// allTheSumsHaveBeenCubed
//   ✕ return the sum of all the numbers cubed (1 ms)

// ● allTheSumsHaveBeenCubed › return the sum of all the numbers cubed

//   expect(received).toEqual(expected) // deep equality

//   Expected: 99
//   Received: undefined

//     244 |         const cubeAndSum1 = [2, 3, 4]
//     245 |         const cubeAndSum2 = [0, 5, 10]
//   > 246 |         expect(allTheSumsHaveBeenCubed(cubeAndSum1)).toEqual(99)
//         |                                                      ^
//     247 |         expect(allTheSumsHaveBeenCubed(cubeAndSum2)).toEqual(1125)
//     248 |     })
//     249 | })

//     at Object.toEqual (code-challenges.test.js:246:54)

// Test Suites: 1 failed, 1 total
// Tests:       1 failed, 2 passed, 3 total

// jest-test-3:

// PASS  ./code-challenges.test.js
// theAnswerToTheMeaningOfLifeIs42
//   ✓ return an array with a sentence about each person with their name capitalized (1 ms)
// onlyTheNumbersThenRemainders
//   ✓ return an array of only the REMAINDERS of the numbers when divided by 3
// allTheSumsHaveBeenCubed
//   ✓ return the sum of all the numbers cubed (1 ms)

// Test Suites: 1 passed, 1 total
// Tests:       3 passed, 3 total

// b) Create the function that makes the test pass.

const allTheSumsHaveBeenCubed = (array) => {
    return array.reduce((accumulator, current) => accumulator + (current ** 3), 0)
}
