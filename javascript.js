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
    "ul li:hover {border: 1px solid white;margin: 0 20px;padding: calc(1rem - 1px) 0;}";

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
    menu[i].addEventListener(
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
    );
  }
};
