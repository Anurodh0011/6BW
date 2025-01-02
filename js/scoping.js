// Scoping

// variable declared using var is global whether it is declared inside a block or outside a block.

// var x = 5;
// console.log(x)
// {
//     var x = 10;
//     console.log(x)
// }
// console.log(x)


// variable declared using let is block scoped. It is only accessible within the block it is declared.
let x = 5;
console.log(x)   //5
{
    let x = 10;
    console.log(x)     //10
}
console.log(x)  //5


// variable declared using let is block scoped. It is only accessible within the block it is declared.
let y = 5;
console.log(y)      //5
{
    y = 10;
    console.log(y)   //10
}
console.log(y)      //10  