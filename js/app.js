if(window.innerWidth < 1200) {
    const headerMobBtn = document.querySelector('.header-mob-button')
    const mob_menu = document.querySelector('header nav');
    const headerMenuClose = document.querySelectorAll('header nav a');
    headerMobBtn.onclick = ()=>{
        headerMobBtn.classList.toggle('active')
        mob_menu.classList.toggle('active')
    }

    headerMenuClose.forEach((el)=>{
        el.onclick = ()=>{
            mob_menu.classList.remove('active')
            headerMobBtn.classList.remove('active')
        }
    })
}