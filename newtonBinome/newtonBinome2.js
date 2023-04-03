function newton(iterationNB) {
  let newtonArray = [1];
  let newtonArrayTemporary = [1];

  // Nombre d'itération de la boucle
  for (let i = 0; i < iterationNB; i++) {
    // Ligne dans la boucle
    for (let j = 0; j < newtonArray.length; j++) {
      // Cas 0
      if (newtonArray[j] == 0) {
        newtonArrayTemporary.push(1);

        // Dernier cas
      } else if (newtonArray[j] == newtonArray.length) {
        newtonArrayTemporary.push(1);

        // Reste
      } else {
        newtonArrayTemporary.push(
          newtonArrayTemporary[j - 1] + newtonArrayTemporary[j]
        );
      }
    }
    // Passage des valeurs de newtonArrayTemporaray à newtonArray
    newtonArray = [...newtonArrayTemporary];
    console.log(newtonArrayTemporary);
  }
}

newton(0);
