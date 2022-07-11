/* ------------------------------ TASK 7 -----------------------------------
Turimas "computer" objektas.

1. Parašykite funkciją showObjectValues, kuri kaip argumentą priims objectą 
ir grąžins visus jo "values" masyve.

2. Parašykite funkciją showObjectKeys, kuri kaip argumentą priims objectą 
ir grąžins visus jo "keys" masyve.
-------------------------------------------------------------------------- */
const computer = {
  cpu: "Intel Mobile Celeron N3350",
  ram: "4gb",
  resolution: "1366x768",
  battery: "4800 mAh, 7.4 V",
  os: "Windows 10",
};

console.log(Object.keys(computer)); //grazins raktus cpu, ram it t.t
console.log(Object.values(computer)); // grazina reiksmes Intel mobile.., 4gb ir t.t
console.log(Object.entries(computer)); // grazina [raktas, reiksme]

// istraukti viena reiksme
Object.keys(computer).forEach((key) => {
  if (key === "ram") {
    console.log("random acces memory");
  } else if (key === "os") {
    console.log("Operating system");
  } else {
    console.log(key);
  }
});

// 1.
function showObjectValues(object) {
  return Object.values(object);
}
console.log(showObjectValues(computer));

// 2.
function showObjectKeys(object) {
  return Object.keys(object);
}
console.log(showObjectKeys(computer));

// kazkas
Object.entries(computer).forEach(([key, value]) => {
  console.log(`${key}: ${value}`);
});
