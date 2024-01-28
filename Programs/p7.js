//WAP to Check weather a number is perfect number or not.
const num = Number(process.argv[2]);
let temp_sum = 0;
for(let i=1;i<num;i++){
    if(num % i === 0){ // 0
        temp_sum +=i;
    }
}
if(temp_sum === num){
    console.log("Perfect number")
}else{
    console.log("Not a perfect number")
}
