const makeRandomColor = () => {
  const generate = () => {
    return Math.floor(Math.random() * 255);
  };
  const r = generate();
  const g = generate();
  const b = generate();
  return `rgb(${r},${g},${b})`;
};

const buttons = document.querySelectorAll("button");

for (let button of buttons) {
  // for OF iteration in javascript
  button.addEventListener("click", colorize);
}

function colorize() {
  this.style.backgroundColor = makeRandomColor(); //using this keyword
  this.style.color = makeRandomColor();
}

const h1s = document.querySelectorAll("h1");
for (let h1 of h1s) {
  h1.addEventListener("click", colorize);
}
