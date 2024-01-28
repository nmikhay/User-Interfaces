const input = document.querySelector("input");
const h1 = document.querySelector("h1");

input.addEventListener("input", function (e) {
  console.log(input.value);
  h1.innerText = input.value;
});

input.addEventListener("keydown", function (e) {
  // console.log(e.code, e.key);
  switch (e.code) {
    case "ArrowUp":
      console.log("arrowup");
      break;

    case "ArrowDown":
      console.log("down");
      break;
  }
});

