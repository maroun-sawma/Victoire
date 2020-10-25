var List_AllRiskYearofMake = [];
MyApp_GVM.List_AllRiskYearofMake = ko.mapping.fromJS([]);

var __Params_Get_AllRisksData; // KO

var Validator_Login;

/* ---------------- */
MyApp_GVM.List_CarMark = ko.mapping.fromJS([]);

var _Params_AllRisks = new Object();
_Params_AllRisks.YearID = 0;
_Params_AllRisks.CarValue = "";
_Params_AllRisks.AllRiskFranchise =false;
_Params_AllRisks.pkCarsMakeID = 0;
//_Params_AllRisks.Franchise100_AllRisk = false;
//_Params_AllRisks.Franchise150_AllRisk = false;
_Params_AllRisks.HoldUp_AllRisk = true;
_Params_AllRisks.Replacement_AllRisk = false;
_Params_AllRisks.Reparation_AllRisk = false;
//_Params_AllRisks.ISAGENCYREPAIR = true;
__Params_Get_AllRisksData = ko.mapping.fromJS(_Params_AllRisks);


$(document).on("pagebeforecreate", "#pg_AllRisk", function (event, ui) {

//$('#pg_AllRisk').bind("pagebeforecreate", function (event) {
    ////////debugger;


    Validator_Login = $("#Frm_AllRisk").validate({
        rules: {
            ddl_YearOfMake_AllRisk: { required: true },
            ddl_CarMark_AllRisk: { required: true },
            txt_CarValue_AllRisk: { required: true, digits: true, maxlength: 7}
        }
    });

    

    $("#ddl_CarMark_AllRisk").bind("change", function (event, ui) {
        /* ---------------- */
        //////debugger;
        if ($.trim($(this).val()) != '' && $.trim($(this).val()) != 'null' && $.trim($(this).val()) != null && __Params_Get_AllRisksData.YearID() != null && __Params_Get_AllRisksData.YearID() != undefined) {
            //alert($.trim($(this).val()));
            var SelectedVal = $.trim($(this).val());
            var match2 = ko.utils.arrayFirst(MyApp_GVM.List_CarMark(), function (item2) {
                ////////debugger;
                if (item2.pkCarsMakeID().toString() == SelectedVal) {
                    //alert(item.PLANSH_ID().toString());
                    return true;
                }
            });

            if (match2) {
                //////debugger;
                //Check if this car has agency repair 
                if (match2.AgencyRepair() == true && __Params_Get_AllRisksData.YearID() >= new Date().getFullYear() - 3) {
                    __Params_Get_AllRisksData.Reparation_AllRisk(true);
                    $('#chk_Reparation_AllRisk').prop('disabled', false).checkboxradio('refresh');

                }
                else {
                    __Params_Get_AllRisksData.Reparation_AllRisk(false);
                    $('#chk_Reparation_AllRisk').prop('disabled', true).checkboxradio('refresh');

                }
            }
        }
    });

    $("#ddl_YearOfMake_AllRisk").bind("change", function (event, ui) {
        /* ---------------- */
        //////debugger;
        if ($.trim($(this).val()) != '' && $.trim($(this).val()) != 'null' && $.trim($(this).val()) != null && __Params_Get_AllRisksData.pkCarsMakeID() != null &&  __Params_Get_AllRisksData.pkCarsMakeID() != undefined ) {
            //alert($.trim($(this).val()));
            var SelectedVal = $.trim($(this).val());
            var match2 = ko.utils.arrayFirst(MyApp_GVM.List_CarMark(), function (item2) {
                ////////debugger;
                if (item2.pkCarsMakeID().toString() == __Params_Get_AllRisksData.pkCarsMakeID().toString()) {
                    //alert(item.PLANSH_ID().toString());
                    return true;
                }
            });

            if (match2) {
                //////debugger;
                //Check if this car has agency repair 
                if (match2.AgencyRepair() == true && parseInt(SelectedVal.toString()) >= new Date().getFullYear() - 3) {
                    __Params_Get_AllRisksData.Reparation_AllRisk(true);
                    $('#chk_Reparation_AllRisk').prop('disabled', false).checkboxradio('refresh');

                }
                else {
                    __Params_Get_AllRisksData.Reparation_AllRisk(false);
                    $('#chk_Reparation_AllRisk').prop('disabled', true).checkboxradio('refresh');

                }
            }
        }
    });


    $("#Frm_AllRisk").submit(function () {
        //alert('form');
        $("#btn_GetPrices_AllRisks").focus();
        return false;
    });


    $(this).on("click", "#btn_GetPrices_AllRisks", function (event) {
    //$("#btn_GetPrices_AllRisks").bind("click", function (event) {
        ////////debugger;

        if ($("#Frm_AllRisk").valid()) {

            var func = function (){
   
                //jq_ShowMobileLoader();
                jq_ShowMobileLoaderAdv("pg_AllRisk");
                GetData_AllRisks();
            };

            setTimeout(func,300);
            /* ---------------- */

            /* ---------------- */
        }
        else {
            // Focus invalid input
            // -------------------
            Validator_Login.focusInvalid();
            // -------------------
        }

        event.preventDefault();
        event.stopPropagation();
    });


});
$(document).on("pagebeforeshow", "#pg_AllRisk", function (event, ui) {   
    //////debugger;
    /* -------------------------------------------------- */
    // if (!js_FncCommon()) { return; };
    /* -------------------------------------------------- */
    //alert('page bind');
    /* SEO */
    Validator_Login.resetForm();
    /* -------------------------------------------------- */
    $("meta[name=description]").attr("content", "Get All Risk Quotation");
    $("title").html("Get All Risk Quotation");
    /* -------------------------------------------------- */

    //ko.applyBindings(__Params_Get_AllRisksData, document.getElementById('ct_AllRisk'));
    $('#chk_WithoutFranchise_AllRisk').prop('checked', false).trigger("change")
    /* ------Fill Year of Make Combo-------- */

    /* ---------------- */
     FillCarMarks();  
    /* ---------------- */

     FillALLRiskYearOfMake();

    /* Refresh Controls */
    $("#ddl_YearOfMake_AllRisk").selectmenu('refresh');
    /* ---------------- */

    $("#ddl_CarMark_AllRisk").selectmenu('refresh');

    $('#chk_Reparation_AllRisk').prop('disabled', true).checkboxradio('refresh');
});

function FillCarMarks() {
    ////////debugger;
    try {
        /* ---------------- */
        _Service_Method = "RetrieveAllCarMarks";
        CallService('Service_Call_Completed_AllRisk');
        /* ---------------- */

    }
    catch (e) {
        alert("FillCarMarks : " + e.Message);
    }
}

function FillALLRiskYearOfMake() {
    ////////debugger;
    try {
        List_AllRiskYearofMake = [];
        /* ---------------- */
        for (i = new Date().getFullYear() ; i > new Date().getFullYear() - 11; i--) {
            var YearofMake = new Object();
            YearofMake.YearID = i;
            List_AllRiskYearofMake.push(YearofMake);
        }

        ko.mapping.fromJS(List_AllRiskYearofMake, MyApp_GVM.List_AllRiskYearofMake);

        //alert(ko.toJSON(_List_YearofMake));

    }
    catch (e) {
        alert("FillYearOfMaketoAllRisk : " + e.Message);
    }
}

/* GetData_VehiculesThirdParty() */
/* --------------------------------------------------------------- */
function GetData_AllRisks() {
    ////////debugger;
    try {
        /* ---------------- */
        $("#ul_Listing_AllRisk").html("");
        /* ---------------- */


        /* ---------------- */
        _Params = ko.mapping.toJSON(__Params_Get_AllRisksData);
          
        //alert(_Params);

        _Service_Method = "GetPlansHToAllRisk";
        CallService('Service_Call_Completed_AllRisk');
        /* ---------------- */
    }
    catch (e) {
        alert("GetData_AllRisks(): " + e.Message);
    }
}
/* --------------------------------------------------------------- */

/* --------------------------------------------------------------- */
function Service_Call_Completed_AllRisk(i_Response) {
    ////////debugger;
    try {
        switch (_Service_Method) {
            case "GetPlansHToAllRisk":
                GetPlansHToAllRisk_Completed(i_Response);
                break;
            case "RetrieveAllCarMarks":
                RetrieveAllCarMarks_Completed(i_Response);
                break;     
        }
    }
    catch (e) {
        alert("Service_Call_Completed:" + e.message);
    }
}

function RetrieveAllCarMarks_Completed(i_Input) {
    ////////debugger;

    /* ---------------- */
    try {
        //jq_HideMobileLoader();
        jq_HideMobileLoaderAdv("pg_AllRisk");
        ko.mapping.fromJS(i_Input.My_Result, MyApp_GVM.List_CarMark);

        //alert(ko.toJSON(_List_BodyType));

    }
    catch (e) {
        alert("RetrieveAllCarMarks_Completed: " + e.Message);
    }
}
/* --------------------------------------------------------------- */

function GetPlansHToAllRisk_Completed(i_Input) {
    //////debugger;
    try {
        //jq_HideMobileLoader();
        jq_HideMobileLoaderAdv("pg_AllRisk");
        $("#sp_NoResultsAllRisk").html("");
        if (i_Input.My_Result.length > 0 && i_Input.My_Result[0].AllRiskPremium.replace(" $", "") != "") {

            $("#ul_Listing_AllRisk").html($("#ListingTemplateAllRisk").render(i_Input.My_Result[0])).listview('refresh').trigger('create');
        }
        else {
            $("#sp_NoResultsAllRisk").html("<br><br>Sorry, no results found matching your criteria. Please refer to the company.");
        }

        // Fill Collection.
        // --------------------
        _Ac_List = [];
        for (var i = 0; i < i_Input.My_Result.length; i++) { 
            _Ac_List.push(i_Input.My_Result[i]);
        }
        // --------------------
        $("#ct_AllRisk").animate({ scrollTop: $("#AllRiskResult").offset().top }, 1000, function () {
            $("#AllRiskResult").focus();
        });
    }
    catch (e) {
        alert("GetPlansHToAllRisk_Completed: " + e.Message);
    }
}

/* --------------------------------------------------------------- */