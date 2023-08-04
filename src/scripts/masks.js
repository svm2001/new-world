export default function masks() {
    const phoneMasks = document.querySelectorAll('[data-phone-mask]'),
    inn = document.querySelectorAll('[data-inn-mask]'),
    kpp = document.querySelectorAll('[data-kpp-mask]'),
    bic = document.querySelectorAll('[data-bic-mask]'),
    paymentAccount = document.querySelectorAll('[data-payment-account-mask]'),
    setMask = (elems, mask) => {
        if (elems.length) {
            elems.forEach(elem => {
                IMask(elem, {
                    mask: mask
                })
            })
        }
    }

    setMask(phoneMasks, '+{7}(000)000-00-00')
    setMask(inn, '0000000000')
    setMask(kpp, '000000000')
    setMask(bic, '000000000')
    setMask(paymentAccount, '00000000000000000000')
}