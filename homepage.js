// DECLARATION OF VARIABLES
const toggleBtn = document.querySelector(".toggle");
const closeBtn = document.querySelector(".close-button");
const asideMenu = document.querySelector(".aside-menu");
const overlay = document.querySelector(".overlay");

// TOGGLE
toggleBtn.addEventListener("click", function(){
    asideMenu.classList.add("show-aside");
    overlay.classList.add("show-overlay");
})

// CLOSE BUTTON
closeBtn.addEventListener("click", ()=>{
    asideMenu.classList.remove("show-aside");
    overlay.classList.remove("show-overlay");
})