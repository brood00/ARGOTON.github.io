const menu = document.querySelector('.menu')
const menuBtn = document.querySelector('.menu__icon')

const body = document.body;

if (menu && menuBtn) {
    menuBtn.addEventListener('click', () => {
        menu.classList.toggle('active')
        menuBtn.classList.toggle('active')
        body.classList.toggle('lock')
    })

    menu.addEventListener('click', (event) => {
        if(event.target.classList.contains('menu')) {
            menu.classList.remove('active')
            menuBtn.classList.remove('active')
            body.classList.remove('lock')
        }
    })

    menu.querySelectorAll('.menu__link').forEach(link => {
        link.addEventListener('click', () => {
                menu.classList.remove('active')
                menuBtn.classList.remove('active')
                body.classList.remove('lock')
        })
    })

    window.addEventListener('keydown', (event) => {
        if(event.key === 'Escape') {
            document.querySelector('.menu').classList.remove('active')
            document.querySelector('.menu__icon').classList.remove('active')
            body.classList.remove('lock')
        }
    })
}

            