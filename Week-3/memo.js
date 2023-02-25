// let sum =0;
// const calc=(n)=>{
//     for(let i=0;i<=n;i++){
//     sum+=i;
// }
// return sum;

// }
// const memoize=()=>{
//     let cache={};
//     return function(...args){
//         let n=args[0];
//         if(n in cache){
//             console.log("cache");
//             return cache[n];
//         }
//         else{
//             let rerule=fun(n);
//             cache[n]=result;
//             return result;
//         }

//     }
// }
// memoize();
// console.log(calc(5))
let x = myFunction(3,4);
function myFunction(a,b){
    return a+b;
}
