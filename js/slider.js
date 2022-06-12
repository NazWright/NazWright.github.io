// add a class to one slide that say active

const aboutMeCard = document.getElementById("aboutme-card");

aboutMeCard.addEventListener("click", function (event) {
  if (!event.target.classList.contains("nw-control-icon")) return;
  const button = event.target;
});
