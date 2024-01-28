// Steven wants to build a very simple tip calculator for whenever he goes eating in a restaurant. In his country, it's usual to tip 15% if the bill value is between 50 and 300. If the value is different, the tip is 20%.

// 1. Your task is to calculate the tip, depending on the bill value. Create a variable called 'tip' for this. It's not allowed to use an if/else statement 😅 (If it's easier for you, you can start with an if/else statement, and then try to convert it to a ternary operator!)
// 2. Print a string to the console containing the bill value, the tip, and the final value (bill + tip). Example: 'The bill was 275, the tip was 41.25, and the total value 316.25'

// TEST DATA: Test for bill values 275, 40 and 430

// HINT: To calculate 20% of a value, simply multiply it by 20/100 = 0.2
// HINT: Value X is between 50 and 300, if it's >= 50 && <= 300 😉

// GOOD LUCK 😀

const tipCalculator = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * .15 : bill * .2;
}

const bill = [275, 40, 430];
const tip1 = tipCalculator(bill[0]);
const tip2 = tipCalculator(bill[1]);
const tip3 = tipCalculator(bill[2]);
const total = [bill[0]+tip1, bill[1]+tip2, bill[2]+tip3];


console.log("EXERCISE 1");
console.log(`The bill was ${bill[0]}, the tip was ${tip1}, and the total value ${bill[0] + tip1}`);
console.log(`The bill was ${bill[1]}, the tip was ${tip2}, and the total value ${bill[1] + tip2}`);
console.log(`The bill was ${bill[2]}, the tip was ${tip3}, and the total value ${bill[2] + tip3}`);
console.log("---------------------------------------------------------------------------------------------------------------------------------------");
console.log("EXERCISE 2");

// Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new
// gymnastics discipline, which works differently.
// Each team competes 3 times, and then the average of the 3 scores is calculated (so
// one average score per team).
// A team only wins if it has at least double the average score of the other team.
// Otherwise, no team wins!
// Your tasks:
// 1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
// 2. Use the function to calculate the average for both teams
// 3. Create a function 'checkWinner' that takes the average score of each team
// as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner
// to the console, together with the victory points, according to the rule above.
// Example: "Koalas win (30 vs. 13)"
// 4. Use the 'checkWinner' function to determine the winner for both Data 1 and
// Data 2
// 5. Ignore draws this time

const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

// § Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49

const scoreDolphins = calcAverage(44, 23, 71);
const scoreKoalas = calcAverage(65, 54, 49);

const checkWinner = function (avgDolphins, avgKoalas) {
  if (avgDolphins >= avgKoalas * 2) {
    console.log(`Dolphins wins ${avgDolphins} vs. ${avgKoalas}`);
  } else if (avgKoalas >= avgDolphins * 2) {
    console.log(`Koalas wins ${avgKoalas} vs ${avgDolphins}`);
  } else {
    console.log(`No one wins!`);
  }
};
checkWinner(scoreDolphins, scoreKoalas);

// § Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27

const calcAverage1 = (score1, score2, score3) => (score1 + score2 + score3) / 3;
const scoreDolphinscore1 = calcAverage1(85, 54, 41);
const scoreKoalascore1 = calcAverage1(23, 34, 27);

function checkWinner1(avgDolhinscore1, avgKoalascore1) {
  if (avgDolhinscore1 >= avgKoalascore1 * 2) {
    console.log(`Dolphins wins (${avgdolphinscore1} vs ${avgKoalascore1}).`);
  } else if (avgKoalascore1 >= avgDolhinscore1 * 2) {
    console.log(`Koalas win (${avgKoalascore1} vs ${avgDolhinscore1}).`);
  } else {
    console.log(`No one wins!`);
  }
}

checkWinner(scoreDolphinscore1, scoreKoalascore1);

