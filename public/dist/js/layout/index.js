// function isMobile() {

//     try {
//         document.createEvent("TouchEvent");
//         return true;
//     } catch (e) {
//         return false;
//     }

// }
// if (isMobile()) {
//     console.log("此為行動裝置");
// } else {
//     console.log("非行動裝置");
// }

// $(document).on('click', 'a[href^="#"]', function (event) {
//     event.preventDefault();
//     $('html, body').animate({
//         scrollTop: $($.attr(this, 'href')).offset().top
//     }, 500);
// });

// var once = false;
// var num;
// var dd = new Date()
// function FBDialog() {
//     var ALL_LINK = encodeURIComponent(SHAREURL);
//     window.location.href = 'https://www.facebook.com/dialog/share?app_id=681263942511761&href=' + encodeURIComponent(SHAREURL) + "&hashtag=%23幫寶適聯名巧虎雙11全年最低價&redirect_uri=" + ALL_LINK + "&t=" + dd.getTime();
//     // window.location.href = 'https://www.facebook.com/dialog/share?app_id=681263942511761&href=' + encodeURIComponent(SHAREURL) + "&hashtag=%23測試測試測試&redirect_uri=" + ALL_LINK + "&t=" + dd.getTime();
// }

// function anim() {
//     TweenMax.fromTo($(".gift"), 2, { xPercent: 120 }, {
//         xPercent: 262, ease: Power3.easeInOut, onComplete: function () {
//             // TweenMax.to($(".gift__box"), 0.3, { xPercent: 50, yPercent: -90, rotation: 45 })
//             TweenMax.to($(".gift__pic"), 0.4, { scale: 1 })
//             TweenMax.to($(".gift__back"), 0.4, {
//                 opacity: 1, scale: 1, onComplete: function () {
//                     setTimeout(() => {
//                         // TweenMax.to($(".gift__box"), 0.3, { xPercent: 00, yPercent: -5, rotation: 0 })
//                         TweenMax.to($(".gift__pic"), 0.4, { scale: 0 })
//                         TweenMax.to($(".gift__back"), 0.4, { opacity: 0, scale: 0 , onComplete: function() {
//                             TweenMax.to($(".gift"), 1, { xPercent:  400, ease: Power3.easeInOut, onComplete: function() {
//                                 anim()
//                             }})
//                         }})
//                     }, 2000)
//                 }
//             })
//         }
//     });
// }
// function arrowAnim() {
//     TweenMax.fromTo($(".arrow1"), 0.6, {xPercent: 400, opacity: 0}, {xPercent: -90, opacity: 1, ease: Power0.easeNone});
//     TweenMax.fromTo($(".arrow2"), 0.6, {xPercent: 400, opacity: 0}, {xPercent: -90, opacity: 1, delay: 0.15, ease: Power0.easeNone});
//     setTimeout(() => {
//         arrowAnim()
//     }, 750)
// }

// function addCount() {
//     $.ajax({
//         url: 'https://jnacorp.cc/app/count.php',
//         type: 'POST',
//         dataType: 'json',
//         success: function (d) {
//             // setTimeout(() => {
//             //     // window.location.href = "index.html";
//             // }, 1000)
//         },
//         error: function (e) {
//             // setTimeout(() => {
//             //     // window.location.href = "index.html";
//             // }, 1000)
//         }
//     }) 
// }

// function countRecord() {
//     $.ajax({
//         url: 'https://jnacorp.cc/app/get.php',
//         type: 'GET',
//         dataType: 'json',
//         success: function(d){
//             // console.log(d.data.count);
//             num = d.data.count;
//             if(num > 999999) {
//                 num = 999999;
//             }
//             $(".count span").html(num);
//         },
//         error: function(e){
//             console.log(e);
//         }
//     })
// }

// $(function () {
//     addCount()
//     countRecord()
//     anim()
//     arrowAnim()
//     TweenMax.to($(".kv__img"), 1, {rotation: 10, repeat: -1, yoyo: true})
//     $(".popup__close, .game__btn").click(function () {
//         $(".popup").fadeToggle();
//     });
//     $(".startGame").one("click", function () {
//         FBDialog();
//     });
// });

var menuAction = document.getElementById("menuToggle");
var menuList = document.getElementById("menuList");
var header = document.getElementById("style1");

var resizeState; // pc

function toggleAction() {
    menuAction.classList.toggle("menu--active");
    menuList.classList.toggle("header--hide");
    if (resizeState) {
        header.classList.toggle("fixed");
    }
}

function mobileState() {
    resizeState = false;
    menuAction.style.display = "block";
    menuList.classList.add("header--hide");
    header.classList.add("fixed");
}

function pcState() {
    resizeState = true;
    menuAction.style.display = "none";
    menuAction.classList.remove("menu--active");
    menuList.classList.remove("header--hide");
    header.classList.remove("fixed");
}

function menuResize() {
    if (document.documentElement.clientWidth <= 768) {
        mobileState()
    } else {
        pcState()
    }
}

function debounce(func) {
    var timer;
    return function (event) {
        if (timer) clearTimeout(timer);
        timer = setTimeout(func, 100, event);
    };
}

function init() {
    // resize
    window.addEventListener("resize", debounce(function () {
        menuResize();
    }));
    window.addEventListener('scroll', function (e) {
        if (document.documentElement.clientWidth <= 768) return false;
        if (this.scrollY > 100) {
            if (resizeState) {
                mobileState()
            }
        } else {
            if (!resizeState) {
                pcState()
            }
        }
    });

    // click
    menuAction.addEventListener('click', function () {
        toggleAction()
    })

    // consturctor
    menuResize()
}

init();