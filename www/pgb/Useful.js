
$(document).on("pagebeforecreate", "#pg_Useful", function (event, ui) {

    $(this).on("click", "#ul_MB_MechanicalCalculator", function (event) {

        jq_NavigateToPage('pg_MechanicalCalculator');
        event.preventDefault();
        event.stopPropagation();
    });
    $(this).on("click", "#ul_MB_UsefulNumber", function (event) {

        jq_NavigateToPage('pg_UsefulNumber');
        event.preventDefault();
        event.stopPropagation();
    });
    $(this).on("click", "#ul_MB_EmergencyNo", function (event) {

        jq_NavigateToPage('pg_EmergencyNo');
        event.preventDefault();
        event.stopPropagation();
    });

});

$(document).on("pagebeforeshow", "#pg_Useful", function (event, ui) {

});