function areArraysEquals(array1, array2) {
  let b = true;
  let i = 0;
  
  if (array1.length != array2.length) {
    return false;
  }

  while (b) {
    if (array1[i] > 0 != array2[i] > 0) {
      b = false;
      console.log("FALSE");
      break;
    } else if (i == array1.length - 1 && b === true) {
      console.log("TRUE");
      break;
    }
    i++;
  }
}
console.log("-----Tests FAUX-----");
areArraysEquals([0, 1, 2, 3, 4, 5, 6, 7, 8, 9], [1, 2, 3, 4, 5, 6, 7, 8]);

console.log("-----Tests VRAI-----");
areArraysEquals([], [0, 1, 2, 3, 4, 5, 6, 7]);
