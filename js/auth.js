document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;

  // Clear previous status
  const status = document.getElementById("loginStatus");
  status.innerText = "";
  status.style.color = "red";

  firebase.auth().signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      status.style.color = "green";
      status.innerText = "✅ Login successful: " + user.email;
      console.log("Logged in as:", user.email);

      // Redirect based on role
      if (user.email === "admin@gym.com") {
        window.location.href = "admin.html";
      } else {
        window.location.href = "member.html";
      }
    })
    .catch((error) => {
      switch (error.code) {
        case "auth/invalid-email":
        case "auth/user-not-found":
          status.innerText = "❌ Incorrect email.";
          break;
        case "auth/wrong-password":
          status.innerText = "❌ Incorrect password.";
          break;
        default:
          status.innerText = "❌ Login failed. Please try again.";
      }

      console.error("Login error:", error.code);
    });
});
