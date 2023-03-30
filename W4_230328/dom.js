const myParagraph = document.getElementById("my-paragraph");

myParagraph.innerHTML = "Turn on the sound, and pat the cat!";
myParagraph.style.color = "pink";

const myButton = document.getElementById("my-button");

myButton.addEventListener("click", function () {
  const actionStatus = document.getElementById("action-status");
  let clickStatus = document.createElement("div");
  clickStatus.innerHTML = "Meow";
  actionStatus.appendChild(clickStatus);
  var audio = new Audio("catmeow.mp3");
  audio.play();
});
