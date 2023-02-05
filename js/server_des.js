$(function() {
    window.addEventListener('scroll', scroll)

function scroll() {
    const doc_height = $(document).height();
    const scroll_top = $(document).scrollTop();
    const window_height = $(window).height();
    if (scroll_top === 0) {
      $('.top-button').fadeIn(200)
      $('.bottom-button').fadeOut(200)
        $('.goyes-div').fadeOut(200)
    } else if (scroll_top + window_height >= doc_height) {
      $('.top-button').fadeOut(200)
      $('.bottom-button').fadeIn(200)
        $('.goyes-div').fadeIn(1000)
    }
}
    
    function yesgo() {
        if ($('#yesname').val()== '' || $('.yesgo').prop('checked')== true) {
            sever_block()
        }else {
            window.location.href = 'https://qm.qq.com/cgi-bin/qm/qr?k=BOwj6i_IUnFQ8abs6plPPvTevEpFwNDX&jump_from=webapi'
        }
    }
    
    $('.yesgo').click(function() {
        yesgo()
    })

})
function sever_block() {
        $('.go-div').fadeIn(300)
    }
    function gosever_del() {
        $('.go-div').fadeOut(200)
    }
    
    

    