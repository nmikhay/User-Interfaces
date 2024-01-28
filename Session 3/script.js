const neighbours = ["Bulgaria", "Greece", "Armenia", "Azerbaijan","Iran", "Georgia","Syria","Iraq"];

neighbours.push("Utopia");
neighbours.pop();

console.log(neighbours);

if(!neighbours.includes('Germany')){
console.log('Probably not a central European country :D');
}
neighbours[neighbours.indexOf('Bulgaria')]='Republic of Bulgaria';

console.log(neighbours);

const myCountry = {
country: "Turkey",
language: "Turkish",
capital:"Ankara",
population:85,
}
console.log(myCountry);

const classes = ["javascript", "webservice"];
let telNumber = "999999999";


const rezaObject = {
  firstName: "Reza",
  lastName: "Shalchi",
  age: 40,
  job: "teacher",
  frineds: ["Micheal", "Steven", "Peter"],
  nextCourses: classes,
  telNumber: telNumber,
  hasDriverLicence: true,


  getSummary: function () {
    console.log(
      `${rezaObject.firstName} is ${rezaObject.age} years old ${rezaObject.job} and has driver's licence ${rezaObject.hasDriverLicence}`
    )
  }
};

console.log(`${rezaObject.firstName} has ${rezaObject.frineds.length} friends and his best friend's name is ${rezaObject.frineds[2]}`);


// getSummary: function () {
//   console.log(
//     `${rezaObject.firstName} is ${rezaObject.age} years old ${rezaObject.job} and has driver's licence ${rezaObject.hasDriverLicence}`
//   )
// }

rezaObject.getSummary();