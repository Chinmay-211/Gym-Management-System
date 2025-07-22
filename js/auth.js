// js/auth.js

document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  firebase.auth().signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      document.getElementById("loginStatus").innerText = "✅ Login successful: " + user.email;
      console.log("Logged in as:", user.email);

      // Optional: Redirect based on email
      if (user.email === "admin@gym.com") {
        window.location.href = "admin.html";
      } else {
        window.location.href = "member.html";
      }
    })
    .catch((error) => {
      document.getElementById("loginStatus").innerText = "❌ Login failed: " + error.message;
      console.error("Login error:", error);
    });
});
