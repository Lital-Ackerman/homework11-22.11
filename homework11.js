//exercise 1:
// const runCode = () => {
//   console.log("Start");
//   console.log(new Date());
//   console.log("End");
// };

//exercise 2:
// const runCode = () => {
//   console.log("Start");
//   let time = new Date();
//   console.log("the time now: " + time);
//   setTimeout(
//     () => console.log("the time after 3 seconds: " + new Date()),
//     3000
//   );
//   console.log("End");
// };

//exercise 3:
// const runCode = () => {
//   console.log("Start");
//   let time = new Date();
//   console.log("the time now: " + time.toLocaleTimeString());
//   setTimeout(
//     () =>
//       console.log("the time before 3 seconds: " + time.toLocaleTimeString()),
//     3000
//   );
//   console.log("End");
// };

//exercise 4:
// const runCode = () => {
//   console.log("Start");

//   setTimeout(random, 3000);
//   setTimeout(random, 5000);
//   setTimeout(random, 7000);

//   console.log("End");
// };

// const random = () => {
//   let randomNumber = Math.floor(Math.random() * 100);
//   console.log(randomNumber);
// };

//exercise 5:
// let result = document.getElementById("result-box");
// let max = document.getElementById("max-num");

// const randomBetweenINputTo100 = () => {
//   setInterval(random, 1000);
// };

// const random = () => {
//   let maximum = max.value;
//   let randomNumber = Math.floor(Math.random() * maximum);
//   result.innerText = randomNumber;
// };

// //exercise 6:
// const randomBetweenINputTo100 = () => {
//   setInterval(bgColor, 1000);
// };

// const bgColor = () => {
//   let randomColor = Math.floor(Math.random() * 16777215).toString(16);
//   console.log("#" + randomColor);
//   document.body.style.backgroundColor = "#" + randomColor;
// };

//exercise 7:
// const runCode = () => {
//   document.body.style.backgroundColor = "Green";
//   setTimeout(() => alert("Done"), 1000);
// };

//exercise 8:
// const runCode = () => {
//   setTimeout(getRandomNumberAfterDelay, 5000);
// };

// const getRandomNumberAfterDelay = () => {
//   let randomNumber2 = Math.floor(Math.random() * 100);
//   console.log(randomNumber2);

//   return randomNumber2;
// };

//exercise 9:
// const runCode = () => {
//   let limit = document.getElementById("max-num").value;
//   exercise9(getRandomNumberAfterDelay, limit);
// };

// const getRandomNumberAfterDelay = (limit) => {
//   setTimeout(() => {
//     let randomNumber2 = Math.floor(Math.random() * limit);
//     console.log(randomNumber2);
//     return randomNumber2;
//   }, 5000);
// };

// const exercise9 = (callback, limit) => {
//   callback(limit);
// };

//exercise 10:

// const runCode = () => {
//   let first = Number(document.getElementById("min-num").value);
//   let last = Number(document.getElementById("max-num").value);
//   exercise10(getRandomNumberAfterDelay, first, last);
// };

// const getRandomNumberAfterDelay = (first, last) => {
//   setTimeout(() => {
//     let randomNumber3 = Math.floor(Math.random() * (last - first) + first);
//     console.log(randomNumber3);
//     return randomNumber3;
//   }, 5000);
// };

// const exercise10 = (callback, first, last) => {
//   callback(first, last);
// };

//exercise 11:

// const runCode = () => {
//   let first = Number(document.getElementById("min-num").value);
//   let last = Number(document.getElementById("max-num").value);
//   exercise11(getEvenRandomNumberAfterDelay, first, last);
// };

// const getEvenRandomNumberAfterDelay = (first, last) => {
//   setTimeout(() => {
//     let randomNumber4 = Math.floor(Math.random() * (last - first) + first);
//     while (randomNumber4 % 2 !== 0) {
//       randomNumber4 = Math.floor(Math.random() * (last - first) + first);
//     }
//     console.log("even number: " + randomNumber4);
//     return randomNumber4;
//   }, 5000);
// };

// const exercise11 = (callback, first, last) => {
//   callback(first, last);
// };

//exercise 12:
// const runCode = () => {
//   exercise12(getUserFromServer);
// };

// function getUserFromServer() {
//   setTimeout(() => {
//     // Demo for getting user from the server:
//     const user = { firstName: "Moishe", lastName: "Ufnik" };
//     // let userName = user.firstName + user.lastName;
//     console.log(user);
//     return user;
//   }, 4000);
// }

// const exercise12 = (callback) => {
//   callback();
// };

//exercise 13:
// let result = document.getElementById("result-box");

// const runCode = () => {
//   exercise13(getGradesFromServer);
// };

// function getGradesFromServer() {
//   setTimeout(() => {
//     // Demo for getting grades from the server:
//     const grades = [100, 98, 75, 80, 100, 87];
//     console.log(grades);

//     return grades;
//   }, 7000);
// }

// const exercise13 = (callback) => {
//   callback();
// };

//exercise 14:
// let clock = document.getElementById("clock");

// const runCode = () => {
//   setInterval(() => {
//     let time = new Date();
//     clock.innerHTML = time.toLocaleTimeString();
//     let randomColor = Math.floor(Math.random() * 16777215).toString(16);
//     clock.style.color = "#" + randomColor;
//   }, 1000);
// };

// promise-exercise 1:

// let randomNumber5;

// const runCode = () => {
//   let min = Number(document.getElementById("min-num").value);
//   let max = Number(document.getElementById("max-num").value);
//   let myPromise = generate7BoomAfterDelayAsync(min, max);

//   setTimeout(() => {
//     myPromise
//       .then(() => alert("success!???? your number is: " + randomNumber5))
//       .catch(() => alert("error!?????????????" + randomNumber5 + " is not 7Boom!"));
//   }, 1000);
// };

// const generate7BoomAfterDelayAsync = (min, max) => {
//   const myPromise = new Promise((resolve, reject) => {
//     randomNumber5 = Math.floor(Math.random() * (max - min + 1) + min);
//     if (randomNumber5 % 7 === 0 || randomNumber5 % 10 === 7) {
//       resolve(randomNumber5);
//     } else {
//       reject(randomNumber5);
//     }
//   });
//   return myPromise;
// };

// promise-exercise 2: *something wrong
// let isPrime = true;
// let randomNumber6;

// const runCode = () => {
//   let min = Number(document.getElementById("min-num").value);
//   let max = Number(document.getElementById("max-num").value);
//   let myPromise = generatePrimeNumberAfterDelayAsync(min, max);

//   setTimeout(() => {
//     myPromise
//       .then(() => alert("success!???? your prime number is: " + randomNumber6))
//       .catch(() =>
//         alert("error!?????????????" + randomNumber6 + " is not a prime number!")
//       );
//   }, 1000);
// };

// const generatePrimeNumberAfterDelayAsync = (min, max) => {
//   const myPromise = new Promise((resolve, reject) => {
//     randomNumber6 = Math.floor(Math.random() * (max - min + 1) + min);

//     // check if number is equal to 1
//     if (randomNumber6 === 1) {
//       alert("1 is neither prime nor composite number.");
//     }

//     // check if number is greater than 1
//     else if (randomNumber6 > 1) {
//       // looping through 2 to number-1
//       for (let i = 2; i < randomNumber6; i++) {
//         if (randomNumber6 % i === 0) {
//           isPrime = false;
//           break;
//         }
//       }

//       if (isPrime === true) {
//         resolve(randomNumber6);
//       } else {
//         reject(randomNumber6);
//       }
//     }
//   });

//   return myPromise;
// };

//promise-exercise 3:
let randomAnimal;
let randomAnimalIndex;
let array = [
  "kitty",
  "puppy",
  "bunny",
  "parrot",
  "scorpion",
  "spider",
  "cockroach",
];

const runCode = () => {
  let myPromise = generateCuteAnimalAfterDelayAsync();

  setTimeout(() => {
    myPromise
      .then(() => alert("your cute animal is: " + randomAnimal))
      .catch(() => alert("watch out! your animal is: " + randomAnimal));
  }, 1000);
};

const generateCuteAnimalAfterDelayAsync = () => {
  const myPromise = new Promise((resolve, reject) => {
    randomAnimalIndex = Math.floor(Math.random() * (array.length - 1));
    randomAnimal = array[randomAnimalIndex];
    if (randomAnimalIndex < 4) {
      resolve(randomAnimal);
    } else {
      reject(randomAnimal);
    }
  });
  return myPromise;
};
