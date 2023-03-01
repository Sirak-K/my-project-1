const sliderWrapper = document.querySelector('.blog-slider-wrapper');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');
const blogPosts = document.querySelectorAll('.blog-post');
const postWidth = blogPosts[0].offsetWidth;
let currentPosition = 0;
let secondPosition = 1;
let thirdPosition = 2;
let fourthPosition = 3;

prevButton.addEventListener('click', () => {
  if (currentPosition > 0) {
    currentPosition -= postWidth;
    sliderWrapper.style.transform = `translateX(-${currentPosition}px)`;
  }
});
  

nextButton.addEventListener('click', () => {

    if (currentPosition < (blogPosts.length - 2) * postWidth - postWidth) {
    currentPosition += postWidth;
    sliderWrapper.style.transform = `translateX(-${currentPosition}px)`;
    }
    
    if (secondPosition < (blogPosts.length - 1) * postWidth - postWidth) {
    secondPosition + currentPosition;
    sliderWrapper.style.transform = `translateX(-${currentPosition}px)`;
    // nextButton.style.display = 'none';
    }
   
    if (thirdPosition < (blogPosts.length - 1) * postWidth - postWidth) {
        currentPosition += postWidth;
        sliderWrapper.style.transform = `translateX(-${currentPosition}px)`;
    }
});
