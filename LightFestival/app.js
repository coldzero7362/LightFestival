window.onload = function(){
    $('.gallery').hide();
    $('.menu ul li').hover(function(){
        $(this).children('ul').stop().slideDown();
    },
        function(){
            $(this).children('ul').stop().slideUp();
        }
    );

    setInterval(function () {
        $('.slide>ul>li:first-child').fadeOut().next().fadeIn().end(1000).appendTo('.slide>ul');
    }, 3000);

    $('.newsTab').click(function(){
        $(this).css({
            'background-color': '#84d2ff'
        });
        $('.galleryTab').css({
            'background-color': '#70a6c5'
        });
        $('.news').show();
        $('.gallery').hide();
    });

    $('.galleryTab').click(function(){
        $(this).css({
            'background-color': '#84d2ff'
        });
        $('.newsTab').css({
            'background-color': '#70a6c5'
        });
        $('.gallery').show();
        $('.news').hide();
    });
}