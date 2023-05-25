let menuItem = document.querySelectorAll('.menu__item')

let S = document.querySelector('.cont__services')
let AM = document.querySelector('.cont__any_me')
let LB = document.querySelector('.line__black')

let open_right_menu = document.querySelector('.right__border')
let right_menu = document.querySelector('.right__menu')
let close_right_menu = document.querySelector('.but__exit')

let day__checkbox = document.getElementById('checkbox_day')

// let bl__elements = document.getElementById('bl_tema')
// let g__elements = document.getElementById('g_tema')
// let footer_bl_tema = document.getElementById('footer_bl_tema')
// let menu__icon = document.querySelector('.lg')

// durationInt = 200

// $(day__checkbox).click(function(){
//     console.log(day__checkbox.checked)
//     if (day__checkbox.checked == true){
        
//         // bl__elements.style.backgroundColor = '#fff !important'
//         // bl__elements.style.color = '#000 !important'
//         anime({
//             targets: bl__elements,
//             backgroundColor: '#fff',
//             color: '#000',
//             duration: durationInt,
//             easing: 'linear'
//         })

//         // bl__elements.style.backgroundColor = '#fff !important'
//         // bl__elements.style.color = '#000 !important'
//         anime({
//             targets: footer_bl_tema,
//             backgroundColor: '#fff',
//             color: '#000',
//             duration: durationInt,
//             easing: 'linear'
//         })
        
//         // bl__elements.style.backgroundColor = 'rgb(244, 244, 244) !important'
//         // bl__elements.style.color = '#000 !important'
//         anime({
//             targets: g__elements,
//             backgroundColor: 'rgb(244, 244, 244)',
//             color: '#000',
//             duration: durationInt,
//             easing: 'linear'
//         })
//         anime({
//             targets: menu__icon,
//             fill: '#fff',
//             duration: durationInt,
//             easing: 'linear'
//         })
//     }
//     else{

//         // bl__elements.style.backgroundColor = '#000 !important'
//         // bl__elements.style.color = '#fff !important'
//         anime({
//             targets: bl__elements,
//             backgroundColor: '#000',
//             color: '#fff',
//             duration: durationInt,
//             easing: 'linear'
//         })

//         // bl__elements.style.backgroundColor = '#000 !important'
//         // bl__elements.style.color = '#fff !important'
//         anime({
//             targets: footer_bl_tema,
//             backgroundColor: '#000',
//             color: '#fff',
//             duration: durationInt,
//             easing: 'linear'
//         })

//         // bl__elements.style.backgroundColor = 'rgb(30, 30, 30) !important'
//         // bl__elements.style.color = '#fff !important'
//         anime({
//             targets: g__elements,
//             backgroundColor: 'rgb(30, 30, 30)',
//             color: '#fff',
//             duration: durationInt,
//             easing: 'linear'
//         })
//     }
// })

$(open_right_menu).click(function(){
    right_menu.style.display = 'flex'

    anime({
        targets: right_menu,
        opacity: 1,
        duration: 200,
        easing: 'linear'
    })
})
$(close_right_menu).click(function(){
    anime({
        targets: right_menu,
        opacity: 0,
        duration: 200,
        easing: 'linear'
    })
    setTimeout(function(){
        right_menu.style.display = 'none'
    },300)
})
for (var i = 0; i < menuItem.length; i++) {
    $(menuItem[i]).click(function(e){
        if(e.currentTarget == menuItem[0]){
            
            S.style.display = 'flex'
            LB.style.display = 'flex'
            AM.style.display = 'flex'
        }
        else if(e.currentTarget == menuItem[1]){
            S.style.display = 'flex'
            LB.style.display = 'none'
            AM.style.display = 'none'
        }
        else if(e.currentTarget == menuItem[2]){
            S.style.display = 'none'
            LB.style.display = 'none'
            AM.style.display = 'flex'
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
                backgroundColor: 'rgba(0, 0, 0, 0)',
                color: '#000',
                duration: 1000,
                easing: 'linear'
            })
        },1000)
    })
}