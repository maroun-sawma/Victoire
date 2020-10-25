/* ----------------*/
var  List_PlateSuffix = [];
MyApp_GVM.List_PlateSuffix = ko.mapping.fromJS(List_PlateSuffix);
MyApp_GVM.List_HorsePower = ko.mapping.fromJS([]);
MyApp_GVM.List_YearOfMake = ko.mapping.fromJS([]);
var Validator_Login;


var _Params_Get_MeChanicalInfo, __Params_Get_MeChanicalInfo; // KO
//var _Params_Get_MedicalClasses;

/* ---------------- */
var _Params_Mechanical = new Object();
_Params_Mechanical.PlateSuffixDesc = "";
_Params_Mechanical.HorsePowerID = "";
_Params_Mechanical.YearOfMakeID = "";
_Params_Mechanical.PLateNo = "";

__Params_Get_MeChanicalInfo = ko.mapping.fromJS(_Params_Mechanical);

//var _Params_MedicalToDB = new Object();

$(document).on("pagebeforecreate", "#pg_MechanicalCalculator", function (event, ui) {
//$('#pg_MechanicalCalculator').bind("pagebeforecreate", function (event) {
    ////////debugger;
    //alert('ehgdhegdhged');

    //$("#txt_PlateNo").keyup(function () {
    //    $("#txt_PlateNo").val(this.value.match(/[0-9]*/));
    //});

    //$("#txt_PlateNo").oninput(function () {
    //    if (this.value.length > 7)
    //        this.value = this.value.slice(0, 7);
    //});
    Validator_Login = $("#Frm_MechanicalCalculator").validate({
        rules: {
            txt_PlateNo: { required: true, maxlength: 7, digits: true },
            ddl_PlateSuffix: { required: true },
            ddl_HorsePower: { required: true },
            ddl_YearofMake: { required: true}
        }
    });


    $(this).on("click", "#btn_GetMechanical", function (event) {
    //$("#btn_GetMechanical").bind("click", function (event) {
        ////////debugger;

        //if ($.trim($("#txt_PlateNo").val()) == "") {
        //    js_MyCustomMessage("Please insert your plate number.")
        //    $("#txt_PlateNo").focus();
        //    return false;
        //}


        //if ($.trim($("#ddl_PlateSuffix").val()) == "") {
        //    js_MyCustomMessage("Please select your plate suffix.")
        //    $("#ddl_PlateSuffix").focus();
        //    return false;
        //}

        //if ($.trim($("#ddl_HorsePower").val()) == "") {
        //    js_MyCustomMessage("Please select a horse power.")
        //    $("#ddl_HorsePower").focus();
        //    return false;
        //}

        //if ($.trim($("#ddl_YearofMake").val()) == "") {
        //    js_MyCustomMessage("Please select a Year of make.")
        //    $("#ddl_YearofMake").focus();
        //    return false;
        //}


        if ($("#Frm_MechanicalCalculator").valid()) {
            /* ---------------- */

            var func = function () {

                //jq_ShowMobileLoader();
                jq_ShowMobileLoaderAdv("pg_MechanicalCalculator");
                GetData_Mechanical();
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


$(document).on("pagebeforeshow", "#pg_MechanicalCalculator", function (event, ui) {
//$('#pg_MechanicalCalculator').bind('pageshow', function (event, ui) {
    ////////debugger;
    /* -------------------------------------------------- */
    // if (!js_FncCommon()) { return; };
    /* -------------------------------------------------- */
    //alert('page bind');
    /* SEO */
    Validator_Login.resetForm();
    /* -------------------------------------------------- */
    $("meta[name=description]").attr("content", "Get Mechanical Calculator");
    $("title").html("Get Mechanical Calculator");
    /* -------------------------------------------------- */

    //ko.applyBindings(__Params_Get_MeChanicalInfo, document.getElementById('ct_MechanicalCalculator'));

    /* ------Fill Plate Suffix-------- */
    FillPlateSuffix();
    /* ---------------- */

    var func = function () {

        //jq_ShowMobileLoader();
        jq_ShowMobileLoaderAdv("pg_MechanicalCalculator");
        FillMechanicalCombos();
    };

    setTimeout(func, 300);

    /* ------Fill Horse Power-------- */

    /* ------End-------- */

    /* Refresh Controls */
    $("#ddl_PlateSuffix").selectmenu('refresh');
    /* ---------------- */

    /* Refresh Controls */
    $("#ddl_HorsePower").selectmenu('refresh');
    $("#ddl_YearofMake").selectmenu('refresh');
    /* ---------------- */

});

function FillPlateSuffix() {
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

        ko.mapping.fromJS(List_PlateSuffix, MyApp_GVM.List_PlateSuffix);

        //alert(ko.toJSON(_List_PlateSuffix));

    }
    catch (e) {
        alert("FillPlateSuffix : " + e.Message);
    }
}

function FillMechanicalCombos() {
    ////////debugger;
    try {
        /* ---------------- */
        //jq_ShowMobileLoader();
        jq_ShowMobileLoaderAdv("pg_MechanicalCalculator");
        _Service_Method = "GetMechanicalData";
        CallService('Service_Call_Completed_Mechanical');
        /* ---------------- */

    }
    catch (e) {
        alert("FillMechanicalCombos : " + e.Message);
    }
}

function GetData_Mechanical() {
    ////////debugger;
    try {
        /* ---------------- */
        $("#ul_Listing_Mechanical").html("");

        /* ---------------- */
        _Params = ko.mapping.toJSON(__Params_Get_MeChanicalInfo);
        _Service_Method = "GetMechanicalCalculator";
        CallService('Service_Call_Completed_Mechanical');
        /* ---------------- */

    }
    catch (e) {
        alert("FillMechanicalCombos : " + e.Message);
    }

}


/* --------------------------------------------------------------- */
function Service_Call_Completed_Mechanical(i_Response) {
    ////////debugger;
    try {
        switch (_Service_Method) {
            case "GetMechanicalData":
                GetMechanicalData_Completed(i_Response);
                break;
            case "GetMechanicalCalculator":
                GetMechanicalCalculator_Completed(i_Response);
                break;
        }
    }
    catch (e) {
        alert("Service_Call_Completed:" + e.message);
    }
}

function GetMechanicalCalculator_Completed(i_Input) {
    ////////debugger;
    try {
        //jq_HideMobileLoader();
        jq_HideMobileLoaderAdv("pg_MechanicalCalculator");
        $("#sp_NoResultsMechanical").html("");
        if (i_Input.My_Result.length > 0) {
            $("#ul_Listing_Mechanical").html($("#ListingTemplateMechanical").render(i_Input.My_Result[0])).listview('refresh').trigger('create');
        }
        else {
            $("#sp_NoResultsMechanical").html("<br><br>Sorry, no results found matching your criteria.");
        }

        // Fill Collection.
        // --------------------
        _Ac_List = [];
        //for (var i = 0; i < i_Input.My_Result.length; i++) {
        _Ac_List.push(i_Input.My_Result[0]);
        // }
        // --------------------
        $("#ct_MechanicalCalculator").animate({ scrollTop: $("#Mechanicalresult").offset().top }, 1000, function () {
            $("#Mechanicalresult").focus();
        });
    }
    catch (e) {
        alert("GetMechanicalCalculator_Completed: " + e.Message);
    }
}

function GetMechanicalData_Completed(i_Input) {
    ////////debugger;
    /* Get Mechanical Data */
    _Params_Get_MeChanicalInfo = i_Input.My_Result;
    /* ---------------- */
    //jq_HideMobileLoader();
    jq_HideMobileLoaderAdv("pg_MechanicalCalculator");
    try {

        ko.mapping.fromJS(i_Input.My_Result.MechanicalHorsePower, MyApp_GVM.List_HorsePower);
        ko.mapping.fromJS(i_Input.My_Result.MechanicalYearOfMake, MyApp_GVM.List_YearOfMake);
        jq_HideMobileLoaderAdv("pg_MechanicalCalculator");
        //alert(ko.toJSON(_List_BodyType));
    }
    catch (e) {
        alert("GetMechanicalData_Completed: " + e.Message);
    }
}
/* --------------------------------------------------------------- */

