var Param_StatementOfAccount = new Object();
Param_StatementOfAccount.BROKERCODE = "";
Param_StatementOfAccount.ACCOUNTNUMBER = "";
Param_StatementOfAccount.ACCOUNTNAME = "";
Param_StatementOfAccount.FromDate = moment().subtract(1, 'month').format("DD/MM/YYYY");
Param_StatementOfAccount.ToDate = moment().format("DD/MM/YYYY");
Param_StatementOfAccount.ShowStatement = false;
Param_StatementOfAccount.ShowStatementDetails = false;
Param_StatementOfAccount.Currency='';
Param_StatementOfAccount.TotalDebit='';
Param_StatementOfAccount.TotalCredit='';
Param_StatementOfAccount.Balance = '';
Param_StatementOfAccount.Email = '';
Param_StatementOfAccount.PreviousBalance = '';

var _Param_StatementOfAccount = ko.mapping.fromJS(Param_StatementOfAccount);

MyApp_GVM.List_Satetement_Account = ko.mapping.fromJS([]);
MyApp_GVM.List_SummarySatetement_Account = ko.mapping.fromJS([]);
var StatementOfAccount_Filtered_ByCurrency = [];

$('#pg_StatementOfAccount').bind('pagehide', function () {
    $(this).remove();
    $('.cHide').closest('.ui-btn').hide();
});

$(document).on("pagebeforecreate", "#pg_StatementOfAccount", function (event, ui) {

    //if (localStorage.getItem('UserInfo') != null && localStorage.getItem('UserInfo') != "null") {
    //    jq_NavigateToPage('pg_BrokerLogin');
    //}

    //alert('elkdlekdlek dlek dlek d');
    _Param_StatementOfAccount.ShowStatement(false);
    _Param_StatementOfAccount.ShowStatementDetails(false);
    Validator_Login = $("#Frm_StatementOfAccount").validate({
        rules: {
            txt_SOA_FromDate: { required: true },
            txt_SOA_ToDate: { required: true },
        }
    });



    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1; //January is 0!
    var yyyy = today.getFullYear();
    var mm2 = mm - 1;
    var yyyy = today.getFullYear();



    $('#StatementLogout').bind('tap', function () {

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

    $(this).on("click", "#Statementhome", function (e) {
        jq_NavigateToPage('pg_home');
        e.preventDefault();
    });


    // Mobiscroll Date & Time initialization
    $('#txt_SOA_FromDate').mobiscroll().date({
        theme: 'android-holo-light',        // Specify theme like: theme: 'ios' or omit setting to use default 
        display: 'bubble',    // Specify display mode like: display: 'bottom' or omit setting to use default
        mode: 'mixed',          // More info about mode: http://docs.mobiscroll.com/2-17-1/datetime#!opt-mode
        //minDate: new Date(yyyy, mm2, dd),  // More info about minDate: http://docs.mobiscroll.com/2-17-1/datetime#!opt-minDate
        maxDate: new Date(yyyy, mm2, dd),   // More info about maxDate: http://docs.mobiscroll.com/2-17-1/datetime#!opt-maxDate
        animate: 'swing',
        dateOrder: 'yy MMdd',
        dateFormat: "dd/mm/yy",
        onSelect: function (valueText, inst) {
            ////////debugger;

        },
    });


    // Mobiscroll Date & Time initialization
    $('#txt_SOA_ToDate').mobiscroll().date({
        theme: 'android-holo-light',        // Specify theme like: theme: 'ios' or omit setting to use default 
        display: 'bubble',    // Specify display mode like: display: 'bottom' or omit setting to use default
        mode: 'mixed',          // More info about mode: http://docs.mobiscroll.com/2-17-1/datetime#!opt-mode
        //minDate: new Date(yyyy, mm2, dd),  // More info about minDate: http://docs.mobiscroll.com/2-17-1/datetime#!opt-minDate
        maxDate: new Date(yyyy, mm2, dd),   // More info about maxDate: http://docs.mobiscroll.com/2-17-1/datetime#!opt-maxDate
        animate: 'swing',
        dateOrder: 'yy MMdd',
        dateFormat: "dd/mm/yy",
        onSelect: function (valueText, inst) {
            ////////debugger;

        },
    });

    $(this).on("click", "#btn_SOA_GetStatementOfAccount", function (event) {
        ////////debugger;

        if (localStorage.getItem('UserInfo') == null || localStorage.getItem('UserInfo') == "null") {
            jq_NavigateToPage('pg_BrokerLogin');
        }

        if ($("#Frm_StatementOfAccount").valid()) {

            jq_ShowMobileLoaderAdv("pg_StatementOfAccount");
            _Param_StatementOfAccount.ShowStatementDetails(false);
            _Param_StatementOfAccount.ShowStatement(false);
            GetStatementOfAccount();
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

    $(this).on("click", "#btn_SOA_PrintStatementOfAccount", function (event) {
        ////debugger;
        if (localStorage.getItem('UserInfo') == null || localStorage.getItem('UserInfo') == "null") {
            jq_NavigateToPage('pg_BrokerLogin');
        }

        if ($("#Frm_StatementOfAccount").valid()) {

            jq_ShowMobileLoaderAdv("pg_StatementOfAccount");
            GetStatementOfAccountForPrinting();
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

    $(this).on("click", "#btn_SOA_ShowStatementOfAccount", function (event) {
        ////debugger;
        if (localStorage.getItem('UserInfo') == null || localStorage.getItem('UserInfo') == "null") {
            jq_NavigateToPage('pg_BrokerLogin');
        }

        if ($("#Frm_StatementOfAccount").valid()) {

            jq_ShowMobileLoaderAdv("pg_StatementOfAccount");
            GetStatementOfAccountForShowing();
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


    $(this).on("click", "#btn_SOA_ShareStatementOfAccount", function (event) {
        ////debugger;
        if (localStorage.getItem('UserInfo') == null || localStorage.getItem('UserInfo') == "null") {
            jq_NavigateToPage('pg_BrokerLogin');
        }

        if ($("#Frm_StatementOfAccount").valid()) {

            jq_ShowMobileLoaderAdv("pg_StatementOfAccount");
            GetStatementOfAccountForSharing();
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

   
});

$(document).on("pagebeforeshow", "#pg_StatementOfAccount", function (event, ui) {
    ////debugger;
    $('.cHide').closest('.ui-btn').hide();
    if (localStorage.getItem('UserInfo') == null || localStorage.getItem('UserInfo') == "null") {
        jq_NavigateToPage('pg_BrokerLogin');
    }

});

/* --------------------------------------------------------------- */
function GetStatementOfAccount() {
    //////debugger;
    try {
        /* ---------------- */
        _Param_StatementOfAccount.BROKERCODE(MyApp_GVM.BROKERCODE());
        _Param_StatementOfAccount.ACCOUNTNUMBER(MyApp_GVM.AccountNumber());
        _Param_StatementOfAccount.ACCOUNTNAME(MyApp_GVM.AGENTS_NAME());        
        /* ---------------- */
        _Service_Method = "GetStatementOfAccount";
        _Params = ko.mapping.toJSON(_Param_StatementOfAccount);
        CallService('Service_Call_Completed_GetStatementOfAccount');
        /* ---------------- */
    }
    catch (e) {
        alert("GetStatementOfAccount: " + e.Message);
    }
}

/* --------------------------------------------------------------- */
function GetStatementOfAccountForPrinting() {
    //////debugger;
    try {
        /* ---------------- */
        _Param_StatementOfAccount.BROKERCODE(MyApp_GVM.BROKERCODE());
        _Param_StatementOfAccount.ACCOUNTNUMBER(MyApp_GVM.AccountNumber());
        _Param_StatementOfAccount.ACCOUNTNAME(MyApp_GVM.AGENTS_NAME());
        _Param_StatementOfAccount.Email(MyApp_GVM.EMAIL());
        /* ---------------- */
        _Service_Method = "GetStatementOfAccountForPrinting";
        _Params = ko.mapping.toJSON(_Param_StatementOfAccount);
        CallService('Service_Call_Completed_GetStatementOfAccount');
        /* ---------------- */
    }
    catch (e) {
        alert("GetStatementOfAccountForPrinting: " + e.Message);
    }
}
/* --------------------------------------------------------------- */

function GetStatementOfAccountForShowing() {
    //////debugger;
    try {
        /* ---------------- */
        _Param_StatementOfAccount.BROKERCODE(MyApp_GVM.BROKERCODE());
        _Param_StatementOfAccount.ACCOUNTNUMBER(MyApp_GVM.AccountNumber());
        _Param_StatementOfAccount.ACCOUNTNAME(MyApp_GVM.AGENTS_NAME());
        _Param_StatementOfAccount.Email(MyApp_GVM.EMAIL());
        /* ---------------- */
        _Service_Method = "GetStatementOfAccountForShowing";
        _Params = ko.mapping.toJSON(_Param_StatementOfAccount);
        CallService('Service_Call_Completed_GetStatementOfAccount');
        /* ---------------- */
    }
    catch (e) {
        alert("GetStatementOfAccountForShowing: " + e.Message);
    }
}
/* --------------------------------------------------------------- */
function GetStatementOfAccountForSharing() {
    //////debugger;
    try {
        /* ---------------- */
        _Param_StatementOfAccount.BROKERCODE(MyApp_GVM.BROKERCODE());
        _Param_StatementOfAccount.ACCOUNTNUMBER(MyApp_GVM.AccountNumber());
        _Param_StatementOfAccount.ACCOUNTNAME(MyApp_GVM.AGENTS_NAME());
        _Param_StatementOfAccount.Email(MyApp_GVM.EMAIL());
        /* ---------------- */
        _Service_Method = "GetStatementOfAccountForSharing";
        _Params = ko.mapping.toJSON(_Param_StatementOfAccount);
        CallService('Service_Call_Completed_GetStatementOfAccount');
        /* ---------------- */
    }
    catch (e) {
        alert("GetStatementOfAccountForSharing: " + e.Message);
    }
}

/* --------------------------------------------------------------- */
function GetStatementOfAccountForSharing_Completed(i_Input) {
    ////debugger;
    try {

        $("#sp_NoResultsStatementOfAccount").html("");
        //jq_HideMobileLoader();

        jq_HideMobileLoaderAdv("pg_StatementOfAccount");

        // Show spinner dialog with message
        // Note: spinner dialog is cancelable by default
        SpinnerDialog.show(null, "Please wait to share your Statement File");

        setTimeout(function () {
            SpinnerDialog.hide();
        }, 30000);

        if (i_Input.My_Result.My_StatementOfAccount.length > 0) {
            var inputUri = encodeURI('http://mobile.victoire.com.lb/StatementFiles/Statement_' + MyApp_GVM.AccountNumber() + '.pdf');
            //alert('ekdjekdj kede done');
            window.plugins.socialsharing.share('Here is your Statement Shared File', 'Your Statement', inputUri);
        }
        else {
            //alert('Please Refer To The Company');
            _Param_StatementOfAccount.ShowStatement(false);
            _Param_StatementOfAccount.PreviousBalance('');
            $("#div_HeaderStatement").html("");
            $("#sp_NoResultsStatementOfAccount").html("<br><br>Sorry, no results found matching your criteria.");
            jq_DisplayMessage("MSG_GeneralError", "", "There are no results that match your search!");
        }
    }
    catch (e) {
        alert("GetStatementOfAccountForSharing_Completed: " + e.Message);
    }
}
/* --------------------------------------------------------------- */
/* --------------------------------------------------------------- */
function GetStatementOfAccount_Completed(i_Input) {
    ////debugger;
    try {

        $("#sp_NoResultsStatementOfAccount").html("");
        //jq_HideMobileLoader();
        jq_HideMobileLoaderAdv("pg_StatementOfAccount");
        if (i_Input.My_Result.My_StatementOfAccount.length > 0) {
            _Param_StatementOfAccount.ShowStatement(true);
            _Param_StatementOfAccount.ShowStatementDetails(false);
            $("#div_HeaderStatement").html($("#ListingStatementOfAccountHeaderTemplate").render(i_Input.My_Result.My_StatementOfAccount[0])).trigger('create');
            //$("#div_ListingStatementOfAccount").html($("#ListingStatementOfAccountTemplate").render(i_Input.My_Result.My_StatementOfAccount)).trigger('create');
            //ko.mapping.fromJS(i_Input.My_Result.My_StatementOfAccount, MyApp_GVM.List_Satetement_Account);

            ko.mapping.fromJS(i_Input.My_Result.My_SummaryStatementOfAccount, MyApp_GVM.List_SummarySatetement_Account);
            sessionStorage.setItem("AllStatement", JSON.stringify(i_Input.My_Result.My_StatementOfAccount));
            sessionStorage.setItem("PreviousStatementStatement", JSON.stringify(i_Input.My_Result.My_PreviousSummaryStatementOfAccount));


            //_Param_StatementOfAccount.Currency(i_Input.My_Result.My_StatementOfAccount[0].CurrencyToDisplay);
            //_Param_StatementOfAccount.TotalDebit(i_Input.My_Result.My_StatementOfAccount[0].TotalDebit);
            //_Param_StatementOfAccount.TotalCredit(i_Input.My_Result.My_StatementOfAccount[0].TotalCredit);
            //_Param_StatementOfAccount.Balance(i_Input.My_Result.My_StatementOfAccount[0].Balance);
            //_Param_StatementOfAccount.PreviousBalance(i_Input.My_Result.My_StatementOfAccount[0].PreviousBalance);
            $('.cHide').closest('.ui-btn').show();

        }
        else {
            _Param_StatementOfAccount.ShowStatement(false);
            _Param_StatementOfAccount.PreviousBalance('');
            $("#div_HeaderStatement").html("");
            $("#sp_NoResultsStatementOfAccount").html("<br><br>Sorry, no results found matching your criteria.");
            jq_DisplayMessage("MSG_GeneralError", "", "There are no results that match your search!");
            $('.cHide').closest('.ui-btn').hide();
        }
    }
    catch (e) {
        alert("GetStatementOfAccount_Completed: " + e.Message);
    }
}
/* --------------------------------------------------------------- */
/* --------------------------------------------------------------- */
function GetStatementOfAccountForPrinting_Completed(i_Input) {
    ////debugger;
    try {

        $("#sp_NoResultsStatementOfAccount").html("");
        //jq_HideMobileLoader();
        jq_HideMobileLoaderAdv("pg_StatementOfAccount");
        if (i_Input.My_Result.My_StatementOfAccount.length > 0) {

            //alert('ekdjekdj kede done');
            jq_DisplayMessage("MSG_GeneralInfo", "Successfull!", "Your Statement Has Been Sent Successfully! Don't Forget To Check Your Junk.", null, null, null, null);
        }
        else {
            //alert('Please Refer To The Company');
            _Param_StatementOfAccount.ShowStatement(false);
            _Param_StatementOfAccount.PreviousBalance('');
            $("#div_HeaderStatement").html("");
            $("#sp_NoResultsStatementOfAccount").html("<br><br>Sorry, no results found matching your criteria.");
            jq_DisplayMessage("MSG_GeneralError", "", "There are no results that match your search!");
        }
    }
    catch (e) {
        alert("GetStatementOfAccountForPrinting_Completed: " + e.Message);
    }
}
/* --------------------------------------------------------------- */


/* --------------------------------------------------------------- */
function GetStatementOfAccountForShowing_Completed(i_Input) {
    ////debugger;
    try {
        //https://stackoverflow.com/questions/29311884/download-file-in-jquery-mobile-project
        $("#sp_NoResultsStatementOfAccount").html("");
        //jq_HideMobileLoader();
        if (i_Input.My_Result.My_StatementOfAccount.length > 0) {
            var fileTransfer = new FileTransfer();
            var inputUri = encodeURI('http://mobile.victoire.com.lb/StatementFiles/Statement_' + MyApp_GVM.AccountNumber() + '.pdf');
            var outputPath = cordova.file.dataDirectory + 'Statement_' + MyApp_GVM.AccountNumber() + '.pdf';

            // var outputPath = "/storage/emulated/0/Download/helloworld.pdf";
            //alert("Starting download to " + outputPath);
            fileTransfer.download(
                  inputUri,
                  outputPath,
                function (entry) {
                    //alert("Download complete: " + entry.fullPath + ", URL=" + entry.toURL());

                    jq_HideMobileLoaderAdv("pg_StatementOfAccount");
                    if (device.platform.toUpperCase() == 'IOS') {
                        //alert('inside ios');

                        cordova.plugins.SitewaertsDocumentViewer.viewDocument(
                        entry.toURL(), "application/pdf", {
                            title: "Victoire Statement",
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
                            //alert('inside ANDROID');
                            //For ANDROId///////////////////////////////////////////////////////////////////////////////////////////////
                            cordova.plugins.fileOpener2.open(
                                entry.toURL(), // You can also use a Cordova-style file uri: cdvfile://localhost/persistent/Download/starwars.pdf
                                'application/pdf',
                                {
                                    error: function (e) {
                                        alert('fileOpener2 error status: ' + e.status + ' - Error message: ' + e.message);
                                    },
                                    success: function () {
                                        //alert('fileOpener2 file opened successfully');
                                    }
                                }
                            );
                        }
                },
                function (error) {
                    alert("download error: source=" + error.source + ", target=" + error.target + ", error code=" + error.code);
                });
        }

        else {
            _Param_StatementOfAccount.ShowStatement(false);
            _Param_StatementOfAccount.PreviousBalance('');
            $("#div_HeaderStatement").html("");
            $("#sp_NoResultsStatementOfAccount").html("<br><br>Sorry, no results found matching your criteria.");
            jq_DisplayMessage("MSG_GeneralError", "", "There are no results that match your search!");
        }

    }
    catch (e) {
        alert("GetStatementOfAccountForShowing_Completed: " + e.Message);
    }
}
/* --------------------------------------------------------------- */


/* --------------------------------------------------------------- */
function Service_Call_Completed_GetStatementOfAccount(i_Response) {
    ////////debugger;
    try {
        switch (_Service_Method) {
            case "GetStatementOfAccount":
                GetStatementOfAccount_Completed(i_Response);
                break;
            case "GetStatementOfAccountForPrinting":
                GetStatementOfAccountForPrinting_Completed(i_Response);
                break;
            case "GetStatementOfAccountForShowing":
                GetStatementOfAccountForShowing_Completed(i_Response);
                break;
            case "GetStatementOfAccountForSharing":
                GetStatementOfAccountForSharing_Completed(i_Response);
                break;
        }
    }
    catch (e) {
        alert("Service_Call_Completed_GetStatementOfAccount:" + e.message);
    }
}
/* --------------------------------------------------------------- */
function Div_ShowDetails_Click(obj, Index) {
    ////debugger;


    if ($('#togglePlusMinusStatement_' + Index).hasClass('mins-icon')) {
        $('#togglePlusMinusStatement_' + Index).removeClass('mins-icon').addClass('plus-icon');

    } else {
        $('#togglePlusMinusStatement_' + Index).addClass('mins-icon');
        for (var i = 0; i < MyApp_GVM.List_SummarySatetement_Account().length; i++) {
            if (i != Index) {
                $('#togglePlusMinusStatement_' + i).removeClass('mins-icon').addClass('plus-icon');
            }
        }
    }


    _Param_StatementOfAccount.ShowStatementDetails(true);

    StatementOfAccount_Filtered_ByCurrency = $.Enumerable.From(ko.mapping.toJS(JSON.parse(sessionStorage.getItem('AllStatement'))))
                        .Where("$.CURRENCY=='" + obj.CURRENCY() + "'")
                    .ToArray();

    ko.mapping.fromJS(StatementOfAccount_Filtered_ByCurrency, MyApp_GVM.List_Satetement_Account);

    var match2 = ko.utils.arrayFirst(JSON.parse(sessionStorage.getItem('PreviousStatementStatement')), function (item2) {
        if (item2.CURRENCY.toString().trim() == obj.CURRENCY().toString().trim()) {
            return true;
        }
    });
    if (match2) {
        _Param_StatementOfAccount.PreviousBalance(match2.PrevBalance);
    }
    else {
        _Param_StatementOfAccount.PreviousBalance(0);
    }
    //window.scrollTo(0, 1000);
    $("#ScrollDetails_0").focus();

}

