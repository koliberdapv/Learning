// Rest operator
// gathers/collects the items to an array
// we can use it as a parameter, but not as an an argument

// arrays
const fruit = ['apple', 'orange', 'lemon', 'pear'];
const [spoon, ...rest] = fruit;
console.log(spoon, rest);
// apple
// (3) ['orange', 'lemon', 'pear']

// objects
const person = { name: 'john', lastName: 'smith', job: 'developer' };
const { job, ...allTheRest } = person;
console.log(job, allTheRest);
// developer
// {name: 'john', lastName: 'smith'}

const getAverage = (name, ...scores) => {
  console.log(name);
  console.log(scores);
  let total = 0;
  for (const score of scores) {
    total += score;
  }
  console.log(`${name}'s average score is ${total / scores.length}`);
};

getAverage(person.name, 78, 90, 56, 43);
// john
// (4) [78, 90, 56, 43]
// john's average score is 66.75

const textScores = [78, 90, 56, 43, 99, 65];
getAverage(person.name, ...textScores);
// john
// (6) [78, 90, 56, 43, 99, 65];
// john's average score is 71.83333333333333
