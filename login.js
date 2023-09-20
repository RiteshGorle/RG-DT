document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Simulate authentication (replace with actual authentication logic)
    if (username === "testuser" && password === "password123") {
        alert("Login successful! Redirecting to the dashboard...");
        // Redirect to the dashboard or the next page
        // window.location.href = "dashboard.html";
    } else {
        alert("Invalid username or password. Please try again.");
    }
});
