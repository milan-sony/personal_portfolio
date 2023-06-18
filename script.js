// scroll to top btn
const ScrollToTop = document.querySelector(".scroll-btn");
// const ScrollToTopActive = document.getElementsByClassName("scroll-btn-active");
window.addEventListener("scroll", () =>{
    if(window.scrollY > 100){
        ScrollToTop.style.display = "flex";
    }else{
        ScrollToTop.style.display = "none";
    }
})