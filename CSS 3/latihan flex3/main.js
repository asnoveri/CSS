const toggel = document.querySelector(".toggel");
toggel.addEventListener("click", function (e) {
    e.preventDefault;
    const menu = document.querySelector(".menu");
    menu.classList.toggle("show-navul");
    const prf = document.querySelector("article");
    prf.classList.toggle("ubhart");
});

const gbr = document.querySelector(".gbr");
gbr.addEventListener('click', function (e) {
    if (e.target.className == "btn") {
        e.target.previousElementSibling.classList.toggle("animasipoto");
    }
});


const container = document.querySelector(".container");
const gbrkotak = document.querySelectorAll(".gbr-kotak");



container.addEventListener("click", function (e) {
    if (e.target.parentNode.className == "gbr-kotak") {
        const src = e.target.src;
        const gbrutm = e.target.parentNode.parentNode.firstElementChild.firstElementChild;
        gbrutm.src = src;
        gbrutm.classList.add("fade");
        setTimeout(() => {
            gbrutm.classList.remove("fade");
        }, 500);

        gbrkotak.forEach(function (ev) {
            ev.className = "gbr-kotak";
        });
        e.target.parentNode.classList.add("active");
    }

});