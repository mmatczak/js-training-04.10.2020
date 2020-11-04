const person = {
    firstName: 'Marek',
    address: {
        street: 'Legnicka',
        streetNo: 0,
        city: 'Wroclaw'
    },
    sayHello() {
        return 'Hello, I am ' + this.firstName;
    }
}

// false, 0, '', NaN, null, undefined

// const city = person && person.address && person.address.city;
const streetNo = person?.address?.streetNo;
// console.log(streetNo || 'unknown number');
// console.log(streetNo != null ? streetNo || 'unknown number');
console.log(streetNo ?? 'unknown number');
