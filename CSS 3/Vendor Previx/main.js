const tbl = document.querySelector("#tbl");
tbl.addEventListener("click", ubahWarna);



function ubahWarna(x) {
    x.preventDefault();
    const getAtt = tbl.getAttribute("data-ubh");
    if (getAtt == "true") {
        tbl.setAttribute("data-ubh", "false");
        const container = document.querySelector(".container");
        container.setAttribute("class", "container-hitam");
        const header = document.querySelector(".header");
        header.setAttribute("class", "header-htm ");
        const artikel = document.querySelector(".artikel");
        artikel.setAttribute("class", "artikel-htm");
    } else {
        tbl.setAttribute("data-ubh", "true");
        const container = document.querySelector(".container-hitam");
        container.setAttribute("class", "container");
        const header = document.querySelector(".header-htm");
        header.setAttribute("class", "header ");
        const artikel = document.querySelector(".artikel-htm");
        artikel.setAttribute("class", "artikel");
    }
}