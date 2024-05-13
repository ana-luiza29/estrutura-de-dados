let fila = [];
fila.isEmpty = function() {
    return this.length === 0;
};
fila.enqueue = function(item){
    this.push(item);

};
console.log(fila.isEmpty()); // saida: true
fila.enqueue(1);
console.log(fila.isEmpty()); // saida: false