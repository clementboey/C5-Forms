/*jshint browser:true */
/*global $, logicWages, validationMsgs */

(function()
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
        validationMsgs("Your Salary is " + salary, "Information", "OK");
        return false;
    });
    
    }
 document.addEventListener("app.Ready", register_event_handlers, false);
})();