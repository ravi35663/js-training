//Javascript to Find the Sum of Even and Odd Numbers in a number
// 12345678 ,
let num = Number(process.argv[2]);
let odd_sum = 0;
let even_sum = 0;
while(num){
    const digit = num % 10; // 12345678 % 10 => 8
    if(digit % 2 === 0){
        even_sum += digit;
    }else{
        odd_sum += digit;
    }
    console.log(`Number:${num} and digit : ${digit}`);
    num = num/10;
    num = Math.floor(num); 
}
console.log(`Even Sum is : ${even_sum} and odd sum is ${odd_sum}`);
// odd_sum = 1+ 3 + 5 + 7 
// 12345678/10=> 1234567
// 1234567
// 123456
// 12345
// 1234
// 123
// 12
// 1
// 0

