let promiseOne = new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("hello i am promise 1.");
        resolve();
    },1000)
})
promiseOne.then(function(){
    console.log("promise one is resolved");
})
// -> This shows that after writing the resolve() it will push it in .then because then only the promise is resolved

new Promise((resolve,reject)=>{
    console.log("hello");
    resolve();
}).then(()=>{
    console.log("pormise 2 is resolved");
})
// -> This shows that promise can be stored in variables or it can be used without variables


let promiseThree = new Promise((resolve,reject)=>{
    let err = true;
    if(!err){
        resolve({name:"hari",addr:"brt"})
    }else{
        reject("err")
    }
})
promiseThree.then((response)=>{
    console.log(response);
})
// promiseThree.catch((err)=>{
//     console.log(err);
// })//->This is not valid.Cause  in Node.js v15+, there's a timing issue when you attach .then() and .catch() separately instead of chaining them.

.catch((err)=>{
    console.log(err);
})
//-->In this method we can pass the argument in the resolve and reject which can be access by the then and catch


let promiseFour = new Promise((resolve,reject)=>{
    console.log("promise four start");
    let err = false;
    if(!err){
        resolve({name:"hari",addr:"brt"})
    }else{
        reject("Error: eror")
    }
})

promiseFour.then((response)=>{
    console.log(response);
    return response.name;
}).then((nextResponse)=>{
    console.log(nextResponse);
}).catch((err)=>{
    console.log(err);
})
// --> By this we can chain .then .then and send the nextResponse is send by return the response and catch is occur when the reject occur 