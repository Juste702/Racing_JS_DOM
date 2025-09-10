$(function () {
  $("p").hover(
    function () { $(this).addClass("blue"); },
    function () { $(this).removeClass("blue"); }
  );

  $("p").click(function () {
    $(this).toggleClass("highlighted");
  });
});
