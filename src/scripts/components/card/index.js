export function card() {
  let addToFavouriteBtn = document.querySelectorAll('.card__favourite');
  if (addToFavouriteBtn) {
    addToFavouriteBtn.forEach(item => {
      item.addEventListener('click', () => {
        var favorID = $(this).attr('data-item')
        addFavorite(favorID);
        function addFavorite(id, action)
        {
          var param = 'id='+id;

          $.ajax({
            url:     '/local/templates/novmir_2023/assets/scripts/favorites.php', // URL отправки запроса
            type:     "GET",
            dataType: "json",
            data: param,
            success: function(response) { // Если Данные отправлены успешно

              if(response.ELEMENTS.length){
                $(`.fav_count`).text(response.ELEMENTS.length)
                $(`.fav_counter`).addClass("visible");
              }else{
                $(`.fav_count`).text(Object.keys(response.ELEMENTS).length)
                $(`.favor-counter`).removeClass("visible");
              }
            },
            error: function(jqXHR, textStatus, errorThrown){ // Ошибка
              console.log('Error: '+ errorThrown);
            }
          });
        }
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
