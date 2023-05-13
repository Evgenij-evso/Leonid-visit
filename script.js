let menuItem = document.querySelectorAll('.menu__item')

let S = document.querySelector('.cont__services')
let AM = document.querySelector('.cont__any_me')
let LB = document.querySelector('.line__black')

for (var i = 0; i < menuItem.length; i++) {
    $(menuItem[i]).click(function(e){
        if(e.currentTarget == menuItem[0]){
            
            S.style.display = 'flex'
            LB.style.display = 'flex'
            AM.style.display = 'flex'
        }
        else if(e.currentTarget == menuItem[1]){
            S.style.display = 'none'
            LB.style.display = 'none'
            AM.style.display = 'flex'
        }
        else if(e.currentTarget == menuItem[2]){
            S.style.display = 'flex'
            LB.style.display = 'none'
            AM.style.display = 'none'
        }
        anime({
            targets: e.currentTarget,
            backgroundColor: '#000',
            color: '#FFF',
            duration: 100,
            easing: 'linear'
        })
        setTimeout(function(){
            anime({
                targets: e.currentTarget,
                backgroundColor: '#FFF',
                color: '#000',
                duration: 1000,
                easing: 'linear'
            })
        },1000)
    })
}