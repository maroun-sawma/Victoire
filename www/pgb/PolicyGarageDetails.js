
$('#pg_Listing').bind('pagehide', function () {
    $(this).remove();
    $('.cHide').closest('.ui-btn').hide();
});

$(document).on("pagebeforecreate", "#pg_PolicyGarageDetails", function (event, ui) {
//$('#pg_PolicyDetails').bind("pagebeforecreate", function (event) {
    //alert('edjehjdhejhded');
    $('.cHide').closest('.ui-btn').hide();

    $(this).on("click", "#btn_Garage_Declare", function (event) {
        ////////debugger;

            //$.mobile.changePage('ClaimGarageForm.html', {
            //    reverse: true
            //});

        jq_NavigateToPage('pg_ClaimGarageForm');

        event.preventDefault();
        event.stopPropagation();
    });
});

$(document).on("pagebeforeshow", "#pg_PolicyGarageDetails", function (event, ui) {
//$('#pg_PolicyDetails').bind('pageshow', function (event, ui) {
    ////////debugger;
    $('.cHide').closest('.ui-btn').hide();
    /* -------------------------------------------------- */
    ////////debugger;
        //jq_ShowMobileLoader();
        jq_ShowMobileLoaderAdv("pg_PolicyGarageDetails");


    GetGarageDataPolicyDetails();

});

/* JsRender Converter */
/* --------------------------------------------------------------- */

/* GetDataPolicyDetails() */
/* --------------------------------------------------------------- */
function GetGarageDataPolicyDetails() {
    ////////debugger;
    try {
        /* ---------------- */
        /* ---------------- */
        /* ---------------- */
        _Service_Method = "GetPolicyDetails";
        _Params = sessionStorage.getItem("Param_DeclaireGarageClaim");//sessionStorage["Param_DeclaireGarageClaim"];
        CallService('Service_Call_Completed_PolicyGarageDetails');
        /* ---------------- */
    }
    catch (e) {
        alert("GetGarageDataPolicyDetails: " + e.Message);
    }
}

/* --------------------------------------------------------------- */


/* --------------------------------------------------------------- */

var _Ac_List = [];
/* ---------------- */

// Get_Ac_Listing_Completed
/* --------------------------------------------------------------- */
function GetGaragePolicyDetails_Completed(i_Input) {
    ////////debugger;
    try {

        $("#sp_NoResultsGaragePolicydetails").html("");
        //jq_HideMobileLoader();
        jq_HideMobileLoaderAdv("pg_PolicyGarageDetails");
        if (i_Input.My_Result != null)
        {
            if (i_Input.My_Result.length > 0) {
                $("#div_GarageInsuredName").html($("#InsredNameGarageTemplate").render(i_Input.My_Result[0])).trigger('create');
                $("#div_GarageListingPolicy").html($("#ListingGaragePolicyTemplate").render(i_Input.My_Result)).trigger('create');
                //sessionStorage["Policy_GarageDesc"] = i_Input.My_Result[0].PolicyDesc;
                MyApp_GVM.PolicyGarageDesc(i_Input.My_Result[0].PolicyDesc);
                $('.cHide').closest('.ui-btn').show();
            }
            else {
                $("#div_GarageInsuredName").html("");
                $("#div_GarageListingPolicy").html("");
                $("#sp_NoResultsGaragePolicydetails").html("<br><br>Sorry, no results found matching your criteria.");
                //sessionStorage["Policy_GarageDesc"] = "";
                MyApp_GVM.PolicyGarageDesc("");
                $('.cHide').closest('.ui-btn').hide();
            }

            // Fill Collection.
            // --------------------
            _Ac_List = [];
            for (var i = 0; i < i_Input.My_Result.length; i++) {
                _Ac_List.push(i_Input.My_Result[i]);
            }
            // --------------------
        }

    }
    catch (e) {
        //alert("GetPolicyDetails_Completed: " + e.Message);
    }
}
/* --------------------------------------------------------------- */

/* --------------------------------------------------------------- */
function Service_Call_Completed_PolicyGarageDetails(i_Response) {
    ////////debugger;
    try {
        switch (_Service_Method) {
            case "GetPolicyDetails":
                GetGaragePolicyDetails_Completed(i_Response);
                break;
        }
    }
    catch (e) {
        alert("Service_Call_Completed_PolicyDetails:" + e.message);
    }
}
/* --------------------------------------------------------------- */