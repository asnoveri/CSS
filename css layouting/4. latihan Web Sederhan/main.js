const btn = document.querySelector("#btn");
btn.addEventListener("click", function () {
    if (btn.dataset.ubh == 'true') {
        const cont = document.querySelector(".container");
        cont.setAttribute("class", "backgoundHtm");
        const heder = document.querySelector(".header");
        heder.setAttribute("class", "headerHTM");
        const jdulAr = document.querySelector(".jdulAr");
        jdulAr.setAttribute("class", "jdulArhtml");
        const isi = document.querySelector(".isi");
        isi.setAttribute("class", "isiHtm");
        btn.setAttribute("data-ubh", "flase");
    } else {
        const cont = document.querySelector(".backgoundHtm");
        cont.setAttribute("class", "container");
        const heder = document.querySelector(".headerHTM");
        heder.setAttribute("class", "header");
        const jdulAr = document.querySelector(".jdulArhtml");
        jdulAr.setAttribute("class", " jdulAr");
        const isi = document.querySelector(".isiHtm");
        isi.setAttribute("class", "isi");
        btn.setAttribute("data-ubh", "true");
    }
})


