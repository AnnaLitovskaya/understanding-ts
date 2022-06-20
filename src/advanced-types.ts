// type Admin = {
//   name: string;
//   privileges: string[];
// }

// type Employee = {
//   name: string;
//   startDate: Date;
// }

// type ElevatedEmployee = Admin & Employee;

interface Admin {
  name: string;
  privileges: string[];
}

interface Employee {
  name: string;
  startDate: Date;
}

interface ElevatedEmployee extends Admin, Employee {}

const e1: ElevatedEmployee = {
  name: 'Max',
  privileges: ['create-server'],
  startDate: new Date()
}

type Combinable1 = string | number;
type Numeric = number | boolean;

type Universal = Combinable1 & Numeric;

function add2(a: string, b: string): string;
function add2(a: number, b: number): number;
function add2(a: string, b: number): string;
function add2(a: number, b: string): string;
function add2(a: Combinable1, b: Combinable1) {
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
  job: { title: 'CEO', description: 'My own company'}
}

console.log(fetchedUserData?.job?.title)

const userInput1 = null;

const storedData = userInput ?? 'DEFAULT';

console.log(storedData);

type UnknownEmployee = Employee | Admin;

function printEmployeeInformation(emp: UnknownEmployee) {
  console.log('Name: ' + emp.name);
  if ('privileges' in emp) {
    console.log('Privileges: ' + emp.privileges);
  }
  if ('startDate' in emp) {
    console.log('Start Date: ' + emp.startDate);
  }
}

printEmployeeInformation({name: 'Max', startDate: new Date()});


class Car {
  drive() {
    console.log('Driving...');
  }
}

class Truck {
  drive() {
    console.log('Driving a truck...');
  }

  loadCargo(amount: number) {
    console.log('Loading cargo ...' + amount);
  }
}

type Vehicle = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

function useVehicle(vehicle: Vehicle) {
  vehicle.drive();
  if (vehicle instanceof Truck) {
    vehicle.loadCargo(1000);
  }
}

useVehicle(v1);
useVehicle(v2);

interface Bird {
  type: 'bird';
  flyingSpeed: number;
}

interface Horse {
  type: 'horse';
  runningSpeed: number;
}

type Animal = Bird | Horse;

function moveAnimal(animal: Animal) {
  let speed
  switch (animal.type) {
    case 'bird':
      speed = animal.flyingSpeed;
      break;
    case 'horse':
      speed = animal.runningSpeed;
  }
  console.log('Moving at speed: ' + speed);
}

moveAnimal({type: 'bird', flyingSpeed: 10})


// const userInputElement = <HTMLInputElement>document.getElementById('user-output')!;

// const userInputElement = document.getElementById('user-output')! as HTMLInputElement;
// userInputElement.value = 'Hi there!'

const userInputElement = document.getElementById('user-output') as HTMLInputElement;

if (userInputElement) {
  (userInputElement as HTMLInputElement).value = 'Hi there!'
}

interface ErrorContainer { // { email: " Not a valid email", username: "Must start with a character"}
  [prop: string]: string;
}

const errorBag : ErrorContainer = {
  email: 'Not a valid email!',
  userName: 'Must start with a capital character!'
}
