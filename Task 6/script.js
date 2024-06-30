document.getElementById('userForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Clear previous error messages
    const errorMessagesDiv = document.getElementById('errorMessages');
    errorMessagesDiv.innerHTML = '';

    let errors = [];

    // Validate name
    const name = document.getElementById('name').value;
    if (name.trim() === '') {
        errors.push('Name is required.');
    }

    // Validate email
    const email = document.getElementById('email').value;
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
        errors.push('Email is not valid.');
    }

    // Validate password
    const password = document.getElementById('password').value;
    if (password.length < 6) {
        errors.push('Password must be at least 6 characters long.');
    }

    // Validate confirm password
    const confirmPassword = document.getElementById('confirmPassword').value;
    if (password !== confirmPassword) {
        errors.push('Passwords do not match.');
    }

    // Display errors or submit form
    if (errors.length > 0) {
        errors.forEach(error => {
            const errorMessage = document.createElement('p');
            errorMessage.textContent = error;
            errorMessagesDiv.appendChild(errorMessage);
        });
    } else {
        // Form is valid - you can submit it or perform any other action
        alert('Form submitted successfully!');
        // Example of form submission:
        // this.submit();
    }
});
