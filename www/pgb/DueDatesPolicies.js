var Param_DueDatesPolicies = new Object();
Param_DueDatesPolicies.BROKERCODE = "";
Param_DueDatesPolicies.ACCOUNTNUMBER = "";
Param_DueDatesPolicies.ACCOUNTNAME = "";
Param_DueDatesPolicies.FromMonth = "";
Param_DueDatesPolicies.FromYear = "";
Param_DueDatesPolicies.ShowDueDatesPolicies = false;
Param_DueDatesPolicies.MySelectedPolicies = [];

var _Param_DueDatesPolicies = ko.mapping.fromJS(Param_DueDatesPolicies);

MyApp_GVM.List_DueDatesPolicies = ko.mapping.fromJS([]);
MyApp_GVM.List_DueDatesMonth = ko.mapping.fromJS([]);
MyApp_GVM.List_DueDatesYear = ko.mapping.fromJS([]);
var List_DueDatesMonth = [];
var List_DueDatesYear = [];


// ----------------------------------
var Policies_Renewed = function (_COBOL_POLICIES_ID, _POLICY_CODE, _ISRENEWAL, _POLICYNO, _CLIENTNAME, _EXPIRYDATE, _ISCANCELLED, _CANCELLATIONREASON, _NOTEONPOLICY, _CountCancelled, _CountRenewed, _ClaimAmountUSD, _ClaimAmountLL, _CanBeRenewed, _TOTALPREM, _TBL_COBOL_COVERAGEs, _SUBJECTOFPOLICIES, _PAYMENTTYPE, _TOTALPREMIUM) {
    //alert('test member family');
    var self = this;
    self.COBOL_POLICIES_ID = _COBOL_POLICIES_ID;
    self.ISRENEWAL = ko.observable(_ISRENEWAL).extend({ required: false });
    self.POLICY_CODE = ko.observable(_POLICY_CODE).extend({ required: false });
    self.ISRENEWAL.subscribe(function (newVal) {
        ////debugger;
        //alert('11');
        if (newVal != null && newVal.toString().toUpperCase() == "TRUE") {
            ///$("#div_DD_CancellationReason_" + self.COBOL_POLICIES_ID().toString()).show("slow");
        }
        else {
            //$("#div_DD_CancellationReason_" + self.COBOL_POLICIES_ID().toString()).hide();
            //$("#txt_DD_CancellationReason_" + self.COBOL_POLICIES_ID().toString()).val("");
        }

    });
    self.POLICYNO = ko.observable(_POLICYNO).extend({ required: false });
    self.CLIENTNAME = ko.observable(_CLIENTNAME).extend({ required: false });
    self.EXPIRYDATE = ko.observable(_EXPIRYDATE).extend({ required: false });
    self.ISCANCELLED = ko.observable(_ISCANCELLED).extend({ required: false });
    self.CANCELLATIONREASON = ko.observable(_CANCELLATIONREASON).extend({ required: false });
    self.NOTEONPOLICY = ko.observable(_NOTEONPOLICY).extend({ required: false });
    self.CountCancelled = ko.observable(_CountCancelled).extend({ required: false });
    self.CountRenewed = ko.observable(_CountRenewed).extend({ required: false });
    self.ClaimAmountUSD = ko.observable(_ClaimAmountUSD).extend({ required: false });
    self.ClaimAmountLL = ko.observable(_ClaimAmountLL).extend({ required: false });
    self.CanBeRenewed = ko.observable(_CanBeRenewed).extend({ required: false });
    self.TOTALPREM = ko.observable(_TOTALPREM).extend({ required: false });
    self.TBL_COBOL_COVERAGEs = ko.observableArray(_TBL_COBOL_COVERAGEs);
    self.SUBJECTOFPOLICIES = ko.observable(_SUBJECTOFPOLICIES).extend({ required: false });
    self.PAYMENTTYPE = ko.observable(_PAYMENTTYPE).extend({ required: false });
    self.TOTALPREMIUM = ko.observable(_TOTALPREMIUM).extend({ required: false });
    self._Policies_Errors = ko.validation.group(self); // USED FOR KO VALIDATION //
};
/*---------------------------------------------------------------*/

_Param_DueDatesPolicies.RemoveSelectedPolicies = function (PolicyItem) {
    /* Prepare OK & CANCEL handlers for Confirmation Message */
    ////debugger;
    /* ------------------------------------------------------------------*/
    if (PolicyItem.ISRENEWAL().toString() == "false") {
        var OK_Handler = function () {

            //_Param_DueDatesPolicies.MySelectedPolicies.remove(PolicyItem);
            var index = _Param_DueDatesPolicies.MySelectedPolicies.indexOf(PolicyItem);
            _Param_DueDatesPolicies.MySelectedPolicies.splice(index, 1, new Policies_Renewed(PolicyItem.COBOL_POLICIES_ID, PolicyItem.POLICY_CODE(), false, PolicyItem.POLICYNO(), PolicyItem.CLIENTNAME(), PolicyItem.EXPIRYDATE(), true, PolicyItem.CANCELLATIONREASON(), PolicyItem.NOTEONPOLICY(), 0, 0, PolicyItem.ClaimAmountUSD(), PolicyItem.ClaimAmountLL(), PolicyItem.CanBeRenewed(), PolicyItem.TOTALPREM(), PolicyItem.TBL_COBOL_COVERAGEs(), PolicyItem.SUBJECTOFPOLICIES(), '',PolicyItem.TOTALPREMIUM()));
            debugger;
            $("#div_DD_CancellationReason_" + PolicyItem.COBOL_POLICIES_ID.toString()).show("slow");
           
            $('.my-collaspible').collapsible();
            $('.my-collaspible').on('collapsibleexpand', function () {
                $('.opened').each(function () {
                    $(this).collapsible("collapse");
                    $(this).addClass('closed').removeClass('opened');
                });
                $(this).removeClass('closed').addClass('opened');

            });
            $('#rd_DueDates_PaymentType_One_' + index).prop('checked', true).trigger("change");
            $('#pg_DueDatePolicies').trigger('create');

            //var func = function () { $("#txt_DD_CancellationReason_" + PolicyItem.COBOL_POLICIES_ID.toString()).focus(); }
            //setTimeout(func, 100);
        };

        var CANCEL_Handler = function () {
            //debugger;
            $("#div_DD_CancellationReason_" + PolicyItem.COBOL_POLICIES_ID.toString()).hide();
            $("#txt_DD_CancellationReason_" + PolicyItem.COBOL_POLICIES_ID.toString()).val("");
            var index = _Param_DueDatesPolicies.MySelectedPolicies.indexOf(PolicyItem);
            //alert(index);
            _Param_DueDatesPolicies.MySelectedPolicies.splice(index, 1, new Policies_Renewed(PolicyItem.COBOL_POLICIES_ID, PolicyItem.POLICY_CODE(), false, PolicyItem.POLICYNO(), PolicyItem.CLIENTNAME(), PolicyItem.EXPIRYDATE(), false, "", "", 0, 0, PolicyItem.ClaimAmountUSD(), PolicyItem.ClaimAmountLL(), PolicyItem.CanBeRenewed(), PolicyItem.TOTALPREM(), PolicyItem.TBL_COBOL_COVERAGEs(), PolicyItem.SUBJECTOFPOLICIES(), '', PolicyItem.TOTALPREMIUM()));
            $('.my-collaspible').collapsible();
            $('.my-collaspible').on('collapsibleexpand', function () {
                $('.opened').each(function () {
                    $(this).collapsible("collapse");
                    $(this).addClass('closed').removeClass('opened');
                });
                $(this).removeClass('closed').addClass('opened');

            });
            $('#rd_DueDates_PaymentType_One_' + index).prop('checked', true).trigger("change");
            $('#pg_DueDatePolicies').trigger('create');
        };
        /* ------------------------------------------------------------------*/

        /* Display Confirmation Message */
        /* ------------------------------------------------------------------*/
        //jq_ConfirmationMessage(ResolveSetupEntry("_GENERAL_MSG", "CONFIRM_DELETE"), OK_Handler, CANCEL_Handler);
        jq_ConfirmationMessage2('Cancellation', 'Are you sure you do NOT want to renew  ' + PolicyItem.POLICYNO() + '?', OK_Handler, CANCEL_Handler, 'ConfDialog_Btn_CANCEL');
        /* ------------------------------------------------------------------*/
    }
    else {
        showToast('This Policy Is Set To Renew, Please Uncheck!', 'fail');
    }
}

_Param_DueDatesPolicies.ShowNoteOnPolicy = function (PolicyItem) {
    /* Prepare OK & CANCEL handlers for Confirmation Message */
    ////debugger;
    /* ------------------------------------------------------------------*/
    //if (PolicyItem.ISRENEWAL().toString() == "false") {
            //_Param_DueDatesPolicies.MySelectedPolicies.remove(PolicyItem);
            var index = _Param_DueDatesPolicies.MySelectedPolicies.indexOf(PolicyItem);
            _Param_DueDatesPolicies.MySelectedPolicies.splice(index, 1, new Policies_Renewed(PolicyItem.COBOL_POLICIES_ID, PolicyItem.POLICY_CODE(), PolicyItem.ISRENEWAL(), PolicyItem.POLICYNO(), PolicyItem.CLIENTNAME(), PolicyItem.EXPIRYDATE(), PolicyItem.ISCANCELLED(), PolicyItem.CANCELLATIONREASON(), PolicyItem.NOTEONPOLICY(), PolicyItem.CountCancelled(), PolicyItem.CountRenewed(), PolicyItem.ClaimAmountUSD(), PolicyItem.ClaimAmountLL(), PolicyItem.CanBeRenewed(), PolicyItem.TOTALPREM(), PolicyItem.TBL_COBOL_COVERAGEs(), PolicyItem.SUBJECTOFPOLICIES(), '', PolicyItem.TOTALPREMIUM()));
            ////debugger;
            $("#div_DD_NoteReason_" + PolicyItem.COBOL_POLICIES_ID.toString()).show("slow");
            $('.my-collaspible').collapsible();
            $('.my-collaspible').on('collapsibleexpand', function () {
                $('.opened').each(function () {
                    $(this).collapsible("collapse");
                    $(this).addClass('closed').removeClass('opened');
                });
                $(this).removeClass('closed').addClass('opened');

            });
            $('#rd_DueDates_PaymentType_One_' + index).prop('checked', true).trigger("change");
            $('#pg_DueDatePolicies').trigger('create');


    //}
    //else {
    //    showToast('This Policy Is Set To Renew, Please Uncheck!', 'fail');
    //}
}



$('#pg_DueDatePolicies').bind('pagehide', function () {
    $(this).remove();
});

$(document).on("pagebeforecreate", "#pg_DueDatePolicies", function (event, ui) {
    //if (localStorage.getItem('UserInfo') != null && localStorage.getItem('UserInfo') != "null") {
    //    jq_NavigateToPage('pg_BrokerLogin');
    //}

    //alert('elkdlekdlek dlek dlek d');
    _Param_DueDatesPolicies.ShowDueDatesPolicies(false);

    Validator_Login = $("#Frm_DueDatePolicies").validate({
        rules: {
            ddl_DD_Month: { required: true },
            ddl_DD_Year: { required: true },
        }
    });

    $('#DueDatesLogout').bind('tap', function () {

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

    $(this).on("click", "#DueDateshome", function (e) {
        jq_NavigateToPage('pg_home');
        e.preventDefault();
    });

    $(this).on("click", "#btn_DD_GetDueDatesPolicies", function (event) {
        ////debugger;
        if (localStorage.getItem('UserInfo') == null || localStorage.getItem('UserInfo') == "null") {
            jq_NavigateToPage('pg_BrokerLogin');
        }

        if ($("#Frm_DueDatePolicies").valid()) {

            jq_ShowMobileLoaderAdv("pg_DueDatePolicies");
            _Param_DueDatesPolicies.ShowDueDatesPolicies(false);
            _Param_DueDatesPolicies.MySelectedPolicies.removeAll();
            GetDueDatesPolicies();
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


    $(this).on("click", "#btn_DD_SaveDueDatesPolicies", function (event) {
        debugger;
        if (localStorage.getItem('UserInfo') == null || localStorage.getItem('UserInfo') == "null") {
            jq_NavigateToPage('pg_BrokerLogin');
        }

        ll_Exit = 0;
        var Mem_Error = 0;
        var RenewalCount = 0;
        var CancellationCount = 0;
        var NotesCount = 0;

        if ($("#Frm_DueDatePolicies").valid()) {

            ko.utils.arrayForEach(_Param_DueDatesPolicies.MySelectedPolicies(), function (item) {
                //alert('First2');
                if (item.ISRENEWAL().toString() == "true") {
                    RenewalCount+= 1;
                    return;
                }
            });

            ko.utils.arrayForEach(_Param_DueDatesPolicies.MySelectedPolicies(), function (item) {
                //alert('First2');
                 if (item.ISCANCELLED().toString() == "true") {
                    CancellationCount += 1;
                    return;
                }
            });

            ko.utils.arrayForEach(_Param_DueDatesPolicies.MySelectedPolicies(), function (item) {
                //alert('First2');
                if (item.NOTEONPOLICY().toString().trim() != "") {
                    NotesCount += 1;
                    return;
                }
            });

            if (RenewalCount == 0 && CancellationCount == 0 && NotesCount ==0) {
                showToast('You should at least renew, cancel or note a policy!', 'fail');
                return;
            }

            if (CancellationCount > 0) {
                ko.utils.arrayForEach(_Param_DueDatesPolicies.MySelectedPolicies(), function (item) {
                    //alert('First2');
                    if (item.ISCANCELLED().toString() == "true" && item.CANCELLATIONREASON().toString() == "") {
                        ll_Exit = 1;
                        return;
                    }
                });
            }

            if (ll_Exit == 1) {
                showToast('You should specify reason for cancellation!', 'fail');
                ll_Exit = 0;
                return;
            }

            ko.utils.arrayForEach(_Param_DueDatesPolicies.MySelectedPolicies(), function (item) {
                //alert('First2');

            });

            ko.utils.arrayForEach(_Param_DueDatesPolicies.MySelectedPolicies(), function (item) {
                //debugger;
                var index = _Param_DueDatesPolicies.MySelectedPolicies.indexOf(item);
                _Param_DueDatesPolicies.MySelectedPolicies.splice(index, 1, new Policies_Renewed(item.COBOL_POLICIES_ID, item.POLICY_CODE(), item.ISRENEWAL(), item.POLICYNO(), item.CLIENTNAME(), 
                    item.EXPIRYDATE(), item.ISCANCELLED(), item.CANCELLATIONREASON(), item.NOTEONPOLICY(), item.CountCancelled(), item.CountRenewed(), 
                    item.ClaimAmountUSD(), item.ClaimAmountLL(), item.CanBeRenewed(), item.TOTALPREM(), 
                    item.TBL_COBOL_COVERAGEs(), item.SUBJECTOFPOLICIES(), $("input[name=rd_DueDates_PaymentType_" + item.POLICYNO().split('/').join('') + "]:checked").val(), item.TOTALPREMIUM()));
            });

            jq_ShowMobileLoaderAdv("pg_DueDatePolicies");
            SaveDueDatesPolicies();
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

$(document).on("pagebeforeshow", "#pg_DueDatePolicies", function (event, ui) {

    if (localStorage.getItem('UserInfo') == null || localStorage.getItem('UserInfo') == "null") {
        jq_NavigateToPage('pg_BrokerLogin');
    }

    ////debugger;
    FillDueDatesMonthes();
    FillDueDatesYear();

    _Param_DueDatesPolicies.FromMonth(new Date().getMonth() + 2);
    _Param_DueDatesPolicies.FromYear(new Date().getMonth() == 11 ? new Date().getFullYear() + 1 : new Date().getFullYear());
    $("#ddl_DD_Month").selectmenu('refresh');
    $("#ddl_DD_Year").selectmenu('refresh');
});

/* --------------------------------------------------------------- */
function FillDueDatesYear() {
    ////////debugger;
    try {
        var d = new Date();
        var n = d.getFullYear();
        var limit = d.getFullYear() - 5;
        List_DueDatesYear = [];
        /* ---------------- */
        for (i = new Date().getFullYear() + 1 ; i >= limit; i--) {
            var Year = new Object();
            Year.CODE = i;
            Year.CODEDesc = i.toString();
            List_DueDatesYear.push({
                CODE: Year.CODE,
                CODEDesc: Year.CODEDesc
            });
        }

        ko.mapping.fromJS(List_DueDatesYear, MyApp_GVM.List_DueDatesYear);

    }
    catch (e) {
        alert("FillDueDatesYear : " + e.Message);
    }
}
/* --------------------------------------------------------------- */
/* --------------------------------------------------------------- */
/* --------------------------------------------------------------- */
function FillDueDatesMonthes() {
    ////////debugger;
    try {
        List_DueDatesMonth = [];
        /* ---------------- */
        var MonthOpt;
        for (i = 1; i <= 12; i++) {

            switch (i) {
                case 1:
                    MonthOpt = new Object();
                    MonthOpt.Code = 1;
                    MonthOpt.Desc = "January";
                    List_DueDatesMonth.push({
                        Code: MonthOpt.Code,
                        Desc: MonthOpt.Desc
                    });
                    break;
                case 2:
                    MonthOpt = new Object();
                    MonthOpt.Code = 2;
                    MonthOpt.Desc = "February";
                    List_DueDatesMonth.push({
                        Code: MonthOpt.Code,
                        Desc: MonthOpt.Desc
                    });
                    break;
                case 3:
                    MonthOpt = new Object();
                    MonthOpt.Code = 3;
                    MonthOpt.Desc = "March";
                    List_DueDatesMonth.push({
                        Code: MonthOpt.Code,
                        Desc: MonthOpt.Desc
                    });
                    break;
                case 4:
                    MonthOpt = new Object();
                    MonthOpt.Code = 4;
                    MonthOpt.Desc = "April";
                    List_DueDatesMonth.push({
                        Code: MonthOpt.Code,
                        Desc: MonthOpt.Desc
                    });
                    break;
                case 5:
                    MonthOpt = new Object();
                    MonthOpt.Code = 5;
                    MonthOpt.Desc = "May";
                    List_DueDatesMonth.push({
                        Code: MonthOpt.Code,
                        Desc: MonthOpt.Desc
                    });
                    break;
                case 6:
                    MonthOpt = new Object();
                    MonthOpt.Code = 6;
                    MonthOpt.Desc = "June";
                    List_DueDatesMonth.push({
                        Code: MonthOpt.Code,
                        Desc: MonthOpt.Desc
                    });
                    break;
                case 7:
                    MonthOpt = new Object();
                    MonthOpt.Code = 7;
                    MonthOpt.Desc = "July";
                    List_DueDatesMonth.push({
                        Code: MonthOpt.Code,
                        Desc: MonthOpt.Desc
                    });
                    break;
                case 8:
                    MonthOpt = new Object();
                    MonthOpt.Code = 8;
                    MonthOpt.Desc = "August";
                    List_DueDatesMonth.push({
                        Code: MonthOpt.Code,
                        Desc: MonthOpt.Desc
                    });
                    break;
                case 9:
                    MonthOpt = new Object();
                    MonthOpt.Code = 9;
                    MonthOpt.Desc = "September";
                    List_DueDatesMonth.push({
                        Code: MonthOpt.Code,
                        Desc: MonthOpt.Desc
                    });
                    break;
                case 10:
                    MonthOpt = new Object();
                    MonthOpt.Code = 10;
                    MonthOpt.Desc = "October";
                    List_DueDatesMonth.push({
                        Code: MonthOpt.Code,
                        Desc: MonthOpt.Desc
                    });
                    break;
                case 11:
                    MonthOpt = new Object();
                    MonthOpt.Code = 11;
                    MonthOpt.Desc = "November";
                    List_DueDatesMonth.push({
                        Code: MonthOpt.Code,
                        Desc: MonthOpt.Desc
                    });
                    break;
                case 12:
                    MonthOpt = new Object();
                    MonthOpt.Code = 12;
                    MonthOpt.Desc = "December";
                    List_DueDatesMonth.push({
                        Code: MonthOpt.Code,
                        Desc: MonthOpt.Desc
                    });
                    break;
            }
        }
        ko.mapping.fromJS(List_DueDatesMonth, MyApp_GVM.List_DueDatesMonth);

    }
    catch (e) {
        alert("FillDueDatesMonthes : " + e.Message);
    }
}
/* --------------------------------------------------------------- */
/* --------------------------------------------------------------- */
function GetDueDatesPolicies() {
    ////debugger;
    try {
        /* ---------------- */
        _Param_DueDatesPolicies.BROKERCODE(MyApp_GVM.BROKERCODE());
        _Param_DueDatesPolicies.ACCOUNTNUMBER(MyApp_GVM.AccountNumber());
        _Param_DueDatesPolicies.ACCOUNTNAME(MyApp_GVM.AGENTS_NAME());
        /* ---------------- */
        _Service_Method = "GetDueDatesPolicies";
        _Params = ko.mapping.toJSON(_Param_DueDatesPolicies);
        CallService('Service_Call_Completed_GetDueDatesPolicies');
        /* ---------------- */
    }
    catch (e) {
        alert("GetDueDatesPolicies: " + e.Message);
    }
}
/* --------------------------------------------------------------- */

/* --------------------------------------------------------------- */
function SaveDueDatesPolicies() {
    ////debugger;
    try {
        /* ---------------- */
        _Param_DueDatesPolicies.BROKERCODE(MyApp_GVM.BROKERCODE());
        _Param_DueDatesPolicies.ACCOUNTNUMBER(MyApp_GVM.AccountNumber());
        _Param_DueDatesPolicies.ACCOUNTNAME(MyApp_GVM.AGENTS_NAME());
        /* ---------------- */
        _Service_Method = "SaveDueDatesPolicies";
        _Params = ko.mapping.toJSON(_Param_DueDatesPolicies);
        CallService('Service_Call_Completed_GetDueDatesPolicies');
        /* ---------------- */
    }
    catch (e) {
        alert("SaveDueDatesPolicies: " + e.Message);
    }
}
/* --------------------------------------------------------------- */

/* --------------------------------------------------------------- */
function GetDueDatesPolicies_Completed(i_Input) {
    //debugger;
    try {

        $("#sp_NoResultsDueDates").html("");
        //jq_HideMobileLoader();
        jq_HideMobileLoaderAdv("pg_DueDatePolicies");
        if (i_Input.My_Result.My_DueDates.length > 0) {
            _Param_DueDatesPolicies.ShowDueDatesPolicies(true);
            $("#div_HeaderDueDates").html($("#ListingDueDatesHeaderTemplate").render(i_Input.My_Result.My_DueDates[0])).trigger('create');

            ko.utils.arrayForEach(i_Input.My_Result.My_DueDates, function (item) {
                //debugger;
                var index = i_Input.My_Result.My_DueDates.indexOf(item);
                _Param_DueDatesPolicies.MySelectedPolicies.unshift(new Policies_Renewed(item.COBOL_POLICIES_ID, item.POLICY_CODE, false, item.POLICYNO, item.ClientName, item.EXPIRYDATE, false, '', item.NoteOnPolicy, item.CountCancelled, item.CountRenewed, item.ClaimAmountUSD, item.ClaimAmountLL, item.CanBeRenewed, item.TOTALPREM, item.TBL_COBOL_COVERAGEs, item.SUBJECTOFPOLICIES, '', item.TOTALPREMIUM));

            });

            for (i = 0; i < i_Input.My_Result.My_DueDates.length; i++) {
                $('#rd_DueDates_PaymentType_One_' + i).prop('checked', true).trigger("change");

            }
            //$("#rd_DueDates_PaymentType_Twelve_3").attr('disabled', true).trigger("change");
            //$('#rd_DueDates_PaymentType_Twelve_3').prop('enable', false).trigger("change");
        }
        else {
            _Param_DueDatesPolicies.ShowDueDatesPolicies(false);
            $("#div_HeaderDueDates").html("");
            $("#sp_NoResultsDueDates").html("<br><br>Sorry, no results found matching your criteria.");
            _Param_DueDatesPolicies.MySelectedPolicies([]);
        }

        $('.my-collaspible').collapsible();
        $('.my-collaspible').on('collapsibleexpand', function () {
            $('.opened').each(function () {
                $(this).collapsible("collapse");
                $(this).addClass('closed').removeClass('opened');
            });
            $(this).removeClass('closed').addClass('opened');

        });

        $('#pg_DueDatePolicies').trigger('create');
    }
    catch (e) {
        alert("GetDueDatesPolicies_Completed: " + e.Message);
    }
}
/* --------------------------------------------------------------- */
/* --------------------------------------------------------------- */
function SaveDueDatesPolicies_Completed(i_Input) {
    ////debugger;
    try {

        //jq_HideMobileLoader();
        jq_HideMobileLoaderAdv("pg_DueDatePolicies");
        //alert('done');
        //jq_DisplayMessageByPosition("MSG_GeneralInfo", "Successfull!", "Your Renewal/Cancelllation Policies Has Been Submitted, Please Note That Your Renewal Policies Will Be Available in 24 Hours. Thank you", null, null, null, null, "btn_DD_GetDueDatesPolicies");
        showToast('Your Renewal/Cancelllation Policies Has Been Submitted, Please Note That Your Renewal Policies Will Be Available in 24 Hours. Thank you', 'success');
        _Param_DueDatesPolicies.MySelectedPolicies([]);
        GetDueDatesPolicies();
        
    }
    catch (e) {
        alert("GetDueDatesPolicies_Completed: " + e.Message);
    }
}
/* --------------------------------------------------------------- */
/* --------------------------------------------------------------- */
function Service_Call_Completed_GetDueDatesPolicies(i_Response) {
    ////////debugger;
    try {
        switch (_Service_Method) {
            case "GetDueDatesPolicies":
                GetDueDatesPolicies_Completed(i_Response);
                break;
            case "SaveDueDatesPolicies":
                SaveDueDatesPolicies_Completed(i_Response);
                break;
        }
    }
    catch (e) {
        alert("Service_Call_Completed_GetDueDatesPolicies:" + e.message);
    }
}
/* --------------------------------------------------------------- */
function ShowCancelButton(obj) {
    ////debugger;
    if (obj.CountCancelled > 0 || obj.CountRenewed > 0) {
        return false
    }
    else {
        return true;
    }

}

function SetClaimText(obj)
{
    //debugger;
    if (parseInt(obj.ClaimAmountLL().toString().replace(/,/g, "")) > 0) {
        return "Claim: " + obj.ClaimAmountLL().toString() + "L.L.";
    }
    else {
        return "No Claim";
    }

}

function SetOnePaymentTypeText(obj) {
    //debugger;
    return "One(" + accounting.formatNumber(Math.round(parseFloat(obj.TOTALPREMIUM()))) + ")";

}
function SetFourPaymentTypeText(obj) {
    //debugger;
    return "Four(" + accounting.formatNumber(Math.round(parseFloat(obj.TOTALPREMIUM()) / 4)) + ")";

}
function SetSixPaymentTypeText(obj) {
    //debugger;
    return "Six(" + accounting.formatNumber(Math.round(parseFloat(obj.TOTALPREMIUM()) / 6)) + ")";

}
function SetTwelvePaymentTypeText(obj) {
    //debugger;
    return "Twelve(" + accounting.formatNumber(Math.round(parseFloat(obj.TOTALPREMIUM()) / 12)) + ")";

}