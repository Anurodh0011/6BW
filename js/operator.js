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


//Spread Operator

let config = {
    name: "John",
    weight: 70
}


//name => as it, config =>key add
config = {
    ...config,
    age: 30
}

//rest operator
let { name, ...newObj } = config