function formatMessage(message, maxLength) {
    let result;
    // Change code below this line
  if(message.length>maxLength){
    result=(message.slice(0, maxLength)+"...");
  }else{
    result=message;
    }
    
    /// Change code above this line
    return result;
  }
  // console.log(formatMessage("Curabitur ligula sapien", 3));

  function getExtremeElements(array) {
    // Change code below this line
  return [array[0], array[array.length-1]];
  
    // Change code above this line
  }
  //console.log(getExtremeElements([1, 2, 3, 4, 5]));


  function splitMessage(message, delimeter) {
    let words;
    // Change code below this line
   words= message.split(delimeter);
    // Change code above this line
    return words;
  }
  //splitMessage("Mango", "");
  //splitMessage("best_for_week", "_");

  //words.join("")); To łączy elementy w tablice

function slugify(title) {

return  title.toLowerCase().split(" ").join("-");

}
//console.log (slugify("English for developer"));

//concat łączy tablice, includes(coś) sprawdza czy coś jest w tablicy 
function makeArray(firstArray, secondArray, maxLength) {
  // Change code below this line 
  
if (firstArray.length + secondArray.length >maxLength){
return firstArray.concat(secondArray).slice(0, maxLength);
}
return firstArray.concat(secondArray);

}
//console.log(makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3));
// let tab=[];
function findLongestWord(string) {
  const tab =string.split(" ");
  let naj=[];
  for (let i = 0; i < tab.length; i ++) {
    if(tab[i].length >naj.length){
      naj=tab[i];
    }
  }
return naj;
}

function getEvenNumbers(start, end) {
  // Change code below this line
let tab=[];
 let Truestart=0;
 if (start%2===0){
   Truestart=start;
 } else Truestart=start+1;

 for (let i=Truestart; i<= end; i+=2){
   tab.push(i);
 }
return tab;
   // Change code above this line
 }

 function includes(array, value) {
  // Change code below this line 32 zadanie modół 2


  for (let i of array) {
    if (i===value) {
      return true;
    }
  }
return false;
 
  // Change code above this line
}

// for in po obiektach, przykład
const book ={
  title: "The Last",
  author: "Bernard",
  genres: ["historical", "adventure"],
  rating: 8.3,
}
for (const key in book){
  //console.log(`Nazwa klucza: ${key} / Wartość klucza ${book[key]}`);
}
// inne rzeczy na obiektach Object.keys(book); Object.values, Object.entries, 

const apartment = {
  descr: "Spacious apartment in the city center",
  rating: 4,
  price: 2153,
};
const keys = [];
const values = [];
// Change code below this line
for( const key in apartment){
  if (apartment.hasOwnProperty(key)) { //sprawdzenie czy wartość w objekcie jest jego a nie dziedziczona
  keys.push(key);
  values.push(apartment[key]);
  }
}
//Iteruj po obiekcie apartment za pomocą metody Object.keys() i pętli for...of. Zapisz w zmiennej keys tablicę kluczy własnych właściwości obiektu apartment, i dodaj wszystkie wartości jego właściwości do tablicy values.
/*const apartment = {
  descr: "Spacious apartment in the city center",
  rating: 4,
  price: 2153,
}; 
const values = []; */
// Change code below this line
const keys1 = Object.keys(apartment);
for (const key of keys1) {
	values.push(apartment[key]);
}
//Napisz funkcję countTotalSalary(salaries), która pobiera obiekt wynagrodzeń, gdzie nazwą właściwości jest nazwisko pracownika, a wartością właściwości jest wynagrodzenie. Funkcja powinna obliczyć łączną kwotę wynagrodzeń pracowników i zwrócić ją. Użyj zmiennej totalSalary, aby zapisać łączną pensję.
function countTotalSalary(salaries) {
  let totalSalary = 0;
  // Change code below this line
  const tab = Object.values(salaries);
  for (const a of tab ){
    totalSalary+=a;
  }

  // Change code above this line
  return totalSalary;
}
//console.log(countTotalSalary({ mango: 100, poly: 150, alfred: 80 }));

const colors = [
  { hex: "#f44336", rgb: "244,67,54" },
  { hex: "#2196f3", rgb: "33,150,243" },
  { hex: "#4caf50", rgb: "76,175,80" },
  { hex: "#ffeb3b", rgb: "255,235,59" },
];
//Iteruj po tablicy obiektów colors używając pętli for...of. Dodaj do tablicy hexColors wartości właściwości hex, do tablicy rgbColors wartości właściwości rgb ze wszystkich obiektów w tablicy colors.
const hexColors = [];
const rgbColors = [];
// Change code below this line
for (const c of colors) {
  hexColors.push(c.hex);
  rgbColors.push(c.rgb);
}
// po zmniejszeniu kodu powyższa funkcja
/*
const colors = [
  { hex: "#f44336", rgb: "244,67,54" },
  { hex: "#2196f3", rgb: "33,150,243" },
  { hex: "#4caf50", rgb: "76,175,80" },
  { hex: "#ffeb3b", rgb: "255,235,59" },
];

const hexColors = [];
const rgbColors = [];
// Change code below this line

for (const {hex,rgb} of colors) {
  hexColors.push(hex);
  rgbColors.push(rgb);
}
*/



const products = [
  { name: "Radar", price: 1300, quantity: 4 },
  { name: "Scanner", price: 2700, quantity: 3 },
  { name: "Droid", price: 400, quantity: 7 },
  { name: "Grip", price: 1200, quantity: 9 },
];
//Napisz funkcję getAllPropValues(propName), która przyjmuje jeden parametr propName - nazwę (klucz) właściwości. Funkcja powinna zwrócić tablicę wszystkich wartości właściwości o tej nazwie z każdego obiektu w tablicy products. Jeśli w obiektach nie ma właściwości o tej nazwie, funkcja musi zwrócić pustą tablicę.
function getAllPropValues(propName) {
  // Change code below this line
const array = [];
 for (const product of products)
  if (product.hasOwnProperty(propName))
   array.push(product[propName])
 return array || []

  // Change code above this line
}

/* przykład tworzenia kilku zmiennnych z objekutu user (który ma wewnątrz objekt stats)
const {
  name,
  tag,
  stats: { followers, views: userViews, likes: userLikes = 0 },
} = user;

Przykład:
function calculateMeanTemperature(forecast) {
const {
  today:{
  low:todayLow,
  high:todayHigh,
  },
  tomorrow:{
  low:tomorrowLow, 
  high:tomorrowHigh,
}
} = forecast;
  // Change code above this line
  return (todayLow + todayHigh + tomorrowLow + tomorrowHigh) / 4;
} calculateMeanTemperature({ today: {low: 28, high: 32}, tomorrow: {low: 25, high: 29} }) zwraca 28.5
*/
/*
Przykład rozładowania do funkcji math, która przyjmuje arumrnty
const scores = [89, 64, 42, 17, 93, 51, 26];
const bestScore = Math.max(...scores);
const worstScore = Math.min(...scores);

//przykład stwożenia obiektu ze zmiennymi, następnie nadpisujemy ewentualne zmienne z objektu data
const newData = {completed,category,priority, ...data};
return newData;




*/

function findMatches(tab, ...arg) {
  const matches = [];
for (const a of arg){
if (tab.includes(a)) matches.push(a);
}
  // Change code above this line
  return matches;
}
//console.log(findMatches([4, 89, 17, 36, 2], 8, 17, 89, 27, 2));

const atTheOldToad = {
  potions: ["Speed potion", "Dragon breath", "Stone skin"],
  updatePotionName(oldName, newName) {
    // Change code below this line
this.potions.splice(this.potions.indexOf(oldName),1,newName);

    // Change code above this line
  },
};
/*
Klient chce, aby każda mikstura była reprezentowana nie tylko nazwą, ale także ceną, a w przyszłości może mieć inne cechy. Dlatego teraz tablica obiektów o następujących właściwościach będzie przechowywana we właściwości potions.
const atTheOldToad = {
  potions: [
    { name: "Speed potion", price: 460 },
    { name: "Dragon breath", price: 780 },
    { name: "Stone skin", price: 520 },
  ],
  // Change code below this line
  getPotions() {
  return this.potions;
 },
 addPotion(newPotion) {
  for (const potion of this.potions) {
  if (potion.name === newPotion.name) {
   return `Error! Potion ${newPotion.name} is already in your inventory!`;
  }
  }
  return this.potions.push(newPotion);
 },
 removePotion(potionName) {
  for (const potion of this.potions) {
   const potionIndex = this.potions.indexOf(potion);
  if (potionIndex === -1) {
   return `Potion ${potionName.name} is not in inventory!`;
   }
   if (potion.name === potionName) {
    return this.potions.splice(potionIndex, 1);
   };
  };
 },
 updatePotionName(oldName, newName) {
  for (const potion of this.potions) {
   const potionIndex = this.potions.indexOf(potion);
   let newPotion = {name: newName, price: potion.price}
   if (potionIndex === -1) {
    return `Potion ${oldName} is not in inventory!`;
   };
   if (potion.name === oldName) {
    return this.potions.splice(potionIndex, 1, newPotion);
   };
  };
 },
  updatePotionName(oldName, newName) {
  for (const potion of this.potions) {
  const potionIndex = this.potions.indexOf(potion);
let newPotion = {name: newName, price: potion.price}
  if (potionIndex === -1) {
   return `Potion ${oldName} is not in inventory!`;
  };
if (potion.name === oldName) this.potions.splice(potionIndex, 1, newPotion);
   };
 },
  // Change code above this line
};
*/
// Przykład callback Wywołanie makeMessage("Royal Grand", makePizza) zwraca łańcuch "Pizza Royal Grand is being prepared, please wait..."
//Wywołanie makeMessage("Ultracheese", deliverPizza) zwraca łańcuch "Delivering Ultracheese pizza."
function deliverPizza(pizzaName) {
  return `Delivering ${pizzaName} pizza.`;
}

function makePizza(pizzaName) {
  return `Pizza ${pizzaName} is being prepared, please wait...`;
}

// Chande code below this line
function makeMessage(pizzaName, callback) {
  
  return callback(pizzaName);
}
//przykład funkcji jako paramert funkcji
function makePizza(pizzaName, callback) {
  console.log(`Pizza ${pizzaName} is being prepared, please wait...`);
  callback(pizzaName);
}

makePizza("Royal Grand", function deliverPizza(pizzaName) {
  console.log(`Delivering pizza ${pizzaName}.`);
});

makePizza("Ultracheese", function eatPizza(pizzaName){
          console.log(`Eating pizza ${pizzaName})`)
          });


//metoda foreach na tablicy
function calculateTotalPrice(orderedItems) {
  let totalPrice = 0;
  // Change code below this line

   orderedItems.forEach(function (z, i, orderedItems){ //z nic nie robi
     
    totalPrice += orderedItems[i];
  });

  // Change code above this line
  return totalPrice;
}
function filterArray(numbers, value) {
  const filteredNumbers = [];
  // Change code below this line

  numbers.forEach(function (z, i, numbers){
    if (numbers[i] > value) {
      filteredNumbers.push(numbers[i]);
    }
  });

  // Change code above this line
  return filteredNumbers;
}
//funkcja strzałkowa
const add = (a, b, c) => {
  return a + b + c;
};
//ta samaa funkcja ale z niejawnym zwrotem (też zwraca wynik)
const add2 = (a, b, c) => a + b + c;