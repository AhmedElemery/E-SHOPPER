/* glogal $ , document , console */

$(function () {
   
    "use strict";
    
   
    //our slider third part
    
    function checkclients() {
        
            var leftarrow = $('.iconleft'),
                rightarrow = $('.iconright');
        
        if ($('.client:first').hasClass('active'))
            {
              
                leftarrow.fadeOut(0);
            }
        else
            {
                leftarrow.fadeIn(0);
            }
         if ($('.client:last').hasClass('active')) {
              
                rightarrow.fadeOut(0);
            }
        else
            {
                rightarrow.fadeIn(0);
            }
    }
    
       checkclients();
            
        //click on right arrow
        $('.fa-chevron-right').click(function () {
                     
                      
        
                
                      $('.details .active').fadeOut(1000,function(){
                       $(this).removeClass('active').next('.client').addClass('active').removeClass("hidden").fadeIn(1000);
                          
                          checkclients(); 
                       })


                       $('.images .active').fadeOut(1000,function(){   $(this).removeClass('active').next('.img1').addClass('active').removeClass("hidden").fadeIn(1000);
                                                                    
                         checkclients();
                                                                    
                        })     
                       
        })
           
         
        // click on left arrow
        
        $('.fa-chevron-left').click(function () {  
         
            $('.client.active').fadeOut(1000,function(){ $(this).removeClass('active').prev('.client').removeClass("hidden").addClass('active').fadeIn(1000);
                                                        
                 checkclients();
            })
            
            $('.images .img1.active').fadeOut(1000,function(){   $(this).removeClass('active').prev('.img1').removeClass("hidden").addClass('active').fadeIn(1000);
                    
                     checkclients();
                
                 })
        })    
        
        // mix it up
    
        
     $('#mymix').mixItUp();
     $(".shuufle li").click(function()
                        {
        $(this).addClass("selected").siblings().removeClass("selected");
    });
    //////////// slider in 8th part   ///////////////////////
    
    
     $('.exampleSlider').multislider();
     $('.exampleSlider').multislider({

  // endless scrolling

  continuous: false,
         
  // slide all visible slides, or just one at a time

  slideAll: false, 

  // autoplay interval

  // 0 or 'false' prevents auto-sliding
  interval: 2000,
         
  // duration of slide animation

  duration: 500,     

  // pause carousel on hover

  hoverPause: true,

  // pause above specified screen width

  pauseAbove: null,  
   
  // pause below specified screen width

  pauseBelow: null  
})
        
})