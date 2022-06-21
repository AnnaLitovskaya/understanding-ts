"use strict";
// type Admin = {
//   name: string;
//   privileges: string[];
// }
var _a;
const e1 = {
    name: 'Max',
    privileges: ['create-server'],
    startDate: new Date()
};
function add2(a, b) {
    if (typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();
    }
    return a + b;
}
const result2 = add2('Max', ' Schwarz');
result2.split(' ');
const fetchedUserData = {
    is: 'u1',
    name: 'Max',
    job: { title: 'CEO', description: 'My own company' }
};
console.log((_a = fetchedUserData === null || fetchedUserData === void 0 ? void 0 : fetchedUserData.job) === null || _a === void 0 ? void 0 : _a.title);
const userInput1 = null;
const storedData = userInput !== null && userInput !== void 0 ? userInput : 'DEFAULT';
console.log(storedData);
function printEmployeeInformation(emp) {
    console.log('Name: ' + emp.name);
    if ('privileges' in emp) {
        console.log('Privileges: ' + emp.privileges);
    }
    if ('startDate' in emp) {
        console.log('Start Date: ' + emp.startDate);
    }
}
printEmployeeInformation({ name: 'Max', startDate: new Date() });
class Car {
    drive() {
        console.log('Driving...');
    }
}
class Truck {
    drive() {
        console.log('Driving a truck...');
    }
    loadCargo(amount) {
        console.log('Loading cargo ...' + amount);
    }
}
const v1 = new Car();
const v2 = new Truck();
function useVehicle(vehicle) {
    vehicle.drive();
    if (vehicle instanceof Truck) {
        vehicle.loadCargo(1000);
    }
}
useVehicle(v1);
useVehicle(v2);
function moveAnimal(animal) {
    let speed;
    switch (animal.type) {
        case 'bird':
            speed = animal.flyingSpeed;
            break;
        case 'horse':
            speed = animal.runningSpeed;
    }
    console.log('Moving at speed: ' + speed);
}
moveAnimal({ type: 'bird', flyingSpeed: 10 });
// const userInputElement = <HTMLInputElement>document.getElementById('user-output')!;
// const userInputElement = document.getElementById('user-output')! as HTMLInputElement;
// userInputElement.value = 'Hi there!'
const userInputElement = document.getElementById('user-output');
if (userInputElement) {
    userInputElement.value = 'Hi there!';
}
const errorBag = {
    email: 'Not a valid email!',
    userName: 'Must start with a capital character!'
};
//# sourceMappingURL=advanced-types.js.map