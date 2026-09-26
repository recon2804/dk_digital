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
const formStatus = document.querySelector(".contact-form__status");

contactForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    const formData = new FormData(contactForm);

    buttonInput.textContent = "Odesílám...";
    buttonInput.disabled = true;
    formStatus.textContent = "";

    formStatus.classList.remove("contact-form__status--success", "contact-form__status--error")

    try {
        const response = await fetch("https://formspree.io/maenoaod", {
            method: "POST",
            body: formData,
            headers: {
                Accept: "application/json"
            }
        });

        if (!response.ok) {
            throw new Error("Odeslání formuláře se nezdařilo.");
        }

        formStatus.textContent ="Děkuji, poptávka byla úspěšně odeslána.";
        formStatus.classList.add("contact-form__status--success")
        contactForm.reset();

    } catch (error) {
        formStatus.textContent ="Poptávku se nepodařilo odeslat. Zkuste to prosím znovu.";
        formStatus.classList.add("contact-form__status--error")

    } finally {
        buttonInput.disabled = false;
        buttonInput.textContent = "Odeslat poptávku";

    }
});