var TravelPolicy = new Object();
var UserID = 38;
localStorage.setItem("TotalPrem", 0);
TravelPolicy.POLICIES_ID = 0;
TravelPolicy.POLICY_CODE = "NP";
TravelPolicy.POLICY_NO = 0;
TravelPolicy.ENDORSEMENT = 0;
TravelPolicy.POLICY_DESC = "";
TravelPolicy.SHEET_NO = 0;
TravelPolicy.MPLANS_ID = 0;
TravelPolicy.ENTRY_USER_ID = UserID;
TravelPolicy.INSURED_ID = 0;
TravelPolicy.SUBJECTASSURED_ID = 0;
TravelPolicy.OPRDATE = convertDate(new Date());
TravelPolicy.STARTDATE = convertDate(new Date());
TravelPolicy.EXPIRYDATE = convertDate(new Date());
TravelPolicy.CURRENCY_ID = 8;
TravelPolicy.RATE = 0;
TravelPolicy.SUMINSURED = 0;
TravelPolicy.TOTALSUMINSURED = 0;
TravelPolicy.NETPREMIUM = 0;
TravelPolicy.RECEIVEDPREMIUM = 0;
TravelPolicy.ACCESSORIES = 0;
TravelPolicy.POLICY_COST = 0;
TravelPolicy.FIXEDSTAMPS = 0;
TravelPolicy.PROPSTAMPS = 0;
TravelPolicy.MUNITAX = 0;
TravelPolicy.TOTALPREMIUM = 0;
TravelPolicy.PRINTCOUNT = 0;
TravelPolicy.CREATIONDATE = convertDate(new Date());
TravelPolicy.MODIFICATIONDATE = convertDate(new Date());
TravelPolicy.SYNCED = false;
TravelPolicy.SUBUSERS_ID = null;
TravelPolicy.CANCELLATIONDATE = convertDate(new Date());
TravelPolicy.CANCELLATIONREASON = "";
TravelPolicy.ISCANCELLED = false;
TravelPolicy.ENTRY_DATE = convertDate(new Date());
TravelPolicy.OWNER_ID = 1;
TravelPolicy.IsWorldWide = true;
TravelPolicy.WorldWide = 'W';
TravelPolicy.PLANSTYPE = 'W65';
TravelPolicy.ShowCetificate = 0;
TravelPolicy.My_Members = [];
TravelPolicy.TOTALPREMIUMCOMPUTED = 0;
TravelPolicy.DisableSaveButton = false;
TravelPolicy.EnablePrintButton = false;
TravelPolicy.InsNo = "0";

TravelPolicy.PASSPORT1 = "";
TravelPolicy.DOB1 = "";
TravelPolicy.INSURED1 = "";








TravelPolicy.PASSPORT2 = "";
TravelPolicy.DOB2 = "";
TravelPolicy.INSURED2 = "";

TravelPolicy.PASSPORT3 = "";
TravelPolicy.DOB3 = "";
TravelPolicy.INSURED3 = "";

TravelPolicy.PASSPORT4 = "";
TravelPolicy.DOB4 = "";
TravelPolicy.INSURED4 = "";

TravelPolicy.PASSPORT5 = "";
TravelPolicy.DOB5 = "";
TravelPolicy.INSURED5 = "";

TravelPolicy.PASSPORT6 = "";
TravelPolicy.DOB6 = "";
TravelPolicy.INSURED6 = "";

TravelPolicy.PASSPORT7 = "";
TravelPolicy.DOB7 = "";
TravelPolicy.INSURED7 = "";

TravelPolicy.Travel_INSURED = new Object();
TravelPolicy.Travel_INSURED.INSUREDTRAVEL_ID = 0;

TravelPolicy.Travel_INSURED.ENTRY_USER_ID = UserID;
TravelPolicy.Travel_INSURED.TITLE = "Mr";
TravelPolicy.Travel_INSURED.INSURED_NAME = "";
TravelPolicy.Travel_INSURED.INSURED_ADDRESS = "";
TravelPolicy.Travel_INSURED.COUNTRIES_ID = 14;
TravelPolicy.Travel_INSURED.TELEPHONE = "";
TravelPolicy.Travel_INSURED.POBOX = "";
TravelPolicy.Travel_INSURED.EMAIL = "";
TravelPolicy.Travel_INSURED.WORKERSNATIONALITY_ID = 97
TravelPolicy.Travel_INSURED.GENDER = "M";
TravelPolicy.Travel_INSURED.PASSPORT = "";
TravelPolicy.Travel_INSURED.BIRTHDATE = "";
TravelPolicy.Travel_INSURED.AGE = 0;
TravelPolicy.Travel_INSURED.OWNER_ID = 1;




// ----------------------------------
var _Params_Get_Travel_Startup_Data = new Object();
_Params_Get_Travel_Startup_Data.OWNER_ID = 1;




















//------------------------------------

var _TravelPolicy = ko.mapping.fromJS(TravelPolicy);
//When Mapping it creates automatically a model thats why no need to create it down.

/*---------------------------------------------------------------*/

// ----------------------------------
var Member_family = function (_INSUREDTRAVEL_MEMBERS_ID, _MEMBER_NAME, _MEMBER_BIRTHDATE, _MEMBER_AGE, _MEMBER_GENDER, _MEMBER_PASSPORT, _MEMBER_PREMIUM) {

    //alert('test member family');
    var self = this;
    self.INSUREDTRAVEL_MEMBERS_ID = _INSUREDTRAVEL_MEMBERS_ID;
    self.MEMBER_NAME = ko.observable(_MEMBER_NAME).extend({ required: true });
    self.MEMBER_BIRTHDATE = ko.observable(_MEMBER_BIRTHDATE).extend({ required: true });
    self.MEMBER_AGE = ko.observable(_MEMBER_AGE);
    self.MEMBER_GENDER = ko.observable(_MEMBER_GENDER).extend({ required: true });
    self.MEMBER_PASSPORT = ko.observable(_MEMBER_PASSPORT).extend({ required: true });
    self.MEMBER_PREMIUM = ko.observable(_MEMBER_PREMIUM).extend({ required: true });







};
/*---------------------------------------------------------------*/

var List_TravelPLans_Type = [{ "PlANSTYPE_VAL": "W300", "PlANSTYPE_DESC": "World Wide 300 000$" }, { "PlANSTYPE_VAL": "W65", "PlANSTYPE_DESC": "World Wide 65 000$" }, { "PlANSTYPE_VAL": "SCH", "PlANSTYPE_DESC": "Schengen" }, { "PlANSTYPE_VAL": "SP16", "PlANSTYPE_DESC": "World Wide 65 000$ Sport 1" }, { "PlANSTYPE_VAL": "SP26", "PlANSTYPE_DESC": "World Wide 65 000$ Sport 2" }, { "PlANSTYPE_VAL": "SP13", "PlANSTYPE_DESC": "World Wide 300 000$ Sport 1" }, { "PlANSTYPE_VAL": "SP23", "PlANSTYPE_DESC": "World Wide 300 000$ Sport 2" }];
var _List_TravelPLans_Type = ko.mapping.fromJS(List_TravelPLans_Type);


var _List_CountyOfResidance = ko.mapping.fromJS([]);
var _List_Nationality = ko.mapping.fromJS([]);
var _List_TravelPLans = ko.mapping.fromJS([]);
var TravelPlans_Filtered = [];
var TravelPlans_Filtered_Mem = [];
var _List_TravelPLans_Mem = ko.mapping.fromJS([]);
var _List_SubUser = ko.mapping.fromJS([]); //JSON.parse(sessionStorage.getItem('SubUserInfo'));
var age = 0;
var age_Fam = 0;
var ll_Exit = 0;
var TravelMembers = 0;

var List_InsuredNo = [];
var _List_InsuredNo = ko.mapping.fromJS(List_InsuredNo);
var Validator_Login;

//var List_YearofBirth = [];
//var List_YearofBirth2 = [];
//var List_YearofBirth3 = [];
//var List_YearofBirth4 = [];
//var List_YearofBirth5 = [];
//var List_YearofBirth6 = [];
//var List_YearofBirth7 = [];

//var _List_YearofBirth = ko.mapping.fromJS(List_YearofBirth);
//var _List_YearofBirth2 = ko.mapping.fromJS(List_YearofBirth2);
//var _List_YearofBirth3 = ko.mapping.fromJS(List_YearofBirth3);
//var _List_YearofBirth4 = ko.mapping.fromJS(List_YearofBirth4);
//var _List_YearofBirth5 = ko.mapping.fromJS(List_YearofBirth5);
//var _List_YearofBirth6 = ko.mapping.fromJS(List_YearofBirth6);
//var _List_YearofBirth7 = ko.mapping.fromJS(List_YearofBirth7);


$(function () {
    ////////debugger;
    //alert('1');


    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1; //January is 0!
    var yyyy = today.getFullYear();
    var mm2 = mm - 1;















    // Mobiscroll Date & Time initialization
    $('#Txt_Tr_Birthdate').mobiscroll().date({
        theme: 'android-holo-light',        // Specify theme like: theme: 'ios' or omit setting to use default 
        display: 'bubble',    // Specify display mode like: display: 'bottom' or omit setting to use default
        mode: 'mixed',          // More info about mode: http://docs.mobiscroll.com/2-17-1/datetime#!opt-mode
        //minDate: new Date(yyyy-50, mm, dd),  // More info about minDate: http://docs.mobiscroll.com/2-17-1/datetime#!opt-minDate
        maxDate: new Date(yyyy - 1, mm2, dd),   // More info about maxDate: http://docs.mobiscroll.com/2-17-1/datetime#!opt-maxDate
        animate: 'swing',
        dateOrder: 'yy MMdd',
        dateFormat: "dd/mm/yy",
        onSelect: function (valueText, inst) {
            ////////debugger;
            age = 0;
            var validDate = jq_parseDate2(valueText);
            age = Math.floor(calcAge(validDate.toString()));

            TravelPlans_Filtered = [];
            TravelPlans_Filtered = $.Enumerable.From(ko.mapping.toJS(JSON.parse(sessionStorage.getItem('TravelPlans'))))
                             .Where("$.FROMTRAVELAGE <=" + age + " && $.MAXAGEALLOWED >=" + age + " && $.BODYTYPECODE=='" + _TravelPolicy.PLANSTYPE() + "' && $.TRAVELPERSON_NO==1")
                            .ToArray();
            ko.mapping.fromJS(TravelPlans_Filtered, _List_TravelPLans);
            /* ------Fill Insured Number ------- */
            FillInsuredNumber();
        },
    });


    // Mobiscroll Date & Time initialization
    $('#Txt_Tr_EffectiveDate').mobiscroll().date({
        theme: 'android-holo-light',        // Specify theme like: theme: 'ios' or omit setting to use default 
        display: 'bubble',    // Specify display mode like: display: 'bottom' or omit setting to use default
        mode: 'mixed',          // More info about mode: http://docs.mobiscroll.com/2-17-1/datetime#!opt-mode
        minDate: new Date(yyyy, mm2, dd),  // More info about minDate: http://docs.mobiscroll.com/2-17-1/datetime#!opt-minDate
        //maxDate: new Date(yyyy, mm - 2, dd),   // More info about maxDate: http://docs.mobiscroll.com/2-17-1/datetime#!opt-maxDate
        animate: 'swing',
        dateOrder: 'yy MMdd',
        dateFormat: "dd/mm/yy",
        onSelect: function (valueText, inst) {
            ////////debugger;
            $("#DDL_Tr_Plan").change();
        },
    });

    // Mobiscroll Date & Time initialization
    $('#Txt_Tr_ExpiryDate').mobiscroll().date({
        theme: 'android-holo-light',        // Specify theme like: theme: 'ios' or omit setting to use default 
        display: 'bubble',    // Specify display mode like: display: 'bottom' or omit setting to use default
        mode: 'mixed',          // More info about mode: http://docs.mobiscroll.com/2-17-1/datetime#!opt-mode
        //minDate: new Date(yyyy, mm, dd),  // More info about minDate: http://docs.mobiscroll.com/2-17-1/datetime#!opt-minDate
        //maxDate: new Date(yyyy, mm - 2, dd),   // More info about maxDate: http://docs.mobiscroll.com/2-17-1/datetime#!opt-maxDate
        animate: 'swing',
        dateOrder: 'yy MMdd',
        dateFormat: "dd/mm/yy"
    });

    // Mobiscroll Date & Time initialization
    $('#txt_DOB_1').mobiscroll().date({
        theme: 'android-holo-light',        // Specify theme like: theme: 'ios' or omit setting to use default 
        display: 'bubble',    // Specify display mode like: display: 'bottom' or omit setting to use default
        mode: 'mixed',          // More info about mode: http://docs.mobiscroll.com/2-17-1/datetime#!opt-mode
        //minDate: new Date(yyyy-50, mm, dd),  // More info about minDate: http://docs.mobiscroll.com/2-17-1/datetime#!opt-minDate
        maxDate: new Date(yyyy - 1, mm2, dd),   // More info about maxDate: http://docs.mobiscroll.com/2-17-1/datetime#!opt-maxDate
        animate: 'swing',
        dateOrder: 'yy MMdd',
        dateFormat: "dd/mm/yy",
        onSelect: function (valueText, inst) {
            ////////debugger;
            age_Fam = 0;
            //var validDate = jq_parseDate2(valueText);
            //age_Fam = Math.floor(calcAge(validDate.toString()));

            //if (age != 0)
            //{
            //    if (age_Fam > age)
            //    {
            //        jq_DisplayMessage("MSG_GeneralError", "", "Family Member Age Should Be Less Than Main Insured Member Age!");
            //        _TravelPolicy.DOB1("");
            //    }
            //}
        },
    });

    // Mobiscroll Date & Time initialization
    $('#txt_DOB_2').mobiscroll().date({
        theme: 'android-holo-light',        // Specify theme like: theme: 'ios' or omit setting to use default 
        display: 'bubble',    // Specify display mode like: display: 'bottom' or omit setting to use default
        mode: 'mixed',          // More info about mode: http://docs.mobiscroll.com/2-17-1/datetime#!opt-mode
        //minDate: new Date(yyyy-50, mm, dd),  // More info about minDate: http://docs.mobiscroll.com/2-17-1/datetime#!opt-minDate
        maxDate: new Date(yyyy - 1, mm2, dd),   // More info about maxDate: http://docs.mobiscroll.com/2-17-1/datetime#!opt-maxDate
        animate: 'swing',
        dateOrder: 'yy MMdd',
        dateFormat: "dd/mm/yy",
        onSelect: function (valueText, inst) {
            ////////debugger;
            //age_Fam = 0;
            //var validDate = jq_parseDate2(valueText);
            //age_Fam = Math.floor(calcAge(validDate.toString()));

            //if (age != 0) {
            //    if (age_Fam > age) {
            //        jq_DisplayMessage("MSG_GeneralError", "", "Family Member Age Should Be Less Than Main Insured Member Age!");
            //        _TravelPolicy.DOB2("");
            //    }
            //}
        },
    });


    // Mobiscroll Date & Time initialization
    $('#txt_DOB_3').mobiscroll().date({
        theme: 'android-holo-light',        // Specify theme like: theme: 'ios' or omit setting to use default 
        display: 'bubble',    // Specify display mode like: display: 'bottom' or omit setting to use default
        mode: 'mixed',          // More info about mode: http://docs.mobiscroll.com/2-17-1/datetime#!opt-mode
        //minDate: new Date(yyyy-50, mm, dd),  // More info about minDate: http://docs.mobiscroll.com/2-17-1/datetime#!opt-minDate
        maxDate: new Date(yyyy - 1, mm2, dd),   // More info about maxDate: http://docs.mobiscroll.com/2-17-1/datetime#!opt-maxDate
        animate: 'swing',
        dateOrder: 'yy MMdd',
        dateFormat: "dd/mm/yy",
        onSelect: function (valueText, inst) {
            ////////debugger;
            //age_Fam = 0;
            //var validDate = jq_parseDate2(valueText);
            //age_Fam = Math.floor(calcAge(validDate.toString()));

            //if (age != 0) {
            //    if (age_Fam > age) {
            //        jq_DisplayMessage("MSG_GeneralError", "", "Family Member Age Should Be Less Than Main Insured Member Age!");
            //        _TravelPolicy.DOB3("");
            //    }
            //}
        },
    });

    // Mobiscroll Date & Time initialization
    $('#txt_DOB_4').mobiscroll().date({
        theme: 'android-holo-light',        // Specify theme like: theme: 'ios' or omit setting to use default 
        display: 'bubble',    // Specify display mode like: display: 'bottom' or omit setting to use default
        mode: 'mixed',          // More info about mode: http://docs.mobiscroll.com/2-17-1/datetime#!opt-mode
        //minDate: new Date(yyyy-50, mm, dd),  // More info about minDate: http://docs.mobiscroll.com/2-17-1/datetime#!opt-minDate
        maxDate: new Date(yyyy - 1, mm2, dd),   // More info about maxDate: http://docs.mobiscroll.com/2-17-1/datetime#!opt-maxDate
        animate: 'swing',
        dateOrder: 'yy MMdd',
        dateFormat: "dd/mm/yy",
        onSelect: function (valueText, inst) {
            ////////debugger;
            //age_Fam = 0;
            //var validDate = jq_parseDate2(valueText);
            //age_Fam = Math.floor(calcAge(validDate.toString()));

            //if (age != 0) {
            //    if (age_Fam > age) {
            //        jq_DisplayMessage("MSG_GeneralError", "", "Family Member Age Should Be Less Than Main Insured Member Age!");
            //        _TravelPolicy.DOB4("");
            //    }
            //}
        },
    });

    // Mobiscroll Date & Time initialization
    $('#txt_DOB_5').mobiscroll().date({
        theme: 'android-holo-light',        // Specify theme like: theme: 'ios' or omit setting to use default 
        display: 'bubble',    // Specify display mode like: display: 'bottom' or omit setting to use default
        mode: 'mixed',          // More info about mode: http://docs.mobiscroll.com/2-17-1/datetime#!opt-mode
        //minDate: new Date(yyyy-50, mm, dd),  // More info about minDate: http://docs.mobiscroll.com/2-17-1/datetime#!opt-minDate
        maxDate: new Date(yyyy - 1, mm2, dd),   // More info about maxDate: http://docs.mobiscroll.com/2-17-1/datetime#!opt-maxDate
        animate: 'swing',
        dateOrder: 'yy MMdd',
        dateFormat: "dd/mm/yy",
        onSelect: function (valueText, inst) {
            ////////debugger;
            //age_Fam = 0;
            //var validDate = jq_parseDate2(valueText);
            //age_Fam = Math.floor(calcAge(validDate.toString()));

            //if (age != 0) {
            //    if (age_Fam > age) {
            //        jq_DisplayMessage("MSG_GeneralError", "", "Family Member Age Should Be Less Than Main Insured Member Age!");
            //        _TravelPolicy.DOB5("");
            //    }
            //}
        },
    });

    // Mobiscroll Date & Time initialization
    $('#txt_DOB_6').mobiscroll().date({
        theme: 'android-holo-light',        // Specify theme like: theme: 'ios' or omit setting to use default 
        display: 'bubble',    // Specify display mode like: display: 'bottom' or omit setting to use default
        mode: 'mixed',          // More info about mode: http://docs.mobiscroll.com/2-17-1/datetime#!opt-mode
        //minDate: new Date(yyyy-50, mm, dd),  // More info about minDate: http://docs.mobiscroll.com/2-17-1/datetime#!opt-minDate
        maxDate: new Date(yyyy - 1, mm2, dd),   // More info about maxDate: http://docs.mobiscroll.com/2-17-1/datetime#!opt-maxDate
        animate: 'swing',
        dateOrder: 'yy MMdd',
        dateFormat: "dd/mm/yy",
        onSelect: function (valueText, inst) {
            ////////debugger;
            //age_Fam = 0;
            //var validDate = jq_parseDate2(valueText);
            //age_Fam = Math.floor(calcAge(validDate.toString()));

            //if (age != 0) {
            //    if (age_Fam > age) {
            //        jq_DisplayMessage("MSG_GeneralError", "", "Family Member Age Should Be Less Than Main Insured Member Age!");
            //        _TravelPolicy.DOB6("");
            //    }
            //}
        },
    });

    // Mobiscroll Date & Time initialization
    $('#txt_DOB_7').mobiscroll().date({
        theme: 'android-holo-light',        // Specify theme like: theme: 'ios' or omit setting to use default 
        display: 'bubble',    // Specify display mode like: display: 'bottom' or omit setting to use default
        mode: 'mixed',          // More info about mode: http://docs.mobiscroll.com/2-17-1/datetime#!opt-mode
        //minDate: new Date(yyyy-50, mm, dd),  // More info about minDate: http://docs.mobiscroll.com/2-17-1/datetime#!opt-minDate
        maxDate: new Date(yyyy - 1, mm2, dd),   // More info about maxDate: http://docs.mobiscroll.com/2-17-1/datetime#!opt-maxDate
        animate: 'swing',
        dateOrder: 'yy MMdd',
        dateFormat: "dd/mm/yy",
        onSelect: function (valueText, inst) {
            ////////debugger;
            //age_Fam = 0;
            //var validDate = jq_parseDate2(valueText);
            //age_Fam = Math.floor(calcAge(validDate.toString()));

            //if (age != 0) {
            //    if (age_Fam > age) {
            //        jq_DisplayMessage("MSG_GeneralError", "", "Family Member Age Should Be Less Than Main Insured Member Age!");
            //        _TravelPolicy.DOB7("");
            //    }
            //}
        },
    });

    $('#btn_BuyPolicy_Travel').addClass('ui-disabled');
});


$(document).on("pagebeforecreate", "#pg_Travel", function (event, ui) {


    Validator_Login = $("#Frm_Travel").validate({
        rules: {
            Txt_Tr_InsuredName: { required: true },
            Txt_Tr_Address: { required: true },
            DDL_Tr_CountyOfResidance: { required: true },
            Txt_Tr_Telephone: { required: true },
            Txt_Tr_Email: { required: true },
            Txt_Tr_Birthdate: { required: true },
            DDL_Tr_Nationality: { required: true },
            Txt_Tr_Passport: { required: true },
            Txt_Tr_EffectiveDate: { required: true },
            DDL_Tr_PlanType: { required: true },
            DDL_Tr_Plan: { required: true },
            Txt_Tr_ExpiryDate: { required: true }
        }
    });


    $(this).on("click", "#btn_GetPrices_Travel", function (event) {
        ////////debugger;

        var Insured = $("input.InsuredNumber")

        for (i = 1; i <= Insured.length; i++) {
            if ($("#txt_Insured_" + i).is(':visible')) {
                if ($.trim($("#txt_Insured_" + i).val()) == "" || $.trim($("#txt_Passport_" + i).val()) == "" || $.trim($("#txt_DOB_" + i).val()) == "") {
                    jq_DisplayMessage("MSG_GeneralError", "", "Please Fill All Insured Members Data.!");
                    $("#txt_Insured_" + i).focus();
                    return false;
                }

            }
        }

        if ($("#Frm_Travel").valid()) {

            var func = function () {

                jq_ShowMobileLoader();
                Edit_Travel();
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


    $(this).on("click", "#btn_BuyPolicy_Travel", function (event) {
        ////////debugger;

        if (parseInt(_TravelPolicy.POLICIES_ID()) > 0) {
            //cordova.InAppBrowser.open http://localhost:4160/MobilePayment.aspx?PolicyCode=
            var ref = cordova.InAppBrowser.open('http://online.victoire.com.lb/MobilePayment.aspx?PolicyCode=' + _TravelPolicy.POLICY_CODE() + "&PolicyNo=" + _TravelPolicy.POLICY_NO().toString() + "&USER_ID=" + _TravelPolicy.ENTRY_USER_ID().toString(), '_blank', 'hideurlbar=yes');

            //var timer = setInterval(function () {
            //    if (ref.closed) {
            //        clearInterval(timer);
            //        alert('closed');
            //        //////debugger;
            //        var queryString = event.url.replace(/^[^\?]+\??/, '');
            //        var params = jq_parseQuery(queryString);
            //        // ---------------

            //        // ---------------
            //        var cp_status = params["status"];
            //        var str_cp_status = cp_status.toString().toLowerCase();
            //        var PolicyRef = params["PolicyRef"];
            //        var str_PolicyRef = PolicyRef.toString().toLowerCase();
            //        var Amount = params["Amount"];
            //        //alert(event.url + " " + cp_status + 'ejkejkjdekjdkejkdjekdjekdj');










            //        cp_status_Glob = str_cp_status;
            //        status_Glob = cp_status.split("~")[0];
            //        error_Glob = cp_status.split("~")[1];
            //        PolicyRef_Glob = PolicyRef;
            //        Amount_Glob = Amount;

            //        $.mobile.changePage('PaymentResult.html', { reverse: true });




            //    }
            //}, 5000);








            ref.addEventListener('loadstart', function (event) {
                //alert(event.url);
                if (event.url.toLowerCase().indexOf("mobilepagerouter.aspx") != -1) {
                    try {
                        // ---------------

                        _InApp_Closed = true;
                        // ---------------

                        // ---------------
                        ref.close();
                        // ---------------

                        // ---------------
                        var queryString = event.url.replace(/^[^\?]+\??/, '');
                        var params = jq_parseQuery(queryString);
                        // ---------------



                        // ---------------
                        var cp_status = params["status"];
                        var str_cp_status = cp_status.toString().toLowerCase();
                        var PolicyRef = params["PolicyRef"];
                        var str_PolicyRef = PolicyRef.toString().toLowerCase();
                        var Amount = params["Amount"];
                        //alert(event.url + " " + cp_status + 'ejkejkjdekjdkejkdjekdjekdj');

                        cp_status_Glob = str_cp_status;
                        status_Glob = cp_status.split("~")[0];
                        error_Glob = cp_status.split("~")[1];
                        PolicyRef_Glob = PolicyRef;
                        Amount_Glob = Amount;

                        $.mobile.changePage('PaymentResult.html', { reverse: true });


                        //$.mobile.changePage('PaymentResult.html?cp_status=' + str_cp_status + "&PolicyRef=" + str_PolicyRef + "&Amount=" + Amount, { reverse: true });
                        // alert(str_cp_status + " " + str_PolicyRef + " " + "Final Direction")
                        // ---------------

                        // ---------------
                        //jq_NavigateToPage("pg_payreturn");
                        // ---------------
                    }
                    catch (e) {
                        jq_DisplayMessage("MSG_GeneralError", "", e.message);
                    }

                }

            });

            ref.addEventListener('loadstop', function (event) {
                //alert(event.url + " " + "Load Stop Event");
                if (event.url.toLowerCase().indexOf("mobilepagerouter.aspx") != -1) {
                    try {
                        // ---------------
                        //alert(event.url + " " + "Load Stop Event");
                        _InApp_Closed = true;
                        // ---------------

                        // ---------------
                        ref.close();
                        // ---------------

                        // ---------------
                        var queryString = event.url.replace(/^[^\?]+\??/, '');
                        var params = jq_parseQuery(queryString);
                        // ---------------

                        // ---------------
                        var cp_status = params["status"];
                        var str_cp_status = cp_status.toString().toLowerCase();
                        var PolicyRef = params["PolicyRef"];
                        var str_PolicyRef = PolicyRef.toString().toLowerCase();
                        var Amount = params["Amount"];
                        //alert(event.url + " " + cp_status + 'mmmmmmmmmmmmmmmmmmmmmm');
                        //alert(str_cp_status + " " + str_PolicyRef + " " + "Final Direction")
                        // ---------------
                        cp_status_Glob = str_cp_status;
                        status_Glob = cp_status.split("~")[0];
                        error_Glob = cp_status.split("~")[1];
                        PolicyRef_Glob = PolicyRef;
                        Amount_Glob = Amount;

                        $.mobile.changePage('PaymentResult.html', { reverse: true });
                        // ---------------
                        //jq_NavigateToPage("pg_payreturn");
                        // ---------------
                    }
                    catch (e) {
                        jq_DisplayMessage("MSG_GeneralError", "", e.message);
                    }

                }
            });

        }
        else {
            // Focus invalid input
            // -------------------
            jq_DisplayMessage("MSG_GeneralError", "", "Get An Offer Then Pay Your Policy!");
            return;
            // -------------------
        }

        event.preventDefault();
        event.stopPropagation();
    });


    $("#ddl_InsuredNo").bind("change", function (event, ui) {
        /* ---------------- */
        ////////debugger;
        var HTMLInsuredNo = '';
        /* ---------------- */
        //alert('edededed ' + $(this).val());
        if ($(this).val() != '' && $(this).val() !== "undefined" && $(this).val() !== null && _TravelPolicy.Travel_INSURED.BIRTHDATE() != "") {
            for (i = 1; i <= 7 ; i++) {
                $("#li_Insured_" + i).hide();
            }
            //Empty invisible texboxes
            var InsuredNum = $("input.InsuredNumber")
            for (i = 1; i <= InsuredNum.length; i++) {
                if (!$("#txt_Insured_" + i).is(':visible')) {
                    $("#txt_Insured_" + i).val("");
                }

                if (!$("#txt_Passport_" + i).is(':visible')) {
                    $("#txt_Passport_" + i).val("");
                }

                if (!$("#txt_DOB_" + i).is(':visible')) {
                    $("#txt_DOB_" + i).val("");
                }
            }

            for (i = 1; i <= $(this).val() ; i++) {
                $("#li_Insured_" + i).show("slow");
            }
        }
        else {
            for (i = 1; i <= 7 ; i++) {
                $("#li_Insured_" + i).hide();
            }

            //Empty invisible texboxes
            var InsuredNum = $("input.InsuredNumber")
            for (i = 1; i <= InsuredNum.length; i++) {
                if (!$("#txt_Insured_" + i).is(':visible')) {
                    $("#txt_Insured_" + i).val("");
                }

                if (!$("#txt_Passport_" + i).is(':visible')) {
                    $("#txt_Passport_" + i).val("");
                }

                if (!$("#txt_DOB_" + i).is(':visible')) {
                    $("#txt_DOB_" + i).val("");
                }
            }
            _TravelPolicy.InsNo("0");
            _TravelPolicy.My_Members = [];

        }
        /* ---------------- */
    });

    // ----------------------------------
    $("#DDL_Tr_PlanType").on("change", function (event) {
        //alert('plan');
        ////////debugger;
        if ($.trim($(this).val()) != '') {
            var SelectedVal = $.trim($(this).val());
            _TravelPolicy.PLANSTYPE(SelectedVal.toString());

            //alert(sessionStorage.getItem('TravelPlans'));
            if (sessionStorage.getItem('TravelPlans') != null) {
                if (JSON.parse(sessionStorage.getItem('TravelPlans')).length > 0 && age >= 0) {
                    //alert('test');
                    //TravelMembers = (((parseInt(_TravelPolicy.My_Members().length) + 1) >= 2) ? 2 : 1);
                    TravelPlans_Filtered = $.Enumerable.From(ko.mapping.toJS(JSON.parse(sessionStorage.getItem('TravelPlans'))))
                                     .Where("$.FROMTRAVELAGE <=" + age + " && $.MAXAGEALLOWED >=" + age + " && $.BODYTYPECODE=='" + _TravelPolicy.PLANSTYPE() + "' && $.TRAVELPERSON_NO==1")
                                    .ToArray();
                    ////////debugger;
                    ko.mapping.fromJS(TravelPlans_Filtered, _List_TravelPLans);
                }
            }

        }



    });

    // ----------------------------------
    // ----------------------------------
    $("#DDL_Tr_Plan").on("change", function (event) {
        //alert('plan');
        ////////debugger;
        if ($.trim($(this).val()) != '') {
            var SelectedVal = $.trim($(this).val());
            //alert(SelectedVal);
            var match = ko.utils.arrayFirst(_List_TravelPLans(), function (item) {
                if (item.PLANSH_ID().toString() == SelectedVal.toString()) {
                    return true;
                }
            });
            //alert(match);
            if (match) {
                //alert('2');
                //Fill ExpiryDate

                var parts = _TravelPolicy.STARTDATE().toString().split("/");
                var d = new Date(parseInt(parts[2], 10), parseInt(parts[1], 10) - 1, parseInt(parts[0], 10));
                if (parseInt(match.MINAGEALLOWED()) > 180) {
                    d.setDate(d.getDate() - 1);
                    d.setFullYear(d.getFullYear() + 1);
                }
                else {
                    d.setDate(d.getDate() + (parseInt(match.MINAGEALLOWED()) - 1));
                }

                _TravelPolicy.EXPIRYDATE(convertDate(d))
                //$("#Txt_Tr_ExpiryDate").datepicker("setDate", $.datepicker.formatDate("dd/mm/yy", d));
                //$('#Hd_Tr_ExpiryDate').val($.datepicker.formatDate("yy-mm-dd", $("#Txt_Tr_ExpiryDate").datepicker('getDate'))).trigger("change");
            }



        }



















    });
    // ----------------------------------
    // ----------------------------------

    ko.applyBindings((_TravelPolicy), document.getElementById('ct_Travel'));








});
$(document).on("pagebeforeshow", "#pg_Travel", function (event, ui) {
    ////////debugger;
    /* -------------------------------------------------- */
    // if (!js_FncCommon()) { return; };
    /* -------------------------------------------------- */
    //alert('page bind');
    /* SEO */
    Validator_Login.resetForm();
    /* -------------------------------------------------- */
    $("meta[name=description]").attr("content", "Get Travel Quotation");
    $("title").html("Get Travel Quotation");
    /* -------------------------------------------------- */


    /* ---------------- */
    //FillYearOfBirth();
    /* ---------------- */
    var func = function () {

        jq_ShowMobileLoader();
        Get_Travel_Startup_Data();
    };

    setTimeout(func, 300);
    /* ---------------- */

    /* Refresh Controls */
    $("#DDL_Tr_CountyOfResidance").change();
    /* ---------------- */

    /* Refresh Controls */
    $("#DDL_Tr_Nationality").change();
    $("#DDL_Tr_PlanType").change();
    $("#DDL_Tr_Plan").change();
    $("#ddl_InsuredNo").change();

});

function FillInsuredNumber() {
    ////////debugger;

    try {
        List_InsuredNo = [];
        /* ---------------- */
        for (i = 1; i < 8; i++) {
            var InsuredNo = new Object();
            InsuredNo.InsNo = i;
            List_InsuredNo.push(InsuredNo);
        }
        ko.mapping.fromJS(List_InsuredNo, _List_InsuredNo);
    }
    catch (e) {
        alert("FillInsuredNumber : " + e.Message);
    }
}

//function FillYearOfBirth() {
//    ////////debugger;
//    try {
//        var d = new Date();
//        var n = d.getFullYear();
//        List_YearofBirth = []; List_YearofBirth2 = []; List_YearofBirth3 = []; List_YearofBirth4 = []; List_YearofBirth5 = []; List_YearofBirth6 = []; List_YearofBirth7 = [];
//        /* ---------------- */
//        for (i = new Date().getFullYear() ; i > 1940; i--) {
//            var YearofBirth = new Object();
//            YearofBirth.DOB1 = i;
//            YearofBirth.DOB1Desc = i.toString() + ' ' + '( ' + parseInt(n - i).toString() + ' years old)';
//            List_YearofBirth.push({
//                DOB1: YearofBirth.DOB1,
//                DOB1Desc: YearofBirth.DOB1Desc
//            });

//            var YearofBirth2 = new Object();
//            YearofBirth2.DOB2 = i;
//            YearofBirth2.DOB2Desc = i.toString() + ' ' + '( ' + parseInt(n - i).toString() + ' years old)';
//            List_YearofBirth2.push({
//                DOB2: YearofBirth2.DOB2,
//                DOB2Desc: YearofBirth2.DOB2Desc
//            });

//            var YearofBirth3 = new Object();
//            YearofBirth3.DOB3 = i;
//            YearofBirth3.DOB3Desc = i.toString() + ' ' + '( ' + parseInt(n - i).toString() + ' years old)';
//            List_YearofBirth3.push({
//                DOB3: YearofBirth3.DOB3,
//                DOB3Desc: YearofBirth3.DOB3Desc
//            });

//            var YearofBirth4 = new Object();
//            YearofBirth4.DOB4 = i;
//            YearofBirth4.DOB4Desc = i.toString() + ' ' + '( ' + parseInt(n - i).toString() + ' years old)';
//            List_YearofBirth4.push({
//                DOB4: YearofBirth4.DOB4,
//                DOB4Desc: YearofBirth4.DOB4Desc
//            });

//            var YearofBirth5 = new Object();
//            YearofBirth5.DOB5 = i;
//            YearofBirth5.DOB5Desc = i.toString() + ' ' + '( ' + parseInt(n - i).toString() + ' years old)';
//            List_YearofBirth5.push({
//                DOB5: YearofBirth5.DOB5,
//                DOB5Desc: YearofBirth5.DOB5Desc
//            });

//            var YearofBirth6 = new Object();
//            YearofBirth6.DOB6 = i;
//            YearofBirth6.DOB6Desc = i.toString() + ' ' + '( ' + parseInt(n - i).toString() + ' years old)';
//            List_YearofBirth6.push({
//                DOB6: YearofBirth6.DOB6,
//                DOB6Desc: YearofBirth6.DOB6Desc
//            });

//            var YearofBirth7 = new Object();
//            YearofBirth7.DOB7 = i;
//            YearofBirth7.DOB7Desc = i.toString() + ' ' + '( ' + parseInt(n - i).toString() + ' years old)';
//            List_YearofBirth7.push({
//                DOB7: YearofBirth7.DOB7,
//                DOB7Desc: YearofBirth7.DOB7Desc
//            });
//        }

//        ko.mapping.fromJS(List_YearofBirth, _List_YearofBirth);
//        ko.mapping.fromJS(List_YearofBirth2, _List_YearofBirth2);
//        ko.mapping.fromJS(List_YearofBirth3, _List_YearofBirth3);
//        ko.mapping.fromJS(List_YearofBirth4, _List_YearofBirth4);
//        ko.mapping.fromJS(List_YearofBirth5, _List_YearofBirth5);
//        ko.mapping.fromJS(List_YearofBirth6, _List_YearofBirth6);
//        ko.mapping.fromJS(List_YearofBirth7, _List_YearofBirth7);

//        //alert(ko.toJSON(_List_YearofMake));


//    }
//    catch (e) {
//        alert("FillYearOfBirth : " + e.Message);
//    }
//}








/* --------------------------------------------------------------- */
/* --------------i_FISCAL_YEAR_ID is the USER_ID------------------------------------------------- */
function Get_Travel_Startup_Data() {
    try {
        ////////debugger;online

        //alert('test');
        _Params_Get_Travel_Startup_Data.OWNER_ID = 1;
        _Params_Get_Travel_Startup_Data.USER_ID = UserID;
        _Params_Get_Travel_Startup_Data.PCODE = "NP";

        _Params = JSON.stringify(_Params_Get_Travel_Startup_Data);


        _Service_Method = "Get_Travel_Startup_Data";

        CallService('Service_Call_Completed_Travel');
    }
    catch (e) {
        alert("Get_Travel_Startup_Data: " + e.Message);
    }
}
/* --------------------------------------------------------------- */

/* --------------------------------------------------------------- */
function Service_Call_Completed_Travel(i_Response) {
    ////////debugger;
    try {
        switch (_Service_Method) {
            case "Get_Travel_Startup_Data":
                Get_Travel_Startup_Data_Completed(i_Response);
                break;
            case "Edit_Travel":
                Edit_Travel_Completed(i_Response);
                break;
        }
    }
    catch (e) {
        alert("Service_Call_Completed:" + e.message);
    }
}

/* --------------------------------------------------------------- */
function Get_Travel_Startup_Data_Completed(i_Input) {
    try {
        // alert('t3est');
        if (i_Input.My_Result.TravelPlansH == null) {
            jq_DisplayMessage("MSG_GeneralError", "", "No Available Plans. Please Contact The Company!");
            return;
        }
        //alert('test');
        ko.mapping.fromJS(i_Input.My_Result.WorkersNationality, _List_Nationality);
        ko.mapping.fromJS(i_Input.My_Result.Countries, _List_CountyOfResidance);
        sessionStorage.setItem("TravelPlans", JSON.stringify(i_Input.My_Result.TravelPlansH));
        _TravelPolicy.SHEET_NO(0);
        $("#DDL_Tr_PlanType").selectmenu('refresh');
    }
    catch (e) {
        alert("Get_Travel_Startup_Data_Completed: " + e.message);
    }
}
/* --------------------------------------------------------------- */

/* --------------i_FISCAL_YEAR_ID is the USER_ID------------------------------------------------- */
function Edit_Travel() {
    try {
        ////////debugger;
        var d = new Date();
        var n = d.getFullYear();
        _TravelPolicy.My_Members = []
        //alert('test');col === "screwdriver" ? " selected " : ""
        for (i = 1; i <= parseInt(_TravelPolicy.InsNo() === undefined ? "0" : _TravelPolicy.InsNo().toString()) ; i++) {

            _TravelPolicy.My_Members.unshift(new Member_family(-1, $("#txt_Insured_" + i).val(), jq_parseDate2($("#txt_DOB_" + i).val()), 0, 'M', $("#txt_Passport_" + i).val(), 0));
        }

        _TravelPolicy.CREATIONDATE(jq_parseDate2(_TravelPolicy.CREATIONDATE()));
        _TravelPolicy.MODIFICATIONDATE(jq_parseDate2(_TravelPolicy.MODIFICATIONDATE()));
        _TravelPolicy.CANCELLATIONDATE(jq_parseDate2(_TravelPolicy.CANCELLATIONDATE()));
        _TravelPolicy.ENTRY_DATE(jq_parseDate2(_TravelPolicy.ENTRY_DATE()));
        _TravelPolicy.OPRDATE(jq_parseDate2(_TravelPolicy.OPRDATE()));
        _TravelPolicy.STARTDATE(jq_parseDate2(_TravelPolicy.STARTDATE()));
        _TravelPolicy.EXPIRYDATE(jq_parseDate2(_TravelPolicy.EXPIRYDATE()));
        _TravelPolicy.Travel_INSURED.BIRTHDATE(jq_parseDate2(_TravelPolicy.Travel_INSURED.BIRTHDATE()));

        _Params = ko.mapping.toJSON(_TravelPolicy);

        _Service_Method = "Edit_Travel";

        CallService('Service_Call_Completed_Travel');
    }
    catch (e) {
        alert("Edit_Travel: " + e.Message);
    }
}
/* --------------------------------------------------------------- */


/* --------------------------------------------------------------- */
function Edit_Travel_Completed(i_Response) {
    try {
        //alert('return completed');
        ////////debugger;
        jq_HideMobileLoader();
        /* ----------------- */
        delete i_Response.My_Result.InsNo;
        i_Response.My_Result.STARTDATE = getFormattedDate(new Date(i_Response.My_Result.STARTDATE));
        i_Response.My_Result.EXPIRYDATE = getFormattedDate(new Date(i_Response.My_Result.EXPIRYDATE));
        i_Response.My_Result.Travel_INSURED.BIRTHDATE = getFormattedDate(new Date(i_Response.My_Result.Travel_INSURED.BIRTHDATE));

        ko.mapping.fromJS(i_Response.My_Result, _TravelPolicy);

        ko.utils.arrayForEach(_TravelPolicy.My_Members(), function (item) {
            ////////debugger;
            var index = _TravelPolicy.My_Members.indexOf(item);
            _TravelPolicy.My_Members.splice(index, 1, new Member_family(item.INSUREDTRAVEL_MEMBERS_ID(), item.MEMBER_NAME(), item.MEMBER_BIRTHDATE(), item.MEMBER_AGE(), item.MEMBER_GENDER(), item.MEMBER_PASSPORT(), item.MEMBER_PREMIUM()));
        });

        /* ----------------- */

        $("#sp_NoResults").html("");
        if (i_Response.My_Result != null) {
            $("#ul_Listing_Travel").html($("#ListingTemplateTravel").render(i_Response.My_Result)).listview('refresh').trigger('create');
            $('#btn_BuyPolicy_Travel').removeClass('ui-disabled');
        }
        else {
            $("#sp_NoResults").html("<br><br>Sorry, no results found matching your criteria. Please Contact The Company!.");
            $('#btn_BuyPolicy_Travel').addClass('ui-disabled');
        }


    }
    catch (e) {
        alert("Edit_Travel_Completed: " + e.message);
    }
}
/* --------------------------------------------------------------- */


