// // create a js class as Product and assign name, price, disxount from constructor.
// // add two properties, discountAmount and afterDiscount to the class
// // Create two functions to get discountAmount, assing the discount value and another function to gfet afterDisxount
// //ans assign to afterDiscount
// // print all the information of the product using OOP

// class Product {
//     constructor(name, price, discount) {
//         this.name = name
//         this.price = price
//         this.discount = discount
//         this.discountAmount = 0
//         this.afterDiscount = 0
//     }
//     setDiscountAmount = () => {
//         this.disountAmount = this.price * this.discount / 100
//     }

//     setAfterDiscount = () => {
//         this.afterDiscount = this.price - this.discountAmount
//     }
// }

// const prodObj = new Product("Product", 1000, 10)
// prodObj.setDiscountAmount()
// prodObj.setAfterDiscount()


class User {
    name;
    email;
}
class Trainer extends User {
    language;
    constructor() {
        console.log("Trainer")
    }
}
const trainer = new Trainer();

