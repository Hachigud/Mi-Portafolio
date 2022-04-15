const header = document.querySelector("header");
const links = document.querySelectorAll(".nav-link");
const toggle_btn = document.querySelector(".toggle-btn");


function NavBar(){
    header.classList.toggle("scrolled",window.pageYOffset >0);
}
NavBar();
window.addEventListener("scroll",NavBar);
/* animacion de aparicion con scroll reveal */
window.addEventListener("scroll",()=>{
    activeLink();
})

function activeLink(){
    let secciones = document.querySelectorAll("section[id]");
    let pasada = Array.from(secciones).map((sct, i) =>{
        return {y: sct.getBoundingClientRect().top - header.offsetHeight,
        id: i}; 
    }).filter(sct=> sct.y <= 0)
    let actualId = pasada.at(-1).id;
   
    links.forEach(l => l.classList.remove("active"));
    links[actualId].classList.add("active");
}

activeLink();



/* modo oscuro */ 

let primerTema = localStorage.getItem("dark");
cambiarTema(+primerTema);
function cambiarTema(isDark){
    if(isDark){
        document.body.classList.add("dark");
        toggle_btn.classList.replace("fa-moon","fa-sun");
        localStorage.setItem("dark",1);
    }
    else{
        document.body.classList.remove("dark");
        toggle_btn.classList.replace("fa-sun","fa-moon");
        localStorage.setItem("dark",0);
    }
}

toggle_btn.addEventListener("click",()=>{
    cambiarTema(!document.body.classList.contains("dark"));
})
