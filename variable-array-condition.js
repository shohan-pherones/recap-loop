var bottleColor = "yellow";
var waterQuantity = 1;
var isFull = false;

// array
var items = ["bottle", "mug", "pen", "paper"];
items.indexOf("paper");
items.push("banana");
items.push("watch");

items.pop();

// conditionals

if (items.length >= 4) {
  console.log("So many stuffs");
} else if (items.length == 4) {
  console.log("You only have 4 items");
} else {
  console.log("Clean desk");
}
