// Write your solution here!
let cats = ["Milo", "Otis", "Garfield"];
function initializeCats() {
  return cats;
  //   cats = ["Milo", "Otis", "Garfield"];
}

function arrayFunctions() {
  beforeEach(function () {
    cats.length = 0;

    cats.push("Milo", "Otis", "Garfield");
  });
}
//.push()
function destructivelyAppendCat(name) {
  cats.push(name);
}
//.unshift()
function destructivelyPrependCat(name) {
  cats.unshift(name);
}
//.pop()
function destructivelyRemoveLastCat() {
  cats.pop();
}
//.shift()
function destructivelyRemoveFirstCat() {
  cats.shift();
}
//spreadout at the end of the array
function appendCat(name) {
  return [...cats, name];
}
//spreadout at the beginning of the array
function prependCat(name) {
  return [name, ...cats];
}
//.slice() at the end of the array
function removeLastCat() {
  return cats.slice(0, -1);
}
//.slice() at the beginning of the array
function removeFirstCat() {
  return cats.slice(1);
}
