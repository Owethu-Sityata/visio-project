/**
 * Image Slider Functionality
 * Handles the automatic and manual slide transitions
 */

// Initialize slide position tracking
let currentIndex = 0;

// Get DOM elements
const slides = document.querySelectorAll('.image-reel li');
const slideTrack = document.querySelector('.image-reel');
const nextButton = document.getElementById('next-slide-btn');

/**
 * Displays the slide at the specified index
 * - Updates the slide position
 * - Handles active class assignment
 *
 * @param {number} index - The index of the slide to show
 */
function showSlide(index) {
  // Move slide track to show the current slide
  slideTrack.style.transform = `translateX(-${index * 100}%)`;

  // Remove active class from all slides
  slides.forEach(slide => slide.classList.remove('active-slide'));

  // Add active class to current slide
  slides[index].classList.add('active-slide');

  // Note: In a complete implementation, we would also update the indicator dots
  // to match the current slide
}

// Set initial slide on page load
showSlide(currentIndex);

// Handle next button click
nextButton.addEventListener('click', () => {
  // Increment index with wraparound to beginning when reaching the end
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide(currentIndex);
});
