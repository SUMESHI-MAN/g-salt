//- 画像拡大処理
$('.article img').attr('data-action', 'zoom');

//- スライド時間設定
$(function () {
    setInterval("slideSwitch()", 5000);
});

//- スライドショー処理
function slideSwitch() {
    "use strict";
    
    var $active = $('#slideshow img.active');

    if ($active.length == 0) $active = $('#slideshow img:last');

    var $next = $active.next().length ? $active.next() : $('#slideshow img:first');

    $active.addClass('last-active');

    $next.css({
            opacity: 0.0
        })
        .addClass('active')
        .animate({
            opacity: 1.0
        }, 1000, function () {
            $active.removeClass('active last-active');
        });
}

//- タブ遷移
function ChangeTab(tabname) {
    "use strict";
    
    //- 該当画像をクリア
    document.getElementById('tab1').style.display = 'none';
    document.getElementById('tab2').style.display = 'none';
    document.getElementById('tab3').style.display = 'none';
    document.getElementById('tab4').style.display = 'none';
    document.getElementById('tab5').style.display = 'none';
    document.getElementById('tab6').style.display = 'none';
    document.getElementById('tab7').style.display = 'none';
    // 指定箇所のみ表示
    document.getElementById(tabname).style.display = 'block';
}

$(document).ready(function(){
        $(".recruit th").justify();
    });