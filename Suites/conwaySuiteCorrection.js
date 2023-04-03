function conwaySuite(lineIteration) {
  let lineStorage = [1];
  let tempStorage = [];
  let numberCount = 1;
  let caractere;

  if (lineIteration < 1) {
    console.log("Please use a number higher than 0");
  } else if (lineIteration == 1) {
    console.log(lineStorage);
  } else {
    for (i = 1; i < lineIteration; i++) {
      // Traitement de chaque lignes
      tempStorage = []; 

      // Traitement de chaque chiffre à l'intérieur de la ligne
      for (j = 0; j < lineStorage.length; j++) {
        if (j == 0) {
          caractere = lineStorage[0];
          numberCount = 1;
        } else {
          if (caractere == lineStorage[j]) {
            numberCount++;
          } else {
            // Remplir le tableau temporaire
            tempStorage.push(numberCount);
            tempStorage.push(caractere);

            caractere = lineStorage[j];
            numberCount = 1;
          }
        }
      }
      // Remplir le tableau temporaire
      tempStorage.push(numberCount);
      tempStorage.push(caractere);
      lineStorage = tempStorage;
      console.log(lineStorage);
    }
  }
}

console.log("--------Test 5--------");
conwaySuite(10);
