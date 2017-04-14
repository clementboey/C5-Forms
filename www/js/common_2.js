/*jslint browser:true, devel:true, white:true, vars:true */
/*global $:false, intel:false app:false, dev:false, cordova:false */

function validationMsgs(message, title, button){
    navigator.notification.alert(
        message,  
        function(){},        
        title,            
        button            
    );
}