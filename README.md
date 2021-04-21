## explore and travel landing page
![Desgin](./images/desgin.png)

- Author: Yossef alatter
- [Demo](https://explore-travel-landingpage.vercel.app/)

---
## Description

I download the desgin of the page then start to write the HTML and CSS code for it, I build it to be responsive in several screens, then I start to write javascript code to it so i can complete requirements of the project 

- Sections links add to navbar dynamically 
- user can move between sections by using navbar
- handle scroll event to indicate active section , scroll top visibility, navbar visibility

---
## requirements and code 

**Sections links add to navbar dynamically**
```
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

```

In this code i first catch element from DOM then create a function `createNavLink(el)` to create section links then start the process of adding section links by looping throw all sections to create to each section link then append them to nav list 

**User can move between sections by using navbar**
```
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
```

In that code also start with catch elements i need from DOM then i depend in two functions function `resetStyle()` to reset style for elements that i chanege style then function `addNewStyle(ind)` to add new style it helps me to style certain section 
then i use all these functions to add that behavior to links when i click to it by using `addEventListener` then also used `scrollIntoView` to scroll to certain section
--
**Handle scroll event to indicate active section , scroll top visibility, navbar visibility**
```
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
```

In that code also is start with catch elemnts from DOM then create function `handleScroll()` to handle style of navbar during scroll then creat function `indicateActive()` to catch active section then create function `visibilityScrollTop()` to indicate when scroll top button visible during scroll then create function `visibilityNavbar()` to indicate when navbar visible during scroll then use these functions to add that behavior to window when scroll by `addEventListener`

also i add behavior to `scrollTopBtn` to scroll to the head of the page when user click to it 

---
