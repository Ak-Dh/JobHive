function includeNavbar() {
  const navbarElement = document.getElementById("navbar");
  if (navbarElement) {
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        navbarElement.innerHTML = this.responseText;
      }
    };
    xhr.open("GET", "../pages/navbar.html", true);
    xhr.send();
  }
}
