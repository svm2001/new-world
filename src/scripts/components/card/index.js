export function card() {
  let addToFavouriteBtn = document.querySelectorAll('.card__favourite');
  if (addToFavouriteBtn) {
    addToFavouriteBtn.forEach(item => {
      item.addEventListener('click', () => {
        item.classList.toggle('active')
      })
    })
  }

  let cardAddBtn = document.querySelectorAll('.card__add-btn.btn');
  if(cardAddBtn) {
    cardAddBtn.forEach(item => {
      item.addEventListener('click', () => {
        if(item.classList.contains('added')) {
          item.querySelector('span').textContent = "В корзину";
        } else {
          item.querySelector('span').textContent = "В корзине";
        }

        if(item.classList.contains('order')) {
          if(item.classList.contains('added')) {
            item.querySelector('span').textContent = "Под заказ";
          } else {
            item.querySelector('span').textContent = "Отложено";
          }
        }
        item.classList.toggle('added');
      })
    })
  }
}
