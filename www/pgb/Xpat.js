/* ---------------- */
var List_Gender = [];
MyApp_GVM.List_Gender = ko.mapping.fromJS(List_Gender);
var List_YearDOB = [];
MyApp_GVM.List_YearDOB = ko.mapping.fromJS(List_YearDOB);

var _Params_Get_XPATInfo, __Params_Get_XPATInfo; // KO
//var _Params_Get_MedicalClasses;

/* ---------------- */
var _Params_XPAT = new Object();
_Params_XPAT.GenderID = 0;
_Params_XPAT.YearDOBID = 0;
var Validator_Login;


__Params_Get_XPATInfo = ko.mapping.fromJS(_Params_XPAT);


$(document).on("pagebeforecreate", "#pg_XPAT", function (event, ui) {
//$('#pg_XPAT').bind("pagebeforecreate", function (event) {
    ////////debugger;


    Validator_Login = $("#Frm_XPAT").validate({
        rules: {
            ddl_Gender_Xpat: { required: true },
            ddl_YearDOB_Xpat: { required: true }
        }
    });


    $(this).on("click", "#btn_GetPrices_XPAT", function (event) {
    //$("#btn_GetPrices_XPAT").bind("click", function (event) {
        ////////debugger;

        //if ($.trim($("#ddl_Gender_Xpat").val()) == "") {
        //    js_MyCustomMessage("Please select a Genger.")
        //    $("#ddl_Gender_Xpat").focus();
        //    return false;
        //}


        //if ($.trim($("#ddl_YearDOB_Xpat").val()) == "") {
        //    js_MyCustomMessage("Please select Year of Birth.")
        //    $("#ddl_YearDOB_Xpat").focus();
        //    return false;
        //}


        if ($("#Frm_XPAT").valid()) {
            /* ---------------- */
            var func = function () {

                //jq_ShowMobileLoader();
                jq_ShowMobileLoaderAdv("pg_XPAT");
                GetData_XPAT();
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
        
        /* ---------------- */

        /* ---------------- */
        event.preventDefault();
        event.stopPropagation();
    });

});

function GetData_XPAT() {
    ////////debugger;
    try {
        /* ---------------- */
        $("#ul_Listing_TP").html("");
        /* ---------------- */

        /* ---------------- */
        //GatherUIData_Medical();
        /* ---------------- */

        /* ---------------- */
        _Params = ko.mapping.toJSON(__Params_Get_XPATInfo);
        //alert(_Params);
        _Service_Method = "GetXPLATPlansHUserCriteria";
        CallService('Service_Call_Completed_XPAT');
        /* ---------------- */
    }
    catch (e) {
        alert("GetData_VehiculesThirdParty(): " + e.Message);
    }
}
/* --------------------------------------------------------------- */

$(document).on("pagebeforeshow", "#pg_XPAT", function (event, ui) {
//$('#pg_XPAT').bind('pageshow', function (event, ui) {
    ////////debugger;
    /* -------------------------------------------------- */
    // if (!js_FncCommon()) { return; };
    /* -------------------------------------------------- */
    //alert('page bind');
    /* SEO */
    Validator_Login.resetForm();
    /* -------------------------------------------------- */
    $("meta[name=description]").attr("content", "Get Expat Quotation");
    $("title").html("Get Expat Quotation");
    /* -------------------------------------------------- */

    ko.applyBindings(__Params_Get_XPATInfo, document.getElementById('ct_XPAT'));

    /* ------Fill Xpat Gender Combo-------- */
    FillXpatGender();
    /* ---------------- */

    /* ------Fill Xpat DOB Combo-------- */
    FillXpatDOB();
    /* ------End-------- */

    /* Refresh Controls */
    $("#ddl_Gender_Xpat").selectmenu('refresh');
    /* ---------------- */

    /* Refresh Controls */
    $("#ddl_YearDOB_Xpat").selectmenu('refresh');
    /* ---------------- */

});

//function FillXpatDOB() {
//    ////////debugger;
//    try {
//        List_YearDOB = [];
//        /* ---------------- */
//        for (i = new Date().getFullYear() ; i > 1950; i--) {
//            var XpatDOB = new Object();
//            XpatDOB.YearDOBID = i;
//            List_YearDOB.push(XpatDOB);
//        }
//        //_List_InsuredNo = ko.mapping.fromJS(List_InsuredNo);
//        ko.mapping.fromJS(List_YearDOB, MyApp_GVM.List_YearDOB);
//        //__Params_Get_MedicalInfo = ko.mapping.fromJS(_Params_Medical);

//        //alert(ko.toJSON(_List_YearofMake));

//    }
//    catch (e) {
//        alert("FillXpatDOB() : " + e.Message);
//    }
//}


function FillXpatDOB() {
    ////////debugger;
    try {
        var d = new Date();
        var n = d.getFullYear();
        var limit = d.getFullYear() - 65;
        List_YearDOB = [];
        /* ---------------- */
        for (i = new Date().getFullYear()-18 ; i > limit; i--) {
            var XpatDOB = new Object();
            XpatDOB.DOB1 = i;
            XpatDOB.DOB1Desc = i.toString() + ' ' + '( ' + parseInt(n - i).toString() + ' years old)';
            List_YearDOB.push({
                DOB1: XpatDOB.DOB1,
                DOB1Desc: XpatDOB.DOB1Desc
            });
        }

        ko.mapping.fromJS(List_YearDOB, MyApp_GVM.List_YearDOB);


        //alert(ko.toJSON(_List_YearofMake));

    }
    catch (e) {
        alert("FillXpatDOB : " + e.Message);
    }
}

function FillXpatGender() {
    ////////debugger;
    try {
        List_Gender = [];
        /* ---------------- */
        var GenderOpt = new Object();
        GenderOpt.GenderDesc = "Male";
        GenderOpt.GenderID = "M";
        List_Gender.push({
            GenderID: GenderOpt.GenderID,
            GenderDesc: GenderOpt.GenderDesc
        });
        var GenderOpt = new Object();
        GenderOpt.GenderDesc = "Female";
        GenderOpt.GenderID = "F";
        List_Gender.push({
            GenderID: GenderOpt.GenderID,
            GenderDesc: GenderOpt.GenderDesc
        });

        //_List_CNSS = ko.mapping.fromJS(List_CNSS);
        ko.mapping.fromJS(List_Gender, MyApp_GVM.List_Gender);

        //__Params_Get_MedicalInfo = ko.mapping.fromJS(_Params_Medical);

        //alert(ko.toJSON(_List_YearofMake));

    }
    catch (e) {
        alert("FillXpatGender : " + e.Message);
    }
}

/* --------------------------------------------------------------- */
function Service_Call_Completed_XPAT(i_Response) {
    ////////debugger;
    try {
        switch (_Service_Method) {
            case "GetXPLATPlansHUserCriteria":
                GetXPLATPlansHUserCriteria_Completed(i_Response);
                break;
        }
    }
    catch (e) {
        alert("Service_Call_Completed:" + e.message);
    }
}

function GetXPLATPlansHUserCriteria_Completed(i_Input) {
    ////////debugger;
    try {

        $("#sp_NoResultsXPAT").html("");
        //jq_HideMobileLoader();
        jq_HideMobileLoaderAdv("pg_XPAT");
        if (i_Input.My_Result.length > 0) {
            $("#ul_Listing_XPAT").html($("#ListingTemplateXPAT").render(i_Input.My_Result)).listview('refresh').trigger('create');
        }
        else {
            $("#sp_NoResultsXPAT").html("<br><br>Sorry, no results found matching your criteria.");
        }

        // Fill Collection.
        // --------------------
        _Ac_List = [];
        //for (var i = 0; i < i_Input.My_Result.length; i++) {
        _Ac_List.push(i_Input.My_Result);
        // }
        // --------------------
    }
    catch (e) {
        alert("GetXPLATPlansHUserCriteria_Completed: " + e.Message);
    }
}

/* --------------------------------------------------------------- */


