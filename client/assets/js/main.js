document.addEventListener("scroll", function myScroll() {
    let headerNav = document.querySelector(".myNavbar");
    let logo1 = document.querySelector(".logo1");
    let logo2 = document.querySelector(".logo2");
    let hamburger_button = document.querySelector(".col-sm-2>button>i")
    if (document.documentElement.scrollTop > 70) {
        headerNav.classList.add("active-header");
        headerNav.classList.remove("container");
        logo1.classList.add("d-none");
        logo2.classList.remove("d-none");
        hamburger_button.style.color = "white"
        for (var a of document.querySelectorAll(".collapse ul li a,.collapse ul li>span>i")) {
            a.classList.add("collapse-text-white")
        }
    }
    else {
        headerNav.classList.remove("active-header");
        headerNav.classList.add("container");
        logo2.classList.add("d-none");
        logo1.classList.remove("d-none");
        hamburger_button.style.color = "black"
        for (var a of document.querySelectorAll(".collapse ul li a,.collapse ul li>span>i")) {
            a.classList.remove("collapse-text-white")
        }
    }
})

var swiper = new Swiper(".mySwiper", {
    loop: true,
    breakpoints: {
        0: {
            slidesPerView: 1,
            spaceBetween: 30
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 30
        },
        991: {
            slidesPerView: 3,
            spaceBetween: 30
        },
        1200: {
            slidesPerView: 3,
            spaceBetween: 50
        }
    },
    autoplay: {
        delay: 1500,
        disableOnInteraction: false,
    }
});
let tabMenus = document.querySelectorAll(".tab-menu li");
let contents = document.querySelectorAll(".myContent>div");
for (var tabMenu of tabMenus) {
    tabMenu.addEventListener("click", function () {
        changeActive(this);
        var dataId = this.getAttribute("data-id");
        for (var content of contents) {
            content.classList.remove("active");
        }
        for (var content of contents) {
            if (content.getAttribute("data-number") == dataId) {
                content.classList.add("active");
            } else if (dataId == "1") {
                content.classList.add("active");
            }
        }
    });
}
function changeActive(list) {
    for (var x of tabMenus) {
        x.classList.remove("active");
    }
    list.classList.add("active");
}
for(let x of document.querySelectorAll(".fa-magnifying-glass")){
    x.addEventListener("click", ()=>{
    document.querySelector(".myModal").classList.add("d-modal2")
    document.querySelector(".myModal").classList.remove("d-modal1")
})
}
document.querySelector(".fa-xmark").addEventListener("click", ()=>{
    document.querySelector(".myModal").classList.add("d-modal1")
    document.querySelector(".myModal").classList.remove("d-modal2")
})