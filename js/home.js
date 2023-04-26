document.addEventListener("DOMContentLoaded", function () {
  let progressBars = document.getElementsByClassName("pb");
  for (let progressBar of progressBars) {
    makeProgressBar(progressBar.dataset.percent, progressBar.id);
  }

  function makeProgressBar(value, id) {
    const selector = "#" + id;
    let pb = document.querySelector(selector);
    if (!pb) {
      return;
    }

    const template = document.querySelector("#progress-bar-template");
    const clone = template.content.cloneNode(true);
    let stripedProgressBar = clone.querySelector(".progress-bar");
    stripedProgressBar.setAttribute("aria-valuenow", value);
    stripedProgressBar.style = "width:" + value + "%;";
    pb.appendChild(clone);
  }
});
