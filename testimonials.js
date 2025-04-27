// Testimonials Carousel Functionality
document.addEventListener('DOMContentLoaded', () => {
    const carousel = document.querySelector('.testimonial-carousel');
    if (!carousel) return;

    const track = carousel.querySelector('.testimonial-track');
    const slides = Array.from(track.children);
    const nextButton = carousel.querySelector('.testimonial-control.next');
    const prevButton = carousel.querySelector('.testimonial-control.prev');
    const dotsContainer = carousel.querySelector('.testimonial-dots');

    // Set up the slides
    slides.forEach((slide, index) => {
        slide.style.left = `${index * 100}%`;
        
        // Create dots
        const dot = document.createElement('button');
        dot.classList.add('testimonial-dot');
        dot.setAttribute('aria-label', `Go to slide ${index + 1}`);
        dotsContainer.appendChild(dot);
    });

    const dots = Array.from(dotsContainer.children);
    let currentIndex = 0;
    let autoPlayInterval;
    const autoPlayDelay = 5000; // 5 seconds

    // Function to move to a specific slide
    const moveToSlide = (index) => {
        if (index < 0) index = slides.length - 1;
        if (index >= slides.length) index = 0;
        
        track.style.transform = `translateX(-${index * 100}%)`;
        currentIndex = index;

        // Update dots
        dots.forEach((dot, i) => {
            dot.classList.toggle('active', i === currentIndex);
        });
    };

    // Function to start auto-play
    const startAutoPlay = () => {
        autoPlayInterval = setInterval(() => {
            moveToSlide(currentIndex + 1);
        }, autoPlayDelay);
    };

    // Function to stop auto-play
    const stopAutoPlay = () => {
        clearInterval(autoPlayInterval);
    };

    // Event Listeners
    nextButton.addEventListener('click', () => {
        moveToSlide(currentIndex + 1);
        stopAutoPlay();
        startAutoPlay();
    });

    prevButton.addEventListener('click', () => {
        moveToSlide(currentIndex - 1);
        stopAutoPlay();
        startAutoPlay();
    });

    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            moveToSlide(index);
            stopAutoPlay();
            startAutoPlay();
        });
    });

    // Touch support for mobile
    let touchStartX = 0;
    let touchEndX = 0;

    track.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
        stopAutoPlay();
    }, { passive: true });

    track.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        const difference = touchStartX - touchEndX;
        
        if (Math.abs(difference) > 50) { // Minimum swipe distance
            if (difference > 0) {
                moveToSlide(currentIndex + 1);
            } else {
                moveToSlide(currentIndex - 1);
            }
        }
        
        startAutoPlay();
    }, { passive: true });

    // Pause auto-play when hovering over the carousel
    carousel.addEventListener('mouseenter', stopAutoPlay);
    carousel.addEventListener('mouseleave', startAutoPlay);

    // Initialize
    moveToSlide(0);
    startAutoPlay();
}); 