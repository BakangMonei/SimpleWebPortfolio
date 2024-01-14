// main.js

const loginForm = document.getElementById('loginForm');

loginForm.addEventListener('submit', function (event) {
  event.preventDefault(); // Prevent the default form submission

  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  // Sign in with email and password using the handleLogin function
  handleLogin(email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      console.log('Successfully logged in:', user);

      // Redirect to MainDashboard.html or perform other actions
      window.location.href = 'MainDashboard.html';
    })
    .catch((error) => {
      // Handle errors
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error('Login error:', errorMessage);

      // Display error to the user (you can update your UI accordingly)
    });
});
