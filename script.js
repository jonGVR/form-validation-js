const form = document.querySelector(".form-box"),
      username = document.querySelector(".username"),
      email = document.querySelector(".email"),
      password = document.querySelector(".password"),
      password2 = document.querySelector(".password2");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    checkInputs();
});

function checkInputs () {
    // get the values from the inputs
    const usernameValue = username.value.trim(),
          emailValue = email.value.trim(),
          passwordValue = password.value.trim(),
          password2Value = password2.value.trim();

    // Username:
    if (usernameValue === "") {
        // show error and add error class
        setErrorFor(username, "Username cannot be blank");
    } else {
        // add success class
        setSuccessFor(username);
    }
    // Email:
    if (emailValue === "") {
        setErrorFor(email, "Email cannot be blank");
    } else if (!isEmail(emailValue)) {
        setErrorFor(email, "Email is not valid");
    } else {
        setSuccessFor(email);
    }
    // Password:
    if (passwordValue === "") {
        setErrorFor(password, "Password cannot be blank");
    } else if (!isPassword(passwordValue)) {
        setErrorFor(password, "Password must be at least 6 characters long");
    } else if (!isPassword2(passwordValue)) {
        setErrorFor(password, "Password must have at least one number");
    } else {
        setSuccessFor(password);
    }
    // Confirm password:
    if (password2Value === "") {
        setErrorFor(password2, "Password cannot be blank");
    } else if (passwordValue !== password2Value) {
        setErrorFor(password2, "Passwords does not match");
    } else {
        setSuccessFor(password2);
    }
}

function setErrorFor (input, message) {
    const formLabel = input.parentElement; // getting the ".form-label"
    const small = formLabel.querySelector("small"); // getting the "small" tag
    
    // add error message inside small tag
    small.innerText = message;
    // add error class
    formLabel.className = "form-label wrong";
}

function setSuccessFor (input) {
    const formLabel = input.parentElement;
    formLabel.className = "form-label right";
}

function isEmail (email) {
return /^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$/.test(email);
}

function isPassword (password) {
    return /[a-zA-Z0-9!@#$%^&*]{6,16}$/.test(password);
}

function isPassword2 (password) {
    return /^(?=.*[0-9])/.test(password);
}