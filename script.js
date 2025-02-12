// JavaScript to handle the button click and display a message
document.getElementById('clickMe').addEventListener('click', function() {
    // Get the response div
    const responseDiv = document.getElementById('response');
    responseDiv.innerHTML = "Button clicked! JavaScript is working!";
});
