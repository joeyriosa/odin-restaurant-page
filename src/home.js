import './style.css';

function home() {
    // // Build Navigation buttons.
    // const header = document.querySelector('header');
    // const nav = header.querySelector('nav');
    // const buttonNames = ['Home', 'Menu', 'About'];

    // buttonNames.forEach(name => {
    //     const button = document.createElement('button');
    //     button.textContent = name;
    //     button.classList.add('menu-button');
    //     nav.appendChild(button);
    // });

    // Build div content title
    const contentDiv = document.getElementById('content');
    const homeTitle = document.createElement('div');
    homeTitle.classList.add('home-title');
    homeTitle.textContent = 'Beary Breakfast Bar';

    contentDiv.appendChild(homeTitle);

    // Build section 1.
    const section1Div = document.createElement('div');
    section1Div.classList.add('home-section');

    const section1TextDiv = document.createElement('div');
    section1TextDiv.classList.add('home-section-text');
    section1TextDiv.textContent = "Beary's has the best porridge! The atmosphere and customer service make you feel " +
                "like you are sitting in the middle of the woods, eating like a bear! "
                "This is exactly the kind of place that I like to return to again and again.";
    section1Div.appendChild(section1TextDiv);

    const section1TitleDiv = document.createElement('div');
    section1TitleDiv.textContent = '- Goldilocks';
    section1TitleDiv.classList.add('home-section-title');
    section1Div.appendChild(section1TitleDiv);

    contentDiv.appendChild(section1Div);

    // Build section 2.
    const section2Div = document.createElement('div');
    section2Div.classList.add('home-section');

    const section2TitleDiv = document.createElement('div');
    section2TitleDiv.classList.add('home-section-title');
    section2TitleDiv.textContent = 'Hours';
    section2Div.appendChild(section2TitleDiv);

    const section2TextDiv = document.createElement('div');
    section2TextDiv.classList.add('home-section-text');
    let hoursText = "Sunday: 8am - 8pm<br>" +
                "Monday: 6am - 6pm <br>" +
                "Tuesday: 6am - 6pm <br>" +
                "Wednesday: 6am - 6pm <br>" +
                "Thursday: 6am - 10pm <br>" +
                "Friday: 6am - 10pm <br>" +
                "Saturday: 8am - 10pm <br>"

    section2TextDiv.innerHTML = hoursText;
    section2Div.appendChild(section2TextDiv);
    
    contentDiv.appendChild(section2Div);

    // Build section 3.
    const section3Div = document.createElement('div');
    section3Div.classList.add('home-section');

    const section3TitleDiv = document.createElement('div');
    section3TitleDiv.classList.add('home-section-title');
    section3TitleDiv.textContent = 'Location';
    section3Div.appendChild(section3TitleDiv);

    const section3TextDiv = document.createElement('div');
    section3TextDiv.classList.add('home-section-text');
    section3TextDiv.textContent = '123 Forest Drive Forestville, Maine';
    section3Div.appendChild(section3TextDiv);

    contentDiv.appendChild(section3Div);
}

export { home };