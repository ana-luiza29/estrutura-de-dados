let array = [1,2,3,4,5];
let evenNumber = array.find(function(element){
    return element % 2 ===0;
});
console.log(evenNumber); // saida: 2 (primeiro numero par)