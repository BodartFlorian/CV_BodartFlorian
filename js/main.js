let y = window.scrollY;

if (window.scrollY) {
  window.scroll(0, 0);  // reset the scroll position to the top left of the document.
}


let contact = document.querySelector("#contact");
let main = document.querySelector("#main");
let burger_menu = document.querySelector("#burger_menu");
let burger_menu_ul = document.querySelector("#burger_menu_ul");


burger_menu.onclick = function () {
  burger_menu_ul.style.display = 'block';
  
}
main.onclick = function () {
  burger_menu_ul.style.display = 'none';
}
contact.onclick = function () {
  burger_menu_ul.style.display = 'none';
}
