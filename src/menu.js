import { createSectionItem } from "./home.js";

function menu() {
    const contentDiv = document.getElementById('content');
    // Clear all contents first.
    contentDiv.innerHTML = "";
    
    // Build div content title
    const menuTitle = document.createElement('div');
    menuTitle.classList.add('home-title');
    menuTitle.textContent = 'Menu';

    contentDiv.appendChild(menuTitle);

    // Build sub title. Beverages.
    const beverageSubTitle = document.createElement('div');
    beverageSubTitle.classList.add('home-sub-title');
    beverageSubTitle.textContent = 'Beverages';

    contentDiv.appendChild(beverageSubTitle);

    // Build sections for Beverages.
    const beverage1Div = createSectionItem(
        "Honey Tea",
        "A warm, sweet tea made with the highest quality honey and a bit of lemon to start your day off right!",
        "$2"
    );
    contentDiv.appendChild(beverage1Div);

    const beverage2Div = createSectionItem(
        "Beary Tea",
        "A comforting, almost filling, tea that is infused with the flavors of several kinds of berries. Best served cold, but can be served hot on request.",
        "$3"    
    );
    contentDiv.appendChild(beverage2Div);

    const beverage3Div = createSectionItem(
        "Toast and Jam",
        "A slice of toast, your choice of bread, and our homemade blackberry or raspberry jam.",
        "$1"    
    );
    contentDiv.appendChild(beverage3Div);

    const beverage4Div = createSectionItem(
        "Fresh Fruit",
        "A small bowl of fresh fruit, whatever we find at the market for the day.",
        "$3"    
    );
    contentDiv.appendChild(beverage4Div);
    
    // Build sub title. Main Dish.
    const mainDishSubTitle = document.createElement('div');
    mainDishSubTitle.classList.add('home-sub-title');
    mainDishSubTitle.textContent = 'Main Dishes';

    contentDiv.appendChild(mainDishSubTitle);

    // Buld Main Dishes menu items.
    const mainDish1Div = createSectionItem(
        "Pancakes",
        "A stack of homemade buttermilk pancakes, served with our locally sourced maple syrup.",
        "$4"
    );
    contentDiv.appendChild(mainDish1Div);

    const mainDish2Div = createSectionItem(
        "French Toast",
        "Two slices of the best french toast you will ever eat, served with our locally sourced maple syrup.",
        "$5"
    );
    contentDiv.appendChild(mainDish2Div);

    const mainDish3Div = createSectionItem(
        "Beary Veggie Sandwich",
        "Do you like vegetables? Then this is the sandwich for you! Stuffed full of a variety of fresh produce, it will fill you up.",
        "$8"
    );
    contentDiv.appendChild(mainDish3Div);

    const mainDish4Div = createSectionItem(
        "BLT",
        "Interested in the Beary Veggie Sandwich but also love bacon? Say no more.",
        "$6"
    );
    contentDiv.appendChild(mainDish4Div);

    const mainDish5Div = createSectionItem(
        "Bagel and Lox",
        "Our house specialty, you can't go wrong with a hearty bagel topped with sustainably harvested salmon.",
        "$8"
    );
    contentDiv.appendChild(mainDish5Div);

    const mainDish6Div = createSectionItem(
        "Honeycomb",
        "Are you a bear like us? Then you will love our honeycomb. And, yes humans, it is just a piece of honeycomb, not the popular breakfast cereal.",
        "$6"
    );
    contentDiv.appendChild(mainDish6Div);

    const mainDish7Div = createSectionItem(
        "Beary Bowl",
        "Get a big ole bowl of our berries! Side of honey is $1 extra.",
        "$7"
    );
    contentDiv.appendChild(mainDish7Div);

    const mainDish8Div = createSectionItem(
        "The Beary Best Porridge",
        "Made by Baby Bear himself, this porridge is guaranteed to be just right, or your money back.",
        "$5"
    );
    contentDiv.appendChild(mainDish8Div);
}

export { menu };