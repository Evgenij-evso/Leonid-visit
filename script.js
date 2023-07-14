let logoTop = document.querySelector('.logo_Swipe')
let ft = true
let dur = 100
let val = 2.25

$('.preview').click(function(){
    if(ft){
        ft = false
        anime({
            targets: 'header',
            width: '345px',
            duration: dur,
            easing: 'linear'
        })
        anime({
            targets: '.anim_li',
            opacity: 1,
            delay: anime.stagger(5)
        })
    }
    else{
        ft = true
        anime({
            targets: 'header',
            width: '45px',
            duration: dur,
            easing: 'linear'
        })
        anime({
            targets: '.anim_li',
            opacity: 0,
            
            delay: anime.stagger(5)

        })
    }
})

window.addEventListener('scroll', function() {
    console.log($(window).scrollTop())
    logoTop.style.marginTop = $(window).scrollTop() / val + 'px'
});