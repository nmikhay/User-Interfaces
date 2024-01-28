console.log("welcome to the session");
let teacherName = "reza";
console.log(teacherName + " " + "likes to teach this class");
console.log(teacherName + " " + "likes to teach this class");

let myAge = 12;
console.log(myAge * 2, myAge / 10, 2 ** 3, "reza shalchian", 12 === 12);
const firstName = "reza";
const lastName = "shalchian";
console.log(firstName + " " + lastName);

//Assignment
let x = 10;
x *= 4;
x++;
x--;
console.log(x);

//comparison operators
let neigborFriend = 30;
console.log(myAge > neigborFriend);
const isFullAge = myAge >= 18;

//operator presedance
let var1, var2;
var1 = var2 = 25 - 10 - 2; // 13
console.log(var1, var2);


const massMark = 95;
const heightMark = 1.88;

const massJohn = 85;
const heightJohn = 1.76;

const BMIMark = massMark / (heightMark * heightMark);
const BMIJohn = massJohn / (heightJohn * heightJohn);

const MarkHigherBMI = BMIMark > BMIJohn;
// console.log(BMIJohn, BMIMark, MarkHigherBMI);

if(BMIMark > BMIJohn){
  console.log('Mark\'s BMI is bigger than John\'s');
}
else {
  console.log('John\'s BMI is bigger than Mark\'s');
}

//Math object

const s = "name";
console.log(s.replace("n", "b"));
// s = s.replace("n","b");
console.log(s);


