// header toggle start //
let MenuBtn = document.getElementById('MenuBtn')

MenuBtn.addEventListener('click' , ()=> {
    document.querySelector('body').classList.toggle('menuActive')
    MenuBtn.classList.toggle( 'bx-shield-x')
})

/* typing animation*/

let type = new Typed('.auto-input',{
    strings: ['Web Developer...!!!','Java Developer...!!!','Full Stack Developer...!!!'],
    typeSpeed : 100,
    backSpeed: 50,
    backDelay : 2000,
    loop: true,
})

/* skill ani */
const progressBars = document.querySelectorAll(".inner-line");

window.addEventListener('scroll', function(){

    progressBars.forEach(function(progressBars){
        const rect = progressBars.getBoundingClientRect();

        if(rect.top < window.innerHeight && rect.bottom >= 0){
            const width = progressBars.getAttribute('data-width');
            progressBars.style.width = width + '%';
        }
    });
})

/* active button */
let navLinks = document.querySelectorAll('header nav ul li a')
// all sec
let sections = document.querySelectorAll('section')

window.addEventListener('scroll', ()=>{
    const scrollPods = window.scrollY + 10
    sections.forEach(section =>{
        if(scrollPods > section.offsetTop && scrollPods < (section.offsetTop + section.offsetHeight)){
            navLinks.forEach(link => {
                link.classList.remove('active');
                if(section.getAttribute('id') === link.getAttribute('href').substring(1)){
                    link.classList.add('active')
                }
            });
        }
    });
});
