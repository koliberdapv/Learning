// LIFE - Immediately-Invoked Function Expression
// older approach - new Modules
// simple approach to avoid global scope pollution
// good way at protecting the scope of your function and the variables within it.
// global namespace, extra steps

const num1 = 30;
const num2 = 50;

function add() {
  console.log(`the result is : ${num1 + num2}`);
}
add();

(function () {
  const num3 = 30;
  const num4 = 50;
  console.log(`the result is : ${num3 + num4}`);
})();

// pass argument
(function (num3, num4) {
  console.log(`the result is : ${num3 + num4}`);
})(500, 90);

// return/assign to a variable
const result = (function (num3, num4) {
  console.log(`the result is : ${num3 + num4}`);
  return num3 + num4;
})(500, 90);
console.log(result);
