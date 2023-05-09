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

// document.getElementById('search-form').addEventListener('submit', function(event) {
//   event.preventDefault(); // Prevent form submission from reloading the page
//   // Add code to handle form submission
// });


