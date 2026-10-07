// Custom JavaScript
// STEP 15: Call up the carousel using the id, and use the .carousel() method create the options object
const carousel = new bootstrap.Carousel("#carouselCars", {
    // ride: carousel,
    interval: 1000,
    pause: false,
    wrap: false
})
// STEP 16: Change the interval to 5 seconds (set in milliseconds)
// STEP 17: Try an event handler to zoom up the .carousel-caption after the slide completes sliding - by adding a class when the slide has finished animating, and removing it when it begins
