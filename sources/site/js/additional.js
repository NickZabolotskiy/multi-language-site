$(document).ready(function(){
    $(".bhide").click(function(){
        $(".hideObj").slideDown();
        $(this).hide(); //.attr()
        return false;
    });
    $(".bhide2").click(function(){
        $(".container.hideObj2").slideDown();
        $(this).hide(); // .attr()
        return false;
    });

    $('.heart').mouseover(function(){
        $(this).find('i').removeClass('fa-heart-o').addClass('fa-heart');
    }).mouseout(function(){
        $(this).find('i').removeClass('fa-heart').addClass('fa-heart-o');
    });

    function sdf_FTS(_number,_decimal,_separator)
    {
        var decimal=(typeof(_decimal)!='undefined')?_decimal:2;
        var separator=(typeof(_separator)!='undefined')?_separator:'';
        var r=parseFloat(_number)
        var exp10=Math.pow(10,decimal);
        r=Math.round(r*exp10)/exp10;
        rr=Number(r).toFixed(decimal).toString().split('.');
        b=rr[0].replace(/(\d{1,3}(?=(\d{3})+(?:\.\d|\b)))/g,"\$1"+separator);
        r=(rr[1]?b+'.'+rr[1]:b);

        return r;
    }

    setTimeout(function(){
        $('#counter').text('0');
        $('#counter1').text('0');
        $('#counter2').text('0');
        setInterval(function(){

            var curval=parseInt($('#counter').text());
            var curval1=parseInt($('#counter1').text().replace(' ',''));
            var curval2=parseInt($('#counter2').text());
            if(curval<=17){
                $('#counter').text(curval+1+"%");
            }
            if(curval1<=25){
                $('#counter1').text(curval1+1+"%");
            }
            if(curval2<=29){
                $('#counter2').text(curval2+1+"%");
            }
        }, 2);

    }, 500);
});






jQuery(document).ready(function(){
    jQuery('#menu').slicknav();

});




$(document).ready(function(){

    var $menu = $("#menuF");

    $(window).scroll(function(){
        if ( $(this).scrollTop() > 100 && $menu.hasClass("default") ){
            $menu.fadeOut('fast',function(){
                $(this).removeClass("default")
                    .addClass("fixed transbg")
                    .fadeIn('fast');
            });
        } else if($(this).scrollTop() <= 100 && $menu.hasClass("fixed")) {
            $menu.fadeOut('fast',function(){
                $(this).removeClass("fixed transbg")
                    .addClass("default")
                    .fadeIn('fast');
            });
        }
    });
});
//jQuery





/*menu*/
function calculateScroll() {
    var contentTop      =   [];
    var contentBottom   =   [];
    var winTop      =   $(window).scrollTop();
    var rangeTop    =   200;
    var rangeBottom =   500;

    $.each( contentTop, function(i){
        if ( winTop > contentTop[i] - rangeTop && winTop < contentBottom[i] - rangeBottom ){
            $('.navmenu li')
                .removeClass('active')
                .eq(i).addClass('active');
        }
    })
};

$(document).ready(function(){
    calculateScroll();
    $(window).scroll(function(event) {
        calculateScroll();
    });
    $('.navmenu ul li a').click(function() {
        $('html, body').animate({scrollTop: $(this.hash).offset().top - 80}, 800);
        return false;
    });
});








function showEx(ex) {
    document.getElementById('frameFerret').src = 'https://ferretvideo.com/frames/'+ex+'.html';
    document.getElementById("frameFerret").scrollIntoView(true);
}