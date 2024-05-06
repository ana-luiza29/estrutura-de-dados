let array = [1,2,3,4,5];
let meuArray = array.filter(function(element){
    return element % 2 === 0;
}) 
  
;
console.log(meuArray); // saida [2,4]