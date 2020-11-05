class EmployeeFormController {
    nameChanges = [];

    observeFirstNameChanges() {
        const firstNameElement = document.querySelector('#firstName');
        firstNameElement.addEventListener('keyup', (event) => {
            console.log(this);
            console.log(event.target.value);

            this.nameChanges.push(event.target.value);
        });
    }
}

const ctrl = new EmployeeFormController();
ctrl.observeFirstNameChanges();

document.querySelector('button')
    .addEventListener('click', function () {
        console.log(ctrl.nameChanges);
    });


// JavaScript ABC

// apply
// bind
// call

// function sum(a, b) {
//     console.log(this);
//     return a + b;
// }
//
// const sum1 = sum.call({name: 'something'}, 1, 2);
// sum.apply(null, [1, 2]);

// function callMe(callbackFn) {
//     setTimeout(() => {
//         callbackFn.call(null, 'result');
//     }, 2000);
// }

