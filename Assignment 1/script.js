console.log("Assignment 1");

//1.	Declare variables called 'country', 'continent' and 'population' and assign their values according to your own country (population in millions)
//2.	Log their values to the console


let country = 'Russia'; 
let continent = 'Europe'; 
let population = 145; 
console.log(country); 
console.log(continent); 
console.log(population);

// 1.	Declare a variable called 'isIsland' and set its value according to your country. The variable should hold a Boolean value. Also declare a variable 'language', but don't assign it any value yet
// 2.	Log the types of 'isIsland', 'population', 'country' and 'language' to the console

var isIsland = false; 
var language; 
console.log(typeof isIsland); 
console.log(typeof population); 
console.log(typeof country); 
console.log(typeof language); 

// 1.	Set the value of 'language' to the language spoken where you live (some countries have multiple languages, but just choose one)
// 2.	Think about which variables should be const variables (which values will never change, and which might change?). Then, change these variables to const.
// 3.	Try to change one of the changed variables now, and observe what happens

language = 'Russian'; 
// const country = 'Russia'; 
// const continent = 'Europe'; 
// const isIsland = false; 
// isIsland = true; 

// 1.	If your country split in half, and each half would contain half the population, then how many people would live in each half?
// 2.	Increase the population of your country by 1 and log the result to the console
// 3.	Finland has a population of 6 million. Does your country have more people than Finland?
// 4.	Finland has a population of 6 million. Does your country have more people than Finland?
// 5.	Based on the variables you created, create a new variable 'description' which contains a string with this format: 'Portugal is in Europe, and its 11 million people speak portuguese'

console.log(population / 2); 
population++; 
console.log(population); 
console.log(population > 6); 
const description1 = country + ' is in ' + continent + ', and its ' + population + ' million people speak ' + language; 
console.log(description1);

// Recreate the 'description' variable from the last assignment, this time using the template literal syntax

const description = `${country} is in ${continent}, and its ${population} million people speak ${language}`; 

// Predict the result of these 5 operations without executing them: 
// '9' - '5'; 4
// '19' - '13' + '17'; 617
// '19' - '13' + 17;  23
// '123' < 57; false
// 5 + 6 + '4' + 9 - 4 - 2; 
// Execute the operations to check if you were right
console.log('9' - '5');
console.log('19' - '13' + '17'); 
console.log('19' - '13' + 17);
console.log('123' < 57);
console.log(5 + 6 + '4' + 9 - 4 - 2); 

// 1.	Declare a variable 'numNeighbours' based on a prompt input like this: prompt('How many neighbour countries does your country have?');
// 2.	If there is only 1 neighbour, log to the console 'Only 1 border!' (use loose equality == for now)
// 3.	Use an else-if block to log 'More than 1 border' in case 'numNeighbours' is greater than 1
// 4.	Use an else block to log 'No borders' (this block will be executed when 'numNeighbours' is 0 or any other value)
// 5.	Test the code with different values of 'numNeighbours', including 1 and 0.
// 6.	Change == to ===, and test the code again, with the same values of 'numNeighbours'. Notice what happens when there is exactly 1 border! Why is this happening?
// 7.	Finally, convert 'numNeighbours' to a number, and watch what happens now when you input 1
// 8.	Reflect on why we should use the === operator and type conversion in this situation
// // 

const numNeighbours = Number(
  prompt("How many neighbour countries does your country have?")
);
if (numNeighbours === 1) console.log("Only 1 border!");
else if (numNeighbours > 1) console.log("More than 1 border");
else console.log("No borders");

// 1.	. Comment out the previous code so the prompt doesn't get in the way
// 2.	Let's say Sarah is looking for a new country to live in. She wants to live in a country that speaks english, has less than 50 million people and is not an island.
// 3.	Write an if statement to help Sarah figure out if your country is right for her. You will need to write a condition that accounts for all of Sarah's criteria. Take your time with this, and check part of the solution if necessary.
// 4.	If yours is the right country, log a string like this: 'You should live in Portugal :)'. If not, log 'Portugal does not meet your criteria :('
// 5.	Probably your country does not meet all the criteria. So go back and temporarily change some variables in order to make the condition true (unless you live in Canada :D)

//Russia borders 14 countries, Azerbaijan, Belarus, China, Estonia, Finland, Georgia, Kazakhstan, North Korea, Latvia, Lithuania, Mongolia, Norway, Poland, and Ukraine.

if(language === 'english' && population < 50 && country !== isIsland){
  console.log('You should live in Russia :)');
}else{
  console.log('Russia does not meet your criteria :('); 
}

console.log("---Russia borders 14 countries, Azerbaijan, Belarus, China, Estonia, Finland, Georgia, Kazakhstan, North Korea, Latvia, Lithuania, Mongolia, Norway, Poland, and Ukraine-");

// There are two gymnastics teams, Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins the a trophy!

// 1. Calculate the average score for each team, using the test data below
// 2. Compare the team's average scores to determine the winner of the competition, and print it to the console. Don't forget that there can be a draw, so test for that as well (draw means they have the same average score).

// 3. BONUS 1: Include a requirement for a minimum score of 100. With this rule, a team only wins if it has a higher score than the other team, and the same time a score of at least 100 points. HINT: Use a logical operator to test for minimum score, as well as multiple else-if blocks 😉
// 4. BONUS 2: Minimum score also applies to a draw! So a draw only happens when both teams have the same score and both have a score greater or equal 100 points. Otherwise, no team wins the trophy.

// TEST DATA: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110



const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

let scoreDolphins = calcAverage(96, 108, 89);
let scoreKoalas = calcAverage(88, 91, 110);

let checkWinner = function (avgDolphins, avgKoalas) {
  if (avgDolphins >= avgKoalas * 2) {
    console.log(`Dolphins wins ${avgDolphins} vs. ${avgKoalas}`);
  } else if (avgKoalas >= avgDolphins * 2) {
    console.log(`Koalas wins ${avgKoalas} vs ${avgDolphins}`);
  } else {
    console.log(`No one wins!`);
  }
};
checkWinner(scoreDolphins, scoreKoalas);

// TEST DATA BONUS 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123


const calcAverage1 = (score1, score2, score3) => (score1 + score2 + score3) / 3;
let scoreDolphins1 = calcAverage1(97, 112, 101);
let scoreKoalas1 = calcAverage1(109, 95, 123);
function checkWinner1(avgDolhins1, avgKoalas1) {
  if (avgDolhins1 >= avgKoalas1 * 2) {
    console.log(`Dolphins wins (${avgdolphins1} vs ${avgKoalas1}).`);
  } else if (avgKoalas1 >= avgDolhins1 * 2) {
    console.log(`Koalas win (${avgKoalas1} vs ${avgDolhins1}).`);
  } else {
    console.log(`No one wins!`);
  }
}

checkWinner1(scoreDolphins1, scoreKoalas1);

// TEST DATA BONUS 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106


const calcAverage2 = (score1, score2, score3) => (score1 + score2 + score3) / 3;
let scoreDolphins2 = calcAverage2(97, 112, 101);
let scoreKoalas2 = calcAverage2(109, 95, 106);
function checkWinner2(avgDolhins2, avgKoalas2) {
  if (avgDolhins2 >= avgKoalas2 * 2) {
    console.log(`Dolphins wins (${avgdolphins2} vs ${avgKoalas2}).`);
  } else if (avgKoalas2 >= avgDolhins2 * 2) {
    console.log(`Koalas win (${avgKoalas2} vs ${avgDolhins2}).`);
  } else {
    console.log(`No one wins!`);
  }
}

checkWinner2(scoreDolphins2, scoreKoalas2);

