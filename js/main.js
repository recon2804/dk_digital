//Hamburger menu
const menuButton = document.querySelector(".header__menu-button");
const navigation = document.querySelector(".header__nav");
const navigationLinks = document.querySelectorAll(".header__nav-link")

menuButton.addEventListener("click", () => {
    const isOpen = navigation.classList.toggle("is-open")

    menuButton.setAttribute("aria-expanded", isOpen ? "Zavřít navigace" : "Otevřít navigaci");
})

//zavření hamburger menu po kliknutí
navigationLinks.forEach((oneLink) => {
    oneLink.addEventListener("click", () => {
        navigation.classList.remove("is-open");
        menuButton.setAttribute("aria-expanded", false)
        menuButton.setAttribute("aria-label", "Otevřít navigaci");
})
});

//Zachycení formuláře odeslat
const contactForm = document.querySelector(".contact-form");
const buttonInput = document.querySelector(".contact-form__button");

contactForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    const formData = new FormData(contactForm);

    buttonInput.textContent = "Odesílám...";
    buttonInput.disabled = true;

    try {
        await new Promise((resolve) => {
            setTimeout(resolve, 2000);
        });

        console.log("Poptávka byla úspěšně odeslána.");

    } catch (error) {
        console.error("Při odesílání nastala chyba.", error);

    } finally {
        buttonInput.disabled = false;
        buttonInput.textContent = "Odeslat poptávku";
    }
});