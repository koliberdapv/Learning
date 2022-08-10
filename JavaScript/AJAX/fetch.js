// Fetch built-in
// promised based
// XHR is not wrong, you can complete all our upcoming examples and projects using XHR.
// Fetch is just an alternative approach that has simplier and cleaner syntax. The end result is the same. Still get dynamically, behind the scenes

// const url = './api/people.json';

// // const responce = fetch(url);
// // console.log(responce);

// fetch(url)
//   .then((resp) => {
//     // responce object
//     // useful prop and methods
//     // console.log(resp);
//     // convert responce into JSON data
//     // returns promise -> use another .then
//     return resp.json();
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => console.log(err));

const url = './api/people.json';

fetch(url)
  .then((resp) => resp.json())
  .then((data) => console.log(data))
  .catch((err) => console.log(err));
