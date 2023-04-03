const tablo = [3, 1, 4, 1, 6];
const newTablo = [];

for (let number of tablo) {
  newTablo.splice(0, 0, number);
}

console.log(newTablo);

/* Schéma : 
Etape 1 : []    ---->      Tableau vide
Etape 2 : [3]   ---->      On ajoute avec splice à l'index 0, sans supprimer, le nombre qui nous intéresse
Etape 3 : [1,3] ---->      Meme chose avec le chiffre suivant du premier array
etc etc 
*/
