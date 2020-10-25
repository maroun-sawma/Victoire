
var _Params_Get_LifeEquilibriumQuotationInfo, ___Params_Get_LifeEquilibriumQuotationInfo; // KO

// --------------------
var Validator_Login;
// --------------------

/* ---------------- */
var _Params_Get_LifeEquilibriumQuotationInfo = new Object();
_Params_Get_LifeEquilibriumQuotationInfo.pkQuotationID = 0;
_Params_Get_LifeEquilibriumQuotationInfo.QuotationSubject = "";
_Params_Get_LifeEquilibriumQuotationInfo.FullName = "";
_Params_Get_LifeEquilibriumQuotationInfo.Phone = "";
_Params_Get_LifeEquilibriumQuotationInfo.Email = "";
_Params_Get_LifeEquilibriumQuotationInfo.SumInsured = 0;
_Params_Get_LifeEquilibriumQuotationInfo.BirthDate = "";
_Params_Get_LifeEquilibriumQuotationInfo.Details = "";
_Params_Get_LifeEquilibriumQuotationInfo.OtherInfo = "";
//_Params_Get_QuotationInfo.NumberOfYears = 0;
_Params_Get_LifeEquilibriumQuotationInfo.IsVisible = false;

___Params_Get_LifeEquilibriumQuotationInfo = ko.mapping.fromJS(_Params_Get_LifeEquilibriumQuotationInfo);

var title = "";
var email = "";

//var List_Members = [{ "VAL": "1", "DESC": " 1 year" }, { "VAL": "2", "DESC": " 2 years" }, { "VAL": "3", "DESC": "+ 3" }, { "VAL": "4", "DESC": "+ 4" }, { "VAL": "5", "DESC": "+ 5" }, { "VAL": "6", "DESC": "+ 6" }];
//var _List_Members = ko.mapping.fromJS(List_Members);

var today = new Date();
var dd = today.getDate();
var mm = today.getMonth() + 1; //January is 0!
var yyyy = today.getFullYear();
var mm2 = mm - 1;
var yyyy = today.getFullYear();

$(document).on("pagebeforecreate", "#pg_LifeEquilibriumQuotationForm", function (event, ui) {
    //$('#pg_GetQuotation').bind("pagebeforecreate", function (event) {
    ////////debugger;
    //alert('ehgdhegdhged');


    Validator_Login = $("#frm_LifeEquilibriumQuotationForm").validate({
        rules: {
            txt_LifeEquilibriumFullName: { required: true, maxlength: 250 },
            txt_LifeEquilibriumtel: { required: true, maxlength: 49 },
            txt_LifeEquilibriumemail: { required: true, email: true, maxlength: 200 },
            txt_LifeEquilibriumSumInsured: { required: true, digits: true, maxlength: 7, min: 10, max: 9999999 },
            txt_LifeEquilibriumDOB: { required: true },
            txt_LifeEquilibriumDetails: { required: false, maxlength: 490 }
        }
    });

    RemoveInputDefaulValue('txt_LifeEquilibriumSumInsured', 0);

    // Mobiscroll Date & Time initialization
    $('#txt_LifeEquilibriumDOB').mobiscroll().date({
        theme: 'android-holo-light',        // Specify theme like: theme: 'ios' or omit setting to use default 
        display: 'bubble',    // Specify display mode like: display: 'bottom' or omit setting to use default
        mode: 'mixed',          // More info about mode: http://docs.mobiscroll.com/2-17-1/datetime#!opt-mode
        minDate: new Date(yyyy - 50, mm2, dd),  // More info about minDate: http://docs.mobiscroll.com/2-17-1/datetime#!opt-minDate
        maxDate: new Date(yyyy - 1, mm2, dd),   // More info about maxDate: http://docs.mobiscroll.com/2-17-1/datetime#!opt-maxDate
        animate: 'swing',
        dateOrder: 'yy MMdd',
        dateFormat: "dd/mm/yy",
        onSelect: function (valueText, inst) {
        },
    });


    $(this).on("click", "#btn_SendLifeEquilibriumQuotation", function (event) {
        //////debugger;
        if ($("#frm_LifeEquilibriumQuotationForm").valid()) {
            /* ---------------- */
            var func = function () {

                //jq_ShowMobileLoader();
                jq_ShowMobileLoaderAdv("pg_LifeEquilibriumQuotationForm");
                GetData_EquilibriumQuotation();
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


$(document).on("pagebeforeshow", "#pg_LifeEquilibriumQuotationForm", function (event, ui) {
    //$('#pg_GetQuotation').bind('pageshow', function (event, ui) {
    //////debugger;
    /* -------------------------------------------------- */
    // if (!js_FncCommon()) { return; };
    /* -------------------------------------------------- */
    //alert('page bind');
    /* SEO */
    /* -------------------------------------------------- */

    Validator_Login.resetForm();

    $("meta[name=description]").attr("content", "Get Life Quotation");
    $("title").html("Get Life Quotation");
    /* -------------------------------------------------- */


    var query = "title=LIFE Insurance: Equilibrium&email=vie@victoire.com.lb~medical@victoire.com.lb";//$(this).data("url").split("?")[1];
    query = query.replace("title=", "");
    query = query.replace("email=", "");

    title = query.split("&")[0];
    email = query.split("&")[1];

    //alert(title);

    //alert(email);

    //alert(query);

    $('#lbl_LifeEquilibriumSubject').text(title);


    //alert(query);

    //ko.applyBindings(__Params_Get_QuotationInfo, document.getElementById('ct_LifeQuotationForm'));

    /* ---------------- */

});

function GetData_EquilibriumQuotation() {
    ////////debugger;
    try {
        /* ---------------- */
        ___Params_Get_LifeEquilibriumQuotationInfo.QuotationSubject(title);
        ___Params_Get_LifeEquilibriumQuotationInfo.OtherInfo(email);
        ___Params_Get_LifeEquilibriumQuotationInfo.BirthDate(jq_parseDate2(___Params_Get_LifeEquilibriumQuotationInfo.BirthDate()));

        /* ---------------- */
        _Params = ko.mapping.toJSON(___Params_Get_LifeEquilibriumQuotationInfo);

        _Service_Method = "Update_LifeEquilibriumQuotationData";
        CallService('Service_Call_Completed_EquilibriumQuotation');
        /* ---------------- */

    }
    catch (e) {
        alert("GetData_Quotation : " + e.Message);
    }

}


/* --------------------------------------------------------------- */
function Service_Call_Completed_EquilibriumQuotation(i_Response) {
    ////////debugger;
    try {
        switch (_Service_Method) {
            case "Update_LifeEquilibriumQuotationData":
                Update_LifeEquilibriumQuotationData_Completed(i_Response);
                break;
        }
    }
    catch (e) {
        alert("Service_Call_Completed:" + e.message);
    }
}

function Update_LifeEquilibriumQuotationData_Completed(i_Input) {
   //////debugger;
    /* Get Quotation Completed */
    //__Params_Get_QuotationInfo = i_Input.My_Result;
    /* ---------------- */
    try {
        //jq_HideMobileLoader();
        jq_HideMobileLoaderAdv("pg_LifeEquilibriumQuotationForm");
        //jq_DisplayMessage("MSG_GeneralInfo", "Successfull!", "Your Quotation Has Been Sent Successfully!", "Products.html");
        jq_DisplayMessage("MSG_GeneralInfo", "Successfull!", "Your Quotation Has Been Sent Successfully!", "Products.html", null, null, "pg_Products");

        //$.mobile.changePage('Products.html');
    }
    catch (e) {
        alert("Update_QuotationData_Completed: " + e.Message);
    }
}
/* --------------------------------------------------------------- */

