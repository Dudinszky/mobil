$(document).ready(function(){
    $('.next').on('click', function(){
        var currentImg = $('.active');
        var nextImg = currentImg.next();

        if(nextImg.length){
            currentImg.removeClass('active').css('z-index', -10);
            nextImg.addClass('active').css('z-index', 10);
        }
    });

    $('.prev').on('click', function(){
        var currentImg = $('.active');
        var prevImg = currentImg.prev();

        if(prevImg.length){
            currentImg.removeClass('active').css('z-index', -10);
            prevImg.addClass('active').css('z-index', 10);
        }
    });
});

// SECOND

$(document).ready(function(){
    $('.other').on('click', function(){
        var currentP = $('.active');
        var nextP = currentP.other();

        if(nextP.length){
            currentP.removeClass('active').css('z-index', -10);
            nextP.addClass('active').css('z-index', 10);
        }
    });

    $('.previous').on('click', function(){
        var currentP = $('.active');
        var prevP = currentP.previous();

        if(prevP.length){
            currentP.removeClass('active').css('z-index', -10);
            prevP.addClass('active').css('z-index', 10);
        }
    });
});