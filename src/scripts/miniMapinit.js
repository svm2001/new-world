ymaps.ready(miniMapinit)

function miniMapinit() {
    const map = document.querySelector('[data-order-stage="mini-map"]')

    if (!map) return

    const coordinates = [
        [55.77101400, 37.63209300],
        [55.760178, 37.618574]
    ]

    const myMap = new ymaps.Map(map, {
        center: [55.77101400, 37.63209300],
        zoom: 13,
        controls: ["zoomControl"]
    });

    myMap.controls.add('fullscreenControl', { float: 'left' })

    if (coordinates.length) {
        coordinates.forEach((coordinate, index) => {
            const blockAddresses = document.querySelector('.order-stage__wrap-info')

            // const names = []

            let pm = new ymaps.Placemark(coordinate, {
                balloonContent: `index - ${index}`,
                preset: 'islands#blackStretchyIcon',
                draggable: true,
            }, {
                iconLayout: 'default#image',
                // iconImageHref: './assets/images/point.svg',
                iconImageSize: [48, 48],
                iconImageOffset: [-24, -24],
                hideIconOnBalloonOpen: false,
            })
        
            myMap.geoObjects.add(pm)

            console.log('pm: ', pm)

            ymaps.geocode(coordinate).then(function (res) {
                
                // Переберём все найденные результаты и
                // запишем имена найденный объектов в массив names.
                res.geoObjects.each(function (obj) {
                    console.log(obj.properties.get('name'))

                })
                // Добавим на карту метку в точку, по координатам
                // которой запрашивали обратное геокодирование.
                // myMap.geoObjects.add(new ymaps.Placemark(coords, {
                //     // В качестве контента иконки выведем
                //     // первый найденный объект.
                //     iconContent:names[0],
                //     // А в качестве контента балуна - подробности:
                //     // имена всех остальных найденных объектов.
                //     balloonContent:names.reverse().join(', ')
                // }, {
                //     preset:'twirl#redStretchyIcon',
                //     balloonMaxWidth:'250'
                // }));
            })

            blockAddresses.insertAdjacentHTML('beforeend', `
                <div class="a-radio" data-order-stage-index-map="${index}">
                    <label class="a-radio__label" data-role="">
                        <input class="a-radio__input" type="radio" name="2" value="" ${index === 0 ? 'checked' : ''}/>
                        <span class="a-radio__text">ул. Крупской, 280, Славянск-на-Кубани</span>
                        <span class="a-radio__decore"></span>
                    </label>
                </div>
            `)
        
            pm.events.add('click', (event) => {
                myMap.setCenter(event.get('target').geometry.getCoordinates())
                console.log('event.get: ', event.get('target'))
            })
        })
    }
}