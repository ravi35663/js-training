// Javascript to Check Whether a Given Number is Even or Odd

const num = Number(process.argv[2]);
if(num % 2 === 0){
    console.log("Number is even.",num);
}else{
    console.log("Number is odd: ",num);
}

