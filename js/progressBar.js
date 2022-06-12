// loop through each className

// add animation using jQuery

// from width:0;

// to width: fillPercentages[i]

async function fillProgressBars() {
  var progressBarOutlines = document.getElementsByClassName("progress-bar");
  const numberOfProgressBars = progressBarOutlines.length;
  console.log("running");

  console.log(progressBarOutlines.length);
  const fillPerecentages = [85, 85, 60, 80, 40];

  //if (fillPerecentages !== numberOfProgressBars) return;

  let i = 0;

  for (let outline of progressBarOutlines) {
    $(outline).animate(
      {
        width: fillPerecentages[i] + "%",
        innerHTML: fillPerecentages[i],
      },
      2500
    );
    ++i;
  }
}

var id = null;
function myMove(elem, constraint) {
  var width = 0;
  clearInterval(id);
  id = setInterval(frame, 1);
  function frame() {
    if (width == constraint) {
      clearInterval(id);
    } else {
      width++;
      elem.style.width = width + "px";
    }
  }
}

fillProgressBars();
