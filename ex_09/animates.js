$(function () {
  $(".platypus").click(function () {
    $(this).animate({
      left: "+=150px",
      top: "+=200px"
    }, 800).css("background-color", "green");
  });
});