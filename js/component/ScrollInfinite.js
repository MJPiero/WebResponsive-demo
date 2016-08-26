/**
 * 滚动加载事件
 * @type {{distance: number, threshold: number, BackTopEl: string, init: Function, ClickFunc: Function}}
 * Created by majing on 2016/3/7.
 */
/**
 * 配置：
 * element.ScrollInfinite()
 */

;(function (window, $, undefined) {
    "use strict";

    var Default = {
        ShowBackToEl: true,
        //距顶部的距离
        distance: 200,
        threshold: 200,
        // 返回到顶部的元素按钮
        BackTopEl: '<div class="backtotop">\
<span class="TotopButton"><i class="fa fa-chevron-up"></i></span>\
</div>'
    };
    function ScrollInfinite(parm){
        var config = {};
        $.each(Default,function (key,item) {
            if(typeof parm[key] == "boolean"){
                if(parm[key] != item){
                    config[key] = parm[key];
                }
            }else{
                config[key] = parm[key] || item;
            }
        });
        this.get = function(n) {
            return config[n];
        }
        this.set = function(n, v) {
            config[n] = v;
        }
        this.init(parm);
    };
    ScrollInfinite.prototype = {
        init: function (el) {
            var _this = this;
            el.on('scroll', function(e){
                var getScrollTop = el.scrollTop();
                if(_this.get('ShowBackToEl') && getScrollTop >= _this.get('distance')){
                    if($('.backtotop').length <= 0){
                        $('body').append(_this.get('BackTopEl'));
                    }
                    _this.ClickFunc();
                }else{
                    $('.backtotop').remove();
                }
            })
        },
        ClickFunc: function(){
            $('.backtotop').on('click', function () {
                $('body').animate({scrollTop:0},500,'swing', function () {
                    $(this).stop(true,true);
                });
            })
        }
    };

    $.fn.ScrollInfinite = function(cfg){
        return this.each(function(){
            if(!this) return;
            var $this = $(this);
            var scrollinf = $this.data("scrollinf");
            if(!scrollinf) {
                var s = $.extend($this,cfg);
                scrollinf = new ScrollInfinite(s);
                $this.data("scrollinf", scrollinf);
            }
            if(typeof cfg === typeof "a") {
                scrollinf[cfg].apply(scrollinf, Array.prototype.slice.call(cfg, 1));
            }
        })
    }


})(window,jQuery)