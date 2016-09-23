declare var $: any;
declare var FB: any;

/////////////////////////////////////////////////////////
///////////////// GET SpellRight API ////////////////////
/////////////////////////////////////////////////////////
  $('#getSpellCheck').click(function() {
       let text: string = $('#data').val();
        $.ajax({
            url: "https://api.cognitive.microsoft.com/bing/v5.0/spellcheck/?Text="+text,
            beforeSend: function(xhrObj){
                // Request headers
                xhrObj.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
                xhrObj.setRequestHeader("Ocp-Apim-Subscription-Key","32e894ce3edd49c7b110e90ea68d5f93");
            },
            type: "POST",
            // Request body
            data: "",
        })
        .done(function(data) {
            $('#language').html('<h3>'+ text +'</h3>');
            for(let item of data.flaggedTokens){
                for(let suggestion of item.suggestions){
                    console.log(suggestion.suggestion)
                   $("#language h3").text(function (_, ctx) {
                         return ctx.replace(item.token, suggestion.suggestion);
                    });
                }
            }
            
            console.log(data)
        })
        .fail(function() {
            alert("error");
        });
    });
////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////
///////////////// GET Language API //////////////////////
/////////////////////////////////////////////////////////

$("#getData").click(function() {
    let text: string = $('#data').val();
    $.ajax({
        url: "https://westus.api.cognitive.microsoft.com/text/analytics/v2.0/languages",
        beforeSend: function(xhrObj){
            // Request headers
            xhrObj.setRequestHeader("Content-Type","application/json");
            xhrObj.setRequestHeader("Ocp-Apim-Subscription-Key","b8776cb5b8c14ca1863a3f768ba962f1");
        },
        type: "POST",
        // Request body

        data: "{'documents': [{'id': 'string','text':"+"'" +text+"'"+" }]}",
    })
        .done(function(data) {
            console.log(data.documents[0].detectedLanguages[0].name);
            $('#language').html('<h3>You are using '+ data.documents[0].detectedLanguages[0].name +' language</h3>');
        })
        .fail(function() {
            alert("error");
        });
});
//////////////////////////////////////////////////////








/////////////////////////////////////////////////////////
///////////////// Check if log in  //////////////////////
/////////////////////////////////////////////////////////
let token:string = localStorage.getItem('faceBookToken');

if(token){
    $('#logButton').html('<a href="#" onclick="logOut()" >Log Out</a>');
}

/////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////



/////////////////////////////////////////////////////////
////////////// On Hover for some mobiles ////////////////
/////////////////////////////////////////////////////////

// $("#onhover1 , #onhover2").mouseover( function(){
// $('#onhover2').addClass("hover");
// } ) ;
//
// $("#onhover1 , #onhover2").mouseleave(function(){
//     $('#onhover2').removeClass("hover");
// });

/////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////



/////////////////////////////////////////////////////////
//////////////  Bootstrap smooth scroll  ////////////////
/////////////////////////////////////////////////////////

$(document).ready(function(){
    // Add scrollspy to <body>
    $('body').scrollspy({target: ".navbar", offset: 50});

    // Add smooth scrolling on all links inside the navbar
    $("#myNavbar a").on('click', function(event) {
        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            let hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function(){

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        }  // End if
    });
});
/////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////
