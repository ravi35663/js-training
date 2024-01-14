var myName = "Ravi"
var age = 25;
console.log("Hello World");
console.log(person);
function person(name){
    console.log("Email",email) //
    var email = "mohit@gmail.com"
    console.log("Email",email) //
    console.log("My name is ",name);
}
person("Mohit");



/*
    Execution Context:
    => Memory:                          => Code of Execution:
                                        Hello World
    myName : undefined -> Ravi          
    age: undefined -> 25
    person: person(name){
        console.log("My name is",myName)
    }



*/