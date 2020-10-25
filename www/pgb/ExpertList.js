/* ---------------- */
var __Params_Get_ExpartInfo; // KO
/* ---------------- */
var _Params_Expert = new Object();
_Params_Expert.GenderID = 0;

__Params_Get_ExpartInfo = ko.mapping.fromJS(_Params_Expert);



$(document).on("pagebeforecreate", "#pg_ExpertList", function (event, ui) {
//$('#pg_ExpertList').bind("pagebeforecreate", function (event) {


});

$(document).on("pagebeforeshow", "#pg_ExpertList", function (event, ui) {   
//$('#pg_ExpertList').bind('pageshow', function (event, ui) {
    ////////debugger;
    /* -------------------------------------------------- */
    // if (!js_FncCommon()) { return; };
    /* -------------------------------------------------- */
    //alert('page bind');
    /* SEO */
    /* -------------------------------------------------- */
    $("meta[name=description]").attr("content", "List Of Expert");
    $("title").html("List Of Expert");
    /* -------------------------------------------------- */

    var func = function () {

        //jq_ShowMobileLoader();
        jq_ShowMobileLoaderAdv("pg_ExpertList");
        GetData_Expert();
    };

    setTimeout(func, 300);

    /* ---------------- */
});

/* --------------------------------------------------------------- */
function GetData_Expert() {
    ////////debugger;
    try {
        /* ---------------- */
        $("#ul_Listing_Expert").html("");
        /* ---------------- */
        _Service_Method = "GetExpertListCriteria";
        CallService('Service_Call_Completed_Expert');
        /* ---------------- */
    }
    catch (e) {
        alert("GetData_Expert(): " + e.Message);
    }
}
/* --------------------------------------------------------------- */
/* --------------------------------------------------------------- */
function Service_Call_Completed_Expert(i_Response) {
    ////////debugger;
    try {
        switch (_Service_Method) {
            case "GetExpertListCriteria":
                GetExpertListCriteria_Completed(i_Response);
                break;
        }
    }
    catch (e) {
        alert("Service_Call_Completed_Expert:" + e.message);
    }
}

function GetExpertListCriteria_Completed(i_Input) {
    ////////debugger;
    try {

        $("#sp_NoResults").html("");
        //jq_HideMobileLoader();
        jq_HideMobileLoaderAdv("pg_ExpertList");
        if (i_Input.My_Result.length > 0) {
            // $("#ul_Listing_Expert").html($("#ListingTemplateExpert").render(i_Input.My_Result)).listview('refresh').trigger('create');

            $("#ul_Listing_Expert").html($("#ListingTemplateExpert").render(i_Input.My_Result)).collapsibleset('refresh').trigger('create');
        }
        else {
            $("#sp_NoResultsExpert").html("<br><br>Sorry, no results found matching your criteria.");
        }
    }
    catch (e) {
        alert("GetExpertListCriteria_Completed: " + e.Message);
    }
}

/* --------------------------------------------------------------- */


