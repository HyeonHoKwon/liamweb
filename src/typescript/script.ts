// function str(){
//     document.getElementById("demo").innerHTML = "liam is here";
// }
declare var  $: any;



function logOut(){
    localStorage.clear();
    $('#logButton').html('<a href="#"  onclick="facebooklogin()"> Facebook</a>');
}