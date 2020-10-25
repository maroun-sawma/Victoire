
var _Params_Get_RegistrationInfo, __Params_Get_RegistrationInfo; // KO

// --------------------
var Validator_Login;
// --------------------

/* ---------------- */
var _Params_Get_RegistrationInfo = new Object();
_Params_Get_RegistrationInfo.FirstName = "";
_Params_Get_RegistrationInfo.FamilyName = "";
_Params_Get_RegistrationInfo.BrokerAccountCode = "";
_Params_Get_RegistrationInfo.MOETRegistrationCode = "";
_Params_Get_RegistrationInfo.MobileNUmber = "";
_Params_Get_RegistrationInfo.EmailAddress = "";
_Params_Get_RegistrationInfo.Floor = "";
_Params_Get_RegistrationInfo.Building = "";
_Params_Get_RegistrationInfo.Street = "";
_Params_Get_RegistrationInfo.Region = "";
_Params_Get_RegistrationInfo.CountryDesc = "";

__Params_Get_RegistrationInfo = ko.mapping.fromJS(_Params_Get_RegistrationInfo);

MyApp_GVM.List_Registration_Country = ko.mapping.fromJS([]);

$(document).on("pagebeforecreate", "#pg_RegisterVictoire", function (event, ui) {
    //alert('test');
    Validator_Login = $("#frm_RegisterVictoire").validate({
        rules: {
            txt_RG_Name: { required: true, maxlength: 250 },
            txt_RG_FamilyName: { required: true, maxlength: 250 },
            txt_RG_BrokerAccCode: { required: true,},
            txt_RG_MoetRegistCode: { required: true, maxlength: 20 },
            txt_RG_MobileNO: { required: true, maxlength: 49 },
            txt_RG_Email: { required: true, email: true, maxlength: 200 },
            txt_RG_Floor: { required: true, maxlength: 50 },
            txt_RG_Building: { required: true, maxlength: 150 },
            txt_RG_Street: { required: true,  maxlength: 250 },
            txt_RG_Region: { required: true, maxlength: 250 },
            DDL_RG_Country: { required: true}
        }
    });


    $(this).on("click", "#btn_RG_GO", function (event) {

        if ($("#frm_RegisterVictoire").valid()) {
            /* ---------------- */
            var func = function () {

                //jq_ShowMobileLoader();
                jq_ShowMobileLoaderAdv("pg_RegisterVictoire");
                Update_RegistrationData();
            };

            setTimeout(func, 300);

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


$(document).on("pagebeforeshow", "#pg_RegisterVictoire", function (event, ui) {

    Validator_Login.resetForm();

    $("meta[name=description]").attr("content", "Register");
    $("title").html("Register");
    /* -------------------------------------------------- */

        jq_ShowMobileLoader();
        /* ------Fill Programme Code Combo-------- */
        Get_RegisterVictoire_Startup_Data();

});

function Get_RegisterVictoire_Startup_Data() {
    ////debugger;
    try {
        /* ---------------- */
        _Service_Method = "Get_RegisterVictoire_Startup_Data";
        CallService('Service_Call_Completed_Registration');
        /* ---------------- */
    }
    catch (e) {
        alert("Get_RegisterVictoire_Startup_Data : " + e.Message);
    }
}


function Update_RegistrationData() {
    ////////debugger;
    try {
        /* ---------------- */


        /* ---------------- */
        _Params = ko.mapping.toJSON(__Params_Get_RegistrationInfo);

        _Service_Method = "Update_RegistrationData";
        CallService('Service_Call_Completed_Registration');
        /* ---------------- */

    }
    catch (e) {
        alert("Update_RegistrationData : " + e.Message);
    }

}


/* --------------------------------------------------------------- */
function Service_Call_Completed_Registration(i_Response) {
    ////////debugger;
    try {
        switch (_Service_Method) {
            case "Update_RegistrationData":
                Update_RegistrationData_Completed(i_Response);
                break;
            case "Get_RegisterVictoire_Startup_Data":
                Get_RegisterVictoire_Startup_Data_Completed(i_Response);
                break;
        }
    }
    catch (e) {
        alert("Service_Call_Completed_Registration:" + e.message);
    }
}

function Update_RegistrationData_Completed(i_Input) {
    ////debugger;
    try {
        //jq_HideMobileLoader();
        jq_HideMobileLoaderAdv("pg_RegisterVictoire");
        jq_DisplayMessage("MSG_GeneralInfo", "Successfull!", "Your info has been received successfully, you will received an email in order to activate your account!", null, null, null, null);
    }
    catch (e) {
        alert("Update_RegistrationData_Completed: " + e.Message);
    }
}
/* --------------------------------------------------------------- */

/* --------------------------------------------------------------- */
function Get_RegisterVictoire_Startup_Data_Completed(i_Input) {
    ////debugger;
    try {
        ko.mapping.fromJS(i_Input.My_Result.My_Registration_Country, MyApp_GVM.List_Registration_Country);
    }
    catch (e) {
        alert("Get_RegisterVictoire_Startup_Data_Completed: " + e.message);
    }
}
/* --------------------------------------------------------------- */