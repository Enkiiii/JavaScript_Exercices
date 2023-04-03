// Sujet :
// On a un nombre, si le nombre est pair, on divise par 2,
// Si le nombre est impair, on calcule (3*le nombre +1)/2.

// Donner le nombre d'étapes jusqu'à ce qu'on arrive à 1
// Le plus grand nombre par lequel nous sommes passé.

// Voir youtube Syracuse.

const syracuseSuite = (number) => {
  let stepCount = 0;
  let newNumber = "";
  // On considère que le premier nombre qu'on utilise compte
  let highestNumber = number;

  while (number != 1) {
    // Réitération
    if (number % 2 == 0) {
      newNumber = number / 2;
    } else {
      newNumber = 3 * number + 1;
    }

    // Nombre le plus élevé
    if (highestNumber < newNumber) {
      highestNumber = newNumber;
    }

    stepCount++;
    number = newNumber;
    // Pas besoin de reset newNumber
    // newNumber = "";
  }

  let result =
    "The highhest number we got to is " +
    highestNumber +
    " and it takes " +
    stepCount +
    " steps to get to the number 1.";
  return result;
};

console.log(syracuseSuite(15));
console.log(syracuseSuite(16));
console.log(syracuseSuite(19));
console.log(syracuseSuite(20));