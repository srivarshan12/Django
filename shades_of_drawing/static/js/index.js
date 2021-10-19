




function formsubmit(){
$(document).on('submit','#homepage-newsletter-form',function(e){
    e.preventDefault();
    $.ajax({
        type:'POST',
        url:'{% url "contact" %}',
        data:
        {
            task:$("#task").val(),
            csrfmiddlewaretoken:$('input[name=csrfmiddlewaretoken]').val()
        },
        success:function(){
            //alert('Saved');
            $('.newsletter-row2').css("display","flex");
            $('#task-form')[0].reset();
        }
        })
    });
}


preloaderFadeOutTime = 2000;
function hidePreloader() {
    var preloader = $('.spinner-wrapper');
    preloader.fadeOut(preloaderFadeOutTime);
    }

window.addEventListener("load", event => {
    // var image = document.getElementById("initial");
    var image = document.querySelectorAll(".initial");
   
    var total_images=document.getElementsByClassName("grid-item").length;
    var allitems=document.getElementById("allitems");
    
    var potrait_images=document.getElementsByClassName("potrait").length; 
    var potrait=document.getElementById("potrait");
    
    var realistic_images=document.getElementsByClassName("realistic").length;
    var realistic=document.getElementById("realistic");

    var perspective_images=document.getElementsByClassName("perspective").length;
    var perspective=document.getElementById("perspective");

    var threed_images=document.getElementsByClassName("threed").length;
    var threed=document.getElementById("threed");

    // console.log(image);
    var isLoaded = image[0].complete && image[1].complete &&image[2].complete && image[3].complete && image[4].complete 
    &&image[5].complete && image[6].complete && image[7].complete  &&  image.naturalHeight !== 0;
    
    if(isLoaded==true){
        allitems.innerHTML=total_images;
        potrait.innerHTML=potrait_images;
        realistic.innerHTML=realistic_images;
        perspective.innerHTML=perspective_images;
        threed.innerHTML=threed_images;

        hidePreloader();

    }


});

window.addEventListener("load", function(){
	
    
    $('.button').click(function(){
        $('.button').removeClass('active');
        $(this).addClass('active');

        var selector=$(this).attr('data-filter');
        console.log(selector)

        $('.middle').isotope({
            filter:selector  
        });
        
        console.log("hdsld"); 
        return false;
    });


    var $grid = $('.grid').isotope({
        itemSelector: '.grid-item',
        layoutMode: 'masonry',
        transitionDuration:1500,  
    });




    var divcontainer = document.getElementById("hover-side-id");
    var divs =divcontainer.getElementsByClassName("div-icon");
    for( var i=0; i<divs.length; i++){
        divs[i].addEventListener("click",function(){
            console.log("navbar clicked");
            var active=document.getElementsByClassName("activenavbar");
            active[0].className=current[0].className.replace("activenavbar","");
            this.className=this.className+"activenavbar";
        });
    }








    $('.menu').click(function(){
        $('.navbar').css("transform","rotateX(-90deg) translateY(55px)");

        $('.close-side').css("top","110px");
        $('.close-side').css("z-index","-1");
        $('.close-side').css("transition", "all 0.8s ease-in-out");
    
        $('.close-side').css("background-color","rgba(0,0,0,0.5)");     

        $('.default-side').css("opacity","0");


        $('#closeid').css("display","block");
        $('#menuid').css("display","none");
        
    })



    $('.close').click(function(){
        $('.navbar').css("transform","rotateX(90deg) translateY(-55px)");

        $('.close-side').css("top","0px");
        $('.close-side').css("z-index","-1");
        $('.close-side').css("transition", "all 0.4s ease-in-out");

        $('.close-side').css("background-color","rgba(0,0,0,0)");     

        $('#menuid').css("display","block");
        $('#closeid').css("display","none");

    })


    window.onscroll = function() {myFunction()};

    // Get the header
    var header = document.getElementById("top");

    // Get the offset position of the navbar
    var sticky = header.offsetTop;

    // Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
    function myFunction() {
        if (window.pageYOffset > sticky) {
            console.log("sadsa");
            $('.close-side').css("background-color","rgba(0,0,0,0.5)");
            $('#red').css("color","rgb(240, 18, 18)");     
        } 
        else 
        {
            $('.close-side').css("background-color","rgba(0,0,0,0)");     
            $('#red').css("color","white");     

        }
    }



})