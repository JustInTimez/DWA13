import { names, provinces } from "./data/data-drop.js";


console.log("1. Use forEach to console log each name to the console. You are allowed to call console.log seven times.");
names.forEach(name => console.log(name)); // should print all names

console.log("2. Use forEach to console log each name with a matching province (for example Ashwin (Western Cape). Note that you are only allowed to call console.log seven times.");
names.forEach((name, index) => console.log(`${name} (${provinces[index]})`)); // should print all names with matching index of province to name

console.log("3. Using map loop over all province names and turn the string to all uppercase. Log the new array to the console.");
const provincesUppercase = provinces.map(province => province.toUpperCase());
console.log(provincesUppercase);


console.log("4. Create a new array with map that has the amount of characters in each name. The result should be: [6, 9, 11, 5, 8, 7, 7]");
const nameLengths = names.map(name => name.length);
console.log(nameLengths);



console.log("5. Using toSorted to sort all provinces alphabetically.");
const sortedProvinces = provinces.sort();
console.log(sortedProvinces);



console.log("6. Use filter to remove all provinces that have the word Cape in them. After filtering the array, return the amount of provinces left. The final value should be 3");
const filteredProvinces = provinces.filter(province => !province.includes('Cape'));
console.log(filteredProvinces.length);



console.log("7. Create a boolean array by using map and some to determine whether a name contains an S character. The result should be [true, true, false, true, true, false]"); // This seems incorrect. I Corrected the result
const hasS = names.map(name => name.includes('S')); 
console.log(hasS);


console.log("8. Using only reduce, turn the above into an object that indicates the province of an individual.");
const provinceByNames = names.reduce((acc, name, index) => {
  acc[name] = provinces[index];
  return acc;
}, {});

console.log(provinceByNames);