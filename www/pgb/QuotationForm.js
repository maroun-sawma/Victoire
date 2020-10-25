
var _Params_Get_QuotationInfo, __Params_Get_QuotationInfo; // KO

// --------------------
var Validator_Login;
// --------------------

/* ---------------- */
var _Params_Get_QuotationInfo = new Object();
_Params_Get_QuotationInfo.pkQuotationID = 0;
_Params_Get_QuotationInfo.QuotationSubject = "";
_Params_Get_QuotationInfo.FullName = "";
_Params_Get_QuotationInfo.Phone = "";
_Params_Get_QuotationInfo.Email = "";
_Params_Get_QuotationInfo.Details = "";
_Params_Get_QuotationInfo.OtherInfo = "";
_Params_Get_QuotationInfo.SumInsured = 0;
_Params_Get_QuotationInfo.BirthDate = "";

__Params_Get_QuotationInfo = ko.mapping.fromJS(_Params_Get_QuotationInfo);

var title = "";
var email = "";

//var _Params_MedicalToDB = new Object();

$(document).on("pagebeforecreate", "#pg_GetQuotation", function (event, ui) {
//$('#pg_GetQuotation').bind("pagebeforecreate", function (event) {
    ////////debugger;
    //alert('ehgdhegdhged');


    Validator_Login = $("#Frm_Quotation").validate({
        rules: {
            FullName: { required: true,maxlength: 250 },
            tel: { required: true,maxlength: 49 },
            email: { required: true,email:true,maxlength: 200 },
            Details: { required: false, maxlength: 490 }
        }
    });


    $(this).on("click", "#btn_SendQuotation", function (event) {
    //$("#btn_SendQuotation").bind("click", function (event) {
        ////////debugger;

        //if ($.trim($("#FullName").val()) == "") {
        //    js_MyCustomMessage("Please Insert Your Full Name.")
        //    $("#FullName").focus();
        //    return false;
        //}


        //if ($.trim($("#tel").val()) == "") {
        //    js_MyCustomMessage("Please Insert Your Mobile Number.")
        //    $("#tel").focus();
        //    return false;
        //}

        //if ($.trim($("#email").val()) == "") {
        //    js_MyCustomMessage("Please Insert Your Email.")
        //    $("#email").focus();
        //    return false;
        //}

        //if ($.trim($("#Details").val()) == "") {
        //    js_MyCustomMessage("Please Insert Your Message Request")
        //    $("#Details").focus();
        //    return false;
        //}

        if ($("#Frm_Quotation").valid()) {
            /* ---------------- */
            var func = function () {

                //jq_ShowMobileLoader();
                jq_ShowMobileLoaderAdv("pg_GetQuotation");
                GetData_Quotation();
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


$(document).on("pagebeforeshow", "#pg_GetQuotation", function (event, ui) {
//$('#pg_GetQuotation').bind('pageshow', function (event, ui) {
    ////////debugger;
    /* -------------------------------------------------- */
    // if (!js_FncCommon()) { return; };
    /* -------------------------------------------------- */
    //alert('page bind');
    /* SEO */
    /* -------------------------------------------------- */

    Validator_Login.resetForm();

    $("meta[name=description]").attr("content", "Get Quotation");
    $("title").html("Get Quotation");
    /* -------------------------------------------------- */


    var query = $(this).data("url").split("?")[1];
    query = query.replace("title=", "");
    query = query.replace("email=", "");

    title = query.split("&")[0];
    email = query.split("&")[1];

    //alert(title);

    //alert(email);

    //alert(query);

    $('#lblSubject').text(title);


    //alert(query);

    //ko.applyBindings(__Params_Get_QuotationInfo, document.getElementById('ct_GetQuotation'));

    /* ---------------- */

});

function GetData_Quotation() {
    ////////debugger;
    try {
        /* ---------------- */
        __Params_Get_QuotationInfo.QuotationSubject(title);
        __Params_Get_QuotationInfo.OtherInfo(email);
        __Params_Get_QuotationInfo.SumInsured(0);
        __Params_Get_QuotationInfo.BirthDate("");

        /* ---------------- */
        _Params = ko.mapping.toJSON(__Params_Get_QuotationInfo);

        _Service_Method = "Update_LifeQuotationData";
        CallService('Service_Call_Completed_Quotation');
        /* ---------------- */

    }
    catch (e) {
        alert("GetData_Quotation : " + e.Message);
    }

}


/* --------------------------------------------------------------- */
function Service_Call_Completed_Quotation(i_Response) {
    ////////debugger;
    try {
        switch (_Service_Method) {
            case "Update_LifeQuotationData":
                Update_QuotationData_Completed(i_Response);
                break;
        }
    }
    catch (e) {
        alert("Service_Call_Completed:" + e.message);
    }
}

function Update_QuotationData_Completed(i_Input) {
    ////////debugger;
    /* Get Quotation Completed */
    //__Params_Get_QuotationInfo = i_Input.My_Result;
    /* ---------------- */
    try {
        //jq_HideMobileLoader();
        jq_HideMobileLoaderAdv("pg_GetQuotation");
        //jq_DisplayMessage("MSG_GeneralInfo", "Successfull!", "Your Quotation Has Been Sent Successfully!", "Products.html");
        jq_DisplayMessage("MSG_GeneralInfo", "Successfull!", "Your Quotation Has Been Sent Successfully!", "Products.html", null, null, "pg_Products");

        //$.mobile.changePage('Products.html');
    }
    catch (e) {
        alert("Update_QuotationData_Completed: " + e.Message);
    }
}
/* --------------------------------------------------------------- */

