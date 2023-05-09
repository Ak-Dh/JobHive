function saveFormData() {
    console.log("entered");
    const firstName = document.getElementById("fname").value;
    const lastName = document.getElementById("lname").value;
    const email = document.getElementById("email").value;
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
  
    const formData = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      username: username,
      password: password
    };
  
    localStorage.setItem("formData", JSON.stringify(formData));
  
    console,log("Form data saved successfully!");
  }
  