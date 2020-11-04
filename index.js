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


class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    sayHello() {
        return 'Hello, I am ' + this.firstName;
    }
}

const marek = new Person('Marek', 'Matczak');
console.log(marek.sayHello());
