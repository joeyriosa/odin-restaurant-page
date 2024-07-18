import './style.css';

function createSectionItem(title, text, price) {
    const beverageDiv = document.createElement('div');
    beverageDiv.classList.add('home-section');

    if (title !== '') {
        const beverageTitle = document.createElement('div');
        beverageTitle.classList.add('home-section-title');
        beverageTitle.innerHTML = title;
        beverageDiv.appendChild(beverageTitle);
    }

    if (text !== '') {
        const beverageText = document.createElement('div');
        beverageText.classList.add('home-section-text');
        beverageText.innerHTML = text;
        beverageDiv.appendChild(beverageText);
    }

    if (price !== '') {
        const beveragePrice = document.createElement('div');
        beveragePrice.classList.add('home-section-title');
        beveragePrice.innerHTML = price;
        beverageDiv.appendChild(beveragePrice);
    }

    return beverageDiv;
}

function home() {

    // Build div content title
    const contentDiv = document.getElementById('content');
    contentDiv.innerHTML = "";
    const homeTitle = document.createElement('div');
    homeTitle.classList.add('home-title');
    homeTitle.textContent = 'Beary Breakfast Bar';

    contentDiv.appendChild(homeTitle);

    // Build section 1.
    const section1Div = createSectionItem(
        "",
        "Beary's has the best porridge! The atmosphere and customer service make you feel " +
                "like you are sitting in the middle of the woods, eating like a bear! " +
                "This is exactly the kind of place that I like to return to again and again.",
        "- Goldilocks"
    );

    contentDiv.appendChild(section1Div);

    const section2Div = createSectionItem(
        "Hours",
        "Sunday: 8am - 8pm<br>" +
                "Monday: 6am - 6pm <br>" +
                "Tuesday: 6am - 6pm <br>" +
                "Wednesday: 6am - 6pm <br>" +
                "Thursday: 6am - 10pm <br>" +
                "Friday: 6am - 10pm <br>" +
                "Saturday: 8am - 10pm <br>",
        ""
    );
    contentDiv.appendChild(section2Div);

    // Build section 3.
    const section3Div = createSectionItem(
        "Location",
        "123 Forest Drive Forestville, Maine",
        ""
    );
    contentDiv.appendChild(section3Div);
}

export { home };
export { createSectionItem };