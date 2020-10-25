var Validator_Login;

/* --------------------------------------------------------------- */
var _Params_IsAuthenticated = new Object();

__Params_IsAuthenticated = ko.mapping.fromJS(_Params_IsAuthenticated);


$(document).on("pagebeforecreate", "#pg_BrokerLogin", function (event, ui) {
    //////debugger;
    //$('#pg_AllRisk').bind("pagebeforecreate", function (event) {
    ////////debugger;

    //if (localStorage.getItem('UserInfo') != null && localStorage.getItem('UserInfo') != "null") {
    //    //$.mobile.changePage('TarifPage.html', {
    //    //    reverse: true
    //    //});

    //    jq_NavigateToPage('pg_Tarif', "BrokerArea.html", null);
    //}

    if (localStorage.getItem('UserInfo') != null && localStorage.getItem('UserInfo') != "null") {
        jq_NavigateToPage('pg_BrokerArea');
    } else if (localStorage.getItem('GarageInfo') != null && localStorage.getItem('GarageInfo') != "null") {


        jq_NavigateToPage('pg_DeclaireGarageClaim');
    }

    Validator_Login = $("#frm_BrokerLogin").validate({
        rules: {
            txt_password: { required: true },
            txt_username: { required: true }
        }
    });


    $(this).on("click", "#btn_Login", function (event) {

        //////debugger;
        if ($("#frm_BrokerLogin").valid()) {

                //jq_ShowMobileLoader();
                jq_ShowMobileLoaderAdv("pg_BrokerLogin");
                IsAuthenticated_JSON();
            /* ---------------- */
            /* ---------------- */
        }
        else {
            // Focus invalid input
            // -------------------
            Validator_Login.focusInvalid();
            // -------------------
        }

        event.preventDefault();
        event.stopPropagation();
    });

    $("#frm_BrokerLogin").submit(function () {
        //alert('form');
        $("#btn_Login").focus();
        return false;
    });

    $(this).on("click", "#div_ForgetPassword_Click", function (e) {
        // alert('edlekdle d');
        jq_NavigateToPage("pg_ResetPassword");
        e.preventDefault();
    });

    $(this).on("click", "#div_RegisterVictoire_Click", function (e) {
        // alert('edlekdle d');
        jq_NavigateToPage("pg_RegisterVictoire");
        e.preventDefault();
    });

    


});
$(document).on("pagebeforeshow", "#pg_BrokerLogin", function (event, ui) {
    //////debugger;
    /* -------------------------------------------------- */
    //if (localStorage.getItem('UserInfo') != null && localStorage.getItem('UserInfo') != "null") {
    //    //$.mobile.changePage('TarifPage.html', {
    //    //    reverse: true
    //    //});
    //    jq_NavigateToPage('pg_Tarif', "BrokerArea.html", null);
    //}

    if (localStorage.getItem('UserInfo') != null && localStorage.getItem('UserInfo') != "null") {
        jq_NavigateToPage('pg_BrokerArea');
    } else if (localStorage.getItem('GarageInfo') != null && localStorage.getItem('GarageInfo') != "null") {
        jq_NavigateToPage('pg_DeclaireGarageClaim');
    }



    /* -------------------------------------------------- */
    /* SEO */
    Validator_Login.resetForm();
    /* -------------------------------------------------- */
    $("meta[name=description]").attr("content", "Broker Login");
    $("title").html("Broker Login");
    /* -------------------------------------------------- */

   // ko.applyBindings(__Params_IsAuthenticated, document.getElementById('ct_BrokerLogin'));

});

/* --------------------------------------------------------------- */
function IsAuthenticated_JSON() {
    try {
        _Params_IsAuthenticated= new Object();
        _Params_IsAuthenticated.UserName = $("#txt_username").val();
        _Params_IsAuthenticated.Password = $("#txt_password").val();

        _Params = JSON.stringify(_Params_IsAuthenticated);

        _Service_Method = "IsAuthenticated_JSON";

        CallService('Service_Call_Completed_BrokerLogin');
    }
    catch (e) {
        alert("IsAuthenticated_JSON: " + e.Message);
    }
}
/* --------------------------------------------------------------- */

/* --------------------------------------------------------------- */
function Service_Call_Completed_BrokerLogin(i_Response) {
    ////////debugger;
    try {
        switch (_Service_Method) {
            case "IsAuthenticated_JSON":
                IsAuthenticated_JSON_Completed(i_Response);
                break;
        }
    }
    catch (e) {
        alert("Service_Call_Completed:" + e.message);
    }
}

/* --------------------------------------------------------------- */
function IsAuthenticated_JSON_Completed(i_Input) {
    try {
        //////debugger;
        //jq_HideMobileLoader();
        jq_HideMobileLoaderAdv("pg_BrokerLogin");
        if (i_Input.My_Result != null) {
            sessionStorage.setItem("UserInfo", JSON.stringify(i_Input.My_Result));

             if (parseInt(i_Input.My_Result.USER_TYPE_CODE) == 1) {
                    //it's a Broker
                 localStorage.setItem("UserInfo", JSON.stringify(i_Input.My_Result));
                 MyApp_GVM.UserID(i_Input.My_Result.UserID);
                 MyApp_GVM.OwnerID(i_Input.My_Result.OwnerID);
                 MyApp_GVM.BROKERCODE(i_Input.My_Result.BROKERCODE);
                 MyApp_GVM.AGENTS_NAME(i_Input.My_Result.AGENTS_NAME);
                 MyApp_GVM.EMAIL(i_Input.My_Result.EMAIL);
                 MyApp_GVM.AccountNumber(i_Input.My_Result.AccountNumber)

                 jq_NavigateToPage('pg_BrokerArea');
                }
             else if (parseInt(i_Input.My_Result.USER_TYPE_CODE) == 2) {
                    //it's a Garage
                 localStorage.setItem("GarageInfo", JSON.stringify(i_Input.My_Result));
                 MyApp_GVM.GarageMOBILE(i_Input.My_Result.MOBILE);
                 MyApp_GVM.GARAGE_DESC(i_Input.My_Result.AGENTS_NAME);
                    jq_NavigateToPage('pg_DeclaireGarageClaim');
                }

        }
        else {
            showToast('Invalid Credentials, Please Retry!', 'fail');
            return;
        }

    }
    catch (e) {
        alert("IsAuthenticated_JSON_Completed :" + e.Message);
    }
}
/* --------------------------------------------------------------- */