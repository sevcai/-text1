/*
* @Author: asus
* @Date:   2017-08-28 09:20:00
* @Last Modified by:   asus
* @Last Modified time: 2017-08-30 14:46:59
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