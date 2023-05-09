function login() {
    // Get the input values from the form
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
  
    // Get the stored username and password from local storage
    const storedData = JSON.parse(localStorage.getItem("forData"));
    const storedUsername = storedData.username;
    const storedPassword = storedData.password;
  
    // Check if the inputted username and password match the stored ones
    if (username === 'akhill' && password === 'akhill') {
      // Redirect to the home page
      window.location.href = "../pages/home.html";
    } else {
      // Show an error message
      alert("Invalid username or password.");
    }
  }
  