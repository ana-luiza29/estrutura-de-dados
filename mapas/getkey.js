let mapa = new Map();
mapa.set('chave1', 'valor1');

console.log(mapa.get('chave1')); // saida: valor 1
console.log(mapa.get('chave2'));
// saida: undefined (pois a chave2 nao existe no mapa )