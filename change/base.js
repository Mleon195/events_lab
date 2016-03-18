console.log("Sanity Check: JS is working!");

$(document).ready(function(){

  $("#time").text( Date.now() );

  $("input.add").on("change", function handleChange(event){

   var left= parseInt($("input#left").val());
   var right = parseInt($("input#right").val());
   var total = left + right;
   $("#total").val(total).val();

 });

});
