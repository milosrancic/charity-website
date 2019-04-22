function randomNum() {
  let min = 3000;
  let max = 100000;
  let num = Math.floor(Math.random() * (max - min));
  return num;
}
document.getElementById("donations").innerHTML = "€ " + randomNum();
