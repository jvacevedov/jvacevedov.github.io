const projects = [
    {
        name: "Contador de click",
        image: "images/contador/condicionales.jpg",
        techs: ["Bootstrap", "JavaScript", "HTML", "CSS"],
        repo: "https://github.com/jvacevedov/contadorClick",
        deploy: "https://contador-click-ten.vercel.app/"
    },

    {
        name: "To do Task",
        image: "images/todotask/inicio.jpg",
        techs: ["JavaScript", "CSS", "HTML"],
        repo: "https://github.com/jvacevedov/TallerToDo",
        deploy: "https://to-do-seven-blush-99.vercel.app"
    },

    {
        name: "Poke Api",
        image: "images/endesarrollo/desarrollo.jpg",
        techs: ["Fetch API", "JavaScript", "CSS"],
        repo: "https://github.com/jvacevedov/proyectoPokemon",
        deploy: "https://proyecto-pokemon-flax.vercel.app"
    },

    {
        name: "PetShop",
        image: "images/endesarrollo/desarrollo.jpg",
        techs: ["React", "CSS", "Bootstrap"],
        repo: "https://github.com/jvacevedov/Lab-carrito",
        deploy: "https://lab-carrito.vercel.app"
    }
];

const buttons = document.querySelectorAll(".projectbutton");
const projectImg = document.querySelector(".projectImg");
const projectTechs = document.querySelector(".projectTechs");
const repoBtn = document.querySelector(".btn-repo");
const deployBtn = document.querySelector(".btn-deploy");

function loadProject(index) {

    // Cambiar imagen
    projectImg.src = projects[index].image;

    // Limpiar tecnologías anteriores
    projectTechs.innerHTML = "";

    // Agregar nuevas tecnologías
    projects[index].techs.forEach(tech => {

        const li = document.createElement("li");
        li.textContent = tech;

        projectTechs.appendChild(li);
    });
     repoBtn.href = projects[index].repo;
    deployBtn.href = projects[index].deploy;
}

// Eventos click botones
buttons.forEach((button, index) => {

    button.addEventListener("click", () => {

        loadProject(index);
    });
});

// Mostrar el primero al abrir la página
loadProject(0);
