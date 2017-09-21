/*
* @Author: asus
* @Date:   2017-09-03 12:27:56
* @Last Modified by:   asus
* @Last Modified time: 2017-09-03 12:30:32
*/
$(function(){
    $(document).scroll(function(){
        let fc=$(document).scrollTop();
        if(fc>=500){
            $('.ftop').show()
        }else{
            $('.ftop').hide()
        }
    })
    $('.ftop').click(function(){
        $('body').animate({scrollTop:0})
    })
})