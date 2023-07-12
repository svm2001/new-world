export function catalogCheckboxes () {
  $(document).on('change', 'input[type=checkbox]', function () {
    var $this = $(this), $chks = $(document.getElementsByName(this.name)), $all = $chks.filter(".catalog__checkbox-check-all");
    if ($this.hasClass('catalog__checkbox-check-all')) {
      $chks.prop('checked', $this.prop('checked'));
    } else switch ($chks.filter(":checked").length) {
      case +$all.prop('checked'):
        $all.prop('checked', false).prop('indeterminate', false);
        break;
      case $chks.length - !!$this.prop('checked'):
        $all.prop('checked', true).prop('indeterminate', false);
        break;
      default:
        $all.prop('indeterminate', true);
    }
  });

  let catalogCheckboxWrappers = document.querySelectorAll('.catalog__checkbox-wrapper')
  if(catalogCheckboxWrappers) {
    catalogCheckboxWrappers.forEach(catalogCheckboxWrapper => {


      let parent = catalogCheckboxWrapper.closest('.ac-panel')
      let checkAll = parent.querySelector('.catalog__checkbox-check-all-wrapper');
      let showAll = parent.querySelector('.catalog__checkbox-show-all');
      if(catalogCheckboxWrapper.scrollHeight >= 187) {
        showAll.style.display = "block";
      } else {
        showAll.remove();
      }

      if(catalogCheckboxWrapper.scrollHeight >= 565) {
        checkAll.style.display = "block";
      } else {
        checkAll.remove();
      }

      showAll.addEventListener('click', () => {
        catalogCheckboxWrapper.classList.toggle('open');
        showAll.classList.toggle('open');
        if(showAll.classList.contains('open')) {
          showAll.textContent = 'Скрыть'
        } else {
          showAll.textContent = 'Показать все'
        }
      })
    })
  }


  let catalogRes = document.querySelector('.filter__result-float')
  let catalogFiltersLinks = document.querySelectorAll('.catalog__filters-inner-container a')
  if(catalogFiltersLinks) {
    catalogFiltersLinks.forEach(item => {
      item.addEventListener('click', () => {
        catalogRes.classList.add('visible');
        let height = item.closest('.ac').offsetTop
        catalogRes.style.top = height + 'px'
      })
    })
  }

  let catalogPriceRange = document.querySelector('.slider-range')
  if(catalogPriceRange) {
    catalogPriceRange.addEventListener('click', () => {
      catalogRes.classList.add('visible');
      let height = catalogPriceRange.closest('.ac').offsetTop
      catalogRes.style.top = height + 'px'
    })
  }

  let priceInputs = document.querySelectorAll('.filter__price-wrapper input')
  if(priceInputs) {
    priceInputs.forEach(item => {
      item.addEventListener('input', () => {
        catalogRes.classList.add('visible');
        let height = item.closest('.ac').offsetTop
        catalogRes.style.top = height + 'px'
      })
    })
  }

  let catalogCheckboxInners = document.querySelectorAll('.catalog__checkbox-wrapper-inner');
  if(catalogCheckboxInners) {
    catalogCheckboxInners.forEach(item => {
      item.addEventListener('click', () => {
        catalogRes.classList.add('visible');
        let height = item.closest('.ac').offsetTop
        catalogRes.style.top = (height + 10) + 'px'
      })
    })
  }
}
