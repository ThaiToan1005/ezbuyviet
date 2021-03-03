$(document).ready(function () {
  $('.slider-main ').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  });
  $('.slider-2 ').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 8000,
  });
  // Lấy thời gian đến ngàyngày
  var countDownDate = new Date("Jan 5, 2021 15:37:25").getTime();

  // Cập nhật count down vào thẻ html sau 1s
  var x = setInterval(function () {

    // Lấy thời gian hiện tại
    var now = new Date().getTime();

    // Tìm khoản cách thời điểm đếm đến thời gian hiện tại
    var distance = countDownDate - now;

    // Tính ra ngày giờ phút giây
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the element with id="demo"
    // document.getElementById("demo").innerHTML = days + "d " + hours + "h "
    // + minutes + "m " + seconds + "s ";

    $(".day").html(days);
    $(".hours").html(hours);
    $(".minutes").html(minutes);
    $(".seconds").html(seconds);

    // If the count down is finished, write some text
    if (distance < 0) {
      clearInterval(x);
      $(".countdown").html(" ");
    }
  }, 1000);

  $(".btn-menu-mobile").on("click", function(){
    $(".header-bottom").toggleClass("active")
  })
  $(".btn-MenuMain").on("click", function(){
    $(".dropdown").removeClass("open");
    $(this).parent().addClass("open");
  })
})


$(document).ready(function () {
var ValInput = $(".input_quantity").val();
$(".tru").on("click",function(){
  ValInput = parseInt(ValInput) - 1;
  $(".input_quantity").val(ValInput)
  if (ValInput == 0){
    $(".chonmua").addClass("open")
  }
})
$(".cong").on("click",function(){
  ValInput = parseInt(ValInput) + 1;
  $(".input_quantity").val(ValInput)
})
})

