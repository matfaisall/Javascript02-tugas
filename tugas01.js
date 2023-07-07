// 10 method built-in javascript

// 1. filter
const animals = ["Zebra", "Fox", "Camel", "Donkey", "Pig", "Cow", "Goat"];
const newAnimals = animals.filter((animal) => animal.includes("o"));
console.log("=== Nomer 01 : filter ===");
console.log(newAnimals);

// 2. toUpperCase
const myName = "Muhammad Faisal";
console.log("=== Nomer 02 : toUpperCase ===");
console.log(myName.toUpperCase());

// 3. pop
const anime = ["One Piece", "Naruto", "Bleach", "One Punch Man"];
anime.pop();
console.log("=== Nomer 03 : pop");
console.log(anime);

// 4. unshift
const filmGenres = ["Horror", "Comedy", "Romance", "Action"];
filmGenres.unshift("Science Fiction");
console.log("=== Nomer 04 : unshift ===");
console.log(filmGenres);

// 5. Math.rounnd
const decimalNumber = 93.4;
const bulatkan = Math.round(decimalNumber);
console.log("=== Number 05 : Math.round");
console.log(bulatkan);

// 6. Math.floor
const multiplication = 9 * 3.3; //29.7
console.log("=== Number 06 : Math.floor ===");
console.log(Math.floor(multiplication));

// 7. Date
const data = Date();
console.log("=== Number 07 : Date() ===");
console.log(data);

// 8. length()
const yourHobby = ["eat", "sleep", "code"];
console.log("=== Number 08 : lenght");
console.log(yourHobby.length);

// 9. toString
const myNumber = 10;
console.log("=== Nomer 09 : toString ===");
console.log(myNumber.toString());

// 10.CharAt
const matkul = "Algoritma & Struktur Dat";
console.log("=== Nomer 10 : charAt ===");
console.log(matkul.charAt(10));
