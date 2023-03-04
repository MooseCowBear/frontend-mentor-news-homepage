const menuHamburger = document.querySelector(".menu");
const modal = document.querySelector(".menu-modal");

menuHamburger.addEventListener("click", () => {
    modal.style.display = "block";
});

const closeMenu = document.querySelector(".close");

closeMenu.addEventListener("click", () => {
    modal.style.display = "none";
});

window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
}

//add close and go to part of page when click on menu links
const menuLinks = document.querySelectorAll(".menu-modal-body a");
for (let i = 0; i < menuLinks.length; i++) {
    menuLinks[i].addEventListener("click", () => {
        modal.style.display = "none";
    })
}