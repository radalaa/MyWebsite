function HeightBackround(){
    height = $(window).height();
    $("#cover").css({
        'height': height
    })
}
function ShrinkNavbar(){
    var $window = $(window);
    $(window).scroll(function(){
         if($window.scrollTop() > 50){
                $("#navbar").removeClass('full');
                $("#navbar").addClass('shrink');
           		 }else{
           		$("#navbar").removeClass('shrink');
                $("#navbar").addClass('full');
                                
                            	}
   					}
   					)
}
function Opacitycontent(){
    scrollPos = $(this).scrollTop();
    $("#header-content").css({
        'margin-top': (scrollPos/4) +"px",
        'opacity': 1-(scrollPos/250)
    })


}
$(document).ready(function(){

       $('.menu-ico').click(function(e){
        e.preventDefault();
        var $this = $(this);
        if($this.hasClass('is-opened')){
            $this.addClass('is-closed').removeClass('is-opened');
            }else{
            $this.removeClass('is-closed').addClass('is-opened');
            }
        })
      



    HeightBackround();
     $(window).resize(function(){
         HeightBackround();
     })

    $(window).scroll(function(){
        ShrinkNavbar();
        Opacitycontent();
    })

   

});
