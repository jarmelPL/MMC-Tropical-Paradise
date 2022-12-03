const burgerBtn = document.querySelector('.burger-btn')
const nav = document.querySelector('nav')
const navItem = document.querySelectorAll('.nav__item')
const btnBars = document.querySelector('.burger-btn__bars')
const allSections = document.querySelectorAll('.section')
const footerYear = document.querySelector('.footer__year')


burgerBtn.addEventListener('click', () => {
    nav.classList.toggle('nav--active');
    btnBars.classList.remove('black-bars-color');

    let delayItem = 0;
    navItem.forEach( item => {
        item.classList.toggle('nav-items-animation');
        item.style.animationDelay='.' + delayItem + 's'
        delayItem++
    })

    // for (x=0; x<navItem.length; x++) {
    //     navItem[x].classList.toggle('nav-items-animation');
    //     navItem[x].style.animationDelay='.' + x + 's'
    // } 
    // // TO SAMO TYLKO ZAPIS W PĘTLI FOR, A NIE W METODZIE FOREACH
})

navItem.forEach(el => el.addEventListener('click', () => {
    nav.classList.remove('nav--active');
}))





const CurrentYear = () => {
    const year = new Date().getFullYear();
    footerYear.innerText = year + " ";
}

CurrentYear()





const handleObserver = () => {
    const currentSection = window.scrollY;
    allSections.forEach(section => {

        if (section.classList.contains('white-section') && section.offsetTop <= window.scrollY + 60) {
            console.log('lol')
            btnBars.classList.add('black-bars-color')
        } else if (section.offsetTop <= currentSection + 60) {
            btnBars.classList.remove('black-bars-color')
        }
    })
}
window.addEventListener('scroll', handleObserver)



