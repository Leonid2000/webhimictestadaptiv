let slides = 0
let num = 1
let slid = 0
function nazad() {
    let back = document.querySelectorAll(".comp")
    slides--
    num--
    if (slides < 0) {
        slides = 3
        num = 4
    }

    for (let i = 0; i < back.length; i++) {

        if (i >= slides && i < slides + 4) {
            back[i].style.display = "inline"
        } else {
            back[i].style.display = "none"
        }
    }
}

function vpered() {
    let back = document.querySelectorAll(".comp")
    num++
    slides++
    if (slides > 3) {
        slides = 0
        num = 1
    }

    for (let i = 0; i < back.length; i++) {

        if (i >= slides && i < slides + 4) {
            back[i].style.display = "inline"
        } else {
            back[i].style.display = "none"
        }
    }
}
function openphoto(a) {
    let photobox = document.querySelector(".bigphotobox")
    let photo = document.querySelector(".bigimg")
    photobox.style.display = "flex"
    if (a == 0) {
        photo.src = "cb1.jpg"
    }
    if (a == 1) {
        photo.src = "cb2.jpg"
    }
    if (a == 2) {
        photo.src = "cb3.png"
    }
    if (a == 3) {
        photo.src = "cb4.png"
    }
    if (a == 4) {
        photo.src = "cb5.jpg"
    }
    if (a == 5) {
        photo.src = "cb6.jpg"
    }
    if (a == 6) {
        photo.src = "cb7.png"
    }
}
function closephoto() {
    let photobox = document.querySelector(".bigphotobox")
    photobox.style.display = "none"
}







document.addEventListener("DOMContentLoaded", () => {
    let slider = document.querySelector(".slider");
    if (!slider) return;

    let currentStep = 0;
    let autoTimer = null;

    function autoScroll() {
        let items = slider.querySelectorAll(".slide-item");
        let maxSteps = items.length - 5; 

        currentStep--;

        if (currentStep < 0) {
            currentStep = maxSteps;
        }
        
        slider.scrollLeft = currentStep * items[0].offsetWidth;
    }

    const start = () => autoTimer = setInterval(autoScroll, 2500);
    const stop = () => clearInterval(autoTimer);

    slider.addEventListener("mouseenter", stop);
    slider.addEventListener("mouseleave", start);
    slider.addEventListener("touchstart", stop);
    slider.addEventListener("touchend", start);

    slider.addEventListener("wheel", (e) => {
        e.preventDefault();
        slider.scrollBy({
            left: -e.deltaY,
            behavior: "auto"
        });
    }, { passive: false });

    start();
});