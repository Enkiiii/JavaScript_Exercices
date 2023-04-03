'use strict'
const Tab = [1,2,3,4,5,8,9,15,27,58];

let t1 = [];    // Impaire
let t2 = [];    // Pair

let tAll = [t1,t2];

for (let number of Tab){
    if ( number % 2 === 0 ){
        t2.push(number);   
    } else {
        t1.push(number);
    }
}

console.log(t1)
console.log(t2)