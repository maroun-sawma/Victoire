var Param_Production = new Object();
Param_Production.BROKERCODE = "";
Param_Production.ACCOUNTNUMBER = "";
Param_Production.ACCOUNTNAME = "";
Param_Production.FromDate = moment().subtract(1, 'month').format("DD/MM/YYYY");
Param_Production.ToDate = moment().format("DD/MM/YYYY");
Param_Production.ShowProduction = false;
Param_Production.ShowProductionDetails = false;
Param_Production.Currency = '';
Param_Production.Email = '';

var _Param_Production = ko.mapping.fromJS(Param_Production);

MyApp_GVM.List_Production= ko.mapping.fromJS([]);
MyApp_GVM.List_SummaryProduction = ko.mapping.fromJS([]);
var Production_Filtered_ByCurrency = [];

$('#pg_Production').bind('pagehide', function () {
    $(this).remove();
    //if (localStorage.getItem('UserInfo') != null && localStorage.getItem('UserInfo') != "null") {
    //    jq_NavigateToPage('pg_BrokerLogin');
    //}
});

$(document).on("pagebeforecreate", "#pg_Production", function (event, ui) {

    //alert('elkdlekdlek dlek dlek d');
    Validator_Login = $("#Frm_Production").validate({
        rules: {
            txt_PD_FromDate: { required: true },
            txt_PD_ToDate: { required: true },
        }
    });



    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1; //January is 0!
    var yyyy = today.getFullYear();
    var mm2 = mm - 1;
    var yyyy = today.getFullYear();

    $('#ProductionLogout').bind('tap', function () {

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

    $(this).on("click", "#Productionhome", function (e) {
        jq_NavigateToPage('pg_home');
        e.preventDefault();
    });


    // Mobiscroll Date & Time initialization
    $('#txt_PD_FromDate').mobiscroll().date({
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
    $('#txt_PD_ToDate').mobiscroll().date({
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

    $(this).on("click", "#btn_PD_GetProduction", function (event) {
        ////////debugger;
        if (localStorage.getItem('UserInfo') == null || localStorage.getItem('UserInfo') == "null") {
            jq_NavigateToPage('pg_BrokerLogin');
        }

        if ($("#Frm_Production").valid()) {

            jq_ShowMobileLoaderAdv("pg_Production");
            _Param_Production.ShowProductionDetails(false);
            _Param_Production.ShowProduction(false);
            GetProduction();
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

    $(this).on("click", "#btn_PD_EmailProduction", function (event) {
        ////debugger;
        if (localStorage.getItem('UserInfo') == null || localStorage.getItem('UserInfo') == "null") {
            jq_NavigateToPage('pg_BrokerLogin');
        }

        if ($("#Frm_Production").valid()) {

            jq_ShowMobileLoaderAdv("pg_Production");
            GetProductionForPrinting();
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

    $(this).on("click", "#btn_PD_ShowProduction", function (event) {
        ////debugger;
        if (localStorage.getItem('UserInfo') == null || localStorage.getItem('UserInfo') == "null") {
            jq_NavigateToPage('pg_BrokerLogin');
        }

        if ($("#Frm_Production").valid()) {

            jq_ShowMobileLoaderAdv("pg_Production");
            GetProductionForShowing();
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

    $(this).on("click", "#btn_PD_ShareProduction", function (event) {
        ////debugger;
        if (localStorage.getItem('UserInfo') == null || localStorage.getItem('UserInfo') == "null") {
            jq_NavigateToPage('pg_BrokerLogin');
        }

        if ($("#Frm_Production").valid()) {

            jq_ShowMobileLoaderAdv("pg_Production");
            GetProductionForSharing();
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

$(document).on("pagebeforeshow", "#pg_Production", function (event, ui) {
    ////debugger;
    $('.cHide').closest('.ui-btn').hide();
    if (localStorage.getItem('UserInfo') == null || localStorage.getItem('UserInfo') == "null") {
        jq_NavigateToPage('pg_BrokerLogin');
    }
});

/* --------------------------------------------------------------- */
function GetProduction() {
    ////debugger;
    try {
        /* ---------------- */
        _Param_Production.BROKERCODE(MyApp_GVM.BROKERCODE());
        _Param_Production.ACCOUNTNUMBER(MyApp_GVM.AccountNumber());
        _Param_Production.ACCOUNTNAME(MyApp_GVM.AGENTS_NAME());
        /* ---------------- */
        _Service_Method = "GetProduction";
        _Params = ko.mapping.toJSON(_Param_Production);
        CallService('Service_Call_Completed_GetProduction');
        /* ---------------- */
    }
    catch (e) {
        alert("GetProduction: " + e.Message);
    }
}

/* --------------------------------------------------------------- */
function GetProductionForPrinting() {
    //////debugger;
    try {
        /* ---------------- */
        _Param_Production.BROKERCODE(MyApp_GVM.BROKERCODE());
        _Param_Production.ACCOUNTNUMBER(MyApp_GVM.AccountNumber());
        _Param_Production.ACCOUNTNAME(MyApp_GVM.AGENTS_NAME());
        _Param_Production.Email(MyApp_GVM.EMAIL());
        /* ---------------- */
        _Service_Method = "GetProductionForPrinting";
        _Params = ko.mapping.toJSON(_Param_Production);
        CallService('Service_Call_Completed_GetProduction');
        /* ---------------- */
    }
    catch (e) {
        alert("GetProductionForPrinting: " + e.Message);
    }
}
/* --------------------------------------------------------------- */

function GetProductionForShowing() {
    //////debugger;
    try {
        /* ---------------- */
        _Param_Production.BROKERCODE(MyApp_GVM.BROKERCODE());
        _Param_Production.ACCOUNTNUMBER(MyApp_GVM.AccountNumber());
        _Param_Production.ACCOUNTNAME(MyApp_GVM.AGENTS_NAME());
        _Param_Production.Email(MyApp_GVM.EMAIL());
        /* ---------------- */
        _Service_Method = "GetProductionForShowing";
        _Params = ko.mapping.toJSON(_Param_Production);
        CallService('Service_Call_Completed_GetProduction');
        /* ---------------- */
    }
    catch (e) {
        alert("GetProductionForShowing: " + e.Message);
    }
}


/* --------------------------------------------------------------- */

function GetProductionForSharing() {
    //////debugger;
    try {
        /* ---------------- */
        _Param_Production.BROKERCODE(MyApp_GVM.BROKERCODE());
        _Param_Production.ACCOUNTNUMBER(MyApp_GVM.AccountNumber());
        _Param_Production.ACCOUNTNAME(MyApp_GVM.AGENTS_NAME());
        _Param_Production.Email(MyApp_GVM.EMAIL());
        /* ---------------- */
        _Service_Method = "GetProductionForSharing";
        _Params = ko.mapping.toJSON(_Param_Production);
        CallService('Service_Call_Completed_GetProduction');
        /* ---------------- */
    }
    catch (e) {
        alert("GetProductionForSharing: " + e.Message);
    }
}
/* --------------------------------------------------------------- */
function GetProduction_Completed(i_Input) {
    ////debugger;
    try {

        $("#sp_NoResultsProduction").html("");
        //jq_HideMobileLoader();
        jq_HideMobileLoaderAdv("pg_Production");
        if (i_Input.My_Result.My_Production.length > 0) {
            _Param_Production.ShowProduction(true);
            _Param_Production.ShowProductionDetails(false);
            $("#div_ShowHeaderProduction").html($("#ListingProductionHeaderTemplate").render(i_Input.My_Result.My_Production[0])).trigger('create');

            ko.mapping.fromJS(i_Input.My_Result.My_SummaryProduction, MyApp_GVM.List_SummaryProduction);
            sessionStorage.setItem("AllProduction", JSON.stringify(i_Input.My_Result.My_Production));

            $('.cHide').closest('.ui-btn').show();

        }
        else {
            _Param_Production.ShowProduction(false);
            $("#div_ShowHeaderProduction").html("");
            $("#sp_NoResultsProduction").html("<br><br>Sorry, no results found matching your criteria.");
            jq_DisplayMessage("MSG_GeneralError", "", "There are no results that match your search!");
            $('.cHide').closest('.ui-btn').hide();
        }
    }
    catch (e) {
        alert("GetProduction_Completed: " + e.Message);
    }
}
/* --------------------------------------------------------------- */
/* --------------------------------------------------------------- */
function GetProductionForPrinting_Completed(i_Input) {
    ////debugger;
    try {

        $("#sp_NoResultsStatementOfAccount").html("");
        //jq_HideMobileLoader();
        jq_HideMobileLoaderAdv("pg_Production");
        if (i_Input.My_Result.My_Production.length > 0) {

            //alert('ekdjekdj kede done');
            jq_DisplayMessage("MSG_GeneralInfo", "Successfull!", "Your Production Has Been Sent Successfully! Don't Forget To Check Your Junk.", null, null, null, null);
        }
        else {
            _Param_Production.ShowProduction(false);
            $("#div_ShowHeaderProduction").html("");
            $("#sp_NoResultsProduction").html("<br><br>Sorry, no results found matching your criteria.");
            jq_DisplayMessage("MSG_GeneralError", "", "There are no results that match your search!");
        }
    }
    catch (e) {
        alert("GetProductionForPrinting_Completed: " + e.Message);
    }
}
/* --------------------------------------------------------------- */
/* --------------------------------------------------------------- */
function GetProductionForShowing_Completed(i_Input) {
    ////debugger;
    try {
        //https://stackoverflow.com/questions/29311884/download-file-in-jquery-mobile-project
        $("#sp_NoResultsStatementOfAccount").html("");
        //jq_HideMobileLoader();
        if (i_Input.My_Result.My_Production.length > 0)
        {
            var fileTransfer = new FileTransfer();
            var inputUri = encodeURI('http://mobile.victoire.com.lb/ProductionFiles/Production_' + MyApp_GVM.AccountNumber() + '.pdf');
            var outputPath = cordova.file.dataDirectory + 'Production_' + MyApp_GVM.AccountNumber() + '.pdf';
            // var outputPath = "/storage/emulated/0/Download/helloworld.pdf";
            //alert("Starting download to " + outputPath);
            fileTransfer.download(
                  inputUri,
                  outputPath,
                function (entry) {
                    //alert("Download complete: " + entry.fullPath + ", URL=" + entry.toURL());

                    jq_HideMobileLoaderAdv("pg_Production");
                    if (device.platform.toUpperCase() == 'IOS') {
                        //alert('inside ios');
                        //var ref = cordova.InAppBrowser.open('tarif/AllRiskTariff.pdf', '_blank', 'location=no');
                        //alert("http://test.victoire.com.lb/ProductionFiles/Production_" + MyApp_GVM.AccountNumber() + ".pdf");

                        cordova.plugins.SitewaertsDocumentViewer.viewDocument(
                        entry.toURL(), "application/pdf", {
                            title: "Victoire Production",
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
            _Param_Production.ShowProduction(false);
            $("#div_ShowHeaderProduction").html("");
            $("#sp_NoResultsProduction").html("<br><br>Sorry, no results found matching your criteria.");
            jq_DisplayMessage("MSG_GeneralError", "", "There are no results that match your search!");
        }



        //var fileTransfer = new FileTransfer();
        //var fileURL = "";
        //if (device.platform.toUpperCase() == 'IOS') {
        //    fileURL = encodeURI(cordova.file.applicationDirectory + 'ProductionFiles/Production_' + MyApp_GVM.AccountNumber() + '.pdf')
        //}
        //else {
        //    fileURL = encodeURI(cordova.file.applicationDirectory + 'www/ProductionFiles/Production_' + MyApp_GVM.AccountNumber() + '.pdf')
        //}
        //var uri = encodeURI('http://test.victoire.com.lb/ProductionFiles/Production_' + MyApp_GVM.AccountNumber() + '.pdf');
        ////"/ProductionFiles/Production_"//fileEntry.toURL();
        //var FullPath = fileURL  + MyApp_GVM.AccountNumber() + '.pdf';
        //alert(fileURL);
        //alert(uri);
        //alert(FullPath);

        //fileTransfer.download(
        //    uri,
        //    fileURL,
        //    function (entry) {
        //        alert("download complete: " + entry.toURL());
        //        alert('inside');


        //    },
        //    function (error) {
        //        alert("download error source " + error.source);
        //        alert("download error target " + error.target);
        //        alert("download error code" + error.code);
        //    },
        //    false,
        //    {
        //        headers: {
        //            "Authorization": "Basic dGVzdHVzZXJuYW1lOnRlc3RwYXNzd29yZA=="
        //        }
        //    }
        //);

        //var FullPath = fileURL + '/' + MyApp_GVM.AccountNumber() + '.pdf';

        //if (i_Input.My_Result.My_Production.length > 0) {
        //    //https://stackoverflow.com/questions/22431775/phonegap-download-pdffiles
        //    //https://bybrick.github.io/2014/03/04/downloading-a-pdf-in-phonegap/
        //    ////https://www.raymondcamden.com/2016/06/26/linking-to-pdfs-in-cordova-apps
        //    //https://www.npmjs.com/package/cordova-plugin-file-transfer
        //    //For IOS//////////////////////////////////////////////////////////////////////////////////


        //}

    }
    catch (e) {
        alert("GetProductionForShowing_Completed: " + e.Message);
    }
}
/* --------------------------------------------------------------- */

/* --------------------------------------------------------------- */
function GetProductionForSharing_Completed(i_Input) {
    ////debugger;
    try {
        //https://stackoverflow.com/questions/29311884/download-file-in-jquery-mobile-project
        $("#sp_NoResultsStatementOfAccount").html("");
        //jq_HideMobileLoader();
        if (i_Input.My_Result.My_Production.length > 0) {


            jq_HideMobileLoaderAdv("pg_Production");

            // Show spinner dialog with message
            // Note: spinner dialog is cancelable by default
            SpinnerDialog.show(null, "Please wait to share your Production File");

            setTimeout(function () {
                SpinnerDialog.hide();
            }, 30000);

            var inputUri = encodeURI('http://mobile.victoire.com.lb/ProductionFiles/Production_' + MyApp_GVM.AccountNumber() + '.pdf');

            window.plugins.socialsharing.share('Here is your Production Shared File', 'Your Production', inputUri);
        }

        else {
            _Param_Production.ShowProduction(false);
            $("#div_ShowHeaderProduction").html("");
            $("#sp_NoResultsProduction").html("<br><br>Sorry, no results found matching your criteria.");
            jq_DisplayMessage("MSG_GeneralError", "", "There are no results that match your search!");
        }
    }
    catch (e) {
        alert("GetProductionForShowing_Completed: " + e.Message);
    }
}
/* --------------------------------------------------------------- */

/* --------------------------------------------------------------- */
function Service_Call_Completed_GetProduction(i_Response) {
    ////////debugger;
    try {
        switch (_Service_Method) {
            case "GetProduction":
                GetProduction_Completed(i_Response);
                break;
            case "GetProductionForPrinting":
                GetProductionForPrinting_Completed(i_Response);
                break;
            case "GetProductionForShowing":
                GetProductionForShowing_Completed(i_Response);
                break;
            case "GetProductionForSharing":
                GetProductionForSharing_Completed(i_Response);
                break;
        }
    }
    catch (e) {
        alert("Service_Call_Completed_GetProduction:" + e.message);
    }
}
/* --------------------------------------------------------------- */
function Div_ShowProductionDetails_Click(obj,Index) {
    //debugger;

    if ($('#togglePlusMinus_' + Index).hasClass('mins-icon')) {
        $('#togglePlusMinus_' + Index).removeClass('mins-icon').addClass('plus-icon');
    } else {
        $('#togglePlusMinus_' + Index).addClass('mins-icon');
        for (var i = 0; i < MyApp_GVM.List_SummaryProduction().length; i++) {
            if (i != Index) {
                $('#togglePlusMinus_' + i).removeClass('mins-icon').addClass('plus-icon');
            }
        }
    }

    _Param_Production.ShowProductionDetails(true);

    Production_Filtered_ByCurrency = $.Enumerable.From(ko.mapping.toJS(JSON.parse(sessionStorage.getItem('AllProduction'))))
                        .Where("$.CURRENCY=='" + obj.CURRENCY() + "' && $.POLICY_CODE=='" + obj.Category() + "' ")
                    .ToArray();

    ko.mapping.fromJS(Production_Filtered_ByCurrency, MyApp_GVM.List_Production);

}

