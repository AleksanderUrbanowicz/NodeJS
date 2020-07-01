console.log(__dirname, __filename);

class Person{
    constructor(name, age)
    {
        this.name=name;
        this.age=age;
    }
   
    greeting()
    {
        console.log(`Hello ${this.name}`)
    }

}

const person ={
    name: 'Josh Doe',
    age: 30
}

module.exports = Person;