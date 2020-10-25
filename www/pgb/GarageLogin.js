var Validator_Login;

/* --------------------------------------------------------------- */
var _Params_IsAuthenticated = new Object();

__Params_IsAuthenticated = ko.mapping.fromJS(_Params_IsAuthenticated);


$(document).on("pagebeforecreate", "#pg_GarageLogin", function (event, ui) {

    //$('#pg_AllRisk').bind("pagebeforecreate", function (event) {
    ////////debugger;



    Validator_Login = $("#frm_GarageLogin").validate({
        rules: {
            txt_Garage_password: { required: true },
            txt_Garage_username: { required: true }
        }
    });


    $(this).on("click", "#btn_Garage_Login", function (event) {
        ////////debugger;
        if ($("#frm_GarageLogin").valid()) {

            var func = function () {

                //jq_ShowMobileLoader();
                jq_ShowMobileLoaderAdv("pg_GarageLogin");
                IsAuthenticated_JSON_Garage();
            };

            setTimeout(func, 300);
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


});
$(document).on("pagebeforeshow", "#pg_GarageLogin", function (event, ui) {
    ////////debugger;
    /* -------------------------------------------------- */
    /* -------------------------------------------------- */
    /* SEO */
    Validator_Login.resetForm();
    /* -------------------------------------------------- */
    $("meta[name=description]").attr("content", "Garage Login");
    $("title").html("Garage Login");
    /* -------------------------------------------------- */

    //ko.applyBindings(__Params_IsAuthenticated, document.getElementById('ct_GarageLogin'));

});

/* --------------------------------------------------------------- */
function IsAuthenticated_JSON_Garage() {
    try {
        _Params_IsAuthenticated = new Object();
        _Params_IsAuthenticated.UserName = $("#txt_Garage_username").val();
        _Params_IsAuthenticated.Password = $("#txt_Garage_password").val();

        _Params = JSON.stringify(_Params_IsAuthenticated);

        _Service_Method = "IsAuthenticated_JSON_Garage";

        CallService('Service_Call_Completed_GarageLogin');
    }
    catch (e) {
        alert("IsAuthenticated_JSON_Garage: " + e.Message);
    }
}
/* --------------------------------------------------------------- */

/* --------------------------------------------------------------- */
function Service_Call_Completed_GarageLogin(i_Response) {
    ////////debugger;
    try {
        switch (_Service_Method) {
            case "IsAuthenticated_JSON_Garage":
                IsAuthenticated_JSON_Garage_Completed(i_Response);
                break;
        }
    }
    catch (e) {
        alert("Service_Call_Completed:" + e.message);
    }
}

/* --------------------------------------------------------------- */
function IsAuthenticated_JSON_Garage_Completed(i_Input) {
    try {
        ////////debugger;
        //jq_HideMobileLoader();
        jq_HideMobileLoaderAdv("pg_GarageLogin");
        if (i_Input.My_Result != null) {
            localStorage.setItem("GarageInfo", JSON.stringify(i_Input.My_Result))
            sessionStorage.setItem("GarageInfo", JSON.stringify(i_Input.My_Result));
            if (sessionStorage.getItem('GarageInfo') != null) {
                _GarageInfo = JSON.parse(sessionStorage.getItem('GarageInfo'));
            }
            //$.mobile.changePage('DeclaireGarageClaim.html', {
            //    reverse: true
            //});
            jq_NavigateToPage('pg_DeclaireGarageClaim');
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