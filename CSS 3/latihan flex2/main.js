const tm = document.querySelector(".toggle-menu");
const menu = document.querySelector(".menu");
tm.addEventListener("click", function (e) {
    e.preventDefault;
    menu.classList.toggle("showmenu");
});

const ambilmn = document.querySelectorAll(".menu > a");
ambilmn.forEach(e => {
    e.addEventListener("click", function () {
        menu.classList.toggle("showmenu");
        console.log(e.innerText);
    });
});