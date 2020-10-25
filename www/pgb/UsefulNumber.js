
$(document).on("pagebeforecreate", "#pg_UsefulNumber", function (event, ui) {

    $(this).on("click", "#ul_MB_VictoireBranches", function (event) {

        jq_NavigateToPage('pg_BranchesList');
        event.preventDefault();
        event.stopPropagation();
    });
    $(this).on("click", "#ul_MB_ListOfExperts", function (event) {

        jq_NavigateToPage('pg_ExpertList');
        event.preventDefault();
        event.stopPropagation();
    });
    $(this).on("click", "#ul_MB_VictoireHospitals", function (event) {

        jq_NavigateToPage('pg_HospitalList');
        event.preventDefault();
        event.stopPropagation();
    });

});

$(document).on("pagebeforeshow", "#pg_UsefulNumber", function (event, ui) {

});