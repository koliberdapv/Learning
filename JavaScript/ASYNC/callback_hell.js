// Make Soup
// boil water 10 min
// chop carrots
// add carrots and boil for 5 min
// chop onion
// add onion and boil for 5 min
// Browser! Fetch Data, Get Geolocation, setTimeout, setTimer etc
// callbacks, promises, async/await

boilWater();
console.log(`chop carrots`);

function boilWater(time) {
  console.log(`start boiling..`);
  setTimeout(() => {
    console.log(`Boiling done!`);
    console.log(`adding carrots!`);
    setTimeout(() => {
      console.log(`carrots are done`);
      console.log(`add onions`);
      setTimeout(() => {
        console.log(`onion done`);
      }, 5000);
    }, 5000);
    console.log(`chopp onion`);
  }, 10000);
}

// start boiling..
// chop carrots
// Boiling done!
// adding carrots!
// chopp onion
// carrots are done
// add onions
// onion done