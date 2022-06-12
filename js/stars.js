const selectedColor = "orange";
const defaultColor = "gray";

function selectStars(event) {
  if (!event.target.classList.contains("fa-star")) return;
  let stars = document.getElementById("stars").children;
  const selectedStar = event.target;
  let rating = 0;
  let elementFound = false;
  for (let star of stars) {
    const isSelectedStar = star === selectedStar;
    if (!elementFound) {
      if (isSelectedStar) {
        elementFound = true;
      }
      rating++;
      star.style.color = selectedColor;
    } else {
      star.style.color = defaultColor;
      if (star === stars[stars.length - 1]) {
        elementFound = false;
      }
    }
  }
}

window.addEventListener("click", selectStars);

// get all stars

// turn all stars gray (reset)

// get index of the selected star child

// loop until index
// color the stars
