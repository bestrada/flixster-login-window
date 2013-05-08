/*global $,window */

$(function () {
    "use strict";
    
    // i disabled this button so that the user couldn't click it
    // before my javascript was loaded up.
    $("#loginform").removeAttr("disabled").submit(function (event) {
        // popup a window that will prompt a user to login
        event.preventDefault();
        var url = this.action + '?' + $(this).serialize();
        window.open(url, '_login_popup', 'width=840,height=404,toolbar=0,menubar=0,location=0,status=0,scrollbars=0,resizable=1,left=' + window.screenX + ',top=' + window.screenY);
    });
});