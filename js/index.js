const ham = document.querySelector('.hamburger');
const item = document.querySelector('.menu-items');
const nav = document.getElementById('navbar');
const home = document.getElementById('home');
const service = document.getElementById('services-container');
const client = document.getElementById('client-section');
const contact = document.getElementById('contact');
const m = document.querySelector('.menu-items');
// nav.style.background = "red";
ham.addEventListener("click",()=>{
    item.classList.toggle("active");
    ham.classList.toggle("active");
    }
);

document.querySelectorAll(".item").forEach(n => n.addEventListener("click",()=>{
    setTimeout(() => {
        item.classList.toggle("active");
        ham.classList.toggle("active");
    },1100);

}));

window.onscroll = function () { 
    if (window.scrollY >= (home.offsetHeight)+(service.offsetHeight)+(client.offsetHeight)-200) {
        nav.removeAttribute("class");
        nav.classList.add("nav2");
        m.classList.remove("nav");
        m.classList.remove("nav1");
        m.classList.remove("nav2");
        m.classList.add("nav2");
        // myNav.classList.remove("nav-transparent");
    } 
    else if(window.scrollY >= (home.offsetHeight)+(service.offsetHeight)-100) {
        nav.removeAttribute("class");
        nav.classList.add("nav1");
           m.classList.remove("nav");
        m.classList.remove("nav1");
        m.classList.remove("nav2");
        m.classList.add("nav1");
    }
    // let h = (home.offsetHeight)+(service.offsetHeight)
    else if(window.scrollY >= home.offsetHeight-100) {
        nav.removeAttribute("class");
        nav.classList.add("nav");
        m.classList.remove("nav");
        m.classList.remove("nav1");
        m.classList.remove("nav2");
        m.classList.add("nav");
    }
    
    else{
        nav.removeAttribute("class");
        m.classList.remove("nav");
        m.classList.remove("nav1");
        m.classList.remove("nav2");
        m.classList.add("navd")
    }
};