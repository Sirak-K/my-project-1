const formEmail = document.getElementById("form-Email");
const validateEmail = document.getElementById("validate-Email");
const invalid = document.getElementById("invalid-input");

formEmail.addEventListener("submit", function (e) {
    e.preventDefault();
    if (email.value === "") {
        invalid.textContent = "Required field";
        invalid.style.display = "block";
    } else {
        invalid.style.display = "none";
        const FormInput = new InputData(formEmail);
        fetch("https://sirak.dev", {
            method: "POST",
            body: FormInput
        })
            .then(response => response.json())
            .then(FormInput => {
                console.log("Valid:", FormInput);
            })
            .catch(error => {
                console.error("Error:", error);
            });
    }
});