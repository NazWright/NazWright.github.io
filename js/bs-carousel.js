document.addEventListener("load", function () {
  const myCarouselElement = document.querySelector("#nw-home-carousel");
  const carousel = new bootstrap.Carousel(myCarouselElement, {
    interval: 2000,
    wrap: false,
  });
});
