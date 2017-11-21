
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
>>>>>>> c01460243140f0a81d96bbce33135e8c8abeab04
