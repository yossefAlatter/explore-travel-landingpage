//== adding item to navbar dynamically ==//
//== start ==//

//== handle elements that we need from DOM ==//
//== start ==//
const sections = document.querySelectorAll('section');
const navList = document.querySelector('.nav-list');
const fragmentDOM = document.createDocumentFragment();
//== end =//

//== function we need ==//
//== start ==//

//== create navlink ==//
function createNavLink(el){
    let navLink = document.createElement('li');
    navLink.classList.add('nav-link')
    navLink.textContent = el.getAttribute('data-nav');
    fragmentDOM.appendChild(navLink);
}

//== end ==//

//== creating nav list item according to sections in page ==//
//== start ==//
sections.forEach(createNavLink);
navList.appendChild(fragmentDOM);
//== end ==//

//== end ==//

//=================================================================================================//

//== scroll action to in certain section ==//
//== start ==//

//== handle elements that we need from DOM ==//
//== start ==//
const navLinks =document.querySelectorAll('.nav-link');
const sectionsHeaders = document.querySelectorAll('section h3');
//== end ==//

//== functions we need ==//
//== start ==//



//== end ==//

//== event we needs ==//
//== start ==//

//== navlinks event ==//
navLinks.forEach((el, ind)=>{
    el.addEventListener('click',()=>{
        sectionsHeaders.forEach(el=>{
            el.style.color = '#202336';
        });
        
        sectionsHeaders[ind].style.color = '#FB8F1D';
        sections[ind].scrollIntoView({behavior: 'smooth', block: 'start'});
    });
});

//== end ==//

//== end ==//

//=================================================================================================//


//== controlling navbar in mobile media ==//
//== start ==//

//== handle elements that we need from DOM  ==//
//== start ==//
const toggleBtn = document.getElementById('toggle');
const navbarMenu = document.getElementById('nav-menu');
const closeBtn = document.getElementById('close');
//== end ==//

//== functions we need ==//
//== start ==//

//== function to open navbar ==//
function openNavbar(){
    navbarMenu.style.display = "flex" ;
    navbarMenu.animate([
        {
            transform: 'translateX(100%)',
            opacity: '0'
        }
    ,
        {
            transform: 'translateX(0)',
            opacity: '1'
        }
    ],
    {
        duration: 400
    });
    toggleBtn.style.display = "none"
}

//== function to close navbar ==//
function closeNavbar(){
    navbarMenu.animate([
        {
            opacity: '1'
        }
    ,
        {
            opacity: '0'
        }
    ],{
        duration: 200
    })
    setTimeout(()=>{
        navbarMenu.style.display = "none" ;
    },100);
    toggleBtn.style.display = "block";
}

//== end ==//

//== events we need ==//
//== start ==//

//== toggle btn event ==//
toggleBtn.addEventListener('click', openNavbar);

//== close btn event ==//
closeBtn.addEventListener('click', closeNavbar);

//== end ==//

//== end ==//

//=================================================================================================//
