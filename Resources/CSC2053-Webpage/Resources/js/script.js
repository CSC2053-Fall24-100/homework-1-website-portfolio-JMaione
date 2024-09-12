const schedule = document.getElementById('schedule-container');

const button = document.getElementById('toggle-schedule');

button.addEventListener('click', function()
    {if (button.textContent == 'Hide Schedule') 
        {schedule.style.display = 'none'; button.textContent = 'Show Schedule';}
    else
        {schedule.style.display = 'block'; button.textContent = 'Hide Schedule';}
    }); 


const addNameButton = document.getElementById('toggle-title');
const heading = document.querySelector('#title h1');

addNameButton.addEventListener('click', function()
{
    const name = prompt("Please enter your name:");
    if (name) {
    heading.textContent = 'Welcome, ' + name + '!'; 
    }
});



