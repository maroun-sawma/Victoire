/* --------------------------------------------------------------- */
var Params_Get_Ac_Listing_By_Criteria = new Object();
Params_Get_Ac_Listing_By_Criteria.Ac_Name = "";
Params_Get_Ac_Listing_By_Criteria.REGION_ID = "";
Params_Get_Ac_Listing_By_Criteria.RegionName = "";
Params_Get_Ac_Listing_By_Criteria.Class = "";
Params_Get_Ac_Listing_By_Criteria.AcType = "";
Params_Get_Ac_Listing_By_Criteria.TSlanguage = "";
Params_Get_Ac_Listing_By_Criteria.TScountry = "";
Params_Get_Ac_Listing_By_Criteria.TScurrency = "";
Params_Get_Ac_Listing_By_Criteria.SortIn = "1";
var Params_My_NearMe = new Object();
Params_My_NearMe.Is_Enabled = false;
Params_My_NearMe.Longitude = "0";
Params_My_NearMe.Latitude = "0";
Params_My_NearMe.Range = "0";
Params_Get_Ac_Listing_By_Criteria.My_NearMe = Params_My_NearMe;
/* --------------------------------------------------------------- */

var QS_RegionName = '';
/* -------------------- */

$('#pg_Listing').bind('pagehide', function () {
    $(this).remove();
});

$(document).on("pagebeforecreate", "#pg_Listing", function (event, ui) {
//$('#pg_Listing').bind("pagebeforecreate", function (event) {
    //alert('edjehjdhejhded');
    //$("#ddl_SortBy").selectmenu({ inline: false, mini: true, theme: "h" });
    /* ---------------- */
    //InitControlsProperties();
    /* ---------------- */

    /* ---------------- */
    //    $("#ddl_SortBy").bind("change", function (event, ui) {
    //        /* ---------------- */
    //        var p = new Object();
    //        p = $.parseJSON(sessionStorage["Param_Home"]);
    //        p.SortIn = $(this).val();
    //        sessionStorage["Param_Home"] = JSON.stringify(p);

    //        $(this).val("");
    //        $(this).selectmenu('refresh');

    //        /* ---------------- */
    //        GetData_Ac_Listing();
    //        /* ---------------- */
    //    });
    //    /* ---------------- */
});

$(document).on("pagebeforeshow", "#pg_Listing", function (event, ui) {  
//$('#pg_Listing').bind('pageshow', function (event, ui) {
    /* -------------------------------------------------- */
    ////////debugger;
    if (!js_FncCommon()) { return; };
    /* -------------------------------------------------- */

    /* Prepare Method Handler that will execute after Get_Latest_Sys_Params */
    /* -------------------------------------------------- */
    //    runMethodHandler = function () {
    //        $("#ddl_SortBy").selectmenu('refresh');
    //        /* ---------------- */
    //        GetData_Ac_Listing();
    //        /* ---------------- */
    //    };
    /* ---------------- */
    //Get_Latest_Sys_Params();
    /* -------------------------------------------------- */
    GetData_Ac_Listing();

});

/* JsRender Converter */
/* --------------------------------------------------------------- */
//$.views.converters({
//    AmtConv: function (value) {
//        return $.parseJSON(localStorage["TravelSite"]).TScurrency + Math.round(value / $.parseJSON(localStorage["TravelSite"]).VAT);
//    }
//});
/* --------------------------------------------------------------- */

/* GetData_Ac_Listing */
/* --------------------------------------------------------------- */
function GetData_Ac_Listing() {
    ////////debugger;
    try {
        /* ---------------- */
        $("#ul_Listing").html("");
        /* ---------------- */

        /* ---------------- */
        //GatherUIData_Ac_Listing();
        /* ---------------- */

        /* ---------------- */
        //_Params = ko.mapping.toJSON(_Params_Get_Ac_Listing);       

            // Check if RegionName is passed in Query String //
            /* ---------------- */

        //sessionStorage["Param_Home"] = JSON.stringify(Params_Get_Ac_Listing_By_Criteria); 
        jq_ShowMobileLoader();
            /* ---------------- */
        _Service_Method = "Get_Ac_Listing";
        _Params = sessionStorage["Param_Home"];
        CallService('Service_Call_Completed_Listing');
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
function Get_Ac_Listing_Completed(i_Input) {
    ////////debugger;
    try {
        /* SEO */
        /* -------------------------------------------------- */
//        var str_RegionName = ($.trim(QS_RegionName) != '' ? $.trim(QS_RegionName) : (sessionStorage["RegionName"] != '' ? sessionStorage["RegionName"] : ''));
//        if ($.trim(str_RegionName) != '') {
//            $("meta[name=description]").attr("content", "Top rated " + str_RegionName + " hotels, resorts, apartments and chalets. Plan your trip to " + str_RegionName + " by checking our travel guide and " + str_RegionName + " map");
//            $("meta[name=keywords]").attr("content", "hotels Lebanon, " + str_RegionName + " Lebanon hotel booking");
//            $("title").html("Hotels in " + str_RegionName + " Lebanon | Book and find by map " + str_RegionName + " hotels, resorts, apartments and chalets");
//        }
        /* -------------------------------------------------- */

        $("#sp_NoResults").html("");
        if (i_Input.My_Result.length > 0) {            
            $("#ul_Listing").html($("#ListingTemplate").render(i_Input.My_Result)).listview('refresh').trigger('create');
        }
        else
         {
            $("#sp_NoResults").html("<br><br>Sorry, no results found matching your criteria.");
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
        alert("Get_Ac_Listing_Completed: " + e.Message);
    }
}
/* --------------------------------------------------------------- */

/* --------------------------------------------------------------- */
function Service_Call_Completed_Listing(i_Response) {
    ////////debugger;
    try {
        switch (_Service_Method) {
            case "Get_Ac_Listing":
                Get_Ac_Listing_Completed(i_Response);
                break;
            case "Get_Ac_With_Deals":
                Get_Ac_Listing_Completed(i_Response);
                break;
        }
    }
    catch (e) {
        alert("Service_Call_Completed:" + e.message);
    }
}
/* --------------------------------------------------------------- */