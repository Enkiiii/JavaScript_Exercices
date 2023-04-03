// 1 - Écrire une fonction qui permet de rechercher un élément dans un tableau d'entiers.
// La fonction prend en argument un tableau, sa longueur, ainsi que l'élément à chercher ; elle renvoie un indice.
// fonction ([tableau], tableau.length, Ce qu'on cherche)

function searchElement(tablo, tabloLength, searchElm) {
  // Faire en sorte que l'on ne puisse entrer que des tableaux en premier élément,    > Cas problématiques
  // Parcourir ce tableau en recherchant un élément strictement égal à celui demandé
  // Cas où il y a plusieurs entiers identiques
  // Cas où il n'y en a pas
  // retourner l'index "i" de cet élément

  indexesArray = [];
  let b = true;

  while (b) {
    b = false;
    for (i = 0; i < tabloLength; i++) {
      // Element trouvé
      if (searchElm == tablo[i]) {
        indexesArray.push(i);
      }
      // Parcourir tous le tableau
      if (i == tabloLength - 1) {
      }
    }
  }
}

console.log(
  searchElement([5, 7, 8, 4, 5, 6, 2, 1, 4, 5, 8, 8, 4, 10, 3], 15, 10)
);
console.log(searchElement([5, 7, 8, 4, , 1], 6));
console.log(searchElement([], 0));
console.log(searchElement(3, 1, 3));
