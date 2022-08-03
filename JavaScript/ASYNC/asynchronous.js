// Make Soup
// boil water 10 min
// chop carrots
// add carrots and boil for 5 min
// chop onion
// add onion and boil for 5 min
// Browser! Fetch Data, Get Geolocation, setTimeout, setTimer etc

boilWater(10000);
console.log(`chop carrots`);

for (let i = 0; i < 10000; i++) {
  console.log(`still busy`);
}

function boilWater(time) {
  console.log(`start boiling..`);
  setTimeout(() => {
    console.log(`Boiling done!`);
  }, time);
}

// setTimeout provides minimum-time when the callback function may be exicuted
// in case the time has passed, but JS is still busy reading other code, the callback function will not be exicuted right away, but once the JS is free
