window.onscroll = function function() {myFunction () };

  var navbar = document.getElementById("navbar");
  var sticky = navbar.offsetTop;

  function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

const navSlide = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav-links")
  const navLinks = document.querySelectorAll(".nav-links li");
  //Toogle Nav
  burger.addEventListener("click") => {
    .nav.classlist.toggle("nav.active");
  });
  //Animate Links
}
  navLinks.forEch((link, index) => {
    console.log(index);
  });
}
navSlide();
