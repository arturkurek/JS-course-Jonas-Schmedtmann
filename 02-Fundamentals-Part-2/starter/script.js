'use strict';

// const jonas = {
//     firstName: "Jonas",
//     lastName: "Schmedtmann",
//     birthYear: 1991,
//     job: "teacher",
//     friends: ["Michael", "Peter", "Steven"],
//     hasDriversLicense: true,
  
//     //   calcAge: function (birthYear) {
//     //     // Every function that is attached to the object is called method, this is function as a value
//     //     return 2037 - birthYear;
//     //   },
//     //   calcAge: function () {
//     //     // console.log(this);
//     //     return 2037 - this.birthYear;
//     //   },
  
//     calcAge: function () {
//       this.age = 2037 - this.birthYear;
//       return this.age;
//     },
  
//     getSummary: function () {
//       return `${this.firstName} is a ${this.calcAge()} years old ${jonas.job} and he has ${this.hasDriversLicense ? "a" : "no"} driverse license.`;
//     },
//   };
  
//   console.log(jonas.calcAge());
  
//   console.log(jonas.age);
  
//   console.log(jonas.age);
  
//   console.log(jonas.age);
//   // console.log(jonas["calcAge"](1991));
  
//   //Challenge
//   // "Jonas is a 46 year old teacher, and he has a/no drivers license"
//   console.log(jonas.getSummary());
  
//   //Coding challenge 7
  
//   const mark = {
//     fullName: "Mark Miller",
//     mass: 78,
//     height: 1.69,
//     calcBMI: function () {
//       this.bmi = this.mass / (this.height * this.height);
//       return this.bmi;
//     }
    
//   }
  
//   const john = {
//     fullName: "John Smith",
//     mass: 92,
//     height: 1.95,
//     calcBMI: function () {
//       this.bmi = this.mass / (this.height * this.height);
//       return this.bmi;
//     }
//   }
  
//   mark.calcBMI();
//   console.log(mark.bmi);
  
//   john.calcBMI();
//   console.log(john.bmi);
  
//   if (mark.bmi > john.bmi) {
//     console.log(`${mark.fullName}'s BMI (${
//       mark.bmi}) is higher than ${john.fullName})'s BMI (${john.bmi})`)
//   } else if (john.bmi > mark.bmi) {
//     console.log(`${john.fullName}'s BMI (${
//       john.bmi}) is higher than ${mark.fullName})'s BMI (${mark.bmi})`)
//   }
  
  // for loop keeps running while condition is TRUE
// for (let rep = 1; rep <= 10; rep++) {
//     console.log(`Liftin weights repetition ${rep}`);
//   }
  
  
//   const jonas = [
//     'Jonas',
//     'Schmedtmann',
//     2037 - 1991,
//     'teacher',
//     ['Michael' , 'Peter', 'Steven'],
//     true
//   ];
  
//   const types = [];

//   for (let i = 0; i < jonas.length ; i++) {
//     //reading from jonas array
//     console.log(jonas[i], typeof jonas[i]);
//     //filling types array
//     // types[i] = typeof jonas[i]; 
//     types.push(typeof jonas[i]); //this is a little bit cleaner than the one above
//   }

//   console.log(types);

//   const years = [1991, 2007, 1969, 2020];
//   const ages = [];

//   for (let i = 0; i < years.length; i++) {
//     ages.push(2037 - years[i]);
//   }

//   console.log(ages);

//   //continue and break 
//   console.log('--- ONLY STRINGS ---');

//   for (let i = 0; i < jonas.length; i++) {
//     if(typeof jonas[i] !== 'string' ) continue; // continue działa jak skip - immediately exit the current iteration

//     console.log(jonas[i], typeof jonas[i]);
//   }

//   console.log('--- BREAK WITH NUMBER ---');

//   for (let i = 0; i < jonas.length; i++) {
//     if(typeof jonas[i] === 'number' ) break; // break wypluwa do tego momentu, aż znajdzie number

//     console.log(jonas[i], typeof jonas[i]);
//   }
  

  // const jonas = [
  //   'Jonas',
  //   'Schmedtmann',
  //   2037 - 1991,
  //   'teacher',
  //   ['Michael' , 'Peter', 'Steven'],
  // ];

  // //LOOPING BACKWARDS
  // //4, 3 ... 0

  // for (let i = jonas.length - 1; i >= 0; i--) {
  //   console.log(i, jonas[i]);
  // }

  // // LOOPS IN LOOPS

  // for (let exercise = 1; exercise < 4; exercise++) {
  //   console.log(`----------- Starting exercise ${exercise}`);

  //   for(let rep = 1; rep < 6; rep++) {
  //     console.log (`Exercise ${exercise}: Lifting weight repetition ${rep}`);
  //   }
  // }


  //THE WHILE LOOP

// for (let rep = 1; rep <= 10; rep++) {
//   console.log(`Lifting weights repetition ${rep}`);
// } 

// let rep = 1;
// while (rep <= 10) { //just a condition
//   console.log(`Lifting weights repetition ${rep}`);
//   rep++;
// }

// let dice = Math.trunc(Math.random() * 6) + 1;
// console.log(dice)
  
// while (dice !== 6) {
//   console.log (`You rolled a ${dice}`);
//   dice = Math.trunc(Math.random() * 6) + 1;
//   if(dice === 6) console.log('Loop is about to end');
// }

// ĆWICZENIE Z KODOWANIA 8: CHALLENGE #4



// const calcTip = function (bill) {
//   return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// }

// const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

// const tips = [];
// const totals = [];

// for (let i = 0; i < bills.length; i++) {
//   const tip = calcTip(bills[i]);
//   tips.push(tip);
//   totals.push(tip + bills[i]);
// }

// console.log(bills, tips, totals);