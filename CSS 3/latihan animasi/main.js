const btn = document.querySelector(".btn");
btn.addEventListener('click', function () {
    const kotak = document.querySelector(".kotak");
    kotak.classList.toggle("animstart");
    if (btn.innerHTML == "Play") {
        btn.innerHTML = "Paused";
    } else {
        btn.innerHTML = "Play"
    }
});