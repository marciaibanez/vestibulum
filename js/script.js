import Glide from '@glidejs/glide';
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

slider2.mount();

let isBurgerMenuOpened = false;
let isMenuOpened = false;

const openBurgerMenu = () => {
    nav.style.display = 'flex';
    isBurgerMenuOpened = true;
}

const closeBurgerMenu = () => {
    nav.style.display = 'none';
    isBurgerMenuOpened = false;
}

const openPortfolioMenu = () => {
    portfolioMenu.style.display = 'block';
    dropdownMenuArrow.style.display = 'block';
    isMenuOpened = true;
}

const closePortfolioMenu = () => {
    portfolioMenu.style.display = 'none';
    dropdownMenuArrow.style.display = 'none';
    isMenuOpened = false;
}

const isMediumUp = () => {
    return window.matchMedia("(min-width: 40em)").matches;
}

const isSmallOnly = () => {
    return window.matchMedia("(max-width: 39.9375em)").matches;
}

if (isMediumUp()) {
    openBurgerMenu();
} else {
    closeBurgerMenu();
}


burgerMenu.addEventListener("click", () => {
    if (isBurgerMenuOpened) {
        closeBurgerMenu();
    } else {
        openBurgerMenu();
    }
});


portfolioButton.addEventListener("click", () => {
    if (isMenuOpened) {
        closePortfolioMenu();
    } else {
        openPortfolioMenu();
    }
});

allButHeader.forEach((el, i) => {
    el.addEventListener("click", () => {
        if (isSmallOnly()) {
            closePortfolioMenu();
            closeBurgerMenu();
        }
    });
});

window.addEventListener('resize', function (event) {
    if (isMediumUp()) {
        openBurgerMenu();
    } else {
        closeBurgerMenu();
    }
});
