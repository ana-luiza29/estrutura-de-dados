const person = {
    name: "ana",
    age: "16",
    city: "cuiaba",
};
Object.seal(person);
person.age = 16 
person.gender = "masculino";
console.log(person); 