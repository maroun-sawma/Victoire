/* On Document Ready. */
/* --------------------------------------------------------------- */

var cp_status_Glob = "";
var status_Glob = "";
var error_Glob = "";
var PolicyRef_Glob = "";
var Amount_Glob = "";


$(document).ready
(
function () {
    //alert('start up');

});


$(document).on("pagebeforecreate", "#pg_home", function (event, ui) {


});

$(document).on("pagebeforeshow", "#pg_home", function (event, ui) {
    //$('#pg_Index').bind("pageshow", function (event) {
    //////debugger;

   // var func = function () {

        jq_ShowMobileLoaderAdv("pg_home");
        GetVersionNo();
    //};
    //setTimeout(func, 300);
});

/* --------------------------------------------------------------- */
function GetVersionNo() {
    ////////debugger;
    try {
        /* ---------------- */
        /* ---------------- */
        _Service_Method = "GetVersionNo";
        CallService('Service_Call_Completed_Version');
        /* ---------------- */
    }
    catch (e) {
        alert("GetVersionNo: " + e.Message);
    }
}
/* --------------------------------------------------------------- */

/* --------------------------------------------------------------- */
function Service_Call_Completed_Version(i_Response) {
    ////////debugger;
    try {
        switch (_Service_Method) {
            case "GetVersionNo":
                GetVersionNo_Completed(i_Response);
                break;
        }
    }
    catch (e) {
        alert("Service_Call_Completed_Version:" + e.message);
    }
}

function GetVersionNo_Completed(i_Input) {
    ////debugger;
    try {
        //jq_HideMobileLoader();
        jq_HideMobileLoaderAdv("pg_home");
        //alert(i_Input.My_Result.length);

        if (cordova.getAppVersion != undefined) {
            if (i_Input.My_Result.My_MobileVersion.length > 0) {
                cordova.getAppVersion.getVersionNumber().then(function (version){
                    if (parseInt(version.split('.').join('')) < parseInt(i_Input.My_Result.My_MobileVersion[0].NEW_VERSION)) {
                        jq_ConfirmationMessage('New Version', 'There is a new version available! Would you like to upgrade now?', 'ok')
                    }
                });
            }
        }


        sessionStorage.setItem("UserInfo", JSON.stringify(i_Input.My_Result.My_UserInfo));

        if (sessionStorage.getItem('UserInfo') != null) {
            _UserInfo = JSON.parse(sessionStorage.getItem('UserInfo'));
            _Ticket = _UserInfo.Ticket;
        }


        jq_HideMobileLoaderAdv("pg_home");

    }
    catch (e) {
        alert("GetVersionNo_Completed: " + e.Message);
    }
}

/* --------------------------------------------------------------- */
