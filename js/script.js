const contactForm = document.querySelector("#contact-form");
const formStatus = document.querySelector("#form-status");

const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const messageInput = document.querySelector("#message");

function showStatus(message, type) {
    formStatus.textContent = message;
    formStatus.classList.remove("success", "error");
    formStatus.classList.add(type);
}

contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const message = messageInput.value.trim();

    if (!name || !email || !message) {
        showStatus("Please complete all fields.", "error");
        return;
    }

    const namePattern = /^[\p{L}\s'-]+$/u;

if (name.length < 2 || !namePattern.test(name)) {
    showStatus(
        "Please enter a valid name using letters only.",
        "error"
    );

    nameInput.focus();
    return;
}


    if (emailInput.validity.typeMismatch) {
        showStatus("Please enter a valid email address.", "error");
        emailInput.focus();
        return;
    }

    showStatus(`Thank you, ${name}!`, "success");
    contactForm.reset();
});