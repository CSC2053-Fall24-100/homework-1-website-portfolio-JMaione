const addNameButton = document.getElementById('toggle-title');
const heading = document.querySelector('#title h1');

addNameButton.addEventListener('click', function()
{
    const name = prompt("Please enter your name:");
    heading.textContent = 'Welcome, ' + name + '!'; 
});