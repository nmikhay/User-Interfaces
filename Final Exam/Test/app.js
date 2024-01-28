/* TEST - NADEZHDA MIKHAYLOVA 6214139  */

//----- DO NO TOUCH BELOW ----//
function output(){
	alert(str);
}
//----- DO NOT TOUCH ABOVE ----//


function tipCalculator() {

	var billAmount = document.getElementById("totalBill").value;
	var service = document.getElementById("service").value;
	var numPeople = document.getElementById("peopleCount").value;


	if (isNaN(billAmount) || isNaN(service) || billAmount === "" || service === "") {
			alert("Please fill out all the fields");
			return;
	}

	if (numPeople === "" || numPeople <= 0) {
			numPeople = 1;
			document.getElementById("peopleCount").value = 1;
	}

	var billTip = billAmount * service;
	var billTotal = billAmount + billTip;
	var tipAndTotal = document.getElementById("tipAndTotal");

	tipAndTotal.innerHTML = "Tip/person: $" + (billTip / numPeople).toFixed(2) + "<br>" + "Total/person: $" + (billTotal / numPeople).toFixed(2);

	alert("Your waiter thanks you!");
}

function tooManyWords(slogan) {
  if (!slogan || typeof slogan !== "string") {
    return "Cannot complete request";
  }
  let acronym = "";
  let words = slogan.split(" ");
  for (let word of words) {
    acronym += word[0].toUpperCase();
  }
  return acronym + " stands for " + slogan;
}

console.log(tooManyWords("Too Many Words"));
console.log(tooManyWords("What The Face"));
console.log(tooManyWords("Thank God It's Friday"));
console.log(tooManyWords("supercalifragilisticexpialidocious"));
console.log(tooManyWords(""));

