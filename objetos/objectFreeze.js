const person = {
    name: "ana",
    age: "16",
    city: "cuiaba",
};
Object.freeze(person);
person.age = 16; //isso nao tera efeito porque o objeto esta congelado
console.log(person) // saida: { name: 'ana', age: '16', city: 'cuiaba' }