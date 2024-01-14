// auth.js
function handleLogin(email, password) {
  const auth = firebase.auth();
  return auth.signInWithEmailAndPassword(email, password);
}
