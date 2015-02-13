$(document).ready(function () {

$("body").on("click", ".btn-success", function(){
	   event.preventDefault();

   $(this).parents(".thumbnail").slideUp("fast")
 });

$("body").on("click", ".btn-danger", function(){
	   event.preventDefault();

   $(this).parents(".thumbnail").slideDown("fast")
 });


});