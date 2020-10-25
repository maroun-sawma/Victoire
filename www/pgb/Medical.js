/* ---------------- */
var List_YearofBirth = [];
var List_YearofBirth2 = [];
var List_YearofBirth3 = [];
var List_YearofBirth4 = [];
var List_YearofBirth5 = [];
var List_YearofBirth6 = [];
var List_YearofBirth7 = [];
var Validator_Login;
MyApp_GVM.List_YearofBirth = ko.mapping.fromJS(List_YearofBirth);
MyApp_GVM.List_YearofBirth2 = ko.mapping.fromJS(List_YearofBirth2);
MyApp_GVM.List_YearofBirth3 = ko.mapping.fromJS(List_YearofBirth3);
MyApp_GVM.List_YearofBirth4 = ko.mapping.fromJS(List_YearofBirth4);
MyApp_GVM.List_YearofBirth5 = ko.mapping.fromJS(List_YearofBirth5);
MyApp_GVM.List_YearofBirth6 = ko.mapping.fromJS(List_YearofBirth6);
MyApp_GVM.List_YearofBirth7 = ko.mapping.fromJS(List_YearofBirth7);
MyApp_GVM.List_ProgrammeCode = ko.mapping.fromJS([]);
MyApp_GVM.List_Class = ko.mapping.fromJS([]);
var List_CNSS = [];
MyApp_GVM.List_CNSS = ko.mapping.fromJS(List_CNSS);
var List_InsuredNo = [];
MyApp_GVM.List_InsuredNo = ko.mapping.fromJS(List_InsuredNo);
var List_InsuredNumberOfTxt = [];

var _Params_Get_MedicalInfo, __Params_Get_MedicalInfo; // KO 
//var _Params_Get_MedicalClasses;
var title = "";
var List_ProgrammeCode_Filtered = [];

/* ---------------- */
var _Params_Medical = new Object();
_Params_Medical.OFFER_MEDICALPROGCODE_ID = 0;
_Params_Medical.OFFER_MEDICALPROGCLASS_ID = 0;
_Params_Medical.ProgClassDesc = "";
_Params_Medical.CNSSCode = "";
_Params_Medical.InsNo = "";
_Params_Medical.DOB1 = "";
_Params_Medical.DOB2 = "";
_Params_Medical.DOB3 = "";
_Params_Medical.DOB4 = "";
_Params_Medical.DOB5 = "";
_Params_Medical.DOB6 = "";
_Params_Medical.DOB7 = "";
_Params_Medical.InsuredName = "";
_Params_Medical.InsuredMobile = "";
_Params_Medical.InsuredEmail = "";
_Params_Medical.IsVisible = false;
__Params_Get_MedicalInfo = ko.mapping.fromJS(_Params_Medical);

///////////////////////////////////////////////////////////////////////////
/* Members */
/* --------------------------------------------------------------- */
var OFFER_MEDICALOFFER = new Object();
OFFER_MEDICALOFFER.OFFER_MEDICALOFFER_ID = 0;
OFFER_MEDICALOFFER.OfferCode = "NM";
OFFER_MEDICALOFFER.OfferSerial = 0;
OFFER_MEDICALOFFER.ProposerName = "";
OFFER_MEDICALOFFER.OFFER_MEDICALPROGCLASS_ID = 0;
OFFER_MEDICALOFFER.OFFER_MEDICALPROGCODE_ID = 0;
OFFER_MEDICALOFFER.Class = "";
OFFER_MEDICALOFFER.Age = 0;
OFFER_MEDICALOFFER.NbPersons = 0;
OFFER_MEDICALOFFER.Cnss = "";
OFFER_MEDICALOFFER.BrokerCode = 0;
OFFER_MEDICALOFFER.AgentCode = 0;
OFFER_MEDICALOFFER.OfferDate = convertDate(new Date());
OFFER_MEDICALOFFER.Address = "";
OFFER_MEDICALOFFER.Phone = "";
OFFER_MEDICALOFFER.Email = "";
OFFER_MEDICALOFFER.EmptyRow = false;
OFFER_MEDICALOFFER.Premium = 0;
OFFER_MEDICALOFFER.Deduct300 = 0;
OFFER_MEDICALOFFER.Deduct500 = 0;
OFFER_MEDICALOFFER.Deduct1000 = 0;
OFFER_MEDICALOFFER.Ambulatory = 0;
OFFER_MEDICALOFFER.Medecine = 0;
OFFER_MEDICALOFFER.DoctorVisit = 0;
OFFER_MEDICALOFFER.AmbulatoryLimited = 0;
OFFER_MEDICALOFFER.ENTRY_USER_ID =0;
OFFER_MEDICALOFFER.DisableSaveButton = false;
OFFER_MEDICALOFFER.EnablePrintButton = false;
OFFER_MEDICALOFFER.ll_ShowPremiumSection = false;
OFFER_MEDICALOFFER.language = "EN";
OFFER_MEDICALOFFER.LanguageVariant = "";
OFFER_MEDICALOFFER.PrintType = "";
OFFER_MEDICALOFFER.MEMBER_AGE = 0;
OFFER_MEDICALOFFER.SUBUSERS_ID = 0;
OFFER_MEDICALOFFER.LoggedInEmail = "";
OFFER_MEDICALOFFER.My_Members = [];
OFFER_MEDICALOFFER.ll_ShowMedicalDetails = false;


OFFER_MEDICALOFFER.InAmb = 0;
OFFER_MEDICALOFFER.InAmbPresc = 0;
OFFER_MEDICALOFFER.InAmPrescVisit = 0;
OFFER_MEDICALOFFER.InAmbLim = 0;
OFFER_MEDICALOFFER.InAmbPrescLim = 0;
OFFER_MEDICALOFFER.InAmPrescVisitLim = 0;

OFFER_MEDICALOFFER.LD_TotalIn = 0;
OFFER_MEDICALOFFER.LD_TotalAmb = 0;
OFFER_MEDICALOFFER.LD_TotalMedicine = 0;
OFFER_MEDICALOFFER.LD_TotalVisit = 0;
OFFER_MEDICALOFFER.LD_TotalAmbLimited = 0;

var _OFFER_MEDICALOFFER = ko.mapping.fromJS(OFFER_MEDICALOFFER);
///////////////////////////////////////////////////////////////////////////


/*---------------------------------------------------------------*/
// ----------------------------------
var Member_family = function (_OFFER_MEDICALOFFER_DETAILS_ID, _MEMBER_NAME, _MEMBER_BIRTHDATE, _MEMBER_GENDER, _MEMBER_RELATION, _OFFER_MEDICALOFFER_ID,
                _OFFER_MEDICALPROGCODE_ID, _Class, _NbPersons, _Cnss, _Premium, _Deduct300, _Deduct500, _Deduct1000, _Ambulatory, _Medecine, _DoctorVisit, _AmbulatoryLimited) {
    //alert('test member family');
    var self = this;
    self.OFFER_MEDICALOFFER_DETAILS_ID = _OFFER_MEDICALOFFER_DETAILS_ID;
    self.MEMBER_NAME = ko.observable(_MEMBER_NAME).extend({ required: true });
    self.MEMBER_BIRTHDATE = ko.observable(_MEMBER_BIRTHDATE).extend({ required: true });
    self.MEMBER_GENDER = ko.observable(_MEMBER_GENDER).extend({ required: true });
    self.MEMBER_RELATION = ko.observable(_MEMBER_RELATION).extend({ required: true });
    self.OFFER_MEDICALOFFER_ID = ko.observable(_OFFER_MEDICALOFFER_ID).extend({ required: false });
    self.OFFER_MEDICALPROGCODE_ID = ko.observable(_OFFER_MEDICALPROGCODE_ID).extend({ required: false });
    self.Class = ko.observable(_Class).extend({ required: false });
    self.NbPersons = ko.observable(_NbPersons).extend({ required: false });
    self.Cnss = ko.observable(_Cnss).extend({ required: false });
    self.Premium = ko.observable(_Premium).extend({ required: false });
    self.Deduct300 = ko.observable(_Deduct300).extend({ required: false });
    self.Deduct500 = ko.observable(_Deduct500).extend({ required: false });
    self.Deduct1000 = ko.observable(_Deduct1000).extend({ required: false });
    self.Ambulatory = ko.observable(_Ambulatory).extend({ required: false });
    self.Medecine = ko.observable(_Medecine).extend({ required: false });
    self.DoctorVisit = ko.observable(_DoctorVisit).extend({ required: false });
    self.AmbulatoryLimited = ko.observable(_AmbulatoryLimited).extend({ required: false });

    //self._Errors = ko.validation.group(self); // USED FOR KO VALIDATION //
};
/*---------------------------------------------------------------*/



$(document).on("pagebeforecreate", "#pg_Medical", function (event, ui) {
//$('#pg_Medical').bind("pagebeforecreate", function (event) {
    //////debugger;


    Validator_Login = $("#Frm_Medical").validate({
        rules: {
            ddl_ProgrammeCode: { required: true },
            ddl_MedicalClass: { required: true },
            ddl_MedicalInsuredNo: { required: true }
        }
    });



    /* ---------------- */
    $("#ddl_ProgrammeCode").bind("change", function (event, ui) {
        /* ---------------- */
        debugger;
        /* ---------------- */
        if ($.trim($(this).val()) != '' && $.trim($(this).val()) != 'null' && $.trim($(this).val()) != null) {
            //var func = function () {
            //MyApp_GVM.List_Class = ko.mapping.fromJS([]);
                //jq_ShowMobileLoader();
                GetMedicalClasses($(this).val());

        }
        /* ---------------- */
    });

    $("#ddl_MedicalClass").bind("change", function (event, ui) {
        /* ---------------- */
        //////debugger;
        if ($.trim($(this).val()) != '' && $.trim($(this).val()) != 'null' && $.trim($(this).val()) != null) {
            //alert($.trim($(this).val()));
            var SelectedVal = $.trim($(this).val());
            var match2 = ko.utils.arrayFirst(MyApp_GVM.List_Class(), function (item2) {
                ////////debugger;
                if (item2.OFFER_MEDICALPROGCLASS_ID().toString() == SelectedVal) {
                    //alert(item.PLANSH_ID().toString());
                    return true;
                }
            });

            if (match2) {
                ////////debugger;
                //ProgCode And Class Code
                __Params_Get_MedicalInfo.OFFER_MEDICALPROGCODE_ID(match2.OFFER_MEDICALPROGCODE_ID());
                __Params_Get_MedicalInfo.ProgClassDesc(match2.ProgClassDesc())
            }
        }
    });

    /* ---------------- */

    $("#ddl_MedicalInsuredNo").bind("change", function (event, ui) {
        /* ---------------- */
       // //////debugger;
        var HTMLInsuredNo = '';
       // $("#MedicalListView").empty();
        ////////debugger;
        /* ---------------- */
        if ($(this).val() != '' && $(this).val() !== "undefined" && $(this).val() !== null) {
            for (i = 1; i <= 7 ; i++) {
                $("#li_MedicalInsured_" + i).hide();
            }
            //Empty invisible texboxes
            var InsuredNum = $("select.InsuredNumber")
            for (i = 1; i <= InsuredNum.length; i++) {
                if (!$("#txt_MedicalInsured_" + i).is(':visible')) {
                    $("#txt_MedicalInsured_" + i).val("").selectmenu('refresh');
                }
            }

            for (i = 1; i <= $(this).val() ; i++) {
                //HTMLInsuredNo += '<li data-role="fieldcontain"><label for="txt_Insured_' + i + '" style="font-family:Verdana; font-weight:bold; color:#487ead">Age ' + i + ' *</label>';
                // HTMLInsuredNo += '<input type="number" data-mini="true" class="InsuredNumber" id="txt_Insured_' + i + '" name="txt_Insured_' + i + '" data-bind="value: DOB' + i + '" /></li>';
                //$("#li_Insured_" + i).addClass('DOBVisible');
                //$("#li_Insured_" + i).css("display", "inline");
                $("#li_MedicalInsured_" + i).show("slow");
            }
            //for (i = $(this).val() +1; i <=5 ; i++) {
            //   $("#li_Insured_" + i).hide();
            // }
            //alert(HTMLInsuredNo);

        }
        else {

            for (i = 1; i <= 7 ; i++) {
                $("#li_MedicalInsured_" + i).hide();
            }
            //Empty invisible texboxes
            var InsuredNum = $("select.MedicalInsuredNumber")
            for (i = 1; i <= InsuredNum.length; i++) {
                if (!$("#txt_MedicalInsured_" + i).is(':visible')) {
                    $("#txt_MedicalInsured_" + i).val("").selectmenu('refresh');
                }
            }

        }
        /* ---------------- */
    });
    /* ---------------- */

    $(this).on("click", "#btn_GetPrices_VictMedical", function (event) {
    //$("#btn_GetPrices_Medical").bind("click", function (event) {
        ////////debugger;
        var Insured = $("select.MedicalInsuredNumber")
        var d = new Date();
        var n = d.getFullYear();
        var InsuredValidationGreaterThan18 = 0;
        var InsuredValidationLessThan18 = 0;
           
            for (i = 1; i <= Insured.length; i++) {
                if ($("#txt_MedicalInsured_" + i).is(':visible'))
                {
                    if ($.trim($("#txt_MedicalInsured_" + i).val()) == "")
                    {
                        jq_DisplayMessage("MSG_GeneralError", "", "Please Fill All Insured Age.!");
                        $("#txt_MedicalInsured_" + i).focus();
                        return false;
                    }

                    if (parseInt($.trim($("#txt_MedicalInsured_" + i).val())) > parseInt(d.getFullYear() - 18)) {

                        //InsuredValidation = true;

                        InsuredValidationLessThan18 = parseInt(InsuredValidationLessThan18) + 1;

                    }
                    else {
                        InsuredValidationGreaterThan18 = parseInt(InsuredValidationGreaterThan18) + 1;
                        //InsuredValidation = false;
                    }


                 }
            }

            if (parseInt(InsuredValidationLessThan18) > 0 && parseInt(InsuredValidationGreaterThan18) <= 0) {
                        jq_DisplayMessage("MSG_GeneralError", "", "All Insured is under 18!");
                
                return false;
            }

            if ($("#Frm_Medical").valid()) {
                /* ---------------- */

                var func = function () {

                    jq_ShowMobileLoaderAdv("pg_Medical");
                    GetData_Medical();
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


    $(this).on("click", "#btn_SendPrices_VictMedical", function (event) {
        ////////debugger;

        var Insured = $("input.MedicalInsuredNumber")

        for (i = 1; i <= Insured.length; i++) {
            if ($("#txt_MedicalInsured_" + i).is(':visible')) {

            }
        }

        if ($.trim($("#txt_MDQ_Name").val()) == "" || $.trim($("#txt_MDQ_Email").val()) == "" || $.trim($("#txt_MDQ_Mobile").val()) == "") {
            jq_DisplayMessage("MSG_GeneralError", "", "Please Fill All Your Info.!");
            $("#txt_MDQ_Name").focus();
            return false;
        }

        if ($("#Frm_Medical").valid()) {

            var func = function () {

                //jq_ShowMobileLoader();
                jq_ShowMobileLoaderAdv("pg_Medical");
                Edit_Medical();
            };

            setTimeout(func, 300);
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


    $(this).on("click", "#btn_SharePrices_VictMedical", function (event) {
        ////////debugger;

        var Insured = $("input.MedicalInsuredNumber")

        for (i = 1; i <= Insured.length; i++) {
            if ($("#txt_MedicalInsured_" + i).is(':visible')) {

            }
        }

        if ($.trim($("#txt_MDQ_Name").val()) == "" || $.trim($("#txt_MDQ_Email").val()) == "" || $.trim($("#txt_MDQ_Mobile").val()) == "") {
            jq_DisplayMessage("MSG_GeneralError", "", "Please Fill All Your Info.!");
            $("#txt_MDQ_Name").focus();
            return false;
        }

        if ($("#Frm_Medical").valid()) {

            var func = function () {

                //jq_ShowMobileLoader();
                jq_ShowMobileLoaderAdv("pg_Medical");
                Edit_MedicalSharing();
            };

            setTimeout(func, 300);
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


/* --------------------------------------------------------------- */
function Edit_MedicalSharing() {
    try {
        //////debugger;
        var d = new Date();
        var n = d.getFullYear();

        _OFFER_MEDICALOFFER.ProposerName(__Params_Get_MedicalInfo.InsuredName());
        _OFFER_MEDICALOFFER.OFFER_MEDICALPROGCLASS_ID(__Params_Get_MedicalInfo.OFFER_MEDICALPROGCLASS_ID());
        _OFFER_MEDICALOFFER.OFFER_MEDICALPROGCODE_ID(__Params_Get_MedicalInfo.OFFER_MEDICALPROGCODE_ID());
        _OFFER_MEDICALOFFER.Class(__Params_Get_MedicalInfo.ProgClassDesc());
        _OFFER_MEDICALOFFER.NbPersons(__Params_Get_MedicalInfo.InsNo());
        _OFFER_MEDICALOFFER.Cnss(__Params_Get_MedicalInfo.CNSSCode());
        _OFFER_MEDICALOFFER.OfferDate = jq_parseDate2(convertDate(new Date()));;
        _OFFER_MEDICALOFFER.Phone(__Params_Get_MedicalInfo.InsuredMobile());
        _OFFER_MEDICALOFFER.Email(__Params_Get_MedicalInfo.InsuredEmail());
        _OFFER_MEDICALOFFER.My_Members = [];

        for (i = 1; i <= parseInt(__Params_Get_MedicalInfo.InsNo() === undefined ? "0" : __Params_Get_MedicalInfo.InsNo().toString()) ; i++) {

            ////////debugger;
            _OFFER_MEDICALOFFER.My_Members.unshift(new Member_family(-1, 'none', $("#txt_Insured_" + i).val(), 'M', 'P', 0, __Params_Get_MedicalInfo.OFFER_MEDICALPROGCODE_ID(), __Params_Get_MedicalInfo.ProgClassDesc(),
                __Params_Get_MedicalInfo.InsNo(), __Params_Get_MedicalInfo.CNSSCode(), 0, 0, 0, 0, 0, 0, 0, 0));
        }

        _Params = ko.mapping.toJSON(_OFFER_MEDICALOFFER);

        _Service_Method = "Edit_MedicalSharing";

        CallService('Service_Call_Completed_Medical');
    }
    catch (e) {
        alert("Edit_MedicalSharing: " + e.Message);
    }
}

/* --------------------------------------------------------------- */
function Edit_Medical() {
    try {
        //////debugger;
        var d = new Date();
        var n = d.getFullYear();

        _OFFER_MEDICALOFFER.ProposerName(__Params_Get_MedicalInfo.InsuredName());
        _OFFER_MEDICALOFFER.OFFER_MEDICALPROGCLASS_ID(__Params_Get_MedicalInfo.OFFER_MEDICALPROGCLASS_ID());
        _OFFER_MEDICALOFFER.OFFER_MEDICALPROGCODE_ID(__Params_Get_MedicalInfo.OFFER_MEDICALPROGCODE_ID());
        _OFFER_MEDICALOFFER.Class(__Params_Get_MedicalInfo.ProgClassDesc());
        _OFFER_MEDICALOFFER.NbPersons(__Params_Get_MedicalInfo.InsNo());
        _OFFER_MEDICALOFFER.Cnss(__Params_Get_MedicalInfo.CNSSCode());
        _OFFER_MEDICALOFFER.OfferDate = jq_parseDate2(convertDate(new Date()));;
        _OFFER_MEDICALOFFER.Phone(__Params_Get_MedicalInfo.InsuredMobile());
        _OFFER_MEDICALOFFER.Email(__Params_Get_MedicalInfo.InsuredEmail());
        _OFFER_MEDICALOFFER.My_Members = [];

        for (i = 1; i <= parseInt(__Params_Get_MedicalInfo.InsNo() === undefined ? "0" : __Params_Get_MedicalInfo.InsNo().toString()) ; i++) {

            ////////debugger;
            _OFFER_MEDICALOFFER.My_Members.unshift(new Member_family(-1, 'none', $("#txt_Insured_" + i).val(), 'M', 'P', 0, __Params_Get_MedicalInfo.OFFER_MEDICALPROGCODE_ID(), __Params_Get_MedicalInfo.ProgClassDesc(),
                __Params_Get_MedicalInfo.InsNo(), __Params_Get_MedicalInfo.CNSSCode(), 0, 0, 0, 0, 0, 0, 0, 0));
        }

        _Params = ko.mapping.toJSON(_OFFER_MEDICALOFFER);

        _Service_Method = "Edit_Medical";

        CallService('Service_Call_Completed_Medical');
    }
    catch (e) {
        alert("Edit_Medical: " + e.Message);
    }
}

function GetMedicalClasses(ProgID) {
    debugger;
    try {

        /* ---------------- */
        //GatherUIData_Medical(ProgID);
        /* ---------------- */
        /* ---------------- */
        _Params = ko.mapping.toJSON(__Params_Get_MedicalInfo);

        //alert(_Params);
        _Service_Method = "GetMedicalClassesByProgCode";
        CallService('Service_Call_Completed_Medical');
        /* ---------------- */
    }
    catch (e) {
        alert("GetMedicalClasses: " + e.Message);
    }

}

/* GetData_VehiculesThirdParty() */
/* --------------------------------------------------------------- */
function GetData_Medical() {
    ////////debugger;
    try {
        /* ---------------- */
        $("#ul_Listing_TP").html("");
        /* ---------------- */

        /* ---------------- */
        //GatherUIData_Medical();
        /* ---------------- */
        //if (title != "" && title == "AJIAL")
        //{
        //    __Params_Get_MedicalInfo.InsNo = 1;
        //}
        /* ---------------- */
        _Params = ko.mapping.toJSON(__Params_Get_MedicalInfo);
        //alert(_Params);

        _Service_Method = "GetMedicalTarifByUserCriteria";
        CallService('Service_Call_Completed_Medical');
        /* ---------------- */
    }
    catch (e) {
        alert("GetData_VehiculesThirdParty(): " + e.Message);
    }
}
/* --------------------------------------------------------------- */

/* GatherUIData_VehiculesThirdParty() */
/* --------------------------------------------------------------- */
function GatherUIData_Medical(ProgID) {
    try {
        ////////debugger;
        // To Collect Non Visual Data.
        //__Params_Get_MedicalInfo = ko.mapping.fromJS(_Params_Medical);
        //__Params_Get_MedicalInfo.DOB1=
        //var test = JSON.stringify(__Params_Get_MedicalInfo)
        //alert(test);
        //_Params_MedicalToDB = ko.mapping.toJS(__Params_Get_MedicalInfo);
    }
    catch (e) {
        alert("GatherUIData_Update_Profile: " + e.Message);
    }
}
/* --------------------------------------------------------------- */


$(document).on("pagebeforeshow", "#pg_Medical", function (event, ui) {
//$('#pg_Medical').bind('pageshow', function (event, ui) {
    //////debugger;
    /* -------------------------------------------------- */
    // if (!js_FncCommon()) { return; };
    /* -------------------------------------------------- */
    //alert('page bind');
    /* SEO */
    Validator_Login.resetForm();
    /* -------------------------------------------------- */
    $("meta[name=description]").attr("content", "Get Medical Quotation");
    $("title").html("Get Medical Quotation");
    /* -------------------------------------------------- */

    var query = "title=Victoire Medical Plan";//$(this).data("url").split("?")[1];
    title = query.replace("title=", "");

    //ko.applyBindings(__Params_Get_MedicalInfo, document.getElementById('ct_Medical'));

    /* ------Fill Insured Number Combo-------- */
    FillInsuredNumber();
    /* ---------------- */

    /* ------Fill Year of Make Combo-------- */
    FillCNSSCombo();
    /* ------End-------- */

    var func = function () {

        jq_ShowMobileLoader();
        /* ------Fill Programme Code Combo-------- */
        FillProgrammeCodeCombo();
    };

    setTimeout(func, 300);

    /* ------End-------- */

    FillYearOfBirth();

    /* Refresh Controls */
    $("#ddl_MedicalInsuredNo").selectmenu('refresh');
    /* ---------------- */

    /* Refresh Controls */
    $("#ddl_MedicalCNSS").selectmenu('refresh');
    //$("#ddl_ProgrammeCode").selectmenu('refresh');
    /* ---------------- */


});

function FillYearOfBirth() {
    ////////debugger;
    try {
        var d = new Date();
        var n = d.getFullYear();
        var limit = d.getFullYear() - 75;
        List_YearofBirth = []; List_YearofBirth2 = []; List_YearofBirth3 = []; List_YearofBirth4 = []; List_YearofBirth5 = []; List_YearofBirth6 = []; List_YearofBirth7 = [];
        /* ---------------- */
        for (i = new Date().getFullYear() ; i > limit; i--) {
            var YearofBirth = new Object();
            YearofBirth.DOB1 = i;
            YearofBirth.DOB1Desc = i.toString() + ' ' + '( ' + parseInt(n - i).toString() + ' years old)';
            List_YearofBirth.push({
                DOB1: YearofBirth.DOB1,
                DOB1Desc: YearofBirth.DOB1Desc
            });

            var YearofBirth2 = new Object();
            YearofBirth2.DOB2 = i;
            YearofBirth2.DOB2Desc = i.toString() + ' ' + '( ' + parseInt(n - i).toString() + ' years old)';
            List_YearofBirth2.push({
                DOB2: YearofBirth2.DOB2,
                DOB2Desc: YearofBirth2.DOB2Desc
            });

            var YearofBirth3 = new Object();
            YearofBirth3.DOB3 = i;
            YearofBirth3.DOB3Desc = i.toString() + ' ' + '( ' + parseInt(n - i).toString() + ' years old)';
            List_YearofBirth3.push({
                DOB3: YearofBirth3.DOB3,
                DOB3Desc: YearofBirth3.DOB3Desc
            });

            var YearofBirth4 = new Object();
            YearofBirth4.DOB4 = i;
            YearofBirth4.DOB4Desc = i.toString() + ' ' + '( ' + parseInt(n - i).toString() + ' years old)';
            List_YearofBirth4.push({
                DOB4: YearofBirth4.DOB4,
                DOB4Desc: YearofBirth4.DOB4Desc
            });

            var YearofBirth5 = new Object();
            YearofBirth5.DOB5 = i;
            YearofBirth5.DOB5Desc = i.toString() + ' ' + '( ' + parseInt(n - i).toString() + ' years old)';
            List_YearofBirth5.push({
                DOB5: YearofBirth5.DOB5,
                DOB5Desc: YearofBirth5.DOB5Desc
            });

            var YearofBirth6 = new Object();
            YearofBirth6.DOB6 = i;
            YearofBirth6.DOB6Desc = i.toString() + ' ' + '( ' + parseInt(n - i).toString() + ' years old)';
            List_YearofBirth6.push({
                DOB6: YearofBirth6.DOB6,
                DOB6Desc: YearofBirth6.DOB6Desc
            });

            var YearofBirth7 = new Object();
            YearofBirth7.DOB7 = i;
            YearofBirth7.DOB7Desc = i.toString() + ' ' + '( ' + parseInt(n - i).toString() + ' years old)';
            List_YearofBirth7.push({
                DOB7: YearofBirth7.DOB7,
                DOB7Desc: YearofBirth7.DOB7Desc
            });
        }

        ko.mapping.fromJS(List_YearofBirth, MyApp_GVM.List_YearofBirth);
        ko.mapping.fromJS(List_YearofBirth2, MyApp_GVM.List_YearofBirth2);
        ko.mapping.fromJS(List_YearofBirth3, MyApp_GVM.List_YearofBirth3);
        ko.mapping.fromJS(List_YearofBirth4, MyApp_GVM.List_YearofBirth4);
        ko.mapping.fromJS(List_YearofBirth5, MyApp_GVM.List_YearofBirth5);
        ko.mapping.fromJS(List_YearofBirth6, MyApp_GVM.List_YearofBirth6);
        ko.mapping.fromJS(List_YearofBirth7, MyApp_GVM.List_YearofBirth7);

        //alert(ko.toJSON(_List_YearofMake));

    }
    catch (e) {
        alert("FillYearOfBirth : " + e.Message);
    }
}

function FillInsuredNumber() {
    ////////debugger;
    try {
        List_InsuredNo = [];
        /* ---------------- */
        for (i = 1; i < 8; i++) {
            var InsuredNo = new Object();
            InsuredNo.InsNo = i;
            List_InsuredNo.push(InsuredNo);
        }
        //_List_InsuredNo = ko.mapping.fromJS(List_InsuredNo);
        ko.mapping.fromJS(List_InsuredNo, MyApp_GVM.List_InsuredNo);
        //__Params_Get_MedicalInfo = ko.mapping.fromJS(_Params_Medical);

        //alert(ko.toJSON(_List_YearofMake));

    }
    catch (e) {
        alert("FillInsuredNumber : " + e.Message);
    }
}

function FillCNSSCombo() {
    ////////debugger;
    try {
        List_CNSS = [];
        /* ---------------- */
        var CNSSOpt = new Object();
        CNSSOpt.CNSSCode = "N";
        CNSSOpt.CNSSDesc = "No";
        List_CNSS.push({
            CNSSCode: CNSSOpt.CNSSCode,
            CNSSDesc: CNSSOpt.CNSSDesc
        });
        CNSSOpt = new Object();
        CNSSOpt.CNSSCode = "Y";
        CNSSOpt.CNSSDesc = "Yes";
        List_CNSS.push({
            CNSSCode: CNSSOpt.CNSSCode,
            CNSSDesc: CNSSOpt.CNSSDesc
        });

        //_List_CNSS = ko.mapping.fromJS(List_CNSS);
        ko.mapping.fromJS(List_CNSS, MyApp_GVM.List_CNSS);
        //__Params_Get_MedicalInfo = ko.mapping.fromJS(_Params_Medical);

        //alert(ko.toJSON(_List_YearofMake));

    }
    catch (e) {
        alert("FillCNSSCombo : " + e.Message);
    }
}

function FillProgrammeCodeCombo() {
    ////////debugger;
    try {
        /* ---------------- */
        _Service_Method = "Get_Medical_Startup_Data";
        CallService('Service_Call_Completed_Medical');
        /* ---------------- */

    }
    catch (e) {
        alert("FillProgrammeCode : " + e.Message);
    }
}

/* --------------------------------------------------------------- */
function Service_Call_Completed_Medical(i_Response) {
    ////////debugger;
    try {
        switch (_Service_Method) {
            case "Get_Medical_Startup_Data":
                Get_Medical_Startup_Data_Completed(i_Response);
                break;
            case "GetMedicalTarifByUserCriteria":
                GetMedicalTarifByUserCriteria_Completed(i_Response);
                break;
            case "Edit_Medical":
                Edit_Medical_Completed(i_Response);
                break;
            case "GetMedicalClassesByProgCode":
                GetMedicalClassesByProgCode_Completed(i_Response);
                break;
            case "Edit_MedicalSharing":
                Edit_MedicalSharing_Completed(i_Response);
                break;
        }
    }
    catch (e) {
        alert("Service_Call_Completed:" + e.message);
    }
}

function GetMedicalClassesByProgCode_Completed(i_Response)
{
    debugger;

    try
    {
        ko.mapping.fromJS(i_Response.My_Result, MyApp_GVM.List_Class);
        $('#ddl_MedicalClass').selectmenu('refresh', true);
    }
    catch (e) {
        alert("GetMedicalClassesByProgCode_Completed: " + e.message);
    }
}



/* --------------------------------------------------------------- */
function Edit_Medical_Completed(i_Response) {
    try {
        debugger;
        jq_HideMobileLoaderAdv("pg_Medical");
        jq_DisplayMessage("MSG_GeneralInfo", "Successfull!", "Your Medical Offer Has Been Sent Successfully! please don't forget to check your junk mail too.", null, null, null,null);
        /* ----------------- */

        ko.mapping.fromJS(i_Response.My_Result, _OFFER_MEDICALOFFER);

    }
    catch (e) {
        alert("Edit_Medical_Completed: " + e.message);
    }
}

/* --------------------------------------------------------------- */
function Edit_MedicalSharing_Completed(i_Response) {
    try {
        debugger;
        //alert('ekdjkejdkje ');

        jq_HideMobileLoaderAdv("pg_Medical");

        // Show spinner dialog with message
        // Note: spinner dialog is cancelable by default
        SpinnerDialog.show(null, "Please wait to share your Medical Offer");
        
        setTimeout(function () {
            SpinnerDialog.hide();
        }, 30000);

        var inputUri = encodeURI('http://mobile.victoire.com.lb/MobileOffers/MedicalOffer_' + i_Response.My_Result.OFFER_MEDICALOFFER_ID + '.pdf');
        //alert('ekdjekdj kede done');
        window.plugins.socialsharing.share('Here is your Medical Offer Shared File', 'Your Medical Offer', inputUri);
        /* ----------------- */

        ko.mapping.fromJS(i_Response.My_Result, _OFFER_MEDICALOFFER);

    }
    catch (e) {
        alert("Edit_MedicalSharing_Completed: " + e.message);
    }
}

function GetMedicalTarifByUserCriteria_Completed(i_Input) {
    ////////debugger;
    try {

        $("#sp_NoResultsMedical").html("");
        jq_HideMobileLoaderAdv("pg_Medical");
        if (i_Input.My_Result.length > 0) {
            //alert('ekjdkejd ekdj ');
            $("#ul_Listing_VictMedical").html($("#ListingTemplateVictMedical").render(i_Input.My_Result[0])).listview('refresh').trigger('create');
        }
        else {
            $("#sp_NoResultsMedical").html("<br><br>Sorry, no results found matching your criteria.");
        }
        // Fill Collection.
        // --------------------
        _Ac_List = [];
        _Ac_List.push(i_Input.My_Result[0]);

        __Params_Get_MedicalInfo.IsVisible(true);

       // $("#ct_Medical").animate({ scrollTop: $("#MedicalResult").offset().top }, 1000, function () {
            $("#txt_MDQ_Name").focus();
        //});
    }
    catch (e) {
        alert("GetMedicalTarifByUserCriteria_Completed: " + e.Message);
    }
}

/* --------------------------------------------------------------- */

function Get_Medical_Startup_Data_Completed(i_Input) {
   debugger;
    jq_HideMobileLoaderAdv("pg_Medical");
    /* ---------------- */
    try {

        if (i_Input.My_Result == null) {
            jq_DisplayMessage("MSG_GeneralError", "", "No Medical Classes. Please Contact The Company!");
            return;
        }
        //alert('test');
        ko.mapping.fromJS(i_Input.My_Result.My_MEDICALPROGCODE, MyApp_GVM.List_ProgrammeCode);
        //ko.mapping.fromJS(i_Input.My_Result.My_MEDICALPROGCLASS, MyApp_GVM.List_Class);
    }

    catch (e) {
        alert("Get_Medical_Startup_Data_Completed: " + e.Message);
    }
}
/* --------------------------------------------------------------- */

