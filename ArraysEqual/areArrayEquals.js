// Sujet :
// Ecrire un algorithme qui permet de tester l'égalité entre deux tableaux d'entiers (tailles 10). Le programme affiche VRAI si les composants des deux tableaux sont correspondent position par position, sinon il affiche FAUX.

const areArraysEquals = (array1, array2) => {
  let b = true;
  if (array1.length != array2.length) {
    console.log("FALSE");
  } else {
    for (let i = 0; i < array1.length; i++) {
      if (array1[i] != array2[i]) {
        b = false;
        console.log("FALSE");
        return;
      }
    }
    if (b) {
      console.log("TRUE");
      return;
    }
  }
}

console.log("-----Tests FAUX-----");
areArraysEquals([0, 1, 2, 3, 4, 5, 6, 7], [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

console.log("-----Tests VRAI-----");
areArraysEquals([0, 1, 2, 3, 4, 5, 6, 7, 8, 9], [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
