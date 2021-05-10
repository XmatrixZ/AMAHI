// function handleIndicator(el) {
//   items.forEach(function (item) {
//     item.classList.remove('active');
//       el.classList.add("active");
//   })};
// items.forEach(function (item) {
//   item.addEventListener("click", function (e) {
//     handleIndicator(e.target);
//   });
//   item.classList.contains("active") && handleIndicator(item);
// });
$(document).ready(function(){
   $("li").click(function () {
     console.log("click");
     // this removes the underline class from all other ".navigation" links.
     $(".navlink").removeClass("active1");

     // this makes the one that was clicked underlined
     $(this).addClass("active1");
   });
})