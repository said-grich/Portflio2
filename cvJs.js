var load=$('.prog');
var cer=$('.circle');
console.log(load[0]);

/*$('document').ready(
    $.each(load, function () { 
         var eload =$(this);
         eload.css("width",'70%');
         $({animatedValue: 0}).animate({animatedValue: '70%'}),{
             duration: 1000,
             }
    })
)

$(document).ready(function () {
    var value=$('#l1').attr('val');
    $('#l1').animate({width: value+'%' },2000);
$('#sk').mouseover(function () {
    $('#l1').css("width",0);
    var value=$('#l1').attr('val');
    $('#l1').animate({width: value+'%' },2000)
});
});
$(document).ready(function () {
    var value=$('#l2').attr('val');
    $('#l2').animate({width: value+'%' },2000)

    $('#sk').mouseover(function () {
        $('#l2').css("width",0);
        var value=$('#l2').attr('val');
        $('#l2').animate({width: value+'%' },2000)
    });
    });
    $(document).ready(function () {
        var value=$('#l3').attr('val');
        $('#l3').animate({width: value+'%' },2000)


        $('#sk').mouseover(function () {
            $('#l3').css("width",0);
            var value=$('#l3').attr('val');
            $('#l3').animate({width: value+'%' },2000)
        
        
        });
        });
 $(document).ready(function () {
            var value=$('#l4').attr('val');
            $('#l4').animate({width: value+'%' },2000);
    
            $('#sk').mouseover(function () {
                $('#l4').css("width",0);
                var value=$('#l4').attr('val');
                $('#l4').animate({width: value+'%' },2000)
            });
            });
            /*
  $(document).ready(function () {
                var value=$('#c1').attr('val');
                $('#c1').animate({width: value+'%' },2000);
        
                $('#sk').mouseover(function () {
                    $('#c1').css("width",0);
                    var value=$('#c1').attr('val');
                    $('#c1').animate({width: value+'%' },2000)
                });
                });
                $(document).ready(function () {
                    var value=$('#c2').attr('val');
                    $('#c2').animate({width: value+'%' },2000);
            
                    $('#sk').mouseover(function () {
                        $('#c2').css("width",0);
                        var value=$('#c2').attr('val');
                        $('#c2').animate({width: value+'%' },2000)
                    });
                    });
                    $(document).ready(function () {
                        var value=$('#c3').attr('val');
                        $('#c3').animate({width: value+'%' },2000);
                
                        $('#sk').mouseover(function () {
                            $('#c3').css("width",0);
                            var value=$('#c3').attr('val');
                            $('#c3').animate({width: value+'%' },2000)
                        });
                        });

*/
var tab=[$("#c1"),$("#c2"),$("#c3")];
var tab1=[$("#l1"),$("#l2"),$("#l3"),$("#l4")];
$(document).ready(function () {
    tab1.forEach(function(item, index ,){
            var value=item.attr('val');
           item.animate({width: value+'%' },2000);
    })
    });

    $('#sk').mouseover(function (){
        tab1.forEach(function(item, index ){
                item.css("width",0);
                var value=item.attr('val');
               item.animate({width: value+'%' },2000)  
    })
})

    
$(document).ready(function () {
tab.forEach(function(item, index ,){
        var value=item.attr('val');
       item.animate({width: value+'%' },2000);
})
});
$('#lang').one("mouseover",function (){
    tab.forEach(function(item, index ){
            item.css("width",0);
            var value=item.attr('val');
           item.animate({width: value+'%' },2000)  
})
})
$('#lang').mouseout(function (){
    tab.forEach(function(item, index ){
            var value=item.attr('val');
           item.animate({width: value+'%' },200)       
})
})
