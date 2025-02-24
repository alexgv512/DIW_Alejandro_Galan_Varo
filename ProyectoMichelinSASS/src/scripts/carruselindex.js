document.addEventListener("DOMContentLoaded", () => {
    const carouselContainer = document.querySelector(".carousel-container");
    const indicators = document.querySelectorAll(".indicator");
    const images = document.querySelectorAll(".carousel-container picture");
    
    let currentIndex = 0;

    function updateCarousel(index) {
        const offset = -index * 100;
        carouselContainer.style.transform = `translateX(${offset}%)`;
        indicators.forEach((btn, i) => {
            btn.classList.toggle("active", i === index);
        });
    }

    indicators.forEach((btn, index) => {
        btn.addEventListener("click", () => {
            currentIndex = index;
            updateCarousel(currentIndex);
        });
    });

    updateCarousel(currentIndex);
});