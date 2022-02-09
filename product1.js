$(document).ready(function(){
    var path ;
    $(".unity").mouseenter(function(){
        path = $(this).attr("src");
        $("#imagebox").attr("src", path);
    });
});