function changeNavBg(){
    var navId=document.getElementById("nav-bar");
    var scrollValue=window.scrollY;
    if(scrollValue>100){
        navId.classList.add("nav-bg");
    }
    else{
        navId.classList.remove("nav-bg");
    }
}

window.addEventListener('scroll',changeNavBg);