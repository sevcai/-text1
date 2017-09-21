/*
* @Author: asus
* @Date:   2017-08-28 09:19:57
* @Last Modified by:   asus
* @Last Modified time: 2017-08-30 14:46:04
*/
$(function(){
    $('.gallery>a').sliphover();
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