let dict = {};

let phrase =
  "En voilà une de belle phrase qu'il va falloir retourner dans le dictionnaire afin de répondre à la question";

for (word of phrase.split(" ").reverse()) {
  if (dict[word] === undefined) {
    dict[word] = 1;
  } else {
    dict[word] += 1;
  }
}

console.log(dict);

// let words = phrase.split(" "); // On découpe la phrase en plusieurs mots
// // console.log(words)
// let wordsReversed = words.reverse();
// // console.log(wordsReversed)
// let phraseReversed = wordsReversed.join(" ");
// // console.log(phraseReversed)
