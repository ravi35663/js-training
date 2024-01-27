//Javascript to Swap Two Numbers
const vars = process.argv;
let a = Number(vars[2]);
let b = Number(vars[3]);
console.log(`Current values a: ${a} and b:${b}`);
// Method : 1
// let temp = a;
// a = b;
// b = temp;

// Method - 2
// [a,b] = [b,a];

// Method - 3
a = a + b;
b = a - b;
a = a - b;

// Dry run
// a = 10;
// b = 20
// a = a+b => 10 + 20 => 30;
// b = a - b => 30 - 20 =>  10;
// a = a - b => 30 -10 => 20
 
console.log(`Swapped values a: ${a} and b:${b}`);