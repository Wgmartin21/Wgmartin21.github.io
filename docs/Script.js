function increment() { 
    document.getElementById('numberImput').stepUp();
    }

  function decrement() {
    document.getElementById('numberImput').stepDown();
    }



// Open Shitshow
function openModal(){
    document.getElementById("modal").style.display = "block";

}

//Close Shitshow
function closeModal(){
    document.getElementById("modal").style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

// Next/Prev Control
function plusSlides(n) {
    showSlides(slideIndex +=n);
}

// Thumbnail Image Control
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("img-slide");
    var dots = document.getElementsByClassName("demo");
    if (n > slides.length) {slideIndex = 1};
    if (n < 1) {slideIndex = slides.length};
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active","");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
    captionText.innerHTML = dots[slideIndex-1].alt;
}

function opencartContents(){
    document.getElementById("cartContents").style.display = "block";
}
function closecartContents(){
    document.getElementById("cartContents").style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

// Next/Prev Control
function plusSlides(n) {
    showSlides(slideIndex +=n);
}

// Thumbnail Image Control
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("product-slide");
    if (n > slides.length) {slideIndex = 1};
    if (n < 1) {slideIndex = slides.length};
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active","");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
    captionText.innerHTML = dots[slideIndex-1].alt;
}