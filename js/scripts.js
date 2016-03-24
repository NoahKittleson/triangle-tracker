$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();

    var triangleSide1 = parseInt($("#triangleSide1").val());
    var triangleSide2 = parseInt($("#triangleSide2").val());
    var triangleSide3 = parseInt($("#triangleSide3").val());

    if (!triangleSide1) {
      $(".result").text("no text in field 1");
    }
    else if (!triangleSide2) {
      $(".result").text("no text in field 2");
    }
    else if (!triangleSide3) {
      $(".result").text("no text in field 3");
    }

    else if(triangleSide1 <= 0 || triangleSide2 <= 0 || triangleSide3 <= 0) {
      $(".result").text("You entered bad input");
    }
    else if (triangleSide1 + triangleSide2 < triangleSide3 || triangleSide1 + triangleSide3 < triangleSide2 || triangleSide2 + triangleSide3 < triangleSide1)   {

      $(".result").text("Not a triangle");
    }
    else if (triangleSide1 === triangleSide2 && triangleSide2 === triangleSide3) {
      $(".result").text("Equilateral Triangle!");
    }
    else if (triangleSide1 === triangleSide2 || triangleSide2 === triangleSide3 || triangleSide3 === triangleSide1) {
      $(".result").text("Isosceles Triangle!");
    }
    else {
      $(".result").text("WE GOT A SCAELEENE");
    }
  });
});
