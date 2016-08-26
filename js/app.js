/**
 * Created by majing on 2016/3/3.
 */

/**
 * main
 */
$(function () {
    $(document).ScrollInfinite();

    for(var i= 0; i<=30; i++){
        $('.appList .wrap').find('ul').append('<li class="animated fadeInUp">\
            <div class="appitem">\
            <div class="appimg">\
            <a href="#">\
            <img src="http://a2.mzstatic.com/us/r30/Purple49/v4/34/e0/ce/34e0ced0-117c-50d2-cae9-6ce7b896763a/icon190x190.jpeg" alt=""/>\
            </a></div>\
        <div class="right">\
            <p class="title">1.部落冲突:皇室战争(Cl...</p>\
            <p>Supercell</p>\
            <p>游戏<span>1</span>名</p>\
        </div>\
        </div>\
        </li>');
    }
    //图片lazy加载
    $("img.lazy").lazyload({
        effect : "fadeIn"
    });

    $(document).on('click','.box', function () {
        $('.selectItem').removeClass('open');
        $(this).closest('.selectItem').addClass('open');
    }).on('click', function (e) {
        if($(e.target).parents(".selectItem").length == 0) {
            $('.selectItem').removeClass('open');
        }
    });
})