
$(document).on("pagebeforecreate", "#pg_PaymentOptions", function (event, ui) {

    $(this).on("click", "#ul_MB_PayYourPolicies", function (event) {

        jq_NavigateToPage('pg_PayPoliciesToVictoire');
        event.preventDefault();
        event.stopPropagation();
    });
    $(this).on("click", "#ul_MB_PayAnAmont", function (event) {

        jq_NavigateToPage('pg_PayToVictoire');
        event.preventDefault();
        event.stopPropagation();
    });

});

$(document).on("pagebeforeshow", "#pg_PaymentOptions", function (event, ui) {


});