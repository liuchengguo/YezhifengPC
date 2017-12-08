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

    // 案例详情
    var $caseDetailWrap = $('#case-detail-wrap');
    setCaseWrap();
    $(window).resize(function () {
        setCaseWrap()
    });
    function setCaseWrap() {
        var windowHeight = $(window).height();
        $caseDetailWrap.height(windowHeight - 158);
        $('#inner-content-div').slimScroll({
            height: windowHeight - 158 ,
            railVisible: true,
            alwaysVisible: true
        });
    }
    $('.ad-gallery').adGallery();
    $('.floor-footer').click(function () {
        $(this).toggleClass('open').siblings('.floor-body').stop(true, true).slideToggle();
    })

    $('.ad-disc-control').click(function () {
        $(this).closest('.ad-disc').toggleClass('open');
    })

});