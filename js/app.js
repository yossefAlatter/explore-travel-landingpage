//== navbar scripts ==//
//== start ==//

//== variable we need ==//
//== start ==//

const toggleBtn = document.getElementById('toggle');
const navbarMenu = document.getElementById('nav-menu');
const closeBtn = document.getElementById('close');

//== end ==//

//== functions we need ==//
//== start ==//



//== end ==//

//== events we need ==//
//== start ==//

//== toggle btn event ==//
toggleBtn.addEventListener('click',()=>{
    navbarMenu.style.display = "flex" ;
    navbarMenu.animate([
        {
            transform: 'translateX(100%)',
            opacity: '0'
    },
        {
            transform: 'translateX(0)',
            opacity: '1'
        }
    ],{
        duration: 400
    })
})

//== close btn event ==//
closeBtn.addEventListener('click', ()=>{
    navbarMenu.animate([
        {
            opacity: '1'
    },
        {
            opacity: '0'
        }
    ],{
        duration: 200
    })
    setTimeout(()=>{
        navbarMenu.style.display = "none" ;
    },100);
})

//== end ==//

//== end ==//