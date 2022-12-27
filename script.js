

$(document).ready(function (){

    $nav = $('.nav');
    $toggleCollapse = $('.bar');
    $navClose = $('.xmark')

    $toggleCollapse.click(function  (){
        $nav.toggleClass('toggle');
        $toggleCollapse.hide();
    })

    $navClose.click(function  (){
        $toggleCollapse.show();
        $nav.toggleClass('toggle');
    })

    
});