var menu=document.getElementById("asidMenu");
var text =document.getElementsByClassName("text");
var barOpen=document.getElementById("omenu");
var barClose=document.getElementById("cmenu");
function openMenu(){
    menu.style.width="200px";
    menu.classList.add("col-5");
    menu.classList.add("col-sm-3");
    menu.classList.add("col-md-3");
    for(i=0;i<text.length;i++){
        text[i].style.marginLeft="5px";
    }
    barOpen.style.zIndex=0;
    barClose.style.zIndex=1;
  
}
function closeMenu(){
    menu.style.width="60px";
    menu.classList.replace("col-5","col-2");
    menu.classList.add("col-sm-3");
    menu.classList.add("col-md-3");
    for(i=0;i<text.length;i++){
        text[i].style.marginLeft="100px";
    }
    barClose.style.zIndex=0;
    barOpen.style.zIndex=1;
}
menu.addEventListener('mouseover',openMenu);
menu.addEventListener('mouseout',closeMenu);
barOpen.addEventListener('click',()=>{
    openMenu();
   
});
barClose.addEventListener('click',()=>{
    closeMenu();
});

var about=$("#about");
var article=$("#loadingPage")
  about.click(function () { 
      article.load("indexhtml/cv.html")
  });