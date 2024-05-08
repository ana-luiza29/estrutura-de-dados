const personPrototype ={
    greet: function(){
        console.log(`Olá, meu nome é ${this.name}`);
    }
};
const objAna = Object.create(personPrototype);
objAna.name ="Ana";
objAna.greet(); // saida: Olá, meu nome é Ana