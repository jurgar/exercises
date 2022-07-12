// Susikurti folderį modules ir jame sukurti string.js modulį bei object.js modulį.
// string.js faile turi būti išeksportuojama dvi funkcijos: stringUppercase, stringLowerCase
// object.js faile turi būti išeksportuojama funkcijos iš 7 užduoties: showObjectValues, showObjectKeys
// importuoti main.js faile visas funkcijas ir panaudoti

import { upperCase, lowerCase } from "./modules/string.js";
import { showObjectKeys, showObjectValues } from "./modules/object.js";

console.log(upperCase("jurga"));
console.log(lowerCase("Jurga"));

const movie = {
  title: "Avatar",
  budget: 100000000,
};

console.log(showObjectKeys(movie));
console.log(showObjectValues(movie));
