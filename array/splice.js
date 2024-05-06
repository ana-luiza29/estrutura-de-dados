let array = [1 , 2, 3, 4, 5];
array.splice(2, 0, "a", "b"); // insire "A" e "b" a partir do indice 2 
console.log(array); // saida [1, 2, "a", "b", 3, 4, 5]


array.splice(3, 2); //remover dois elementos a partit do indice 3
console.log(array); // [1,2, "a", 4,5]