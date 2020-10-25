/* Members */
/* --------------------------------------------------------------- */
//PA Object
////////debugger;
var OFFER_PAOFFERS = new Object();
OFFER_PAOFFERS.OFFER_PAOFFERS_ID = 0;
OFFER_PAOFFERS.OFFER_CODE = "PA";
OFFER_PAOFFERS.OFFER_SERIAL = 0;
OFFER_PAOFFERS.POLICY_HOLDER_TITLE = "";
OFFER_PAOFFERS.POLICY_HOLDER_NAME = "";
OFFER_PAOFFERS.POLICY_HOLDER_ADDRESS = "";
OFFER_PAOFFERS.POLICY_HOLDER_TELEPHONE = "";
OFFER_PAOFFERS.POLICY_HOLDER_GENDER = "";
OFFER_PAOFFERS.POLICY_HOLDER_EMAIL = "";
OFFER_PAOFFERS.POLICY_HOLDER_POBOX = "";
OFFER_PAOFFERS.INSURED_NAME = "";
OFFER_PAOFFERS.INSURED_BIRTHDATE = moment().format("YYYY-MM-DD");
OFFER_PAOFFERS.WORKERSNATIONALITY_ID = 0;
OFFER_PAOFFERS.INSURED_IDCARD = "";
OFFER_PAOFFERS.INSURED_GENDER = "";
OFFER_PAOFFERS.PAOCCUPATIONS_ID = 0;
OFFER_PAOFFERS.EMPLOYEE_STATUS = "";
OFFER_PAOFFERS.TOTALPREMIUM = 0;
OFFER_PAOFFERS.RECEIVEDPREMIUM = 0;
OFFER_PAOFFERS.EMPLOYEE_STATUS = "";
OFFER_PAOFFERS.ENTRY_USER_ID = MyApp_GVM.UserID();
OFFER_PAOFFERS.SUBUSERS_ID = 0;
OFFER_PAOFFERS.FTS = "";
OFFER_PAOFFERS.DisableSaveButton = false;
OFFER_PAOFFERS.EnablePrintButton = false;
OFFER_PAOFFERS.ll_ShowPremiumSection = false;
OFFER_PAOFFERS.language = "EN";
OFFER_PAOFFERS.PrintType = "";
OFFER_PAOFFERS.LoggedInEmail = "";
OFFER_PAOFFERS.BrokerCode = MyApp_GVM.BROKERCODE();
OFFER_PAOFFERS.CalculatedWeeklyIndemnitySumInsured = 0;
OFFER_PAOFFERS.CalculatedAccidentalDeathSumInsured = 0;
OFFER_PAOFFERS.IsVisible = false;
OFFER_PAOFFERS.IsTPDChecked = false;
OFFER_PAOFFERS.PACovers = [];

var ll_Exit = 0;
var ll_SumInsuredError = 0;
var age = 0;
var UserLang = "EN";// _UserInfo.LANG != "" && _UserInfo.LANG != null && _UserInfo.LANG.toString() != "null" ? _UserInfo.LANG.toString().toUpperCase() : "EN";
// ----------------------------------------------------------------
var _Params_Get_PAOffer_Startup_Data = new Object();
_Params_Get_PAOffer_Startup_Data.OWNER_ID = 1;
// ----------------------------------------------------------------
///////////////////////////////////////////////////////////////////////////
var _OFFER_PAOFFERS = ko.mapping.fromJS(OFFER_PAOFFERS);
//////////////////////////////////////////////////////////////////////////////
// ---------------------------------------------------------------------------------------------------*/
var PACoverData = function (_OFFER_PACOVERAGEDATA_ID, _CoverDesc_EN, _CoverDesc_AR, _CalculatedSumInsured, _DeductibleDesc_EN, _DeductibleDesc_AR, _CalculatedPrem, _OFFER_PAOFFERS_ID,
                        _BasicCover, _OFFER_PACOVERS_ID, _RelatedCover, _CoverRelatedCover, _AdditionalSumInsured,_IsChecked,_Rate) {
    //alert('test member family 1');


    ////////debugger;
    var self = this;
    self.OFFER_PACOVERAGEDATA_ID = _OFFER_PACOVERAGEDATA_ID;
    self.CoverDesc_EN = ko.observable(_CoverDesc_EN).extend({ required: true });
    self.CoverDesc_AR = ko.observable(_CoverDesc_AR).extend({ required: true });
    self.CalculatedSumInsured = ko.observable(_CalculatedSumInsured).extend({ required: false });
    self.DeductibleDesc_EN = ko.observable(_DeductibleDesc_EN).extend({ required: true });
    self.DeductibleDesc_AR = ko.observable(_DeductibleDesc_AR).extend({ required: true });
    self.CalculatedPrem = ko.observable(_CalculatedPrem).extend({ required: true });
    self.OFFER_PAOFFERS_ID = ko.observable(_OFFER_PAOFFERS_ID).extend({ required: true });
    self.BasicCover = ko.observable(_BasicCover).extend({ required: true });
    self.OFFER_PACOVERS_ID = ko.observable(_OFFER_PACOVERS_ID).extend({ required: true });
    self.RelatedCover = ko.observable(_RelatedCover).extend({ required: true, maxlength: 10 });
    self.CoverRelatedCover = ko.observable(_CoverRelatedCover).extend({ required: true });
    self.AdditionalSumInsured = ko.observable(_AdditionalSumInsured).extend({ required: true });
    self.IsChecked = ko.observable(_IsChecked).extend({ required: true });
    self.Rate = ko.observable(_Rate).extend({ required: true });
    self._PA_Errors = ko.validation.group(self); // USED FOR KO VALIDATION //
};
/*---------------------------------------------------------------------------------------------------*/


_OFFER_PAOFFERS.CalculatedWeeklyIndemnitySumInsured.subscribe(function (newVal) {
    //////debugger;
    var LO_DRClass = [];
    var PLanCoverID = [];
    var LO_DRTarif = [];
    var LO_DRCoversGrid = [];
    var LO_DRCoversGrid_Ext = [];
    var DRRelatedCover = [];
    var LO_DRCoverSumInsured_Related = [];
    var LO_DRTarif_Related = [];
    var LO_DRTarif_Related_Ext = [];
    var LI_Prem = 0;
    var OFFER_PACOVERS_ID=5;

    if (parseInt(_OFFER_PAOFFERS.PAOCCUPATIONS_ID()) != 0 && _OFFER_PAOFFERS.PAOCCUPATIONS_ID() != undefined && parseInt(newVal) > 0) {
        ////////debugger;
        //Get ClassId based on selected Occupation
        LO_DRClass = $.Enumerable.From(ko.mapping.toJS(MyApp_GVM.List_WorkerProfessions))
        .Where("$.PAOCCUPATIONS_ID  == " + parseInt(_OFFER_PAOFFERS.PAOCCUPATIONS_ID()) + "")
        .ToArray();
        switch (LO_DRClass[0].PAOCCUPATIONS_CLASS.toString()) {
            case 'CLASS A':
                localStorage.setItem("ClassID", 1);
                break;
            case 'CLASS B':
                localStorage.setItem("ClassID", 2);
                break;
            case 'CLASS C':
                localStorage.setItem("ClassID", 3);
                break;
            case 'CLASS D':
                localStorage.setItem("ClassID", 4);
                break;
        }
        //Get PlanID from Selected Sum Insured
        PLanCoverID = $.Enumerable.From(ko.mapping.toJS(JSON.parse(sessionStorage.getItem('PACoverageSumInsured'))))
        .Where("$.SumInsured  == " + parseInt(newVal.toString()) + " && $.OFFER_PACOVERS_ID==" + parseInt(OFFER_PACOVERS_ID.toString()))
        .ToArray();
        //Get Tarif Table Based on ClassId,PlanID,CoverID
        LO_DRTarif = $.Enumerable.From(ko.mapping.toJS(JSON.parse(sessionStorage.getItem('PATarif'))))
        .Where("$.OFFER_PACOVERS_ID  == " + parseInt(PLanCoverID[0].OFFER_PACOVERS_ID.toString()) + " && $.PlanID== " + parseInt(PLanCoverID[0].PlanID.toString()) + " && $.OFFER_PACLASSES_ID==" + parseInt(localStorage.getItem("ClassID").toString()))
        .ToArray();
        //Update the datatable and rebing the grid
        LO_DRCoversGrid = $.Enumerable.From(ko.mapping.toJS(_OFFER_PAOFFERS.PACovers()))
        .Where("$.OFFER_PACOVERS_ID  == " + parseInt(OFFER_PACOVERS_ID.toString()) + "")
        .ToArray();

        LO_DRCoversGrid_Ext = $.Enumerable.From(ko.mapping.toJS(_OFFER_PAOFFERS.PACovers()))
        .Where("$.OFFER_PACOVERS_ID  != 1 && $.OFFER_PACOVERS_ID  != 7")
        .ToArray();

        //UPdate The Premium and the sum insured
        LO_DRCoversGrid[0].CalculatedPrem = LO_DRTarif[0].Premium;
        LO_DRCoversGrid[0].CalculatedSumInsured = parseInt(newVal.toString());

        UpdatePACoversGrid(LO_DRCoversGrid);

        //Set PlanID in case of accidental death sum insured combo changed
        if (parseInt(OFFER_PACOVERS_ID.toString()) == 1) {
            localStorage.setItem("PlanID", parseInt(PLanCoverID[0].PlanID.toString()));
            switch (LO_DRClass[0].PAOCCUPATIONS_CLASS.toString()) {
                case 'CLASS A':
                    localStorage.setItem("ClassID", 1);
                    break;
                case 'CLASS B':
                    localStorage.setItem("ClassID", 2);
                    break;
                case 'CLASS C':
                    localStorage.setItem("ClassID", 3);
                    break;
                case 'CLASS D':
                    localStorage.setItem("ClassID", 4);
                    break;
            }

            ko.utils.arrayForEach(LO_DRCoversGrid_Ext, function (item) {
                ////////debugger;
                //alert('hegdhgehdgede');
                item.BasicCover = 0;
                item.CalculatedPrem = 0;
                item.CalculatedSumInsured = 0;
                item.AdditionalSumInsured = 0;

                //$('#chkTPD').prop('checked', false).trigger("change");
                //$('#chkMedicalExpenses').prop('checked', false).trigger("change");
            });
            UpdatePACoversGrid(LO_DRCoversGrid_Ext);
        }

        //////debugger;
        //CHeck Related Covers
        DRRelatedCover = $.Enumerable.From(ko.mapping.toJS(_OFFER_PAOFFERS.PACovers()))
        .Where("$.RelatedCover  == " + parseInt(OFFER_PACOVERS_ID.toString()) + "")
        .ToArray();

        if (DRRelatedCover.length > 0) {
            ko.utils.arrayForEach(DRRelatedCover, function (item) {
                //////debugger;
                LO_DRCoverSumInsured_Related = $.Enumerable.From(ko.mapping.toJS(JSON.parse(sessionStorage.getItem('PACoverageSumInsured'))))
                .Where("$.OFFER_PACOVERS_ID  == " + parseInt(item.OFFER_PACOVERS_ID.toString()) + " && $.PlanID==" + parseInt(localStorage.getItem("PlanID").toString()))
                .ToArray();

                if (LO_DRCoverSumInsured_Related.length == 0) {
                    //Passive war Cover
                    LO_DRCoverSumInsured_Related = $.Enumerable.From(ko.mapping.toJS(JSON.parse(sessionStorage.getItem('PACoverageSumInsured'))))
                    .Where("$.OFFER_PACOVERS_ID  == " + parseInt(item.CoverRelatedCover.toString()) + " && $.PlanID==" + parseInt(localStorage.getItem("PlanID").toString()))
                    .ToArray();
                }

                LO_DRTarif_Related = $.Enumerable.From(ko.mapping.toJS(JSON.parse(sessionStorage.getItem('PATarif'))))
                .Where("$.OFFER_PACOVERS_ID  == " + item.OFFER_PACOVERS_ID.toString() + " && $.PlanID==" + parseInt(localStorage.getItem("PlanID").toString()) + " && $.OFFER_PACLASSES_ID==" + parseInt(localStorage.getItem("ClassID").toString()))
                .ToArray();

                if (LO_DRTarif_Related.length == 0) {
                    //Death , war ....
                    LO_DRTarif_Related_Ext = $.Enumerable.From(ko.mapping.toJS(_OFFER_PAOFFERS.PACovers()))
                    .Where("$.OFFER_PACOVERS_ID  == " + item.OFFER_PACOVERS_ID.toString() + "")
                    .ToArray();

                }

                item.BasicCover = 1;
                item.CalculatedSumInsured = parseInt(LO_DRCoverSumInsured_Related[0].SumInsured.toString());

                if (LO_DRTarif_Related.length == 0) {
                    item.CalculatedPrem = Math.round(parseFloat(LO_DRTarif_Related_Ext[0].Rate.toString()) * item.CalculatedSumInsured);
                }
                else {
                    item.CalculatedPrem = (parseInt(item.CalculatedPrem));
                }

            });
            ////////debugger;
            UpdatePACoversGrid(DRRelatedCover);
        }
    }
    else {
        if (newVal == undefined && parseInt(_OFFER_PAOFFERS.TOTALPREMIUM()) > 0) {
            //showToast('error', "Please Select an occupation First!", 'Error');
            CalculateAmountOnChexboxes(false, 5);
        }
        ll_Exit = 1;
        return;
    }
});

_OFFER_PAOFFERS.CalculatedAccidentalDeathSumInsured.subscribe(function (newVal) {
    //////debugger;
    var LO_DRClass = [];
    var PLanCoverID = [];
    var LO_DRTarif = [];
    var LO_DRCoversGrid = [];
    var LO_DRCoversGrid_Ext = [];
    var DRRelatedCover = [];
    var LO_DRCoverSumInsured_Related = [];
    var LO_DRTarif_Related = [];
    var LO_DRTarif_Related_Ext = [];
    var LI_Prem = 0;
    var OFFER_PACOVERS_ID = 1;

    if (parseInt(_OFFER_PAOFFERS.PAOCCUPATIONS_ID()) != 0 && _OFFER_PAOFFERS.PAOCCUPATIONS_ID() != undefined && parseInt(newVal) > 0) {
        ////////debugger;
        jq_HideMobileLoaderAdv("pg_GetPAQuotation");
        jq_ShowMobileLoaderAdv("pg_GetPAQuotation");
        setTimeout(function () { jq_HideMobileLoaderAdv("pg_GetPAQuotation"); }, 1000);

        //Get ClassId based on selected Occupation
        LO_DRClass = $.Enumerable.From(ko.mapping.toJS(MyApp_GVM.List_WorkerProfessions))
        .Where("$.PAOCCUPATIONS_ID  == " + parseInt(_OFFER_PAOFFERS.PAOCCUPATIONS_ID()) + "")
        .ToArray();
        switch (LO_DRClass[0].PAOCCUPATIONS_CLASS.toString()) {
            case 'CLASS A':
                localStorage.setItem("ClassID", 1);
                break;
            case 'CLASS B':
                localStorage.setItem("ClassID", 2);
                break;
            case 'CLASS C':
                localStorage.setItem("ClassID", 3);
                break;
            case 'CLASS D':
                localStorage.setItem("ClassID", 4);
                break;
        }
        //Get PlanID from Selected Sum Insured
        PLanCoverID = $.Enumerable.From(ko.mapping.toJS(JSON.parse(sessionStorage.getItem('PACoverageSumInsured'))))
        .Where("$.SumInsured  == " + parseInt(newVal.toString()) + " && $.OFFER_PACOVERS_ID==" + parseInt(OFFER_PACOVERS_ID.toString()))
        .ToArray();
        //Get Tarif Table Based on ClassId,PlanID,CoverID
        LO_DRTarif = $.Enumerable.From(ko.mapping.toJS(JSON.parse(sessionStorage.getItem('PATarif'))))
        .Where("$.OFFER_PACOVERS_ID  == " + parseInt(PLanCoverID[0].OFFER_PACOVERS_ID.toString()) + " && $.PlanID== " + parseInt(PLanCoverID[0].PlanID.toString()) + " && $.OFFER_PACLASSES_ID==" + parseInt(localStorage.getItem("ClassID").toString()))
        .ToArray();
        //Update the datatable and rebing the grid
        LO_DRCoversGrid = $.Enumerable.From(ko.mapping.toJS(_OFFER_PAOFFERS.PACovers()))
        .Where("$.OFFER_PACOVERS_ID  == " + parseInt(OFFER_PACOVERS_ID.toString()) + "")
        .ToArray();

        LO_DRCoversGrid_Ext = $.Enumerable.From(ko.mapping.toJS(_OFFER_PAOFFERS.PACovers()))
        .Where("$.OFFER_PACOVERS_ID  != 1 && $.OFFER_PACOVERS_ID  != 7")
        .ToArray();

        //UPdate The Premium and the sum insured
        LO_DRCoversGrid[0].CalculatedPrem = LO_DRTarif[0].Premium;
        LO_DRCoversGrid[0].CalculatedSumInsured = parseInt(newVal.toString());

        UpdatePACoversGrid(LO_DRCoversGrid);

        //Set PlanID in case of accidental death sum insured combo changed
        if (parseInt(OFFER_PACOVERS_ID.toString()) == 1) {
            localStorage.setItem("PlanID", parseInt(PLanCoverID[0].PlanID.toString()));
            CoverSumInsured_Filtered = $.Enumerable.From(ko.mapping.toJS(JSON.parse(sessionStorage.getItem('PACoverageSumInsured'))))
                          .Where("$.OFFER_PACOVERS_ID ==5 && $.PlanID <=" + parseInt(localStorage.getItem("PlanID").toString()))
                          .ToArray();
            return ko.mapping.fromJS(CoverSumInsured_Filtered, MyApp_GVM.CoverSumInsured_WeeklyIndemnity);

            switch (LO_DRClass[0].PAOCCUPATIONS_CLASS.toString()) {
                case 'CLASS A':
                    localStorage.setItem("ClassID", 1);
                    break;
                case 'CLASS B':
                    localStorage.setItem("ClassID", 2);
                    break;
                case 'CLASS C':
                    localStorage.setItem("ClassID", 3);
                    break;
                case 'CLASS D':
                    localStorage.setItem("ClassID", 4);
                    break;
            }

            ko.utils.arrayForEach(LO_DRCoversGrid_Ext, function (item) {
                ////////debugger;
                //alert('hegdhgehdgede');
                item.BasicCover = 0;
                item.CalculatedPrem = 0;
                item.CalculatedSumInsured = 0;
                item.AdditionalSumInsured = 0;

                //$('#chkTPD').prop('checked', false).trigger("change");
                //$('#chkMedicalExpenses').prop('checked', false).trigger("change");
            });
            UpdatePACoversGrid(LO_DRCoversGrid_Ext);
        }

        //////debugger;
        //CHeck Related Covers
        DRRelatedCover = $.Enumerable.From(ko.mapping.toJS(_OFFER_PAOFFERS.PACovers()))
        .Where("$.RelatedCover  == " + parseInt(OFFER_PACOVERS_ID.toString()) + "")
        .ToArray();

        if (DRRelatedCover.length > 0) {
            ko.utils.arrayForEach(DRRelatedCover, function (item) {
                //////debugger;
                LO_DRCoverSumInsured_Related = $.Enumerable.From(ko.mapping.toJS(JSON.parse(sessionStorage.getItem('PACoverageSumInsured'))))
                .Where("$.OFFER_PACOVERS_ID  == " + parseInt(item.OFFER_PACOVERS_ID.toString()) + " && $.PlanID==" + parseInt(localStorage.getItem("PlanID").toString()))
                .ToArray();

                if (LO_DRCoverSumInsured_Related.length == 0) {
                    //Passive war Cover
                    LO_DRCoverSumInsured_Related = $.Enumerable.From(ko.mapping.toJS(JSON.parse(sessionStorage.getItem('PACoverageSumInsured'))))
                    .Where("$.OFFER_PACOVERS_ID  == " + parseInt(item.CoverRelatedCover.toString()) + " && $.PlanID==" + parseInt(localStorage.getItem("PlanID").toString()))
                    .ToArray();
                }

                LO_DRTarif_Related = $.Enumerable.From(ko.mapping.toJS(JSON.parse(sessionStorage.getItem('PATarif'))))
                .Where("$.OFFER_PACOVERS_ID  == " + item.OFFER_PACOVERS_ID.toString() + " && $.PlanID==" + parseInt(localStorage.getItem("PlanID").toString()) + " && $.OFFER_PACLASSES_ID==" + parseInt(localStorage.getItem("ClassID").toString()))
                .ToArray();

                if (LO_DRTarif_Related.length == 0) {
                    //Death , war ....
                    LO_DRTarif_Related_Ext = $.Enumerable.From(ko.mapping.toJS(_OFFER_PAOFFERS.PACovers()))
                    .Where("$.OFFER_PACOVERS_ID  == " + item.OFFER_PACOVERS_ID.toString() + "")
                    .ToArray();

                }

                item.BasicCover = 1;
                item.CalculatedSumInsured = parseInt(LO_DRCoverSumInsured_Related[0].SumInsured.toString());

                if (LO_DRTarif_Related.length == 0) {
                    item.CalculatedPrem = Math.round(parseFloat(LO_DRTarif_Related_Ext[0].Rate.toString()) * item.CalculatedSumInsured);
                }
                else {
                    item.CalculatedPrem = (parseInt(item.CalculatedPrem));
                }

            });
            ////////debugger;
            UpdatePACoversGrid(DRRelatedCover);
        }
    }
    else {
        if (newVal != undefined) {
            showToast("Please Select an occupation First!", 'Error');
        }
        ll_Exit = 1;
        return;
    }
});

MyApp_GVM.List_WorkerProfessions = ko.mapping.fromJS([]);
MyApp_GVM.List_WorkerNationalities = ko.mapping.fromJS([]);
MyApp_GVM.List_PreviousOffers = ko.mapping.fromJS([]);
MyApp_GVM.List_SubUsers = ko.mapping.fromJS([]);
MyApp_GVM.CoverSumInsured_WeeklyIndemnity = ko.mapping.fromJS([]);

var List_InsuredGender = [{ "VAL": "M", "DESC": "Male" }, { "VAL": "F", "DESC": "Female" }, { "VAL": "C", "DESC": "Company" }];
var _List_InsuredGender = ko.mapping.fromJS(List_InsuredGender);

var List_WorkerGender = [{ "VAL": "M", "DESC": "Male" }, { "VAL": "F", "DESC": "Female" }];
var _List_WorkerGender = ko.mapping.fromJS(List_WorkerGender);

var List_EmployeeStatus = [{ "VAL": "Employee - Full Time", "DESC": "Employee - Full Time" }, { "VAL": "Employee - Part Time", "DESC": "Employee - Part Time" }, { "VAL": "Self - Employed", "DESC": "Self - Employed" }];
var _List_EmployeeStatus = ko.mapping.fromJS(List_EmployeeStatus);

var List_InsuredTitle = [{ "VAL": "Mr", "DESC": "Mr." }, { "VAL": "Ms", "DESC": "Ms." }, { "VAL": "MM", "DESC": "MM." }];
var _List_InsuredTitle = ko.mapping.fromJS(List_InsuredTitle);

var _Params_Clone_Offre = new Object();
_Params_Clone_Offre.OWNER_ID = 1;

// ---------------------------------------------------------------------
/* On Document Ready. */
/* --------------------------------------------------------------- */
// ------------------------------------------------------------

$(document).on("pagebeforecreate", "#pg_GetPAQuotation", function (event, ui) {

    ////////debugger;
    Validator_Login = $("#Frm_PAQuotation").validate({
        rules: {
            DDL_OPA_Profession: { required: true },
            DDL_PA_SumInsured: { required: true }
        }
    });


    $(this).on("click", "#btn_GetPrices_PAOffer", function (event) {
        ////////debugger;
        //Calculate Total Prem
        var CalculatedPrem = 0;
        ko.utils.arrayForEach(_OFFER_PAOFFERS.PACovers(), function (item) {
            CalculatedPrem = parseInt(CalculatedPrem) + parseInt(item.CalculatedPrem())
        });
        _OFFER_PAOFFERS.TOTALPREMIUM(CalculatedPrem);
        if (CalculatedPrem > 0)
        {
            _OFFER_PAOFFERS.IsVisible(true);
        }

        $("#txt_PA_InsName").focus();

    });


    $(this).on("change", "#chkMedicalExpenses", function (event) {
        //alert($(event.currentTarget).is(':checked'));
        //////debugger;
        CalculateAmountOnChexboxes($(event.currentTarget).is(':checked'), 4);
    });

    $(this).on("change", "#chkTPD", function (event) {
        //////debugger;
        _OFFER_PAOFFERS.IsTPDChecked(true);
        CalculateAmountOnChexboxes($(event.currentTarget).is(':checked'), 2);
    });

    $(this).on("change", "#chkPassiveWarDeath", function (event) {
        //////debugger;
        CalculateAmountOnChexboxes($(event.currentTarget).is(':checked'), 7);
    });

    $(this).on("click", "#btn_SendPrices_PAOffer", function (event) {
        ////////debugger;

        var CalculatedPrem = 0;
        ko.utils.arrayForEach(_OFFER_PAOFFERS.PACovers(), function (item) {
            CalculatedPrem = parseInt(CalculatedPrem) + parseInt(item.CalculatedPrem())
        });
        _OFFER_PAOFFERS.TOTALPREMIUM(CalculatedPrem);

        if ($.trim($("#txt_PA_InsName").val()) == "" || $.trim($("#txt_PA_Email").val()) == "" || $.trim($("#txt_PA_Mobile").val()) == "") {
            jq_DisplayMessage("MSG_GeneralError", "", "Please Fill All Your Info.!");
            $("#txt_PA_InsName").focus();
            return false;
        }
        else {
            jq_ShowMobileLoaderAdv("pg_GetPAQuotation");
            Btn_SavePA_Click();
        }
    });


    $(this).on("click", "#btn_SharePrices_PAOffer", function (event) {
        ////////debugger;

        var CalculatedPrem = 0;
        ko.utils.arrayForEach(_OFFER_PAOFFERS.PACovers(), function (item) {
            CalculatedPrem = parseInt(CalculatedPrem) + parseInt(item.CalculatedPrem())
        });
        _OFFER_PAOFFERS.TOTALPREMIUM(CalculatedPrem);

        if ($.trim($("#txt_PA_InsName").val()) == "" || $.trim($("#txt_PA_Email").val()) == "" || $.trim($("#txt_PA_Mobile").val()) == "") {
            jq_DisplayMessage("MSG_GeneralError", "", "Please Fill All Your Info.!");
            $("#txt_PA_InsName").focus();
            return false;
        }
        else {
            jq_ShowMobileLoaderAdv("pg_GetPAQuotation");
            Btn_SaveSharePA_Click();
        }
    });

});

// ---------------------------------------------------------------------

$(document).on("pagebeforeshow", "#pg_GetPAQuotation", function (event, ui) {
    //$('#pg_Medical').bind('pageshow', function (event, ui) {
    //////debugger;
    /* -------------------------------------------------- */
    // if (!js_FncCommon()) { return; };
    /* -------------------------------------------------- */
    //alert('page bind');
    /* SEO */
    Validator_Login.resetForm();
    /* -------------------------------------------------- */
    $("meta[name=description]").attr("content", "Get Fire Quotation");
    $("title").html("Get Fire Quotation");
    /* -------------------------------------------------- */

    var query = "title=PERSONAL Accident Insurance: Personal Accident Continental Scale&email=vie@victoire.com.lb~medical@victoire.com.lb"; //$(this).data("url").split("?")[1];
    query = query.replace("title=", "");
    query = query.replace("email=", "");

    title = query.split("&")[0];
    email = query.split("&")[1];


    $('#lblSubject').text(title);

    ////////debugger;


    var func = function () {

        jq_ShowMobileLoader();
        /* ------Fill Programme Code Combo-------- */
        Get_PAOffer_Startup_Data(_UserInfo.OwnerID); (1);
    };

    setTimeout(func, 300);
});

/* --------------------------------------------------------------- */
/* --------------------------------------------------------------- */
/* --------------------------------------------------------------- */
/* --------------------------------------------------------------- */

/* --------------i_FISCAL_YEAR_ID is the USER_ID------------------------------------------------- */
function Get_PAOffer_Startup_Data(i_OWNER_ID) {
    try {
        ////////debugger;
        //alert('test');
        _Params_Get_PAOffer_Startup_Data.OWNER_ID = i_OWNER_ID;
        _Params_Get_PAOffer_Startup_Data.USER_ID = _UserInfo.UserID;
        _Params_Get_PAOffer_Startup_Data.PCODE = "PA";

        _Params = JSON.stringify(_Params_Get_PAOffer_Startup_Data);

        _Service_Method = "Get_PAOffer_Startup_Data";

        CallService('Service_Call_Completed_PAOffer');
    }
    catch (e) {
        alert("Get_PAOffer_Startup_Data: " + e.Message);
    }
}
/* --------------------------------------------------------------- */

/* --------------------------------------------------------------- */
function Service_Call_Completed_PAOffer(i_Response) {
    try {
        // alert(_Service_Method);
        switch (_Service_Method) {
            case "Get_PAOffer_Startup_Data":
                Get_PAOffer_Startup_Data_Completed(i_Response);
                break;
            case "Edit_PAOffer":
                Edit_PAOffer_Completed(i_Response);
                break;
            case "Edit_PAOfferSharing":
                Edit_PAOfferSharing_Completed(i_Response);
                break;
        }
    }
    catch (e) {
        alert("Service_Call_Completed:" + e.message);
    }
}

/* --------------------------------------------------------------- */
function Get_PAOffer_Startup_Data_Completed(i_Input) {
    try {
        //alert('test');
        //////debugger;

        _OFFER_PAOFFERS.language(UserLang);

        ko.mapping.fromJS(i_Input.My_Result.My_Nationalities, MyApp_GVM.List_WorkerNationalities);
        ko.mapping.fromJS(i_Input.My_Result.My_Professions, MyApp_GVM.List_WorkerProfessions);
        sessionStorage.setItem("PACoverageSumInsured", JSON.stringify(i_Input.My_Result.My_PACOVERAGESUMINSURED));
        sessionStorage.setItem("PATarif", JSON.stringify(i_Input.My_Result.My_PATARIF));
        sessionStorage.setItem("PAClasses", JSON.stringify(i_Input.My_Result.My_PACLASSES));

        _OFFER_PAOFFERS.PACovers.removeAll();
        ko.utils.arrayForEach(i_Input.My_Result.My_PACovers, function (item) {
            ////////debugger;
            var index = i_Input.My_Result.My_PACovers.indexOf(item);
            ////////debugger;
            _OFFER_PAOFFERS.PACovers.unshift(new PACoverData(-1, item.CoverDesc_EN, item.CoverDesc_AR, item.CalculatedSumInsured, item.DeductibleDesc_EN, item.DeductibleDesc_AR, item.CalculatedPrem, 0, item.BasicCover,
                item.OFFER_PACOVERS_ID, item.RelatedCover, item.CoverRelatedCover, item.AdditionalSumInsured, item.IsChecked, item.rate));
        });

        //ko.applyBindings(_OFFER_PAOFFERS, document.getElementById('ct_GetPAQuotation'));
    }
    catch (e) {
        alert("Get_PAOffer_Startup_Data_Completed: " + e.message);
    }
}

/* --------------------------------------------------------------- */
function Btn_SavePA_Click() {
    try {
        //alert('test');
        ////////debugger;

        var LO_MinPremium = [];
        /* ------------------------------------- */
        if ($("#Frm_PAQuotation").valid()) {

            if (parseInt(_OFFER_PAOFFERS.TOTALPREMIUM()) > 0) {
                //Get PlanID from Selected Sum Insured
                LO_MinPremium = $.Enumerable.From(ko.mapping.toJS(JSON.parse(sessionStorage.getItem('PAClasses'))))
                .Where("$. OFFER_PACLASSES_ID  == " + parseInt(localStorage.getItem("ClassID").toString()))
                .ToArray();

                if (LO_MinPremium.length > 0) {
                    if (parseInt(_OFFER_PAOFFERS.TOTALPREMIUM()) < parseInt(LO_MinPremium[0].MinPrem.toString())) {
                        showToast("Please Increase Your Premium. Minimum Premium is" + LO_MinPremium[0].MinPrem.toString(), 'Error');
                        jq_HideMobileLoaderAdv("pg_GetPAQuotation");
                        return;
                    }
                }
            }

            //////debugger;
            //if (age > 63 || age < 18) {
            //    jq_DisplayNotification('Insured Age Not Allowed!', 'fail');
            //    ll_Exit = 1;
            //    return;

            //}

            //if ($("#Btn_Save").is(":visible") == true) {
                //jq_HideNotification();
                Edit_PAOffer();
            //}
        }
        /* ------------------------------------- */
        return false;
    }
    catch (e) {
        alert("Btn_Save_Click : " + e.message);
    }
}
/* --------------------------------------------------------------- */
/* --------------------------------------------------------------- */
function Btn_SaveSharePA_Click() {
    try {
        //alert('test');
        ////////debugger;

        var LO_MinPremium = [];
        /* ------------------------------------- */
        if ($("#Frm_PAQuotation").valid()) {

            if (parseInt(_OFFER_PAOFFERS.TOTALPREMIUM()) > 0) {
                //Get PlanID from Selected Sum Insured
                LO_MinPremium = $.Enumerable.From(ko.mapping.toJS(JSON.parse(sessionStorage.getItem('PAClasses'))))
                .Where("$. OFFER_PACLASSES_ID  == " + parseInt(localStorage.getItem("ClassID").toString()))
                .ToArray();

                if (LO_MinPremium.length > 0) {
                    if (parseInt(_OFFER_PAOFFERS.TOTALPREMIUM()) < parseInt(LO_MinPremium[0].MinPrem.toString())) {
                        showToast("Please Increase Your Premium. Minimum Premium is" + LO_MinPremium[0].MinPrem.toString(), 'Error');
                        jq_HideMobileLoaderAdv("pg_GetPAQuotation");
                        return;
                    }
                }
            }

            //////debugger;
            //if (age > 63 || age < 18) {
            //    jq_DisplayNotification('Insured Age Not Allowed!', 'fail');
            //    ll_Exit = 1;
            //    return;

            //}

            //if ($("#Btn_Save").is(":visible") == true) {
            //jq_HideNotification();
            Edit_PAOfferSharing();
            //}
        }
        /* ------------------------------------- */
        return false;
    }
    catch (e) {
        alert("Btn_Save_Click : " + e.message);
    }
}
/* --------------------------------------------------------------- */
function Edit_PAOffer() {
    try {
        ll_Exit = 0;
        //////debugger;
        /* Call the Service. */
        _OFFER_PAOFFERS.LoggedInEmail(_UserInfo.EMAIL);
        /* ---------------- */
        _Params = ko.mapping.toJSON(_OFFER_PAOFFERS);
        //alert(_Params);
        _Service_Method = "Edit_PAOffer";
        _Async = true;
        CallService('Service_Call_Completed_PAOffer');
        /* ---------------- */
    }
    catch (e) {
        alert("Edit_PAOffer: " + e.message);
    }
}
/* --------------------------------------------------------------- */
function Edit_PAOfferSharing() {
    try {
        ll_Exit = 0;
        //////debugger;
        /* Call the Service. */
        _OFFER_PAOFFERS.LoggedInEmail(_UserInfo.EMAIL);
        /* ---------------- */
        _Params = ko.mapping.toJSON(_OFFER_PAOFFERS);
        //alert(_Params);
        _Service_Method = "Edit_PAOfferSharing";
        _Async = true;
        CallService('Service_Call_Completed_PAOffer');
        /* ---------------- */
    }
    catch (e) {
        alert("Edit_PAOfferSharing: " + e.message);
    }
}

/* --------------------------------------------------------------- */
/* --------------------------------------------------------------- */
function Edit_PAOffer_Completed(i_Response) {
    try {
        ////////debugger;
        jq_HideMobileLoaderAdv("pg_GetPAQuotation");
        //showToast('Saved. Please Check You Email. Thank You!', 'success');
        jq_DisplayMessage("MSG_GeneralInfo", "Successfull!", "Your Personal Accident Offer Has Been Sent Successfully! please don't forget to check your junk mail too.", null, null, null, null);
        /* ----------------- */
        ko.mapping.fromJS(i_Response.My_OFFER_PAOFFERS, _OFFER_PAOFFERS);

    }
    catch (e) {
        alert("Edit_PAOffer_Completed: " + e.message);
    }
}
/* --------------------------------------------------------------- */
function Edit_PAOfferSharing_Completed(i_Response) {
    try {
        ////////debugger;
        var func = function () {
            
        };

        jq_HideMobileLoaderAdv("pg_GetPAQuotation");

        // Show spinner dialog with message
        // Note: spinner dialog is cancelable by default
        SpinnerDialog.show(null, "Please wait to share your PA Offer");

        setTimeout(function () {
            SpinnerDialog.hide();
        }, 30000);

        var inputUri = encodeURI('http://mobile.victoire.com.lb/MobileOffers/PAOffer_' + i_Response.My_Result.OFFER_PAOFFERS_ID + '.pdf');
        //alert('ekdjekdj kede done');
        window.plugins.socialsharing.share('Here is your PA Offer Shared File', 'Your PA Offer', inputUri);

        /* ----------------- */
        ko.mapping.fromJS(i_Response.My_OFFER_PAOFFERS, _OFFER_PAOFFERS);

    }
    catch (e) {
        alert("Edit_PAOffer_Completed: " + e.message);
    }
}

/* --------------------------------------------------------------- */
/* Btn_Clear_Click. */
/* --------------------------------------------------------------- */
function Btn_Clear_Click() {

    window.location.reload();
}

/* --------------------------------------------------------------- */
function SetCoverDesc(obj) {
    ////////debugger;
    switch (_OFFER_PAOFFERS.language()) {
        case "EN":
            return obj.CoverDesc_EN();
            break;
        case "AR":
            return obj.CoverDesc_AR();
            break;
        default:
            return obj.CoverDesc_EN();
            break;
    }
}

function SetDeductibleDesc(obj) {

    switch (_OFFER_PAOFFERS.language()) {
        case "EN":
            return obj.DeductibleDesc_EN();
            break;
        case "AR":
            return obj.DeductibleDesc_AR();
            break;
        default:
            return obj.DeductibleDesc_EN();
            break;
    }
}

function UpdatePACoversGrid(DR) {
    try {
        //////debugger;

        //////////////////////////////////Update TLM7OfferData.LM7Covers //////////////////////////////////////////////////////////
        ko.utils.arrayForEach(DR, function (item) {
            //////debugger;
            var match = ko.utils.arrayFirst(_OFFER_PAOFFERS.PACovers(), function (item2) {
                //////debugger;
                if (item2.OFFER_PACOVERS_ID() == item.OFFER_PACOVERS_ID) {
                    return true;
                }
            });
            if (match) {
                var index = _OFFER_PAOFFERS.PACovers.indexOf(match);
                //////debugger;
                //alert(index);
                _OFFER_PAOFFERS.PACovers.splice(index, 1, new PACoverData(-1, item.CoverDesc_EN, item.CoverDesc_AR, item.CalculatedSumInsured, item.DeductibleDesc_EN, item.DeductibleDesc_AR, item.CalculatedPrem, 0, item.BasicCover,
                    item.OFFER_PACOVERS_ID, item.RelatedCover, item.CoverRelatedCover, item.AdditionalSumInsured, item.IsChecked, item.Rate));
            }
        });

        //Calculate Total Prem
        var CalculatedPrem = 0;
        ko.utils.arrayForEach(_OFFER_PAOFFERS.PACovers(), function (item) {
            CalculatedPrem = parseInt(CalculatedPrem) + parseInt(item.CalculatedPrem())
        });
        _OFFER_PAOFFERS.TOTALPREMIUM(CalculatedPrem);

    }
    catch (e) {
        alert("UpdatePACoversGrid: " + e.message);
    }

}

function FillPASumInsured(OFFER_PACOVERS_ID) {
    //////debugger;
    if (OFFER_PACOVERS_ID == 1 && sessionStorage.getItem('PACoverageSumInsured') !=null) {
        CoverSumInsured_Filtered = $.Enumerable.From(ko.mapping.toJS(JSON.parse(sessionStorage.getItem('PACoverageSumInsured'))))
                                    .Where("$.OFFER_PACOVERS_ID ==" + OFFER_PACOVERS_ID)
                                    .ToArray();
        return ko.mapping.fromJS(CoverSumInsured_Filtered);
    }
    else if (OFFER_PACOVERS_ID == 5 && sessionStorage.getItem('PACoverageSumInsured') != null)//Weekly Indemnity -WI
    {
        //alert('21212');
        ////////debugger;
        if (localStorage.getItem("PlanID") != null) { //|| localStorage.getItem("PlanID") != "null" || localStorage.getItem("PlanID") != "") {
            CoverSumInsured_Filtered = $.Enumerable.From(ko.mapping.toJS(JSON.parse(sessionStorage.getItem('PACoverageSumInsured'))))
                                      .Where("$.OFFER_PACOVERS_ID ==" + OFFER_PACOVERS_ID + " && $.PlanID <=" + parseInt(localStorage.getItem("PlanID").toString()))
                                      .ToArray();
            return ko.mapping.fromJS(CoverSumInsured_Filtered);
        }

    }
}

function CalculateAmountOnChexboxes(isChecked, OFFER_PACOVERS_ID)
{

    //////debugger;
    var DR = [];
    var RelatedDR = [];
    var BrokerRate = 0;
    var LO_AdditionalDatarow = [];
    var DR_ACCDeath = [];
    var LO_DRCoverSumInsured = [];
    var LO_DRTarif = [];
    var LO_DRTarif_Ext = [];
    var DRCoverRelatedCover = [];
    var DRRelatedCover = [];
    var LO_AdditionalTarifDatarow = [];
    var LO_DRCoverSumInsured_Related = [];
    var LO_DRTarif_Related = [];
    var LO_DRTarif_Related_Ext = [];
    var DRCoverRelatedCover2 = [];
    var LI_Prem = 0;

    LO_AdditionalDatarow = $.Enumerable.From(ko.mapping.toJS(_OFFER_PAOFFERS.PACovers()))
    .Where("$.OFFER_PACOVERS_ID  == 1 ")
    .ToArray();

    DR_ACCDeath = $.Enumerable.From(ko.mapping.toJS(_OFFER_PAOFFERS.PACovers()))
    .Where("$.OFFER_PACOVERS_ID  == 1 ")
    .ToArray();
    if (parseInt(DR_ACCDeath[0].CalculatedSumInsured) > 0) {
        ////////debugger;
        //$.unblockUI();
        //$.blockUI({
        //    css: {
        //        border: 'none',
        //        padding: '15px',
        //        backgroundColor: '#000',
        //        'border-radius': '10px',
        //        '-webkit-border-radius': '10px',
        //        '-moz-border-radius': '10px',
        //        opacity: .6,
        //        color: '#fff'
        //    }, overlayCSS: { backgroundColor: 'transparent' }, message: '<img src="../images/ajax-loader.gif" />'
        //});
        //setTimeout(function () { $.unblockUI() }, 3000);


        DR = $.Enumerable.From(ko.mapping.toJS(_OFFER_PAOFFERS.PACovers()))
        .Where("$.OFFER_PACOVERS_ID  == " + parseInt(OFFER_PACOVERS_ID.toString()) + "")
        .ToArray();

        LO_DRCoverSumInsured = $.Enumerable.From(ko.mapping.toJS(JSON.parse(sessionStorage.getItem('PACoverageSumInsured'))))
        .Where("$.OFFER_PACOVERS_ID  == " + parseInt(OFFER_PACOVERS_ID.toString()) + " && $.PlanID==" + parseInt(localStorage.getItem("PlanID").toString()))
        .ToArray();


        LO_DRTarif = $.Enumerable.From(ko.mapping.toJS(JSON.parse(sessionStorage.getItem('PATarif'))))
        .Where("$.OFFER_PACOVERS_ID  == " + parseInt(OFFER_PACOVERS_ID.toString()) + " && $.PlanID==" + parseInt(localStorage.getItem("PlanID").toString()) + " && $.OFFER_PACLASSES_ID==" + parseInt(localStorage.getItem("ClassID").toString()))
        .ToArray();

        DRCoverRelatedCover = $.Enumerable.From(ko.mapping.toJS(_OFFER_PAOFFERS.PACovers()))
        .Where("$.OFFER_PACOVERS_ID  == " + parseInt(DR[0].CoverRelatedCover.toString()) + "")
        .ToArray();

        if (LO_DRCoverSumInsured.length == 0 && parseInt(OFFER_PACOVERS_ID.toString()) > 6) {
            LO_DRCoverSumInsured = $.Enumerable.From(ko.mapping.toJS(JSON.parse(sessionStorage.getItem('PACoverageSumInsured'))))
          .Where("$.OFFER_PACOVERS_ID  == " + parseInt(DRCoverRelatedCover[0].OFFER_PACOVERS_ID.toString()) + " && $.PlanID==" + parseInt(localStorage.getItem("PlanID").toString()))
          .ToArray();
        }

        if (LO_DRTarif.length == 0 && parseInt(OFFER_PACOVERS_ID.toString()) > 6) {
            //'Death , war
            LO_DRTarif_Ext = $.Enumerable.From(ko.mapping.toJS(_OFFER_PAOFFERS.PACovers()))
           .Where("$.OFFER_PACOVERS_ID  == " + parseInt(OFFER_PACOVERS_ID.toString()) + "")
           .ToArray();
        }

        DRRelatedCover = $.Enumerable.From(ko.mapping.toJS(_OFFER_PAOFFERS.PACovers()))
        .Where("$.RelatedCover  == " + OFFER_PACOVERS_ID.toString() + "")
        .ToArray();

        if (isChecked != null && isChecked.toString().toUpperCase() == "TRUE") {
            if (parseInt(OFFER_PACOVERS_ID.toString()) == 5) {
                if (DRCoverRelatedCover[0].CalculatedSumInsured > 0) {
                    //Weekly Indemnity -WI
                    DR[0].BasicCover = 1;
                    UpdatePACoversGrid(DR);

                }
                else {
                    showToast("You Cannot Select This Cover Until You Check TPD Cover!", 'Error');
                    DR[0].BasicCover = 0;
                    UpdatePACoversGrid(DR);
                    ll_Exit = 1;
                    return;
                }

            }
            else {
                if (DRCoverRelatedCover[0].CalculatedSumInsured > 0) {
                    DR[0].BasicCover = 1;
                    if (parseInt(OFFER_PACOVERS_ID.toString()) == 2) {
                        //Check Additional Sum Insured if Checked
                        ////////debugger;
                        if (LO_AdditionalDatarow[0].AdditionalSumInsured.toString().toUpperCase() == "TRUE") {
                            //Which Means Additional Sum Insured Checkbox is Selected
                            DR[0].CalculatedSumInsured = parseInt(LO_DRCoverSumInsured[0].SumInsured.toString()) + 5000;
                            //Calculate The Premium
                            LO_AdditionalTarifDatarow = $.Enumerable.From(ko.mapping.toJS(JSON.parse(sessionStorage.getItem('PATarif'))))
                            .Where("$.OFFER_PACOVERS_ID  == 2  && $.PlanID== 1 && $.OFFER_PACLASSES_ID==1")
                            .ToArray();

                            DR[0].CalculatedPrem = parseInt(LO_DRTarif[0].Premium.toString()) + (parseInt(LO_AdditionalTarifDatarow[0].Premium.toString()) / 2);
                        }
                        else {
                            DR[0].CalculatedSumInsured = parseInt(LO_DRCoverSumInsured[0].SumInsured.toString());

                            if (LO_DRTarif.length == 0) {
                                DR[0].CalculatedPrem = Math.round(parseFloat(LO_DRTarif_Ext[0].Rate.ToString.Trim) * DR[0].CalculatedSumInsured);
                            }
                            else {
                                DR[0].CalculatedPrem = parseInt(LO_DRTarif[0].Premium.toString());
                            }
                        }
                    }
                    else if (parseInt(OFFER_PACOVERS_ID.toString()) == 7 || parseInt(OFFER_PACOVERS_ID.toString()) == 8) {
                        //Check Additional Sum Insured if Checked
                        if (LO_AdditionalDatarow[0].AdditionalSumInsured.toString().toUpperCase() == "TRUE") {
                            //Which Means Additional Sum Insured Checkbox is Selected
                            DR[0].CalculatedSumInsured = parseInt(LO_DRCoverSumInsured[0].SumInsured.toString()) + 5000;
                            //Calculate The Premium
                            DR[0].CalculatedPrem = Math.round(parseFloat(LO_DRTarif[0].Rate.toString()) * DR[0].CalculatedSumInsured);
                        }
                        else {
                            DR[0].CalculatedSumInsured = parseInt(LO_DRCoverSumInsured[0].SumInsured.toString());

                            if (LO_DRTarif.length == 0) {
                                DR[0].CalculatedPrem = Math.round(parseFloat(LO_DRTarif_Ext[0].Rate.toString()) * DR[0].CalculatedSumInsured);
                            }
                            else {
                                DR[0].CalculatedPrem = parseInt(LO_DRTarif[0].Premium.toString());
                            }
                        }

                    }
                    else {
                        if (LO_DRCoverSumInsured.length > 0) {
                            DR[0].CalculatedSumInsured = parseInt(LO_DRCoverSumInsured[0].SumInsured.toString());

                            if (LO_DRTarif.length == 0) {
                                DR[0].CalculatedPrem = Math.round(parseFloat(LO_DRTarif_Ext[0].Rate.toString()) * DR[0].CalculatedSumInsured);
                            }
                            else {
                                DR[0].CalculatedPrem = parseInt(LO_DRTarif[0].Premium.toString());
                            }
                        }
                    }

                    UpdatePACoversGrid(DR);

                    //Check if he has Related Cover and update them
                    if (DRRelatedCover.length > 0) {
                        ko.utils.arrayForEach(DRRelatedCover, function (item) {
                            ////////debugger;

                            LO_DRCoverSumInsured_Related = $.Enumerable.From(ko.mapping.toJS(JSON.parse(sessionStorage.getItem('PACoverageSumInsured'))))
                            .Where("$.OFFER_PACOVERS_ID  == " + parseInt(item.OFFER_PACOVERS_ID.toString()) + " && $.PlanID==" + parseInt(localStorage.getItem("PlanID").toString()))
                            .ToArray();

                            LO_DRTarif_Related = $.Enumerable.From(ko.mapping.toJS(JSON.parse(sessionStorage.getItem('PATarif'))))
                            .Where("$.OFFER_PACOVERS_ID  == " + item.OFFER_PACOVERS_ID.toString() + " && $.PlanID==" + parseInt(localStorage.getItem("PlanID").toString()) + " && $.OFFER_PACLASSES_ID==" + parseInt(localStorage.getItem("ClassID").toString()))
                            .ToArray();

                            if (LO_DRCoverSumInsured_Related.length == 0 && parseInt(item.OFFER_PACOVERS_ID.toString()) > 6) {
                                LO_DRCoverSumInsured_Related = $.Enumerable.From(ko.mapping.toJS(JSON.parse(sessionStorage.getItem('PACoverageSumInsured'))))
                                .Where("$.OFFER_PACOVERS_ID  == " + parseInt(item.CoverRelatedCover.toString()) + " && $.PlanID==" + parseInt(localStorage.getItem("PlanID").toString()))
                                .ToArray();
                            }

                            if (LO_DRTarif_Related.length == 0 && parseInt(item.OFFER_PACOVERS_ID.toString()) > 6) {
                                //Death , war ....
                                LO_DRTarif_Related_Ext = $.Enumerable.From(ko.mapping.toJS(_OFFER_PAOFFERS.PACovers()))
                                .Where("$.OFFER_PACOVERS_ID  == " + item.OFFER_PACOVERS_ID.toString() + "")
                                .ToArray();
                            }



                            item.BasicCover = 1;
                            ////////debugger;
                            if (LO_DRCoverSumInsured_Related.length > 0) {
                                if (parseInt(item.OFFER_PACOVERS_ID) == 3 || parseInt(item.OFFER_PACOVERS_ID) == 7 || parseInt(item.OFFER_PACOVERS_ID) == 8) {
                                    //Check Additional Sum Insured if Checked
                                    if (LO_AdditionalDatarow[0].AdditionalSumInsured.toString().toUpperCase() == "TRUE") {
                                        //Which Means Additional Sum Insured Checkbox is Selected
                                        item.CalculatedSumInsured = parseInt(LO_DRCoverSumInsured_Related[0].SumInsured.toString()) + 5000;
                                    }
                                    else {
                                        item.CalculatedSumInsured = parseInt(LO_DRCoverSumInsured_Related[0].SumInsured.toString());
                                    }
                                }
                                else {

                                    var LO_ParentDatarow = [];
                                    LO_ParentDatarow = $.Enumerable.From(ko.mapping.toJS(_OFFER_PAOFFERS.PACovers()))
                                    .Where("$.OFFER_PACOVERS_ID  ==4")
                                    .ToArray();
                                    if (parseInt(item.OFFER_PACOVERS_ID) > 6) {
                                        //if (LO_ParentDatarow[0].CalculatedSumInsured.toString() != "0") {
                                        item.CalculatedSumInsured = parseInt(LO_DRCoverSumInsured_Related[0].SumInsured.toString());
                                        //}
                                        //else {
                                        //    item.CalculatedSumInsured = 0;
                                        //}
                                    }
                                    else {
                                        item.CalculatedSumInsured = parseInt(LO_DRCoverSumInsured_Related[0].SumInsured.toString());
                                    }
                                }

                                ////////debugger;

                                if (LO_DRTarif_Related.length == 0) {
                                    item.CalculatedPrem = Math.round(parseFloat(LO_DRTarif_Related_Ext[0].Rate.toString()) * item.CalculatedSumInsured);
                                }
                                else {
                                    item.CalculatedPrem = parseInt(LO_DRTarif_Related[0].Premium.toString());
                                }
                            }

                        });
                        ////////debugger;
                        UpdatePACoversGrid(DRRelatedCover);
                    }
                }
                else {
                    showToast("You Cannot Select This Cover! Check Previous Covers.", 'Error');
                    DR[0].BasicCover = 0;
                    UpdatePACoversGrid(DR);
                    ll_Exit = 1;
                    return;

                }
            }

        }
        else {
            ////////debugger;
            _OFFER_PAOFFERS.IsTPDChecked(false);
            //Weekly Indemnity -WI
            if (parseInt(OFFER_PACOVERS_ID.toString()) == 5) {
                DR[0].BasicCover = 0
                DR[0].CalculatedSumInsured = 0
                DR[0].CalculatedPrem = 0

                UpdatePACoversGrid(DR);
                //Check if he has Related Cover and update them
                if (DRRelatedCover.length > 0) {
                    ko.utils.arrayForEach(DRRelatedCover, function (item) {
                        ////////debugger;
                        item.BasicCover = 0;
                        item.CalculatedSumInsured = 0;
                        item.CalculatedPrem = 0;
                    });

                    UpdatePACoversGrid(DRRelatedCover);
                }
            }
            else {
                DRCoverRelatedCover2 = $.Enumerable.From(ko.mapping.toJS(_OFFER_PAOFFERS.PACovers()))
                .Where("$.CoverRelatedCover  == " + parseInt(OFFER_PACOVERS_ID.toString()) + "")
                .ToArray();
                DR[0].BasicCover = 0;
                DR[0].CalculatedSumInsured = 0;
                DR[0].CalculatedPrem = 0;

                UpdatePACoversGrid(DR);
                //'Check if he has Related Cover and update them
                if (DRRelatedCover.length > 0) {
                    ko.utils.arrayForEach(DRRelatedCover, function (item) {
                        ////////debugger;
                        item.BasicCover = 0;
                        item.CalculatedSumInsured = 0;
                        item.CalculatedPrem = 0;
                    });

                    UpdatePACoversGrid(DRRelatedCover);
                }

                if (DRCoverRelatedCover2.length > 0) {
                    ko.utils.arrayForEach(DRCoverRelatedCover2, function (item) {
                        ////////debugger;
                        item.BasicCover = 0;
                        item.CalculatedSumInsured = 0;
                        item.CalculatedPrem = 0;
                    });
                    UpdatePACoversGrid(DRCoverRelatedCover2);
                }

                if (OFFER_PACOVERS_ID.toString() == 2)//TPD
                {
                    _OFFER_PAOFFERS.CalculatedWeeklyIndemnitySumInsured(null);
                }

            }
        }
    }
    else {
        ////////debugger;
        //setTimeout(function () { $(ChkPA).prop("checked", false).trigger("change"); }, 100);
        showToast("Please Select Accidental Death First.", 'Error');
        //var ChkPA = "#OFFER_PACOVERAGEDATA_ID_" + (parseInt(self.OFFER_PACOVERS_ID()) - 1).toString();
        ll_Exit = 1;
        return;
    }

}