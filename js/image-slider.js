let sliderImages = document.querySelectorAll(".slide"),
    arrowLeft = document.querySelector("#arrow-left"),
    arrowRight = document.querySelector("#arrow-right"),
    current = 0;

//clear all slides
function reset() {
    for (let i = 0; i < sliderImages.length; i++) {
        sliderImages[i].style.display = "none";
        // sliderImages[i].classList.add("hide");
    }
}

//initialize Slider
function startSlide() {
    reset();
    sliderImages[0].style.display = "block";
    // sliderImages[0].classList.add("show");
}

//show previous
function slideLeft() {
    reset();
    sliderImages[current - 1].style.display = "block";
    // sliderImages[current - 1].classList.add("show");
    current--; //decrease current by 1
}

//show next
function slideRight() {
    reset();
    sliderImages[current + 1].style.display = "block";
    // sliderImages[current + 1].classList.add("show");
    current++; //increase current by 1
}

//left arrow click
arrowLeft.addEventListener("click", function () {
    if (current === 0) {
        current = sliderImages.length;
    }
    slideLeft();
});

//right arrow click
arrowRight.addEventListener("click", function () {
    if (current === sliderImages.length - 1) {
        current = -1;
    }
    slideRight();
});

startSlide();