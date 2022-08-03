// Make Soup
// boil water 10 min
// chop carrots
// add carrots and boil for 5 min
// chop onion
// add onion and boil for 5 min

boilWater(10000);
console.log(`chop onion`);
boilWater(5000);
console.log(`chop carrot`);
boilWater(5000);

function boilWater(time) {
  console.log(`start boiling..`);
  for (let i = 0; i < time; i++) {
    console.log(`still boiling..`);
  }
  console.log(`Done!`);
}
