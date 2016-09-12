function logOut() {
    localStorage.clear();
    $('#logButton').html('<a href="#"  onclick="facebooklogin()"> Facebook</a>');
}
