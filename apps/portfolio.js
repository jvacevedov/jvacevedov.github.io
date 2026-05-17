const projects = [
    {
        name: "Contador interactivo de click",
        image: "images/contador/contador.png",
        descripcion:"Aplicación interactiva para practicar lógica y manipulación del DOM.",
        techs: ["Bootstrap", "JavaScript", "HTML5", "CSS3"],
        repo: "https://github.com/jvacevedov/contadorClick",
        deploy: "https://contador-click-ten.vercel.app/"
    },

    {
        name: "Task Manager",
        image: "images/todotask/inicio.jpg",
        descripcion:"Aplicación de tareas con renderizado dinámico y manejo de eventos.",
        techs: ["JavaScript", "CSS3", "HTML5", "LocalStorage"],
        repo: "https://github.com/jvacevedov/TallerToDo",
        deploy: "https://to-do-seven-blush-99.vercel.app"
    },

    {
        name: "Pokémon API Explorer (En desarrollo)",
        image: "images/endesarrollo/desarrollo.jpg",
        descripcion:"Proyecto en desarrollo para consumir y mostrar datos desde una API REST.",
        techs: ["Fetch API", "JavaScript", "CSS3", "HTML5"],
        repo: "https://github.com/jvacevedov/PokemonAPIExplorer",
        deploy: "https://pokemon-api-explorer.vercel.app/"
    },

    {
        name: "PetShop Ecommerce (Proyecto Full Stack - En desarrollo)",
        image: "images/endesarrollo/desarrollo.jpg",
        descripcion:"Ecommerce en desarrollo con futuro backend en Spring Boot.",
        techs: ["HTML5", "CSS3", "Bootstrap","Java", "SpringBoot","Postgresql"],
        repo: "https://github.com/jvacevedov/Lab-carrito",
        deploy: "https://lab-carrito.vercel.app"
    }
];

const projectsListContainer = document.querySelector('.projectsList');

projects.forEach(project => {
    const li = document.createElement('li');

    li.innerHTML = `
    <div class="projectLi">
        <div class="projectInfo">
        <button class="projectbutton">${project.name}</button>
        <span class="projectDescription">${project.descripcion}</span></br>
        <span class="projectTechsMovil">${project.techs.join(', ')}</span>
        </div>
        <div class="projectLinksMovil">
            <a href=""${project.repo}"" class="botones btn-repoMovil" target="_blank">
            <i class="fa-brands fa-github"></i> Repositorio</a>
            <a href=""${project.deploy}" class="botones btn-deployMovil" target="_blank">
            <i class="fa-solid fa-arrow-up-right-from-square"></i> Demo</a>
        </div>
    </div>
    `;
    projectsListContainer.appendChild(li);
}); 
const buttons = document.querySelectorAll(".projectbutton");
const projectImg = document.querySelector(".projectImg");
const projectTechs = document.querySelector(".projectTechs");
const repoBtn = document.querySelector(".btn-repo");
const deployBtn = document.querySelector(".btn-deploy");
const divBtns= document.querySelector(".projectLinks");



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
     divBtns.style.display = "block";
}

// Eventos click botones
buttons.forEach((button, index) => {

    button.addEventListener("click", () => {

        loadProject(index);
    });
});
