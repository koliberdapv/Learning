// Arrow Functions
// regular function : 'this' refers to parent, left of the dot
// arrow function : refers to it's current surounding scope

// regular expression
// const btn = document.querySelector('.btn');
// btn.addEventListener('click', function () {
//   this.style.color = 'black';
// });

// using arrow function to refer to the local scope (btn)
const btn = document.querySelector('.btn');
btn.addEventListener('click', function () {
  setTimeout(() => {
    this.style.color = 'black';
  }, 2000);
});
