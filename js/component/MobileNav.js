/**
 * Mobile Nav事件
 * @type {{El: (*|jQuery|HTMLElement), templates: string, init: Function, InitTemplate: Function}}
 * Created by majing on 2016/3/16.
 */

;(function (window, $, undefined) {
    "use strict";
    var getNavEls = $('[MobileNavData]');
    var  templates = '<div class="mobile-slide-nav">\
<div class="slide-content animated slideInLeft">\
    <span class="header"><i class="fa fa-chevron-circle-left"></i></span>\
<ul class="nav">\
    </ul>\
    </div>\
    </div>';

    function MobileNav(cfg){
        var config = cfg || {};
        this.get = function(n) {
            return config[n];
        }
        this.set = function(n, v) {
            config[n] = v;
        }
        this.init();
    };

    // 添加MoblieNav模板
    function InitTemplate(){
        $('.mobile-slide-nav').height($(window).height());
        $(document).on('click','.fa-bars', function (e) {
            $('.mobile-slide-nav').addClass('open');
        }).on('click','.fa-chevron-circle-left', function (e) {
            $('.slide-content').addClass('slideOutLeft');
            setTimeout(function () {
                $('.slide-content').removeClass('slideOutLeft');
                $('.mobile-slide-nav').removeClass('open');
            },500);
        });
        var getClassName = getNavEls.attr('MobileNavData');
        var getNavHtml = getNavEls.closest('header').find('.'+getClassName).html();
        $('.mobile-slide-nav').find('ul').html(getNavHtml);
        NavFunc();
    };

    // Nav事件
    function NavFunc(){
        $('.mobile-slide-nav .dropdown').on('click','.clickdrop', function (e) {
            $('.mobile-slide-nav .dropdown').removeClass('active').find('.self').slideUp();
            $(this).closest('.dropdown').addClass('active').find('.self').slideDown();
        })
    };

    MobileNav.prototype.init = function () {
        console.log('start');
        if($('.mobile-slide-nav').length <= 0){
            $('body').append(templates);
        }
        InitTemplate();
    }

    var obj = new MobileNav();
    obj.init();

})(window,jQuery);