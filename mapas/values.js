let mapa = new Map ();
mapa.set('chave1', 'valor1');
mapa.set('chave2', 'valor2');

let iterador = mapa.values();
for(let valor of iteradorr) {
    console.log(valor); 
}
// saida:
// chave1
//chave2