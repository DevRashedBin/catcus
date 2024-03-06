// Program For Active Class

// Program For Active Class

// Sticky Header
window.onscroll = function() {
  if ((window.pageYOffset) >= 50) {
    var navbar = document.getElementById('navbar')
    navbar.classList.remove('navbar-dark');
    navbar.classList.add('navbar-light');
    navbar.classList.add('navbar-blur');
 } else {
     var navbar = document.getElementById('navbar')
     navbar.classList.remove('navbar-light');
     navbar.classList.remove('navbar-blur');
     navbar.classList.add('navbar-dark');
    };
}
// Sticky Header