console.log("🤫🧏");
console.warn("FREAKY GOJO WARNING");

console.error("ɆⱤⱤØⱤ");

function onTimeout() {
  console.log("This happens after 1 sec.");
}
setTimeout(onTimeout, 1000);

let countDown = 3;
function onInterval() {
  countDown -= 1;
  console.log(countDown);

  if (countDown == 0) {
    console.log("GET RICKKK ROLLLLLLLEEEEEEEEEDDDDD");
    // window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ");
  }
}
setInterval(onInterval, 1000);

let btn1 = document.getElementById("btn1");
let clickCount = 0;
function onButtonClicked() {
  clickCount += 1;
  btn1.textContent = "You click me " + clickCount + " times";
}
btn1.addEventListener("click", onButtonClicked);
