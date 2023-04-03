// Sujet :
// Écrire  un algorithme qui compte le nombre d'éléments en double ( deux éléments ou plus )  dans un tableau d'entiers saisie par l'utilisateur.

function doubleElements(entiers) {
  // Idée : Regarder si on peut faire en sorte de mettre une valeur de départ de base pour toute nouvelle entrée

  // Variables
  let elements = {};
  let dupeCount = 0;

  // Logique

  // Ajout ou création d'une clef/valeur pour chaques élément
  for (let i = 0; i < entiers.length; i++) {
    if (elements[entiers[i]] === undefined) {
      elements[entiers[i]] = 1;
    } else {
      elements[entiers[i]] += 1;
    }
  }

  // Afficher le nombre de dupe
  for (const element in elements) {
    if (element > 1) {
      dupeCount++;
    }
  }
  console.log("There is " + dupeCount + " elements that contains duplicates");

  // Afficher tous les dupes
  for (let [key, value] of Object.entries(elements)) {
    if (value > 1) {
      console.log(key, " is present ", value, " times"); // Trouver comment afficher la clef de la valeur uniquement
    }
  }

  // console.log(elements);
}

doubleElements([3, 3, 3, 2, 2, 2, 1, 4, 4, 4, 4, 5, 5, 5, 5, 5]);




  //     // Afficher tous les dupes
  // for (const element in elements) {
  //     if (element > 1) {
  //         console.log("There is ", element, " duplicates of ", elements[element] ) // Trouver comment afficher la clef de la valeur uniquement
  //     }
  // }