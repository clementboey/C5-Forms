/*jshint browser:true */
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
        var salary = logicWages.wages($("#txtHoursWorked").val(), $("#txtHourlyRate").val());
        console.log(salary);
        return false;
    });
    
    }
 document.addEventListener("app.Ready", register_event_handlers, false);
})();