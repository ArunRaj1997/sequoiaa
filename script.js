document.addEventListener("DOMContentLoaded", function () {
    const container = document.querySelector(".scrollable-container");
    const content = document.querySelector(".scrollable-content");
    const leftArrow = document.querySelector(".left-arrow");
    const rightArrow = document.querySelector(".right-arrow");
  
    const scrollStep = 200; 
  
    leftArrow.addEventListener("click", function () {
      container.scrollLeft -= scrollStep;
    });
  
    rightArrow.addEventListener("click", function () {
      container.scrollLeft += scrollStep;
    });
  });