let array = [1,2,3,4,5];
let index = array.findIndex(function(element){
    return element > 3;
});
console.log(index);
//saida: 3 ( indice do priemiro elemento maior que 3 )