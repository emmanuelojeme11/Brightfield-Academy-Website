// Get the contact form from the page
const form = document.getElementById("contactForm");

// Run this function when the form is submitted
form.addEventListener("submit", function(event) {
    event.preventDefault();

    // Get the values entered by the visitor
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const subject = document.getElementById("subject").value.trim();
    const message = document.getElementById("message").value.trim();
    const feedback = document.getEle.ntById("formMessage");

    // Check that no field is empty
    if (name === "" || email === "" || subject === "" || message === "") {
        feedback.textContent = "Please fill in all the fields.";
        feedback.style.color = "red";
        return;
    }

    // Simple check that the email contains @ and a dot
    if (!email.includes("@") || !email.includes(".")) {
        feedback.textContent = "Please enter a valid email address.";
        feedback.style.color = "red";
        return;
    }

    feedback.textContent = "Your form has passed validation. It has not been sent.";
    feedback.style.color = "green";
    form.reset();
});
