var logicWages = (function() {

    return {
        wages: wages,
        tax: tax
    };    
    
    function wages(hoursWorked, hourlyRate){
        var totalsalary = hoursWorked * hourlyRate;
	   return totalsalary;
    }
    
    function tax(taxrate, salary){
        return taxrate * salary;
    }
    
})();