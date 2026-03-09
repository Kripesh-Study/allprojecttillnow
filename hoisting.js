// console.log(a);
// var a;
// --> This lead the undefined cause a is initialized in execution context (var is initialized)


console.log(a);
console.log(b);
let a;
const b=null;
// --> This lead the reference error cause a is initialized in execution context (let,const is uninitialized)