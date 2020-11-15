const menu = document.querySelector("#menu");
menu.addEventListener('click', function () {
    const menu1 = document.querySelector(".nav-bar>ul");
    const home = document.querySelector("#home");
    if (menu.dataset.menu == "true") {
        menu1.style.display = "block";
        menu.innerHTML = "X";
        menu.setAttribute("data-menu", "false");
        home.style.marginTop = "220px ";

    } else if (menu.dataset.menu == "false") {
        menu.innerHTML = "=";
        menu1.style.display = "";
        menu.setAttribute("data-menu", "true");
        home.style.margin = "";
    }
})