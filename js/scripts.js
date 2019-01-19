


$(document).ready(function() {

  $("#formOne").submit(function(event){

  var theName = $("input#name").val();
  var theColor = $("input#color").val();
  var theFood = $("input#food").val();
  var theNumber = $("input#number").val();

  var favorits = [theName, theColor, theFood, theNumber];
  var secondFavorits = [favorits[1],favorits[0],favorits[2]];
  var thirdFavorits = [];
  thirdFavorits.push(favorits[1],favorits[0],favorits[2]);

  $(".add").append("<li>" + thirdFavorits[0] + "</li>");
  $(".add").append("<li>" + thirdFavorits[1] + "</li>");
  $(".add").append("<li>" + thirdFavorits[2] + "</li>");

  


  event.preventDefault();
  });
});
