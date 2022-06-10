const toggleTheme = document.querySelector(".toggleTheme");
const activeTheme = document.querySelector(".activeTheme");
toggleTheme.addEventListener("click",(e)=>{
    activeTheme.classList.toggle("lightT");
})