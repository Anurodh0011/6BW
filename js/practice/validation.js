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