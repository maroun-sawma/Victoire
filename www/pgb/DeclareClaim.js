/* --------------------------------------------------------------- */
var Params_Get_DecalireClaim_Data = new Object();
Params_Get_DecalireClaim_Data.InsuredName = "";
Params_Get_DecalireClaim_Data.BranchNo = "02";
Params_Get_DecalireClaim_Data.PolicyType = "";
Params_Get_DecalireClaim_Data.PolicyYear = 0;
Params_Get_DecalireClaim_Data.PolicyNo = "";
Params_Get_DecalireClaim_Data.PolicyEnd = 0;
Params_Get_DecalireClaim_Data.PlateSuffixDesc = "";
Params_Get_DecalireClaim_Data.PLateNo = "";


var _Params_Get_DecalireClaim_Data;

var Validator_Login;

var List_PolicyType = [];
MyApp_GVM.List_PolicyType = ko.mapping.fromJS(List_PolicyType);

var List_PlateSuffix = [];
MyApp_GVM.List_PlateSuffix = ko.mapping.fromJS(List_PlateSuffix);

var List_PolicyYear = [];
MyApp_GVM._List_PolicyYear = ko.mapping.fromJS(List_PolicyYear);

var List_PolicyEndoresement = [];
MyApp_GVM.List_PolicyEndoresement = ko.mapping.fromJS(List_PolicyEndoresement);
_Params_Get_DecalireClaim_Data = ko.mapping.fromJS(Params_Get_DecalireClaim_Data)

/*------------------------------------------------------------*/
$(document).on("pagebeforecreate", "#pg_DeclaireClaim", function (event, ui) {
    /*------------------------------------------------------------*/
    ////////debugger;
    //alert('pagebeforecreate');
    //$("#txt_PolicyNo").keyup(function () {
    //    $("#txt_PolicyNo").val(this.value.match(/[0-9]*/));
    //});

    Validator_Login = $("#Frm_DeclaireClaim").validate({
        rules: {
            txt_PolicyNo: { required: false, digits: true, maxlength: 7},
            txt_PolicyHolder: { required: true, maxlength: 20, minlength: 4 },
            txt_PlateNoCl: { required: false, maxlength: 7, digits: true },
        }
    });


    /*------------------------------------------------------------*/
    /*------------------------------------------------------------*/
    $(this).on("click", "#btn_Find", function (e) {
    //$("#btn_Find").on("click", function (event) {
        try {
            ////////debugger;

            // Reset Deals flag //

            if ($("#Frm_DeclaireClaim").valid()) {
                /* ---------------- */
                if ($("#DDL_PolicyType").val() == "VR") {
                    if ($.trim($("#txt_PolicyNo").val()) == "" && $.trim($("#txt_PlateNoCl").val()) == "") {
                        jq_DisplayMessage("MSG_GeneralError", "", "Please Insert Your Policy Number Or Your Plate Number!");
                        return false;
                    }

                }
                else {
                    if ($.trim($("#txt_PolicyNo").val()) == "") {
                        jq_DisplayMessage("MSG_GeneralError", "", "Please Insert Your Policy Number!");
                        return false;
                    }
                }

                GetPolicyDetails();

                /* ---------------- */
            }
            else {
                // Focus invalid input
                // -------------------
                Validator_Login.focusInvalid();
                // -------------------
            }

            e.preventDefault();
            e.stopPropagation();

            /* ---------------- */
            /* ---------------- */
        }
        catch (e) {
            alert("Btn_Find: " + e.message);
        }
    });
    /*------------------------------------------------------------*/

    $("#DDL_PolicyType").bind( "change", function(event, ui) {
        if ($(this).val() == "VR") {
            //$("#add_fields_placeholderValue").show();

            //alert('VR');
            $("#ShowPlateNo").show();

        }
        else {
            //alert('VB');
            $("#ShowPlateNo").hide();
        }
    });



});
/*------------------------------------------------------------*/
/* --------------------------------------------------------------- */
$(document).on("pagebeforeshow", "#pg_DeclaireClaim", function (event, ui) {   
    //$('#pg_DeclaireClaim').bind('pageshow', function (event, ui) {
    //alert('pagebeforeshow');
    //////debugger;
    try {
        /* -------------------------------------------------- */
        if (!js_FncCommon()) { return; };
        /* -------------------------------------------------- */
        Validator_Login.resetForm();
        /* SEO */
        /* -------------------------------------------------- */
        $("meta[name=description]").attr("content", 'Find your Policy Number and Make Your Claim Online');
        $("meta[name=keywords]").attr("content", 'Beirut Insurance, Lebanon Insurance, Compagnie dassurance');
        $("title").html('Victoire:::Policy Details');
        /* -------------------------------------------------- */

        //if (sessionStorage["Param_DeclaireClaim"] != undefined && sessionStorage["Param_DeclaireClaim"] != '')
        //    _Params_Get_DecalireClaim_Data = ko.mapping.fromJS($.parseJSON(sessionStorage["Param_DeclaireClaim"]));
        //else {
        //    _Params_Get_DecalireClaim_Data = ko.mapping.fromJS(Params_Get_DecalireClaim_Data);
        //}

        //ko.applyBindings(_Params_Get_DecalireClaim_Data, document.getElementById('ct_DeclaireClaim'));

        FillPolicyType();

        //FillPolicyYearCombo();

        //FillPolicyEndorsement();

        /* ------Fill Plate Suffix-------- */
        FillPlateSuffix();
        /* ---------------- */

        /* -------------------------------------------------- */
    }
    catch (e) {
        alert("pg_DeclaireClaim: " + e.Message);
    }
    // ---------------   
});

function FillPlateSuffix() {
    ////////debugger;
    try {
        List_PlateSuffix = [];
        /* ---------------- */
        var PlateSuff = new Object();
        PlateSuff.PlateSuffixDesc = "A";
        List_PlateSuffix.push({
            PlateSuffixDesc: PlateSuff.PlateSuffixDesc,
            PlateSuffixDesc: PlateSuff.PlateSuffixDesc
        });

        var PlateSuff = new Object();
        PlateSuff.PlateSuffixDesc = "B";
        List_PlateSuffix.push({
            PlateSuffixDesc: PlateSuff.PlateSuffixDesc,
            PlateSuffixDesc: PlateSuff.PlateSuffixDesc
        });

        var PlateSuff = new Object();
        PlateSuff.PlateSuffixDesc = "Z";
        List_PlateSuffix.push({
            PlateSuffixDesc: PlateSuff.PlateSuffixDesc,
            PlateSuffixDesc: PlateSuff.PlateSuffixDesc
        });

        var PlateSuff = new Object();
        PlateSuff.PlateSuffixDesc = "M";
        List_PlateSuffix.push({
            PlateSuffixDesc: PlateSuff.PlateSuffixDesc,
            PlateSuffixDesc: PlateSuff.PlateSuffixDesc
        });

        var PlateSuff = new Object();
        PlateSuff.PlateSuffixDesc = "D";
        List_PlateSuffix.push({
            PlateSuffixDesc: PlateSuff.PlateSuffixDesc,
            PlateSuffixDesc: PlateSuff.PlateSuffixDesc
        });

        var PlateSuff = new Object();
        PlateSuff.PlateSuffixDesc = "G";
        List_PlateSuffix.push({
            PlateSuffixDesc: PlateSuff.PlateSuffixDesc,
            PlateSuffixDesc: PlateSuff.PlateSuffixDesc
        });

        var PlateSuff = new Object();
        PlateSuff.PlateSuffixDesc = "C";
        List_PlateSuffix.push({
            PlateSuffixDesc: PlateSuff.PlateSuffixDesc,
            PlateSuffixDesc: PlateSuff.PlateSuffixDesc
        });

        var PlateSuff = new Object();
        PlateSuff.PlateSuffixDesc = "N";
        List_PlateSuffix.push({
            PlateSuffixDesc: PlateSuff.PlateSuffixDesc,
            PlateSuffixDesc: PlateSuff.PlateSuffixDesc
        });

        var PlateSuff = new Object();
        PlateSuff.PlateSuffixDesc = "S";
        List_PlateSuffix.push({
            PlateSuffixDesc: PlateSuff.PlateSuffixDesc,
            PlateSuffixDesc: PlateSuff.PlateSuffixDesc
        });

        var PlateSuff = new Object();
        PlateSuff.PlateSuffixDesc = "T";
        List_PlateSuffix.push({
            PlateSuffixDesc: PlateSuff.PlateSuffixDesc,
            PlateSuffixDesc: PlateSuff.PlateSuffixDesc
        });

        var PlateSuff = new Object();
        PlateSuff.PlateSuffixDesc = "J";
        List_PlateSuffix.push({
            PlateSuffixDesc: PlateSuff.PlateSuffixDesc,
            PlateSuffixDesc: PlateSuff.PlateSuffixDesc
        });

        var PlateSuff = new Object();
        PlateSuff.PlateSuffixDesc = "O";
        List_PlateSuffix.push({
            PlateSuffixDesc: PlateSuff.PlateSuffixDesc,
            PlateSuffixDesc: PlateSuff.PlateSuffixDesc
        });

        var PlateSuff = new Object();
        PlateSuff.PlateSuffixDesc = "P";
        List_PlateSuffix.push({
            PlateSuffixDesc: PlateSuff.PlateSuffixDesc,
            PlateSuffixDesc: PlateSuff.PlateSuffixDesc
        });

        var PlateSuff = new Object();
        PlateSuff.PlateSuffixDesc = "R";
        List_PlateSuffix.push({
            PlateSuffixDesc: PlateSuff.PlateSuffixDesc,
            PlateSuffixDesc: PlateSuff.PlateSuffixDesc
        });

        var PlateSuff = new Object();
        PlateSuff.PlateSuffixDesc = "";
        List_PlateSuffix.push({
            PlateSuffixDesc: PlateSuff.PlateSuffixDesc,
            PlateSuffixDesc: PlateSuff.PlateSuffixDesc
        });

        ko.mapping.fromJS(List_PlateSuffix, MyApp_GVM.List_PlateSuffix);

        //alert(ko.toJSON(_List_PlateSuffix));

    }
    catch (e) {
        alert("FillPlateSuffix : " + e.Message);
    }
}

//function FillPolicyYearCombo() {
//    ////////debugger;
//    try {
//        List_PolicyYear = [];
//        var d = new Date();
//        var n = d.getFullYear();
//        /* ---------------- */
//        for (i = new Date().getFullYear() ; i > 2000; i--) {
//            var PolicyYear = new Object();
//            PolicyYear.Year = i;
//            List_PolicyYear.push(PolicyYear);
//        }
//        ko.mapping.fromJS(List_PolicyYear, MyApp_GVM.List_PolicyYear);
//    }
//    catch (e) {
//        alert("FillPolicyYearCombo : " + e.Message);
//    }
//}
/* --------------------------------------------------------------- */
function FillPolicyType() {
    ////////debugger;
    try {
        List_PolicyType = [];
        /* ---------------- */
        var PolicyType = new Object();
        PolicyType.PolicyType = "VR";
        PolicyType.PolicyDesc = "VR (Motor Policy)";
        List_PolicyType.push({
            PolicyType: PolicyType.PolicyType,
            PolicyDesc: PolicyType.PolicyDesc
        });

        PolicyType = new Object();
        PolicyType.PolicyType = "MC";
        PolicyType.PolicyDesc = "MC (Marine Policy)";
        List_PolicyType.push({
            PolicyType: PolicyType.PolicyType,
            PolicyDesc: PolicyType.PolicyDesc
        });

        PolicyType = new Object();
        PolicyType.PolicyType = "NP";
        PolicyType.PolicyDesc = "NP (Expatriate Policy)";
        List_PolicyType.push({
            PolicyType: PolicyType.PolicyType,
            PolicyDesc: PolicyType.PolicyDesc
        });

        //PolicyType = new Object();
        //PolicyType.PolicyType = "NX";
        //PolicyType.PolicyDesc = "NX";
        //List_PolicyType.push({
        //    PolicyType: PolicyType.PolicyType,
        //    PolicyDesc: PolicyType.PolicyDesc
        //});

        ko.mapping.fromJS(List_PolicyType, MyApp_GVM.List_PolicyType);

    }
    catch (e) {
        alert("FillPolicyType : " + e.Message);
    }
}
/* --------------------------------------------------------------- */
function FillPolicyEndorsement() {
    ////////debugger;
    try {
        List_PolicyEndoresement = [];
        pad = '000'
        /* ---------------- */
        for (i = 0; i < 100; i++) {
            var End = new Object();
            End.EdorsNo = (pad + i).slice(-pad.length);
            List_PolicyEndoresement.push(End);
        }
        ko.mapping.fromJS(List_PolicyEndoresement, MyApp_GVM.List_PolicyEndoresement);
    }
    catch (e) {
        alert("FillYearOfMake : " + e.Message);
    }
}
/* --------------------------------------------------------------- */
function GetPolicyDetails() {
    ////////debugger;
    try {
        /* ---------------- */
        //_Params = ko.mapping.toJSON(_Params_Get_DecalireClaim_Data);

        //sessionStorage["Param_DeclaireClaim"] = _Params;

        //$.mobile.changePage('PolicyDetails.html', {
        //    reverse: true
        //});
        sessionStorage.setItem("Param_DeclaireClaim", ko.mapping.toJSON(_Params_Get_DecalireClaim_Data));
        jq_NavigateToPage('pg_PolicyDetails');

    }
    catch (e) {
        alert("GetPolicyDetails(): " + e.Message);
    }
}