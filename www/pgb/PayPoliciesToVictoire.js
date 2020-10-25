
var Params_VerifyPolicyToPay = new Object();
Params_VerifyPolicyToPay.RECEIPTS_ID = 0;
Params_VerifyPolicyToPay.POLICY_CODE = "RC";
Params_VerifyPolicyToPay.POLICY_NO = 0;
Params_VerifyPolicyToPay.ENDORSEMENT = 0;
Params_VerifyPolicyToPay.POLICIES_ID = 0;
Params_VerifyPolicyToPay.INSUREDNAME = "";
Params_VerifyPolicyToPay.PAYMENT_TYPE = "Yearly";
Params_VerifyPolicyToPay.CURRENCY_CODE = "USD";
Params_VerifyPolicyToPay.AMOUNT = 0;
Params_VerifyPolicyToPay.DESIGNATION = "";
Params_VerifyPolicyToPay.REFERENCE = "";
Params_VerifyPolicyToPay.ISPAID = 0
Params_VerifyPolicyToPay.PAYER_NAME = "";
Params_VerifyPolicyToPay.PAYER_ADDRESS = "";
Params_VerifyPolicyToPay.PAYER_EMAIL = "";
Params_VerifyPolicyToPay.PAYER_MOBILE = "";
Params_VerifyPolicyToPay.PAYER_COUNTRY = "";
Params_VerifyPolicyToPay.PAYER_CITY = "";
Params_VerifyPolicyToPay.ACCOUNTNUMBER = 0;
Params_VerifyPolicyToPay.CURRID = 0;
Params_VerifyPolicyToPay.ShowPaymentDetails = false;
Params_VerifyPolicyToPay.POILCYDESC = "02/";
Params_VerifyPolicyToPay.PolicyDetails = false;
Params_VerifyPolicyToPay.AccountDetails = false;
Params_VerifyPolicyToPay.INSNAME = "";
Params_VerifyPolicyToPay.ENTRY_USER_ID = 0;
Params_VerifyPolicyToPay.BROKERCODE = 0;
Params_VerifyPolicyToPay.My_Policies = [];


// ----------------------------------
var _Params_Get_PayPoliciesToVictoire_Startup_Data = new Object();
_Params_Get_PayPoliciesToVictoire_Startup_Data.OWNER_ID = 1;
//------------------------------------

// ----------------------------------
var _Params_Get_PayPoliciesToVictoire_Startup_Data = new Object();
_Params_Get_PayPoliciesToVictoire_Startup_Data.OWNER_ID = 1;
//------------------------------------

var List_AmountToPay = [];
MyApp_GVM.List_AmountToPay = ko.mapping.fromJS(List_AmountToPay);
MyApp_GVM.List_Payment_Validation = ko.mapping.fromJS([]);

var _Params_VerifyPolicyToPay = ko.mapping.fromJS(Params_VerifyPolicyToPay);

MyApp_GVM.List_PolicyType = ko.mapping.fromJS([]);
MyApp_GVM.List_CountyOfResidance = ko.mapping.fromJS([]);
//var List_PolicyType = [{ "VAL": "BU", "DESC": "BU(BURGLARY)" }, { "VAL": "CF", "DESC": "FIDELITY " }, { "VAL": "CS", "DESC": "CASH IN SAFE" }, { "VAL": "CT", "DESC": "CASH IN TRANSIT" }, { "VAL": "DC", "DESC": "CONTRACTORS ALL RISK" },
//                       { "VAL": "DE", "DESC": "Erection All Risks" }, { "VAL": "DM", "DESC": "Machinery All Risk" }, { "VAL": "EA", "DESC": "ERECTION ALL RISKS" }, { "VAL": "F7", "DESC": "LM7 Property All Risks" }, { "VAL": "FI", "DESC": "FIRE" },
//                       { "VAL": "HP", "DESC": "HEALTH PLAN" }, { "VAL": "LI", "DESC": "LIFE" }, { "VAL": "LM", "DESC": "Life/Conversion Medical Plan" }, { "VAL": "MC", "DESC": "MARINE CARGO" }, { "VAL": "MH", "DESC": "MARINE HULL" },
//                       { "VAL": "NJ", "DESC": "NETWORK AJIAL" }, { "VAL": "NM", "DESC": "NETWORK MEDICAL" }, { "VAL": "NP", "DESC": "NETWORK MEDICAL MARCO POLO" }, { "VAL": "NS", "DESC": "NETWORK MEDICAL SEMI PRIVATE" }, { "VAL": "NX", "DESC": "NETWORK EXPAT" },
//                       { "VAL": "NY", "DESC": "NETWORK MEDICAL SYRIA" }, { "VAL": "PA", "DESC": "PERSONNAL ACCIDENT" }, { "VAL": "PM", "DESC": "MAASHAK" }, { "VAL": "RT", "DESC": "RETENTION" }, { "VAL": "SP", "DESC": "Special Risks" },
//                       { "VAL": "TP", "DESC": "RESPONSABILITE CIVILE" }, { "VAL": "VB", "DESC": "VEHICULES BODILY INJURY" }, { "VAL": "VC", "DESC": "VEHICULES BODILY INJURY" }, { "VAL": "VR", "DESC": "VEHICULES" }, { "VAL": "VS", "DESC": "VEHICULES SYRIA" },
//                       { "VAL": "WC", "DESC": "ACCIDENT DU TRAVAIL" }, { "VAL": "WS", "DESC": "WORKMEN COMPENSATION SITES" }];

/*---------------------------------------------------------------*/
// ----------------------------------
_Params_VerifyPolicyToPay.AMOUNT.subscribe(function (newval) {
    if (newval != null && newval != 0) {
        //alert('11');
        /* ---------------- */
        //$('#Txt_Ma_SumInsured').number(true, 0);
        $.number(newval);
        _Params_VerifyPolicyToPay.AMOUNT($.number(newval))
        /* ---------------- */

    }
});
// ----------------------------------
//var Policy_detail = function (_POLICY_CODE_Mem, _POLICY_NO_Mem) {
//    var self = this;
//    //alert('badawi');
//    ////////debugger;
//    self.POLICY_CODE_Mem = ko.observable(_POLICY_CODE_Mem).extend({ required: true });
//    self.POLICY_NO_Mem = ko.observable(_POLICY_NO_Mem).extend({ required: true });
//    //self._Errors = ko.validation.group(self); // USED FOR KO VALIDATION //
//};

// ----------------------------------
var Member_policy = function (_POILCYDESC, _INSUREDNAME, _ACCOUNTNUMBER, _TOTALPREMIUMUSD, _TOTALPREMIUMLL) {
    //alert('test member family');
    var self = this;
    self.POILCYDESC = ko.observable(_POILCYDESC).extend({ required: true });
    self.INSUREDNAME = ko.observable(_INSUREDNAME).extend({ required: true });
    self.ACCOUNTNUMBER = ko.observable(_ACCOUNTNUMBER).extend({ required: true });
    self.TOTALPREMIUMUSD = ko.observable(_TOTALPREMIUMUSD).extend({ required: true });
    self.TOTALPREMIUMLL = ko.observable(_TOTALPREMIUMLL).extend({ required: true });
};
/*---------------------------------------------------------------*/
/*---------------------------------------------------------------*/

//_Params_VerifyPolicyToPay.addPolicyDetail = function () {
//    // insert am item at position 0        
//    //////debugger;
//    if (_Params_VerifyPolicyToPay.POLICY_CODE() !== "" && _Params_VerifyPolicyToPay.POLICY_NO() !== "") {
//        _Params_VerifyPolicyToPay.My_PolicyDetail.unshift(new Policy_detail(_Params_VerifyPolicyToPay.POLICY_CODE(), _Params_VerifyPolicyToPay.POLICY_NO()));
//    }
//    else {
//        showToast('Please Fill Policy Code And Number!', 'fail');
//        return;
//    }
//};

//_Params_VerifyPolicyToPay.removePolicyDetail = function (PolicyDetail) {
//    /* Prepare OK & CANCEL handlers for Confirmation Message */
//    /* ------------------------------------------------------------------*/
//    _Params_VerifyPolicyToPay.My_PolicyDetail.remove(PolicyDetail);
//}

/*---------------------------------------------------------------*/
var ll_Exit = 0;
var ll_FromPolicy = 0;
_Params_VerifyPolicyToPay.addPolicy = function () {
    debugger;
    ll_Exit = 0;
    ll_FromPolicy = 1;

    var letters = /^[a-zA-Z]+$/;
    //ResetValues();



    if (_Params_VerifyPolicyToPay.POILCYDESC() != "") {
        var res = _Params_VerifyPolicyToPay.POILCYDESC().split("/");
        if (res.length == 5) {
            if (res[1].length != 2 || res[3].length != 7 || res[4].length != 3) {
                ll_Exit = 1;
                showToast('Invalid policy number! Please check your policy', 'fail');
                _Params_VerifyPolicyToPay.PolicyDetails(false);
                _Params_VerifyPolicyToPay.AccountDetails(false);
                _Params_VerifyPolicyToPay.ShowPaymentDetails(false);
                return;
            }
            if (!letters.test(res[1])) {
                showToast('error', 'Only Letter Is Allowed!', 'Error');
                _Params_VerifyPolicyToPay.PolicyDetails(false);
                _Params_VerifyPolicyToPay.AccountDetails(false);
                _Params_VerifyPolicyToPay.ShowPaymentDetails(false);
                return false;
            }

            if (!$.isNumeric(res[3]) || !$.isNumeric(res[4])) {
                ll_Exit = 1;
                showToast('Invalid policy number! Please check your policy', 'fail');
                _Params_VerifyPolicyToPay.PolicyDetails(false);
                _Params_VerifyPolicyToPay.AccountDetails(false);
                _Params_VerifyPolicyToPay.ShowPaymentDetails(false);
                return;
            }


        }
        else {
            ll_Exit = 1;
            showToast('Invalid policy number! Please check your policy', 'fail');
            _Params_VerifyPolicyToPay.PolicyDetails(false);
            _Params_VerifyPolicyToPay.AccountDetails(false);
            _Params_VerifyPolicyToPay.ShowPaymentDetails(false);
            return;
        }

        _Params_VerifyPolicyToPay.POLICY_CODE(res[1].toUpperCase());
        _Params_VerifyPolicyToPay.POLICY_NO(res[3]);
        _Params_VerifyPolicyToPay.ENDORSEMENT(res[4]);

    }

    if (_Params_VerifyPolicyToPay.POILCYDESC() != "" && _Params_VerifyPolicyToPay.INSNAME !== "") {

        ko.utils.arrayForEach(_Params_VerifyPolicyToPay.My_Policies(), function (item) {
            if (item.POILCYDESC() == _Params_VerifyPolicyToPay.POILCYDESC()) {
                showToast('Policy already added!', 'fail');
                ll_Exit = 1;
                return;
            }
        });
        if (ll_Exit == 0) {
            
            Btn_CheckBalancePolicies_Click();
        }

    }
    else {
        showToast('Please enter your policy and  insured name!', 'fail');
        ll_Exit = 1;
        return;
    }
};

_Params_VerifyPolicyToPay.removePolicy = function (FamilyMember) {
    /* Prepare OK & CANCEL handlers for Confirmation Message */
    /* ------------------------------------------------------------------*/
    _Params_VerifyPolicyToPay.My_Policies.remove(FamilyMember);
};


$(document).on("pagebeforecreate", "#pg_PayPoliciesToVictoire", function (event, ui) {

    //alert('pagebeforecreate');

    ////////debugger;
    Validator_Login = $("#Frm_PayPoliciesToVictoire").validate({
        rules: {
            txt_PVC_Amount_ToPay: { required: true, minlength: 1, maxlength: 9 },
            txt_PVC_Name: { required: true, minlength: 3, maxlength: 50 },
            txt_PVC_Email: { required: true, email: true, maxlength: 50 },
            txt_PVC_Mobile: { required: true, minlength: 8, maxlength: 25 },
            txt_PVC_Address: { required: true, minlength: 3, maxlength: 200 },
            txt_PVC_Country: { required: true },
            txt_PVC_City: { required: true, minlength: 3, maxlength: 50 }
        },
        //messages: {
        //    txt_PVC_Amount: "- Please enter your username"
        //}

    });

    RemoveInputDefaulValue('txt_PVC_Amount_ToPay', 0);


    //$(this).off("click", "#btn_AddPolicies").on("click", "#btn_AddPolicies", function (event) {
    //    //////debugger;
    //    //alert(_Params_VerifyPolicy.POLICY_CODE() + '-----' + _Params_VerifyPolicy.POLICY_NO());

    //    if (_Params_VerifyPolicyToPay.POLICY_CODE() !== "" && _Params_VerifyPolicyToPay.POLICY_NO() !== "") {
    //        //alert('inside');
    //        _Params_VerifyPolicyToPay.My_PolicyDetail.unshift(new Policy_detail(_Params_VerifyPolicyToPay.POLICY_CODE(), _Params_VerifyPolicyToPay.POLICY_NO()));

    //        $("#ul_Listing_Policies").listview().listview('refresh');
    //        _Params_VerifyPolicyToPay.POLICY_NO("");

    //        //$('#PayPoliciesToVictoirecontent ul').remove();
    //        //var labels = ' <ul data-role="listview" id="ul_Listing_Policies" data-split-icon="minus" data-theme="c" data-mini="true" data-split-theme="b" data-inset="true" class="nostyle-li ui-mini">';
    //        //var i=0;
    //        //ko.utils.arrayForEach(_Params_VerifyPolicyToPay.My_PolicyDetail(), function (item) {
    //        //    //////debugger;
    //        //    i+=1;
    //        //    labels += '<li data-mini="true"><a href="#">';
    //        //    labels += '<h2 href="#" id="Listing_Policies_' + i + '">' + item.POLICY_NO_Mem() + '</h2></a>';

    //        //    labels += '<a href="#" onclick="test(Listing_Policies_' + i + ')" >remove</a>';
    //        //    labels += '</li>';
    //        //});

    //        //labels += '</ul>';

    //        //$("#PayPoliciesToVictoirecontent").prepend(labels);


    //    }
    //    else {
    //        //alert('fill ya hmar');
    //        showToast('Please Fill Policy Code And Number!', 'fail');
    //        return;
    //    }
    //    event.preventDefault();
    //    event.stopPropagation();

    //});

    $(this).on("click", "#btn_PVC_Pay", function (event) {
        ////////debugger;
        if ($("#chk_Accept").is(':checked')) {

            if ($("#Frm_PayPoliciesToVictoire").valid()) {

                var x = ko.mapping.toJS(_Params_VerifyPolicyToPay);
                x.CURRID = $('input:radio[name=PaymentType]:checked')[0].value;
                if (parseInt($('input:radio[name=PaymentType]:checked')[0].value.toString()) == 840) {
                    x.CURRENCY_CODE = "USD";
                }
                else if (parseInt($('input:radio[name=PaymentType]:checked')[0].value.toString()) == 422) {
                    x.CURRENCY_CODE = "LL";
                }

                x.AMOUNT = parseFloat(x.AMOUNT.toString().replace(/,/g, ""));

                if (x.AMOUNT == 0) {
                    showToast('Please Enter An Amount!', 'fail');
                    return;
                }

                $.confirm({
                    title: 'Some banks require OTP!',
                    content: 'Your bank shall send you a 6-digit SMS which you shall have to enter on the requested OTP page.</br>سيرسل لك البنك الذي تتعامل معه رسالة نصية مكونة من 6 أرقام يجب عليك إدخالها في الصفحة المطلوبة.',
                    type: 'red',
                    typeAnimated: true,
                    columnClass: 'small',
                    buttons: {
                        tryAgain: {
                            text: '    continue    ',
                            btnClass: 'btn-red',
                            action: function () {
                                _Params = JSON.stringify(x);

                                //_Params = ko.mapping.toJSON(_Params_VerifyPolicy);
                                //alert(_Params);
                                jq_ShowMobileLoaderAdv("pg_PayPoliciesToVictoire");
                                _Service_Method = "Edit_PayPoliciesToVictoire";
                                _Async = true;
                                CallService('Service_Call_Completed_PayPoliciesToVictoire');
                            }
                        }
                    }
                });
                /* ---------------- */
            }
            else {
                // Focus invalid input
                // -------------------
                Validator_Login.focusInvalid();
                // -------------------
            }
        }

        else {
            showToast('To Continue, You Must Select That You Have Accept Our Payment Condition!', 'fail');
            return;
        }

        event.preventDefault();
        event.stopPropagation();
    });

    // ----------------------------------

    //ko.applyBindings((_Params_VerifyPolicyToPay), document.getElementById('ct_PayPoliciesToVictoire'));

    $("#txtPolicyDetails").keydown(function (event) {
        //alert("keydown");
        var inputLength = event.target.value.length;
        var letters = /^[a-zA-Z]+$/;
        debugger;

        if (event.keyCode != 8) {
            //if (inputLength === 4 || inputLength === 5) {
            //    if (!Validate(event.key)) {
            //        showToast('Only Letter Is Allowed!', 'fail');
            //        event.target.value = "02/"
            //        return false;
            //    }
            //}
            if (inputLength === 5) {
                var thisVal = event.target.value;
                thisVal += '/2020/';
                $(event.target).val(thisVal);
            }

            //if (inputLength >= 12 && inputLength <= 18) {
            //    if (!IsNumeric(event.key)) {
            //        showToast('Only Numbers is Allowed!', 'fail');
            //        var thisVal = event.target.value.replace(event.key, "");;
            //        $(event.target).val(thisVal);
            //        return;
            //    }
            //}

            if (inputLength === 18) {
                var thisVal = event.target.value;
                thisVal += '/';
                $(event.target).val(thisVal);
            }

            //if (inputLength >= 20 && inputLength <= 22) {

            //    if (!IsNumeric(event.key)) {
            //        showToast('Only Numbers is Allowed!', 'fail');
            //        var thisVal = event.target.value.replace(event.key, "");;
            //        $(event.target).val(thisVal);
            //        return;
            //    }

            //}
            //if (this.value.length == 22) {
            //    e.preventDefault();
            //} else if (this.value.length > 22) {
            //    // Maximum exceeded
            //    this.value = this.value.substring(0, max);
            //}
            if (inputLength === 22) {
                $('#txtInsuredName').focus();
                return;
            }

            if (inputLength > 22) {
                showToast('Invalid Policy Number!', 'fail');
                var thisVal = event.target.value;
                $(event.target).val(thisVal.substring(0, 22));
                $('#txtInsuredName').focus();
                return;
            }

        }
    });
    $("#txtPolicyDetails").keyup(function (event) {
        //alert("keyup");
        var inputLength = event.target.value.length;
        var letters = /^[a-zA-Z]+$/;
        debugger;

        if (event.keyCode != 8) {
            //if (inputLength === 4 || inputLength === 5) {
            //    if (!Validate(event.key)) {
            //        showToast('Only Letter Is Allowed!', 'fail');
            //        event.target.value = "02/"
            //        return false;
            //    }
            //}
            if (inputLength === 5) {
                var thisVal = event.target.value;
                thisVal += '/2020/';
                $(event.target).val(thisVal);
            }

            //if (inputLength >= 12 && inputLength <= 18) {
            //    if (!IsNumeric(event.key)) {
            //        showToast('Only Numbers is Allowed!', 'fail');
            //        var thisVal = event.target.value.replace(event.key, "");;
            //        $(event.target).val(thisVal);
            //        return;
            //    }
            //}

            if (inputLength === 18) {
                var thisVal = event.target.value;
                thisVal += '/';
                $(event.target).val(thisVal);
            }

            //if (inputLength >= 20 && inputLength <= 22) {

            //    if (!IsNumeric(event.key)) {
            //        showToast('Only Numbers is Allowed!', 'fail');
            //        var thisVal = event.target.value.replace(event.key, "");;
            //        $(event.target).val(thisVal);
            //        return;
            //    }

            //}
            //if (this.value.length == 22) {
            //    e.preventDefault();
            //} else if (this.value.length > 22) {
            //    // Maximum exceeded
            //    this.value = this.value.substring(0, max);
            //}
            if (inputLength === 22) {
                $('#txtInsuredName').focus();
                return;
            }

            if (inputLength > 22) {
                showToast('Invalid Policy Number!', 'fail');
                var thisVal = event.target.value;
                $(event.target).val(thisVal.substring(0, 22));
                $('#txtInsuredName').focus();
                return;
            }

        }
    });

    $('#txtPolicyDetails').bind('keyup', 'keydown', function (event) {

    })


});
$(document).on("pagebeforeshow", "#pg_PayPoliciesToVictoire", function (event, ui) {
    ////////debugger;
    /* -------------------------------------------------- */
    // if (!js_FncCommon()) { return; };
    /* -------------------------------------------------- */
    //alert('page bind');
    /* SEO */
    Validator_Login.resetForm();
    /* -------------------------------------------------- */
    $("meta[name=description]").attr("content", "Pay Online");
    $("title").html("Pay Online");
    /* -------------------------------------------------- */


    /* ---------------- */
    //FillYearOfBirth();
    /* ---------------- */
    var func = function () {

        //jq_ShowMobileLoader();
        jq_ShowMobileLoaderAdv("pg_PayPoliciesToVictoire");
        Get_PayPoliciesToVictoire_Startup_Data();
    };

    setTimeout(func, 300);
    /* ---------------- */

    //FillPaymentAmount();


    //ko.utils.arrayForEach(_Params_VerifyPolicyToPay.My_PolicyDetail(), function (item) {
    //    ////////debugger;
    //    var index = _Params_VerifyPolicyToPay.My_PolicyDetail.indexOf(item);
    //    //alert(index);
    //    _Params_VerifyPolicyToPay.My_PolicyDetail.splice(index, 1, new Policy_detail(item.POLICY_CODE(), item.POLICY_NO()));
    //});


    /* Refresh Controls */
    $("#DDL_PVC_CountyOfResidance").change();
    /* ---------------- */


});


/* --------------------------------------------------------------- */
/* --------------i_FISCAL_YEAR_ID is the USER_ID------------------------------------------------- */
function Get_PayPoliciesToVictoire_Startup_Data() {
    try {
        //////debugger;

        //alert('test');
        _Params_Get_PayPoliciesToVictoire_Startup_Data.OWNER_ID = 1;
        _Params_Get_PayPoliciesToVictoire_Startup_Data.USER_ID = 0;
        _Params_Get_PayPoliciesToVictoire_Startup_Data.PCODE = "";

        _Params = JSON.stringify(_Params_Get_PayPoliciesToVictoire_Startup_Data);

        _Service_Method = "Get_PayPoliciesToVictoire_Startup_Data";

        CallService('Service_Call_Completed_PayPoliciesToVictoire');
    }
    catch (e) {
        alert("Get_PayPoliciesToVictoire_Startup_Data: " + e.Message);
    }
}
/* --------------------------------------------------------------- */

/* --------------------------------------------------------------- */
function Service_Call_Completed_PayPoliciesToVictoire(i_Response) {
    debugger;
    try {
        switch (_Service_Method) {
            case "Get_PayPoliciesToVictoire_Startup_Data":
                Get_PayPoliciesToVictoire_Startup_Data_Completed(i_Response);
                break;
            case "Edit_PayPoliciesToVictoire":
                Edit_PayPoliciesToVictoire_Completed(i_Response);
                break;
            case "ValidatePayment":
                ValidatePaymentPolicies_Completed(i_Response);
                break;
        }
    }
    catch (e) {
        alert("Service_Call_Completed_PayPoliciesToVictoire:" + e.message);
    }
}


/* --------------------------------------------------------------- */
function ValidatePaymentPolicies_Completed(i_Input) {
    try {
        //alert('test');
        debugger;
        var llexit = 0;
        if (i_Input.My_Result != null)
        {
            if (i_Input.My_Result.length > 0) {
                if (i_Input.My_Result[0].BALANCE == '0') {
                    _Params_VerifyPolicyToPay.PolicyDetails(true);
                    _Params_VerifyPolicyToPay.AccountDetails(false);
                    _Params_VerifyPolicyToPay.ShowPaymentDetails(true);

                    if (_Params_VerifyPolicyToPay.My_Policies().length == 0) {
                        _Params_VerifyPolicyToPay.My_Policies.unshift(new Member_policy(_Params_VerifyPolicyToPay.POILCYDESC(), i_Input.My_Result[0].INSUREDNAME, i_Input.My_Result[0].ACCOUNTNUMBER, i_Input.My_Result[0].TOTALPREMIUMUSD + '$', i_Input.My_Result[0].TOTALPREMIUMLL + 'LL'));
                        _Params_VerifyPolicyToPay.ACCOUNTNUMBER(i_Input.My_Result[0].ACCOUNTNUMBER);

                        _Params_VerifyPolicyToPay.INSUREDNAME(i_Input.My_Result[0].INSUREDNAME);

                        _Params_VerifyPolicyToPay.PAYER_NAME(i_Input.My_Result[0].INSUREDNAME);
                        _Params_VerifyPolicyToPay.PAYER_EMAIL(i_Input.My_Result[0].EMAIL);
                        _Params_VerifyPolicyToPay.PAYER_ADDRESS(i_Input.My_Result[0].BUILDING);
                        _Params_VerifyPolicyToPay.PAYER_CITY(i_Input.My_Result[0].CITY);
                        $("#ul_Listing_Policies").listview().listview('refresh');

                    }
                    else {
                        ko.utils.arrayForEach(_Params_VerifyPolicyToPay.My_Policies(), function (item) {
                            if (item.ACCOUNTNUMBER() != i_Input.My_Result[0].ACCOUNTNUMBER) {
                                //showToast('error', 'You cannot add multiple policies on different account', 'Error');
                                llexit = 1;
                                return;
                            }
                        });
                        if (llexit == 1) {
                            showToast('You cannot add multiple policies on different account', 'fail');
                            return;
                        }
                        else {
                            llexit = 0;
                            _Params_VerifyPolicyToPay.My_Policies.unshift(new Member_policy(_Params_VerifyPolicyToPay.POILCYDESC(), i_Input.My_Result[0].INSUREDNAME, i_Input.My_Result[0].ACCOUNTNUMBER, i_Input.My_Result[0].TOTALPREMIUMUSD + '$', i_Input.My_Result[0].TOTALPREMIUMLL + 'LL'));
                            $("#ul_Listing_Policies").listview().listview('refresh');
                        }

                    }

                }

                _Params_VerifyPolicyToPay.POILCYDESC("02/");
                _Params_VerifyPolicyToPay.INSNAME("");
            }
            else {
                showToast('Invalid Data! Please Check Your Input Data.', 'fail');
                //_Params_Payment.PolicyDetails(false);
                //_Params_Payment.AccountDetails(false);
                //_Params_Payment.ShowPaymentDetails(false);
                //_Params_Payment.ACCOUNTNUMBER(0);
                //_Params_Payment.INSUREDNAME('');
                return;

            }
        }

        else {
            showToast('Invalid Data! Please Check Your Input Data.', 'fail');
            //_Params_Payment.PolicyDetails(false);
            //_Params_Payment.AccountDetails(false);
            //_Params_Payment.ShowPaymentDetails(false);
            //_Params_Payment.ACCOUNTNUMBER(0);
            //_Params_Payment.INSUREDNAME('');
            return;

        }

    }
    catch (e) {
        alert("ValidatePayment_Completed: " + e.message);
    }
}
/* --------------------------------------------------------------- */

/* --------------------------------------------------------------- */
function Get_PayPoliciesToVictoire_Startup_Data_Completed(i_Input) {
    try {
        //////debugger;
        //jq_HideMobileLoader();
        jq_HideMobileLoaderAdv("pg_PayPoliciesToVictoire");
        // alert('t3est');
        if (i_Input.My_Result == null) {
            showToast('There is A Problem In Your Connection, Please Retry!', 'fail');
            return;
        }
        //alert('test');
        ko.mapping.fromJS(i_Input.My_Result.AllProduct, MyApp_GVM.List_PolicyType);
        ko.mapping.fromJS(i_Input.My_Result.Countries, MyApp_GVM.List_CountyOfResidance);
    }
    catch (e) {
        alert("Get_PayToVictoire_Startup_Data_Completed: " + e.message);
    }
}

/* --------------------------------------------------------------- */

function Edit_PayPoliciesToVictoire() {
    try {
        //////debugger;

        _Params = ko.mapping.toJSON(_Params_VerifyPolicyToPay);

        _Service_Method = "Edit_PayPoliciesToVictoire";

        CallService('Service_Call_Completed_PayPoliciesToVictoire');
    }
    catch (e) {
        alert("Edit_PayToVictoire: " + e.Message);
    }
}
/* --------------------------------------------------------------- */


/* --------------------------------------------------------------- */
function Edit_PayPoliciesToVictoire_Completed(i_Response) {
    try {
        //alert('return completed');
        //////debugger;
        //jq_HideMobileLoader();
        jq_HideMobileLoaderAdv("pg_PayPoliciesToVictoire");
        /* ----------------- */


        if (parseInt(i_Response.My_Result.RECEIPTS_ID) > 0) {
            /////////////////For Web Testing Issues///////////////////////////////////////////////////////////
            //var ref = window.open('http://localhost:4160/MobileReceiptPayment.aspx?ReceiptID=' + i_Response.My_Result.RECEIPTS_ID, '_blank', 'location=yes');
            //ref.addEventListener('loadstart', function (event) { alert('start: ' + event.url); });
            //ref.addEventListener('loadstop', function (event) { alert('stop: ' + event.url); });
            //ref.addEventListener('loaderror', function (event) { alert('error: ' + event.message); });
            //ref.addEventListener('exit', function (event) { alert(event.type); });
            /////////////////For Web Testing Issues///////////////////////////////////////////////////////////

            var ref = cordova.InAppBrowser.open('https://online.victoire.com.lb/MobileReceiptPayment.aspx?ReceiptID=' + i_Response.My_Result.RECEIPTS_ID, '_blank', 'hideurlbar=yes');
            ref.addEventListener('loadstart', function (event) {
                //alert(event.url);
                if (event.url.toLowerCase().indexOf("mobilepagerouter.aspx") != -1) {
                    try {
                        // ---------------
                        //alert(event.url);
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
                        //alert(str_PolicyRef + " " + cp_status + 'before');

                        cp_status_Glob = str_cp_status;
                        status_Glob = cp_status.split("~")[0];
                        error_Glob = cp_status.split("~")[1];
                        PolicyRef_Glob = PolicyRef;
                        Amount_Glob = Amount;

                        //$.mobile.changePage('PaymentResult.html', { reverse: true });

                        jq_NavigateToPage('pg_PaymentResult');

                        //alert(str_PolicyRef + " " + cp_status + 'after');
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
                        //alert(str_PolicyRef + " " + cp_status + 'before');
                        // ---------------
                        cp_status_Glob = str_cp_status;
                        status_Glob = cp_status.split("~")[0];
                        error_Glob = cp_status.split("~")[1];
                        PolicyRef_Glob = PolicyRef;
                        Amount_Glob = Amount;

                        //$.mobile.changePage('PaymentResult.html', { reverse: true });

                        jq_NavigateToPage('pg_PaymentResult');
                        // ---------------
                        //alert(str_PolicyRef + " " + cp_status + 'after');
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



    }
    catch (e) {
        alert("Edit_PayToVictoire_Completed: " + e.message);
    }
}
/* --------------------------------------------------------------- */
function FillPaymentAmount() {
    ////////debugger;
    try {
        var d = new Date();
        var n = d.getFullYear();
        List_YearofBirth = [];
        /* ---------------- */
        for (i = 10 ; i <= 2000; i++) {
            var AmountToPay = new Object();
            AmountToPay.AmountValue = i;
            AmountToPay.AmountDesc = i.toString() + ' ' + '($)';
            List_AmountToPay.push({
                AmountValue: AmountToPay.AmountValue,
                AmountDesc: AmountToPay.AmountDesc
            });

        }

        ko.mapping.fromJS(List_AmountToPay, MyApp_GVM.List_AmountToPay);

    }
    catch (e) {
        alert("FillPaymentAmount : " + e.Message);
    }
}

/* --------------------------------------------------------------- */
function Btn_CheckBalancePolicies_Click() {
    try {
        debugger;

       // if (_Params_VerifyPolicyToPay.My_Policies().length > 0) {

       // }
       // else {
            //if (_Params_Payment.POILCYDESC() == "" && _Params_Payment.ACCOUNTNUMBER() == 0)
            //{
            //    showToast('error', 'to continue, please enter your policy or your account details!', 'Error');
            //    return;
            //}

            //if (_Params_VerifyPolicyToPay.My_Policies().length == 0) {
            //    showToast('to continue, please enter your policy(ies)!', 'fail');
            //    return;
        //}

        if (_Params_VerifyPolicyToPay.AMOUNT().toString().indexOf(",") != -1) {
                var x = ko.mapping.toJS(_Params_VerifyPolicyToPay);
                x.AMOUNT = parseFloat(x.AMOUNT.toString().replace(/,/g, ""));
                _Params = JSON.stringify(x);
            }
            else {
                _Params = ko.mapping.toJSON(_Params_VerifyPolicyToPay);
            }

            //alert(_Params);
            _Service_Method = "ValidatePayment";
            //_Async = true;
            CallService('Service_Call_Completed_PayPoliciesToVictoire');
            /* ---------------- */

        //}


    }
    catch (e) {
        alert("Btn_CheckBalance_Click : " + e.message);
    }
}

//function ResetValues()
//{
//    try
//    {
//        _Params_VerifyPolicyToPay.RECEIPTS_ID(0);
//        //Params_VerifyPolicyToPay.POLICY_CODE = "RC";
//        //Params_VerifyPolicyToPay.POLICY_NO = 0;
//        //Params_VerifyPolicyToPay.ENDORSEMENT = 0;
//        _Params_VerifyPolicyToPay.POLICIES_ID (0);
//        //_Params_VerifyPolicyToPay.INSUREDNAME = "";
//        _Params_VerifyPolicyToPay.PAYMENT_TYPE("Yearly");
//        _Params_VerifyPolicyToPay.CURRENCY_CODE ("USD");
//        _Params_VerifyPolicyToPay.AMOUNT(0);
//        _Params_VerifyPolicyToPay.DESIGNATION("");
//        _Params_VerifyPolicyToPay.REFERENCE("");
//        _Params_VerifyPolicyToPay.ISPAID(0);
//        _Params_VerifyPolicyToPay.PAYER_NAME("");
//        _Params_VerifyPolicyToPay.PAYER_ADDRESS("");
//        _Params_VerifyPolicyToPay.PAYER_EMAIL("");
//        _Params_VerifyPolicyToPay.PAYER_MOBILE("");
//        _Params_VerifyPolicyToPay.PAYER_COUNTRY("");
//        _Params_VerifyPolicyToPay.PAYER_CITY("");
//        _Params_VerifyPolicyToPay.ACCOUNTNUMBER(0);
//        _Params_VerifyPolicyToPay.CURRID(0);
//        _Params_VerifyPolicyToPay.ShowPaymentDetails(false);
//        //_Params_VerifyPolicyToPay.POILCYDESC = "02/";
//        _Params_VerifyPolicyToPay.PolicyDetails(false);
//        _Params_VerifyPolicyToPay.AccountDetails(false);
//        //_Params_VerifyPolicyToPay.INSNAME = "";
//        _Params_VerifyPolicyToPay.ENTRY_USER_ID(0);
//        _Params_VerifyPolicyToPay.BROKERCODE(0);;
//        //_Params_VerifyPolicyToPay.My_Policies([]);
//    }
//    catch (e) {
//        alert("ResetValues : " + e.message);
//    }
//}




