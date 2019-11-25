function myFunction() {
  var x = document.getElementById("navOptions");
  if (x.className === "navOptions") {
    x.className += " responsive";
  } else {
    x.className = "navOptions";
  }
}
/*cambio de clase cada vez que hacemos clic*/

window.onscroll = function() {stickyFunction()};

var principal = document.getElementById("seccionPrincipal");
var navbar = document.getElementById("navBarMenu");
var sticky = principal.offsetTop;

function stickyFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}
/*no es necesatio si se opta solo por poner el nav directamente en fixed*/
