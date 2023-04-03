const tab0 = [3, 1, 4, 1, 5, 9, -2];
let b = true;

while (b) {
  b = false;
  for (i = 0; i < tab0.length - 1; i++) {
    if (tab0[i] > tab0[i + 1]) {
      // On replace les 2 items du tableau dans le bon sens cette fois-ci
      tab0.splice(i, 2, tab0[i + 1], tab0[i]);
      //   tab0[i], tab0[i + 1] = tab0[i + 1], tab0[i]; // (équivalent mathématiques)
      console.log(tab0);
      b = true;
    }
  }
}

console.log(tab0);

console.assert(true);
