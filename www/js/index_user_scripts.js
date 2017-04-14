/*jshint browser:true */
/*global $, logicWages, validationMsgs, getRadioValue */

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
        var salary = getRadioValue("rdoTimeDayWorked") * logicWages.wages($("#txtHoursWorked").val(), $("#txtHourlyRate").val());
        validationMsgs("Your Salary is " + salary, "Information", "OK");
        return false;
    });
    
    }
 document.addEventListener("app.Ready", register_event_handlers, false);
})();
