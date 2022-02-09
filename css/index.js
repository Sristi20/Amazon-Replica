var flag = 0;
slideshow(flag);

function controler(x){
  flag = flag + x;
  slideshow(flag);
}

function slideshow(n){
 var slides = document.getElementsByClassName('slide');
 if (n == slides.length){
   flag = 0;
   n = 0;
 }
if (n < 0){
  flag = slides.length - 1;
  n = slides.length -1;
}
 for (let y of slides){
   y.style.display = "none"
 }
 slides[n].style.display = "block"
 
}
function openNav() {
  document.getElementById("mySidebar").style.width = "100%";
}

function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
}