$(document).ready(function(){
    //one page nav
    const sections = document.querySelectorAll("section");  
    const navLi = document.querySelectorAll(".navitems-list div");
    console.log(navLi);
    window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - sectionHeight / 3) {
        current = section.getAttribute("id");
        // console.log(current);
        }
    });

    navLi.forEach((div) => {
        console.log(div);
        div.classList.remove("active-navitems");
        if (div.classList.contains(current)) {
        div.classList.add("active-navitems");
        }
    });
    });





    $(".hamburger").click(function(){
        console.log("Navbar opened");
        $(".navbar").css("left","0");
    })

    $(".close").click(function(){
        console.log("Navbar closed");
        $(".navbar").css("left","-100%");
    })


    // Preloader
    preloaderFadeOutTime = 2000;
    function hidePreloader() {
        var preloader = $('.spinner-wrapper');
        preloader.fadeOut(preloaderFadeOutTime);
        }
    hidePreloader();


    
    // my work -filter
    $('.individuallinks').click(function(){
        const value=$(this).attr('data-filter');
        if(value=='all'){
            $('.itembox').show('2000');
        }
        else{
            $('.itembox').not('.'+value).hide('2000');
            $('.itembox').filter('.'+value).show('2000');

        }
    })
    
    // mywork link
    $('.individuallinks').click(function(){
        $(this).addClass('active').siblings().removeClass('active');
    })

// navbar-link 
    // $('.navitems-div').click(function(){
    //     $(this).addClass('active-navitems').siblings().removeClass('active-navitems');
    // })

})