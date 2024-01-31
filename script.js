let btns = document.querySelectorAll(".group");

btns.forEach((item) =>
  item.addEventListener("click", function () {
    let children = this.children;
    children[1].classList.toggle("minus");
    children[2].classList.toggle("collapse");
  })
);
