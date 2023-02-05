
    
$(function() {

    left = $('#left01')
    right = $('#right01')
    $('.inner,.arrow').hover(
        function() {
        left.css({'transform':'translateX(50px)','backgroundColor':'rgba(0, 0, 0, 0.7)'})
        right.css({'transform':'translateX(-50px)','backgroundColor':'rgba(0, 0, 0, 0.7)'})
    },
        function() {
        left.css({'transform':'translateX(-0px)','backgroundColor':'rgba(255,255,255)'})
        right.css({'transform':'translateX(0px)','backgroundColor':'rgba(255,255,255)'})
        }
    )
    
    
  
    function logotime() {
        logo1 = $('.img-divfont-01')
        logo2 = $('.img-divfont-02')
        logo3 = $('.gobutton')
        logo1.fadeIn(1000)
        logo2.fadeIn(1500)
        logo3.fadeIn(1100)
    }
    logotime()
    
    function logoin() {
        logo1 = $('.img-divfont-01')
        logo2 = $('.img-divfont-02')
        logo3 = $('.gobutton')
        logo1.fadeIn(300)
        logo2.fadeIn(350)
        logo3.fadeIn(350)
    }
    
    
    function logoout() {
        logo1 = $('.img-divfont-01')
        logo2 = $('.img-divfont-02')
        logo3 = $('.gobutton')
        logo1.css('display','none')
        logo2.css('display','none')
        logo3.css('display','none')
    }
  
  
  
// 图片切换时出现的样式-------------
    var cikgo = 0;
  $('#right01').click(function() {
      ++cikgo;
      if (cikgo >= 3) {
        cikgo = 0;
}
      // 计数器显示
      // $('.LAELIOA').html(cikgo)
      // 图片一字体特效
      if (cikgo == 0) {
          logoin()
      }else {
          logoout()
      }
      
      // 图片二字体特效
      if (cikgo == 1 || cikgo == -2) {
        time1()
        }else if (cikgo == 2 || cikgo == 0){
        time2out()
        }
      // 图片三字体特效
      if (cikgo == 2 || cikgo == -1) {
          time3()
      }else  if (cikgo == 0 || cikgo == -2 || cikgo == 1){
          time3out()
      }

})
  $('#left01').click(function() {
      --cikgo;
      if (cikgo <= -3) {
          cikgo = 0;
      }
      // 计数器显示
      // $('.LAELIOA').html(cikgo)
      // 图片一字体特效
      if (cikgo == 0) {
          logoin()
      }else {
          logoout()
      }
      
      // 图片二字体特效
      if (cikgo == -2 || cikgo == 1) {
        time1()
        }else if(cikgo == -1 || cikgo == -2 || cikgo == 0 ){
        time2out()
        }
        
      // 图片三字体特效
      if (cikgo == -1 || cikgo == 2) {
          time3()
      }else if (cikgo == 0 || cikgo == -2 || cikgo == 1){
          time3out()
      }
      
  })
    
    
    function time1() {
        $('#font1').fadeIn(300)
        $('#font2').fadeIn(300)
        $('#font1').css('transform','translateX(500px)')
        $('#font2').css('transform','translateX(-500px)')
        $('.gobutton1').css('transform','translateY(-200px)')
    }
    function time2out() {
        $('#font1').css('display','none')
        $('#font2').css('display','none')
        $('#font1').css('transform','translateX(-500px)')
        $('#font2').css('transform','translateX(500px)')
        $('.gobutton1').css('transform','translateY(200px)')
    }

    
    
    
    function time3() {
        $('#font3').fadeIn(300)
        $('#font4').fadeIn(2200)
        $('#font3').css('transform','translateY(300px)')
        $('.gobutton2').css('transform','translateY(-200px)')
        
    }
    function time3out() {
        $('#font3').css('display','none')
        $('#font4').css('display','none')
        $('#font3').css('transform','translateY(-300px)')
        $('.gobutton2').css('transform','translateY(200px)')
        
    }
    
    

    

  

// 图片切换组件-----------------------------自动切换停用
window.onload = function () {
  var img = document.querySelectorAll(".img");
  var left = document.querySelector(".left");
  var right = document.querySelector(".right");
  var buttons = document.querySelectorAll("p");

  //设置一个数组，用来存id
  idArr = ["first", "second", "right"];

  //设置一个变量用来当图片的索引
  var index = 0;

  initialize();

  //图片轮播
  var timer = setInterval(next, 200);
  clearInterval(timer);//停用轮播------------------------

  //绑定点击事件
  left.addEventListener("click", prev);

  left.addEventListener("mouseover", () => {
    clearInterval(timer);
    timer = null;
  });

  left.addEventListener("mouseout", () => {
    timer = setInterval(next, 200);
    clearInterval(timer);//停用轮播------------------------
  });

  right.addEventListener("click", next);
  right.addEventListener("mouseover", () => {
    clearInterval(timer);
    timer = null;
  });
  right.addEventListener("mouseout", () => {
    timer = setInterval(next, 200);
    clearInterval(timer);//停用轮播------------------------
  });

  //给小方块添加点击事件
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("mousedown", () => {
      //在用户点击的时候关闭定时器
      clearInterval(timer);
      timer = null;

      if (index > i) {
        let x = index - i;
        while (x--) {
          prev();
        }
      } else if (index < i) {
        let x = i - index;
        while (x--) {
          next();
        }
      }
    });
  }

  //创建切换图片的函数
  function prev() {
    idArr.push(idArr.shift());
    initialize();
    if (index === 0) {
      index = buttons.length - 1;
    } else {
      index--;
    }
    clearColor();
  }
  function next() {

    idArr.unshift(idArr.pop());
    initialize();
    if (index === buttons.length - 1) {
      index = 0;
    } else {
      index++;
    }
    clearColor();
  }

  function initialize() {
    for (let i = 0; i < img.length; i++) {
      img[i].id = idArr[i];
    }
  }
};

		function scrollFunc(e) {
            var e = e || window.event;
            // $('.LAELIOA').html(e.wheelDelta)
            var a = e.wheelDelta;
            var b = false;
            if (a > 0 ) {
                b = false;
            }else if  (a < 0 ){
                b = true;
            }
            if (b == false) {

            }
            if (b == true) {

            }
            // console.log(b)
        }
        
        
    
        function topcolor() {
            $('.HeaderImg').css('borderBottom','1px #4b9bff solid')
            
            
        }
        function topcolorout() {
            $('.HeaderImg').css('borderBottom','1px #4b9bff ')
        }

        
        function mousewheel() {
            var scroll_events = "mousewheel DOMMouseScroll MozMousePixelScroll";  // 滚动事件
	$(document).on(scroll_events, function(e) {
		var delta = e.originalEvent.wheelDelta;
		// 滑轮向上滚动
		if(delta > 0) {

            $("html,body").animate({scrollTop: '-901px'}, 300);
                topcolorout()
            help1_div.fadeOut(100)
		}
		// 滑轮向下滚动
		else {
			$("html,body").animate({ scrollTop: '901px' }, 300);
                topcolor()
		}
	});
        }
	
    mousewheel()



    var imgnmber = 1;
    $('.nextimg').click(function() {
        // $('.box1').css('background-image','url(img/2022-10-07_21.22.25.png)')
        imgnext()
    })
    function imgnext() {
        ++imgnmber;
        switch (imgnmber) {
            case 1:
                $('.box1').css('background-image', 'url(img/2022-11-23_12.48.34.png)')
                $('.box1-div').html('LAELIOA & 神社后庭')
                break;
            case 2 :
                $('.box1').css('background-image', 'url(img/2022-10-07_21.22.25.png)')
                $('.box1-div').html('LAELIOA & 茶馆小路')
                break;
            case 3 :
                $('.box1').css('background-image', 'url(img/2022-11-23_12.50.07.png)')
                $('.box1-div').html('LAELIOA & 鸟居')
                break;
            case 4 :
                $('.box1').css('background-image', 'url(img/00001.png)')
                $('.box1-div').html('LAELIOA & 田间小路')
                break;
            case 5 :
                $('.box1').css('background-image', 'url(img/00002.png)')
                $('.box1-div').html('LAELIOA & 种田')
                imgnmber = 0;
                return;
                break;
        }
    }
    var next = setInterval(imgnext,7000);
    $('.box1').hover(
        function() {
            clearInterval(next)
        },
        function() {
            next = setInterval(imgnext,7000);
        }
        )
   
    
    var sehelp = $('.sehelp')
    var help1 = $('#help1')
    var help2 = $('#help2')
    var help3 = $('#help3')
    var help1_div = $('.help1-div')
    sehelp.mousedown(
        function() {
            $(this).css('transform','scale3d(0.97,0.97,0.97)')
        }).mouseup(function() {
            $(this).css('transform','scale3d(1,1,1)')
        }).mouseout(function() {
            $(this).css('transform','scale3d(1,1,1)')
        })
    
    help1.click(function() {
        help1_div.fadeIn(100)
    })
    
    $('#help1-del').click(function() {
        help1_div.fadeOut(100)
    })
    
    var help1_1 = $('#help1-1')
    var help1_2 = $('#help1-2')
    var help1_3 = $('#help1-3')
    var help1_4 = $('#help1-4')
    var help1_5 = $('#help1-5')
    
    help1_1.addClass('js-help1-help-hover')
    
    help1_1.click(function() {
        helpaddClass()
        $('#help1-2,#help1-3,#help1-4,#help1-5').removeClass('js-help1-help-hover')
        $('#help1-1-1').css('display','block')
        $('#help1-1-2,#help1-1-3,#help1-1-4,#help1-1-5').css('display','none')
    })
    help1_2.click(function() {
        helpaddClass()
        $('#help1-1,#help1-3,#help1-4,#help1-5').removeClass('js-help1-help-hover')
        $('#help1-1-2').css('display','block')
        $('#help1-1-1,#help1-1-3,#help1-1-4,#help1-1-5').css('display','none')
    })
    help1_3.click(function() {
        helpaddClass()
        $('#help1-1,#help1-2,#help1-4,#help1-5').removeClass('js-help1-help-hover')
        $('#help1-1-3').css('display','block')
        $('#help1-1-1,#help1-1-2,#help1-1-4,#help1-1-5').css('display','none')
    })
    help1_4.click(function() {
        helpaddClass()
        $('#help1-1,#help1-2,#help1-3,#help1-5').removeClass('js-help1-help-hover')
        $('#help1-1-4').css('display','block')
        $('#help1-1-1,#help1-1-2,#help1-1-3,#help1-1-5').css('display','none')
    })
    help1_5.click(function() {
        helpaddClass()
        $('#help1-1,#help1-2,#help1-3,#help1-4').removeClass('js-help1-help-hover')
        $('#help1-1-5').css('display','block')
        $('#help1-1-1,#help1-1-2,#help1-1-3,#help1-1-4').css('display','none')
    })
    
    function helpaddClass() {
        $(this).addClass('js-help1-help-hover')
    }
    
    $('#help2').click(function() {
        alert('白名单功能关闭')
    })
    


    
    
    
    
    
})
  function sever_block() {
        $('.go-div').fadeIn(300)
    }
    function gosever_del() {
        $('.go-div').fadeOut(200)
    }
