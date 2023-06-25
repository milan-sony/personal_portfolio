// change title when tab changes
let docTitle = document.title;
window.addEventListener("blur", () =>{
    document.title = "Milan Sony 🛸";
})
window.addEventListener("focus", () =>{
    document.title = docTitle;
})

// preloader
window.onload=function(){
    document.getElementById("loader").style.display="none";
    document.getElementById("content").style.display="block";
};

// dark theme
let themeIcon = document.getElementById("theme-icon");
function darkMode(){
    let setTheme = document.body;
    setTheme.classList.toggle("dark-theme");
    let theme;
    if(setTheme.classList.contains("dark-theme")){
        theme = "dark";
        themeIcon.innerHTML = "🌙";
    }
    else{
        theme = "light";
        themeIcon.innerHTML = "☀️";
    }
    // save data to local storge
    localStorage.setItem("theme", JSON.stringify(theme));
}
// get data from local storage
let getTheme = JSON.parse(localStorage.getItem("theme"));
if(getTheme == "dark"){
    document.body.classList = "dark-theme";
    themeIcon.innerHTML = "🌙";
}
else{
    themeIcon.innerHTML = "☀️";
}

// custom mouse
let cursor = document.querySelector('.cursor');
document.addEventListener('mousemove', e => {
    cursor.setAttribute("style", "top: " + (e.pageY - 10) + "px; left: " + (e.pageX - 10) + "px;")
});

document.addEventListener('click', e => {
    cursor.classList.add("expand");
    setTimeout(() => {
        cursor.classList.remove("expand");
    }, 500);
});

// mouse click sound
let soundPath = "./assets/arcade.wav";
let audio = new Audio(soundPath);
function playSound() {
    audio.play();
}
document.addEventListener("click", playSound);

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

// marquee elements
let copy = document.querySelector(".marquee-items").cloneNode(true);
document.querySelector(".marquee").appendChild(copy);

// today's day
let toDaySpan = document.getElementById("today");
let todayObj = new Date();
let dayNumber = todayObj.getDay();
let daylist = ["Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"];
let day = daylist[dayNumber]+".";
toDaySpan.innerHTML = day;