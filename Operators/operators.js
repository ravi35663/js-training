/*
    ASCII Value:
    a-z     ==> 97 - 122
    A-Z     ==> 65 - 90  
    0 - 9   ==> 48 - 57

*/ 

// a   b   c   z  
// 97  98  99  122
// A   B   C   Z
// 65  66  67  90 


// Operators:
const first_name = "Ravi";
const last_name = "Kumar";

let name =  first_name + last_name;
/*
    let name =  first_name + last_name;
    here first_name and last_name is operands and '+' is an operator.

*/

/*
    1) Arithmetic Operators:
        -> Generally arithmetic operators works on number
        -> +
        -> -
        -> * 
        -> %
        -> /
*/

/*
    2) Comparison:
        ==> == (this check only values not types of the data type)
            10 == "10" --> true
            10 == 10   --> true
            10 == 10.0 --> true
        -> != (this check only values not types of the data type)
        ==> >  --> (greater than)
            10 > 10 -> false
            9  > 10 -> false
            10 > 9 -> true  
            "a" > "b" -> false => 97 > 98 -> false
            "b" > "a" -> true => 98 > 97  -> true
        -> <  --> (less than)
        -> >= --> (greater and equal)
        -> <= --> (less and equal)
        -> === (this check both  values and data types )
            10 === "10" --> false
            10 === 10   --> true
            10 === 10.1 --> false
            10 === 10.0 --> true
        -> !== (this check both  values and data types )
            10 !== "10" --> true
            10 !== 10   --> false
            10 !== 10.0 --> false
    Note: Comparison only take place between similar data types otherwise it will return false;
*/


/*
    //Logical operators,     
    1) && -> return true if both condition is true otherwise return false.
    2) || -> return true if any condition is true otherwise return false.
    3) !  ->  !true => false, !false => true : ! always returns its inverse value

    "" ,        --> false
    ''          --> false
    undefined   --> false
    null        --> false
    0           --> false
    Note: every none zero value considered as true in js
*/

/*
 *  Ternary operator
    condition ? true_result : false_return 
    20 > 8 ? console.log("True"): console.log("False")
*/
 
/*
    1)Increment
        -> post increment : a++  => a = a + 1
        -> pre increment  : ++a  => a = a + 1 
    
    2) Decrement :
        -> post decrement : a--  => a = a - 1
        -> pre decrement  : --a  => a = a - 1 

    // Pre increment
    // let a = 10;
    // ++a => a = (a+1) => 11
    // let b = ++a  // b = 
    // console.log("A and B is ",a,b);

    // Post increment
    // let a = 10;
    // a++ => a + 1 => 
    // b = a => a++ => a + 1 
    // let b = 1 + a++  // b = 
    // console.log("A and B is ",a,b);s
    
*/ 

/*
    Assignment Operators:
    -> = (Assignment operator)
    Compound Assignment operators
    -> += =>  result += 1=> result = result + 1 
    -> -= =>  result /= 1=> result = result - 1  
    -> *= =>  result *= 1=> result = result * 1 
    -> /= =>  result /= 1=> result = result / 1 
    -> %= =>  result %= 1=> result = result % 1 
*/

/*
    Conditional statements (if, else, switch) 
    1) if
    2) if-else
    3) if-else-ladder (if{}else if {}..... else{})
    4) Switch
*/
// Simple if
if(10 > 4){
    console.log("10 > 4",10 > 4);
}

// if - else
if(10 < 4){
    // code here
    console.log("If block")
}else {
    // code here
    console.log("else block")
}

// else if ladder
if(1 > 2){
    console.log("1 is greater than 2");
}else if( 2>3 ){
    console.log("2 is greater than 3");
}else if (30 > 4){
    console.log("3 is greater than 4");
}else if(10 > 4){
    console.log("10 is greater than 4");
}else {
    console.log("Else block")
}


// Nested if else
const a = 10
const b = 100
if(b > a){
    const r = b % 10;
    if(r === 0){
        console.log("B is divisible by a");
    }else{
        console.log("B is not divisible by a");
    }
}

// Switch case
const value = 1;
switch(value){
    case 1:{
        console.log("Case 1");
        break;
    }
    case 2:{
        console.log("Case 2");
        break;
    }
    case 3: {
        console.log("Case 3");
        break;
    }
    case 4: {
        console.log("Case 4");
        break;
    }
    default:{
        console.log("Default case");
    }
}

/*
    Loops
    1) for(initial_value ; condition ; iteration){ ...code}
    2) while(condition){
        // code 
        // iteration
        }
    3) do-while(condition);
*/
// For Loop
// Way - 1
// for(var i=0;i<=10;i++){ // i = i+1 // i++ ==> ++1 => i = i + 1 =>  i = 1 + i
//     // i = 0  ; 0 <=10 -> result -> i++ => 1
//     // ; 1 <=10 -> result -> i++ => 2
//     // ; 2 <=10 -> result -> i++ => 3
//     // ...
//     // ; 11 <=10 -> result -> i++ => 10
//     console.log("Value of i lin 209",i); 
// }

// Way - 2
// let j = 0
// for(;j<=10;){
//     console.log("Value of j is :",j);
//     j++;
// }

// Way - 3
// for(let k=0 ; k<=10 ;  ){
//     console.log("Value of j is :",k);
//     k++;
// }

// Way - 4
// for(let i=0; i<=10 ;i++)
// console.log("Hello World ")

// Way - 5
for(let i=0; i<=10 ;i++);
console.log("Hello World ")



//Loops (for, while, do-while)
