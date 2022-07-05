window.addEventListener("scroll", function(){
    var nav = document.querySelector("nav");
    nav.classList.toggle("sticky", window.scrollY > 0)
    console.log("hello")
});
// let annim = document.querySelector('.annim')
// window.setInterval(function(){
//     annim.classList.toggle('annim_color')
// },3000);
// var btn =  document.querySelector('.btn_annim')
// window.setInterval(function(){
//     btn.classList.toggle('annim_btn')
    
// },1000)

let humb = document.querySelector(".humb")
let navigation = document.querySelector(".menu-mob")

humb.addEventListener('click', animNav)
navigation.addEventListener('click', animNav)

function animNav(){
    humb.classList.toggle('is-active')
    navigation.classList.toggle('is-active')
    console.log('okay')
}
// window.addEventListener("scroll", function(){
//     var activity = document.querySelector(".Apro");
//     console.log('hello!')
//     activity.classList.toggle("sticky", window.scrollY > 0)
// });
// ANIMATION 
// var humb = document.querySelector('.humb');
// var navig = document.querySelector(".Navbar");
// humb.addEventListener('click', menubar());
// navig.addEventListener('click', menubar());
// function menubar(){
//     humb.classList.toggle('is-active');
//     navig.classList.toggle('is-active');
// }



// const home =  document.querySelector(".content")
// const tl = new TimelineMax();
// tl.fromTo(
//     home,1, 
//     {height: "0%"}, 
//     {height: '100%', ease: Power2.easeInOut}
// ).fromTo(
//     home,1.2, 
//     {width: "100%"}, 
//     {width: '80%', ease: Power2.easeInOut}
// )


// .fromTo(
//     slider,1.2,
//     {x:'-100%'},
//     {x: '0%', ease: Power2.easeInOut},
//     "-=1.2"
// )

const slider = document.querySelectorAll(".slider");
// const comment = document.querySelectorAll(".Comment");
let currentImg = 0;

slider[currentImg].style.display = "block";
// comment[currentImg].style.display = "block";
setInterval(NextImg, 3000);
// setInterval(NextComment, 3000);
// function NextComment(){
    
    // comment[currentImg].style.display = "none";    
    // currentImg = (currentImg + 1) % comment.length;    
    // comment[currentImg].style.display = "block";
// }
function NextImg(){
    slider[currentImg].style.zIndex = -2;
    const timeCounter = currentImg;
    setTimeout (() =>{
        slider[currentImg].style.opacity = 0;
    }, 2000);
    currentImg = (currentImg + 1) % slider.length;
    slider[currentImg].style.opacity = 1;
    slider[currentImg].style.zIndex = -1;
    console.log("alert");

    

}