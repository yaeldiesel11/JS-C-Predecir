// Problema 1
const cars = ['Tesla', 'Mercedes', 'Honda']
const [randomCar] = cars
const [, otherRandomCar] = cars
// randomCar tendrá el valor de Tesla, ya que es el primer índice del array. otherRandomCar tendrá el valor de Mercedes, ya que al usar la coma antes, omitirá el primer elemento del array (Tesla)
console.log(randomCar)
console.log(otherRandomCar)

// Problema 2
const employee = {
    name: 'Elon',
    age: 47,
    company: 'Tesla'
}
const { name: otherName } = employee;
//name no podrá mostrarse con console.log porque está fuera del current scope.
console.log(name);
console.log(otherName);

// Problema 3
const person = {
    name: 'Phil Smith',
    age: 47,
    height: '6 feet'
}
const password = '12345';
const { password: hashedPassword } = person;
//password puede mostrarse con console.log, está definido; no así hashedPassword, ya que password no está definido dentro del cons person, sino fuera
console.log(password);
console.log(hashedPassword);

// Problema 4
const numbers = [8, 2, 3, 5, 6, 1, 67, 12, 2];
const [, first] = numbers;
const [, , , second] = numbers;
const [, , , , , , , , third] = numbers;
// first = 2
// second = 5
// third = 2
// 2 no es igual a 5, false
// 2 es igual a 2, true
console.log(first == second);
console.log(first == third);

//Problema 5
const lastTest = {
    key: 'value',
    secondKey: [1, 5, 1, 8, 3, 3]
}
const { key } = lastTest;
const { secondKey } = lastTest;
const [, willThisWork] = secondKey;
//'value'
// todo el array de secondKey
// elemento indice 0 = 1
// segundo elemento, 5
console.log(key);
console.log(secondKey);
console.log(secondKey[0]);
console.log(willThisWork);