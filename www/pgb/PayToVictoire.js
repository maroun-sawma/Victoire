var Params_VerifyPolicy = new Object();
Params_VerifyPolicy.RECEIPTS_ID = 0;
Params_VerifyPolicy.POLICY_CODE = "RC";
Params_VerifyPolicy.POLICY_NO = 0;
Params_VerifyPolicy.ENDORSEMENT = 0;
Params_VerifyPolicy.POLICIES_ID = 0;
Params_VerifyPolicy.INSUREDNAME = "";
Params_VerifyPolicy.PAYMENT_TYPE = "Yearly";
Params_VerifyPolicy.CURRENCY_CODE = "USD";
Params_VerifyPolicy.AMOUNT = 0;
Params_VerifyPolicy.DESIGNATION = "";
Params_VerifyPolicy.REFERENCE = "";
Params_VerifyPolicy.ISPAID = 0
Params_VerifyPolicy.PAYER_NAME = "";
Params_VerifyPolicy.PAYER_ADDRESS = "";
Params_VerifyPolicy.PAYER_EMAIL = "";
Params_VerifyPolicy.PAYER_MOBILE = "";
Params_VerifyPolicy.PAYER_COUNTRY = "";
Params_VerifyPolicy.PAYER_CITY = "";
Params_VerifyPolicy.ACCOUNTNUMBER = 0;
Params_VerifyPolicy.CURRID = 0;
Params_VerifyPolicy.ShowPaymentDetails = false;
Params_VerifyPolicy.POILCYDESC = "02/";
Params_VerifyPolicy.PolicyDetails = false;
Params_VerifyPolicy.AccountDetails = false;
Params_VerifyPolicy.INSNAME = "";
Params_VerifyPolicy.ENTRY_USER_ID = 0;
Params_VerifyPolicy.BROKERCODE = 0;
Params_VerifyPolicy.My_Policies = [];

// ----------------------------------
var _Params_Get_PayToVictoire_Startup_Data = new Object(); 
_Params_Get_PayToVictoire_Startup_Data.OWNER_ID = 1;
//------------------------------------

var List_AmountToPay = [];
MyApp_GVM.List_AmountToPay = ko.mapping.fromJS(List_AmountToPay);
var _Params_VerifyPolicy = ko.mapping.fromJS(Params_VerifyPolicy);

MyApp_GVM.List_PolicyType = ko.mapping.fromJS([]);
MyApp_GVM.List_CountyOfResidance = ko.mapping.fromJS([]);
MyApp_GVM.List_Payment_Validation = ko.mapping.fromJS([]);

/*---------------------------------------------------------------*/

// -----------------------------------------------------------
//_Params_VerifyPolicy.PAYER_NAME.subscribe(function (newVal) {
//    ////////debugger;
//    if (newVal.toString().trim()!= "") {
//        _Params_VerifyPolicy.INSURED_NAME(newVal);
//    }
//});

// ----------------------------------
_Params_VerifyPolicy.AMOUNT.subscribe(function (newval) {
    if (newval != null && newval != 0) {
        //alert('11');
        /* ---------------- */
        //$('#Txt_Ma_SumInsured').number(true, 0);
        $.number(newval);
        _Params_VerifyPolicy.AMOUNT($.number(newval))
        /* ---------------- */

    }
});




$(document).on("pagebeforecreate", "#pg_PayToVictoire", function (event, ui) {

    //alert('pagebeforecreate');
    ////////debugger;
    Validator_Login = $("#Frm_PayToVictoire").validate({
        rules: {
            txt_Amount_ToPay:{ required: true, minlength: 1, maxlength: 9 },
            txt_PV_Name: { required: true,minlength: 3, maxlength: 150},
            txt_PV_Email: { required: true, email: true, maxlength: 50 },
            txt_PV_Mobile: { required: true,minlength: 8, maxlength: 25},
            txt_PV_Address: { required: true, minlength: 3, maxlength: 200 },
            txt_PV_Country: { required: true},
            txt_PV_City: { required: true, minlength: 3, maxlength: 50 },
            txt_Account_VictNo: { required: true, digits: true, minlength: 8 },
            txt_Account_VicName: { required: true, minlength: 3, maxlength: 150 },
        }
    });

    RemoveInputDefaulValue('txt_Amount_ToPay', 0);

    RemoveInputDefaulValue('txt_Account_VictNo', 0);

    $(this).on("click", "#btn_PV_Pay", function (event) {
        ////////debugger;

        if ($("#chk_AcceptAcc").is(':checked')) {

            if ($("#Frm_PayToVictoire").valid()) {

                var x = ko.mapping.toJS(_Params_VerifyPolicy);
                x.CURRID = $('input:radio[name=PaymentTypeAcc]:checked')[0].value;
                if (parseInt($('input:radio[name=PaymentTypeAcc]:checked')[0].value.toString()) == 840) {
                    x.CURRENCY_CODE = "USD";
                }
                else if (parseInt($('input:radio[name=PaymentTypeAcc]:checked')[0].value.toString()) == 422) {
                    x.CURRENCY_CODE = "LL";
                }

                x.AMOUNT = parseFloat(x.AMOUNT.toString().replace(/,/g, ""));

                if (x.AMOUNT == 0)
                {
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
                                jq_ShowMobileLoaderAdv("pg_PayToVictoire");
                                _Service_Method = "Edit_PayPoliciesToVictoire";
                                _Async = true;
                                CallService('Service_Call_Completed_PayToVictoire');
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



});


$(document).on("pagebeforeshow", "#pg_PayToVictoire", function (event, ui) {
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
    //var func = function () {

    //jq_ShowMobileLoader();
         jq_ShowMobileLoaderAdv("pg_PayToVictoire");
        Get_PayToVictoire_Startup_Data();
    //};

    //setTimeout(func, 300);
    /* ---------------- */

    //FillPaymentAmount();

    /* Refresh Controls */
    $("#DDL_PV_CountyOfResidance").change();
    /* ---------------- */

    //ko.applyBindings((_Params_VerifyPolicy), document.getElementById('ct_PayToVictoire'));

});


function Btn_CheckBalance_Click() {
    try {
        debugger;


        if (_Params_VerifyPolicy.ACCOUNTNUMBER() != 0 && _Params_VerifyPolicy.INSUREDNAME() == "") {
                showToast('Please enter account name!', 'fail');
                return;
        }

        if (_Params_VerifyPolicy.AMOUNT().toString().indexOf(",") != -1) {
            var x = ko.mapping.toJS(_Params_VerifyPolicy);
            x.AMOUNT = parseFloat(x.AMOUNT.toString().replace(/,/g, ""));
            _Params = JSON.stringify(x);
        }
        else {
            _Params = ko.mapping.toJSON(_Params_VerifyPolicy);
        }


        //_Params = ko.mapping.toJSON(_Params_VerifyPolicy);
            //alert(_Params);
            _Service_Method = "ValidatePayment";
            _Async = true;
            CallService('Service_Call_Completed_PayToVictoire');
            /* ---------------- */
    }
    catch (e) {
        alert("Btn_CheckBalance_Click : " + e.message);
    }
}


/* --------------------------------------------------------------- */
function ValidatePayment_Completed(i_Input) {
    try {
        //alert('test');
        debugger;
        var llexit = 0;
        if (i_Input.My_Result != null)
        {
            if (i_Input.My_Result.length > 0) {

                _Params_VerifyPolicy.PolicyDetails(false);
                _Params_VerifyPolicy.AccountDetails(true);
                _Params_VerifyPolicy.ShowPaymentDetails(true);
                ko.mapping.fromJS(i_Input.My_Result, MyApp_GVM.List_Payment_Validation);

                //$('#lblBalance').text('Balance:' + i_Input.My_Result.BALANCE);
                //$('#lblBalanceLL').text(i_Input.My_Result[0].BALANCELL);
                //_Params_Payment.ACCOUNTNUMBER(i_Input.My_Result[0].ACCOUNTNUMBER);
                _Params_VerifyPolicy.INSUREDNAME(i_Input.My_Result[0].INSUREDNAME);

                _Params_VerifyPolicy.PAYER_NAME(i_Input.My_Result[0].INSUREDNAME);
                _Params_VerifyPolicy.PAYER_EMAIL(i_Input.My_Result[0].EMAIL);
                _Params_VerifyPolicy.PAYER_ADDRESS(i_Input.My_Result[0].BUILDING);
                _Params_VerifyPolicy.PAYER_CITY(i_Input.My_Result[0].CITY);
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
/* --------------i_FISCAL_YEAR_ID is the USER_ID------------------------------------------------- */
function Get_PayToVictoire_Startup_Data() {
    try {
        ////////debugger;

        //alert('test');
        _Params_Get_PayToVictoire_Startup_Data.OWNER_ID = 1;
        _Params_Get_PayToVictoire_Startup_Data.USER_ID = 0;
        _Params_Get_PayToVictoire_Startup_Data.PCODE = "";

        _Params = JSON.stringify(_Params_Get_PayToVictoire_Startup_Data);

        _Service_Method = "Get_PayToVictoire_Startup_Data";

        CallService('Service_Call_Completed_PayToVictoire');
    }
    catch (e) {
        alert("Get_PayToVictoire_Startup_Data: " + e.Message);
    }
}
/* --------------------------------------------------------------- */

/* --------------------------------------------------------------- */
function Service_Call_Completed_PayToVictoire(i_Response) {
    ////////debugger;
    try {
        switch (_Service_Method) {
            case "Get_PayToVictoire_Startup_Data":
                Get_PayToVictoire_Startup_Data_Completed(i_Response);
                break;
            case "Edit_PayPoliciesToVictoire":
                Edit_PayPoliciesToVictoire_Completed(i_Response);
                break;
            case "ValidatePayment":
                ValidatePayment_Completed(i_Response);
                break;
        }
    }
    catch (e) {
        alert("Service_Call_Completed:" + e.message);
    }
}

/* --------------------------------------------------------------- */
function Get_PayToVictoire_Startup_Data_Completed(i_Input) {
    try {
        //jq_HideMobileLoader();
        jq_HideMobileLoaderAdv("pg_PayToVictoire");
        // alert('t3est');
        if (i_Input.My_Result == null) {
            showToast('There is A Problem In Your Connection, Please Retry!', 'fail');
            return;
        }
        //alert('test');
        //ko.mapping.fromJS(i_Input.My_Result.AllProduct, _List_PolicyType);
        ko.mapping.fromJS(i_Input.My_Result.Countries, MyApp_GVM.List_CountyOfResidance);
    }
    catch (e) {
        alert("Get_PayToVictoire_Startup_Data_Completed: " + e.message);
    }
}

/* --------------------------------------------------------------- */

function Edit_PayToVictoire() {
    try {
        ////////debugger;

        _Params = ko.mapping.toJSON(_Params_VerifyPolicy);

        _Service_Method = "Edit_PayPoliciesToVictoire";

        CallService('Service_Call_Completed_PayToVictoire');
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
        ////////debugger;
        //jq_HideMobileLoader();
        jq_HideMobileLoaderAdv("pg_PayToVictoire");
        /* ----------------- */


        if (parseInt(i_Response.My_Result.RECEIPTS_ID) > 0) {
            /////////////////For Web Testing Issues///////////////////////////////////////////////////////////
            //var ref = window.open('http://localhost:4160/MobileReceiptPayment.aspx?ReceiptID=' + i_Response.My_Result.RECEIPTS_ID, '_blank', 'location=yes');
            //ref.addEventListener('loadstart', function (event) { alert('start: ' + event.url); });
            //ref.addEventListener('loadstop', function (event) { alert('stop: ' + event.url); });
            //ref.addEventListener('loaderror', function (event) { alert('error: ' + event.message); });
            //ref.addEventListener('exit', function (event) { alert(event.type); });
            /////////////////For Web Testing Issues///////////////////////////////////////////////////////////



            var ref = cordova.InAppBrowser.open('https://online.victoire.com.lb/MobileReceiptPayment.aspx?ReceiptID=' + i_Response.My_Result.RECEIPTS_ID, '_blank', 'location=no','footer=yes','footercolor=#00ff00','closebuttoncaption=Done','closebuttoncolor=#0000ff');
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
        for (i = 10 ; i<=20; i++) {
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

