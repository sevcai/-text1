/*
* @Author: asus
* @Date:   2017-09-03 10:17:12
* @Last Modified by:   asus
* @Last Modified time: 2017-09-03 10:18:56
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