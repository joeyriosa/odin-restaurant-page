import './style.css';

import { home } from './home.js';
import { menu } from './menu.js';
import { about } from './about.js';

document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('nav button');

    buttons[0].classList.add('active');

    // Event listener function
    function handleButtonClick(event) {
        // Remove 'active' class from all buttons
        buttons.forEach(btn => btn.classList.remove('active'));

        // Add 'active' class to the clicked button
        event.target.classList.toggle('active');

        // Check the id of the clicked button and call the corresponding function
        switch (event.target.id) {
            case 'home-button':
                home();
                break;
            case 'menu-button':
                menu();
                break;
            case 'about-button':
                about();
                break;
            default:
                console.log('Unknown button clicked');
        }
    }

    // Add event listener to all buttons
    buttons.forEach(button => {
        button.addEventListener('click', handleButtonClick);
    });
});

home();

