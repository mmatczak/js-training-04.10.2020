const person = {
    firstName: 'Marek',
    address: {
        street: 'Legnicka',
        city: 'Wroclaw'
    },
    sayHello() {
        return 'Hello, I am ' + this.firstName;
    }
}

console.log(person.sayHello());
