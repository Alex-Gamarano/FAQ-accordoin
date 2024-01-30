let btns = document.querySelectorAll(".plus");

btns.forEach((item) =>
  item.addEventListener("click", function () {
    this.classList.toggle("minus");
    this.nextElementSibling.classList.toggle("collapse");
  })
);

/* collapsibles.forEach((item) =>
  item.addEventListener("click", function () {
    this.classList.toggle("collapsible--expanded");
  })
); */
