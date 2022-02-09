$(document).ready(function (){
  $(".openbtn").click(function(){
    $("#mySidebar").css("width" ,"100%");
  });

  $(".closebtn").click(function(){
    $("#mySidebar").css("width" ,"0");
  });

  var flag = 0;
  slideshow(flag);
  $("#previous").click(function(){
    flag = flag - 1;
    slideshow(flag);
  });
  $("#next").click(function(){
    flag = flag + 1;
    slideshow(flag);
  });
  function slideshow(n){
    var slides = $(".slide")
    if (n == slides.length){
      flag = 0;
      n = 0;
    }
   if (n < 0){
     flag = slides.length - 1;
     n = slides.length -1;
   }
    for (y=0;y<slides.length;y++){
      $(".slide").eq(y).css("display", "none");
    }
    $(".slide").eq(n-1).css("display", "block");
    
   }
  
});
   