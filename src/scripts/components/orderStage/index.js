export default function orderStage() {
    const orderStages = document.querySelectorAll('[data-order-stage="main"]')

    if (!orderStages.length) return

    orderStages.forEach((orderStage, index) => {
        const btnCity = orderStage.querySelector('[data-order-stage="btn-city"]'),
        citySearch = document.querySelector('.city__search'),
        citySearchClose = citySearch.querySelector('.city__search-title button'),
        btnNext = orderStage.querySelector('[data-order-stage="btn-next"]'),
        btnChange = orderStage.querySelector('[data-order-stage="btn-change"]')

        if (index !== 0) {
            orderStage.classList.add('order-stage--hide')
        } else {
            orderStage.classList.add('order-stage--active')
        }

        if (btnNext) {
            btnNext.addEventListener('click', () => {
                orderStage.classList.remove('order-stage--active')
                orderStage.classList.remove('order-stage--hide')
                orderStage.classList.add('order-stage--passed')
                const newIndex = index + 1
                if (orderStages[newIndex]) {
                    orderStages[newIndex].classList.remove('order-stage--hide')
                    orderStages[newIndex].classList.remove('order-stage--passed')
                    orderStages[newIndex].classList.add('order-stage--active')
                }
            })
        }

        if (btnChange) {
            btnChange.addEventListener('click', () => {
                orderStage.classList.remove('order-stage--hide')
                orderStage.classList.remove('order-stage--passed')
                orderStage.classList.add('order-stage--active')
    
                orderStages.forEach(itemOrderStage => {
                    if (itemOrderStage !== orderStage) {
                        itemOrderStage.classList.remove('order-stage--hide')
                        itemOrderStage.classList.add('order-stage--passed')
                        itemOrderStage.classList.remove('order-stage--active')
                    }
                })
            })
        }

        if (btnCity && citySearch) {
            btnCity.addEventListener('click', () => {
                document.body.classList.add('city-block')
                citySearch.classList.add('open')
            })

            if(citySearchClose) {
                citySearchClose.addEventListener('click', () => {
                    citySearch.classList.remove('open')
                    document.body.classList.remove('city-block')
                })
            }
        }

        ymaps.ready(miniMapinit)
        ymaps.ready(mapinit)

        function miniMapinit() {
            const map = orderStage.querySelector('[data-order-stage="mini-map"]')
    
            if (!map) return
    
            const myMap = new ymaps.Map(map, {
                center: [55.77101400, 37.63209300],
                zoom: 13,
                controls: ["zoomControl"]
            });
    
            myMap.controls.add('fullscreenControl', { float: 'left' })
    
            let pm = new ymaps.Placemark([55.77101400, 37.63209300], {
                balloonContent: 'balloonContent',
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
    
            pm.events.add('click', (event) => {
                myMap.setCenter(event.get('target').geometry.getCoordinates())
            })
        }

        function mapinit() {
            const map = orderStage.querySelector('[data-order-stage="map"]')
    
            if (!map) return
    
            const myMap = new ymaps.Map(map, {
                center: [55.77101400, 37.63209300],
                zoom: 13,
                controls: ["zoomControl"]
            });
    
            myMap.controls.add('fullscreenControl', { float: 'left' })
        }
    })
}