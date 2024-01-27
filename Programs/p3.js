//Javascript to Find the Largest Number Among Three Numbers
const variables = process.argv;
const num1 = Number(variables[2]);
const num2 = Number(variables[3]);
const num3 = Number(variables[4]);

if(num1 > num2 && num1 > num3){
    console.log(`${num1} is greater`);
}else if (num2 > num3){
    console.log(`${num2} is greater`);
}else {
    console.log(`${num3} is greater`);
}