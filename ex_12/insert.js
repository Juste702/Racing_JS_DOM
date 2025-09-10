$(function () {
  $("img:first").before("<p class='text-gray-700'>Wow, I precede the image!</p>");
  $("img:first").after("<p class='text-gray-700'>Hey, I come in last</p>");
});
