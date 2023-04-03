// Trouve les éléments présents dans l'array sans reprendre les doubles

const uniqueElement3 = (numbers) => {
    
    let storage = {};
    // Trouver comment return la key sans la value d'un objet
    let result = [];

    for (let i = 0; i < numbers.length; i++) {
        if (storage[numbers[i]] === undefined) {
            storage[numbers[i]] = 1;
            result.push(numbers[i]);
        }
    }
    return result;
}




// Test Data :
console.log(uniqueElement3([1, 2, 2, 3, 4, 4, 5]));
console.log(uniqueElement3([1, 2, 3, 4, 5]));
console.log(uniqueElement3([1, -2, -2, 3, 4, -5, -6, -5]));

// Expected Output:
// [1,2,3,4,5]
// [1,2,3,4,5]
// [1,-2,3,4,-5,-6]