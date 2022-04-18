let y = window.scrollY;

if (window.scrollY) {
  window.scroll(0, 0);  // reset the scroll position to the top left of the document.
}

                            /* Burger menu  ==> Start */

let main = document.querySelector("#main");
let burger_menu = document.querySelector("#burger_menu");
let burger_menu_ul = document.querySelector("#burger_menu_ul");
let about = document.querySelector("#B1");
let contact = document.querySelector("#B2");
let formation = document.querySelector("#B3");
let transversale = document.querySelector("#B4");
let experience = document.querySelector("#B5");


burger_menu.onclick = function () {
  burger_menu_ul.style.display = 'block';
}
main.onclick = function () {
  burger_menu_ul.style.display = 'none';
}
about.onclick = function () {
  burger_menu_ul.style.display = 'none';
}
contact.onclick = function () {
  burger_menu_ul.style.display = 'none';
}
formation.onclick = function () {
  burger_menu_ul.style.display = 'none';
}
transversale.onclick = function () {
  burger_menu_ul.style.display = 'none';
}
experience.onclick = function () {
  burger_menu_ul.style.display = 'none';
}
                        /* Burger menu  ==> End */


                        /* dark mode  ==> Start */

let checkbox = document.getElementById("ChangeTheme"); //get the checkbox to a variable

//check storage if dark mode was on or off
if (sessionStorage.getItem("mode") == "dark") {
  darkmode(); //if dark mode was on, run this funtion
} else {
  nodark(); //else run this funtion
}

//if the checkbox state is changed, run a funtion
checkbox.addEventListener("change", function() {
  //check if the checkbox is checked or not
  if (checkbox.checked) {
    darkmode(), DevWavesWhite(); //if the checkbox is checked, run this funtion
  } else {
    nodark(), DevWavesBlack(); //else run this funtion
  }
});

//function for checkbox when checkbox is checked
function darkmode() {
  document.body.classList.add("dark-mode"); //add a class to the body tag
  checkbox.checked = true; //set checkbox to be checked state
  sessionStorage.setItem("mode", "dark"); //store a name & value to know that dark mode is on
};

//function for checkbox when checkbox is not checked
function nodark() {
  document.body.classList.remove("dark-mode"); //remove added class from body tag
  checkbox.checked = false; //set checkbox to be unchecked state
  sessionStorage.setItem("mode", "light"); //store a name & value to know that dark mode is off or light mode is on
};
                                /* dark mode ==> End */


                            /* switch logo Dev Waves  ==> Start */
let logoDWB = document.querySelector("#logoDWB_JS");
let logoDW = document.querySelector("#logoDW_JS");


function DevWavesWhite() {
  logoDWB.style.display = 'block';
  logoDW.style.display = 'none';
};

function DevWavesBlack() {
  logoDWB.style.display = 'none';
  logoDW.style.display = 'block';
};
                            /*switch logo Dev Waves  ==> End*/