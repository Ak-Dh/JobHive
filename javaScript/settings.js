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

const themeToggle = document.getElementById('toggle-switch');
const root = document.documentElement;

themeToggle.addEventListener('change', function() {
  if (this.checked) {
    root.style.setProperty('--blue', 'rgb(0, 100, 157)');
    root.style.setProperty('--text-field-light-grey', 'rgb(241, 235, 235)');
    root.style.setProperty('--nav-selected', '#ffffffe4');
    root.style.setProperty('--nav-hover', 'rgb(2, 120, 188)');
    root.style.setProperty('--black', 'rgb(0, 0, 0)');
    root.style.setProperty('--search-input-field', '#f1f1f1');
    root.style.setProperty('--grey', '#808080');
  } else {
    root.style.setProperty('--blue', 'rgb(89, 170, 214)');
    root.style.setProperty('--text-field-light-grey', 'rgb(241, 235, 235)');
    root.style.setProperty('--nav-selected', '#ffffffe4');
    root.style.setProperty('--nav-hover', 'rgb(116, 193, 235)');
    root.style.setProperty('--black', 'rgb(0, 0, 0)');
    root.style.setProperty('--search-input-field', '#f1f1f1');
    root.style.setProperty('--grey', '#808080');
  }
});
