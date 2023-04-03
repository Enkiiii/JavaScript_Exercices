function conwaySuite(lineIteration) {
    let lineStorage = [1];
    let tempStorage = [];
    let numberCount = 1;
    let caractere = "";
  
    if (lineIteration < 1) {
      console.log("Please use a number higher than 0");
    } else if (lineIteration == 1 || lineIteration > 1) {
      console.log(lineStorage);
    } else {
      // Traitement de chaque lignes
      for (i = 1; i < lineIteration; i++) {
        // Traitement de chaque chiffre à l'intérieur de la ligne
        for (j = 0; j < lineStorage.length; j++) {
          // On attribue la première valeur du tableau à caractere
          while (caractere == lineStorage[0]){
            numberCount++;
          }
          // Remplir le tableau temporaire
          tempStorage.push(numberCount);
          tempStorage.push(lineStorage[j]);
          lineStorage = tempStorage;

          // Reset les variables
          numberCount = 1;
          tempStorage = [];
          caractere = lineStorage[j];

          // Resultat
          console.log(lineStorage);
        }
      }
    }
  }
  console.log("--------Test 0--------");
  conwaySuite(0);
  console.log("--------Test 1--------");
  conwaySuite(1);
  console.log("--------Test 2--------");
  conwaySuite(2);
  console.log("--------Test 5--------");
  conwaySuite(5);