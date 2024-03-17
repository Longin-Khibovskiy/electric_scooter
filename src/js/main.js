function MobileMenu() {
    const lab = document.getElementById('mob_menu')
    const menu = document.getElementById('mob_menu_active')
    const burger = document.getElementById('burger')
    const header = document.querySelector('header')
    const checkbox = document.getElementById('checkbox2')
    lab.addEventListener('click', () => {
        menu.classList.toggle('hidden')
        burger.classList.toggle('fixed')
        burger.classList.toggle('pr-[100px]')
    })
    // window.addEventListener('scroll', () => {
    //     if (window.scrollY > 50) {
    //         header.classList.add('fixed')
    //     } else {
    //         header.classList.remove('fixed')
    //     }
    // })
    window.addEventListener('resize', () => {
        if (window.innerWidth > 767.99) {
            menu.classList.add('hidden')
            menu.classList.remove('flex')
            burger.classList.remove('active')
            burger.classList.remove('overflow-hidden')
            checkbox.checked = false
        }
    })
}
MobileMenu()

function B_W() {
    const check = document.querySelector('#checkbox_toggle')
    const body = document.querySelector('body')
    const white = document.getElementById('white_bike')
    const black = document.getElementById('black_bike')
    const white_min = document.getElementById('white_min')
    const black_min = document.getElementById('black_min')
    const prod_check = document.getElementById('checkbox_toggle_1')
    check.addEventListener('click', () => {
        white.classList.toggle('hidden')
        black.classList.toggle('hidden')
        white_min.classList.toggle('sm:hidden')
        black_min.classList.toggle('sm:hidden')
        black_min.classList.toggle('sm:block')
    })
}
B_W()