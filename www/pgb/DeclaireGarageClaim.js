/* --------------------------------------------------------------- */
var Params_Get_DecalireGarageClaim_Data = new Object();
Params_Get_DecalireGarageClaim_Data.InsuredName = "";
Params_Get_DecalireGarageClaim_Data.BranchNo = "02";
Params_Get_DecalireGarageClaim_Data.PolicyType = "";
Params_Get_DecalireGarageClaim_Data.PolicyYear = 0;
Params_Get_DecalireGarageClaim_Data.PolicyNo = "";
Params_Get_DecalireGarageClaim_Data.PolicyEnd = "";
Params_Get_DecalireGarageClaim_Data.PlateSuffixDesc = "";
Params_Get_DecalireGarageClaim_Data.PLateNo = "";


var _Params_Get_DecalireGarageClaim_Data;

var Validator_Login;

var List_GaragePolicyType = [];
MyApp_GVM.List_GaragePolicyType = ko.mapping.fromJS(List_GaragePolicyType);

var List_GaragePlateSuffix = [];
MyApp_GVM.List_GaragePlateSuffix = ko.mapping.fromJS(List_GaragePlateSuffix);

var List_GaragePolicyYear = [];
MyApp_GVM.List_GaragePolicyYear = ko.mapping.fromJS(List_GaragePolicyYear);

var List_GaragePolicyEndoresement = [];
MyApp_GVM.List_GaragePolicyEndoresement = ko.mapping.fromJS(List_GaragePolicyEndoresement);
_Params_Get_DecalireGarageClaim_Data = ko.mapping.fromJS(Params_Get_DecalireGarageClaim_Data)

/*------------------------------------------------------------*/
$(document).on("pagebeforecreate", "#pg_DeclaireGarageClaim", function (event, ui) {
    /*------------------------------------------------------------*/
    ////////debugger;
    //alert('pagebeforecreate');
    //$("#txt_PolicyNo").keyup(function () {
    //    $("#txt_PolicyNo").val(this.value.match(/[0-9]*/));
    //});

    Validator_Login = $("#Frm_DeclaireGarageClaim").validate({
        rules: {
            txt_GaragePolicyNo: { required: false, digits: true, maxlength: 7 },
            txt_GaragePolicyHolder: { required: true, maxlength: 20, minlength: 4 },
            txt_GaragePlateNoCl: { required: false, maxlength: 7, digits: true },
        }
    });


    /*------------------------------------------------------------*/
    /*------------------------------------------------------------*/
    $(this).on("click", "#btn_Garage_Find", function (e) {
    //$("#btn_Find").on("click", function (event) {
        try {
            ////////debugger;

            // Reset Deals flag //

            if ($("#Frm_DeclaireGarageClaim").valid()) {
                /* ---------------- */
                if ($("#DDL_GaragePolicyType").val() == "VR") {
                    if ($.trim($("#txt_GaragePolicyNo").val()) == "" && $.trim($("#txt_GaragePlateNoCl").val()) == "") {
                        jq_DisplayMessage("MSG_GeneralError", "", "Please Insert Your Policy Number Or Your Plate Number!");
                        return false;
                    }

                }
                else {
                    if ($.trim($("#txt_GaragePolicyNo").val()) == "") {
                        jq_DisplayMessage("MSG_GeneralError", "", "Please Insert Your Policy Number!");
                        return false;
                    }
                }

                GetGaragePolicyDetails();

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
            alert("btn_Garage_Find: " + e.message);
        }
    });
    /*------------------------------------------------------------*/


    $('#GarageLogout').bind('tap', function () {

        try {

            localStorage.setItem("GarageInfo", null);
            jq_NavigateToPage('pg_BrokerLogin');
        }
        catch (e) {
            alert("GarageLogout: " + e.Message);
        }

    }); 

    $("#DDL_GaragePolicyType").bind( "change", function(event, ui) {
        if ($(this).val() == "VR") {
            //$("#add_fields_placeholderValue").show();

            //alert('VR');
            $("#ShowGaragePlateNo").show();

        }
        else {
            //alert('VB');
            $("#ShowGaragePlateNo").hide();
        }
    });

});
/*------------------------------------------------------------*/
/* --------------------------------------------------------------- */
$(document).on("pagebeforeshow", "#pg_DeclaireGarageClaim", function (event, ui) {
    //$('#pg_DeclaireClaim').bind('pageshow', function (event, ui) {
    //alert('pagebeforeshow');
    ////////debugger;
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

        //ko.applyBindings(_Params_Get_DecalireClaim_Data, document.getElementById('ct_DeclaireGarageClaim'));

        FillGaragePolicyType();

        //FillGaragePolicyYearCombo();

        //FillGaragePolicyEndorsement();

        /* ------Fill Plate Suffix-------- */
        FillGaragePlateSuffix();
        /* ---------------- */

        /* -------------------------------------------------- */
    }
    catch (e) {
        alert("pg_DeclaireGarageClaim: " + e.Message);
    }
    // ---------------   
});

function FillGaragePlateSuffix() {
    ////////debugger;
    try {
        List_PlateSuffix = [];
        /* ---------------- */
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

        ko.mapping.fromJS(List_PlateSuffix, MyApp_GVM.List_GaragePlateSuffix);

        //alert(ko.toJSON(_List_PlateSuffix));

    }
    catch (e) {
        alert("FillGaragePlateSuffix : " + e.Message);
    }
}

function FillGaragePolicyYearCombo() {
    ////////debugger;
    try {
        List_PolicyYear = [];
        var d = new Date();
        var n = d.getFullYear();
        /* ---------------- */
        for (i = new Date().getFullYear() ; i > 2000; i--) {
            var PolicyYear = new Object();
            PolicyYear.Year = i;
            List_PolicyYear.push(PolicyYear);
        }
        ko.mapping.fromJS(List_PolicyYear, MyApp_GVM.List_GaragePolicyYear);
    }
    catch (e) {
        alert("FillGaragePolicyYearCombo : " + e.Message);
    }
}
/* --------------------------------------------------------------- */
function FillGaragePolicyType() {
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

        //PolicyType = new Object();
        //PolicyType.PolicyType = "MC";
        //PolicyType.PolicyDesc = "MC (Marine Policy)";
        //List_PolicyType.push({
        //    PolicyType: PolicyType.PolicyType,
        //    PolicyDesc: PolicyType.PolicyDesc
        //});

        //PolicyType = new Object();
        //PolicyType.PolicyType = "NP";
        //PolicyType.PolicyDesc = "NP (Expatriate Policy)";
        //List_PolicyType.push({
        //    PolicyType: PolicyType.PolicyType,
        //    PolicyDesc: PolicyType.PolicyDesc
        //});

        //PolicyType = new Object();
        //PolicyType.PolicyType = "NX";
        //PolicyType.PolicyDesc = "NX";
        //List_PolicyType.push({
        //    PolicyType: PolicyType.PolicyType,
        //    PolicyDesc: PolicyType.PolicyDesc
        //});

        ko.mapping.fromJS(List_PolicyType, MyApp_GVM.List_GaragePolicyType);

    }
    catch (e) {
        alert("FillGaragePolicyType : " + e.Message);
    }
}
/* --------------------------------------------------------------- */
function FillGaragePolicyEndorsement() {
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
        ko.mapping.fromJS(List_PolicyEndoresement, MyApp_GVM.List_GaragePolicyEndoresement);
    }
    catch (e) {
        alert("FillGaragePolicyEndorsement : " + e.Message);
    }
}
/* --------------------------------------------------------------- */
function GetGaragePolicyDetails() {
    ////////debugger;
    try {
        /* ---------------- */
        //_Params = ko.mapping.toJSON(_Params_Get_DecalireClaim_Data);

        //sessionStorage["Param_DeclaireGarageClaim"] = _Params;
        sessionStorage.setItem("Param_DeclaireGarageClaim", ko.mapping.toJSON(_Params_Get_DecalireGarageClaim_Data));

        //jq_NavigateToPage('pg_PolicyGarageDetails', "PolicyGarageDetails.html",null);
        jq_NavigateToPage('pg_PolicyGarageDetails');

        //$.mobile.changePage('PolicyGarageDetails.html');
    }
    catch (e) {
        alert("GetGaragePolicyDetails(): " + e.Message);
    }
}