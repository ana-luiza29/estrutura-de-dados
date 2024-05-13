let fila = [1,2,3];
//define a função dequeue como parte do protótipo dee Array
Array.prototype.dequeue = function() {
    return this.shift();
};

console.log(fila.dequeue()); // saida: 1 
console.log(fila); //saida: [2, 3]