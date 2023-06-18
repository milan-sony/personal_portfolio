// change title when tab changes

let docTitle = document.title;
window.addEventListener("blur", () =>{
    document.title = "Milan Sony 🛸";
})
window.addEventListener("focus", () =>{
    document.title = docTitle;
})

// scroll to top btn
const ScrollToTop = document.querySelector(".scroll-btn");
window.addEventListener("scroll", () =>{
    if(window.scrollY > 100){
        ScrollToTop.style.display = "flex";
    }else{
        ScrollToTop.style.display = "none";
    }
})