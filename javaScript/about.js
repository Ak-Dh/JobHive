function includeNavbar() {
  const navbarElement = document.getElementById("navbar");
  if (navbarElement) {
    const navbarXhr = new XMLHttpRequest();
    navbarXhr.open("GET", "navbar.html", true);
    navbarXhr.send();

    window.addEventListener("load", function() {
      if (navbarXhr.readyState == 4 && navbarXhr.status == 200) {
        navbarElement.innerHTML = navbarXhr.responseText;
      }
    });
  }
}
