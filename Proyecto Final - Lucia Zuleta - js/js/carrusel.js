document.addEventListener('DOMContentLoaded', () => {

const elementosCarousel = document.querySelectorAll('.carousel');
M.Carousel.init(elementosCarousel, {

    duration: 150,
    dist: -70,
    shift: 5,
    padding: 5,
    numVisible: 8,
    indicators: true
});

});