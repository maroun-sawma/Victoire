
var _Params_Get_LifeProtegeQuotationInfo, ___Params_Get_LifeProtegeQuotationInfo; // KO

// --------------------
var Validator_Login;
// --------------------

/* ---------------- */
var _Params_Get_LifeProtegeQuotationInfo = new Object();
_Params_Get_LifeProtegeQuotationInfo.pkQuotationID = 0;
_Params_Get_LifeProtegeQuotationInfo.QuotationSubject = "";
_Params_Get_LifeProtegeQuotationInfo.FullName = "";
_Params_Get_LifeProtegeQuotationInfo.Phone = "";
_Params_Get_LifeProtegeQuotationInfo.Email = "";
_Params_Get_LifeProtegeQuotationInfo.SumInsured = 0;
_Params_Get_LifeProtegeQuotationInfo.BirthDate = "";
_Params_Get_LifeProtegeQuotationInfo.Details = "";
_Params_Get_LifeProtegeQuotationInfo.OtherInfo = "";
//_Params_Get_QuotationInfo.NumberOfYears = 0;
_Params_Get_LifeProtegeQuotationInfo.IsVisible = false;

___Params_Get_LifeProtegeQuotationInfo = ko.mapping.fromJS(_Params_Get_LifeProtegeQuotationInfo);

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

$(document).on("pagebeforecreate", "#pg_LifeProtegeQuotationForm", function (event, ui) {
    //$('#pg_GetQuotation').bind("pagebeforecreate", function (event) {
    ////////debugger;
    //alert('ehgdhegdhged');


    Validator_Login = $("#frm_LifeProtegeQuotationForm").validate({
        rules: {
            txt_LifeProtegeFullName: { required: true, maxlength: 250 },
            txt_LifeProtegetel: { required: true, maxlength: 49 },
            txt_LifeProtegeemail: { required: true, email: true, maxlength: 200 },
            txt_LifeProtegeSumInsured: { required: true, digits: true, maxlength: 7, min: 10, max: 9999999 },
            txt_LifeProtegeDOB: { required: true },
            txt_LifeProtegeDetails: { required: false, maxlength: 490 }
        }
    });

    RemoveInputDefaulValue('txt_LifeProtegeSumInsured', 0);

    // Mobiscroll Date & Time initialization
    $('#txt_LifeProtegeDOB').mobiscroll().date({
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


    $(this).on("click", "#btn_SendLifeProtegeQuotation", function (event) {
        //////debugger;
        if ($("#frm_LifeProtegeQuotationForm").valid()) {
            /* ---------------- */
            var func = function () {

                //jq_ShowMobileLoader();
                jq_ShowMobileLoaderAdv("pg_LifeProtegeQuotationForm");
                GetData_ProtegeQuotation();
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


$(document).on("pagebeforeshow", "#pg_LifeProtegeQuotationForm", function (event, ui) {
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


    var query ="title=LIFE Insurance: Protégé Plan&email=vie@victoire.com.lb~medical@victoire.com.lb"; //$(this).data("url").split("?")[1];
    query = query.replace("title=", "");
    query = query.replace("email=", "");

    title = query.split("&")[0];
    email = query.split("&")[1];

    //alert(title);

    //alert(email);

    //alert(query);

    $('#lbl_LifeProtegeSubject').text(title);


    //alert(query);

    //ko.applyBindings(__Params_Get_QuotationInfo, document.getElementById('ct_LifeQuotationForm'));

    /* ---------------- */

});

function GetData_ProtegeQuotation() {
    ////////debugger;
    try {
        /* ---------------- */
        ___Params_Get_LifeProtegeQuotationInfo.QuotationSubject(title);
        ___Params_Get_LifeProtegeQuotationInfo.OtherInfo(email);
        ___Params_Get_LifeProtegeQuotationInfo.BirthDate(jq_parseDate2(___Params_Get_LifeProtegeQuotationInfo.BirthDate()));

        /* ---------------- */
        _Params = ko.mapping.toJSON(___Params_Get_LifeProtegeQuotationInfo);

        _Service_Method = "Update_LifeProtegeQuotationData";
        CallService('Service_Call_Completed_ProtegeQuotation');
        /* ---------------- */

    }
    catch (e) {
        alert("GetData_Quotation : " + e.Message);
    }

}


/* --------------------------------------------------------------- */
function Service_Call_Completed_ProtegeQuotation(i_Response) {
    ////////debugger;
    try {
        switch (_Service_Method) {
            case "Update_LifeProtegeQuotationData":
                Update_LifeProtegeQuotationData_Completed(i_Response);
                break;
        }
    }
    catch (e) {
        alert("Service_Call_Completed:" + e.message);
    }
}

function Update_LifeProtegeQuotationData_Completed(i_Input) {
   //////debugger;
    /* Get Quotation Completed */
    //__Params_Get_QuotationInfo = i_Input.My_Result;
    /* ---------------- */
    try {
        //jq_HideMobileLoader();
        jq_HideMobileLoaderAdv("pg_LifeProtegeQuotationForm");
        //jq_DisplayMessage("MSG_GeneralInfo", "Successfull!", "Your Quotation Has Been Sent Successfully!", "Products.html");
        jq_DisplayMessage("MSG_GeneralInfo", "Successfull!", "Your Quotation Has Been Sent Successfully!", "Products.html", null, null, "pg_Products");

        //$.mobile.changePage('Products.html');
    }
    catch (e) {
        alert("Update_QuotationData_Completed: " + e.Message);
    }
}
/* --------------------------------------------------------------- */

