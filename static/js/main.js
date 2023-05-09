import { names, provinces } from "./data/data-drop.js";


console.log("1. Use forEach to console log each name to the console. You are allowed to call console.log seven times.");
names.forEach(name => console.log(name)); // should print all names

console.log("2. Use forEach to console log each name with a matching province (for example Ashwin (Western Cape). Note that you are only allowed to call console.log seven times.");
names.forEach((name, index) => console.log(`${name} (${provinces[index]})`)); // should print all names with matching index of province to name


