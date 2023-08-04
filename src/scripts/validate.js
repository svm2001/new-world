export default function validate() {
    const form = document.querySelectorAll('[data-validate]')

    if (!form.length) return

    document.addEventListener('click', (event) => {
        const el = event.target
        if (el.closest('[data-validate]')) {
            const form = el.closest('[data-validate]'),
            inputs = form.querySelectorAll('.input'),
            dataReqexp = {
                fio: /^[А-ЯЁа-яё]+(-[А-ЯЁа-яё]+)? [А-ЯЁа-яё]+( [А-ЯЁа-яё]+)?$/,
                email: /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/,
                numbers: /^\d+$/ 
            },
            error = (input, msg = 'Обязательное поле') => {
                const message = input.querySelector('.input__message')

                return {
                    set: () => {
                        message.innerText = msg
                        input.classList.add('input--error')
                    },
                    remove: () => {
                        input.classList.remove('input--error')
                        message.innerText = ''
                    }
                }
            },
            checkingNumbers = (input, msg) => {
                const field = input.querySelector('input')
                if (field.value.match(dataReqexp.numbers)) {
                    error(input).remove()
                } else {
                    error(input, msg).set()
                }
            },
            validateInput = (input) => {
                const field = input.querySelector('input'),
                name = field.getAttribute('name'),
                valueField = field.value

                if (field.hasAttribute('required')) {
                    if (valueField !== '') {
                        switch (name) {
                            case 'fio':
                                if (valueField.length > 5 && valueField.match(dataReqexp.fio)) {
                                    error(input).remove()
                                } else {
                                    error(input, 'Введите корректное ФИО').set()
                                }
                                break
                            case 'email':
                                if (valueField.match(dataReqexp.email)) {
                                    error(input).remove()
                                } else {
                                    error(input, 'Введите корректный E-mail').set()
                                }
                                break
                            case 'phone':
                                if (valueField.length === 16) {
                                    error(input).remove()
                                } else {
                                    error(input, 'Введите полный номер телефона').set()
                                }
                                break
                            case 'nameCompany':
                                if (valueField.length < 5) {
                                    error(input).remove()
                                } else {
                                    error(input, 'Введите корректное название компании').set()
                                }
                                break
                            case 'paymentAccount':
                                if (valueField.length === 20) {
                                    error(input).remove()
                                } else {
                                    error(input, 'Введите полный номер расчетного счета').set()
                                }
                                break
                            case 'kpp':
                                if (valueField.length === 9) {
                                    error(input).remove()
                                } else {
                                    error(input, 'Введите полный КПП').set()
                                }
                                break
                            case 'bicBank':
                                if (valueField.length === 9) {
                                    error(input).remove()
                                } else {
                                    error(input, 'Введите полный БИК банка').set()
                                }
                                break
                            case 'inn':
                                if (valueField.length === 10) {
                                    error(input).remove()
                                } else {
                                    error(input, 'Введите полный ИНН').set()
                                }
                                break
                            case 'legalAddress':
                            case 'actualAddress':
                                if (valueField.length > 10) {
                                    error(input).remove()
                                } else {
                                    error(input, 'Введите корректный адрес').set()
                                }
                                break
                            case 'index':
                                checkingNumbers(input, 'Введите корректный индекс')
                                break
                            case 'flat':
                                checkingNumbers(input, 'Введите корректный номер квартиры')
                                break
                            case 'floor':
                                // if (valueField.match(dataReqexp.numbers)) {
                                //     error(input).remove()
                                // } else {
                                //     error(input, 'Введите корректный номер').set()
                                // }
                                checkingNumbers(input, 'Введите корректный номер этажа')
                                break
                            default:
                                if (valueField.length !== 0) {
                                    error(input).remove()
                                } else {
                                    error(input).set()
                                }
                        }
                    } else {
                        error(input).set()
                    }
                }
            },
            checkFields = () => {
                inputs.forEach(input => {
                    validateInput(input)
                })
            }

            if (el.closest('.input > input')) {
                if (form.getAttribute('data-validate')) {
                    const field = el.closest('.input > input'),
                    input = field.closest('.input')
                    field.addEventListener('input', () => validateInput(input))
                    checkFields()
                }
            }

            if (el.closest('button[type="submit"]')) {
                checkFields()
                form.setAttribute('data-validate', 'true')
            }

            form.addEventListener('submit', (event) => {
                event.preventDefault()

                let errors = 0

                inputs.forEach(input => {
                    if (input.classList.contains('input--error')) {
                        errors += 1
                    }
                })

                if (errors === 0) {
                    const formData = new FormData(form)
                    console.log('send data')
                    // console.log('Data: ', formData)
                    // console.log('FIO', formData.get('fio'))
                    // console.log('PHONE', formData.get('phone'))
                }
            })
        }
    })
}