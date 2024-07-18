import { createSectionItem } from './home.js';

function about() {
    const contentDiv = document.getElementById('content');
    // Clear all contents first.
    contentDiv.innerHTML = "";

    // Build div content title
    const menuTitle = document.createElement('div');
    menuTitle.classList.add('home-title');
    menuTitle.textContent = 'Contact Us';

    contentDiv.appendChild(menuTitle);

    // Build section items.
    const mamaBearDiv = createSectionItem (
        "Mama Bear",
        "Chef<br>" +
        "555-555-5554<br>" +
        "totallyRealEmail@notFake.com",
        ""
    );
    contentDiv.appendChild(mamaBearDiv);

    const papaBearDiv = createSectionItem (
        "Papa Bear",
        "Manager<br>" +
        "555-555-5555<br>" +
        "perfectlyRealEmail@notFake.com",
        ""
    );
    contentDiv.appendChild(papaBearDiv);

    const babyBearDiv = createSectionItem (
        "Baby Bear",
        "Waiter<br>" +
        "555-555-5556<br>" +
        "totallyRealEmail@notFake.com",
        ""
    );

    contentDiv.appendChild(babyBearDiv);
}

export { about };