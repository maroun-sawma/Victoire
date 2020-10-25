/* ---------------- */
var _List_BodyType;
var List_TPLYearofMake = [];
MyApp_GVM.List_TPLYearofMake = ko.mapping.fromJS([]);
MyApp_GVM.List_BodyType = ko.mapping.fromJS([]);

var _Params_Get_BodyTypes, __Params_Get_BodyTypes; // KO
/* ---------------- */
var _Params_VehiculesThirdParty = new Object();
_Params_VehiculesThirdParty.YearID = 0;
_Params_VehiculesThirdParty.Code = "";

__Params_Get_BodyTypes = ko.mapping.fromJS(_Params_VehiculesThirdParty);

var _Params_Plansh = new Object();
var Validator_Login;

$(document).on("pagebeforecreate", "#pg_VehiculesThirdParty", function (event, ui) {
//$('#pg_VehiculesThirdParty').bind("pagebeforecreate", function (event) {

    Validator_Login = $("#Frm_VehiculesThirdParty").validate({
        rules: {
            ddl_BodyType_TP: { required: true},
            ddl_YearOfMake_TP: { required: true}
        }
    });



    ////////debugger;
    $(this).on("click", "#btn_GetPrices_TP", function (event) {
    //$("#btn_GetPrices_TP").bind("click", function (event) {
        ////////debugger;


        if ($("#Frm_VehiculesThirdParty").valid()) {
            var func = function () {

                //jq_ShowMobileLoader();
                jq_ShowMobileLoaderAdv("pg_VehiculesThirdParty");
                GetData_VehiculesThirdParty();
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


        /* ---------------- */
     
        /* ---------------- */

        /* ---------------- */
        event.preventDefault();
        event.stopPropagation();
    });



});

/* GetData_VehiculesThirdParty() */
/* --------------------------------------------------------------- */
function GetData_VehiculesThirdParty() {
    //////debugger;
    try {
        /* ---------------- */
        $("#ul_Listing_TP").html("");
        /* ---------------- */

        /* ---------------- */
        //GatherUIData_VehiculesThirdParty();
        /* ---------------- */

        /* ---------------- */
        _Params = ko.mapping.toJSON(__Params_Get_BodyTypes);
        _Service_Method = "GetPlansHFromBodyType";
        CallService('Service_Call_Completed_VehiculesThirdParty');
        /* ---------------- */
    }
    catch (e) {
        alert("GetData_VehiculesThirdParty(): " + e.Message);
    }
}
/* --------------------------------------------------------------- */

/* GatherUIData_VehiculesThirdParty() */
/* --------------------------------------------------------------- */
function GatherUIData_VehiculesThirdParty() {
    try {
        // To Collect Non Visual Data.
        _Params_Plansh = ko.mapping.toJS(__Params_Get_BodyTypes);
    }
    catch (e) {
        alert("GatherUIData_Update_Profile: " + e.Message);
    }
}
/* --------------------------------------------------------------- */


$(document).on("pagebeforeshow", "#pg_VehiculesThirdParty", function (event, ui) {
//$('#pg_VehiculesThirdParty').bind('pageshow', function (event, ui) {
    //////debugger;
    /* -------------------------------------------------- */
   // if (!js_FncCommon()) { return; };
    /* -------------------------------------------------- */
    //alert('page bind');
    /* SEO */
    Validator_Login.resetForm();
    /* -------------------------------------------------- */
    $("meta[name=description]").attr("content", "Get Third Party Liability Quotation");
    $("title").html("Get Third Party Liability Quotation");
    /* -------------------------------------------------- */
    //jq_ShowMobileLoader();
    jq_ShowMobileLoaderAdv("pg_VehiculesThirdParty");
    /* ------Fill Year of Make Combo-------- */
    FillYearOfMakeTPL();
    /* ---------------- */
    //var func = function () {

    //    jq_ShowMobileLoader();
        FillbodyType();
    //};

    //setTimeout(func, 300);

    /* ------End-------- */
   
   

    /* Refresh Controls */
    $("#ddl_YearOfMake_TP").selectmenu('refresh');
    /* ---------------- */

    /* Refresh Controls */
    $("#ddl_BodyType_TP").selectmenu('refresh');
    /* ---------------- */

});

function FillYearOfMakeTPL()
{
    //////debugger;
    try {
        List_TPLYearofMake = [];
        /* ---------------- */
        for (i = new Date().getFullYear(); i > 1900; i--)
        {
            var YearofMake = new Object();
            YearofMake.YearID = i;
            List_TPLYearofMake.push(YearofMake);
        }

         ko.mapping.fromJS(List_TPLYearofMake, MyApp_GVM.List_TPLYearofMake);
        //alert(ko.toJSON(_List_YearofMake));

    }
    catch (e) {
        alert("FillYearOfMake : " + e.Message);
    }
}

function FillbodyType() {
    //////debugger;
    try {
        /* ---------------- */
        _Service_Method = "RetrieveAllBodyType";
        CallService('Service_Call_Completed_VehiculesThirdParty');
        /* ---------------- */

    }
    catch (e) {
        alert("FillYearOfMake : " + e.Message);
    }
}

/* --------------------------------------------------------------- */
function Service_Call_Completed_VehiculesThirdParty(i_Response) {
    ////////debugger;
    try {
        switch (_Service_Method) {
            case "RetrieveAllBodyType":
                RetrieveAllBodyType_Completed(i_Response);
                break;
            case "GetPlansHFromBodyType":
                GetPlansHFromBodyType_Completed(i_Response);
                break;
        }
    }
    catch (e) {
        alert("Service_Call_Completed:" + e.message);
    }
}

function GetPlansHFromBodyType_Completed(i_Input) {
    //////debugger;
    try
    {

        $("#sp_NoResultsvehicules").html("");
        //jq_HideMobileLoader();
        jq_HideMobileLoaderAdv("pg_VehiculesThirdParty");
        if (i_Input.My_Result.length > 0) {
            //alert(JSON.stringify(i_Input.My_Result[0].TPlanCovers));
            $("#ul_Listing_TP").html($("#ListingTemplateTP").render(i_Input.My_Result)).trigger('create');
        }
        else {
            $("#sp_NoResultsvehicules").html("<br><br>Sorry, no results found matching your criteria.");
        }

        // Fill Collection.
        // --------------------
        _Ac_List = [];
        for (var i = 0; i < i_Input.My_Result.length; i++) {
            _Ac_List.push(i_Input.My_Result[i]);

        }
        // --------------------
        $("#ct_VehiculesThirdParty").animate({ scrollTop: $("#ul_Listing_TP").offset().top }, 1000, function () {
            $("#ul_Listing_TP").focus();
        });
    
    
    }
    catch (e) {
        alert("RetrieveAllBodyType_Completed: " + e.Message);
    }
}

/* --------------------------------------------------------------- */

function RetrieveAllBodyType_Completed(i_Input) {
    //////debugger;
    //jq_HideMobileLoader();
    /* Get BodyTypes */
    jq_HideMobileLoaderAdv("pg_VehiculesThirdParty");
    _Params_Get_BodyTypes = i_Input.My_Result;
    /* ---------------- */
    try {

        ko.mapping.fromJS(_Params_Get_BodyTypes, MyApp_GVM.List_BodyType);

        //__Params_Get_BodyTypes = ko.mapping.fromJS(_Params_VehiculesThirdParty);

        //ko.applyBindings(__Params_Get_BodyTypes, document.getElementById('ct_VehiculesThirdParty'));

        //alert(ko.toJSON(_List_BodyType));
    }
    catch (e) {
        alert("RetrieveAllBodyType_Completed: " + e.Message);
    }
}
/* --------------------------------------------------------------- */

