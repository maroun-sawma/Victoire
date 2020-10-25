
var _Params_Get_ForgetPasswordInfo, __Params_Get_ForgetPasswordInfo; // KO

// --------------------
var Validator_Login;
var ForgetPasswordUsersDataRowFiltered = [];
// --------------------

/* ---------------- */
var _Params_Get_ForgetPasswordInfo = new Object();
_Params_Get_ForgetPasswordInfo.Username = "";
_Params_Get_ForgetPasswordInfo.Email = "";
_Params_Get_ForgetPasswordInfo.USER_ID = 0;
_Params_Get_ForgetPasswordInfo.CryptedPassword = "";

__Params_Get_ForgetPasswordInfo = ko.mapping.fromJS(_Params_Get_ForgetPasswordInfo);

$(document).on("pagebeforecreate", "#pg_ResetPassword", function (event, ui) {
    //$('#pg_GetQuotation').bind("pagebeforecreate", function (event) {
    ////////debugger;
    //alert('ehgdhegdhged');


    Validator_Login = $("#frm_ResetPassword").validate({
        rules: {
            txt_RP_Username: { required: true, maxlength: 250 },
            txt_RP_EmailAddress: { required: true, maxlength: 250, email: true },
        }
    });


    $(this).on("click", "#btn_RP_ResetPassword", function (event) {
        ///debugger;
        if ($("#frm_ResetPassword").valid()) {
            /* ---------------- */
                //jq_ShowMobileLoader();
                ForgetPasswordUsersDataRowFiltered = $.Enumerable.From(ko.mapping.toJS(JSON.parse(sessionStorage.getItem('VictoireAllUsers'))))
                .Where("$.USERNAME =='" + __Params_Get_ForgetPasswordInfo.Username().trim().toLowerCase() + "' && $.EMAIL == '" + __Params_Get_ForgetPasswordInfo.Email().trim().toLowerCase() + "'")
                .ToArray();
                if (ForgetPasswordUsersDataRowFiltered.length > 0) {
                    jq_ShowMobileLoaderAdv("pg_ResetPassword");
                    Update_ResetPassword(ForgetPasswordUsersDataRowFiltered[0].USER_ID);
                }
                else {
                    showToast('Invalid Usename or Email! Please Check Your Info', 'fail');
                    return;
                }

            /* ---------------- */
        }
        else {
            // Focus invalid input
            // -------------------
            Validator_Login.focusInvalid();
            // -------------------
        }
        /* ---------------- */
        event.preventDefault();
        event.stopPropagation();
    });

});


$(document).on("pagebeforeshow", "#pg_ResetPassword", function (event, ui) {

    Validator_Login.resetForm();

    $("meta[name=description]").attr("content", "Reset Password");
    $("title").html("Reset Password");
    /* -------------------------------------------------- */

    var func = function () {

        //jq_ShowMobileLoader();
        jq_ShowMobileLoaderAdv("pg_ResetPassword");
        /* ------Fill Programme Code Combo-------- */
        Get_ForgetPassword_Startup_Data();
    };

    setTimeout(func, 300);



});


function Get_ForgetPassword_Startup_Data() {
    ////debugger;
    try {
        /* ---------------- */
        _Service_Method = "Get_ForgetPassword_Startup_Data";
        CallService('Service_Call_Completed_ResetPassword');
        /* ---------------- */
    }
    catch (e) {
        alert("Get_ForgetPassword_Startup_Data : " + e.Message);
    }
}


function Update_ResetPassword(UserID) {
    ////debugger;
    try {
        /* ---------------- */
        __Params_Get_ForgetPasswordInfo.USER_ID(UserID);
        /* ---------------- */
        _Params = ko.mapping.toJSON(__Params_Get_ForgetPasswordInfo);

        _Service_Method = "Update_ResetPassword";
        CallService('Service_Call_Completed_ResetPassword');
        /* ---------------- */

    }
    catch (e) {
        alert("Update_ResetPassword : " + e.Message);
    }

}


/* --------------------------------------------------------------- */
function Service_Call_Completed_ResetPassword(i_Response) {
    ////////debugger;
    try {
        switch (_Service_Method) {
            case "Update_ResetPassword":
                Update_ResetPassword_Completed(i_Response);
                break;
            case "Get_ForgetPassword_Startup_Data":
                Get_ForgetPassword_Startup_Data_Completed(i_Response);
                break;
        }
    }
    catch (e) {
        alert("Service_Call_Completed_ResetPassword:" + e.message);
    }
}

function Update_ResetPassword_Completed(i_Input) {
   ////debugger;
    try {
        //jq_HideMobileLoader();
        jq_HideMobileLoaderAdv("pg_ResetPassword");
        jq_DisplayMessage("MSG_GeneralInfo", "Successfull!", "Your password has been reset, and a new one has been sent to your email. Thank You!", null, null, null, null);
    }
    catch (e) {
        alert("Update_ResetPassword_Completed: " + e.Message);
    }
}
/* --------------------------------------------------------------- */
/* --------------------------------------------------------------- */
function Get_ForgetPassword_Startup_Data_Completed(i_Input) {
    ////debugger;
    try {

        jq_HideMobileLoaderAdv("pg_ResetPassword");
        sessionStorage.setItem("VictoireAllUsers", JSON.stringify(i_Input.My_Result.My_ForgetPassword_Users));
    }
    catch (e) {
        alert("Get_ForgetPassword_Startup_Data: " + e.message);
    }
}
/* --------------------------------------------------------------- */