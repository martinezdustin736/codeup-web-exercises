$('dd').addClass("invisible");

$("#answer-btn").click(function (){
    $('.invisible').toggle()
});


$("dt").click(function(){
    $(this).addClass("highlight")
});


///////////traversing methods////////////////////////

// $("#bg-color").click(function(){
//     $('.yellow').css("background-color", 'yellow');
// });

$("#bg-color").click(function(){
    $('ul').each(function (){
        $(this).children().last().css("background", "yellow")
    })
});


// $('h3').click(function(){
//     $(this).next().css("font-weight", "bold");
// })

$('ul').click(function(){
    $(this).children().first().css('color', 'blue');
})


//bonus/////////////////
// <!--<div class="container">-->
//
// <!--    <div id="pic1" class="pic">-->
// <!--        <img src="img/big-bend-sign.jpeg">-->
// <!--    </div>-->
// <!--    <div id="pic2" class="pic">-->
// <!--        <img src="img/national-park.png">-->
// <!--    </div>-->
// <!--    <div id="pic3" class="pic">-->
// <!--        <img src="img/parks-collage.jpeg">-->
// <!--    </div>-->
// <!--</div>-->


///jQuery effects///////

$('.signup').click(function(){
   if($("div").hide()){
      setTimeout(function (){
          $('h2').fadeIn(3000);
      },5000);
   }
})

$("h3").click(function (){
    $("ul").fadeIn(1000);
})

$(".bold").click(function (){
    $(".bold-li").css("font-weight", "bold");
})
