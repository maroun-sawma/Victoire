
$(document).on("pagebeforecreate", "#pg_Claim", function (event, ui) {

    $(this).on("click", "#lbl_MB_DeclairClaim", function (event) {

        jq_NavigateToPage('pg_DeclaireClaim');
        event.preventDefault();
        event.stopPropagation();
    });
    $(this).on("click", "#lbl_MB_ViewClaim", function (event) {

        //jq_NavigateToPage('pg_Tarif');
        event.preventDefault();
        event.stopPropagation();
    });
    $(this).on("click", "#lbl_MB_ListOfExperts", function (event) {

        jq_NavigateToPage('pg_ExpertList');
        event.preventDefault();
        event.stopPropagation();
    });

});

$(document).on("pagebeforeshow", "#pg_Claim", function (event, ui) {

    $(this).on("click", "#btn_Garage_Claim", function (event) {
        ////////debugger;

        if (localStorage.getItem('GarageInfo') != null && localStorage.getItem('GarageInfo') != "null") {
            //$.mobile.changePage('DeclaireGarageClaim.html', {
            //    reverse: true
            //});

            jq_NavigateToPage('pg_DeclaireGarageClaim');
        }
        else {
            //$.mobile.changePage('GarageLogin.html', {
            //    reverse: true
            //});
            if (localStorage.getItem('UserInfo') != null && localStorage.getItem('UserInfo') != "null") {
                jq_DisplayMessage("MSG_GeneralError", "", "You Are Logged In As Broker! Use Declare Claim Option. Thank you");
                return;
            }
            else {
                jq_NavigateToPage('pg_GarageLogin');
            }


        }
        event.preventDefault();
        event.stopPropagation();
    });
});


