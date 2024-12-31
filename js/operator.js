let h = 10

console.log(h++) // 10 on next line

console.log(++h) // 12

let product = {
    productName: "Iphone",
    price: 1000,
    brand: "Apple"
}
// productName: "Iphone"
// price: 1000
// brand: "Apple"

//Object Destructuring
let { productName, price, brand } = product
console.log(productName) // Iphone
console.log(price) // 1000
console.log(brand) // Apple


//Array Destructuring
let numbers = [10, 20, 30, 40, 50]
let [num1, num2, num3, num4, num5] = numbers
console.log(num1) // 10
console.log(num2) // 20
console.log(num3) // 30
console.log(num4) // 40
console.log(num5) // 50


// let obj1 = {
//     name: "John",
//     age: 30
// }

// let obj2 = obj1;
// obj2.name = "New Name"

// console.log(obj1.name) // New Name

let obj1 = {
    name: "John",
    age: 30
}

//
let obj2 = { ...obj1 }

obj2.name = "New Name"

console.log(obj1.name) // New Name


let config = {
    name: "John"
}


//name => as it, config =>key add
config = {
    ...config,
    age: 30
}