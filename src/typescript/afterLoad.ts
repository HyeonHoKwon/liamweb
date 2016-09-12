declare var $: any; 
 
let token = localStorage.getItem('token');
if(token){
    $('#logButton').html('<a href="#" onclick="logOut()" >Log Out</a>');
}

