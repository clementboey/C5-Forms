/*jshint browser:true */
/*global $:false, intel:false app:false, dev:false, cordova:false */
/*global $ */(function()
{
 "use strict";
 /*
   hook up event handlers 
 */
 function register_event_handlers()
 {
    
    
    /* button  #btnSalary */
    $(document).on("click", "#btnSalary", function(evt)
    {
        console.log($("#txtHoursWorked").val());        
        console.log($("#txtHourlyRate").val());
        return false;
    });
    
    }
 document.addEventListener("app.Ready", register_event_handlers, false);
})();