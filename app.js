/* Nav Bar */
const navbarToggle = document.querySelector('.navbar-toggle');
const navbarMenu = document.querySelector('.navbar-menu');
navbarToggle.addEventListener('click', ()=>{
    navbarToggle.classList.toggle('active');
    navbarMenu.classList.toggle('active');
});

/* función de escribir y borrar texto */
const words = [
  "Full Stack Developer",
  "SpringBoot",
  "MySQL",
  "Python",
  "Java",
  "HTML",
  "CSS"
];

const textElement = document.getElementById("texto_escrito");

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {

  const currentWord = words[wordIndex];

  if (isDeleting) {
    textElement.textContent =
      currentWord.substring(0, charIndex--);
  } else {
    textElement.textContent =
      currentWord.substring(0, charIndex++);
  }

  let speed = isDeleting ? 50 : 100;

  if (!isDeleting && charIndex === currentWord.length + 1) {

    speed = 1500;
    isDeleting = true;

  } else if (isDeleting && charIndex === 0) {

    isDeleting = false;
    wordIndex = (wordIndex + 1) % words.length;

    speed = 300;
  }

  setTimeout(typeEffect, speed);
}
typeEffect();


/* formulario de contacto */
const form = document.getElementById("contact-form");
const formMessage = document.getElementById("form-message");

form.addEventListener("submit", async (e) => {

    e.preventDefault();

    const formData = new FormData(form);

    try {

        const response = await fetch(
            "https://formspree.io/f/xojrnykd",
            {
                method: "POST",
                body: formData,
                headers: {
                    Accept: "application/json"
                }
            }
        );

        if(response.ok){

            formMessage.textContent = "Mensaje enviado";
            formMessage.classList.add("success");

            form.reset();

        } else {

            formMessage.textContent = "Algo salió mal.";
            formMessage.classList.add("error");

        }

    } catch(error){

        formMessage.textContent = "Error en la conexión.";
        formMessage.classList.add("error");

    }

});