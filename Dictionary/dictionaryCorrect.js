// On ne fait pas de fonction afin de ne pas la stocker pour rien (gain de mémoire)
// Ce n'est pas une règle primordiale cependant

// L'objet dictionary va stocker nos mots
let dict = {};
let phrase =
  "Je ne sais pas quoi dire, alors voici une phrase type qui peut servir d'exemple";

// On parcours la phrase avec comme élément de recherche des caractères.
for (caract of phrase) {
  if (dict[caract] === undefined) {
    dict[caract] = 1;
    // Si le caract n'existe pas dans le dictionnaire, en créer un et le faire passer à 1
  } else if (dict[caract] != undefined) {
    dict[caract] += 1;
    // Si le caract existe déjà dans le dictionnaire, rajouter 1.
  }
}
console.log(dict);
