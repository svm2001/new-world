export function header() {
  let burgerBtn = document.querySelector('.b-header__burger-switcher');
  let burgerMenu = document.querySelector('.burger__menu')
  let burgerMenuClose = document.querySelector('.burger__city-close');
  let botMenuCatalog = document.querySelector('.bot__menu-item.catalog')
  let burgerCatalog = document.querySelector('.burger__catalog');
  let burgerAccordCatalog = document.querySelectorAll('.accordion.accordion-burger.accordion-burger-catalog')
  let body = document.querySelector('body')
  let burgerCatalogTopBtns = document.querySelectorAll('.burger__catalog-top button')
  let headerSearchBtn = document.querySelector('.b-header__btn-search');
  let searchGoods = document.querySelector('.search__goods.city__search')
  let searchGoodsClose = document.querySelector('.city__search-title.search__goods-title button')

  if(searchGoodsClose) {
    searchGoodsClose.addEventListener('click', () => {
      searchGoods.classList.remove('active')
      body.classList.remove('lock')
    })
  }

  if(headerSearchBtn) {
    headerSearchBtn.addEventListener('click', () => {
      searchGoods.classList.add('active')
      body.classList.add('lock')
    })
  }

  if(burgerAccordCatalog) {
    burgerAccordCatalog.forEach(item => {
      item.addEventListener('click', () => {
        burgerCatalog.classList.add('active');
        botMenuCatalog.classList.add('active');
        body.classList.add('lock')
      })
    })
  }

  if(burgerBtn) {
    burgerBtn.addEventListener('click', () => {
      burgerBtn.classList.toggle('active');
      burgerMenu.classList.toggle('active');
      body.classList.toggle('lock');
    })
  }

  if(burgerCatalogTopBtns) {
    burgerCatalogTopBtns.forEach(item => {
      item.addEventListener('click', () => {
        burgerCatalog.classList.remove('active')
        botMenuCatalog.classList.remove('active')
        burgerMenu.classList.remove('active')
        burgerBtn.classList.remove('active')
        body.classList.remove('lock')
      })
    })
  }

  document.addEventListener('click', (e) => {
    let aim = e.target
    if(aim.tagName === 'SPAN' && burgerCatalog.contains(aim)) {
      document.querySelector('.burger__catalog-top').style.display = 'none'
    }
    if(aim.classList.value === "next") {
      document.querySelector('.burger__catalog-top').style.display = 'none'
    }
    if(aim.classList.value === "back") {
      document.querySelector('.burger__catalog-top').style.display = 'flex'
    }
  })

  if (burgerMenuClose) {
    burgerMenuClose.addEventListener('click', () => {
      burgerBtn.classList.remove('active');
      burgerMenu.classList.remove('active');
      body.classList.remove('lock');
    })
  }

  if(botMenuCatalog) {
    botMenuCatalog.addEventListener('click', () => {
      burgerCatalog.classList.toggle('active');
      botMenuCatalog.classList.toggle('active');
      body.classList.toggle('lock')
    })
  }

  const deskSearch = document.querySelector('.b-header-desk-search input');
  const deskSearchRes = document.querySelector('.b-header-desk-search-result')
  if(deskSearch) {
    deskSearch.addEventListener('input', () => {
      if(deskSearch.value.length >= 1) {
        deskSearchRes.classList.add('visible')
      } else {
        deskSearchRes.classList.remove('visible')
      }
    })
  }

  let headerCatalogBtn = document.querySelector('.b-header-desk-catalog-btn');
  let headerCatalog = document.querySelector('.b-header-desk-catalog')
  if(headerCatalogBtn) {
    headerCatalogBtn.addEventListener('click', () => {
      headerCatalog.classList.toggle('active');
      headerCatalogBtn.classList.toggle('active');
      document.querySelector('body').classList.toggle('lock');
    })

    window.addEventListener("keydown", function(e){
      if (e.keyCode == 27 && headerCatalog.classList.contains('active')) {
        headerCatalog.classList.remove('active');
        headerCatalogBtn.classList.remove('active');
        document.querySelector('body').classList.remove('lock');
      }
    }, true);
  }

  const headerCatalogShowMore = document.querySelectorAll('.b-header-catalog-content-item-block--showmore');
  if(headerCatalogShowMore) {
    headerCatalogShowMore.forEach(item => {
      item.addEventListener('click', () => {
        item.previousSibling.classList.add('open');
        item.style.display = 'none';
      })
    })
  }

}
