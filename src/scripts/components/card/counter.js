export default function counter() {
    const parentBlocks = document.querySelectorAll(`[data-counter="counter"]`)

    if (!parentBlocks.length) return
    
    parentBlocks.forEach(elem => {
        const remove = elem.querySelector('[data-counter="remove"]')
        const add = elem.querySelector('[data-counter="add"]')
        const input = elem.querySelector('[data-counter="input"]')

        const max = +input.getAttribute('max')
        const min = +input.getAttribute('min')

        const validInput = (value) => {
            const inputValue = +value
            switch (true) {
                case inputValue <= min:
                    input.value = min
                    remove.setAttribute('disabled', '')
                    break
                case inputValue >= max:
                    input.value = max
                    add.setAttribute('disabled', '')
                    break
                default:
                    remove.removeAttribute('disabled')
                    add.removeAttribute('disabled')
            }
        }

        validInput(input.value)

        input.addEventListener('change', () => {
            validInput(input.value)
        })

        add.addEventListener('click', () => {
            input.value++
            validInput(input.value)
        })

        remove.addEventListener('click', () => {
            input.value--
            validInput(input.value)
        })
    })
}