const menuButton = document.querySelector(".header__menu-button");
const navigation = document.querySelector(".header__nav");
const navigationLinks = document.querySelectorAll(".header__nav-link")

menuButton.addEventListener("click", () => {
    const isOpen = navigation.classList.toggle("is-open")

    menuButton.setAttribute("aria-expanded", isOpen ? "Zavřít navigace" : "Otevřít navigaci");
})

navigationLinks.forEach((oneLink) => {
    oneLink.addEventListener("click", () => {
        navigation.classList.remove("is-open");
        menuButton.setAttribute("aria-expanded", false)
        menuButton.setAttribute("aria-label", "Otevřít navigaci");
})
});



