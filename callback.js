// function as a parameter of another function

function greet(name,callback){
    console.log("hello "+ name);
    callback();
}
function sayBye(){
    console.log("GoodBye");
}

greet("hari",sayBye);