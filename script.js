function showEnrollForm(courseName) {
    document.getElementById('enrollModal').style.display = 'block';
    document.getElementById('enrollForm').setAttribute('data-course', courseName);
}

function closeEnrollForm() {
    document.getElementById('enrollModal').style.display = 'none';
}

function submitEnrollForm() {
    const courseName = document.getElementById('enrollForm').getAttribute('data-course');
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // In a real-world scenario, you would send this data to a server for storage
    // Here, I'm just logging the data to the console for demonstration purposes
    console.log(`Enrolled in ${courseName} with Email: ${email} and Password: ${password}`);

    // Close the form after submission
    closeEnrollForm();
}
document.getElementById('currentYear').innerText = new Date().getFullYear();
