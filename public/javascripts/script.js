// function str(){
//     document.getElementById("demo").innerHTML = "liam is here";
// }


//페이스북 SDK 초기화   
window.fbAsyncInit = function() {  
    FB.init({appId: '1085416961507014', status: true, cookie: true,xfbml: true});      
};  
      
(function(d){  
   var js, id = 'facebook-jssdk', ref = d.getElementsByTagName('script')[0];  
   if (d.getElementById(id)) {return;}  
   js = d.createElement('script'); js.id = id; js.async = true;  
   js.src = "//connect.facebook.net/en_US/all.js";  
   ref.parentNode.insertBefore(js, ref);  
 }(document));     
              
function facebooklogin() {  
    //페이스북 로그인 버튼을 눌렀을 때의 루틴.  
        FB.login(function(response) {  
            var fbname;  
            var accessToken = response.authResponse.accessToken;  
        }, {scope: 'publish_actions,user_likes'});  
}  
