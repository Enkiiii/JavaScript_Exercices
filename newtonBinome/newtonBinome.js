function newton(iterationNB) {
  let newtonArray = [1];
  let newtonArrayTemporary = [1];

  // Nombre d'itération de la boucle

  // Cas 0
  if (iterationNB === 0) {
    console.log(newtonArray);
    console.log(newtonArrayTemporary);
  } else {
    for (let i = 0; i < iterationNB; i++) {
      // Le reste
      for (let j = 0; j < newtonArray.length; j++) {
        let minusJ = 0;
        if (newtonArray[j - 1] === undefined) minusJ;
        else minusJ = newtonArray[j - 1];

        if (newtonArray[j] > 0 && newtonArray[j] !== undefined) {
          console.log("toto2");
          newtonArrayTemporary.push(minusJ + newtonArray[j]);
          // Cas final
        } else if (newtonArray[j] === undefined) {
          console.log("toto");
        }
      }
      //newtonArrayTemporary.push(1);
      newtonArray = [...newtonArrayTemporary];
      newtonArrayTemporary = [];
      // newtonArray.splice(0, newtonArray.length, newtonArrayTemporary);

      console.log(newtonArray);
      //   console.log(newtonArrayTemporary);
    }
  }
}

newton(4);
