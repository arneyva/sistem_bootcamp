function onClick() {
  alert("I am clicked");
}

const button = document.getElementById("click");
console.dir(button);
button.onclick = () => {
  alert("I am clicked 2in");
};

button.addEventListener("click", () => {
  alert("I am clicked 3in");
});

function onChange(ev) {
  console.log(ev.target.value);
}
