let fila = [1, 2, 3];
fila.toArray = function() {
    return this.slice();
};
let arrayFila = fila.toArray();
console.log(arrayFila); //saida: [1, 2, 3]