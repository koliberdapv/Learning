// new string methods
// startsWith(), endsWith(), includes(), repeat()

const person = 'Peter Smith';
const employee = '23456-EMP-PETER-SMITH';
const manager = '23456-MAN-JOHN-DOE';

// startsWith() - case sensitive
console.log(person.startsWith('Pet'));
// true
console.log(employee.startsWith('EMP'));
// false
console.log(employee.startsWith('EMP', 6));
// true (6 - index)

// endsWith()
console.log(manager.endsWith('DOE'));
// true
console.log(manager.endsWith('MAN', 9));
// true (only within first 9 characters)

// includes()
console.log(employee.includes('PETER'));
//true

// repeat
const multiplyPeople = (person, amount) => person.repeat(10);
console.log(multiplyPeople(person));
