'use strict'
const Tab = [1,2,3,4,5,8,9,15,27,58];

let t1 = [];    // Impaire
let t2 = [];    // Pair

let tAll = [t1,t2];

for (let number of Tab){
    tAll[1 - number%2].push(number)
}

console.log(tAll)

// Formule 0 à 1 et 1 à 0 
// x = 1    1 - x = 0
// x = 0    1 - x = 1
// 1 - number%2 