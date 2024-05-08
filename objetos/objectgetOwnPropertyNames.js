const person = {
    name: "ana",
    age: "16",
    city: "cuiaba",
};
const propertyNames = Object.getOwnPropertyNames(person);
console.log(propertyNames); // Saida:  [ 'name', 'age', 'city' ]