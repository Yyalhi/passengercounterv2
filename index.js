let saveEl = document.getElementById("save-el");
let gecmisBilgi = localStorage.getItem("gecmisBilgi");
let previousEntries = localStorage.getItem("total");
let totalPeopleEL = document.querySelector("#total-people");

if (gecmisBilgi !== null) {
  saveEl.textContent = localStorage.getItem("gecmisBilgi");
} else {
  saveEl.textContent = "";
}
let peopleArray = [JSON.parse(previousEntries)];

totalPeopleEL.textContent = localStorage.getItem("total");

let countEl = document.getElementById("count-el");
let count = 0;

function increment() {
  count += 1;
  countEl.textContent = count;
}

function save() {
  let countStr = `${count} - `;
  peopleArray.push(count);
  saveEl.textContent += countStr;
  localStorage.setItem("gecmisBilgi", saveEl.textContent);
  let sum = peopleArray.reduce((a, b) => a + b, 0);
  localStorage.setItem("total", sum);
  totalPeopleEL.textContent = localStorage.getItem("total");
  countEl.textContent = 0;
  count = 0;
}
