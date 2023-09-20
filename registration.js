// Simulated user database (replace with an actual database)
const users = [];

document.getElementById("registrationForm").addEventListener("submit", function (e) {
    e.preventDefault();
    const newUsername = document.getElementById("newUsername").value;
    const newPassword = document.getElementById("newPassword").value;

    // Check if the username is already taken (simulate uniqueness check)
    if (users.some(user => user.username === newUsername)) {
        alert("Username already taken. Please choose another one.");
    } else {
        // Add the user to the database (replace with actual database operation)
        users.push({ username: newUsername, password: newPassword });
        alert("Registration successful! You can now login.");
        // Redirect to the login page or the next page
        // window.location.href = "login.html";
    }
});
