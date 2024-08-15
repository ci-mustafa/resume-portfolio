function sendMail(contactForm) {
    // Disable the button to prevent multiple clicks during the process
    const submitButton = document.getElementById("submitbutton");
    submitButton.disabled = true;
    emailjs.send("Gmail", "mustafaakbari", {
            "from_name": contactForm.name.value,
            "from_email": contactForm.email.value,
            "project_request": contactForm.projectsummary.value
        })
        .then(
            function (response) {
                console.log("SUCCESS", response);
                // Alert the user of successful submission
                alert("Your email has been sent successfully!");

                // Clear form inputs
                contactForm.name.value = "";
                contactForm.email.value = "";
                contactForm.projectsummary.value = "";
                
                // Re-enable the submit button
                submitButton.disabled = false;
            },
            function (error) {
                console.log("FAILED", error);
                alert("Failed to send email. Please try again.");
                // Re-enable the submit button
                submitButton.disabled = false;
            }
        );
    return false; // To block from loading a new page
}