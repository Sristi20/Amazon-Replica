$(document).ready(function(){

  $("#suits").mouseenter(function(){
      $("#suits .dropdown-menu").css("display","inline-flex");
  });
  $("#suits").mouseleave(function(){
      $("#suits .dropdown-menu").css("display","none");
  });

  $("#new").mouseenter(function(){
      $("#new .dropdown-menu").css("display","inline-flex");
  });
  $("#new").mouseleave(function(){
      $("#new .dropdown-menu").css("display","none");
  });

  $("#shirts").mouseenter(function(){
      $("#shirts .dropdown-menu").css("display","inline-flex");
  });
  $("#shirts").mouseleave(function(){
      $("#shirts .dropdown-menu").css("display","none");
  });

  $("#pants").mouseenter(function(){
      $("#pants .dropdown-menu").css("display","inline-flex");
  });
  $("#pants").mouseleave(function(){
      $("#pants .dropdown-menu").css("display","none");
  });


  $("#blazers").mouseenter(function(){
      $("#blazers .dropdown-menu").css("display","inline-flex");
  });
  $("#blazers").mouseleave(function(){
      $("#blazers .dropdown-menu").css("display","none");
  });


  $("#casual").mouseenter(function(){
      $("#casual .dropdown-menu").css("display","inline-flex");
  });
  $("#casual").mouseleave(function(){
      $("#casual .dropdown-menu").css("display","none");
  });

  $("#outwear").mouseenter(function(){
      $("#outwear .dropdown-menu").css("display","inline-flex");
  });
  $("#outwear").mouseleave(function(){
      $("#outwear .dropdown-menu").css("display","none");
  });


  $(".button").mouseenter(function(){
      $(".button").css({"background-color":"#FFFFFF","color":"black"})
  });

  $(".button").mouseleave(function(){
      $(".button").css({"background-color":"#021528","color":"#FFFFFF"})
  });

  $("#appointment").mouseenter(function(){
      $("#appointment").css({"background-color":"#FFFFFF","color":"black"})
  });

  $("#appointment").mouseleave(function(){
      $("#appointment").css({"background-color":"rgb(0,0,0)","color":"white"})
  });

});