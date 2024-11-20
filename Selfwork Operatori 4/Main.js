// Dichiarazione Variabili
let numTotGatti = 50;
let numGattiFila = 6;

// Risultati
let numFile = Math.floor(numTotGatti/numGattiFila);
let gattiEsclusi = numTotGatti % numGattiFila;
let gattiMancantiFila = numGattiFila - gattiEsclusi;

// Stampa a schermo i risultati
console.log(`Ci sono ${numFile} file di gatti e ne mancano ${gattiMancantiFila} per una nuova fila, con un avanzo di ${gattiEsclusi}`);