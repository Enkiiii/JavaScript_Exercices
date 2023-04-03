// 2 - Écrire une fonction qui permet de connaître le minimum d'un tableau d'entiers.
// La fonction prend en entrée un tableau d'entiers, sa longueur et renvoie un élément du tableau.

function minimalElement(tablo) {
  // Variables
  //let minElm = tablo[0]; // Permet d'avoir toujours le premier élément du tableau comme élément minimal de départ
  let i = 0;
  let count = 1;
  let minElm = undefined;
  // Logique
  while (i != tablo.length) {
    if (i == 0 || tablo[i] < minElm) {
      minElm = tablo[i];
      count = 1;
    }
    // Compter le nombre de fois qu'apparait la valeur minimal
    else if (tablo[i] == minElm) {
      count++;
    }
    i++;
  }
  console.log(minElm);
  console.log("And it appeared " + count + " times");
}

// Tests
console.log("--------Exemple normal--------");
minimalElement([10, 7, 8, 4, 5, 6, 2, 2, 2, 2, 1, 1, 1, 4, 5, 8, 8, 4, 10, 3]);
console.log("--------Exemple normal--------");
minimalElement([]);
