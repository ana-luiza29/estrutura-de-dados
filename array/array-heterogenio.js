let meuArray = [1, "dois", {nome: "joao"}, [4, 5, 6], function(){ return "funcao dentro de um array"}];

console.log(meuArray[0]);
console.log(meuArray[2]);

meuArray.push(7);
console.log(meuArray);

meuArray.forEach(function(element){
    console.log(element);
});