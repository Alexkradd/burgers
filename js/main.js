
/*hamburger-active*/
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


//acco
$(function () {
    $('.team__name').on('click', e => {
        e.preventDefault()

    const $this = $(e.currentTarget);
    const container = $this.closest('.team__list');
    const item = $this.closest('.team__item');
    const items = $('.team__item', container);
    const content = $('.team__content', item);
    const otherContent = $('.team__content', container);
    const textBlock = $('.team__avatar', item);
    var reqHeight = textBlock.outerHeight();
    var windowSize = $(window).width();

    if (windowSize <= 768) {
        reqHeight = reqHeight+85;
        //alert(reqHeight);
    }


    //const reqHeight = '120px';
    //alert(reqHeight);
    if (!item.hasClass('team__item_active')) {

        $('.team__item').removeClass('team__item_active')
        item.addClass('team__item_active')

        $('.team__content').css({
            'height': 0
        })

        content.css({
            'height': reqHeight
        })

    } else {

        $('.team__item').removeClass('team__item_active');
        $('.team__content').css({
            'height' : 0
        })
    }

})
})
//acco-vertikal
$(function () {
    $('.menu-list__title').on('click', e => {
        e.preventDefault()

    const $this = $(e.currentTarget);
    const container = $this.closest('.menu__list');
    const item = $this.closest('.menu-list__item');
    const items = $('.menu-list__item', container);
    const content = $('.menu-list__descriptions', item);
    const otherContent = $('.menu-list__descriptions', container);
    const textBlock = $('.menu-list__text', item);
    var reqWidth = textBlock.outerWidth();



    //const reqHeight = '120px';
    //alert(reqHeight);
    if (!item.hasClass('menu-list__active')) {

        $('.menu-list__item').removeClass('menu-list__active')
        item.addClass('menu-list__active')

        $('.menu-list__descriptions').css({
            'widht': 0
        })

        content.css({
            'width': reqWidth
        })

    } else {

        $('.menu-list__item').removeClass('menu-list__active');
        $('.menu-list__descriptions').css({
            'width' : 0
        })
    }

})
})
//onepage-scroll
$(".wrapper").onepage_scroll({
    sectionContainer: "section",     // sectionContainer accepts any kind of selector in case you don't want to use section
    easing: "ease",                  // Easing options accepts the CSS3 easing animation such "ease", "linear", "ease-in",
                                     // "ease-out", "ease-in-out", or even cubic bezier value such as "cubic-bezier(0.175, 0.885, 0.420, 1.310)"
    animationTime: 1000,             // AnimationTime let you define how long each section takes to animate
    pagination: true,                // You can either show or hide the pagination. Toggle true for show, false for hide.
    updateURL: false,                // Toggle this true if you want the URL to be updated automatically when the user scroll to each page.
    beforeMove: function(index) {},  // This option accepts a callback function. The function will be called before the page moves.
    afterMove: function(index) {},   // This option accepts a callback function. The function will be called after the page moves.
    loop: false,                     // You can have the page loop back to the top/bottom when the user navigates at up/down on the first/last page.
    keyboard: true,                  // You can activate the keyboard controls
    responsiveFallback: false,        // You can fallback to normal page scroll by defining the width of the browser in which
    // you want the responsive fallback to be triggered. For example, set this to 600 and whenever
    // the browser's width is less than 600, the fallback will kick in.
    direction: "vertical"            // You can now define the direction of the One Page Scroll animation. Options available are "vertical" and "horizontal". The default value is "vertical".
});
//popup
$("[data-fancybox]").fancybox({
    // Options will go here
});
