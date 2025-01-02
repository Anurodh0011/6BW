// let disAmt = 0
// for (let i = 0; i < allProducts; i++) {
//     disAmt = allProducts[i].price * allProducts[i] / 100
//     allProducts[i]['discountAmount'] = disAmt
//     allProducts[i]['afterDiscount'] = allProducts[i].price - disAmt
// }

// console.log(allProducts)

// Create a js program to print in the following format:
// Name: User One
// Email: one@user.com
// Address: Kathmandu
// Phone: 9876543210
// --------------------------
// Name: ........
// Email: ........
// Address: .......
// Phone: ........
// --------------------------
// Create a js array with atleast 10 objects with name, email, address and phone keys.
// Print each object in the above mentioned format of the array variable.

let userDetails = [
    {
        name: "User1",
        email: "user1@gmail",
        address: "Kathmandu"
    },
    {
        name: "User2",
        email: "user2@gmail",
        address: "Jhapa"
    },
    {
        name: "User3",
        email: "user3@gmail",
        address: "Kathmandu"
    },
    {
        name: "User4",
        email: "user4@gmail",
        address: "Jhapa"
    },
    {
        name: "User5",
        email: "user5@gmail",
        address: "Kathmandu"

    },
    {
        name: "User6",
        email: "user6@gmail",
        address: "Jhapa"
    },
    {
        name: "User7",
        email: "user7@gmail",
        address: "Kathmandu"
    },
    {
        name: "User8",
        email: "user8@gmail",
        address: "Jhapa"
    },
    {
        name: "User9",
        email: "user9@gmail",
        address: "Kathmandu"
    },
    {
        name: "User 10",
        email: "user10@gmail",
        address: "Kathmandu"
    }
]

for (let i = 0; i < userDetails.length; i++) {
    console.log(`Name: ${userDetails[i].name}`)
    console.log(`Email: ${userDetails[i].email}`)
    console.log(`Address: ${userDetails[i].address}`)
    console.log("--------------------------")
}