const person = {
    'first-name': 'Marek'
};

// person.first-name = 'Czarek'
person['first-name'] = 'Czarek';
person.lastName = 'Matczak'
console.log(person);
delete person.lastName;
console.log(person);
