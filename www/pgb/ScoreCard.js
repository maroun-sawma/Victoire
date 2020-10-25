var Param_ScoreCardObj = new Object();
Param_ScoreCardObj.BROKERCODE = "";
Param_ScoreCardObj.ACCOUNTNUMBER = "";
Param_ScoreCardObj.ACCOUNTNAME = "";
Param_ScoreCardObj.FromMonth = "";
Param_ScoreCardObj.FromYear = "";
Param_ScoreCardObj.ShowScoreCard = false;
Param_ScoreCardObj.NPREM_LAST_YEAR = ""; 
Param_ScoreCardObj.NTARGET_THIS_YEAR = "";
Param_ScoreCardObj.NACTUALSALES = "";
Param_ScoreCardObj.NPERSISTENCY = "";
Param_ScoreCardObj.NPENETRATION = "";
Param_ScoreCardObj.NACTIVITY = "";
Param_ScoreCardObj.NLOSSRATIO = "";
Param_ScoreCardObj.SALARIES = "";
Param_ScoreCardObj.NPAYMENTRATIO = "";
Param_ScoreCardObj.NCIONOBLIGATORY = "";
Param_ScoreCardObj.NCIONNONOBLIGATORY = "";
Param_ScoreCardObj.NOVERWORK = "";
Param_ScoreCardObj.NSCORINGOVER400 = ""; 
Param_ScoreCardObj.NADVANCESALARY = "";
Param_ScoreCardObj.NOVERCOMMISSION = "";
Param_ScoreCardObj.NBONUSPERPOLICY = "";
Param_ScoreCardObj.ShowScoreCardRenewDetails = false;
Param_ScoreCardObj.ShowScoreCardNewDetails = false;

var _Param_ScoreCardObj = ko.mapping.fromJS(Param_ScoreCardObj);

MyApp_GVM.List_ScoreCardMonth = ko.mapping.fromJS([]);
MyApp_GVM.List_ScoreCardYear = ko.mapping.fromJS([]);

var List_ScoreCardMonth = [];
var List_ScoreCardYear = [];

MyApp_GVM.List_ScoreCardProductNew = ko.mapping.fromJS([]);
MyApp_GVM.List_SummaryScoreCardProductNew = ko.mapping.fromJS([]);
MyApp_GVM.List_ScoreCardProductReNew = ko.mapping.fromJS([]);
MyApp_GVM.List_SummaryScoreCardProductReNew = ko.mapping.fromJS([]);


$('#pg_ScoreCards').bind('pagehide', function () {
    $(this).remove();
});

$(document).on("pagebeforecreate", "#pg_ScoreCards", function (event, ui) {
    //if (localStorage.getItem('UserInfo') != null && localStorage.getItem('UserInfo') != "null") {
    //    jq_NavigateToPage('pg_BrokerLogin');
    //}

    //alert('elkdlekdlek dlek dlek d');
    _Param_ScoreCardObj.ShowScoreCard(false);

    Validator_Login = $("#Frm_ScoreCard").validate({
        rules: {
            ddl_SCD_Month: { required: true },
            ddl_SCD_Year: { required: true },
        }
    });

    $('#ScoreCardLogout').bind('tap', function () {

        try {

            localStorage.setItem("UserInfo", null);
            MyApp_GVM.UserID(null);
            MyApp_GVM.OwnerID(null);
            MyApp_GVM.BROKERCODE(null);
            MyApp_GVM.AGENTS_NAME(null);
            MyApp_GVM.EMAIL(null);
            MyApp_GVM.AccountNumber(null)
            jq_NavigateToPage('pg_BrokerLogin');
        }
        catch (e) {

            alert("BrokerLogout: " + e.Message);
        }

    });

    $(this).on("click", "#ScoreCardhome", function (e) {
        jq_NavigateToPage('pg_home');
        e.preventDefault();
    });

    $(this).on("click", "#btn_SCD_GetScoreCardResult", function (event) {
        //debugger;
        if (localStorage.getItem('UserInfo') == null || localStorage.getItem('UserInfo') == "null") {
            jq_NavigateToPage('pg_BrokerLogin');
        }

        if ($("#Frm_ScoreCard").valid()) {

            jq_ShowMobileLoaderAdv("pg_ScoreCards");
            _Param_ScoreCardObj.ShowScoreCard(false);
            _Param_ScoreCardObj.ShowScoreCardRenewDetails(false);
            _Param_ScoreCardObj.ShowScoreCardNewDetails(false);
            GetScoreCardResult();
        }
            /* ---------------- */
        else {
            // Focus invalid input
            // -------------------
            Validator_Login.focusInvalid();
            // -------------------
        }
        event.preventDefault();
        event.stopPropagation();
    });

    $('#btn_ScorecardHelp').bind('tap', function () {
        //alert('Camera Clicked');
        if (localStorage.getItem('UserInfo') == null || localStorage.getItem('UserInfo') == "null") {
            jq_NavigateToPage('pg_BrokerLogin');
        }

        try {

            //alert(device.platform);
            ////https://www.raymondcamden.com/2016/06/26/linking-to-pdfs-in-cordova-apps
            //For IOS//////////////////////////////////////////////////////////////////////////////////
            if (device.platform.toUpperCase() == 'IOS') {
                //var ref = cordova.InAppBrowser.open('tarif/BodilyTariff.pdf', '_blank', 'location=no');
                cordova.plugins.SitewaertsDocumentViewer.viewDocument(
                "HelpFiles/SCORECARDHELP.pdf", "application/pdf", {
                    title: "Scorecard Explanation/Help",
                    documentView: { closeLabel: "Close" },
                    navigationView: { closeLabel: "Close" },
                    email: { enabled: true },
                    print: { enabled: true },
                    openWith: { enabled: true },
                    search: { enabled: true }
                }, onShow, onClose, onMissingApp, onError);

            }
            else
                if (device.platform.toUpperCase() == 'ANDROID') {
                    //For ANDROId///////////////////////////////////////////////////////////////////////////////////////////////
                    window.resolveLocalFileSystemURL(cordova.file.applicationDirectory + 'www/HelpFiles/SCORECARDHELP.pdf', function (fileEntry) {
                        window.resolveLocalFileSystemURL(cordova.file.externalDataDirectory, function (dirEntry) {
                            fileEntry.copyTo(dirEntry, 'file.pdf', function (newFileEntry) {
                                cordova.plugins.fileOpener2.open(newFileEntry.nativeURL, 'application/pdf',
                                {
                                    error: function (e) {
                                        alert('Error status: ' + e.status + ' - Error message: ' + e.message);
                                    },
                                    success: function () {
                                        //alert('file opened successfully');
                                    }
                                }
                                );
                            });
                        });
                    });
                }
        }
        catch (e) {
            alert("btn_ScorecardHelp: " + e.Message);
        }

    });

});

$(document).on("pagebeforeshow", "#pg_ScoreCards", function (event, ui) {
    ////debugger;
    if (localStorage.getItem('UserInfo') == null || localStorage.getItem('UserInfo') == "null") {
        jq_NavigateToPage('pg_BrokerLogin');
    }

    FillScoreCardMonthes();
    FillScoreCardYear();
    _Param_ScoreCardObj.FromMonth(new Date().getMonth()+1);
    _Param_ScoreCardObj.FromYear(new Date().getFullYear());
    $("#ddl_SCD_Month").selectmenu('refresh');
    $("#ddl_SCD_Year").selectmenu('refresh');
});


/* --------------------------------------------------------------- */
function FillScoreCardYear() {
    ////////debugger;
    try {
        var d = new Date();
        var n = d.getFullYear();
        var limit = d.getFullYear() - 5;
        List_ScoreCardYear = [];
        /* ---------------- */
        for (i = new Date().getFullYear() + 1 ; i >= limit; i--) {
            var Year = new Object();
            Year.CODE = i;
            Year.CODEDesc = i.toString();
            List_ScoreCardYear.push({
                CODE: Year.CODE,
                CODEDesc: Year.CODEDesc
            });
        }

        ko.mapping.fromJS(List_ScoreCardYear, MyApp_GVM.List_ScoreCardYear);

    }
    catch (e) {
        alert("FillScoreCardYear : " + e.Message);
    }
}
/* --------------------------------------------------------------- */
/* --------------------------------------------------------------- */
/* --------------------------------------------------------------- */
function FillScoreCardMonthes() {
    ////////debugger;
    try {
        List_ScoreCardMonth = [];
        /* ---------------- */
        var MonthOpt;
        for (i = 1; i <= 12; i++) {

            switch (i) {
                case 1:
                    MonthOpt = new Object();
                    MonthOpt.Code = 1;
                    MonthOpt.Desc = "January";
                    List_ScoreCardMonth.push({
                        Code: MonthOpt.Code,
                        Desc: MonthOpt.Desc
                    });
                    break;
                case 2:
                    MonthOpt = new Object();
                    MonthOpt.Code = 2;
                    MonthOpt.Desc = "February";
                    List_ScoreCardMonth.push({
                        Code: MonthOpt.Code,
                        Desc: MonthOpt.Desc
                    });
                    break;
                case 3:
                    MonthOpt = new Object();
                    MonthOpt.Code = 3;
                    MonthOpt.Desc = "March";
                    List_ScoreCardMonth.push({
                        Code: MonthOpt.Code,
                        Desc: MonthOpt.Desc
                    });
                    break;
                case 4:
                    MonthOpt = new Object();
                    MonthOpt.Code = 4;
                    MonthOpt.Desc = "April";
                    List_ScoreCardMonth.push({
                        Code: MonthOpt.Code,
                        Desc: MonthOpt.Desc
                    });
                    break;
                case 5:
                    MonthOpt = new Object();
                    MonthOpt.Code = 5;
                    MonthOpt.Desc = "May";
                    List_ScoreCardMonth.push({
                        Code: MonthOpt.Code,
                        Desc: MonthOpt.Desc
                    });
                    break;
                case 6:
                    MonthOpt = new Object();
                    MonthOpt.Code = 6;
                    MonthOpt.Desc = "June";
                    List_ScoreCardMonth.push({
                        Code: MonthOpt.Code,
                        Desc: MonthOpt.Desc
                    });
                    break;
                case 7:
                    MonthOpt = new Object();
                    MonthOpt.Code = 7;
                    MonthOpt.Desc = "July";
                    List_ScoreCardMonth.push({
                        Code: MonthOpt.Code,
                        Desc: MonthOpt.Desc
                    });
                    break;
                case 8:
                    MonthOpt = new Object();
                    MonthOpt.Code = 8;
                    MonthOpt.Desc = "August";
                    List_ScoreCardMonth.push({
                        Code: MonthOpt.Code,
                        Desc: MonthOpt.Desc
                    });
                    break;
                case 9:
                    MonthOpt = new Object();
                    MonthOpt.Code = 9;
                    MonthOpt.Desc = "September";
                    List_ScoreCardMonth.push({
                        Code: MonthOpt.Code,
                        Desc: MonthOpt.Desc
                    });
                    break;
                case 10:
                    MonthOpt = new Object();
                    MonthOpt.Code = 10;
                    MonthOpt.Desc = "October";
                    List_ScoreCardMonth.push({
                        Code: MonthOpt.Code,
                        Desc: MonthOpt.Desc
                    });
                    break;
                case 11:
                    MonthOpt = new Object();
                    MonthOpt.Code = 11;
                    MonthOpt.Desc = "November";
                    List_ScoreCardMonth.push({
                        Code: MonthOpt.Code,
                        Desc: MonthOpt.Desc
                    });
                    break;
                case 12:
                    MonthOpt = new Object();
                    MonthOpt.Code = 12;
                    MonthOpt.Desc = "December";
                    List_ScoreCardMonth.push({
                        Code: MonthOpt.Code,
                        Desc: MonthOpt.Desc
                    });
                    break;
            }
        }
        ko.mapping.fromJS(List_ScoreCardMonth, MyApp_GVM.List_ScoreCardMonth);

    }
    catch (e) {
        alert("FillScoreCardMonthes : " + e.Message);
    }
}
/* --------------------------------------------------------------- */
/* --------------------------------------------------------------- */
function GetScoreCardResult() {
    //debugger;
    try {
        /* ---------------- */
        _Param_ScoreCardObj.BROKERCODE(MyApp_GVM.BROKERCODE());
        _Param_ScoreCardObj.ACCOUNTNUMBER(MyApp_GVM.AccountNumber());
        _Param_ScoreCardObj.ACCOUNTNAME(MyApp_GVM.AGENTS_NAME());
        /* ---------------- */
        _Service_Method = "GetScoreCardResult";
        _Params = ko.mapping.toJSON(_Param_ScoreCardObj);
        CallService('Service_Call_Completed_GetScoreCardResult');
        /* ---------------- */
    }
    catch (e) {
        alert("GetScoreCardResult: " + e.Message);
    }
}
/* --------------------------------------------------------------- */
/* --------------------------------------------------------------- */
function GetScoreCardResult_Completed(i_Input) {
    //debugger;
    try {

        $("#sp_NoResultsScoreCards").html("");
        //jq_HideMobileLoader();
        jq_HideMobileLoaderAdv("pg_ScoreCards");

        if (i_Input.My_Result.My_ScoreCardProductNew.length > 0 || i_Input.My_Result.My_ScoreCardProductReNew.length > 0) {
            _Param_ScoreCardObj.ShowScoreCard(true);
            ko.mapping.fromJS(i_Input.My_Result.My_ScoreCardProductNew, MyApp_GVM.List_ScoreCardProductNew);
            ko.mapping.fromJS(i_Input.My_Result.My_ScoreCardProductReNew, MyApp_GVM.List_ScoreCardProductReNew);
            ko.mapping.fromJS(i_Input.My_Result.My_SummaryScoreCardProductNew, MyApp_GVM.List_SummaryScoreCardProductNew);
            ko.mapping.fromJS(i_Input.My_Result.My_SummaryScoreCardProductReNew, MyApp_GVM.List_SummaryScoreCardProductReNew);
            ko.mapping.fromJS(i_Input.My_Result.My_ScoreCardTotal, _Param_ScoreCardObj);
        }
        else {
            _Param_ScoreCardObj.ShowScoreCard(false);
            $("#sp_NoResultsScoreCards").html("<br><br>Sorry, no results found matching your criteria.");
            jq_DisplayMessage("MSG_GeneralError", "", 'Sorry, no results found matching your criteria.');
        }
    }
    catch (e) {
        alert("GetDueDatesPolicies_Completed: " + e.Message);
    }
}
/* --------------------------------------------------------------- */
/* --------------------------------------------------------------- */
function Service_Call_Completed_GetScoreCardResult(i_Response) {
    //debugger;
    try {
        switch (_Service_Method) {
            case "GetScoreCardResult":
                GetScoreCardResult_Completed(i_Response);
                break;
        }
    }
    catch (e) {
        alert("Service_Call_Completed_GetScoreCardResult:" + e.message);
    }
}
/* --------------------------------------------------------------- */
/* --------------------------------------------------------------- */
function Div_ShowScoreCardProductRenew_Click(obj, Index) {
    ////debugger;


    if ($('#toggleScoreCardRenewPlusMinus_' + Index).hasClass('mins-icon2')) {
        $('#toggleScoreCardRenewPlusMinus_' + Index).removeClass('mins-icon2').addClass('plus-icon2');
        _Param_ScoreCardObj.ShowScoreCardRenewDetails(false);

    } else {
        $('#toggleScoreCardRenewPlusMinus_' + Index).addClass('mins-icon2');
        _Param_ScoreCardObj.ShowScoreCardRenewDetails(true);
    }

}

function Div_ShowScoreCardProductNew_Click(obj, Index) {
    ////debugger;


    if ($('#toggleScoreCardNewPlusMinus_' + Index).hasClass('mins-icon2')) {
        $('#toggleScoreCardNewPlusMinus_' + Index).removeClass('mins-icon2').addClass('plus-icon2');
        _Param_ScoreCardObj.ShowScoreCardNewDetails(false);

    } else {
        $('#toggleScoreCardNewPlusMinus_' + Index).addClass('mins-icon2');
        _Param_ScoreCardObj.ShowScoreCardNewDetails(true);
    }

}

