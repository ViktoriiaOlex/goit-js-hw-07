const registerForm = document.querySelector(".login-form");

registerForm.addEventListener("submit", event => {
    event.preventDefault();
    const userData = {
        email: event.target.elements.email.value.trim(),
        password: event.target.elements.password.value.trim(),
    };
    if (userData.email === "" || data.password === "") {
        return alert("All form fields must be filled in");
    }
    console.log(userData);
    event.target.reset();
});

