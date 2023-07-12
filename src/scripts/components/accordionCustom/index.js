export function accordionCustom() {
  let accordionBtns = document.querySelectorAll(".accordion__button");
  accordionBtns.forEach(function (accordion) {
    accordion.addEventListener('click', function () {
      accordion.classList.toggle("open");
      let content = accordion.nextElementSibling;
      if (content) {
        if (content.classList.contains('start')) {
          content.classList.remove('start');
          content.style.maxHeight = 0 + "px";
        }
        if (content.style.maxHeight) {
          content.style.maxHeight = null;
        } else {
          content.style.maxHeight = content.scrollHeight + "px";
        }
      }
    });
  });
}
