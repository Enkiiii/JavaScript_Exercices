const tablo = [3, 1, 2, 6, 5, 7, 9, 9, 8];
let t1 = [];

if (t1.length == 0) {
  t1.push(tablo[0]);
}

for (i = 0; i < tablo.length; i++) {
  for (j = 0; j < t1.length; j++) {
    if (tablo[i] <= t1[j]) {
      t1.splice(j, 0, tablo[i]);
      break;
    }
  }
  if (j == t1.length) {
    t1.push(tablo[i]);
  }
}
console.log(t1);

// Check si t1 est vide > Le remplir avec la première valeur de tablo sinon

// Pour chaques valeurs de tablo,
// Check si la valeur du i = 1 de tablo est supérieure à la valeur j = 0 de t1
// Si oui, push la valeur dans le tableau
// Si non,
// check la valeur j précédente de t1 et répéter le processus
