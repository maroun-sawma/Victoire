
var _Params_Get_LifeExpansionQuotationInfo, ___Params_Get_LifeExpansionQuotationInfo; // KO

// --------------------
var Validator_Login;
// --------------------

/* ---------------- */
var _Params_Get_LifeExpansionQuotationInfo = new Object();
_Params_Get_LifeExpansionQuotationInfo.pkQuotationID = 0;
_Params_Get_LifeExpansionQuotationInfo.QuotationSubject = "";
_Params_Get_LifeExpansionQuotationInfo.FullName = "";
_Params_Get_LifeExpansionQuotationInfo.Phone = "";
_Params_Get_LifeExpansionQuotationInfo.Email = "";
_Params_Get_LifeExpansionQuotationInfo.SumInsured = 0;
_Params_Get_LifeExpansionQuotationInfo.BirthDate = "";
_Params_Get_LifeExpansionQuotationInfo.Details = "";
_Params_Get_LifeExpansionQuotationInfo.OtherInfo = "";
//_Params_Get_QuotationInfo.NumberOfYears = 0;
_Params_Get_LifeExpansionQuotationInfo.IsVisible = false;

___Params_Get_LifeExpansionQuotationInfo = ko.mapping.fromJS(_Params_Get_LifeExpansionQuotationInfo);

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

$(document).on("pagebeforecreate", "#pg_LifeExpansionQuotationForm", function (event, ui) {
    //$('#pg_GetQuotation').bind("pagebeforecreate", function (event) {
    //////debugger;
    //alert('ehgdhegdhged');


    Validator_Login = $("#Frm_LifeExpansionQuotationForm").validate({
        rules: {
            txt_LifeFullName: { required: true, maxlength: 250 },
            txt_Lifetel: { required: true, maxlength: 49 },
            txt_Lifeemail: { required: true, email: true, maxlength: 200 },
            txt_LifeSumInsured: { required: true, digits: true, maxlength: 7, min: 10, max: 9999999 },
            txt_LifeDOB: { required: true },
            txt_LifeDetails: { required: false, maxlength: 490 }
        }
    });

    RemoveInputDefaulValue('txt_LifeSumInsured', 0);

    // Mobiscroll Date & Time initialization
    $('#txt_LifeDOB').mobiscroll().date({
        theme: 'android-holo-light',        // Specify theme like: theme: 'ios' or omit setting to use default 
        display: 'bubble',    // Specify display mode like: display: 'bottom' or omit setting to use default
        mode: 'mixed',          // More info about mode: http://docs.mobiscroll.com/2-17-1/datetime#!opt-mode
        minDate: new Date(yyyy - 50, mm, dd),  // More info about minDate: http://docs.mobiscroll.com/2-17-1/datetime#!opt-minDate
        maxDate: new Date(yyyy - 1, mm, dd),   // More info about maxDate: http://docs.mobiscroll.com/2-17-1/datetime#!opt-maxDate
        animate: 'swing',
        dateOrder: 'yy MMdd',
        dateFormat: "dd/mm/yy",
        onSelect: function (valueText, inst) {
        },
    });


    $(this).on("click", "#btn_SendLifeQuotation", function (event) {
        ////////debugger;
        if ($("#Frm_LifeExpansionQuotationForm").valid()) {
            /* ---------------- */
            var func = function () {

                //jq_ShowMobileLoader();
                jq_ShowMobileLoaderAdv("pg_LifeExpansionQuotationForm");
                GetData_ExpansionQuotation();
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


$(document).on("pagebeforeshow", "#pg_LifeExpansionQuotationForm", function (event, ui) {
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


    var query = "title=LIFE Insurance: Expansion Plan&email=vie@victoire.com.lb~vie@victoire.com.lb";//$(this).data("url").split("?")[1];
    query = query.replace("title=", "");
    query = query.replace("email=", "");

    title = query.split("&")[0];
    email = query.split("&")[1];

    //alert(title);

    //alert(email);

    //alert(query);

    $('#lbl_LifeSubject').text(title);


    //alert(query);

    //ko.applyBindings(__Params_Get_QuotationInfo, document.getElementById('ct_LifeQuotationForm'));

    /* ---------------- */

});

function GetData_ExpansionQuotation() {
    ////////debugger;
    try {
        /* ---------------- */
        ___Params_Get_LifeExpansionQuotationInfo.QuotationSubject(title);
        ___Params_Get_LifeExpansionQuotationInfo.OtherInfo(email);
        ___Params_Get_LifeExpansionQuotationInfo.BirthDate(jq_parseDate2(___Params_Get_LifeExpansionQuotationInfo.BirthDate()));

        /* ---------------- */
        _Params = ko.mapping.toJSON(___Params_Get_LifeExpansionQuotationInfo);

        _Service_Method = "Update_LifeExpansionQuotationData";
        CallService('Service_Call_Completed_ExpansionQuotation');
        /* ---------------- */

    }
    catch (e) {
        alert("GetData_Quotation : " + e.Message);
    }

}


/* --------------------------------------------------------------- */
function Service_Call_Completed_ExpansionQuotation(i_Response) {
    //////debugger;
    try {
        switch (_Service_Method) {
            case "Update_LifeExpansionQuotationData":
                Update_LifeExpansionQuotationData_Completed(i_Response);
                break;
        }
    }
    catch (e) {
        alert("Service_Call_Completed:" + e.message);
    }
}

function Update_LifeExpansionQuotationData_Completed(i_Input) {
    //////debugger;
    /* Get Quotation Completed */
    //__Params_Get_QuotationInfo = i_Input.My_Result;
    /* ---------------- */
    try {
        //jq_HideMobileLoader();
        jq_HideMobileLoaderAdv("pg_LifeExpansionQuotationForm");
        //jq_DisplayMessage("MSG_GeneralInfo", "Successfull!", "Your Quotation Has Been Sent Successfully!", "Products.html");
        jq_DisplayMessage("MSG_GeneralInfo", "Successfull!", "Your Quotation Has Been Sent Successfully!", "Products.html", null, null, "pg_Products");
        jq_HideMobileLoaderAdv("pg_LifeExpansionQuotationForm");
        //$.mobile.changePage('Products.html');
    }
    catch (e) {
        alert("Update_QuotationData_Completed: " + e.Message);
    }
}
/* --------------------------------------------------------------- */

