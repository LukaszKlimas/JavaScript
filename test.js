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
 removePotion(potionName) { //usuwanie potki
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
/*
makePizza("Royal Grand", function deliverPizza(pizzaName) {
  console.log(`Delivering pizza ${pizzaName}.`);
});

makePizza("Ultracheese", function eatPizza(pizzaName){
          console.log(`Eating pizza ${pizzaName})`)
          });
*/

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


const calculateTotalPrice2 = (orderedItems)=> {
  let totalPrice = 0;

  orderedItems.forEach( (item)=> {
    totalPrice += item;
  });

  return totalPrice;
};
//console.log(calculateTotalPrice2([1,2,3]));

//3to przerobina na calback strzłka funkcji 2
function calculateTotalPrice3 (orderedItems){
  let totalPrice = 0;

  orderedItems.forEach(function (item) {
    totalPrice += item;
  });

  return totalPrice;
};
//console.log(calculateTotalPrice3([1,2,3]));
//Działanie funkcji map (strzałki, niejawny zwrot)
const planets = ["Earth", "Mars", "Venus", "Jupiter"];
const planetsLengths = planets.map(planet12 => planet12.length);

//Funkcja flatMap, scalenie tablic do jednej
const books = [
  {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    genres: ["adventure", "history"],
  },
  {
    title: "Beside Still Waters",
    author: "Robert Sheckley",
    genres: ["fiction"],
  },
  {
    title: "Redder Than Blood",
    author: "Tanith Lee",
    genres: ["horror", "mysticism"],
  },
];
const genres = books.flatMap(n=>n.genres);


//przyjmuje perametr users (tablice), która ma obiekty, robobimy tablice z pólobiektów name; /imiona stdtudentów zapisanych na kurs
const getUserNames = users => users.map(n=>n.name);


//Przykład z tablicą obiektów książek. Najpierw robimy scalenie tablic flat mapą po genres, 
//Potem robimy ją brz powturzeń, filtrując tylko te wartości których index jezt zgodny z pierwszym wystąpieniem tego indeksu
const books3 = [
  {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    genres: ["adventure", "history"],
  },
  {
    title: "Beside Still Waters",
    author: "Robert Sheckley",
    genres: ["fiction", "mysticism"],
  },
  {
    title: "Redder Than Blood",
    author: "Tanith Lee",
    genres: ["horror", "mysticism", "adventure"],
  },
];
const allGenres = books3.flatMap(n=>n.genres);
const uniqueGenres = allGenres.filter( 
  (course, index, array) => array.indexOf(course) === index
);

//przykładzik filtra
let MIN_RATING=3;
let AUTHOR="Ten kolo"
const topRatedBooks = books.filter(n=>n.rating>=MIN_RATING);
const booksByAuthor = books.filter(n=>n.author==AUTHOR);

//następny przykład tym razem z jawnym zwrotem
const getUsersWithAge = (users, minAge, maxAge) => {
  return users.filter(n=>n.age>=minAge&&n.age<=maxAge)
 
 };

 //przykład filtra ze zwroetm nie jawnym tablisca obiektów, pole firendsName jest tablica imion
 //Wyświetlamy wszystkich użytkowników majacych danego firendsName
 const getUsersWithFriend = (users, friendName)=> users.filter( 
  user=>user.friends.includes(friendName)
                                                              
);

//tablica wszytkich przyjaciów z tablicy users (pola friends, które jest tablicą) bez powtórzeń
const getFriends = (users) => users.flatMap(n=>n.friends).filter( 
  (course, index, array) => array.indexOf(course) === index);

//Na wszelki jeszcze jeden przykład flitra
const getInactiveUsers = (users) => users.filter(user=>user.isActive==false);
//przykłąd find
let BOOK_TITLE="Fajna"
const bookWithTitle = books.find(book=>book.title==BOOK_TITLE);
//przykład every
//Metoda every(callback) sprawdza, czy wszystkie elementy tablicy przechodzą test dostarczany przez funkcję callback. Zwraca true lub false.
let thirdArray =[12,3,4];
let secondArray =[12,3,4,6];
const eachElementInThirdIsEven = thirdArray.every(v=>v%2==0);
const eachElementInThirdIsOdd = thirdArray.every(v=>v%2==1);
//Metoda some(callback) sprawdza, czy choć jeden element tablicy przechodzi test dostarczony przez funkcję callback. Zwraca true lub false.
//przyklad some
const anyElementInSecondIsEven = secondArray.some(v=>v%2==0);
const anyElementInSecondIsOdd = secondArray.some(v=>v%2==1);
/*Metoda reduce(callback, initialValue) wykorzystywana jest do przetwarzania sekwencyjnego każdego elementu tablicy z zapisywaniem pośredniego rezultatu (zmiennej)
const total = [2, 7, 3, 14, 6].reduce((previousValue, number) => {
  return previousValue + number;
}, 0);

console.log(total); // 32
To znaczy metoda reduce() jest wykorzystywana, gdy potrzeba jest wziąć "wiele" i sprowadzić to do "jednego".
tablica.reduce((previousValue, element, index, array) => {
// Ciało funkcji callback
}, initialValue);

PRzykład reduce
*/
let playtimes=[2,3,4];
const totalPlayTime = playtimes.reduce((pValue, Time)=>{return pValue+Time},0);

const players = [
  { name: "Mango", playtime: 1270, gamesPlayed: 4 },
  { name: "Poly", playtime: 469, gamesPlayed: 2 },
  { name: "Ajax", playtime: 690, gamesPlayed: 3 },
  { name: "Kiwi", playtime: 241, gamesPlayed: 1 },
]; players.
// Change code below this line

const totalAveragePlaytimePerGame = players.reduce((pValue, player)=>{
  return pValue+(player.playtime/player.gamesPlayed);
},0);

//console.log(totalAveragePlaytimePerGame);

//PRzykład PAMIETAJ O RETURN! (tutaj 2strzałki, 2 return)
const calculateTotalBalance = users => {
  return users.reduce((pValue, user)=>{
    //console.log(pValue, user.balance);
 return pValue+user.balance;
},0); 
};
/*console.log(calculateTotalBalance([
  {
    name: "Moore Hensley",
    email: "moorehensley@indexia.com",
    eyeColor: "blue",
    friends: ["Sharron Pace"],
    isActive: false,
    balance: 2811,
    gender: "male"
  },
  {
    name: "Sharlene Bush",
    email: "sharlenebush@tubesys.com",
    eyeColor: "blue",
    friends: ["Briana Decker", "Sharron Pace"],
    isActive: true,
    balance: 3821,
    gender: "female"
  },
]));
*/

/*Metoda sort() sortuje elementy tablicy, ale w odróżnieniu od pozostałych iterujacych metod, robi to na oryginalnej tablicy.
Domyślnie sortuje w porządku rosnącym. Sortowanie odbywa się drogą sprowadzenia wartości do łańcucha i porównania numerów porządkowych w tabeli Unicode.
Tablica słów sortuje się w porządku alfabetycznym.
Przy tym numer porządkowy małych liter jest mniejszy niż wielkich.
Prosty przykąłd sortu po autorach, zachwując kopie tablicy arginalnie
const alphabeticalAuthors = [...authors].sort();

tablica.sort((a, b) => {
  // Callback function body
});
Metoda sort() będzie wywoływać ją dla dwóch dowolnych elementów.
a- pierwszy element do porównania.
b - drugi
Jeśli wywołanie compareFunction(a, b) zwraca dowolną negatywną wartość, to znaczy a jest mniejsze niż b, 
sortowanie umieści a przed b. To sortowanie w porządku rosnącym.
const scores = [61, 19, 74, 35, 92, 56];
const ascendingScores = [...scores].sort((a, b) => a - b);
console.log(ascendingScores); // [19, 35, 56, 61, 74, 92]

Jeśli wywołanie compareFunction(a, b) zwraca dowolną pozytywną wartość większą od zera, to znaczy b jest większe niż a, 
sortowanie umieści b przed a. To sortowanie w porządku malejącym.

const scores = [61, 19, 74, 35, 92, 56];
const descendingScores = [...scores].sort((a, b) => b - a);
console.log(descendingScores); // [92, 74, 61, 56, 35, 19]

Do sortowania łańcuchów w porządku alfabetycznym, 
rosnąco lub malejąco, wykorzystuje się metodę łańcuchów localeCompare().
firstString.localeCompare(secondString)
Przykład:
const inAlphabetOrder = [...students].sort((a, b) => a.localeCompare(b));
*/

/*Przykładzik na obiekcie
const books = [
  {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    rating: 8.38,
  },];
const sortedByReversedAuthorName = [...books].sort(
  (a, b) => b.author.localeCompare(a.author)
);

const sortedByAscendingRating = [...books].sort(
  (a, b) => a.rating - b.rating
  );
*/
//przykład, uwaga, kompiluje się, jeden zwrot niejawny
/*
const sortByAscendingBalance = users => {
  return users.sort(
     (a,b)=>a.balance-b.balance
    );
};
//uwaga na kopiowanie tablicy!
const sortByDescendingFriendCount = users => {
   return [...users].sort(
   	(a,b)=>b.friends.length-a.friends.length
   );
};

Na oryginalnej tablicy wywołujemy flatMap() i tworzymy wygładzoną tablicę wszystkich przedmiotów.
Do rezultatu metody flatMap() przypisujemy metodę filter() dla filtrowania unikalnych elementów.
Na rezultacie metody filter() wywołujemy sort().
Zmiennej uniqueSortedCourses przypisuje się rezultat pracy metody sort().

const uniqueSortedCourses = students
  .flatMap(student => student.courses)
  .filter((course, index, array) => array.indexOf(course) === index)
  .sort((a, b) => a.localeCompare(b));

  const names = books.filter(n=>n.rating>=MIN_BOOK_RATING).map(book=>book.author).sort((a,b)=>a.localeCompare(b));

  const getSortedFriends = users => {
return [...users]
.flatMap(n=>n.friends)
.filter((friend, index, array) => array.indexOf(friend) === index)
.sort((a,b)=>a.localeCompare(b))
;
};
last przykład
const getTotalBalanceByGender = (users, gender) => {
return [...users]
  .filter(user=>user.gender===gender)
  .reduce((pValue, user)=>pValue+user.balance,0);
};
*/
//Ta bum MODUŁ 5
/*Sprawdzanie prototypów, na wszelki
const animal = {
  legs: 4,
};
const dog = Object.create(animal);
dog.name = "Mango";

console.log(dog); // { name: 'Mango', __proto__: animal }
console.log(animal.isPrototypeOf(dog)); // true
console.log(dog.hasOwnProperty("name")); // true
console.log(dog.name); // 'Mango'

console.log(dog.hasOwnProperty("legs")); // false
console.log(dog.legs); // 4

PRzykładzik klasy
  class Storage {
    items=[];
constructor(items) {
    this.items = items;
  }
  	getItems() {
    	return this.items;
  	}

	addItem(newItem){
      this.items.push(newItem);
	}

    removeItem(itemToRemove){
      const index = this.items.indexOf(itemToRemove);
     this.items.splice(index, 1);
    }
}


const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
storage.addItem("Droid");
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
storage.removeItem("Prolonger");
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]
//głupie to, że się namęczyłem, więc wklejam kalsę 2
class StringBuilder{
  value;
  constructor(initialValue){
    this.value=initialValue;
  }
 getValue(){
 return this.value;
 }
  padEnd(str){
  this.value+=str;
  }
  padStart(str){
  this.value=str+this.value;
  }
  padBoth(str){
  this.value=str+this.value+str;
  }

}
// Change code above this line
const builder = new StringBuilder(".");
console.log(builder.getValue()); // "."
builder.padStart("^");
console.log(builder.getValue()); // "^."
builder.padEnd("^");
console.log(builder.getValue()); // "^.^"
builder.padBoth("=");
console.log(builder.getValue()); // "=^.^="

Prywatna, klasa usera przykład

class User {
  // Nieobowiązkowe zadeklarowanie publicznych właściwości
  name;
  // Obowiązkowe zadeklarowanie prywatnych właściwości
  #email;

  constructor({ name, email }) {
    this.name = name;
    this.#email = email;
  }

  getEmail() {
    return this.#email;
  }

  changeEmail(newEmail) {
    this.#email = newEmail;
  }
}
opcjonalne usuwanie
  removeItem(itemToRemove) {
    this.#items = this.#items.filter(item => item !== itemToRemove);
  }
}
Przkład statik, setter, getter
class Car {

  #price;
static  MAX_PRICE=50000;
            
  constructor({ price }) {
    this.#price = price;
  }

  get price() {
    return this.#price;
  }

  set price(newPrice) {
    if(newPrice<=50000){
    this.#price = newPrice;
    }
  }
  // Change code above this line
}
*/
/*last przykład
class User {
  email;

  constructor(email) {
    this.email = email;
  }

  get email() {
    return this.email;
  }

  set email(newEmail) {
    this.email = newEmail;
  }
}
class Admin extends User {
  // Change code below this line

  blacklistedEmails=[];
  static AccessLevel = {
    BASIC: "basic",
    SUPERUSER: "superuser",
  };
  constructor({ email, accessLevel, blacklistedEmails}) {
    super(email);
    this.accessLevel = accessLevel;
    //this.blacklistedEmails=blacklistedEmails;
  }
blacklist(email){
  this.blacklistedEmails.push(email);
}
  isBlacklisted(email){
    return this.blacklistedEmails.includes(email);
  }
  // Change code above this line
}

const mango = new Admin({
  email: "mango@mail.com",
  accessLevel: Admin.AccessLevel.SUPERUSER,
});

console.log(mango.email); // "mango@mail.com"
console.log(mango.accessLevel); // "superuser"

mango.blacklist("poly@mail.com");
console.log(mango.blacklistedEmails); // ["poly@mail.com"]
console.log(mango.isBlacklisted("mango@mail.com")); // false
console.log(mango.isBlacklisted("poly@mail.com")); // true
*/