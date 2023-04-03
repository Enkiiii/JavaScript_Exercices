// Write a JavaScript program to get the integers in range (x, y)
// Example : range(2, 9)
// Expected Output : [3, 4, 5, 6, 7, 8]

const intInRange = (firstNum, lastNum) => {

  // if ( > num1) {
  //   lastNum = num0;
  //   firstNum = num1;
  // }

  if (lastNum - firstNum === 2) {
    return [firstNum + 1];
    // Pourquoi les crochets ? 
  } else {
    let rangeInts = intInRange(firstNum, lastNum - 1);
    rangeInts.push(lastNum - 1);
    return rangeInts;
  }
};

console.log("--------Tests--------");
console.log(intInRange(1, 8));
console.log(intInRange(4, 6));
console.log(intInRange(8, 12));

// console.log(intInRange(12, 8));
// console.log(intInRange(15, 5));
