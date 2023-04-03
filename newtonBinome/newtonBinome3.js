let line = [];
let lineTemp = [];

const iterationNb = 8;

for (let colonne = 1; colonne < iterationNb; colonne++) {
  for (let i = 0; i < colonne; i++) {
    if (i == 0 || i == colonne - 1) {
      lineTemp.push(1);
    } else {
      lineTemp.push(line[i] + line[i - 1]);
    }
  }
  line = [...lineTemp];
  lineTemp = [];
  console.log(line);
}
