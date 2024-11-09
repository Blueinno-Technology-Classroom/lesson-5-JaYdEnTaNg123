let field1 = document.getElementById("meme bank");
let btn = document.getElementById("meme btn");
let output = document.getElementById("output-caption");

function onBtnClicked() {
  output.textContent = field1.value;
}
btn.addEventListener("click", onBtnClicked);
