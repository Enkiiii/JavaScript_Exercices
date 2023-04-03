const uniqueElement = (numbers) => {
  let storage = {};
  let result = [];

  for (let i = 0; i < numbers.length; i++) {
    if (storage[numbers[i]] === undefined) {
      storage[numbers[i]] = 1;
    } else {
        storage[numbers[i]] += 1;
    }
  }

  for (let [key, value] of Object.entries(storage)) {
    if (value === 1) {
        result.push(key);
    }
  }
  return result;
};



// Test Data :
console.log(uniqueElement([1, 2, 2, 3, 4, 4, 5]));
console.log(uniqueElement([1, 2, 3, 4, 5]));
console.log(uniqueElement([1, -2, -2, 3, 4, -5, -6, -5]));

// Expected Output:
// [1,2,3,4,5]
// [1,2,3,4,5]
// [1,-2,3,4,-5,-6]
