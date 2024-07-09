import 

document.querySelector('.forgot-password').addEventListener('click', function(event) {
    event.preventDefault();
    // Add logic to reset password here
    console.log('Forgot password link clicked!');
});
    
    
    document.getElementById('index').addEventListener('click', function() {
    window.location.href = 'index.html';
});

document.getElementById('catalog').addEventListener('click', function() {
    window.location.href = 'catalog.html';
});

document.getElementById('contact').addEventListener('click', function() {
    window.location.href = 'contact.html';
});
 
