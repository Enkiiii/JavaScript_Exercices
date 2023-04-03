// Sujet :
// Ecrire  un algorithme qui permet de saisir 10 entiers et qui permet de calculer la différence entre la somme des éléments paires et la somme des éléments impaires par exemple :  1  6  7  4   5  3   1   8   2   5

function pairImpair(entiers) {
  // Regarder comment faire avec si les entiers sont donnés sans etre dans un tableau
  // ( Idée : Vérifier les espaces entre chaque entier ou les virgules pour ensuite les classer dans un tableau)

  // Variables
  let pairs = [];
  let impairs = [];
  let sumPair = 0;
  let sumImpair = 0;

  // Logique

  // Pairs & Impairs
  for (let i = 0; i < entiers.length; i++) {
    if (entiers[i] % 2 == 0) {
      pairs.push(entiers[i]);
      sumPair += entiers[i];
    } else {
      impairs.push(entiers[i]);
      sumImpair += entiers[i];
    }
  }

  // // sumPair
  // for (let j = 0; j < pairs.length; j++) {
  //   sumPair += pairs[j];
  // }

  // // sumImpair
  // for (let k = 0; k < impairs.length; k++) {
  //   sumImpair += impairs[k];
  // }

  // Afficher result
  console.log(pairs);
  console.log(impairs);
  console.log(
    "Here's the difference between pairs and impairs numbers sum : ",
    sumPair - sumImpair
  );
}

pairImpair([5, 5, 4, 3, 2, 4, 1, 8, 9, 3]);
