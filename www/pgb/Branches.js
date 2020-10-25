

$(document).on("pagebeforecreate", "#pg_BranchesList", function (event, ui) {
//$('#pg_BranchesList').bind("pagebeforecreate", function (event) {



});

//$('#').bind('pageshow', function (event, ui) {
    $(document).on("pagebeforeshow", "#pg_BranchesList", function (event, ui) {   
    ////////debugger;
    /* -------------------------------------------------- */
    // if (!js_FncCommon()) { return; };
    /* -------------------------------------------------- */
    //alert('page bind');
    /* SEO */
    /* -------------------------------------------------- */
    $("meta[name=description]").attr("content", "List Of Branches");
    $("title").html("List Of Branches");
    /* -------------------------------------------------- */
        //jq_ShowMobileLoader();
    jq_ShowMobileLoaderAdv("pg_BranchesList");
        /* ------Fill Xpat Gender Combo-------- */

    var func = function () {

        //jq_ShowMobileLoader();
        jq_ShowMobileLoaderAdv("pg_BranchesList");
        GetData_Branches();
    };

    setTimeout(func, 300);

    /* ---------------- */
});

/* --------------------------------------------------------------- */
function GetData_Branches() {
    ////////debugger;
    try {
        
        /* ---------------- */
        $("#ul_Listing_Branches").html("");
        /* ---------------- */
        _Service_Method = "GetBranchesListCriteria";
        CallService('Service_Call_Completed_Branches');
        /* ---------------- */
    }
    catch (e) {
        alert("GetData_Branches(): " + e.Message);
    }
}
/* --------------------------------------------------------------- */
/* --------------------------------------------------------------- */
function Service_Call_Completed_Branches(i_Response) {
    ////////debugger;
    try {
        switch (_Service_Method) {
            case "GetBranchesListCriteria":
                GetBranchesListCriteria_Completed(i_Response);
                break;
        }
    }
    catch (e) {
        alert("Service_Call_Completed_Branches:" + e.message);
    }
}

function GetBranchesListCriteria_Completed(i_Input) {
    //////debugger;
    try {

        $("#sp_NoResultsBranches").html("");
        //jq_HideMobileLoader();
        jq_HideMobileLoaderAdv("pg_BranchesList");
        if (i_Input.My_Result.length > 0) {

            $("#ul_Listing_Branches").html($("#ListingTemplateBranches").render(i_Input.My_Result)).collapsibleset('refresh').trigger('create');
        }
        else {
            $("#sp_NoResultsBranches").html("<br><br>Sorry, no results found matching your criteria.");
        }
        jq_HideMobileLoaderAdv("pg_BranchesList");
    }
    catch (e) {
        alert("GetBranchesListCriteria_Completed: " + e.Message);
    }
}

/* --------------------------------------------------------------- */


