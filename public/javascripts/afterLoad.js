var token = localStorage.getItem('token');
if (token) {
    $('#logButton').html('<a href="#" onclick="logOut()" >Log Out</a>');
}
$("#onhover1 , #onhover2").mouseover(function () {
    $('#onhover2').addClass("hover");
});
$("#onhover1 , #onhover2").mouseleave(function () {
    $('#onhover2').removeClass("hover");
});
