document.addEventListener("DOMContentLoaded", function () {
    const roundTripCheckbox = document.getElementById("roundTrip");
    const returnDateGroup = document.getElementById("returnDateGroup");

    roundTripCheckbox.addEventListener("change", function () {
        if (this.checked) {
            returnDateGroup.style.display = "block";
            document.getElementById("returnDate").setAttribute("required", "required");
        } else {
            returnDateGroup.style.display = "none";
            document.getElementById("returnDate").removeAttribute("required");
        }
    });

    function validateEmail(email) {
        const re = /\S+@\S+\.\S+/;
        return re.test(email);
    }

    document.getElementById("ticketForm").addEventListener("submit", function (event) {
        const emailInput = document.getElementById("email");
        const emailError = document.getElementById("emailError");

        if (!validateEmail(emailInput.value)) {
            event.preventDefault();
            emailError.style.display = "block";
            return false;
        } else {
            emailError.style.display = "none";
        }
    });

    const emailInput = document.getElementById("email");
    const emailError = document.getElementById("emailError");

    emailInput.addEventListener("input", function () {
        emailError.style.display = "none";
    });
});
