document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    if (username === 'admin' && password === 'password123') {
        alert('Login Successful!');
        // Here you can redirect to another page or perform further actions
    } else {
        alert('Invalid Username or Password');
    }
});