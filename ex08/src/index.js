class Person {
    constructor(name, email, age) {
        this.name = name
        this.email = email
        this.age = age
    }
    getPerson() {
      var PersonInfo;
      return "Name: ${this.name}, email:${this.email}, age: ${this.age}"
    }
}
module.exports = Person;