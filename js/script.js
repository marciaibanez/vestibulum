const portfolioButton = document.getElementById("portfolio");
const portfolioMenu = document.getElementById("portfolioMenu");
const dropdownMenuArrow = document.getElementById("dropdownMenuArrow");
const burgerMenu = document.getElementById("burgerMenu");
const nav = document.getElementById("nav");
const allButHeader = document.querySelectorAll("body > *:not(header)");

const slider = new Glide('.glide', {
    type: 'carousel',
    perView: 1,
    focusAt: 'center',
    gap: 0
});

slider.mount()

const slider2 = new Glide('.glide-img', {
    type: 'carousel',
    perView: 6,
    focusAt: 'center',
    breakpoints: {
        1000: {
            perView: 5
        },
        800: {
            perView: 4
        },
        600: {
            perView: 3
        },
        400: {
            perView: 2
        }

    }
});

slider2.mount()

let isBurgerMenuOpened = false;

if (window.matchMedia("(min-width: 40em)").matches) {
    nav.style.display = 'flex';
    isBurgerMenuOpened = true;
} else {
    nav.style.display = 'none';
    isBurgerMenuOpened = false;
}


burgerMenu.addEventListener("click", () => {
    if (isBurgerMenuOpened) {
        nav.style.display = 'none';
        isBurgerMenuOpened = false;
    } else {
        nav.style.display = 'block';
        isBurgerMenuOpened = true;
    }
});

let isMenuOpened = false;
portfolioButton.addEventListener("click", () => {
    if (isMenuOpened) {
        portfolioMenu.style.display = 'none';
        dropdownMenuArrow.style.display = 'none';
        isMenuOpened = false;
    } else {
        portfolioMenu.style.display = 'block';
        dropdownMenuArrow.style.display = 'block';
        isMenuOpened = true;
    }
});

allButHeader.forEach((el, i) => {
    el.addEventListener("click", () => {
        if (window.matchMedia("(max-width: 39.9375em)").matches) {
            portfolioMenu.style.display = 'none';
            dropdownMenuArrow.style.display = 'none';
            isMenuOpened = false;
            nav.style.display = 'none';
            isBurgerMenuOpened = false;
        }
    });
});

window.addEventListener('resize', function (event) {
    if (window.matchMedia("(min-width: 40em)").matches) {
        nav.style.display = 'flex';
        isBurgerMenuOpened = true;
    } else {
        nav.style.display = 'none';
        isBurgerMenuOpened = false;
    }
});