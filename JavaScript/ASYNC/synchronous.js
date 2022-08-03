// JS is a single threaded, synchronous language

console.log(`i'm first`);
// console.log(`i'm second`);
boilingWater();
console.log(`i'm third`);

function boilingWater() {
  console.log(`boiling...`);
  for (let i = 0; i < 10000; i++) {
    console.log(`still not done yet...`);
  }
  console.log(`done!`);
}

// i'm first
// boiling...
// (10000) still not done yet...
// done!
// i'm third
