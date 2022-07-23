// spread operator ...
// allows an iterable to spread/expand individually inside a receiver
// split iterable into single items and copy them
// this will not mutate the original item

const udemy = 'udemy';
const letters = [...udemy];
console.log(letters);

const boys = ['john', 'peter', 'bob'];
const girls = ['susan', 'anna'];
const bestFriend = 'arnold';

const friends = [...boys, ...girls, bestFriend];
console.log(friends);

// reference
// in this case, the changes we make on newFriends will also change friends array
// const newFriends = friends;

const newFriends = [...friends];
newFriends[0] = 'karina';
console.log(newFriends);
// ['karina', 'peter', 'bob', 'susan', 'anna', 'arnold']
console.log(friends);
// ['john', 'peter', 'bob', 'susan', 'anna', 'arnold']
