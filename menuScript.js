let menuIcon = document.getElementById("menu-icon");
let navLinks = document.querySelector(".nav-links");
let navBar = document.querySelector("nav");

menuIcon.addEventListener("click", ()=>{
    navLinks.classList.toggle("show-menu");
})

document.addEventListener("mousedown", (e)=>{
    if(navBar && !navBar.contains(e.target)){

        if(navLinks.classList.contains("show-menu")){
            navLinks.classList.remove("show-menu");
        }
    }
})

window.addEventListener("resize", ()=>{
    if(window.innerWidth>=800){
        if(navLinks.classList.contains("show-menu")){
            navLinks.classList.remove("show-menu");
        }
    }
})