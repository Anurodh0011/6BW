// ------------------------------->         Password Validation             <-----------------------------------
// Write a program that checks if a given password meets certain criteria:
// Must be at least 8 characters long.
// Must contain at least one digit.
// Must contain at least one special character (e.g., !, @, #).
// Example Input: Password1!
// Output: Password is valid.

let validateDigit = () => {
    let isValid = false
    for (let i = 0; i < pass.length; i++) {
        if (Number(pass[i]) >= 0 && Number(pass[i]) <= 9) {
            isValid = true
        }
    }
    return isValid
}
let validateSpecialCharacter = () => {
    let isValid = false
    for (let i = 0; i < pass.length; i++) {
        if (!((pass[i] > 'A' && pass[i] < 'Z') || (pass[i] > 'a' && pass[i] < 'z') || (Number(pass[i] >= 0) && Number(pass[i]) <= 9))) {
            isValid = true
        }
    }
    return isValid
}
let validateUpper = () => {
    let isValid = false
    for (let i = 0; i < pass.length; i++) {
        if (pass[i] >= 'A' && pass[i] <= 'Z') {
            isValid = true
        }
    }
    return isValid
}
let pass = 'anasDasau1'
if (pass.length >= 8 && validateDigit() && validateSpecialCharacter() && validateUpper()) {
    console.log("valid")
} else {
    console.log("Not valid")
}

// 1. Write a program that takes a number as input and checks if the number is positive, negative, or zero.
// let num = -7
// console.log(num > 0 ? "Positive" : num === 0 ? "Zero" : "Negative")

// 2. Even or Odd
// Write a program that checks if a number is even or odd.
// let num = -20
// console.log(num % 2 === 0 ? "Even" : "Odd")


// 3. Vowel or Consonant
// Write a program that checks whether a given character is a vowel or a consonant.
// let char = "b"
// console.log((char === "a" || char === "e" || char === "i" || char === "o" || char === "u") ? "Vowel" : "Consonent")


// 4. Age Category
// Write a program that checks the age of a person and categorizes them as:
// Under 18: Minor
// Between 18 and 65: Adult
// Above 65: Senior
// let age = 1
// console.log((age > 0 && age < 120) ? (age < 18 ? "Minor" : age >= 65 ? "Senior" : Adult) : "Please enter valid age.")


// 5. ---------------------------->   Divisibility Check
// Write a program that checks if a number is divisible by 3, 5, or both.
// If divisible by both, print "Divisible by both", else print the individual result.
// let num = 16
// if (num % 3 === 0 && num % 5 === 0) {
//     console.log("Divisible by both.")
// }
// else if (num % 3 === 0) {
//     console.log("Divisible by 3 only.")
// }
// else if (num % 5 === 0) {
//     console.log("Divisible by 5 only.")
// }
// else {
//     console.log("Not divisible by both.")
// }

// ------------------------>   6. Leap Year Check
// Write a program that checks whether a given year is a leap year. A year is a leap year if:
// It is divisible by 4, but not divisible by 100, or
// It is divisible by 400.
// let year = 1934
// console.log((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0 ? "Leap Year" : "Not a Leap Year.")

// ------------------------->   7. Largest of Three Numbers
// Write a program to find the largest of three numbers.
// let a = 10
// let b = 20
// let c = 30
// console.log((a > b && a > c) ? "a is greater." : (b > a && b > c) ? "b is greater." : (c > a && c > b) ? "c is greater." : (a === b && b === c) ? "a, b, and c are equal." : "")


