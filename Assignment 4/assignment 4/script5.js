const spans = document.querySelectorAll("span");
const colors = ["red", "orange", "yellow", "green","blue", "indigo", "violet"];

spans.forEach((span, i) => {
  span.style.color = colors[i % colors.length];
});