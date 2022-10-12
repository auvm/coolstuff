const mobile_menu_icon = document.querySelector(".mobile-menu-icon");
const mobile_menu = document.querySelector(".mobile-menu");


mobile_menu_icon.addEventListener("click", toggleMobileMenu);

function toggleMobileMenu(){
    mobile_menu.classList.toggle("inactive");
}
