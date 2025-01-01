
// let salary = 3000000; //per year
// let tax = 0;
// if (salary <= 500000) {
//     tax = salary * 0.01;
// }
// if (salary >= 500000) {
//     tax = tax + salary * 0.15;
// }
// else if (salary >= 700000) {
//     tax = tax + salary * 0.20;
// }
// else if (salary >= 1000000) {
//     tax = tax + salary * 0.25;
// }
// else if (salary >= 2000000) {
//     tax = tax + salary * 0.30;
// }

let dayNum = 3
// if (dayNum == 1) {
//     console.log("Sunday")
// }
// else if (dayNum === 2) {
//     console.log("Monday")
// }
// else if (dayNum === 3) {
//     console.log("Tuesday")
// }
// else if (dayNum === 4) {
//     console.log("Wednesday")
// }
// else if (dayNum === 5) {
//     console.log("Thursday")
// }
// else if (dayNum === 6) {
//     console.log("Friday")
// }
// else if (dayNum === 7) {
//     console.log("Saturday")
// }
// else {
//     console.log("Invalid Day")
// }

switch (dayNum) {
    case 1:
        console.log("Sunday")
        break;
    case 2:
        console.log("Monday")
        break;
    case 3:
        console.log("Tuesday")
        break;
    case 4:
        console.log("Wednesday")
        break;
    case 5:
        console.log("Thursday")
        break;
    case 6:
        console.log("Friday")
        break;
    case 7:
        console.log("Saturday")
        break;
    default:
        console.log("Invalid Day")
        break;
}


