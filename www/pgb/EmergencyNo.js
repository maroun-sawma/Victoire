$(document).on("pagebeforecreate", "#pg_EmergencyNo", function (event, ui) {

    $(this).on("click", "#li_MB_ExpertList", function (event) {

        jq_NavigateToPage('pg_ExpertList');
        event.preventDefault();
        event.stopPropagation();
    });

});

$(document).on("pagebeforeshow", "#pg_EmergencyNo", function (event, ui) {

});
