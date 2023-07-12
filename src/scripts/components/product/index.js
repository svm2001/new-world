export function product() {
  let productFavouriteBtn = document.querySelector('.product__favourite-button')
  if(productFavouriteBtn) {
    productFavouriteBtn.addEventListener('click', () => {
      productFavouriteBtn.classList.toggle('active')
    })
  }

  let productBtnCart = document.querySelector('.btn--product-basket');
  if(productBtnCart) {
    productBtnCart.addEventListener('click', () => {
      productBtnCart.classList.toggle('active');
      if(productBtnCart.classList.contains('active')) {
        productBtnCart.querySelector('span').textContent = 'Удалить из корзины'
      } else {
        productBtnCart.querySelector('span').textContent = 'Добавить в корзину'
      }
    })
  }

  function characteristicsScroll(target, duration) {
    let targetElement = document.querySelector(target);
    let targetPosition = targetElement.offsetTop;
    let startPosition = window.pageYOffset;
    let distance = targetPosition - startPosition;
    let startTime = null;
    function animation(currentTime) {
      if (startTime === null) startTime = currentTime;
      let timeElapsed = currentTime - startTime;
      let run = ease(timeElapsed, startPosition, distance, duration);
      window.scrollTo(0, run);
      if (timeElapsed < duration) requestAnimationFrame(animation);
    }
    function ease(t, b, c, d) {
      t /= d / 2;
      if (t < 1) return c / 2 * t * t + b;
      t--;
      return -c / 2 * (t * (t - 2) - 1) + b;
    }
    requestAnimationFrame(animation);
  }

  let cardShowAllBtn = document.querySelector('.js-card-show-all')
  if(cardShowAllBtn) {
    cardShowAllBtn.addEventListener('click', () => {
      characteristicsScroll('.product__tabs-nav', 1000);
      let tabsButtons = document.querySelectorAll('.product__tabs-nav-btn');
      let tabsContents = document.querySelectorAll('.product__tabs-content-item');
      let characteristicBtn = document.querySelector('.js-product-tab-characteristic');
      let characteristicContent = document.querySelector('.product__tabs-content-item--characteristics');
      tabsButtons.forEach(tabsButton => {
        tabsButton.classList.remove('product__tabs-nav-btn--active');
      })
      tabsContents.forEach(tabsContent => {
        tabsContent.classList.remove('product__tabs-content-item--active');
      })
      characteristicBtn.classList.add('product__tabs-nav-btn--active');
      characteristicContent.classList.add('product__tabs-content-item--active');
    })
  }

  if(innerWidth > 568) {
    let characteristicsList = document.querySelector('.product__tabs-content-item--characteristics')
    let characteristicsItems = document.querySelectorAll('.product__tabs-content-item--characteristics > div')
    if(characteristicsList && characteristicsItems) {
      let length = characteristicsItems.length
      if (length >= 6) {
        characteristicsList.classList.add('product__tabs-content-item--flex-wrap');
      }
    }
  }
}
