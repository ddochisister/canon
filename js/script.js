$(function(){

    // 마이캐논

    $(".util_myca").hover(function(){
        $(".my").stop().slideDown();
    }, function(){
        $(".my").stop().slideUp();
    })//util_myca hover

    // 제품

    $(".gnb_p").hover(function(){
        $(".d_wrap").stop().slideDown();
    }, function(){
        $(".d_wrap").stop().slideUp();
    })//gnb_p hover

    // main_visual 영역

    $(".move").slick({
        autoplay:true,
        autoplaySpeed:3000,
        dots:true,
        arrows:false
    })
    $(".stop").click(function(){
        if( $(this).hasClass("on") == true){
            $(this).removeClass("on");
            $(".move").slick("slickPlay")
        }else{
            $(this).addClass("on");
            $(".move").slick("slickPause");
        }
    })//

    $(".photo").slick({
        autoplay:true,
        autoplaySpeed:2000,
        dots:true,
        arrows:false
    })

    $(".banner").slick({
        autoplay:true,
        autoplaySpeed:2000,
        dots:true,
        arrows:false
    })
    $(".b_stop").click(function(){
        if($(this).hasClass("on")==true){
            $(this).removeClass("on");
            $(".banner").slick("slickPlay")
        }else{
            $(this).addClass("on");
            $(".banner").slick("slickPause")
        }
    })

    $(".viewer").slick({
        autoplay:true,
        autoplaySpeed:2000,
        dots:true,
        arrows:false
    })
    $(".v_stop").click(function(){
        if($(this).hasClass("on")==true){
            $(this).removeClass("on");
            $(".viewer").slick("slickPlay")
        }else{
            $(this).addClass("on");
            $(".viewer").slick("slickPause")
        }
    })

    $(".store").slick({
        autoplay:false,
        slidesToShow:2,
        slidesToScroll:2,
        arrows:false,
        dots:true
    })
    $(".e_store_play").click(function(){
        if($(this).hasClass("on")==true){
            $(this).removeClass("on");
            $(".store").slick("slickPause")
        }else{
            $(this).addClass("on");
            $(".store").slick("slickPlay")
        }
    })

    $(".notice").slick({
        autoplay:true,
        autoplaySpeed:2000,
        vertical:true,
        arrows:true,
        dots:false
    })

    $(".m4_stop").click(function(){
        if($(this).hasClass("on")==true){
            $(this).removeClass("on");
            $(".notice").slick("slickPlay")
        }else{
            $(this).addClass("on");
            $(".notice").slick("slickPause")
        }
    })






})//jquery