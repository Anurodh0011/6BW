//write a js fuction to filter discount value less than 20

const products = [
    { name: "Product 1", price: 1200, discount: 10, category: "Electronics" },
    { name: "Product 2", price: 1500, discount: 20, category: "Home Appliances" },
    { name: "Product 3", price: 2000, discount: 15, category: "Furniture" },
    { name: "Product 4", price: 2500, discount: 5, category: "Electronics" },
    { name: "Product 5", price: 3000, discount: 25, category: "Home Appliances" },
    { name: "Product 6", price: 3500, discount: 30, category: "Furniture" },
    { name: "Product 7", price: 4000, discount: 35, category: "Electronics" },
    { name: "Product 8", price: 4500, discount: 40, category: "Home Appliances" },
    { name: "Product 9", price: 5000, discount: 45, category: "Furniture" },
    { name: "Product 10", price: 5500, discount: 50, category: "Electronics" },
    { name: "Product 11", price: 6000, discount: 10, category: "Home Appliances" },
    { name: "Product 12", price: 6500, discount: 20, category: "Furniture" },
    { name: "Product 13", price: 7000, discount: 15, category: "Electronics" },
    { name: "Product 14", price: 7500, discount: 5, category: "Home Appliances" },
    { name: "Product 15", price: 8000, discount: 25, category: "Furniture" },
    { name: "Product 16", price: 8500, discount: 30, category: "Electronics" },
    { name: "Product 17", price: 9000, discount: 35, category: "Home Appliances" },
    { name: "Product 18", price: 9500, discount: 40, category: "Furniture" },
    { name: "Product 19", price: 10000, discount: 45, category: "Electronics" },
    { name: "Product 20", price: 10500, discount: 50, category: "Home Appliances" }
];
// let prodBelow20 = []
// products.map((product) => {
//     if (product.discount < 20) {
//         prodBelow20.push(product)
//     }
// })
// console.log(prodBelow20)

let prodBelow20 = products.filter((product) => {
    return product.discount < 20
})
console.log(prodBelow20)