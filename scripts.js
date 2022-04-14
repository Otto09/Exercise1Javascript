const input = `6
Mihai Enescu 1980-01-02
George Ionescu 1992-06-20
Maria Popescu 1995-03-13
Elena Popescu 1990-12-13
Andrei Ionescu 1996-03-01
Sergiu Ionescu 1990-02-01`;

// Create the array (lines) from the constant (input):

const lines = input.split('\n');

console.log("lines: ", lines);

// Loop to create and initialize the array of arrays (a) from the array (lines):

a = [];
for (let i = 0; i < lines.length; i++) {
  a[i] = lines[i].split(' ');
};

console.log("a= ", a);

// Loop for create and initialize the array of lastnames (lastnameArray): 

const lastnameArray = [];
const count = [];

for (let k = 1; k < lines.length; k++) {
  lastname = a[k][1];
  if (lastnameArray.includes(lastname)) {
  continue;
  } else {

    // Loop for create and initialize the array of repetitions for lastnames 
    // (count). If the lastname repeats, the value (count[k]) is incremented:

    count[k] = 0;
    for (let i = k; i < lines.length; i++) {
      if (a[i][1] === lastname) {
        count[k]++;
      }
    }
    lastnameArray.push(lastname);
  }
}

count.shift();

console.log("count: ", count);
console.log("lastnameArray: ", lastnameArray);

// Loop to create the object (obj) from the array of keys (count) and the array of 
// values (lastnameArray):

const obj = {};
count.forEach((c, i) => obj[c] = lastnameArray[i]);
console.log("obj: ", obj);

// Get an array of the object's (obj) keys by using the Object.keys method and 
// call the reverse() method to reverse the array:

const reversedKeys = Object.keys(obj).reverse();
console.log("reversedKeys: ", reversedKeys);

// Loop to create the array of lastnames (a1) from the array (a):

const a1 = [];
for (let i = 0; i < reversedKeys.length; i++) {
  a1[i] = [];
};

// Loop to create and initialize the array of birthdays (birthday) from the array 
// (a):

birthday = [];
for (let i = 0; i < lines.length; i++) {
    birthday[i] = a[i][2];
};

birthday.shift();

console.log("birthday: ", birthday);

// Loop to create and initialize the array of lastnames (lastnames) from the 
// array (a):

lastnames = [];
for (let i = 0; i < lines.length; i++) {
    lastnames[i] = a[i][1];
};

lastnames.shift();

console.log("lastnames: ", lastnames);

// Loop to create and initialize the array of firstnames (firstnames) from the 
// array (a):

firstnames = [];
for (let i = 0; i < lines.length; i++) {
    firstnames[i] = a[i][0];
};

firstnames.shift();

console.log("firstnames: ", firstnames);

// Loop to create the object (obj2) from the array of keys (birthday) and the 
// array of  values (firstnames):

const obj2 = {};
birthday.forEach((b, i) => obj2[b] = firstnames[i]);

console.log("obj2: ", obj2);

// Loop to create the object (obj3) from the array of keys (birthday) and the 
// array of values (lastnames):

const obj3 = {};
birthday.forEach((b, i) => obj3[b] = lastnames[i]);

console.log("obj3: ", obj3);

const a2 = [];
a2[0] = "something";
let a3 = [];
let bday = [];

// Loop to initialize the array of lastnames (a1):

for (let i = 0; i < reversedKeys.length; i++) {
  a1[i] = obj[reversedKeys[i]];
  console.log("a1[" + i + "]: ", a1[i]);

  // Loop to create and initialize the array of arrays for firstnames (a3).

  // The Object.keys gives a list of keys (bday) in provided object (obj2), then 
  // sort those using default sorting algorithm:

  bday = Object.keys(obj2).sort();
  for (let j = 0; j < bday.length; j++) {
    if (obj3[bday[j]] === obj[reversedKeys[i]]) {
      a2[i] = a2[i] + " " + obj2[bday[j]];
      a3[i] = a2[i].substring(10).split(" ");
    }   
  }  
};

console.log("bday: ", bday);
console.log("a2: ", a2);
console.log("a3: ", a3);

// Loop to display the array of lastnames (a1):

const firstnameArray = [];
for (let i = 0; i < reversedKeys.length; i++) {
  a1[i] = obj[reversedKeys[i]];
  document.write(a1[i] + ": ");

  // Loop to display the array of arrays for firstnames (a3). If the firstnames
  // repeat, they are skipped by continue:

  for (let j = 0; j < bday.length; j++) {
    if (obj3[bday[j]] === obj[reversedKeys[i]]) {  
      for (let k = 0; k < a3[i].length; k++) {
        firstname = a3[i][k];
        if (firstnameArray.includes(firstname)) {
          continue;
        } else {
          document.write(a3[i][k] + " ");
          firstnameArray.push(firstname);
        }
      }
    }    
  };
  document.write("<br>");    
}
