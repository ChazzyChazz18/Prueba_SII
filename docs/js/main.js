/* Slider Related */
let sliderContainer = document.getElementById("slider-container");
let slider = document.getElementById("slider");

let sliderChildCount = document.getElementById("slider").childElementCount;

let pressed = false;
let startX;
let x;

let canInteract = true;

sliderContainer.addEventListener('touchstart', (e)=> {
    pressed = true;
    startX = e.changedTouches[0].clientX - slider.offsetLeft;
});

window.addEventListener('touchend', (e)=> {
    if(pressed) pressed = false;
    if(!canInteract) canInteract = true;
});

sliderContainer.addEventListener('touchmove', (e)=> {
    if(!pressed) return;

    if(sliderChildCount <= 2) return;

    e.preventDefault();

    canInteract = false;

    var touch = e.changedTouches[0].clientX;
    x = touch;

    slider.style.left = `${x - startX}px`;

    setLimits();
});

function setLimits () {
    let sliderContainerRect = sliderContainer.getBoundingClientRect();

    let elementsTotalWidth = (sliderChildCount * 160) + 16;// Elements width + last element margin right

    if(parseInt(slider.style.left) > 0){
        slider.style.left = `0px`;
    }
    else if( sliderChildCount > 2 &&
         Math.abs(parseInt(slider.style.left)) + sliderContainerRect.right > elementsTotalWidth){
        slider.style.left = `-${elementsTotalWidth - sliderContainerRect.right}px`;
    }
}

/* Slider Cards Related */
let cardList = document.getElementsByClassName("card");

for (let i = 0; i < cardList.length; i++) {
    cardList[i].addEventListener('touchend', (e)=> {
        /*if(canInteract){
            console.log("Hello!");
        }*/
    });
}

/* Ripple Effect Related */
let rippleElements = document.getElementsByClassName("ripple-effect");

for (let i = 0; i < rippleElements.length; i++) {
    rippleElements[i].addEventListener('touchstart', (e)=> {
        createRipple(i, e);
    });
}

function createRipple(index, event) {
    const button = event.currentTarget;

    const circle = document.createElement("span");

    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter / 2;

    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${event.changedTouches[0].clientX - radius}px`;
    circle.style.top = `${event.changedTouches[0].clientY - button.offsetTop - diameter}px`;
    circle.classList.add("ripple");

    if(rippleElements[index].parentElement.getAttribute('bgcolor') == "white"){
        circle.style.backgroundColor = "rgb(240, 240, 240)";
    }

    const ripple = button.getElementsByClassName("ripple")[0];

    if (ripple) { ripple.remove(); }

    button.appendChild(circle);
}

/* Navbar Related */
let navbarBtns = document.getElementsByClassName("custom-nav");
let sectionsContainer = document.getElementById("sections-container");
let header = document.getElementById("header");

let spendScreen = document.getElementById("spend-screen");
let saveScreen = document.getElementById("save-screen");

let currentNavbarBtnIndex = 0;

let animationTime = 500; //0.5s
let canChangeScreen = true;

for (let i = 0; i < navbarBtns.length; i++) {
    navbarBtns[i].addEventListener('touchstart', (e)=> {

        if(!canChangeScreen && i != currentNavbarBtnIndex){ 
            navbarBtns[i].removeAttribute("isactive");
            return;
        }

        if(currentNavbarBtnIndex != i && canChangeScreen){
            if(i == 0 || i == 1){
                window.scrollTo(0, 0);
                canChangeScreen = false;
            }

            if(i == 0){ // Spend screen
                spendScreen.style.display = "grid";
                sectionsContainer.style.transform = "translateX(0)";

                setTimeout(function(){
                    sectionsContainer.style.overflow = "hidden";
                    saveScreen.style.display = "none";
                    canChangeScreen = true;

                    header.setAttribute("buttontext", "Payday in a week");
                    header.setAttribute("bottomleftprimarytext", "$5784.55");
                    header.setAttribute("bottomleftsecondarytext", "Total balance to spend");
                    header.removeAttribute("bottomrighttext");
                },animationTime);

            }else if(i == 1){ // Save screen
                saveScreen.style.display = "grid";
                sectionsContainer.style.transform = "translateX(-100%)";
                sectionsContainer.style.overflow = "initial";

                setTimeout(function(){
                    spendScreen.style.display = "none";
                    canChangeScreen = true;

                    header.removeAttribute("buttontext");
                    header.setAttribute("bottomleftprimarytext", "$700.55");
                    header.setAttribute("bottomleftsecondarytext", "Apartments Savings");
                    header.setAttribute("bottomrighttext", "of 50m");
                },animationTime);    
            }
        }

        navbarBtns[i].setAttribute('isactive', '');

        // Here we make all the others buttons as inactive
        for (let j = 0; j < navbarBtns.length; j++) {
            if(j != i && !navbarBtns[i].hasAttribute("disabled")) navbarBtns[j].removeAttribute('isactive', '');
        }

        currentNavbarBtnIndex = i;
    });
}

/* Last Month Related */
let lastMonthDaysBtns = document.getElementsByClassName("last-month-day");

for (let i = 0; i < lastMonthDaysBtns.length; i++) {
    lastMonthDaysBtns[i].addEventListener('touchstart', (e)=> {

        lastMonthDaysBtns[i].setAttribute('isactive', '');

        // Here we make all the others buttons as inactive
        for (let j = 0; j < lastMonthDaysBtns.length; j++) {
            if(j != i) lastMonthDaysBtns[j].removeAttribute('isactive', '');
        }
    });
}

// Cards list card items
/*let cardsArray = [
    {
        "iconurl":"https://www.jing.fm/clipimg/detail/1-10041_28-collection-of-lion-logo-clipart-cartoon-lion.png",
        "primarytext":"-150.52",
        "secondarytext":"In a 2 days"
    },
    {
        "iconurl":"https://www.jing.fm/clipimg/detail/1-10041_28-collection-of-lion-logo-clipart-cartoon-lion.png",
        "primarytext":"-150.52",
        "secondarytext":"In a 2 days"
    },
    {
        "iconurl":"https://www.jing.fm/clipimg/detail/1-10041_28-collection-of-lion-logo-clipart-cartoon-lion.png",
        "primarytext":"-150.52",
        "secondarytext":"In a 2 days"
    },
    {
        "iconurl":"https://www.jing.fm/clipimg/detail/1-10041_28-collection-of-lion-logo-clipart-cartoon-lion.png",
        "primarytext":"-150.52",
        "secondarytext":"In a 2 days"
    },
    {
        "iconurl":"https://www.jing.fm/clipimg/detail/1-10041_28-collection-of-lion-logo-clipart-cartoon-lion.png",
        "primarytext":"-150.52",
        "secondarytext":"In a 2 days"
    }
];
sendArrayToComponent(cardsArray, "cards-slider", "cardlist");*/

// Spend screen section card items
let companiesArray = [
    {
        "iconurl":"https://www.seoclerk.com/pics/314539-1Cw53i1420912621.jpg",
        "primarytext":"Fenix Enterteiment",
        "secondarytext":"-130.92",
        "subtext":""
    },
    {
        "iconurl":"http://graphicdesignjunction.com/wp-content/uploads/2012/07/business-logo-design-21.jpg",
        "primarytext":"Fox Cafe",
        "secondarytext":"-328.00",
        "subtext":""
    },
    {
        "iconurl":"https://us.123rf.com/450wm/glopphy/glopphy1702/glopphy170200127/72841332-saludable-logo-de-la-vida-salud-spa-vector-s%C3%ADmbolo.jpg?ver=6",
        "primarytext":"Green Health",
        "secondarytext":"-1785.32",
        "subtext":""
    },
    {
        "iconurl":"https://www.seoclerk.com/pics/314539-1Cw53i1420912621.jpg",
        "primarytext":"Fenix Enterteiment",
        "secondarytext":"-130.92",
        "subtext":""
    },
    {
        "iconurl":"http://graphicdesignjunction.com/wp-content/uploads/2012/07/business-logo-design-21.jpg",
        "primarytext":"Fox Cafe",
        "secondarytext":"-328.00",
        "subtext":""
    }
];
sendArrayToComponent(companiesArray, "companies-elements-container", "elementlist");

// Save screen section card items
let percentsArray = [
    {
        "iconurl":"https://iconsplace.com/wp-content/uploads/_icons/800080/256/png/percentage-2-icon-13-256.png",
        "primarytext":"5% of $2500",
        "secondarytext":"+125.00",
        "subtext":"Dec 25"
    },
    {
        "iconurl":"https://iconsplace.com/wp-content/uploads/_icons/800080/256/png/percentage-2-icon-13-256.png",
        "primarytext":"5% of $4500",
        "secondarytext":"+225.00",
        "subtext":"Dec 25"
    },
    {
        "iconurl":"https://iconsplace.com/wp-content/uploads/_icons/800080/256/png/percentage-2-icon-13-256.png",
        "primarytext":"5% of $1500",
        "secondarytext":"+75.32",
        "subtext":"Dec 25"
    },
    {
        "iconurl":"https://iconsplace.com/wp-content/uploads/_icons/800080/256/png/percentage-2-icon-13-256.png",
        "primarytext":"5% of $5500",
        "secondarytext":"+275.92",
        "subtext":"Dec 25"
    }
];
sendArrayToComponent(percentsArray, "percent-elements-container", "elementlist");

function sendArrayToComponent (array, id, atribute) {
    let arrayStr = JSON.stringify(array);
    document.getElementById(id).setAttribute(atribute, arrayStr);
}

function sectionCardItemListParser (string) {
    let array = JSON.parse(string);

    document.getElementById("percent-elements-container").setAttribute("elementlistsize", array.length);

    let componentsList = "";
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        componentsList = componentsList + "<list-element-component iconURL='" + element.iconurl +"' primaryText='" + element.primarytext + "' secondaryText='"+ element.secondarytext +"' subtext='"+ element.subtext +"'></list-element-component>";
    }
    return componentsList;
}

/*function cardSliderItemListParser (string) {
    let array = JSON.parse(string);

    document.getElementById("cards-slider").setAttribute("cardlistsize", array.length);

    let componentsList = "";
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        componentsList = componentsList + "<card-component iconurl='" + element.iconurl +"' primarytext='"+ element.primarytext +"' secondarytext='"+ element.secondarytext +"'></card-component>";
    }
    return componentsList;
}*/