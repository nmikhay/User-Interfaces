


// 1. Write a function 'calcTip' that takes any bill value as an input and returns the corresponding tip, calculated based on the rules above (you can check out the code from first tip calculator challenge if you need to). Use the function type you like the most. Test the function using a bill value of 100
// 2. And now let's use arrays! So create an array 'bills' containing the test data below
// 3. Create an array 'tips' containing the tip value for each bill, calculated from the function you created before
// // 4. Bonus: Create an array 'total' containing the total values, so the bill + tip



function calcTip(amount) {
  const tipValue = amount >= 50 && amount < 300 ? 0.15 : 0.20;
  return tipValue * amount;
}

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const totals = [(bills[0]+tips[0]),(bills[1]+tips[1]),(bills[2]+tips[2])];


console.log(" QUESTION 1");
console.log(`The bill was ${bills[0]}, the tip was ${tips[0]}, and the total value ${bills[0] + tips[0]}`);
console.log(`The bill was ${bills[1]}, the tip was ${tips[1]}, and the total value ${bills[1] + tips[1]}`);
console.log(`The bill was ${bills[2]}, the tip was ${tips[2]}, and the total value ${bills[2] + tips[2]}`);

console.log("--------------------------------------------------------------------------------------------------------------------------------------------------")
console.log(" QUESTION 2");


// Let's go back to Mark and John comparing their BMIs! This time, let's use objects to implement the calculations! Remember: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter)

// 1. For each of them, create an object with properties for their full name, mass, and height (Mark Miller and John Smith)
// 2. Create a 'calcBMI' method on each object to calculate the BMI (the same method on both objects). Store the BMI value to a property, and also return it from the method.
// 3. Log to the console who has the higher BMI, together with the full name and the respective BMI. Example: "John Smith's BMI (28.3) is higher than Mark Miller's (23.9)!"


const mark = {
  firstName: "Mark",
  lastName: "Miller",
  height: 1.69,
  mass: 78,
  calcBMI: function () {
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
  }
};

const john = {
  firstName: "John",
  lastName: "Smith",
  height: 1.95,
  mass: 92,
  calcBMI: function () {
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
  }
};

console.log(mark.calcBMI());
console.log(john.calcBMI());

if (mark.bmi > john.bmi) {
  console.log(
    `${mark.firstName}'s BMI (${mark.bmi}) is higher than ${john.firstName}'s BMI (${john.bmi})`
  );
} else if (john.bmi > mark.bmi) {
  console.log(
    `${mark.firstName}'s BMI (${john.bmi}) is higher than ${mark.firstName}'s BMI (${john.bmi})`
  );
}

console.log("--------------------------------------------------------------------------------------------------------------------------------------------------")
console.log(" QUESTION 3");

// // Add a method called 'describe' to the 'myCountry' object. This method will log a string to the console, 
// similar to the string logged in the previous assignment, but this time using the 'this' keyword. 
// 2. Call the 'describe' method 3. Add a method called 'checkIsland' to the 'myCountry' object. 
// This method will set a new property on the object, called 'isIsland'. 'isIsland' will be true if there are no neighbouring countries, and false if there are. 
// Use the ternary operator to set the property.


const myCountry = {
  country: "Turkey",
  language: "Turkish",
  capital:"Ankara",
  population:85,
  neighbours :["Bulgaria", "Greece", "Armenia", "Azerbaijan","Iran", "Georgia","Syria","Iraq"],
  
  describe: function () {
    console.log(
        `${this.country} has ${this.population} million people who speak ${this.language}, ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}.`
    );
},

checkIsland: function () {
    this.isIsland = this.neighbours.length === 0 ? true : false;
},
}
myCountry.describe();
myCountry.checkIsland();
console.log(myCountry);

console.log("--------------------------------------------------------------------------------------------------------------------------------------------------")
console.log(" QUESTION 4");

// Exercise 4: 
// There are elections in your country! In a small town, there are only 50 voters. Use a for loop to simulate the 50 people voting, by logging a string like this to the console (for numbers 1 to 50): 'Voter number 1 is currently voting

  for (var voter = 1; voter < 51; voter++) {
    console.log(`Voter number ${voter} is currently voting`);
  }
  