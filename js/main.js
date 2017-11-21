
var hamburger = document.querySelector(".nav-hamburger");
var nav = document.querySelector(".nav");
console.log(hamburger);
hamburger.addEventListener("click", function(){
    if(hamburger.classList.contains("nav-hamburger_active")){
        hamburger.classList.remove("nav-hamburger_active");
        nav.classList.remove("nav_active");
    }else{
        hamburger.classList.add("nav-hamburger_active");
        nav.classList.add("nav_active");
    }

});
