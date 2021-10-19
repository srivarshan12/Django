// index page newsletter form
$(document).on('submit','#homepage-newsletter-form',function(e){
    e.preventDefault();
    $.ajax({
        type:'POST',
        data:
        {
            newsletteremail:$("#newsletter").val(),
            // this newsletteremail is taken to views.py index view
            csrfmiddlewaretoken:$('input[name=csrfmiddlewaretoken]').val()
        },
        success:function(){
            //alert('Saved');
            $('.newsletter-row2').css("display","flex");
            $('#homepage-newsletter-form')[0].reset();
        },
        error:function(jqXHR){
            if(jqXHR.status==500)
            {
                alert("Please enter a valid email");
                $('#homepage-newsletter-form')[0].reset();
            }
        }
        })
    });


$(document).on('submit','#contact-form',function(e){
    e.preventDefault();
    $.ajax({
            type:'POST',
            data:
            {
                name:$("#name").val(),
                subject:$("#subject").val(),
                email:$("#email").val(),
                message:$("#message").val(),
                // this values are taken to views.py contact view

                csrfmiddlewaretoken:$('input[name=csrfmiddlewaretoken]').val(),
            },
            
            success:function(){
                // alert("message sent");
                $('#redirectmsg-id').css("display","block");
                //$('#redirectmsg-id').removeClass("displaynone");
                //$('#redirectmsg-id').addClass("displayblock");
                
                name=$("#name").val()
                $('.redirectname').text("Thanks "+name);
                $('#contact-form')[0].reset();                
            } ,
            error:function(jqXHR){
                if(jqXHR.status==500)
                {
                    alert("Please enter a valid email");
                    $('#contact-form')[0].reset();
                                     
                }
            }
                
    })
});



// contact page newsletter form

$(document).on('submit','#contactpage-newsletter-form',function(e){
    e.preventDefault();
    $.ajax({
        type:'POST',
        data:
        {
            newsletteremail:$("#newsletteremail").val(),
            // this newsletteremail is taken to views.py index view
            csrfmiddlewaretoken:$('input[name=csrfmiddlewaretoken]').val()
        },
        success:function(){
            $('.subsmsg').css("display","block");
            $('.subsmsg:before').css("display","block");
            $('.subsdesc').css("display","none");
            $('#contactpage-newsletter-form')[0].reset();
        },
        error:function(jqXHR){
            if(jqXHR.status==500)
            {
                $('#contactpage-newsletter-form')[0].reset();
                alert("Please enter a valid email"); 
                                 
            }
        }
        })
    });

