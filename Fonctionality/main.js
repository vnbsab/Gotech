window.addEventListener("scroll", function(){
    var nav = document.querySelector("nav");
    nav.classList.toggle("sticky", window.scrollY > 0)
});

// ANIMATION 
// var humb = document.querySelector('.humb');
// var navig = document.querySelector(".Navbar");
// humb.addEventListener('click', menubar());
// navig.addEventListener('click', menubar());
// function menubar(){
//     humb.classList.toggle('is-active');
//     navig.classList.toggle('is-active');
// }