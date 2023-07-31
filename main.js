/// Project : Gradient Generator App
const startColor = document.querySelector("input:first-child");
const endColor = document.querySelector("input:nth-child(2)");
const btn = document.querySelector("button");
const result = document.querySelector(".result p");
const arrows = document.querySelectorAll(".icons span");
const copy = document.querySelector(".result span");
let selected = document.querySelector(".selected");

btn.addEventListener("click", () => {
  const gradientValue = `linear-gradient(${selected.getAttribute(
    "direction"
  )}, ${startColor.value}, ${endColor.value})`;
  document.body.style.setProperty("background-image", gradientValue);
  result.textContent = `background-image: ${gradientValue}`;
});

arrows.forEach((cv) => {
  cv.addEventListener("click", () => {
    if (selected === cv) return;
    selected.classList.remove("selected");
    cv.classList.add("selected");
    selected = cv;
  });
});

copy.addEventListener("click", function () {
  navigator.clipboard.writeText(result.textContent);
  copy.textContent = "Copied ✔";
  setTimeout(() => (copy.textContent = "Copy"), 2000);
});
