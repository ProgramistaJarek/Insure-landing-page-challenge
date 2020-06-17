window.onload = function () {
  var menuBtn = document.querySelector(".menu-img");
  var menuList = document.querySelector(".active");
  var menu = document.querySelectorAll("ul li");

  menuBtn.addEventListener("click", function () {
    if (menuList.style.display == "none") {
      menuList.style.display = "block";
      menuBtn.style.backgroundImage = "url(./images/icon-close.svg)";
    } else {
      menuList.style.display = "none";
      menuBtn.style.backgroundImage = "url(./images/icon-hamburger.svg)";
    }
  });
  var liHover =
    "ul li a:hover { color: var(--dark-violet); ursor: pointer; }";

  for (var i = 0; i < menu.length; i++) {
    menu[i].addEventListener(
      "touchstart",
      function () {
        this.classList.add("liHover");
      },
      true
    );
    menu[i].addEventListener(
      "touchend",
      function () {
        this.classList.remove("liHover");
      },
      true
    );
    /*menu[i].addEventListener(
      "mouseenter",
      function () {
        this.classList.add("liHover");
      },
      true
    );
    menu[i].addEventListener(
      "mouseout",
      function () {
        this.classList.remove("liHover");
      },
      true
    );*/
  }

  function myFunction(imageIntro) {
    if (imageIntro.matches) {
      // If media query matches
      imageIntroDesktop.style.position = "absolute";
      var x = 0;
      imageIntroDesktop.innerHTML =
        "<img src=" +
        " " +
        "./images/image-intro-desktop.jpg" +
        " " +
        "width=" +
        " " +
        "100%" +
        " " +
        "height=" +
        " " +
        "auto" +
        " " +
        " alt=" +
        " " +
        "family" +
        ">";
      console.log(x);
    } else {
      imageIntroDesktop.style.position = "relative";
      imageIntroDesktop.innerHTML = "";
    }
  }

  var imageIntroDesktop = document.querySelector(".family-intro");
  var imageIntro = window.matchMedia("(min-width: 768px)");
  myFunction(imageIntro); // Call listener function at run time
  imageIntro.addListener(myFunction); // Attach listener function on state changes

};
