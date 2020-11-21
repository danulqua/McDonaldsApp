const leftArrow = document.getElementById('carousel-prev');
const rightArrow = document.getElementById('carousel-next');
const carouselItems = document.querySelectorAll('.carousel-item');
const carouselDots = document.querySelectorAll('.fa-circle');
let currentItem = 0;

rightArrow.onclick = () => {
    carouselItems[currentItem].classList.add('hide');
    carouselItems[currentItem].classList.remove('show');
    carouselDots[currentItem++].classList.toggle('selected');
    if (currentItem > 2) {
        currentItem = 0;   
    }
    carouselItems[currentItem].classList.add('show');
    carouselItems[currentItem].classList.remove('hide');
    carouselDots[currentItem].classList.toggle('selected');
}

leftArrow.onclick = () => {
    carouselItems[currentItem].classList.add('hide');
    carouselItems[currentItem].classList.remove('show');
    carouselDots[currentItem--].classList.toggle('selected');
    if (currentItem < 0) {
        currentItem = 2;   
    }
    carouselItems[currentItem].classList.add('show');
    carouselItems[currentItem].classList.remove('hide');
    carouselDots[currentItem].classList.toggle('selected');
}