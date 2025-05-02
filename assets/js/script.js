const btnMenu = document.querySelector(".menu-icon")
const navBar = document.querySelector(".navbar")

btnMenu.addEventListener("click", (e) => {
    navBar.classList.toggle("bg-displayed")
    if (navBar.classList[1] === "bg-displayed") {
        e.target.src = "assets/images/icon-menu-close.svg"
        navBar.ariaHidden = "false"
    } else {
        e.target.src = "assets/images/icon-menu.svg"
        navBar.ariaHidden = "true"
    }
})