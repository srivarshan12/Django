preloaderFadeOutTime = 2000;
function hidePreloader() {
    var preloader = $('.spinner-wrapper');
    preloader.fadeOut(preloaderFadeOutTime);
    }
 
// window.addEventListener("load", event => {
//     // var image = document.getElementById("initial");
//     var image = document.querySelectorAll(".initial");
        
//     // console.log(image);
//     var isLoaded = image[0].complete && image[1].complete &&image[2].complete && image[3].complete && image[4].complete 
//     &&image[5].complete && image[6].complete && image[7].complete  &&  image.naturalHeight !== 0;
    
//     if(isLoaded==true){
        // console.log("completed");
        // hidePreloader();

    // }
// });







window.addEventListener("load", function(){
    console.log("page loading completed");
    hidePreloader();








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
    
    
var divcontainer = document.getElementById("hover-side-id");
var divs =divcontainer.getElementsByClassName("div-icon");
for( var i=0; i<divs.length; i++){
    divs[i].addEventListener("click",function(){
        console.log("navbar clicked");
        var active=document.getElementsByClassName("activenavbar");
        console.log("active ....");
        if (active.length > 0) {
             active[0].className=active[0].className.replace("activenavbar","");
          
            // current[0].className = current[0].className.replace(" active", "");
          }
        // active[0].className=active[0].className.replace("activenavbar","");
        console.log("active ....");

        this.className=this.className+"activenavbar";
    });
}



})

