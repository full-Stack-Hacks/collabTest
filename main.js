const btn = document.querySelector("#btn");

btn.addEventListener("click", doesBranchStay);

function doesBranchStay() {
  const words = amIOnNewFeature();
  console.log(true);
  console.log(words);
}

function amIOnNewFeature() {
  console.log("On new feature and working");
}
