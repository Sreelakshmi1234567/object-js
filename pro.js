
let personproto={
    display(){
        return`my name is ${this.name} and ${this.age} years old`;

    }
}
let person = Object.create(personproto)
person.age = 33
person.name ="sree"
console.log(person.display());
