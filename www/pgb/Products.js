/* ---------------- */
var __Params_Get_ProductsDetails; // KO
/* ---------------- */
var _Params_Product = new Object();
_Params_Product.GenderID = 0;

__Params_Get_ProductsDetails = ko.mapping.fromJS(_Params_Product);



$(document).on("pagebeforecreate", "#pg_Products", function (event, ui) {
//$('#pg_Products').bind("pagebeforecreate", function (event) {


});

$(document).on("pagebeforeshow", "#pg_Products", function (event, ui) {
//$('#pg_Products').bind('pageshow', function (event, ui) {
    ////////debugger;
    /* -------------------------------------------------- */
    // if (!js_FncCommon()) { return; };
    /* -------------------------------------------------- */
    //alert('page bind');
    /* SEO */
    /* -------------------------------------------------- */
    $("meta[name=description]").attr("content", "List Of Products");
    $("title").html("List Of Products");
    /* -------------------------------------------------- */
    var func = function (){
   
        //jq_ShowMobileLoader();
        jq_ShowMobileLoaderAdv("pg_Products");
        GetData_Produts();    
    };

    setTimeout(func,300);
    /* ---------------- */
});

//$(document).on("pagecontainershow", function (e, ui) {
//    //////debugger;
//    if (typeof ui.prevPage[0] !== "undefined" && ui.prevPage[0].id == "pg_GetFireQuotation") {
//        $.mobile.navigate.history.stack.splice(0, 1);
//        $(ui.prevPage).remove();
//    }
//});



/* --------------------------------------------------------------- */
function GetData_Produts(){
    ////////debugger;
    try {
        /* ---------------- */
        $("#ul_Listing_Products").html("");
        /* ---------------- */
        _Service_Method = "GetProdutsListCriteria";
        CallService('Service_Call_Completed_Product');
        /* ---------------- */
    }
    catch (e) {
        alert("GetData_Produts: " + e.Message);
    }
}
/* --------------------------------------------------------------- */
/* --------------------------------------------------------------- */
function Service_Call_Completed_Product(i_Response) {
    ////////debugger;
    try {
        switch (_Service_Method) {
            case "GetProdutsListCriteria":
                GetProdutsListCriteria_Completed(i_Response);
                break;
        }
    }
    catch (e) {
        alert("Service_Call_Completed_Product:" + e.message);
    }
}

function GetProdutsListCriteria_Completed(i_Input) {
    ////////debugger;
    try {

        $("#sp_NoResultsProducts").html("");
        //jq_HideMobileLoader();
        jq_HideMobileLoaderAdv("pg_Products");
        if (i_Input.My_Result.length > 0) {

            $("#ul_Listing_Products").html($("#ListingTemplateProducts").render(i_Input.My_Result)).collapsibleset('refresh').trigger('create');

            ////////debugger;
            ////var $foo = $('#pg_GetFireQuotation');
            ////if (jQuery.contains(document, $foo[0])) {
            ////    //Element is detached
            ////    $('#pg_GetFireQuotation').remove();
            ////}

        }
        else {
            $("#sp_NoResultsProducts").html("<br><br>Sorry, no results found matching your criteria.");
        }
    }
    catch (e) {
        alert("GetProdutsListCriteria_Completed: " + e.Message);
    }
}

/* --------------------------------------------------------------- */


