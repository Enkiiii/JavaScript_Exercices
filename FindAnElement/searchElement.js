function searchElement(tablo, searchElm) {
    // Variables
    indexesArray = [];
    let i = 0;
    let tabloLength = tablo.length
  
    // Gestion d'erreur
    if (
      tabloLength <= 0 ||
      tabloLength == undefined ||
      tablo == undefined
    ) {
      console.log('"tablo" or "tabloLength" is empty or undefined');
      return;
    } else if (searchElm == undefined) {
      console.log('"searchElm" is not defined');
      return;
    } else {
      // Logique
      while (i != tabloLength) {
        if (searchElm == tablo[i]) {
          indexesArray.push(i);
        }
        i++;
      }
    }
    // Resultats
    if (indexesArray.length > 0) {
      console.log(
        "Txx he element you are looking for is present at those indexes: " +
          indexesArray
      );
    } else {
      console.log(
        "zzThe element you are looking for is present at this index: " +
          indexesArray
      );
    }
  }
  
  Tests
  console.log("--------Exemple normal--------")
  searchElement([10, 7, 8, 4, 5, 6, 2, 1, 4, 5, 8, 8, 4, 10, 3], 15, 10)
  console.log("--------Exemple index vide--------")
  searchElement([5, 7, 8, 4, , 1], 6);
  console.log("--------Exemple Tableau--------");
  searchElement([0],0);
  console.log("--------Exemple différent d'un tableau--------")
  searchElement(3, 3);