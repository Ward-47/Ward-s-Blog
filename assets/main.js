let toggle =  document.querySelector("#header .toggle-button");
let collapse =document.querySelectorAll("#header .collapse"); // This is for all the query selector clasees in the html file

toggle.addEventListener('click', function(){
    collapse.forEach(col => col.classList.toggle("collapse-toggle")) 
})

// With Masonry
new Masonry("#posts .grid", {
    ItemSelector: '.grid-item', 
    gutter: 20
});

// swiper library initialization
new Swiper('.swiper-container',{
    direction: 'horizontal', 
    loop: true, 
    slidesPerView: 5, 
    autoplay: {
        delay: 3000
    }, 
    // responsive breakpoints (This will prevent the images from getting cluttered up on the webpage when adjusting the size of the window of your search engine)
    breakpoints: {
        '@0' : {
            slidesPerView: 2
        }, 
        // if greater than 888px
        '@1.00': {
            slidesPerView: 3
        },
        // if greater than 1110px
        '@1.25': {
            slidesPerView: 4
        },
        // if greater than 1330px
        '@1.50': {
            slidesPerView: 5
        }
    }
})

// Makes the header stick while user scrolls the webpage 
window.onscroll = function(){ myFunction()};

// Get the current value
let navbar = document.getElementById("header");

// Get the navbar position
let sticky = navbar.offsetTop;

// Sticky function
function myFunction(){
    // works when user scrolls down 
    if(window.pageYOffset >= sticky){
        navbar.classList.add("sticky");
    }
    // works when user scrolls up
    else{
        navbar.classList.remove("sticky");
    }
}