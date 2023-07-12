function sectorIndex(el) {
  const children = el.parentNode.childNodes;
  for (let i = 0; i < children.length; i++) {
    if (children[i].nodeType === 3) {
      children[i].parentNode.removeChild(children[i]);
    }
  }
  for (let i = 0; i < children.length; i++) {
    if (children[i] === el) {
      return i;
    }
    // console.log(NodeList)
  }
  return -1;
}

function changeCardSlider(elem, reset = false) {
  var sectorInd = reset ? 0 : sectorIndex(elem);
  if (sectorInd === -1) {
    return;
  }
  var cardContainer = elem.closest('.product-card_img-slider_container');
  var containerImages = cardContainer.querySelectorAll('.product-card_img');
  var containerDots = cardContainer.querySelectorAll('.product-card_dot');
  var activeImg = cardContainer.querySelector('.product-card_img.active-img');
  if (activeImg) {
    activeImg.classList.remove('active-img');
  }
  var activeDot = cardContainer.querySelector('.product-card_dot.active-dot');
  if (activeDot) {
    activeDot.classList.remove('active-dot');
  }
  if(containerImages[sectorInd]) {
    containerImages[sectorInd].classList.add('active-img');
  }
  if(containerDots[sectorInd]) {
    containerDots[sectorInd].classList.add('active-dot');
  }
}

export function ProductsCards() {
  var productCardsSectors = document.querySelectorAll('.product-card_img-sectors .product-card_img-sector');

  if (productCardsSectors) {
    productCardsSectors.forEach(function (productCardsSector) {
      productCardsSector.addEventListener('mouseout', function () {
        changeCardSlider(productCardsSector, true);
      });
      productCardsSector.addEventListener('mouseover', function () {
        changeCardSlider(productCardsSector);
      });
    });
  }
  var productCardsDots = document.querySelectorAll('.product-card_dots .product-card_dot');
  if (productCardsDots) {
    productCardsDots.forEach(function (productCardsDot) {
      productCardsDot.addEventListener('click', function () {
        changeCardSlider(productCardsDot);
      });
    });
  }
}
