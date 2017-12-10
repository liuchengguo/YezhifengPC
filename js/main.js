$(function () {
    //装修计算效果
    var $controlBar = $('#control-bar');
    var $fixedBarWrap = $('#fixed-bar-wrap');
    $controlBar.click(function () {
        var bottomVal = $fixedBarWrap.css('bottom');
        console.log(bottomVal === '-372px')
        if (bottomVal === '-372px') {
            $fixedBarWrap.stop(true, true).animate({'bottom': 0});
        } else {
            $fixedBarWrap.stop(true, true).animate({'bottom': '-372px'});
        }
    })
});