function greet(name) {
  return `Welcome ${name}!`;
}
// Викликаємо функцію greet і виводимо результат у консоль
console.log(greet("Mango")); // "Welcome Mango!"
// Виводимо функцію greet у консоль, не викликаючи ї
console.log(greet); // ƒ greet() {return `Welcome${name}!`}
console.log("Sirak-----------------------------------------------");
function registerGuest(name, callback) {
  console.log(`Registering ${name}!`);
  callback(name);
}
// Передаємо інлайн-функцію greet у якості колбека
registerGuest("Mango", function greet(name) {
  console.log(`Welcome ${name}!`);
});
// Передаємо інлайн-функцію notify у якості колбека
registerGuest("Poly", function notify(name) {
  console.log(`Dear ${name}, your room will be ready in
    30 minutes`);
});
console.log("Sirak----------------------------------------------");
const numbers = [5, 10, 15, 20, 25];
// Класичний for
for (let i = 0; i < numbers.length; i += 1) {
  console.log(`Index ${i}, value ${numbers[i]}`);
}
// Перебираючий метод forEach
numbers.forEach(function (number, index) {
  console.log(`Index ${index}, value ${number}`);
});
console.log("Sirak----------------------------------------------");
const planets = ["Earth", "Mars", "Venus", "Jupiter"];
const planetsInUpperCase = planets.map((planet) => planet.toUpperCase());
console.log(planetsInUpperCase); // ["EARTH", "MARS","VENUS", "JUPITER"]

const planetsInLowerCase = planets.map((planet) => planet.toLowerCase());
console.log(planetsInLowerCase); // ["earth", "mars","venus", "jupiter"]
// Оригінальний масив не змінився
console.log(planets); // ["Earth", "Mars", "Venus","Jupiter"]
console.log("Sirak----------------------------------------------");
const LOW_SCORE = 50;
const HIGH_SCORE = 80;
const students = [
  { name: "Mango", score: 83 },
  { name: "Poly", score: 59 },
  { name: "Ajax", score: 37 },
  { name: "Kiwi", score: 94 },
  { name: "Houston", score: 64 },
];
const best = students.filter((student) => student.score >= HIGH_SCORE);
console.log(best); // Масив об'єктів з іменами Mango і Kiwi

const worst = students.filter((student) => student.score < LOW_SCORE);
console.log(worst); // Масив з одним об'єктом Ajax
const average = students.filter(
  (student) => student.score >= LOW_SCORE && student.score < HIGH_SCORE
);
console.log(average); // Масив об'єктів з іменами Poly і Houston
console.log("Sirak----------------------------------------------");
const colorPickerOptions = [
  { label: "red", color: "#F44336" },
  { label: "green", color: "#4CAF50" },
  { label: "blue", color: "#2196F3" },
  { label: "pink", color: "#E91E63" },
  { label: "indigo", color: "#3F51B5" },
];
colorPickerOptions.find((option) => option.label === "blue"); // { label: "blue", color: "#2196F3" }
console.log(colorPickerOptions);
colorPickerOptions.find((option) => option.label === "pink"); // { label: "pink", color: "#E91E63" }
console.log(colorPickerOptions);
colorPickerOptions.find((option) => option.label === "white"); // undefined
console.log(colorPickerOptions);
console.log("Sirak----------------------------------------------");
const products = [
  { name: "apple", quantity: 2 },
  { name: "orange", quantity: 5 },
  { name: "plum", quantity: 0 },
];
const hasEveryProduct = products.every((product) => product.quantity > 0);
console.log(hasEveryProduct); // false
console.log("Sirak----------------------------------------------");
