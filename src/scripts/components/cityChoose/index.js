export function cityChoose () {
  let cityChoose = document.querySelector('.city__choose');
  let body = document.querySelector('body')
  if(cityChoose) {
    function makeCityChooseVisible() {
      cityChoose.classList.add('visible')
    }

    function bodyBlock () {
      body.classList.add('city-block')
    }
    setTimeout (makeCityChooseVisible, 1000);
    setTimeout (bodyBlock, 1);

    let cityChooseCLose = document.querySelector('.city__choose-close')
    cityChooseCLose.addEventListener('click', () => {
      cityChoose.classList.remove('visible')
      body.classList.remove('city-block')
    })

    let cityChooseAccept = document.querySelector('.city__choose-btn.btn')
    cityChooseAccept.addEventListener('click', () => {
      cityChoose.classList.remove('visible')
      body.classList.remove('city-block')
      document.querySelector('.bot__menu').classList.remove('lock');
    })



    let cityChooseBtn = document.querySelector('.city__choose-btn.btn--white');
    let citySearch = document.querySelector('.city__search');
    let citySearchClose = document.querySelector('.city__search-title button');
    let burgerCityLink = document.querySelectorAll('.js-city-link')
    if(cityChooseBtn) {
      cityChooseBtn.addEventListener('click', () => {
        citySearch.classList.add('open');
        cityChoose.classList.remove('visible');
        body.classList.remove('city-block')
        body.classList.add('lock')
        document.querySelector('.bot__menu').classList.remove('lock');
      })
      const mediaQuery = window.matchMedia('(min-width: 1024px)')
      if (mediaQuery.matches) {
        cityChooseBtn.addEventListener('click', () => {
          citySearch.classList.add('open');
          cityChoose.classList.remove('visible');
          body.classList.add('city-block')
          body.classList.remove('lock')
          document.querySelector('.bot__menu').classList.remove('lock');
        })
      }
    }

    if(citySearchClose) {
      citySearchClose.addEventListener('click', () => {
        citySearch.classList.remove('open');
        document.querySelector('body').classList.remove('city-block')
        body.classList.remove('lock');
        document.querySelector('.bot__menu').classList.remove('lock');
      })
    }



    if(burgerCityLink) {
      burgerCityLink.forEach(item => {
        item.addEventListener('click', () => {
          citySearch.classList.add('open');
          document.querySelector('.burger__menu').classList.remove('active')
          document.querySelector('.b-header__burger-switcher').classList.remove('active')
          document.querySelector('body').classList.add('lock')
        })

        const mediaQuery = window.matchMedia('(min-width: 1024px)')
        if (mediaQuery.matches) {
          item.addEventListener('click', () => {
            citySearch.classList.add('open');
            cityChoose.classList.remove('visible');
            body.classList.add('city-block')
            body.classList.remove('lock');
          })
        }
      })
      window.addEventListener("keydown", function(e){
        if (e.keyCode == 27 && citySearch.classList.contains('open')) {
          citySearch.classList.remove('open');
          cityChoose.classList.remove('visible');
          document.querySelector('body').classList.remove('city-block');
        }
      }, true);

      window.addEventListener("keydown", function(e){
        if (e.keyCode == 27 && cityChoose.classList.contains('visible')) {
          cityChoose.classList.remove('visible');
          document.querySelector('body').classList.remove('city-block');
        }
      }, true);
    }
  }
}
