/*var count = 0;
function clickAlert() {
  count++;
  if (count > 5) {
    alert("Reached max number of click:- " + count);
  }
}*/

const buttonTag = document.getElementById("Button-tag");
//const divTag = document.getElementById("div-tag");
const input1Tag = document.getElementById("input-1");
const input2Tag = document.getElementById("input-2");
const resultTag = document.getElementById("result");

buttonTag.onclick = function () {
  //divTag.innerHTML = "Lol! i have changed it";
  var inp1 = parseInt(input1Tag.value);
  var inp2 = parseInt(input2Tag.value);
  resultTag.value = inp1 + inp2;
};
