const button = document.querySelector("button");
const h1 = document.querySelector("h1");

button.addEventListener("click", function () {
  const color1 = makeRandomColor();
  h1.style.backgroundColor = color1;
  document.body.style.backgroundColor = makeRandomColor();
  h1.innerText = "  you have  " + color1;

  this.style.backgroundColor = color1; //this refers to the button color changer!!!
});

const makeRandomColor = () => {
  const generate = () => {
    return Math.floor(Math.random() * 255);
  };
  const r = generate();
  const g = generate();
  const b = generate();
  return `rgb(${r},${g},${b})`;
};
