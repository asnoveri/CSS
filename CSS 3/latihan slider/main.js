//get size
const gbr = document.querySelector(".gbr ");
const allgbr = document.querySelectorAll(".gbr img");

// tombol
const next = document.querySelector(".kanan");
const back = document.querySelector('.kiri');

//counter
let counter = 1;
const size = allgbr[0].clientWidth;

gbr.style.transform = `translateX(${-size * counter}px)`;

// btn listener
next.addEventListener('click', function () {
    gbr.style.transition = `transform 1s ease-in`;
    counter++;
    gbr.style.transform = `translateX(${-size * counter}px)`;
    // console.log(counter);
});

back.addEventListener('click', function () {
    gbr.style.transition = `transform 1s ease-in`;
    counter--;
    gbr.style.transform = `translateX(${-size * counter}px)`;
});

gbr.addEventListener('transitionend', function () {
    // console.log("yahud"); 
    console.log(counter);
    // console.log(allgbr.length);
    if (allgbr[counter].className == "start") {
        gbr.style.transition = "none";
        counter = allgbr.length - counter;
        gbr.style.transform = `translateX(${-size * counter}px)`;
        console.log(counter);
    }
    if (allgbr[counter].className == "end") {
        gbr.style.transition = "none";
        counter = allgbr.length - 2;
        gbr.style.transform = `translateX(${-size * counter}px)`;
        console.log(counter);
    }
})


const tes = document.querySelector("#tes");
let no = 0;
tes.addEventListener("click", function () {
    no++;
    console.log(no);
})