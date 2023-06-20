// change title when tab changes
let docTitle = document.title;
window.addEventListener("blur", () =>{
    document.title = "Milan Sony 🛸";
})
window.addEventListener("focus", () =>{
    document.title = docTitle;
})

// scroll to top btn
let ScrollToTop = document.querySelector(".scroll-btn");
window.addEventListener("scroll", () =>{
    if(window.scrollY > 100){
        ScrollToTop.style.display = "flex";
    }else{
        ScrollToTop.style.display = "none";
    }
})

// more info
let moreInfoItem = document.querySelector(".more-info-items");
let display = 0;
function moreInfo(){
    if(display == 0){
        moreInfoItem.style.display = "block";
        display = 1 ;
    }
    else{
        moreInfoItem.style.display = "none";
        display = 0;
    }
}

// custom mouse
const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', e => {
    cursor.setAttribute("style", "top: " + (e.pageY - 10) + "px; left: " + (e.pageX - 10) + "px;")
});

document.addEventListener('click', e => {
    cursor.classList.add("expand");
    setTimeout(() => {
        cursor.classList.remove("expand");
    }, 500);
});