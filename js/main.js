/* Slider Related */
let sliderContainer = document.getElementById("slider-container");
let slider = document.getElementById("slider");

let sliderChildCount = document.getElementById("slider").childElementCount;

let pressed = false;
let startX;
let x;

sliderContainer.addEventListener('touchstart', (e)=> {
    pressed = true;
    startX = e.changedTouches[0].clientX - slider.offsetLeft;
});

window.addEventListener('touchend', (e)=> {
    pressed = false;
});

sliderContainer.addEventListener('touchmove', (e)=> {
    if(!pressed) return;

    if(sliderChildCount <= 2) return;

    e.preventDefault();

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

/* Ripple Effect Related */
let rippleElements = document.getElementsByClassName("ripple-effect");

for (let i = 0; i < rippleElements.length; i++) {
    rippleElements[i].addEventListener('touchstart', (e)=> {
        console.log("Hello!");
        //createRipple(e);
    });
}

function createRipple(event) {
    const button = event.currentTarget;

    const circle = document.createElement("span");

    const diameter = Math.max(100, 150);
    const radius = diameter / 2;

    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${event.changedTouches[0].clientX - button.offsetLeft - radius}px`;
    circle.style.top = `${event.changedTouches[0].clientY - button.offsetTop - radius}px`;
    circle.classList.add("ripple");

    const ripple = button.getElementsByClassName("ripple")[0];

    if (ripple) {
        ripple.remove();
    }

    button.appendChild(circle);
}

/* Navbar Related */
let navbarBtns = document.getElementsByClassName("custom-nav");

for (let i = 0; i < navbarBtns.length; i++) {
    navbarBtns[i].addEventListener('touchstart', (e)=> {

        navbarBtns[i].setAttribute('isactive', '');

        // Here we make all the others buttons as inactive
        for (let j = 0; j < navbarBtns.length; j++) {
            if(j != i) navbarBtns[j].removeAttribute('isactive', '');
        }
    });
}