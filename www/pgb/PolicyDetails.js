
$('#pg_Listing').bind('pagehide', function () {
    $(this).remove();
    $('.cHide').closest('.ui-btn').hide();
});

$(document).on("pagebeforecreate", "#pg_PolicyDetails", function (event, ui) {
//$('#pg_PolicyDetails').bind("pagebeforecreate", function (event) {
    //alert('edjehjdhejhded');
    $('.cHide').closest('.ui-btn').hide();


    $(this).on("click", "#btn_Decalre_Claim", function (event) {
        ////////debugger;

        //$.mobile.changePage('ClaimForm.html', {
        //    reverse: true
        //});

        jq_NavigateToPage('pg_ClaimForm');

        event.preventDefault();
        event.stopPropagation();
    });
});

$(document).on("pagebeforeshow", "#pg_PolicyDetails", function (event, ui) {
//$('#pg_PolicyDetails').bind('pageshow', function (event, ui) {
    //////debugger;
    $('.cHide').closest('.ui-btn').hide();
    /* -------------------------------------------------- */

        //jq_ShowMobileLoader();
    jq_ShowMobileLoaderAdv("pg_PolicyDetails");

    var func = function () {
        //jq_ShowMobileLoader();
        GetDataPolicyDetails();
    };

    setTimeout(func, 5000);

});

/* JsRender Converter */
/* --------------------------------------------------------------- */

/* GetDataPolicyDetails() */
/* --------------------------------------------------------------- */
function GetDataPolicyDetails() {
    //////debugger;
    try {
        /* ---------------- */
        $("#ul_ListingPolicy").html("");
        /* ---------------- */
        /* ---------------- */
        _Service_Method = "GetPolicyDetails";
        _Params = sessionStorage.getItem("Param_DeclaireClaim");//sessionStorage["Param_DeclaireClaim"];
        CallService('Service_Call_Completed_PolicyDetails');
        /* ---------------- */
    }
    catch (e) {
        alert("GetData_Ac_Listing: " + e.Message);
    }
}

/* --------------------------------------------------------------- */

function GetJSONString(propertyNames, propertyValues) {
    var jsonString = '{';
    var i = 0;
    for (i = 0; i < propertyNames.length; i++) {
        jsonString += '"' + propertyNames[i] + '"';
        jsonString += ':';
        jsonString += '"' + propertyValues[i] + '"';
        if (i < propertyNames.length - 1) {
            jsonString += ',';
        }
    }
    jsonString += '}';
    return jsonString;
}


/* --------------------------------------------------------------- */

var _Ac_List = [];
/* ---------------- */

// Get_Ac_Listing_Completed
/* --------------------------------------------------------------- */
function GetPolicyDetails_Completed(i_Input) {
    //////debugger;
    try {

        $("#sp_NoResultsPolicyDetails").html("");
        //jq_HideMobileLoader();
        jq_HideMobileLoaderAdv("pg_PolicyDetails");
        if (i_Input.My_Result.length > 0) {
            $("#div_InsuredName").html($("#InsredNameTemplate").render(i_Input.My_Result[0])).trigger('create');
            $("#div_ListingPolicy").html($("#ListingPolicyTemplate").render(i_Input.My_Result)).trigger('create');
            //sessionStorage["Policy_Desc"] = i_Input.My_Result[0].PolicyDesc;
            MyApp_GVM.PolicyDesc(i_Input.My_Result[0].PolicyDesc);
            $('.cHide').closest('.ui-btn').show();
        }
        else {
            $("#div_InsuredName").html("");
            $("#div_ListingPolicy").html("");
            $("#sp_NoResultsPolicyDetails").html("<br><br>Sorry, no results found matching your criteria.");
            sessionStorage["Policy_Desc"] = "";
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
    catch (e) {
        alert("GetPolicyDetails_Completed: " + e.Message);
    }
}
/* --------------------------------------------------------------- */

/* --------------------------------------------------------------- */
function Service_Call_Completed_PolicyDetails(i_Response) {
    ////////debugger;
    try {
        switch (_Service_Method) {
            case "GetPolicyDetails":
                GetPolicyDetails_Completed(i_Response);
                break;
        }
    }
    catch (e) {
        alert("Service_Call_Completed_PolicyDetails:" + e.message);
    }
}
/* --------------------------------------------------------------- */