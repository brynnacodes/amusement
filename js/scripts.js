$(document).ready(function() {
  var height = parseInt(prompt("How tall are you in inches?"));

  if (height <= 20) {
    $(".mini").addClass("highlight");
  } else if (height > 20 && height < 60) {
    $(".short").addClass("highlight");
  } else {
    $(".tall").addClass("highlight");
  }
});


// if the height is less than or equal to 20 inches, then add .highlight to .mini
// if the height is more than 20 inches but less than 60 inches, add .hightlight to .short
// if the height is greater than or equal to 60 inches, add .highlight to .tall
