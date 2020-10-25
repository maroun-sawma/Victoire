/* ---------------- */
var __Params_Get_ExpartInfo; // KO
/* ---------------- */
var _Params_Hospital = new Object();
_Params_Hospital.GenderID = 0;

__Params_Get_HospitalInfo = ko.mapping.fromJS(_Params_Hospital);



$(document).on("pagebeforecreate", "#pg_HospitalList", function (event, ui) {
//$('#pg_HospitalList').bind("pagebeforecreate", function (event) {


});

$(document).on("pagebeforeshow", "#pg_HospitalList", function (event, ui) {   
//$('#pg_HospitalList').bind('pageshow', function (event, ui) {
    //////debugger;
    /* -------------------------------------------------- */
    // if (!js_FncCommon()) { return; };
    /* -------------------------------------------------- */
    //alert('page bind');
    /* SEO */
    /* -------------------------------------------------- */
    $("meta[name=description]").attr("content", "List Of Hospitals");
    $("title").html("List Of Hospitals");
    /* -------------------------------------------------- */

    var func = function () {

        //jq_ShowMobileLoader();
        jq_ShowMobileLoaderAdv("pg_HospitalList");
        GetData_Hospital();
    };

    setTimeout(func, 300);

    /* ---------------- */
});

/* --------------------------------------------------------------- */
function GetData_Hospital() {
    ////////debugger;
    try {

        /* ---------------- */
        $("#ul_Listing_Hospital").html("");
        /* ---------------- */
        _Service_Method = "GetHospitalListCriteria";
        CallService('Service_Call_Completed_Hospital');
        /* ---------------- */
    }
    catch (e) {
        alert("GetData_Hospital(): " + e.Message);
    }
}
/* --------------------------------------------------------------- */
/* --------------------------------------------------------------- */
function Service_Call_Completed_Hospital(i_Response) {
    ////////debugger;
    try {
        switch (_Service_Method) {
            case "GetHospitalListCriteria":
                GetHospitalListCriteria_Completed(i_Response);
                break;
        }
    }
    catch (e) {
        alert("Service_Call_Completed_Hospital:" + e.message);
    }
}

function GetHospitalListCriteria_Completed(i_Input) {
    //////debugger;
    try {

        $("#sp_NoResultshospithals").html("");
        //jq_HideMobileLoader();
        jq_HideMobileLoaderAdv("pg_HospitalList");
        if (i_Input.My_Result.length > 0) {
            // $("#ul_Listing_Expert").html($("#ListingTemplateExpert").render(i_Input.My_Result)).listview('refresh').trigger('create');

            $("#ul_Listing_Hospital").html($("#ListingTemplateHospital").render(i_Input.My_Result)).collapsibleset('refresh').trigger('create');
        }
        else {
            $("#sp_NoResultshospithals").html("<br><br>Sorry, no results found matching your criteria.");
        }
        jq_HideMobileLoaderAdv("pg_HospitalList");
    }
    catch (e) {
        alert("GetHospitalListCriteria_Completed: " + e.Message);
    }
}

/* --------------------------------------------------------------- */


