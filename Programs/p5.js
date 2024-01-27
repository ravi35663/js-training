//Javascript to Find the Number of Integers Divisible by 5 in a range
let initial = Number(process.argv[2]);
let final = Number(process.argv[3]);
// 50 5

temp_initial = initial < final ? initial: final; // temp_initial => 5;
temp_final = final > initial ? final: initial; // 
for(let i=temp_initial;i<=temp_final;i++){
    if(i % 5 === 0){
        console.log(`${i} is divisible by 5`);
    }
}