$(function () {
  $("button").click(function () {
    const value = $("#listItem").val();
    $("<div class='mt-2 p-2 bg-white rounded shadow'>" + value + "</div>").insertAfter("#listItem");
  });
});
