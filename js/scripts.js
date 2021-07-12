$(document).ready(function(){
    $("#mycarousel").carousel( { interval: 2000 } );
    $("#carouselButton").click(function(){
    if ($("#carouselButton").children("span").hasClass('fa-pause')) {
        $("#mycarousel").carousel('pause');
        $("#carouselButton").children("span").removeClass('fa-pause');
        $("#carouselButton").children("span").addClass('fa-play');
    }
    else if ($("#carouselButton").children("span").hasClass('fa-play')){
        $("#mycarousel").carousel('cycle');
        $("#carouselButton").children("span").removeClass('fa-play');
        $("#carouselButton").children("span").addClass('fa-pause');                    
    }
    });
    $("#res").click(function(){
        $("#reserve").modal('show');
    });
    $("#log").click(function(){
        $("#loginModal").modal('show');
    });
    $(".cl").click(function(){
        $("#loginModal").modal('hide');
        $("#reserve").modal('hide');

    });
    $(".close").click(function(){
        $("#loginModal").modal('hide');
        $("#reserve").modal('hide');

    });
});

    

