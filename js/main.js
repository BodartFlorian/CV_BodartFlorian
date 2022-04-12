let y = window.scrollY;

if (window.scrollY) {
  window.scroll(0, 0);  // reset the scroll position to the top left of the document.
}

let main = document.querySelector("#main");
let burger_menu = document.querySelector("#burger_menu");
let burger_menu_ul = document.querySelector("#burger_menu_ul");



burger_menu.onclick = function () {
  burger_menu_ul.style.display = 'block';
  
}
main.onclick = function () {
  burger_menu_ul.style.display = 'none';
}


let etatcheckbox = document.querySelector(".switch");

etatcheckbox.addEventlistener('change' , function () {

if (this.checked){
  let H = document.createElement("h2");
  H.setAttribute("test");
  let txt = document.createTextNode ("hi");
  let repNode = document.getElementById("")
  dark.style.display = 'block';
} else {
  dark.style.display = "none";
}});


