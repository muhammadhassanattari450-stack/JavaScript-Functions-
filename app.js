console.log("🟢 Exercise 1: Add Two Numbers")
function add(a, b) {
    return a + b;
}

console.log(add(2, 3));   //5
console.log(add(10, 5));  //15

console.log("----------------------------------")
console.log("🟢 Exercise 2: Multiply Two Numbers")
console.log("----------------------------------")
function multiply(a, b) {
    return a * b;
}

console.log(multiply(2, 4)); // 8
console.log(multiply(5, 3)); // 15
console.log("Reusing logic ka matlab")
console.log(multiply(10, 2)); // 20
console.log(multiply(7, 6));  // 42

console.log("----------------------------------")
console.log("🟢 Exercise 3: Say Hello")
console.log("----------------------------------")
function greet(name) {
    return `Hello ${name}`;
}

console.log(greet("Ali"));
// Hello Ali

console.log(greet("Ahmed"));
// Hello Ahmed

function greet(name) {
    return `Hello ${name}`;
}

console.log("----------------------------------")
console.log("🟢 Exercise 4: Check Even Number")
console.log("----------------------------------")
function isEven(num) {
    if (num % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

console.log(isEven(4)); // true
console.log(isEven(6)); // true
console.log(isEven(7)); // false

console.log("----------------------------------")
console.log("🟢 Exercise 5: Count Array Items")
console.log("----------------------------------")
function countItems(arr) {
    return arr.length;
}

console.log(countItems([1, 2, 3]));   // 3
console.log(countItems(["a", "b"]));  // 2

console.log("----------------------------------")
console.log("🟢 Exercise 6: Find Bigger Number")
console.log("----------------------------------")

function bigger(a, b) {
  if (a > b) {
    return a;
  } else {
    return b;
  }
}

console.log(bigger(5, 10));  // 10
console.log(bigger(20, 3));  // 20
