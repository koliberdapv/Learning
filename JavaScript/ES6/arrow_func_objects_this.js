// Arrow Functions
// regular function : 'this' refers to parent, left of the dot
// arrow function : refers to it's current surounding scope

// const bob = {
//   firstName: 'bob',
//   lastName: 'smith',
//   sayName: function () {
//     console.log(this);
//     console.log(`Hello, my name is ${this.firstName} ${this.lastName}`);
//   },
// };
// bob.sayName();
// bob obj
// Hello, my name is bob smith

const bob = {
  firstName: 'bob',
  lastName: 'smith',
  sayName: function () {
    console.log(this);
    setTimeout(() => {
      console.log(`Hello, my name is ${this.firstName} ${this.lastName}`);
    }, 2000);
  },
};
bob.sayName();
// this refers to the bob obj
// if we use a regular function in this case (in setTimeout), this would refer to the Window obj

const anna = {
  firstName: 'anna',
  lastName: 'sanders',
  sayName: () => {
    console.log(this);
    console.log(`Hello, my name is ${this.firstName} ${this.lastName}`);
  },
};

// anna.sayName();
// Window obj
// Hello, my name is undefined undefined
