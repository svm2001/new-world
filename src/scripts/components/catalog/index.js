export function catalog () {
  $(document).ready(function() {
    $('.js-catalog-sort').select2({
      minimumResultsForSearch: Infinity
    });
  });

  if(document.querySelector('.wrapper.catalog')) {
    document.querySelector('body').style.overflowX = 'visible';
    document.querySelector('html').style.overflowX = 'visible';
  }

  let accordionContentLinksInnerWrapper = document.querySelectorAll('.catalog__filters-inner-container');
  if(accordionContentLinksInnerWrapper) {
    accordionContentLinksInnerWrapper.forEach(item => {
      let height = item.scrollHeight
      let showMoreBtn = item.nextElementSibling
      if(height > 192) {
        showMoreBtn.style.display = 'block';
        showMoreBtn.addEventListener('click', () => {
          item.classList.toggle('full')
          showMoreBtn.classList.toggle('open')
          if(showMoreBtn.classList.contains('open')) {
            showMoreBtn.textContent = 'Скрыть'
          } else {
            showMoreBtn.textContent = 'Показать все'
          }

        })
      } else {
        showMoreBtn.style.display = 'none';
      }
    })
  }

  let catalogBtnMain = document.querySelector('.catalog__filter-btn--main')
  let catalogFilterClose = document.querySelector('.catalog__filters-close')

  if(catalogBtnMain) {
    catalogBtnMain.addEventListener('click', () => {
      document.querySelector('.catalog__filters-wrapper').classList.add('active')
      document.querySelector('body').style.overflow = 'hidden';
      document.querySelector('.bot__menu').style.opacity = 0;
      document.querySelector('.bot__menu').style.visibility = 'hidden';
      document.querySelector('.catalog__filters-top').classList.add('active')
      catalogBtnMain.classList.add('active')
    })
  }

  document.addEventListener('click', (e) => {
    if(e.target === document.querySelector('.catalog__filters-wrapper.active')) {
      document.querySelector('.catalog__filters-wrapper').classList.remove('active')
      document.querySelector('body').style.overflow = 'visible';
      document.querySelector('.bot__menu').style.opacity = 1;
      document.querySelector('.bot__menu').style.visibility = 'visible';
      document.querySelector('.catalog__filters-top').classList.remove('active')
      catalogBtnMain.classList.remove('active')
    }
  })

  window.addEventListener("keydown", function(e){
    if (e.keyCode == 27 && document.querySelector('.catalog__filters-wrapper').classList.contains('active')) {
      document.querySelector('.catalog__filters-wrapper').classList.remove('active')
      document.querySelector('body').style.overflow = 'visible';
      document.querySelector('.bot__menu').style.opacity = 1;
      document.querySelector('.bot__menu').style.visibility = 'visible';
      document.querySelector('.catalog__filters-top').classList.remove('active')
      catalogBtnMain.classList.remove('active')
    }
  }, true);

  if (catalogFilterClose) {
    catalogFilterClose.addEventListener('click',  () => {
      document.querySelector('.catalog__filters-wrapper').classList.remove('active')
      document.querySelector('body').style.overflow = 'visible';
      document.querySelector('.bot__menu').style.opacity = 1;
      document.querySelector('.bot__menu').style.visibility = 'visible';
      document.querySelector('.catalog__filters-top').classList.remove('active')
      catalogBtnMain.classList.remove('active')
    })
  }
}
