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

//== function to reset style to default style ==//
function resetStyle(){
    sectionsHeaders.forEach(el=>{
        el.style.color = '#202336';
    });
    sections.forEach(el=>{
        el.style.backgroundColor = 'white';
    });
    navLinks.forEach(el=>{
        el.style.color = '#B8BECD';
    })
}

//== function to add new style for certain section ==//
function addNewStyle(ind){
    sectionsHeaders[ind].style.color = '#FB8F1D';
    sections[ind].style.backgroundColor = '#c5c4c41c';
    navLinks[ind].style.color = '#FB8F1D';
}

//== end ==//

//== event we needs ==//
//== start ==//

//== navlinks event ==//
navLinks.forEach((el, ind)=>{
    el.addEventListener('click',()=>{
        resetStyle()
        addNewStyle(ind)
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

//== catch scroll event to window ==//
//== start ==//

//== handle elements that we  need from DOM ==//
//== start ==//
const navbar = document.querySelector('.navbar');
const scrollTopBtn = document.querySelector('.scroll-top');
//== end ==//


//== functions we need ==//
//== start ==//

//== handle navbar in scrolling ==//
function handleScroll(){
    if(window.scrollY <= 30){
        navbar.classList.remove('moved-nav');
    }else{
        navbar.classList.add('moved-nav');
    }
}

//== indicate active section ==//
function indicateActive(){
    sections.forEach((el, ind)=>{
        let elBoundary = el.getBoundingClientRect();
        if(elBoundary.top <= 200 && elBoundary.top >= -300){
            resetStyle()
            addNewStyle(ind)
        }
    });
}

//== visibility of scroll top btn ==//
function visibilityScrollTop(){
    if(window.scrollY >= 400){
        scrollTopBtn.style.display = "flex"; 
    }else{
        scrollTopBtn.style.display = "none"; 
        resetStyle()
    }
}

//== indicate visibilty for navbar during scroll ==//
function visibilityNavbar(){
    let newScroll = window.scrollY ;
    if(newScroll > ind && window.scrollY !== 0){
        navbar.style.display = 'none';
    }else{
        navbar.style.display = 'block';
    }
    ind = window.scrollY ;
}

//== end ==//

//== handle events that will happen ==//
//== start ==//

//== scroll event to window ==//
let ind ;
window.addEventListener('scroll',(e)=>{
    handleScroll();
    indicateActive();
    visibilityScrollTop();
    visibilityNavbar()
});

//== scroll btn click event ==//
scrollTopBtn.addEventListener('click',()=>{
    document.querySelector('.hero-sec').scrollIntoView({behavior:'smooth', block: 'start'});
})

//== end ==//

//== end ==//

//=================================================================================================//