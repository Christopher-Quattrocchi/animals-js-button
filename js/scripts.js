// window.onload = function () {
//   let buttondark = document.querySelector("button.darkmode");
//   buttondark.onclick = function () {


//   darkmode () {
//     let body = document.querySelector("body");
//     body.style.backgroundColor = "black";

//   }

//   }


// }


// document.getElementById("darkmode").onclick = darkmode;
// document.getElementById("lightmode").onclick = lightmode;

// window.onload = darkmode () {
//   let body = document.querySelector("body");
//   body.onclick = darkmode() {
//     window.alert("You are now in Darkmode.");
//   };
//     body.removeAttribute("url");
//     body.style.backgroundColor = "black";
// }

window.onload = function () {

  function changeBackgroundColor() {
    document.body.style.backgroundColor = "black";
    document.body.style.backgroundImage = "none";
  }




  document.getElementById("darkmode").addEventListener("click", changeBackgroundColor);
}

function pinkmode() {
  document.body.style.backgroundColor = "pink";
  document.body.style.backgroundImage = "none";
}