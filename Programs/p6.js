//Javascript to Find Sum of Digits of a Number
// 123456789
let num = Number(process.argv[2]);
//123456789  => 123456789 % 10 => 
// 9
// 8
// 7
// 6
// 5
// 4
// 3
// 2
// 1
let sum = 0;
while(num !=0 ){
    const r = num % 10;  
    sum +=r;  
    num = num/10; 
    num = Math.floor(num);
}
console.log("Sum is ",sum);