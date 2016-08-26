/**
 * 元素上添加[act]属性，赋予元素特殊方法
 * @type {{init: Function, LinkFunc: Function}}
 * Created by majing on 2016/3/15.
 */

;(function(window, $, undefined) {
    "use strict";

    var getEls = $("[act]");

    function BlockAct(cfg) {
        var config = cfg || {};
        this.get = function(n) {
            return config[n];
        }
        this.set = function(n, v) {
            config[n] = v;
        }
        this.init();
    };

    /**
     * <element act="link"></element>
     * 功能和<a>标签的元素一样，实现页面链接跳转
     * @attribute href => {string} url
     * @attribute target => _blank|_parent|_self|_top
     * @param el
     */
    function LinkFunc(el){
        var gethref = el.attr('href');
        var gettarget = el.attr('target') != null ? el.attr('target') : null;
        el.on('click', function () {
            if(gettarget != null && gettarget == '_blank'){
                window.open(gethref);
            }else if(gettarget != null && gettarget == '_self'){
                window.location.href = gethref;
            }else if(gettarget != null && gettarget == '_parent'){
                window.parent.location.href = gethref;
            }else if(gettarget != null && gettarget == '_top'){
                window.top.location.href = gethref;
            }else{
                window.location.href = gethref;
            }
        })
    };

    BlockAct.prototype.init = function(){
        $.each(getEls, function (index, item) {
            if($(item).attr('act') == 'link'){
                LinkFunc($(item));
            }
        })
    };

    var obj = new BlockAct();
    obj.init();

})(window,jQuery);