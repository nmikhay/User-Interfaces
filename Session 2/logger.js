"use strict";

// function logger(){
//   console.log("My name is Bla");
// }
// logger();
// logger();

// function fruitProcessor(apples, oranges){
//   const juice = 'juice with ${aplles} apples and ${oranges} oranges';
//   return juice;
// }
// const appleJuice = fruitProcessor(5,0);
// console.log(aplleJuice);


function describeCountry(country, population, capitalCity) {
  console.log(
    `${country} has ${population} million people and its capital city is ${capitalCity}`
  );
}

const descTurkey = describeCountry("Turkey", 85, "Ankara");
const descMorocco = describeCountry("Morocco",37,"Rabbat");
const descGreece = describeCountry("Greece", 11, "Athens");

// console.log(descGreece, "\n", descMorocco, "\n", descTurkey);

const country = "China";
function percentageOfWorld1(population) {
  const calcPercentage = (population / 7900) * 100;
  return `${country} has ${population} million peoplem, so it's about ${calcPercentage}% of the world population`;
}

const calcPercentage1 = percentageOfWorld1(1441);
console.log(calcPercentage1);

const percentageOfWorld2 = function (population) {
  return (population / 7900) * 100;
};

  const percTurkey= percentageOfWorld2(85);
  const percMorocco = percentageOfWorld2(37);
  const percGreece = percentageOfWorld2(11);

console.log(percTurkey, percMorocco,percGreece);

const percentageOfWorld3 = (population) => {
  return (population / 7900) * 100;
}


