function toggle() {
  console.log("toggle");
  const element = document.getElementById("myDiv");
  console.log(element);
  element.classList.toggle("toggle");
}

function addClass() {
  console.log("addClass");
  const element = document.getElementById("class");
  console.log(element);
  element.classList.toggle("font-bold");
}

function removeClass() {
  const element = document.getElementById("font-bold");
}
document.getElementById("toggle").addEventListener("click", toggle);
document.getElementById("add-class").addEventListener("click", addClass);
// document.getElementById("add-class").addEventListener("mouseover", addClass);
document.getElementById("remove-class").addEventListener("click", removeClass);
