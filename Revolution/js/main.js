
// Shrink Navigation Menu
const getElement = (selector) => {
    return document.querySelector(selector);
}

window.onscroll = () => { scrollHeader() };

const scrollHeader = () => {
    if (document.documentElement.scrollTop > 10) {
        getElement(".header").classList = "header active";
    } else {
        getElement(".header").classList = "header";
    }

    if (document.documentElement.scrollTop > 700) {
        getElement(".backToTop").classList = "backToTop active";
    } else {
        getElement(".backToTop").classList = "backToTop";
    }
}




// BACK TO TOP
getElement(".backToTop").addEventListener("click", () => {
    $("html, body").animate({ scrollTop: 0 }, 600);
});

// Toggle Header
getElement(".header__navbar").addEventListener("click", () => {
    const headerMenu = getElement(".header__menu");
    if (headerMenu.classList == "header__menu hide") {
        headerMenu.classList = "header__menu show";
    } else {
        headerMenu.classList = "header__menu hide";
    }
    const headerLogo = getElement(".header__logo");
    if (headerLogo.classList == "header__logo hide") {
        headerLogo.classList = "header__logo show";
    } else {
        headerLogo.classList = "header__logo hide";
    }
    const headerNav = getElement(".header__navbar");
    if (headerNav.classList == "header__navbar hide") {
        headerNav.classList = "header__navbar show";
    } else {
        headerNav.classList = "header__navbar hide";
    }
})
