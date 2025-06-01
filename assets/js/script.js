const btnMenu = document.querySelector(".menu-icon")
const navBar = document.querySelector(".navbar")
const blur = document.getElementById('backdrop')

btnMenu.addEventListener("click", (e) => {
    navBar.classList.toggle("bg-displayed")
    if (navBar.classList[1] === "bg-displayed") {
        e.target.src = "assets/images/icon-menu-close.svg"
        e.target.style.position = "fixed"
        navBar.ariaHidden = "false"
        blur.classList.remove('hidden')
    } else {
        e.target.src = "assets/images/icon-menu.svg"
        e.target.style.position = "unset"
        navBar.ariaHidden = "true"
        blur.classList.add('hidden')
    }
})