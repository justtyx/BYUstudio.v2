const mobilesummary = document.querySelector(".ordersummarymobile");
mobilesummary.addEventListener("click", toggleSummary);

let val = 1;

function toggleSummary() {
  if (val == 1) {
    document.querySelector(".summaryflex > img").classList.add("rotatearrow");
    document.querySelector(".summaryphone").classList.remove("hidden");
    val = val + 1;
    console.log("open");
  } else if (val == 2) {
    document
      .querySelector(".summaryflex > img")
      .classList.remove("rotatearrow");
    document.querySelector(".summaryphone").classList.add("hidden");
    val = val - 1;
    console.log("close");
  }
}
