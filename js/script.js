$(document).ready(function() {
    $("form#leap-year").submit(function(event) {
        event.preventDefault();

        var leapYear = function(year) {
            if ((year % 4 === 0) && (year % 100 === 0)) {
                return false;
            } else {
                return false;
            }
        };


        var year = parseInt($("input#year").val());
        var result = leapYear(year);
        $("#result").text(result);
    });
});
