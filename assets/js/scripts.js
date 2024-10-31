jQuery(document).ready(function(){
    jQuery( "select#responsive-cheker-combobox" ).change(function() {
        var fwidth = jQuery(this).val();
        if(fwidth == "360"){
            jQuery('.frame-responsive').animate({height:'640px',width:'360px'});
        }else if(fwidth == "320"){
            jQuery('.frame-responsive').animate({height:'480px',width:'320px'});
        }else if(fwidth == "600"){
            jQuery('.frame-responsive').animate({height:'1024px',width:'600px'});
            jQuery('.frame-responsive').addClass('inch-7');
            jQuery('.frame-responsive').removeClass('inch-10');
        }else if(fwidth == "768"){
            jQuery('.frame-responsive').animate({height:'1024px',width:'768px'});
            jQuery('.frame-responsive').addClass('inch-10');
            jQuery('.frame-responsive').removeClass('inch-7');
        }else if(fwidth == "800"){
            jQuery('.frame-responsive').animate({height:'1280px',width:'800px'});
        }else if(fwidth == "980"){
            jQuery('.frame-responsive').animate({height:'1280px',width:'980px'});
        }else if(fwidth == "1920"){
            jQuery('.frame-responsive').animate({height:'920px',width:'1920px'});
        }
    });
    
    
    jQuery('.responsive-checker-rotation a').click(function(){
        var ifwidth = jQuery('.frame-responsive').width();
        var fheight = jQuery('.frame-responsive').height();
        if(ifwidth == "360"){
            jQuery('.frame-responsive').animate({height:'360px',width:'640px'});
            jQuery('.frame-responsive').addClass('lanscape');
        }else if(ifwidth == "320"){
            jQuery('.frame-responsive').animate({height:'320px',width:'480px'});
            jQuery('.frame-responsive').addClass('lanscape');
        }else if(ifwidth == "600" && jQuery('.frame-responsive').hasClass('inch-7')){
            jQuery('.frame-responsive').animate({height:'600px',width:'1024px'});
            jQuery('.frame-responsive').addClass('lanscape');
        }else if(ifwidth == "768" && jQuery('.frame-responsive').hasClass('inch-10')){
            jQuery('.frame-responsive').animate({height:'768px',width:'1024px'});
            jQuery('.frame-responsive').addClass('lanscape');
        }else if(ifwidth == "800"){
            jQuery('.frame-responsive').animate({height:'800px',width:'1280px'});
            jQuery('.frame-responsive').addClass('lanscape');
        }else if(ifwidth == "980"){
            jQuery('.frame-responsive').animate({height:'980px',width:'1280px'});
            jQuery('.frame-responsive').addClass('lanscape');
        }else if(ifwidth == "1920"){
            jQuery('.frame-responsive').animate({height:'1920px',width:'920px'});
            jQuery('.frame-responsive').addClass('lanscape');
        }
        
        if(fheight == "360" && jQuery('.frame-responsive').hasClass('lanscape')){
            jQuery('.frame-responsive').animate({height:'640px',width:'360px'});
            jQuery('.frame-responsive').removeClass('lanscape');
        }else if(fheight == "320" && jQuery('.frame-responsive').hasClass('lanscape')){
            jQuery('.frame-responsive').animate({height:'480px',width:'320px'});
            jQuery('.frame-responsive').removeClass('lanscape');
        }else if(fheight == "600" && jQuery('.frame-responsive').hasClass('lanscape') && jQuery('.frame-responsive').hasClass('inch-7')){
            jQuery('.frame-responsive').animate({height:'1024px',width:'600px'});
            jQuery('.frame-responsive').removeClass('lanscape');
        }else if(fheight == "768" && jQuery('.frame-responsive').hasClass('lanscape') && jQuery('.frame-responsive').hasClass('inch-10')){
            jQuery('.frame-responsive').animate({height:'1024px',width:'768px'});
            jQuery('.frame-responsive').removeClass('lanscape');
        }else if(fheight == "800" && jQuery('.frame-responsive').hasClass('lanscape')){
            jQuery('.frame-responsive').animate({height:'1280px',width:'800px'});
            jQuery('.frame-responsive').removeClass('lanscape');
        }else if(fheight == "980" && jQuery('.frame-responsive').hasClass('lanscape')){
            jQuery('.frame-responsive').animate({height:'1280px',width:'980px'});
            jQuery('.frame-responsive').removeClass('lanscape');
        }else if(fheight == "1920" && jQuery('.frame-responsive').hasClass('lanscape')){
            jQuery('.frame-responsive').animate({height:'920px',width:'1920px'});
            jQuery('.frame-responsive').removeClass('lanscape');
        }
    });
});