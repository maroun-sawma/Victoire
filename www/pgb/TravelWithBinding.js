/* Members */
ko.cleanNode(document.getElementById("ct_Travel"));
var TravelOfferEdited;
//var UserID = 62;//75;
var UserID = 75;//75;
////////debugger;
if (JSON.parse(sessionStorage.getItem("_Selected_Travel_Plan")) != null) {
    TravelOfferEdited = ko.mapping.fromJSON(sessionStorage.getItem("_Selected_Travel_Plan"));
}
else {

    sessionStorage.setItem("_Selected_Travel_Plan", null);
    sessionStorage.setItem("UserInfo", null);

    $('#Txt_Tr_EffectiveDate').val("");

    $('#Txt_Tr_ExpiryDate').val("");

    $('#Txt_Tr_Birthdate').val("");
}


/* --------------------------------------------------------------- */
var TravelOffer = new Object();
TravelOffer.POLICIES_ID = 0;
TravelOffer.POLICY_CODE = "NT";
TravelOffer.POLICY_NO = 0;
TravelOffer.ENDORSEMENT = 0;
TravelOffer.POLICY_DESC = "";
TravelOffer.SHEET_NO = 0;
TravelOffer.MPLANS_ID = 0;
TravelOffer.ENTRY_USER_ID = UserID;
TravelOffer.INSURED_ID = 0;
TravelOffer.SUBJECTASSURED_ID = 0;
TravelOffer.OPRDATE = moment().format("YYYY-MM-DD"); //$.format.date(new Date(), "yyyy-MM-dd");
TravelOffer.STARTDATE = ""
TravelOffer.EXPIRYDATE = ""
TravelOffer.CURRENCY_ID = 8;
TravelOffer.RATE = 0;
TravelOffer.SUMINSURED = 0;
TravelOffer.TOTALSUMINSURED = 0;
TravelOffer.NETPREMIUM = 0;
TravelOffer.RECEIVEDPREMIUM = 0;
TravelOffer.ACCESSORIES = 0;
TravelOffer.POLICY_COST = 0;
TravelOffer.FIXEDSTAMPS = 0;
TravelOffer.PROPSTAMPS = 0;
TravelOffer.MUNITAX = 0;
TravelOffer.TOTALPREMIUM = 0;
TravelOffer.PRINTCOUNT = 0;
TravelOffer.CREATIONDATE = moment().format("YYYY-MM-DD"); //$.format.date(new Date(), "yyyy-MM-dd");
TravelOffer.MODIFICATIONDATE = moment().format("YYYY-MM-DD"); //$.format.date(new Date(), "yyyy-MM-dd");
TravelOffer.SYNCED = false;
TravelOffer.SUBUSERS_ID = 0;
TravelOffer.CANCELLATIONDATE = moment().format("YYYY-MM-DD"); //$.format.date(new Date(), "yyyy-MM-dd");
TravelOffer.CANCELLATIONREASON = "";
TravelOffer.ISCANCELLED = false;
TravelOffer.ENTRY_DATE = moment().format("YYYY-MM-DD"); //$.format.date(new Date(), "yyyy-MM-dd");
TravelOffer.OWNER_ID = 1;
TravelOffer.IsWorldWide = true;
TravelOffer.WorldWide = 'W';
TravelOffer.PLANSTYPE = 'W65';
TravelOffer.ShowCetificate = 0;
TravelOffer.My_Members = [];
TravelOffer.TOTALPREMIUMCOMPUTED = 0;
TravelOffer.DisableSaveButton = false;
TravelOffer.EnablePrintButton = false;
TravelOffer.InsNo = 0;
TravelOffer.DOB1 = "";
TravelOffer.DOB2 = "";
TravelOffer.DOB3 = "";
TravelOffer.DOB4 = "";
TravelOffer.DOB5 = "";
TravelOffer.DOB6 = "";
TravelOffer.DOB7 = "";

TravelOffer.SylverPrem = 0;
TravelOffer.GoldPrem = 0;
TravelOffer.SylverSportPrem = 0;
TravelOffer.GoldSportPrem = 0;

TravelOffer.SylverPlanshID = 0;
TravelOffer.GoldPlanshID = 0;
TravelOffer.SylverSportPlanshID = 0;
TravelOffer.GoldSportPlanshID = 0;

TravelOffer.Travel_INSURED = new Object();
TravelOffer.Travel_INSURED.INSUREDTRAVEL_ID = 0;

TravelOffer.Travel_INSURED.ENTRY_USER_ID = UserID;
TravelOffer.Travel_INSURED.TITLE = "Mr";
TravelOffer.Travel_INSURED.INSURED_NAME = "";
TravelOffer.Travel_INSURED.INSURED_ADDRESS = "";
TravelOffer.Travel_INSURED.COUNTRIES_ID = 14;
TravelOffer.Travel_INSURED.COUNTRIES_Name = "Lebanon";
TravelOffer.Travel_INSURED.TELEPHONE = "";
TravelOffer.Travel_INSURED.POBOX = "";
TravelOffer.Travel_INSURED.EMAIL = "";
TravelOffer.Travel_INSURED.WORKERSNATIONALITY_ID = 97
TravelOffer.Travel_INSURED.GENDER = "M";
TravelOffer.Travel_INSURED.PASSPORT = "";
TravelOffer.Travel_INSURED.BIRTHDATE = "";
TravelOffer.Travel_INSURED.AGE = 0;
TravelOffer.Travel_INSURED.OWNER_ID = 1;
TravelOffer.Travel_INSURED.INSURED_NETPREMIUM = 0;
TravelOffer.Travel_INSURED.INSURED_ACCESSORIES = 0;
TravelOffer.Travel_INSURED.INSURED_POLICY_COST = 0;
TravelOffer.Travel_INSURED.INSURED_FIXEDSTAMPS = 0;
TravelOffer.Travel_INSURED.INSURED_PROPSTAMPS = 0;
TravelOffer.Travel_INSURED.INSURED_MUNITAX = 0;
TravelOffer.Travel_INSURED.INSURED_TOTALPREMIUM = 0;


var _TravelOffer = ko.mapping.fromJS(TravelOffer);
//When Mapping it creates automatically a model thats why no need to create it down.

/*---------------------------------------------------------------*/

// ----------------------------------
var Member_family = function (_INSUREDTRAVEL_MEMBERS_ID, _MEMBER_NAME, _MEMBER_BIRTHDATE, _MEMBER_AGE, _MEMBER_GENDER, _MEMBER_PASSPORT, _MEMBER_PREMIUM,
        _MEMBER_NETPREMIUM, _MEMBER_ACCESSORIES, _MEMBER_POLICY_COST, _MEMBER_FIXEDSTAMPS, _MEMBER_PROPSTAMPS, _MEMBER_MUNITAX) {
    //alert('test member family');
    var self = this;
    self.INSUREDTRAVEL_MEMBERS_ID = _INSUREDTRAVEL_MEMBERS_ID;
    self.MEMBER_NAME = ko.observable(_MEMBER_NAME).extend({ required: false });
    self.MEMBER_BIRTHDATE = ko.observable(_MEMBER_BIRTHDATE).extend({ required: true });
    self.MEMBER_AGE = ko.observable(_MEMBER_AGE).extend({ required: false });
    self.MEMBER_GENDER = ko.observable(_MEMBER_GENDER).extend({ required: false });
    self.MEMBER_PASSPORT = ko.observable(_MEMBER_PASSPORT).extend({ required: false });
    self.MEMBER_PREMIUM = ko.observable(_MEMBER_PREMIUM).extend({ required: false });
    self.MEMBER_NETPREMIUM = ko.observable(_MEMBER_NETPREMIUM).extend({ required: true });
    self.MEMBER_ACCESSORIES = ko.observable(_MEMBER_ACCESSORIES).extend({ required: true });
    self.MEMBER_POLICY_COST = ko.observable(_MEMBER_POLICY_COST).extend({ required: true });
    self.MEMBER_FIXEDSTAMPS = ko.observable(_MEMBER_FIXEDSTAMPS).extend({ required: true });
    self.MEMBER_PROPSTAMPS = ko.observable(_MEMBER_PROPSTAMPS).extend({ required: true });
    self.MEMBER_MUNITAX = ko.observable(_MEMBER_MUNITAX).extend({ required: true });
    self._Errors = ko.validation.group(self); // USED FOR KO VALIDATION //
};
/*---------------------------------------------------------------*/

var List_CountyOfResidance = [{ "COUNTRIES_ID": "14", "COUNTRIES_NAME": "Lebanon" }];
var _List_CountyOfResidance = ko.mapping.fromJS(List_CountyOfResidance);


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

var List_Members = [{ "VAL": "1", "DESC": "+ 1" }, { "VAL": "2", "DESC": " + 2" }, { "VAL": "3", "DESC": "+ 3" }, { "VAL": "4", "DESC": "+ 4" }, { "VAL": "5", "DESC": "+ 5" }, { "VAL": "6", "DESC": "+ 6" }];
var _List_Members = ko.mapping.fromJS(List_Members);

var today = new Date();
var dd = today.getDate();
var mm = today.getMonth() + 1; //January is 0!
var yyyy = today.getFullYear();
var mm2 = mm - 1;
var yyyy = today.getFullYear();


$(function () {
    ////////debugger;
    //alert('1');
});


$(document).on("pagebeforecreate", "#pg_Travel", function (event, ui) {

    //alert('elkdlekdlek dlek dlek d');
    Validator_Login = $("#Frm_Travel").validate({
        rules: {
            DDL_Tr_CountyOfResidance: { required: true },
            Txt_Tr_Birthdate: { required: true },
            Txt_Tr_EffectiveDate: { required: true },
            DDL_Tr_Plan: { required: true },
            Txt_Tr_ExpiryDate: { required: true }
        }
    });


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

            //TravelPlans_Filtered = [];
            //TravelPlans_Filtered = $.Enumerable.From(ko.mapping.toJS(JSON.parse(sessionStorage.getItem('TravelPlans'))))
            //                 .Where("$.FROMTRAVELAGE <=" + age + " && $.MAXAGEALLOWED >=" + age + " && $.BODYTYPECODE=='" + _TravelPolicy.PLANSTYPE() + "' && $.TRAVELPERSON_NO==1")
            //                .ToArray();
            //ko.mapping.fromJS(TravelPlans_Filtered, _List_TravelPLans);
            /* ------Fill Insured Number ------- */
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
            List_TravelPLans = [{ "VAL": "5", "DESC": "5 Days" }, { "VAL": "7", "DESC": "7 Days" }, { "VAL": "10", "DESC": "10 Days" }, { "VAL": "15", "DESC": "15 Days" },
            { "VAL": "21", "DESC": "21 Days" }, { "VAL": "30", "DESC": "30 Days" }, { "VAL": "45", "DESC": "45 Days" }, { "VAL": "60", "DESC": "60 Days" }, { "VAL": "90", "DESC": "90 Days" },
            { "VAL": "120", "DESC": "120 Days" }, { "VAL": "180", "DESC": "180 Days" }, { "VAL": "365", "DESC": "365 Days" }];
            ko.mapping.fromJS(List_TravelPLans, _List_TravelPLans);

        },
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


    $(this).on("click", "#btn_GetPrices_Travel", function (event) {
        ////////debugger;
        //var Insured = $("input.InsuredNumber")

        //for (i = 1; i <= Insured.length; i++) {
        //    if ($("#txt_Insured_" + i).is(':visible')) {
        //        if ($.trim($("#txt_DOB_" + i).val()) == "") {
        //            jq_DisplayMessage("MSG_GeneralError", "", "Please Fill All Insured DOB.!");
        //            $("#txt_DOB_" + i).focus();
        //            return false;
        //        }

        //    }
        //}

        if ($("#Frm_Travel").valid()) {

            ko.utils.arrayForEach(_TravelOffer.My_Members(), function (item) {
                //alert('First2');
                if (item._Errors().length > 0) {
                    item._Errors.showAllMessages();
                    showToast('Please Enter Other Member Details Or Choose Single Mode!', 'fail');
                    ll_Exit = 1;
                    //return;
                }
            });

            if (ll_Exit != 1) {
                //Add Others Family Memmbers To Proposal
                ko.utils.arrayForEach(_TravelOffer.My_Members(), function (item) {
                    ////////debugger;
                    var index = _TravelOffer.My_Members.indexOf(item);
                    _TravelOffer.My_Members.splice(index, 1, new Member_family(-1, '', jq_parseDate2(item.MEMBER_BIRTHDATE()), 0, '', '', 0, 0, 0, 0, 0, 0, 0));
                });

                ////////debugger;

                sessionStorage.setItem("_Selected_Travel_Plan", ko.mapping.toJSON(_TravelOffer));
                jq_NavigateToPage('pg_TravelPayment');
            }

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


    $("#DDL_Tr_Membres").bind("change", function (event, ui) {
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
                //if (!$("#txt_Insured_" + i).is(':visible')) {
                //    $("#txt_Insured_" + i).val("");
                //}

                //if (!$("#txt_Passport_" + i).is(':visible')) {
                //    $("#txt_Passport_" + i).val("");
                //}

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
                //if (!$("#txt_Insured_" + i).is(':visible')) {
                //    $("#txt_Insured_" + i).val("");
                //}

                //if (!$("#txt_Passport_" + i).is(':visible')) {
                //    $("#txt_Passport_" + i).val("");
                //}

                if (!$("#txt_DOB_" + i).is(':visible')) {
                    $("#txt_DOB_" + i).val("");
                }
            }
            _TravelOffer.InsNo("0");
            _TravelOffer.My_Members = [];

        }
        /* ---------------- */
    });


    $("#DDL_Tr_Plan").on("change", function (event) {
        //alert('plan');
        ////////debugger;
        if ($.trim($(this).val()) != '' && $.trim($(this).val()) != null) {
            var SelectedVal = $.trim($(this).val());
            //alert(SelectedVal);
            //Fill ExpiryDate
            var d = moment(jq_parseDate2($("#Txt_Tr_EffectiveDate").val())); //new Date(jq_parseDate2($("#Txt_Tr_EffectiveDate").val()));
            //alert($("#Txt_Tr_EffectiveDate").datepicker('getDate').toString());
            //alert($("#Txt_Tr_EffectiveDate").val());
            //alert(d);
            if (parseInt(SelectedVal.toString()) > 180) {
                d.subtract(1, 'days'); //d.setDate(d.getDate() - 1);
                d.add(1, 'years');//d.setFullYear(d.getFullYear() + 1);
            }
            else {
                d.add((parseInt(SelectedVal.toString()) - 1), 'days');//d.setDate(d.getDate() + (parseInt(SelectedVal.toString()) - 1));
            }

            //$("#Txt_Tr_ExpiryDate").val(convertDate(d));
            //$('#Hd_Tr_ExpiryDate').val(convertDate(d)).trigger("change");

            $("#Txt_Tr_ExpiryDate").val(d.format("DD/MM/YYYY"));
            _TravelOffer.EXPIRYDATE($("#Txt_Tr_ExpiryDate").val());
        }
    });


    //$("#DDL_Tr_Membres").on("change", function (event) {
    //    //alert('plan');
    //    //////debugger;
    //    if ($.trim($(this).val()) != '' && $.trim($(this).val()) != null) {
    //        var SelectedVal = $.trim($(this).val());
    //        //alert(SelectedVal);

    //        _TravelOffer.My_Members([]);
    //        for (i = 0; i <= parseInt(SelectedVal) - 1; i++) {
    //            _TravelOffer.My_Members.unshift(new Member_family(-1, '', '', 0, 'M', '', 0, 0, 0, 0, 0, 0, 0));
    //        }
    //    }
    //    else {
    //        _TravelOffer.My_Members([]);
    //    }
    //});

    $('body').on('focus', '.Txt_Tr_Birthdate_Fam', function () {
        //alert('focus');
        ////////debugger;
        $(this).trigger('mouseover')
    });

    $('body').on('mouseover', '.Txt_Tr_Birthdate_Fam', function () {
        //alert('testttt');
        if ($(this).hasClass("Txt_Tr_Birthdate_Fam")) {
            //alert('jehdedhje');
            $(this).mobiscroll().date({
                theme: 'android-holo-light',        // Specify theme like: theme: 'ios' or omit setting to use default 
                display: 'bubble',    // Specify display mode like: display: 'bottom' or omit setting to use default
                mode: 'mixed',          // More info about mode: http://docs.mobiscroll.com/2-17-1/datetime#!opt-mode
                minDate: new Date(yyyy - 84, mm, dd),  // More info about minDate: http://docs.mobiscroll.com/2-17-1/datetime#!opt-minDate
                maxDate: new Date(yyyy, mm2, dd - 1),   // More info about maxDate: http://docs.mobiscroll.com/2-17-1/datetime#!opt-maxDate
                animate: 'swing',
                dateOrder: 'yy MMdd',
                dateFormat: "dd/mm/yy",
                onSelect: function (valueText, inst) {
                    ////////debugger;
                    age = 0;
                    $(this).val(valueText).trigger("change");
                },
            });
        }
    });

    _TravelOffer.removeFamilyMember = function (FamilyMember) {
        ////////debugger;
        _TravelOffer.My_Members.remove(FamilyMember);
        $('#DDL_Tr_Membres').val(_TravelOffer.My_Members().length).trigger("change");
        if (_TravelOffer.My_Members().length == 0) {
            $('#DDL_Tr_Membres').val(null).trigger("change");
        }
    }

    ko.applyBindings((_TravelOffer), document.getElementById('ct_Travel'));
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
    Mode_Handler();



    $("#DDL_Tr_Membres").selectmenu('refresh');
    $("#DDL_Tr_Plan").selectmenu('refresh');
    $("#DDL_Tr_CountyOfResidance").selectmenu('refresh');

    //ko.applyBindings((_TravelOffer), document.getElementById('ct_Travel'));

});

/* --------------------------------------------------------------- */
/* --------------------------------------------------------------- */
function Mode_Handler() {
    try {
        ////////debugger;

        if (JSON.parse(sessionStorage.getItem("_Selected_Travel_Plan")) != null) {
            //alert('eldjlekdlek dlk eldk lek ');

            //TravelOfferEdited = ko.mapping.fromJSON(sessionStorage.getItem("_Selected_Travel_Plan"));
            var UserObject = '{ "UserID": "75", "OwnerID": "1", "BROKERCODE": "3", "AGENTS_NAME": "Victoire WEB", "EMAIL": "assurances@victoire.com.lb" }';
            _UserInfo = JSON.parse(UserObject);

            _TravelOffer.Travel_INSURED.COUNTRIES_ID(TravelOfferEdited.Travel_INSURED.COUNTRIES_ID());
            _TravelOffer.STARTDATE(TravelOfferEdited.STARTDATE());
            _TravelOffer.EXPIRYDATE(TravelOfferEdited.EXPIRYDATE());
            _TravelOffer.Travel_INSURED.BIRTHDATE(TravelOfferEdited.Travel_INSURED.BIRTHDATE());

            $('#Txt_Tr_EffectiveDate').val(TravelOfferEdited.STARTDATE());
            $('#Txt_Tr_Birthdate').val(TravelOfferEdited.Travel_INSURED.BIRTHDATE());
            $('#Txt_Tr_ExpiryDate').val(TravelOfferEdited.EXPIRYDATE());

            List_TravelPLans = [{ "VAL": "5", "DESC": "5 Days" }, { "VAL": "7", "DESC": "7 Days" }, { "VAL": "10", "DESC": "10 Days" }, { "VAL": "15", "DESC": "15 Days" },
               { "VAL": "21", "DESC": "21 Days" }, { "VAL": "30", "DESC": "30 Days" }, { "VAL": "45", "DESC": "45 Days" }, { "VAL": "60", "DESC": "60 Days" }, { "VAL": "90", "DESC": "90 Days" },
               { "VAL": "120", "DESC": "120 Days" }, { "VAL": "180", "DESC": "180 Days" }, { "VAL": "365", "DESC": "365 Days" }];


            _TravelOffer.MPLANS_ID(TravelOfferEdited.MPLANS_ID());
            ko.mapping.fromJS(List_TravelPLans, _List_TravelPLans);



            List_Members = [{ "VAL": "1", "DESC": "+ 1" }, { "VAL": "2", "DESC": " + 2" }, { "VAL": "3", "DESC": "+ 3" }, { "VAL": "4", "DESC": "+ 4" }, { "VAL": "5", "DESC": "+ 5" }, { "VAL": "6", "DESC": "+ 6" }];
            ko.mapping.fromJS(List_Members, _List_Members);

            List_CountyOfResidance = [{ "COUNTRIES_ID": "14", "COUNTRIES_NAME": "Lebanon" }];
            _List_CountyOfResidance = ko.mapping.fromJS(List_CountyOfResidance);
            _TravelOffer.Travel_INSURED.COUNTRIES_ID(TravelOfferEdited.Travel_INSURED.COUNTRIES_ID());

            if (TravelOfferEdited.My_Members().length > 0) {
                $('#DDL_Tr_Membres').val(_TravelOffer.My_Members().length).trigger("change");
            }
            else {
                $('#DDL_Tr_Membres').val(null).trigger("change");
            }


            _TravelOffer.My_Members([]);
            //Add Others Family Memmbers To Proposal
            ko.utils.arrayForEach(TravelOfferEdited.My_Members(), function (item) {
                ////////debugger;
                //_TravelOffer.My_Members.unshift(new Member_family(-1, '', convertDate(item.MEMBER_BIRTHDATE()), 0, '', '', 0));
                _TravelOffer.My_Members.unshift(new Member_family(-1, '', moment(item.MEMBER_BIRTHDATE()).format("DD/MM/YYYY"), 0, '', '', 0, 0, 0, 0, 0, 0, 0));
            });

            _TravelOffer.My_Members.reverse();


            sessionStorage.setItem("_Selected_Travel_Plan", null);
        }
        else {
            //window.location.reload();

            $('#Txt_Tr_EffectiveDate').val("");

            $('#Txt_Tr_ExpiryDate').val("");

            $('#Txt_Tr_Birthdate').val("");
        }
    }
    catch (e) {
        alert("Mode_Handler: " + e.message);
    }
}
/* --------------------------------------------------------------- */



