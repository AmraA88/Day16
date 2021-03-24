class Pets {
    constructor (name, legs) {
        this.name = name;
        this.legs = legs;
    }
    walk() {
        numberOfLegs;
    }
}
class Dog extends Pets {
    constructor(name, legs) {
        super(name)
        this.legs = legs;
    }
    bark() {
        dogSay;
    }
}
let dog = new Dog(name, legs);
console.log(dog.walk());
console.log(dog.bark());
module.exports = {
    Pets,
    Dog
}