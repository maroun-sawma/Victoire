//ko.cleanNode($("#ct_GetFireQuotation")[0]);
//////debugger;
/* Members */
/* --------------------------------------------------------------- */
sessionStorage.setItem('PartCondition_EN', "");
sessionStorage.setItem('PartCondition_AR', "");
//Fire Object
var TLM7OfferData = new Object();
TLM7OfferData.OFFER_LM7OFFERDATA_ID = 0;
TLM7OfferData.OfferCode = "F7";
TLM7OfferData.OfferNo = 0;
TLM7OfferData.InsuredName = "";
TLM7OfferData.InsuredAddress = "";
TLM7OfferData.FirstMobile = "";
TLM7OfferData.SecondMobile = "";
TLM7OfferData.InsuredMail = "";
TLM7OfferData.SubjectDesc = "";
TLM7OfferData.OFFER_INSURANCECLASSES_ID = 0;
TLM7OfferData.BrokerCode = MyApp_GVM.BROKERCODE();
TLM7OfferData.AgentCode =0;
TLM7OfferData.OfferDate = moment().format("YYYY-MM-DD");
TLM7OfferData.OfferPeriod = "One Year";
TLM7OfferData.TotRiders = 0;
TLM7OfferData.TotOptCovers = 0;
TLM7OfferData.ToBrokerName = "";
TLM7OfferData.ParticularConditions = "";
TLM7OfferData.BrokerRate = 0;
TLM7OfferData.ENTRY_USER_ID = MyApp_GVM.UserID();
TLM7OfferData.SUBUSERS_ID = 0;
TLM7OfferData.DisableSaveButton = false;
TLM7OfferData.EnablePrintButton = false;
TLM7OfferData.ll_ShowPremiumSection = false;
TLM7OfferData.TotalSumInsured = 0;
TLM7OfferData.MaxSumInsured = 0;
TLM7OfferData.InsClassDesc = "";
TLM7OfferData.language = "EN";
TLM7OfferData.LanguageVariant = "";
TLM7OfferData.PrintType = "";
TLM7OfferData.LoggedInEmail = "";
//Building Properties
TLM7OfferData.BuildingAmount = 0;
TLM7OfferData.BuildingValue = 0;
TLM7OfferData.BuildingSQM = 0;
TLM7OfferData.CalculatedSubCategoriesAmount = 0;
TLM7OfferData.IsVisible = false;
TLM7OfferData.CalculatedBuildingAmount = 0;
TLM7OfferData.CalculatedContentAmount = 0;
TLM7OfferData.CalculatedMonthlySalaries = 0;
TLM7OfferData.CalculatedTPLCLass = 0;
TLM7OfferData.TotalPremium = 0;

TLM7OfferData.ClothesAmount = 0;
TLM7OfferData.FurnitureAmount = 0;
TLM7OfferData.ElectricalAmount = 0;
TLM7OfferData.CarpetAmount = 0;
TLM7OfferData.DecorativeAmount = 0;
TLM7OfferData.ValuablesAmount = 0;


TLM7OfferData.LM7Covers = [];
TLM7OfferData.Clauses = [];
TLM7OfferData.WCCovers = [];
TLM7OfferData.TPLCovers = [];
TLM7OfferData.LM7Premium = [];
TLM7OfferData.MyFIRECOVERS_SUB_CATEGORIES_DATA = [];

var LM7Covers = [];
var WCCovers = [];
var TPLCovers = [];
var ll_Exit = 0;
var UserLang = "EN";// _UserInfo.LANG != "" && _UserInfo.LANG != null && _UserInfo.LANG.toString() != "null" ? _UserInfo.LANG.toString().toUpperCase() : "EN";
var labels = "";

var ArchitectDebris_Filtered = [];
var ArchitectDebris = new Object();
ArchitectDebris.SumInsValue = 0;
var _ArchitectDebris = ko.mapping.fromJS(ArchitectDebris);
MyApp_GVM.List_SubUser = ko.mapping.fromJS([]);

var FIRECOVERS_SUB_CATEGORIES_FILTERED = [];
var FIRECOVERS_SUB_CATEGORIES = [];
var _FIRECOVERS_SUB_CATEGORIES = ko.mapping.fromJS(FIRECOVERS_SUB_CATEGORIES);

// ---------------------------------------------------------------

// ----------------------------------------------------------------
var _Params_Get_FireOffer_Startup_Data = new Object();
_Params_Get_FireOffer_Startup_Data.OWNER_ID = 1;
// ----------------------------------------------------------------
var _Params_Get_FireOffer_Data_By_ClassID = new Object();
_Params_Get_FireOffer_Data_By_ClassID.OFFER_INSURANCECLASSES_ID = 0;
// ----------------------------------
///////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////
var _TLM7OfferData = ko.mapping.fromJS(TLM7OfferData);
///////////////////////////////////////////Policies Cost//////////////////////
var PremPolicyCost = 250;
var PolicyCostMore250 = 50;
var PolicyCostLessThan250 = 35;
var FourAdditionalHoursRate = 0.25;
var EightAdditionalHoursRate = 0.50;
var TwelveAdditionalHoursRate = 0.75;
var SixteenAdditionalHoursRate = 1;
var OneAdditionalDaysRate = 0.25;
var MinPremium = 50;
//////////////////////////////////////////////////////////////////////////////

//_TLM7OfferData.ISENABLED = ko.computed(function () {

//    if (_TLM7OfferData.OFFER_INSURANCECLASSES_ID() == null || _TLM7OfferData.OFFER_INSURANCECLASSES_ID() == undefined) {
//        return true;
//    }
//    else
//        return false;
//});


////////debugger;
// ---------------------------------------------------------------------------------------------------*/
var TLM7CoverData = function (_OFFER_LM7COVERDATA_ID, _OfferCode, _CoverSumInsRate, _CoverPremiumRate, _OFFER_LM7OFFERDATA_ID, _OFFER_LM7COVERS_ID, _CoverDesc_EN, _CoverDesc_AR, _CalculatedAmount,
    _CalculatedCoverAmount, _CalculatedRiders, _Deductible_EN, _Deductible_AR, _IsCoverGroupID, _IsRequired, _IsEnabled, _IsIncluded, _CovRelatedCover, _ToolTipDesc_EN, _ToolTipDesc_AR, _GroupCoverID,
    _CalculatedWCCLass, _CalculatedTPLCLass, _MinCoverAmount, _MaxCoverAmount, _DefaultCoverAmount, _DefaultCoverPremiumRate, _LM7Grid, _WCGrid, _TPLGrid, _CalculatedPrem, _IsAddedToSumIns, _EnableHelp) {
    //alert('test member family 1');
    ////////debugger;
    var self = this;
    self.OFFER_LM7COVERDATA_ID = _OFFER_LM7COVERDATA_ID;
    self.OfferCode = ko.observable(_OfferCode).extend({ required: true });
    self.CoverSumInsRate = ko.observable(_CoverSumInsRate).extend({ required: true });
    self.CoverPremiumRate = ko.observable(_CoverPremiumRate).extend({ required: true });
    self.OFFER_LM7OFFERDATA_ID = ko.observable(_OFFER_LM7OFFERDATA_ID).extend({ required: true });
    self.OFFER_LM7COVERS_ID = ko.observable(_OFFER_LM7COVERS_ID).extend({ required: true });
    self.CoverDesc_EN = ko.observable(_CoverDesc_EN).extend({ required: true });
    self.CoverDesc_AR = ko.observable(_CoverDesc_AR).extend({ required: true });
    self.CalculatedAmount = ko.observable(_CalculatedAmount).extend({ required: true, maxlength: 10 });
    self.CalculatedCoverAmount = ko.observable(_CalculatedCoverAmount).extend({ required: true });
    self.CalculatedRiders = ko.observable(_CalculatedRiders).extend({ required: true });
    self.Deductible_EN = ko.observable(_Deductible_EN).extend({ required: true });
    self.Deductible_AR = ko.observable(_Deductible_AR).extend({ required: true });
    self.IsCoverGroupID = ko.observable(_IsCoverGroupID).extend({ required: true });
    self.IsRequired = ko.observable(_IsRequired).extend({ required: true });
    self.IsEnabled = ko.observable(_IsEnabled);
    self.IsIncluded = ko.observable(_IsIncluded);
    self.CovRelatedCover = ko.observable(_CovRelatedCover);
    self.ToolTipDesc_EN = ko.observable(_ToolTipDesc_EN);
    self.ToolTipDesc_AR = ko.observable(_ToolTipDesc_AR);
    self.GroupCoverID = ko.observable(_GroupCoverID);
    self.CalculatedWCCLass = ko.observable(_CalculatedWCCLass);
    self.CalculatedTPLCLass = ko.observable(_CalculatedTPLCLass);

    self.MinCoverAmount = ko.observable(_MinCoverAmount);
    self.MaxCoverAmount = ko.observable(_MaxCoverAmount);
    self.DefaultCoverAmount = ko.observable(_DefaultCoverAmount);
    self.DefaultCoverPremiumRate = ko.observable(_DefaultCoverPremiumRate);
    self.LM7Grid = ko.observable(_LM7Grid);
    self.WCGrid = ko.observable(_WCGrid);
    self.TPLGrid = ko.observable(_TPLGrid);
    self.CalculatedPrem = ko.observable(_CalculatedPrem);
    self.IsAddedToSumIns = ko.observable(_IsAddedToSumIns);
    self.EnableHelp = ko.observable(_EnableHelp);

    self._LM7_Errors = ko.validation.group(self); // USED FOR KO VALIDATION //
};
/*---------------------------------------------------------------------------------------------------*/
// ----------------------------------
var TWCCoverData = function (_OFFER_LM7COVERDATA_ID, _OfferCode, _CoverSumInsRate, _CoverPremiumRate, _OFFER_LM7OFFERDATA_ID, _OFFER_LM7COVERS_ID, _CoverDesc_EN, _CoverDesc_AR, _CalculatedAmount, _CalculatedCoverAmount, _CalculatedRiders, _Deductible_EN, _Deductible_AR,
                      _IsCoverGroupID, _IsRequired, _IsEnabled, _IsIncluded, _CovRelatedCover, _ToolTipDesc_EN, _ToolTipDesc_AR, _GroupCoverID, _CalculatedWCCLass, _CalculatedTPLCLass, _MinCoverAmount, _MaxCoverAmount, _DefaultCoverAmount, _DefaultCoverPremiumRate, _LM7Grid, _WCGrid, _TPLGrid, _CalculatedPrem, _IsAddedToSumIns, _EnableHelp) {
    //alert('test member family 1');
    ////////debugger;
    var self = this;
    self.OFFER_LM7COVERDATA_ID = _OFFER_LM7COVERDATA_ID;
    self.OfferCode = ko.observable(_OfferCode).extend({ required: true });
    self.CoverSumInsRate = ko.observable(_CoverSumInsRate).extend({ required: true });
    self.CoverPremiumRate = ko.observable(_CoverPremiumRate).extend({ required: true });
    self.OFFER_LM7OFFERDATA_ID = ko.observable(_OFFER_LM7OFFERDATA_ID).extend({ required: true });
    self.OFFER_LM7COVERS_ID = ko.observable(_OFFER_LM7COVERS_ID).extend({ required: true });
    self.CoverDesc_EN = ko.observable(_CoverDesc_EN).extend({ required: true });
    self.CoverDesc_AR = ko.observable(_CoverDesc_AR).extend({ required: true });
    self.CalculatedAmount = ko.observable(_CalculatedAmount).extend({ required: false, digits: true, maxlength: 10, min: 0, max: 1000000000 });
    self.CalculatedCoverAmount = ko.observable(_CalculatedCoverAmount).extend({ required: true });
    self.CalculatedRiders = ko.observable(_CalculatedRiders).extend({ required: false, digits: true, maxlength: 10, min: 0, max: 1000000000 });
    self.Deductible_EN = ko.observable(_Deductible_EN).extend({ required: true });
    self.Deductible_AR = ko.observable(_Deductible_AR).extend({ required: true });
    self.IsCoverGroupID = ko.observable(_IsCoverGroupID).extend({ required: true });
    self.IsRequired = ko.observable(_IsRequired).extend({ required: true });

    self.IsEnabled = ko.observable(_IsEnabled);
    self.IsIncluded = ko.observable(_IsIncluded);
    self.CovRelatedCover = ko.observable(_CovRelatedCover);
    self.ToolTipDesc_EN = ko.observable(_ToolTipDesc_EN);
    self.ToolTipDesc_AR = ko.observable(_ToolTipDesc_AR);
    self.GroupCoverID = ko.observable(_GroupCoverID);
    self.CalculatedWCCLass = ko.observable(_CalculatedWCCLass);

    self.CalculatedTPLCLass = ko.observable(_CalculatedTPLCLass);

    self.MinCoverAmount = ko.observable(_MinCoverAmount);
    self.MaxCoverAmount = ko.observable(_MaxCoverAmount);
    self.DefaultCoverAmount = ko.observable(_DefaultCoverAmount);
    self.DefaultCoverPremiumRate = ko.observable(_DefaultCoverPremiumRate);
    self.LM7Grid = ko.observable(_LM7Grid);
    self.WCGrid = ko.observable(_WCGrid);
    self.TPLGrid = ko.observable(_TPLGrid);
    self.CalculatedPrem = ko.observable(_CalculatedPrem);
    self.IsAddedToSumIns = ko.observable(_IsAddedToSumIns);
    self.EnableHelp = ko.observable(_EnableHelp);

    self._WC_Errors = ko.validation.group(self); // USED FOR KO VALIDATION //
};
/*---------------------------------------------------------------------------------------------------*/
// ----------------------------------
var TTPLCoverData = function (_OFFER_LM7COVERDATA_ID, _OfferCode, _CoverSumInsRate, _CoverPremiumRate, _OFFER_LM7OFFERDATA_ID, _OFFER_LM7COVERS_ID, _CoverDesc_EN, _CoverDesc_AR, _CalculatedAmount, _CalculatedCoverAmount, _CalculatedRiders, _Deductible_EN, _Deductible_AR,
                      _IsCoverGroupID, _IsRequired, _IsEnabled, _IsIncluded, _CovRelatedCover, _ToolTipDesc_EN, _ToolTipDesc_AR, _GroupCoverID, _CalculatedWCCLass, _CalculatedTPLCLass, _MinCoverAmount, _MaxCoverAmount, _DefaultCoverAmount, _DefaultCoverPremiumRate, _LM7Grid, _WCGrid, _TPLGrid, _CalculatedPrem, _IsAddedToSumIns, _EnableHelp) {
    //alert('test member family 1');
    ////////debugger;
    var self = this;
    self.OFFER_LM7COVERDATA_ID = _OFFER_LM7COVERDATA_ID;
    self.OfferCode = ko.observable(_OfferCode).extend({ required: true });
    self.CoverSumInsRate = ko.observable(_CoverSumInsRate).extend({ required: true });
    self.CoverPremiumRate = ko.observable(_CoverPremiumRate).extend({ required: true });
    self.OFFER_LM7OFFERDATA_ID = ko.observable(_OFFER_LM7OFFERDATA_ID).extend({ required: true });
    self.OFFER_LM7COVERS_ID = ko.observable(_OFFER_LM7COVERS_ID).extend({ required: true });
    self.CoverDesc_EN = ko.observable(_CoverDesc_EN).extend({ required: true });
    self.CoverDesc_AR = ko.observable(_CoverDesc_AR).extend({ required: true });
    self.CalculatedAmount = ko.observable(_CalculatedAmount).extend({ required: false });
    self.CalculatedCoverAmount = ko.observable(_CalculatedCoverAmount).extend({ required: true });
    self.CalculatedRiders = ko.observable(_CalculatedRiders).extend({ required: true });
    self.Deductible_EN = ko.observable(_Deductible_EN).extend({ required: true });
    self.Deductible_AR = ko.observable(_Deductible_AR).extend({ required: true });
    self.IsCoverGroupID = ko.observable(_IsCoverGroupID).extend({ required: true });
    self.IsRequired = ko.observable(_IsRequired).extend({ required: true });
    self.IsEnabled = ko.observable(_IsEnabled);
    self.IsIncluded = ko.observable(_IsIncluded);
    self.CovRelatedCover = ko.observable(_CovRelatedCover);
    self.ToolTipDesc_EN = ko.observable(_ToolTipDesc_EN);
    self.ToolTipDesc_AR = ko.observable(_ToolTipDesc_AR);
    self.GroupCoverID = ko.observable(_GroupCoverID);
    self.CalculatedWCCLass = ko.observable(_CalculatedWCCLass);
    self.CalculatedTPLCLass = ko.observable(_CalculatedTPLCLass).extend({ required: true, digits: true, maxlength: 1, min: 0, max: 9 });

    self.MinCoverAmount = ko.observable(_MinCoverAmount);
    self.MaxCoverAmount = ko.observable(_MaxCoverAmount);
    self.DefaultCoverAmount = ko.observable(_DefaultCoverAmount);
    self.DefaultCoverPremiumRate = ko.observable(_DefaultCoverPremiumRate);
    self.LM7Grid = ko.observable(_LM7Grid);
    self.WCGrid = ko.observable(_WCGrid);
    self.TPLGrid = ko.observable(_TPLGrid);
    self.CalculatedPrem = ko.observable(_CalculatedPrem);
    self.IsAddedToSumIns = ko.observable(_IsAddedToSumIns);
    self.EnableHelp = ko.observable(_EnableHelp);

    self._TPL_Errors = ko.validation.group(self); // USED FOR KO VALIDATION //
};
/*---------------------------------------------------------------------------------------------------*/
// ----------------------------------
var TLM7ClausesData = function (_OFFER_DATACLAUSES_ID, _OfferCode, _OFFER_LM7OFFERDATA_ID, _OFFER_FIRECLAUSES_ID, _ClauseDesc_EN, _ClauseDesc_AR) {
    //alert('test member family 1');
    ////////debugger;
    var self = this;
    self.OFFER_DATACLAUSES_ID = _OFFER_DATACLAUSES_ID;
    self.OfferCode = ko.observable(_OfferCode).extend({ required: true });
    self.OFFER_LM7OFFERDATA_ID = ko.observable(_OFFER_LM7OFFERDATA_ID);
    self.OFFER_FIRECLAUSES_ID = ko.observable(_OFFER_FIRECLAUSES_ID);
    self.ClauseDesc_EN = ko.observable(_ClauseDesc_EN);
    self.ClauseDesc_AR = ko.observable(_ClauseDesc_AR);
    self._Clauses_Errors = ko.validation.group(self); // USED FOR KO VALIDATION //
};
/*---------------------------------------------------------------------------------------------------*/
// ----------------------------------
var TLM7PremiumData = function (_OFFER_LM7COVERPREMIUM_ID, _OfferCode, _OFFER_LM7OFFERDATA_ID, _LM7Policy_EN, _LM7Policy_AR, _TotalUS, _Rate, _Premium) {
    //alert('test member family 1');
    ////////debugger;
    var self = this;
    self.OFFER_LM7COVERPREMIUM_ID = _OFFER_LM7COVERPREMIUM_ID;
    self.OfferCode = ko.observable(_OfferCode).extend({ required: true });
    self.OFFER_LM7OFFERDATA_ID = ko.observable(_OFFER_LM7OFFERDATA_ID);
    self.LM7Policy_EN = ko.observable(_LM7Policy_EN);
    self.LM7Policy_AR = ko.observable(_LM7Policy_AR);
    self.TotalUS = ko.observable(_TotalUS);
    self.TotalUS.subscribe(function (newVal) {
        //alert('11');
        ////////debugger;
        if (newVal != null && newVal != 0) {
            /* ---------------- */
            var InsuranceClassRow = [];
            InsuranceClassRow = $.Enumerable.From(ko.mapping.toJS(MyApp_GVM.List_FireClasses))
            .Where("$.OFFER_INSURANCECLASSES_ID  == " + parseInt(_TLM7OfferData.OFFER_INSURANCECLASSES_ID().toString()) + "")
            .ToArray();
            if (parseFloat(newVal.toString()) > parseFloat(InsuranceClassRow[0].MaxTotSumIns.toString())) {
                jq_DisplayMessage("MSG_GeneralError", "", 'Sum Insured Exceeds' + ' ' + InsuranceClassRow[0].MaxTotSumIns.toString() + '. Please Reduce Your Sum Insured!');
                ll_Exit = 1;
                return;
            }

        }
    });
    self.Rate = ko.observable(_Rate);
    self.Premium = ko.observable(_Premium);
    self._Premium_Errors = ko.validation.group(self); // USED FOR KO VALIDATION //
};
/*---------------------------------------------------------------------------------------------------*/


MyApp_GVM.List_FireClasses = ko.mapping.fromJS([]);
MyApp_GVM.List_FireClasses_Filtered = ko.mapping.fromJS([]);
MyApp_GVM.List_SubUsers = ko.mapping.fromJS([]);
MyApp_GVM.List_PreviousOffers = ko.mapping.fromJS([]);
MyApp_GVM.List_BuildingType = ko.mapping.fromJS([]);

var List_TPLAmount = [{"WCClasseCode": "0", "SumInsured": "Select An Amount" }, {"WCClasseCode": "1", "SumInsured": "Sum. of 2500$" }, { "WCClasseCode": "2", "SumInsured": "Sum. of 5000$" }, { "WCClasseCode": "3", "SumInsured": "Sum. of 7500$" }, { "WCClasseCode": "4", "SumInsured": "Sum. of 10000$" }];
MyApp_GVM.List_TPLAmount = ko.mapping.fromJS(List_TPLAmount);

var _Params_Clone_Offre = new Object();
_Params_Clone_Offre.OWNER_ID = 1;

// ------------------------------------------------------------

// -----------------------------------------------------------
_TLM7OfferData.BuildingValue.subscribe(function (newVal) {
    ////////debugger;
    if (_TLM7OfferData.LM7Covers().length > 0) {


        switch (_TLM7OfferData.language()) {
            case "EN":
                return _TLM7OfferData.BuildingAmount('Building Amount >>>' + $.number(Math.round(parseFloat(_TLM7OfferData.BuildingSQM().toString()) * parseFloat(_TLM7OfferData.BuildingValue()))) + '$');
                break;
            case "AR":
                return _TLM7OfferData.BuildingAmount('المبلغ العام >>>' + $.number(Math.round(parseFloat(_TLM7OfferData.BuildingSQM().toString()) * parseFloat(_TLM7OfferData.BuildingValue()))) + '$');
                break;
            default:
                return _TLM7OfferData.BuildingAmount('Building Amount >>>' + $.number(Math.round(parseFloat(_TLM7OfferData.BuildingSQM().toString()) * parseFloat(_TLM7OfferData.BuildingValue()))) + '$');
                break;
        }
    }


});

_TLM7OfferData.BuildingSQM.subscribe(function (newVal) {
    ////////debugger;
    if (_TLM7OfferData.LM7Covers().length > 0) {
        if (_TLM7OfferData.BuildingValue() != undefined) {
            ////////debugger;
            $("#CalculatedBuildingAmount").val(Math.round(parseFloat(_TLM7OfferData.BuildingSQM().toString()) * parseFloat(_TLM7OfferData.BuildingValue()))).trigger("change");

        }

        switch (_TLM7OfferData.language()) {
            case "EN":
                return _TLM7OfferData.BuildingAmount('Building Amount >>>' + $.number(Math.round(parseFloat(_TLM7OfferData.BuildingSQM().toString()) * parseFloat(_TLM7OfferData.BuildingValue()))) + '$');
                break;
            case "AR":
                return _TLM7OfferData.BuildingAmount('المبلغ العام >>>' + $.number(Math.round(parseFloat(_TLM7OfferData.BuildingSQM().toString()) * parseFloat(_TLM7OfferData.BuildingValue()))) + '$');
                break;
            default:
                return _TLM7OfferData.BuildingAmount('Building Amount >>>' + $.number(Math.round(parseFloat(_TLM7OfferData.BuildingSQM().toString()) * parseFloat(_TLM7OfferData.BuildingValue()))) + '$');
                break;
        }
    }


});
// ------------------------------------------------------------
// ------------------------------------------------------------
_TLM7OfferData.CalculatedBuildingAmount.subscribe(function (newVal) {
    var DR = [];
    var SRCCDatarow = [];
    var LL_IsAmountChanged = false;
    var OFFER_LM7COVERS_ID = 1;
    // alert('11');
    ////debugger;
    //if (newVal != undefined)
    //{
    //    var n = newVal.indexOf(",");
    //    if (n > 0) {
    //        newVal = newVal.toString().replace(/,/g, "");
    //    }
    //}

    if ($.isNumeric(newVal)) {
        ////////debugger;
        jq_HideMobileLoaderAdv("pg_GetFireQuotation");
        jq_ShowMobileLoaderAdv("pg_GetFireQuotation");
        setTimeout(function () { jq_HideMobileLoaderAdv("pg_GetFireQuotation"); }, 3000);

        //if ($.isNumeric(newVal) && newVal != null && newVal != 0) {
        //    //alert('111');
        //    $.number(newVal);
        //    self.CalculatedAmount($.number(newVal))
        //    /* ---------------- */
        //}
        //if the Amount Changed it's a Building or Content
        if (parseInt(OFFER_LM7COVERS_ID.toString()) == 1 || parseInt(OFFER_LM7COVERS_ID.toString()) == 3) {
            //alert('content');
            ////////debugger;
            DR = $.Enumerable.From(ko.mapping.toJS(_TLM7OfferData.LM7Covers()))
                    .Where("$.CovRelatedCover == '" + OFFER_LM7COVERS_ID.toString() + "' && $.IsIncluded==1 && $.IsRequired==1")
                    .ToArray();

            SRCCDatarow = $.Enumerable.From(ko.mapping.toJS(_TLM7OfferData.LM7Covers()))
                    .Where("$.OFFER_LM7COVERS_ID >=28 && $.OFFER_LM7COVERS_ID <=29 ")
                    .ToArray();
            ko.utils.arrayForEach(SRCCDatarow, function (item) {
                ////////debugger;
                item.IsRequired = 0;
                item.CalculatedAmount = 0;
                item.CalculatedCoverAmount = 0;
            });
            //////////////////////////////////Update TLM7OfferData.LM7Covers //////////////////////////////////////////////////////////
            UpdateFireCovers(SRCCDatarow);
            //////////////////////////////////Update TLM7OfferData.LM7Covers //////////////////////////////////////////////////////////
        }
        else {
            DR = $.Enumerable.From(ko.mapping.toJS(_TLM7OfferData.LM7Covers()))
                    .Where("$.OFFER_LM7COVERS_ID == " + OFFER_LM7COVERS_ID.toString() + "")
                    .ToArray();
            LL_IsAmountChanged = true;
        }

        ko.utils.arrayForEach(DR, function (item) {
            ////////debugger;
            //Check if it's a group ID                 'Check if it's not an optional Cover   'Check if it's an included Cover
            if (item.IsCoverGroupID.toString() == "true" || item.IsRequired.toString() == "false" || item.IsIncluded.toString() == "false") {
                return;
            }
            else if (item.OFFER_LM7COVERS_ID.toString() == item.CovRelatedCover.toString()) {
                item.CalculatedAmount = newVal;
                item.CalculatedCoverAmount = newVal;
            }
                //check if it's Architect fees or Removal of debris
            else if (parseInt(item.OFFER_LM7COVERS_ID.toString()) == 4 || parseInt(item.OFFER_LM7COVERS_ID.toString()) == 5) {
                //This is Architect Fees Cover And Removal of Debris
                if (parseInt(newVal.toString()) > 0 && parseInt(item.CalculatedCoverAmount.toString()) == 0) {
                    ArchitectDebris_Filtered = $.Enumerable.From(ko.mapping.toJS(JSON.parse(sessionStorage.getItem('ArchitectDebris'))))
                    .Where("$.FromRange <=" + parseInt(newVal.toString()) + " && $.ToRange >=" + parseInt(newVal.toString()) + " && $.OFFER_LM7COVERS_ID==" + parseInt(item.OFFER_LM7COVERS_ID.toString()) + " && $.InsuranceCateg=='F7'")
                    .ToArray();
                    ko.mapping.fromJS(ArchitectDebris_Filtered[0], _ArchitectDebris);

                    item.CalculatedAmount = _ArchitectDebris.SumInsValue();
                    item.CalculatedCoverAmount = _ArchitectDebris.SumInsValue();
                }
                else if (parseInt(DR[0].CalculatedAmount.toString()) > 0 && parseInt(DR[0].CalculatedCoverAmount.toString()) > 0 && LL_IsAmountChanged == true) {
                    if (newVal.toString() != "0") {
                        item.CalculatedAmount = parseInt(newVal.toString());
                    }
                    else {
                        item.CalculatedAmount = newVal;
                        item.CalculatedCoverAmount = newVal;

                    }

                }

                else if (parseInt(OFFER_LM7COVERS_ID.toString()) == 3 && parseInt(newVal.toString()) > 0) {
                    ArchitectDebris_Filtered = $.Enumerable.From(ko.mapping.toJS(JSON.parse(sessionStorage.getItem('ArchitectDebris'))))
                    .Where("$.FromRange <=" + parseInt(newVal.toString()) + " && $.ToRange >=" + parseInt(newVal.toString()) + " && $.OFFER_LM7COVERS_ID==" + parseInt(item.OFFER_LM7COVERS_ID.toString()) + " && $.InsuranceCateg=='F7'")
                    .ToArray();
                    ko.mapping.fromJS(ArchitectDebris_Filtered[0], _ArchitectDebris);

                    item.CalculatedAmount = _ArchitectDebris.SumInsValue();
                    item.CalculatedCoverAmount = _ArchitectDebris.SumInsValue();
                }
                else {
                    item.CalculatedAmount = 0;
                    item.CalculatedCoverAmount = 0;
                }
            }
            else if (parseInt(DR[0].CalculatedAmount.toString()) > 0 && parseInt(DR[0].CalculatedCoverAmount.toString()) > 0 && LL_IsAmountChanged == true) {
                if (parseInt(OFFER_LM7COVERS_ID.toString()) != 28 && parseInt(OFFER_LM7COVERS_ID.toString()) != 29) {
                    item.CalculatedAmount = parseInt(newVal.toString().replace(",", ""));
                }
                if (parseInt(newVal.toString()) > 0) {
                    if (parseInt(OFFER_LM7COVERS_ID.toString()) == 28 || parseInt(OFFER_LM7COVERS_ID.toString()) == 29 || parseInt(OFFER_LM7COVERS_ID.toString()) == 2 || parseInt(OFFER_LM7COVERS_ID.toString()) == 6 || parseInt(OFFER_LM7COVERS_ID.toString()) == 7 || parseInt(OFFER_LM7COVERS_ID.toString()) == 8) {
                        item.CalculatedAmount = parseInt(newVal.toString().replace(",", ""));
                    }

                }
                else {
                    if (parseInt(OFFER_LM7COVERS_ID.toString()) == 28 || parseInt(OFFER_LM7COVERS_ID.toString()) == 29 || parseInt(OFFER_LM7COVERS_ID.toString()) == 2 || parseInt(OFFER_LM7COVERS_ID.toString()) == 6 || parseInt(OFFER_LM7COVERS_ID.toString()) == 7 || parseInt(OFFER_LM7COVERS_ID.toString()) == 8) {
                        item.CalculatedAmount = parseInt(newVal.toString().replace(",", ""));
                        item.CalculatedCoverAmount = parseInt(newVal.toString().replace(",", ""));
                    }
                }
            }
            else {
                if (parseInt(item.CoverSumInsRate.toString()) == 0 && parseInt(item.DefaultCoverAmount.toString()) > 0) {
                    if (parseInt(newVal.toString().replace(",", "")) > 0) {
                        item.CalculatedAmount = item.DefaultCoverAmount;
                        item.CalculatedCoverAmount = item.DefaultCoverAmount;
                    }
                    else {
                        item.CalculatedAmount = 0;
                        item.CalculatedCoverAmount = 0;
                    }

                }
                else {
                    if (item.CovRelatedCover.toString().length > 0 && item.CovRelatedCover != null) {   //'Check If the Related cover contains / which mean it's the summation of 2 covers
                        if (item.CovRelatedCover.toString().indexOf("/") > 0) {
                            var FirstDR = [];
                            var SecondDR = [];
                            var TotalSum = 0;
                            var res = item.CovRelatedCover.toString().split("/");
                            FirstDR = $.Enumerable.From(DR)
                                .Where("$.OFFER_LM7COVERS_ID == " + res[0] + "")
                                .ToArray();
                            SecondDR = $.Enumerable.From(DR)
                                .Where("$.OFFER_LM7COVERS_ID == " + res[1] + "")
                                .ToArray();
                            TotalSum = parseFloat(FirstDR[0].CalculatedCoverAmount) + parseFloat(SecondDR[0].CalculatedCoverAmount);
                            //Check if It's Allied Perils multiply by insurance Classe Rate "F7BrokerRate" Math.round
                            if (parseInt(item.GroupCoverID.toString()) == 9) {
                                item.CalculatedAmount = Math.round(item.CoverSumInsRate * TotalSum);
                                item.CalculatedCoverAmount = Math.round(item.CoverSumInsRate * TotalSum);
                            }
                            else {
                                item.CalculatedAmount = Math.round(item.CoverSumInsRate * TotalSum);
                                item.CalculatedCoverAmount = Math.round(item.CoverSumInsRate * TotalSum);
                            }

                        }
                        else {
                            ////////debugger;
                            var ThirdDR = [];
                            ThirdDR = $.Enumerable.From(DR)
                                        .Where("$.OFFER_LM7COVERS_ID == " + item.CovRelatedCover + "")
                                        .ToArray();

                            if (ThirdDR[0].CalculatedCoverAmount.toString().indexOf(",") > 0) {
                                ThirdDR[0].CalculatedCoverAmount = ThirdDR[0].CalculatedCoverAmount.toString().replace(",", "");
                            }
                            if (parseInt(item.GroupCoverID.toString()) == 9) {
                                item.CalculatedAmount = Math.round((item.CoverSumInsRate * parseFloat(ThirdDR[0].CalculatedCoverAmount)) / 1000) * 1000;
                                item.CalculatedCoverAmount = Math.round((item.CoverSumInsRate * parseFloat(ThirdDR[0].CalculatedCoverAmount)) / 1000) * 1000;
                            }
                            else {
                                item.CalculatedAmount = Math.round((item.CoverSumInsRate * parseFloat(ThirdDR[0].CalculatedCoverAmount)) / 1000) * 1000;
                                item.CalculatedCoverAmount = Math.round((item.CoverSumInsRate * parseFloat(ThirdDR[0].CalculatedCoverAmount)) / 1000) * 1000;
                            }
                        }

                    }
                }
            }
        });
    }

    else {
        //var n = newVal.indexOf(",");
        //if (n > 0) {
        //    //do nothing
        //    return;
        //}
        //else {
            showToast('Amount Value Should be Numeric!', 'fail');
            ll_Exit = 1;
            _TLM7OfferData.CalculatedBuildingAmount(0);
            return;
        //}

    }

    UpdateFireCovers(DR);

    //Calculare FirePremium Grid
    setTimeout(function () { CalculateFirePrem() }, 1000);
});
// ------------------------------------------------------------
// ------------------------------------------------------------
_TLM7OfferData.CalculatedContentAmount.subscribe(function (newVal) {
    var DR = [];
    var SRCCDatarow = [];
    var LL_IsAmountChanged = false;
    var OFFER_LM7COVERS_ID = 3;
    // alert('11');
    ////debugger;
    //if (newVal != undefined)
    //{
    //    var n = newVal.indexOf(",");
    //    if (n > 0) {
    //        newVal = newVal.toString().replace(/,/g, "");
    //    }
    //}
    if ($.isNumeric(newVal)) {
        ////////debugger;
        jq_HideMobileLoaderAdv("pg_GetFireQuotation");
        jq_ShowMobileLoaderAdv("pg_GetFireQuotation");
        setTimeout(function () { jq_HideMobileLoaderAdv("pg_GetFireQuotation"); }, 3000);

        //if ($.isNumeric(newVal) && newVal != null && newVal != 0) {
        //    //alert('111');
        //    $.number(newVal);
        //    self.CalculatedAmount($.number(newVal))
        //    /* ---------------- */
        //}
        //if the Amount Changed it's a Building or Content
        if (parseInt(OFFER_LM7COVERS_ID.toString()) == 1 || parseInt(OFFER_LM7COVERS_ID.toString()) == 3) {
            //alert('content');
            ////////debugger;
            DR = $.Enumerable.From(ko.mapping.toJS(_TLM7OfferData.LM7Covers()))
                    .Where("$.CovRelatedCover == '" + OFFER_LM7COVERS_ID.toString() + "' && $.IsIncluded==1 && $.IsRequired==1")
                    .ToArray();

            SRCCDatarow = $.Enumerable.From(ko.mapping.toJS(_TLM7OfferData.LM7Covers()))
                    .Where("$.OFFER_LM7COVERS_ID >=28 && $.OFFER_LM7COVERS_ID <=29 ")
                    .ToArray();
            ko.utils.arrayForEach(SRCCDatarow, function (item) {
                ////////debugger;
                item.IsRequired = 0;
                item.CalculatedAmount = 0;
                item.CalculatedCoverAmount = 0;
            });
            //////////////////////////////////Update TLM7OfferData.LM7Covers //////////////////////////////////////////////////////////
            UpdateFireCovers(SRCCDatarow);
            //////////////////////////////////Update TLM7OfferData.LM7Covers //////////////////////////////////////////////////////////
        }
        else {
            DR = $.Enumerable.From(ko.mapping.toJS(_TLM7OfferData.LM7Covers()))
                    .Where("$.OFFER_LM7COVERS_ID == " + OFFER_LM7COVERS_ID.toString() + "")
                    .ToArray();
            LL_IsAmountChanged = true;
        }

        ko.utils.arrayForEach(DR, function (item) {
            ////////debugger;
            //Check if it's a group ID                 'Check if it's not an optional Cover   'Check if it's an included Cover
            if (item.IsCoverGroupID.toString() == "true" || item.IsRequired.toString() == "false" || item.IsIncluded.toString() == "false") {
                return;
            }
            else if (item.OFFER_LM7COVERS_ID.toString() == item.CovRelatedCover.toString()) {
                item.CalculatedAmount = newVal;
                item.CalculatedCoverAmount = newVal;
            }
                //check if it's Architect fees or Removal of debris
            else if (parseInt(item.OFFER_LM7COVERS_ID.toString()) == 4 || parseInt(item.OFFER_LM7COVERS_ID.toString()) == 5) {
                //This is Architect Fees Cover And Removal of Debris
                if (parseInt(newVal.toString()) > 0 && parseInt(item.CalculatedCoverAmount.toString()) == 0) {
                    ArchitectDebris_Filtered = $.Enumerable.From(ko.mapping.toJS(JSON.parse(sessionStorage.getItem('ArchitectDebris'))))
                    .Where("$.FromRange <=" + parseInt(newVal.toString()) + " && $.ToRange >=" + parseInt(newVal.toString()) + " && $.OFFER_LM7COVERS_ID==" + parseInt(item.OFFER_LM7COVERS_ID.toString()) + " && $.InsuranceCateg=='F7'")
                    .ToArray();
                    ko.mapping.fromJS(ArchitectDebris_Filtered[0], _ArchitectDebris);

                    item.CalculatedAmount = _ArchitectDebris.SumInsValue();
                    item.CalculatedCoverAmount = _ArchitectDebris.SumInsValue();
                }
                else if (parseInt(DR[0].CalculatedAmount.toString()) > 0 && parseInt(DR[0].CalculatedCoverAmount.toString()) > 0 && LL_IsAmountChanged == true) {
                    if (newVal.toString() != "0") {
                        item.CalculatedAmount = parseInt(newVal.toString());
                    }
                    else {
                        item.CalculatedAmount = newVal;
                        item.CalculatedCoverAmount = newVal;

                    }

                }

                else if (parseInt(OFFER_LM7COVERS_ID.toString()) == 3 && parseInt(newVal.toString()) > 0) {
                    ArchitectDebris_Filtered = $.Enumerable.From(ko.mapping.toJS(JSON.parse(sessionStorage.getItem('ArchitectDebris'))))
                    .Where("$.FromRange <=" + parseInt(newVal.toString()) + " && $.ToRange >=" + parseInt(newVal.toString()) + " && $.OFFER_LM7COVERS_ID==" + parseInt(item.OFFER_LM7COVERS_ID.toString()) + " && $.InsuranceCateg=='F7'")
                    .ToArray();
                    ko.mapping.fromJS(ArchitectDebris_Filtered[0], _ArchitectDebris);

                    item.CalculatedAmount = _ArchitectDebris.SumInsValue();
                    item.CalculatedCoverAmount = _ArchitectDebris.SumInsValue();
                }
                else {
                    item.CalculatedAmount = 0;
                    item.CalculatedCoverAmount = 0;
                }
            }
            else if (parseInt(DR[0].CalculatedAmount.toString()) > 0 && parseInt(DR[0].CalculatedCoverAmount.toString()) > 0 && LL_IsAmountChanged == true) {
                if (parseInt(OFFER_LM7COVERS_ID.toString()) != 28 && parseInt(OFFER_LM7COVERS_ID.toString()) != 29) {
                    item.CalculatedAmount = parseInt(newVal.toString().replace(",", ""));
                }
                if (parseInt(newVal.toString()) > 0) {
                    if (parseInt(OFFER_LM7COVERS_ID.toString()) == 28 || parseInt(OFFER_LM7COVERS_ID.toString()) == 29 || parseInt(OFFER_LM7COVERS_ID.toString()) == 2 || parseInt(OFFER_LM7COVERS_ID.toString()) == 6 || parseInt(OFFER_LM7COVERS_ID.toString()) == 7 || parseInt(OFFER_LM7COVERS_ID.toString()) == 8) {
                        item.CalculatedAmount = parseInt(newVal.toString().replace(",", ""));
                    }

                }
                else {
                    if (parseInt(OFFER_LM7COVERS_ID.toString()) == 28 || parseInt(OFFER_LM7COVERS_ID.toString()) == 29 || parseInt(OFFER_LM7COVERS_ID.toString()) == 2 || parseInt(OFFER_LM7COVERS_ID.toString()) == 6 || parseInt(OFFER_LM7COVERS_ID.toString()) == 7 || parseInt(OFFER_LM7COVERS_ID.toString()) == 8) {
                        item.CalculatedAmount = parseInt(newVal.toString().replace(",", ""));
                        item.CalculatedCoverAmount = parseInt(newVal.toString().replace(",", ""));
                    }
                }
            }
            else {
                if (parseInt(item.CoverSumInsRate.toString()) == 0 && parseInt(item.DefaultCoverAmount.toString()) > 0) {
                    if (parseInt(newVal.toString().replace(",", "")) > 0) {
                        item.CalculatedAmount = item.DefaultCoverAmount;
                        item.CalculatedCoverAmount = item.DefaultCoverAmount;
                    }
                    else {
                        item.CalculatedAmount = 0;
                        item.CalculatedCoverAmount = 0;
                    }

                }
                else {
                    if (item.CovRelatedCover.toString().length > 0 && item.CovRelatedCover != null) {   //'Check If the Related cover contains / which mean it's the summation of 2 covers
                        if (item.CovRelatedCover.toString().indexOf("/") > 0) {
                            var FirstDR = [];
                            var SecondDR = [];
                            var TotalSum = 0;
                            var res = item.CovRelatedCover.toString().split("/");
                            FirstDR = $.Enumerable.From(DR)
                                .Where("$.OFFER_LM7COVERS_ID == " + res[0] + "")
                                .ToArray();
                            SecondDR = $.Enumerable.From(DR)
                                .Where("$.OFFER_LM7COVERS_ID == " + res[1] + "")
                                .ToArray();
                            TotalSum = parseFloat(FirstDR[0].CalculatedCoverAmount) + parseFloat(SecondDR[0].CalculatedCoverAmount);
                            //Check if It's Allied Perils multiply by insurance Classe Rate "F7BrokerRate" Math.round
                            if (parseInt(item.GroupCoverID.toString()) == 9) {
                                item.CalculatedAmount = Math.round(item.CoverSumInsRate * TotalSum);
                                item.CalculatedCoverAmount = Math.round(item.CoverSumInsRate * TotalSum);
                            }
                            else {
                                item.CalculatedAmount = Math.round(item.CoverSumInsRate * TotalSum);
                                item.CalculatedCoverAmount = Math.round(item.CoverSumInsRate * TotalSum);
                            }

                        }
                        else {
                            ////////debugger;
                            var ThirdDR = [];
                            ThirdDR = $.Enumerable.From(DR)
                                        .Where("$.OFFER_LM7COVERS_ID == " + item.CovRelatedCover + "")
                                        .ToArray();

                            if (ThirdDR[0].CalculatedCoverAmount.toString().indexOf(",") > 0) {
                                ThirdDR[0].CalculatedCoverAmount = ThirdDR[0].CalculatedCoverAmount.toString().replace(",", "");
                            }
                            if (parseInt(item.GroupCoverID.toString()) == 9) {
                                item.CalculatedAmount = Math.round((item.CoverSumInsRate * parseFloat(ThirdDR[0].CalculatedCoverAmount)) / 1000) * 1000;
                                item.CalculatedCoverAmount = Math.round((item.CoverSumInsRate * parseFloat(ThirdDR[0].CalculatedCoverAmount)) / 1000) * 1000;
                            }
                            else {
                                item.CalculatedAmount = Math.round((item.CoverSumInsRate * parseFloat(ThirdDR[0].CalculatedCoverAmount)) / 1000) * 1000;
                                item.CalculatedCoverAmount = Math.round((item.CoverSumInsRate * parseFloat(ThirdDR[0].CalculatedCoverAmount)) / 1000) * 1000;
                            }
                        }

                    }
                }
            }
        });
    }

    else {
        showToast('Amount Value Should be Numeric!', 'fail');
        ll_Exit = 1;
        _TLM7OfferData.CalculatedContentAmount(0);
        return;
    }

    UpdateFireCovers(DR);

    //Calculare FirePremium Grid
    setTimeout(function () { CalculateFirePrem() }, 1000);
});
// ------------------------------------------------------------
// ------------------------------------------------------------
_TLM7OfferData.CalculatedMonthlySalaries.subscribe(function (newVal) {
    //////debugger;
    var DR = [];
    var InsuranceClassRow = [];
    var MonthlySalariesDataRow = [];
    var WCSumInsuredDataRow = [];
    var OFFER_LM7COVERS_ID = 34;
    //if (newVal != undefined)
    //{
    //    var n = newVal.indexOf(",");
    //    if (n > 0) {
    //        newVal = newVal.toString().replace(/,/g, "");
    //    }
    //} 
    if ($.isNumeric(newVal)) {
        jq_HideMobileLoaderAdv("pg_GetFireQuotation");
        jq_ShowMobileLoaderAdv("pg_GetFireQuotation");
        setTimeout(function () { jq_HideMobileLoaderAdv("pg_GetFireQuotation"); }, 3000);

        if (parseInt(OFFER_LM7COVERS_ID.toString()) == 47) {
            if (parseInt(newVal.toString()) > 16) {
                jq_DisplayMessage("MSG_GeneralError", "", 'Number of Hours Should Not Exceed 16.');
                ll_Exit = 1;
                self.CalculatedAmount(1);
                return;
            }
        }
        if (parseInt(OFFER_LM7COVERS_ID.toString()) == 48) {
            if (parseInt(newVal.toString()) > 1) {
                jq_DisplayMessage("MSG_GeneralError", "", 'Number of Days Should Not Exceed 1.');
                ll_Exit = 1;
                self.CalculatedAmount(1);
                return;
            }
        }
        ////////debugger;
        DR = $.Enumerable.From(ko.mapping.toJS(_TLM7OfferData.WCCovers()))
            .Where("$.CovRelatedCover == '" + OFFER_LM7COVERS_ID.toString() + "' && $.IsIncluded==1")
            .ToArray();

        ko.utils.arrayForEach(DR, function (item) {
            ////////debugger;
            //Check if it's a group ID                 'Check if it's not an optional Cover   'Check if it's an included Cover
            if (item.IsCoverGroupID.toString() == "true" || item.IsIncluded.toString() == "false") {
                return;
            }
            else if (item.OFFER_LM7COVERS_ID.toString() == item.CovRelatedCover.toString()) {
                item.CalculatedAmount = newVal;
                item.CalculatedCoverAmount = newVal;
            }
                //check if it's Architect fees or Removal of debris
            else if (parseInt(item.OFFER_LM7COVERS_ID.toString()) == 35) {
                //'This is yearly amount Sum Insured
                MonthlySalariesDataRow = $.Enumerable.From(ko.mapping.toJS(_TLM7OfferData.WCCovers()))
                .Where("$.OFFER_LM7COVERS_ID == 34").ToArray();

                item.CalculatedAmount = parseInt(MonthlySalariesDataRow[0].CalculatedAmount.toString()) * 12;
                item.CalculatedCoverAmount = parseInt(MonthlySalariesDataRow[0].CalculatedAmount.toString()) * 12;

            }
            else {
                //Calculate WC sum Insured for CoverCode 36,37,38
                //First Set Default class related to the selected insurance class ID
                InsuranceClassRow = $.Enumerable.From(ko.mapping.toJS(MyApp_GVM.List_FireClasses))
                .Where("$.OFFER_INSURANCECLASSES_ID  == " + parseInt(_TLM7OfferData.OFFER_INSURANCECLASSES_ID().toString()) + "")
                .ToArray();
                item.CalculatedWCCLass = InsuranceClassRow[0].WCClassID;
                //Set the Sum Insured related to the Cover Code and WC class
                WCSumInsuredDataRow = $.Enumerable.From(ko.mapping.toJS(JSON.parse(sessionStorage.getItem('WCClassesSumInsured'))))
                .Where("$.WCClasseCode ==" + parseInt(InsuranceClassRow[0].WCClassID.toString()) + " && $.OFFER_LM7COVERS_ID==" + parseInt(item.OFFER_LM7COVERS_ID.toString()))
                .ToArray();
                //alert(item.OFFER_LM7COVERS_ID.toString());
                ////////debugger;
                item.CalculatedAmount = WCSumInsuredDataRow[0].SumInsured;
                item.CalculatedCoverAmount = WCSumInsuredDataRow[0].SumInsured;
            }

            //Calculate WC Prem
            setTimeout(function () { CalculateWCPrem(0, parseInt(OFFER_LM7COVERS_ID.toString())) }, 2000);
            //CalculateWCPrem(0, parseInt(self.OFFER_LM7COVERS_ID().toString()));

            UpdateWCCovers(DR);
        });

    }
    else {
        showToast('Amount Value Should be Numeric!', 'fail');
        ll_Exit = 1;
        _TLM7OfferData.CalculatedMonthlySalaries(0);
        return;
    }
});
// ------------------------------------------------------------
// ------------------------------------------------------------
_TLM7OfferData.CalculatedTPLCLass.subscribe(function (newVal) {
    //////debugger;
    var WCSumInsDataRow = [];
    var DR = [];
    var OFFER_LM7COVERS_ID = 40;
    //if (newVal != undefined)
    //{
    //    var n = newVal.indexOf(",");
    //    if (n > 0) {
    //        newVal = newVal.toString().replace(/,/g, "");
    //    }
    //}
    if ($.isNumeric(newVal) && parseInt(newVal) !=0) {
        jq_HideMobileLoaderAdv("pg_GetFireQuotation");
        jq_ShowMobileLoaderAdv("pg_GetFireQuotation");
        setTimeout(function () { jq_HideMobileLoaderAdv("pg_GetFireQuotation"); }, 3000);

        if (parseInt(OFFER_LM7COVERS_ID.toString()) < 44) {
            for (k = 40; k < 44 ; k++) {
                ////////debugger;
                DR = $.Enumerable.From(ko.mapping.toJS(_TLM7OfferData.TPLCovers()))
                    .Where("$.OFFER_LM7COVERS_ID == " + k)
                    .ToArray();

                WCSumInsDataRow = $.Enumerable.From(ko.mapping.toJS(JSON.parse(sessionStorage.getItem('WCClassesSumInsured'))))
                    .Where("$.WCClasseCode ==" + parseInt(newVal.toString()) + " && $.OFFER_LM7COVERS_ID==" + k)
                    .ToArray();
                if (WCSumInsDataRow.length > 0) {

                    DR[0].CalculatedAmount = WCSumInsDataRow[0].SumInsured;
                    DR[0].CalculatedCoverAmount = WCSumInsDataRow[0].SumInsured;
                    DR[0].CalculatedTPLCLass = newVal;
                }
                else {
                    jq_DisplayMessage("MSG_GeneralError", "", "TPL Class Code: " + newVal.toString() + " doesn't exist");
                    ll_Exit = 1;
                    //self.CalculatedTPLCLass(newVal);
                    return;
                }

                UpdateTPLCovers(DR);
            }
            ////////debugger;
            setTimeout(function () { CalculateTPLPrem(parseInt(newVal.toString())) }, 2000);
            //CalculateTPLPrem(parseInt(newVal.toString()));

        }
        else if (parseInt(OFFER_LM7COVERS_ID.toString()) == 44 || parseInt(OFFER_LM7COVERS_ID.toString()) == 45) {
            if (parseInt(newVal.toString()) > 0) {
                DR = $.Enumerable.From(ko.mapping.toJS(_TLM7OfferData.TPLCovers()))
                  .Where("$.OFFER_LM7COVERS_ID == " + parseInt(OFFER_LM7COVERS_ID.toString()))
                  .ToArray();
                DR[0].CalculatedAmount = 20000;
                DR[0].CalculatedCoverAmount = 20000;
                DR[0].CalculatedTPLCLass = parseInt(newVal.toString());
                UpdateTPLCovers(DR);
                setTimeout(function () { CalculateOtherTPLPrem(parseInt(DR[0].OFFER_LM7COVERS_ID.toString()), parseInt(newVal.toString())) }, 2000);
                //CalculateOtherTPLPrem(parseInt(DR[0].OFFER_LM7COVERS_ID.toString()), parseInt(newVal.toString()));
            }
        }
            //Poisoning
        else if (parseInt(OFFER_LM7COVERS_ID.toString()) == 46) {
            if (parseInt(newVal.toString()) > 0) {
                DR = $.Enumerable.From(ko.mapping.toJS(_TLM7OfferData.TPLCovers()))
                  .Where("$.OFFER_LM7COVERS_ID == " + parseInt(OFFER_LM7COVERS_ID.toString()))
                  .ToArray();
                DR[0].CalculatedAmount = DR[0].DefaultCoverAmount;
                DR[0].CalculatedCoverAmount = DR[0].DefaultCoverAmount;
                DR[0].CalculatedTPLCLass = parseInt(newVal.toString());
                UpdateTPLCovers(DR);
                setTimeout(function () { CalculateOtherTPLPrem(parseInt(DR[0].OFFER_LM7COVERS_ID.toString()), parseInt(newVal.toString())) }, 2000);
                //CalculateOtherTPLPrem(parseInt(DR[0].OFFER_LM7COVERS_ID.toString()), parseInt(newVal.toString()));
            }
        }
    }
    else if (newVal.toString() == "0" && _TLM7OfferData.LM7Premium()[4] !=undefined)
    {
        //////debugger;
        jq_HideMobileLoaderAdv("pg_GetFireQuotation");
        jq_ShowMobileLoaderAdv("pg_GetFireQuotation");
        setTimeout(function () { jq_HideMobileLoaderAdv("pg_GetFireQuotation"); }, 3000);

            DR = $.Enumerable.From(ko.mapping.toJS(_TLM7OfferData.TPLCovers()))
                .Where("$.OFFER_LM7COVERS_ID == 40")
                .ToArray();

            _TLM7OfferData.LM7Premium()[4].TotalUS(0);
            _TLM7OfferData.LM7Premium()[4].Rate(0);
            _TLM7OfferData.LM7Premium()[4].Premium(parseInt(_TLM7OfferData.LM7Premium()[4].Premium().toString()) - (parseInt(DR[0].CalculatedPrem.toString()) + parseInt(DR[0].CalculatedRiders.toString())));
            RecalculatePrem();
            _TLM7OfferData.LM7Premium()[10].Premium(parseInt(_TLM7OfferData.LM7Premium()[10].Premium().toString()) - (parseInt(DR[0].CalculatedPrem.toString()) + parseInt(DR[0].CalculatedRiders.toString())));


            DR = [];
            RelatedDR = [];
            DR = $.Enumerable.From(ko.mapping.toJS(_TLM7OfferData.TPLCovers()))
                .Where("$.OFFER_LM7COVERS_ID == 40")
                .ToArray();
            RelatedDR = $.Enumerable.From(ko.mapping.toJS(_TLM7OfferData.TPLCovers()))
                .Where("$.CovRelatedCover == 40 && $.IsIncluded==1")
                .ToArray();

            ko.utils.arrayForEach(DR, function (item) {
                ////////debugger;
                item.IsRequired = 0;
                item.CalculatedAmount = 0;
                item.CalculatedCoverAmount = 0;

            });

            ko.utils.arrayForEach(RelatedDR, function (item) {
                ////////debugger;
                item.IsRequired = 0;
                item.CalculatedAmount = 0;
                item.CalculatedCoverAmount = 0;
                item.CalculatedTPLCLass = 0;
            });

            UpdateTPLCovers(DR);
            setTimeout(function () { UpdateTPLCovers(RelatedDR) }, 2000);
        }
});
// ------------------------------------------------------------


//$(document).on("pagecreate", "#pg_GetFireQuotation", function (e) {
//    //////debugger;
//    $(e.target).page("bindRemove")
//});
// ---------------------------------------------------------------------
// ------------------------------------------------------------


$(document).on("pagebeforecreate", "#pg_GetFireQuotation", function (event, ui) {

    ////////debugger;
    Validator_Login = $("#Frm_FireQuotation").validate({
        rules: {
            DDL_OF_OfferClass: { required: true },
            txt_BuildindgAmount: { required: true },
            txt_ContentAmount: { required: true },
            Txt_OF_SQM: { maxlength: 4 }
        }
    });

    RemoveInputDefaulValue('Txt_OF_SQM', 0);
    RemoveInputDefaulValue('DEFAULT_AMOUNT_1', 0);
    RemoveInputDefaulValue('DEFAULT_AMOUNT_2', 0);
    RemoveInputDefaulValue('DEFAULT_AMOUNT_3', 0);
    RemoveInputDefaulValue('DEFAULT_AMOUNT_4', 0);
    RemoveInputDefaulValue('DEFAULT_AMOUNT_5', 0);
    RemoveInputDefaulValue('DEFAULT_AMOUNT_6', 0);
    RemoveInputDefaulValue('txt_BuildindgAmount', 0);
    RemoveInputDefaulValue('txt_ContentAmount', 0);
    RemoveInputDefaulValue('txt_MonthlySalaryAmount', 0);
   
    // ---------------------------------
    $("#DDL_OF_OfferClass").bind("change", function (event, ui) {
        //alert('plan');
        ////////debugger;
        if ($.trim($(this).val()) != '') {
            _TLM7OfferData.LM7Covers.removeAll();
            _TLM7OfferData.Clauses.removeAll();
            _TLM7OfferData.WCCovers.removeAll();
            _TLM7OfferData.TPLCovers.removeAll();
            _TLM7OfferData.LM7Premium.removeAll();
            var SelectedVal = $.trim($(this).val());
            _TLM7OfferData.ll_ShowPremiumSection(true);
            var func = function () {

                //jq_ShowMobileLoader();
                jq_ShowMobileLoaderAdv("pg_GetFireQuotation");
                //_TLM7OfferData.ISENABLED(false);
                /* ------Fill Programme Code Combo-------- */
                Get_FireOffer_Data_By_ClassID(parseInt(SelectedVal.toString()));
            };

            setTimeout(func, 400);

        }
    });
    // ----------------------------------
    $(this).on("click", "#div_HideShowBuilding", function (event) {

        _TLM7OfferData.IsVisible(true);
    });


    $(this).on("click", "#txt_ContentAmount", function (event) {

        //alert('edjekjdkejdkejd');
        ////////debugger;
        if (FIRECOVERS_SUB_CATEGORIES_FILTERED.length > 0 && _TLM7OfferData.OFFER_INSURANCECLASSES_ID() != undefined) {
            try {

                $("#inlinecontent").simpledialog2({ width: '75%' });

            }
            catch (ex) { }
        }
        else {
            $(document).trigger('simpledialog', { 'method': 'close' });
            showToast("Please select what would you like to ensure!", 'fail');
        }

    });

    $(this).on("click", "#txt_MonthlySalaryAmount", function (event) {

        //alert('edjekjdkejdkejd');
        ////////debugger;
        if ( _TLM7OfferData.OFFER_INSURANCECLASSES_ID() != undefined) {
        }
        else {
            showToast("Please select what would you like to ensure!", 'fail');
        }

    });


    $(this).on("click", "#txt_BuildindgAmount", function (event) {
        ////////debugger;
        if (FIRECOVERS_SUB_CATEGORIES_FILTERED.length > 0 && _TLM7OfferData.OFFER_INSURANCECLASSES_ID() != undefined) {
            try {

                $("#div_houseAmount").simpledialog2({ width: '75%'});

            }
            catch (ex) { }
        }
        else {
            $(document).trigger('simpledialog', { 'method': 'close' });
            showToast("Please select what would you like to ensure!", 'fail');
        } 

    });

    $(this).on("click", "#btn_AddBuildingAmount", function (event) {
        ////////debugger;
        if (_TLM7OfferData.BuildingSQM() != undefined) {
            ////////debugger;
            $("#txt_BuildindgAmount").val(Math.round(parseFloat(_TLM7OfferData.BuildingSQM().toString()) * parseFloat(_TLM7OfferData.BuildingValue()))).trigger("change");
            $(document).trigger('simpledialog', { 'method': 'close' });

        }
    });

    $(this).on("click", "#Btn_AddContent", function (event) {
        ////////debugger;

        Btn_AddContent_Click();

    });

    $(this).on("click", "#btn_GetPrices_FireOffer", function (event) {
        ////debugger;
        if ($("#Frm_FireQuotation").valid()) {
            jq_HideMobileLoaderAdv("pg_GetFireQuotation");
            jq_ShowMobileLoaderAdv("pg_GetFireQuotation");
            setTimeout(function () { jq_HideMobileLoaderAdv("pg_GetFireQuotation"); }, 1000);
            var InsuranceClassRowValidation = [];
            InsuranceClassRowValidation = $.Enumerable.From(ko.mapping.toJS(MyApp_GVM.List_FireClasses))
            .Where("$.OFFER_INSURANCECLASSES_ID  == " + parseInt(_TLM7OfferData.OFFER_INSURANCECLASSES_ID().toString()) + "")
            .ToArray();

            if (_TLM7OfferData.LM7Premium()[0].TotalUS() != "") {
                if (parseInt(_TLM7OfferData.LM7Premium()[0].TotalUS()) > parseInt(InsuranceClassRowValidation[0].MaxTotSumIns.toString())) {
                    showToast('error', "Sum Insured Exceeds " + InsuranceClassRowValidation[0].MaxTotSumIns + " (MAXIMUM defined) !", 'Error');
                    return false;
                }
            }
            _TLM7OfferData.TotalPremium(_TLM7OfferData.LM7Premium()[11].Premium());
            if (_TLM7OfferData.TotalPremium() > 0) {
                _TLM7OfferData.IsVisible(true);
            }
            $("#txt_Fire_InsName").focus();

        }
        else {
            // Focus invalid input
            // -------------------
            Validator_Login.focusInvalid();
            // -------------------
        }


    });

    $(this).on("click", "#btn_SendPrices_FireOffer", function (event) {
        ////////debugger;
        var InsuranceClassRowValidation = [];
        _TLM7OfferData.TotalPremium(_TLM7OfferData.LM7Premium()[11].Premium());

        if ($.trim($("#txt_Fire_InsName").val()) == "" || $.trim($("#txt_Fire_Email").val()) == "" || $.trim($("#txt_Fire_Mobile").val()) == "") {
            jq_DisplayMessage("MSG_GeneralError", "", "Please Fill All Your Info.!");
            $("#txt_Fire_InsName").focus();
            return false;
        }

        InsuranceClassRowValidation = $.Enumerable.From(ko.mapping.toJS(MyApp_GVM.List_FireClasses))
        .Where("$.OFFER_INSURANCECLASSES_ID  == " + parseInt(_TLM7OfferData.OFFER_INSURANCECLASSES_ID().toString()) + "")
        .ToArray();


        if (_TLM7OfferData.LM7Premium()[0].TotalUS() != "") {
            if (parseInt(_TLM7OfferData.LM7Premium()[0].TotalUS()) > parseInt(InsuranceClassRowValidation[0].MaxTotSumIns.toString())) {
                showToast('error', "Sum Insured Exceeds " + InsuranceClassRowValidation[0].MaxTotSumIns + " (MAXIMUM defined) !", 'Error');
                return false;
            }
        }

        jq_ShowMobileLoaderAdv("pg_GetFireQuotation");
        Btn_SaveFireOffer_Click();
        
    });

    $(this).on("click", "#btn_SharePrices_FireOffer", function (event) {
        ////////debugger;
        var InsuranceClassRowValidation = [];
        _TLM7OfferData.TotalPremium(_TLM7OfferData.LM7Premium()[11].Premium());

        if ($.trim($("#txt_Fire_InsName").val()) == "" || $.trim($("#txt_Fire_Email").val()) == "" || $.trim($("#txt_Fire_Mobile").val()) == "") {
            jq_DisplayMessage("MSG_GeneralError", "", "Please Fill All Your Info.!");
            $("#txt_Fire_InsName").focus();
            return false;
        }

        InsuranceClassRowValidation = $.Enumerable.From(ko.mapping.toJS(MyApp_GVM.List_FireClasses))
        .Where("$.OFFER_INSURANCECLASSES_ID  == " + parseInt(_TLM7OfferData.OFFER_INSURANCECLASSES_ID().toString()) + "")
        .ToArray();


        if (_TLM7OfferData.LM7Premium()[0].TotalUS() != "") {
            if (parseInt(_TLM7OfferData.LM7Premium()[0].TotalUS()) > parseInt(InsuranceClassRowValidation[0].MaxTotSumIns.toString())) {
                showToast('error', "Sum Insured Exceeds " + InsuranceClassRowValidation[0].MaxTotSumIns + " (MAXIMUM defined) !", 'Error');
                return false;
            }
        }

        jq_ShowMobileLoaderAdv("pg_GetFireQuotation");
        Btn_ShareFireOffer_Click();

    });

});

// ---------------------------------------------------------------------

$(document).on("pagebeforeshow", "#pg_GetFireQuotation", function (event, ui) {
    //$('#pg_Medical').bind('pageshow', function (event, ui) {
    ////////debugger;
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

    var query = "title=FIRE and BURGLARY Insurance&email=risques@victoire.com.lb~sami.saad@victoire.com.lb";//$(this).data("url").split("?")[1];
    query = query.replace("title=", "");
    query = query.replace("email=", "");

    title = query.split("&")[0];
    email = query.split("&")[1];


    $('#lblSubject').text(title);

    ////////debugger;


    var func = function () {

        //jq_ShowMobileLoader();
        jq_ShowMobileLoaderAdv("pg_GetFireQuotation");
        /* ------Fill Programme Code Combo-------- */
        Get_FireOffer_Startup_Data(1);
    };

    setTimeout(func, 300);
});

/* --------------------------------------------------------------- */
function Get_FireOffer_Startup_Data(i_OWNER_ID) {
    try {
        ////////debugger;
        //alert('test');
        _Params_Get_FireOffer_Startup_Data.OWNER_ID = i_OWNER_ID;
        _Params_Get_FireOffer_Startup_Data.USER_ID = _UserInfo.UserID;
        //alert(_UserInfo.UserID);
        _Params_Get_FireOffer_Startup_Data.PCODE = "F7";

        _Params = JSON.stringify(_Params_Get_FireOffer_Startup_Data);

        _Service_Method = "Get_FireOffer_Startup_Data";

        CallService('Service_Call_Completed_FireOffer');
    }
    catch (e) {
        alert("Get_FireOffer_Startup_Data: " + e.Message);
    }
}
/* --------------------------------------------------------------- */
/* --------------------------------------------------------------- */
function Get_FireOffer_Startup_Data_Completed(i_Input) {
    try {
        //alert('test');
        ////////debugger;
        jq_HideMobileLoaderAdv("pg_GetFireQuotation");
        var List_FireClasses_Filtered_By_Lang = [];
        ko.mapping.fromJS(i_Input.My_Result.My_INSURANCECLASSES, MyApp_GVM.List_FireClasses);
        sessionStorage.setItem("ElevatorPrem", JSON.stringify(i_Input.My_Result.My_ELEVATORPREM));
        sessionStorage.setItem("ParkingPrem", JSON.stringify(i_Input.My_Result.My_PARKINGPREM));
        sessionStorage.setItem("WCClassesSumInsured", JSON.stringify(i_Input.My_Result.My_WCClASSESSUMINSURED));
        sessionStorage.setItem("ArchitectDebris", JSON.stringify(i_Input.My_Result.My_ARCHITECTDEBRIS));
        sessionStorage.setItem("WCClassRate", JSON.stringify(i_Input.My_Result.My_WCClASSESRATE));
        sessionStorage.setItem("FireBuildingType", JSON.stringify(i_Input.My_Result.My_FIRE_BUILDING_TYPE));
        ko.mapping.fromJS(i_Input.My_Result.My_FIRE_BUILDING_TYPE, MyApp_GVM.List_BuildingType);
        sessionStorage.setItem("FireCoversSubCategories", JSON.stringify(i_Input.My_Result.My_FIRECOVERS_SUB_CATEGORIES));
        sessionStorage.setItem("WorkerMinPremium", JSON.stringify(i_Input.My_Result.My_WORKMENMINPREM));

        ShowFireContentSubCategories(3);

        //ko.applyBindings(_TLM7OfferData, document.getElementById('ct_GetFireQuotation'));
    }
    catch (e) {
        alert("Get_FireOffer_Startup_Data_Completed: " + e.message);
    }
}
/* --------------------------------------------------------------- */
/* --------------------------------------------------------------- */
function Get_FireOffer_Data_By_ClassID(ClassID) {
    try {
        ////////debugger;
        //alert('test');
        _Params_Get_FireOffer_Data_By_ClassID.OFFER_INSURANCECLASSES_ID = ClassID;
        _Params = JSON.stringify(_Params_Get_FireOffer_Data_By_ClassID);

        _Service_Method = "Get_FireOffer_Data_By_ClassID";

        CallService('Service_Call_Completed_FireOffer');
    }
    catch (e) {
        alert("Get_FireOffer_Data_By_ClassID: " + e.Message);
    }
}
/* --------------------------------------------------------------- */
/* --------------------------------------------------------------- */
function Get_FireOffer_Data_By_ClassID_Completed(i_Input) {
    try {
        //alert('test');
        ///////debugger;
        jq_HideMobileLoaderAdv("pg_GetFireQuotation");
        //_TLM7OfferData.language("EN");
        _TLM7OfferData.LM7Covers.removeAll();
        _TLM7OfferData.Clauses.removeAll();
        _TLM7OfferData.WCCovers.removeAll();
        _TLM7OfferData.TPLCovers.removeAll();
        _TLM7OfferData.LM7Premium.removeAll();

        sessionStorage.setItem('PartCondition_EN', i_Input.My_Result.My_INSCLASSESCOND.PartCondition_EN.toString())
        sessionStorage.setItem('PartCondition_AR', i_Input.My_Result.My_INSCLASSESCOND.PartCondition_AR.toString())
        //alert(_TLM7OfferData.LanguageVariant());
        ko.utils.arrayForEach(i_Input.My_Result.My_FIRECLAUSES, function (item) {
            ////////debugger;
            var index = i_Input.My_Result.My_FIRECLAUSES.indexOf(item);
            _TLM7OfferData.Clauses.unshift(new TLM7ClausesData(-1, 'F7', 0, item.OFFER_FIRECLAUSES_ID, item.ClauseDesc_EN, item.ClauseDesc_AR));

        });

        switch (_TLM7OfferData.language()) {
            case "EN":
                _TLM7OfferData.ParticularConditions(i_Input.My_Result.My_INSCLASSESCOND.PartCondition_EN.toString());
                break;
            case "AR":
                _TLM7OfferData.ParticularConditions(i_Input.My_Result.My_INSCLASSESCOND.PartCondition_AR.toString());
                break;
            default:
                _TLM7OfferData.ParticularConditions(i_Input.My_Result.My_INSCLASSESCOND.PartCondition_EN.toString());
                break;
        }

        LM7Covers = $.Enumerable.From(ko.mapping.toJS(i_Input.My_Result.My_FireCovers))
                                .Where("$.LM7Grid == '1'")
                                .ToArray();

        ko.utils.arrayForEach(LM7Covers, function (item) {
            ////////debugger;
            var index = i_Input.My_Result.My_FireCovers.indexOf(item);

            _TLM7OfferData.LM7Covers.unshift(new TLM7CoverData(-1, 'F7', item.CoverSumInsRate, item.CoverPremiumRate, 0, item.OFFER_LM7COVERS_ID, item.CoverDesc_EN, item.CoverDesc_AR, item.CalculatedAmount,
                item.CalculatedCoverAmount, item.CalculatedRiders, item.Deductible_EN, item.Deductible_AR, item.IsCoverGroupID, item.IsRequired, item.IsEnabled, item.IsIncluded,
                item.CovRelatedCover, item.ToolTipDesc_EN, item.ToolTipDesc_AR, item.GroupCoverID, item.CalculatedWCCLass, item.CalculatedTPLCLass, item.MinCoverAmount, item.MaxCoverAmount,
                item.DefaultCoverAmount, item.DefaultCoverPremiumRate, item.LM7Grid, item.WCGrid, item.TPLGrid, item.CalculatedPrem, item.IsAddedToSumIns, item.EnableHelp));

        });

        WCCovers = $.Enumerable.From(ko.mapping.toJS(i_Input.My_Result.My_FireCovers))
                        .Where("$.WCGrid == '1'")
                        .ToArray();

        ko.utils.arrayForEach(WCCovers, function (item) {
            ////////debugger;
            var index = i_Input.My_Result.My_FireCovers.indexOf(item);

            _TLM7OfferData.WCCovers.unshift(new TWCCoverData(-1, 'F7', item.CoverSumInsRate, item.CoverPremiumRate, 0, item.OFFER_LM7COVERS_ID, item.CoverDesc_EN, item.CoverDesc_AR, item.CalculatedAmount,
            item.CalculatedCoverAmount, item.CalculatedRiders, item.Deductible_EN, item.Deductible_AR, item.IsCoverGroupID, item.IsRequired, item.IsEnabled, item.IsIncluded,
            item.CovRelatedCover, item.ToolTipDesc_EN, item.ToolTipDesc_AR, item.GroupCoverID, item.CalculatedWCCLass, item.CalculatedTPLCLass, item.MinCoverAmount, item.MaxCoverAmount,
            item.DefaultCoverAmount, item.DefaultCoverPremiumRate, item.LM7Grid, item.WCGrid, item.TPLGrid, item.CalculatedPrem, item.IsAddedToSumIns, item.EnableHelp));
        });

        TPLCovers = $.Enumerable.From(ko.mapping.toJS(i_Input.My_Result.My_FireCovers))
                .Where("$.TPLGrid == '1'")
                .ToArray();

        ko.utils.arrayForEach(TPLCovers, function (item) {
            ////////debugger;
            var index = i_Input.My_Result.My_FireCovers.indexOf(item);
            _TLM7OfferData.TPLCovers.unshift(new TTPLCoverData(-1, 'F7', item.CoverSumInsRate, item.CoverPremiumRate, 0, item.OFFER_LM7COVERS_ID, item.CoverDesc_EN, item.CoverDesc_AR, item.CalculatedAmount,
                item.CalculatedCoverAmount, item.CalculatedRiders, item.Deductible_EN, item.Deductible_AR, item.IsCoverGroupID, item.IsRequired, item.IsEnabled, item.IsIncluded,
                item.CovRelatedCover, item.ToolTipDesc_EN, item.ToolTipDesc_AR, item.GroupCoverID, item.CalculatedWCCLass, item.CalculatedTPLCLass, item.MinCoverAmount, item.MaxCoverAmount,
                item.DefaultCoverAmount, item.DefaultCoverPremiumRate, item.LM7Grid, item.WCGrid, item.TPLGrid, item.CalculatedPrem, item.IsAddedToSumIns, item.EnableHelp));
        });

        ko.utils.arrayForEach(i_Input.My_Result.My_TLM7PremiumDesc, function (item) {
            //////debugger;
            var index = i_Input.My_Result.My_TLM7PremiumDesc.indexOf(item);
            _TLM7OfferData.LM7Premium.push(new TLM7PremiumData(-1, item.OfferCode, 0, item.LM7Policy_EN, item.LM7Policy_AR, 0, 0, 0));

        });
    }
    catch (e) {
        alert("Get_FireOffer_Data_By_ClassID_Completed: " + e.message);
    }
}
/* --------------------------------------------------------------- */
/* --------------------------------------------------------------- */
function Service_Call_Completed_FireOffer(i_Response) {
    try {
        // alert(_Service_Method);
        switch (_Service_Method) {
            case "Get_FireOffer_Startup_Data":
                Get_FireOffer_Startup_Data_Completed(i_Response);
                break;
            case "Get_FireOffer_Data_By_ClassID":
                Get_FireOffer_Data_By_ClassID_Completed(i_Response);
                break;
            case "Edit_FireOffer":
                Edit_FireOffer_Completed(i_Response);
                break;
            case "Edit_FireOfferShare":
                Edit_FireOfferShare_Completed(i_Response);
                break;
        }
    }
    catch (e) {
        alert("Service_Call_Completed_FireOffer:" + e.message);
    }
}



/* --------------------------------------------------------------- */
function CalculateWCPremUnchecked(CoverCode, DeliveryMotorcycle, AdditionalWorkingHour, AdditionalWorkingDay) {
    try {
        ////debugger;
        var WCDR = [];
        var InsuranceClassRow = [];
        var WCClassrateDR = [];
        var WCAdditionalRateDR = [];
        var WCDeliveryDR = [];
        var FromClass;
        var LD_TotalPrem = 0;
        var WCWorkerMinPrem = [];
        //////debugger;


        InsuranceClassRow = $.Enumerable.From(ko.mapping.toJS(_List_FireClasses))
        .Where("$.OFFER_INSURANCECLASSES_ID  == " + parseInt(_TLM7OfferData.OFFER_INSURANCECLASSES_ID().toString()) + "")
        .ToArray();

        //Calculate the Premium 
        WCDR = $.Enumerable.From(ko.mapping.toJS(_TLM7OfferData.WCCovers()))
            .Where("$.IsIncluded==1 && $.OFFER_LM7COVERS_ID == 34")
            .ToArray();

        WCWorkerMinPrem = $.Enumerable.From(ko.mapping.toJS(JSON.parse(sessionStorage.getItem('WorkerMinPremium'))))
        .Where("$.EMPLOYEENO ==" + parseInt(WCDR[0].CalculatedWCCLass.toString()))
        .ToArray();


        WCDR[0].CalculatedPrem = parseInt(WCDR[0].CalculatedCoverAmount.toString()) * 12 * parseFloat(InsuranceClassRow[0].WCSalaryRate.toString()) * parseInt(WCDR[0].CalculatedWCCLass.toString());

        //Check Minimum Premium Based on Employee Number
        if (WCDR[0].CalculatedPrem < parseInt(WCWorkerMinPrem[0].MINPREMIUM)) {
            WCDR[0].CalculatedPrem = WCWorkerMinPrem[0].MINPREMIUM;
        }

        //Calculate Premium based in annual salary
        _TLM7OfferData.LM7Premium()[4].TotalUS(parseInt(WCDR[0].CalculatedCoverAmount * 12) * parseInt(WCDR[0].CalculatedWCCLass.toString()));
        _TLM7OfferData.LM7Premium()[4].Rate(parseFloat(InsuranceClassRow[0].WCSalaryRate.toString()));
        _TLM7OfferData.LM7Premium()[4].Premium(WCDR[0].CalculatedPrem);


        UpdateWCCovers(WCDR);


        //Calculate Delivery motorcycle 
        if (DeliveryMotorcycle.toString() == 'true') {
            WCDeliveryDR = $.Enumerable.From(ko.mapping.toJS(_TLM7OfferData.WCCovers()))
            .Where("$.IsIncluded==1 && $.IsRequired ==1 && $.OFFER_LM7COVERS_ID == 50")
            .ToArray();
            if (WCDeliveryDR.length > 0) {
                WCDeliveryDR[0].CalculatedPrem = Math.round(parseInt(WCDeliveryDR[0].CalculatedWCCLass.toString()) * 150);
                _TLM7OfferData.LM7Premium()[4].Premium(_TLM7OfferData.LM7Premium()[4].Premium() + Math.round(parseInt(WCDeliveryDR[0].CalculatedWCCLass.toString()) * 150));
                UpdateWCCovers(WCDeliveryDR);
            }

        }


        //Calculate Additional Hours
        if (AdditionalWorkingHour.toString() == 'true') {
            WCAdditionalRateDR = $.Enumerable.From(ko.mapping.toJS(_TLM7OfferData.WCCovers()))
                .Where("$.IsIncluded==1 && $.IsRequired ==1 && $.OFFER_LM7COVERS_ID == 47")
                .ToArray();
            if (WCAdditionalRateDR.length > 0) {

                if (between(parseInt(WCAdditionalRateDR[0].CalculatedCoverAmount.toString()), 1, 4)) {
                    WCAdditionalRateDR[0].CalculatedPrem = Math.round(parseInt(_TLM7OfferData.LM7Premium()[4].Premium()) * parseFloat(FourAdditionalHoursRate.toString()));
                    //WCAdditionalRateDR[0].CalculatedPrem = Math.round(parseInt(WCDR[0].CalculatedPrem.toString()) * parseFloat(FourAdditionalHoursRate.toString()));
                    //_TLM7OfferData.LM7Premium()[4].Premium(_TLM7OfferData.LM7Premium()[4].Premium() + Math.round(parseInt(WCDR[0].CalculatedPrem.toString()) * parseFloat(FourAdditionalHoursRate.toString())));
                    _TLM7OfferData.LM7Premium()[4].Premium(_TLM7OfferData.LM7Premium()[4].Premium() + Math.round(parseInt(_TLM7OfferData.LM7Premium()[4].Premium()) * parseFloat(FourAdditionalHoursRate.toString())));
                }

                if (between(parseInt(WCAdditionalRateDR[0].CalculatedCoverAmount.toString()), 5, 8)) {
                    WCAdditionalRateDR[0].CalculatedPrem = Math.round(parseInt(_TLM7OfferData.LM7Premium()[4].Premium()) * parseFloat(EightAdditionalHoursRate.toString()));
                    //WCAdditionalRateDR[0].CalculatedPrem = Math.round(parseInt(WCDR[0].CalculatedPrem.toString()) * parseFloat(EightAdditionalHoursRate.toString()));
                    //_TLM7OfferData.LM7Premium()[4].Premium(_TLM7OfferData.LM7Premium()[4].Premium() + Math.round(parseInt(WCDR[0].CalculatedPrem.toString()) * parseFloat(EightAdditionalHoursRate.toString())));
                    _TLM7OfferData.LM7Premium()[4].Premium(_TLM7OfferData.LM7Premium()[4].Premium() + Math.round(parseInt(_TLM7OfferData.LM7Premium()[4].Premium()) * parseFloat(EightAdditionalHoursRate.toString())));
                }

                if (between(parseInt(WCAdditionalRateDR[0].CalculatedCoverAmount.toString()), 9, 12)) {
                    WCAdditionalRateDR[0].CalculatedPrem = Math.round(parseInt(_TLM7OfferData.LM7Premium()[4].Premium()) * parseFloat(TwelveAdditionalHoursRate.toString()));
                    //WCAdditionalRateDR[0].CalculatedPrem = Math.round(parseInt(WCDR[0].CalculatedPrem.toString()) * parseFloat(TwelveAdditionalHoursRate.toString()));
                    //_TLM7OfferData.LM7Premium()[4].Premium(_TLM7OfferData.LM7Premium()[4].Premium() + Math.round(parseInt(WCDR[0].CalculatedPrem.toString()) * parseFloat(TwelveAdditionalHoursRate.toString())));
                    _TLM7OfferData.LM7Premium()[4].Premium(_TLM7OfferData.LM7Premium()[4].Premium() + Math.round(parseInt(_TLM7OfferData.LM7Premium()[4].Premium()) * parseFloat(TwelveAdditionalHoursRate.toString())));
                }

                if (between(parseInt(WCAdditionalRateDR[0].CalculatedCoverAmount.toString()), 13, 16)) {
                    WCAdditionalRateDR[0].CalculatedPrem = Math.round(parseInt(_TLM7OfferData.LM7Premium()[4].Premium()) * parseFloat(SixteenAdditionalHoursRate.toString()));
                    //WCAdditionalRateDR[0].CalculatedPrem = Math.round(parseInt(WCDR[0].CalculatedPrem.toString()) * parseFloat(SixteenAdditionalHoursRate.toString()));
                    //_TLM7OfferData.LM7Premium()[4].Premium(_TLM7OfferData.LM7Premium()[4].Premium() + Math.round(parseInt(WCDR[0].CalculatedPrem.toString()) * parseFloat(SixteenAdditionalHoursRate.toString())));
                    _TLM7OfferData.LM7Premium()[4].Premium(_TLM7OfferData.LM7Premium()[4].Premium() + Math.round(parseInt(_TLM7OfferData.LM7Premium()[4].Premium()) * parseFloat(SixteenAdditionalHoursRate.toString())));
                }
                UpdateWCCovers(WCAdditionalRateDR);
            }

        }

        //Calculate Additional Days
        if (AdditionalWorkingDay.toString() == 'true') {
            WCAdditionalRateDR = $.Enumerable.From(ko.mapping.toJS(_TLM7OfferData.WCCovers()))
            .Where("$.IsIncluded==1 && $.IsRequired ==1 && $.OFFER_LM7COVERS_ID == 48")
            .ToArray();
            if (WCAdditionalRateDR.length > 0) {
                //if (between(parseInt(WCAdditionalRateDR[0].CalculatedCoverAmount.toString()), 1, 1)) 
                if (between(parseInt(WCAdditionalRateDR[0].CalculatedCoverAmount.toString()), 1, 2)) {
                    WCAdditionalRateDR[0].CalculatedPrem = Math.round(parseInt(_TLM7OfferData.LM7Premium()[4].Premium()) * parseFloat(OneAdditionalDaysRate.toString()));
                    //WCAdditionalRateDR[0].CalculatedPrem = Math.round(parseInt(WCDR[0].CalculatedPrem.toString()) * parseFloat(OneAdditionalDaysRate.toString()));
                    //_TLM7OfferData.LM7Premium()[4].Premium(_TLM7OfferData.LM7Premium()[4].Premium() + Math.round(parseInt(WCDR[0].CalculatedPrem.toString()) * parseFloat(OneAdditionalDaysRate.toString())));
                    _TLM7OfferData.LM7Premium()[4].Premium(_TLM7OfferData.LM7Premium()[4].Premium() + Math.round(parseInt(_TLM7OfferData.LM7Premium()[4].Premium()) * parseFloat(OneAdditionalDaysRate.toString())));
                }
                UpdateWCCovers(WCAdditionalRateDR);
            }

        }


        for (i = 0; i <= _TLM7OfferData.LM7Premium().length - 3; i++) {
            LD_TotalPrem += parseInt(_TLM7OfferData.LM7Premium()[i].Premium().toString());
        }


        if (parseInt(LD_TotalPrem.toString()) <= parseInt(PremPolicyCost)) {
            _TLM7OfferData.LM7Premium()[10].Premium(parseInt(PolicyCostLessThan250.toString()));
        }
        else if (parseInt(LD_TotalPrem.toString()) > parseInt(PremPolicyCost)) {
            _TLM7OfferData.LM7Premium()[10].Premium(parseInt(PolicyCostMore250.toString()));
        }

        _TLM7OfferData.LM7Premium()[11].Premium(0);

        _TLM7OfferData.LM7Premium()[11].Premium(0);
        for (i = 0; i <= _TLM7OfferData.LM7Premium().length - 2; i++) {
            _TLM7OfferData.LM7Premium()[11].Premium(_TLM7OfferData.LM7Premium()[11].Premium() + parseInt(_TLM7OfferData.LM7Premium()[i].Premium()));
        }

    }
    catch (e) {
        alert("CalculateWCPrem: " + e.message);
    }

}
/* --------------------------------------------------------------- */
function CalculateWCPrem(ToClass, CoverCode) {
    try {
        ////debugger;
        var WCDR = [];
        var InsuranceClassRow = [];
        var WCClassrateDR = [];
        var WCAdditionalRateDR = [];
        var WCDeliveryDR = [];
        var FromClass;
        var LD_TotalPrem = 0;
        var WCWorkerMinPrem = [];
        //////debugger;
        //When Salary Amount is changed reset Hours and Day Premm
        if (parseInt(CoverCode.toString()) == 34) {
            WCDR = $.Enumerable.From(ko.mapping.toJS(_TLM7OfferData.WCCovers()))
            .Where("$.IsIncluded==1 && $.OFFER_LM7COVERS_ID == 47")
            .ToArray();

            WCDR[0].IsRequired = 0
            WCDR[0].CalculatedAmount = 0
            WCDR[0].CalculatedCoverAmount = 0
            WCDR[0].CalculatedWCCLass = 0
            WCDR[0].CalculatedRiders = 0

            WCDR = $.Enumerable.From(ko.mapping.toJS(_TLM7OfferData.WCCovers()))
                .Where("$.IsIncluded==1 && $.OFFER_LM7COVERS_ID == 48")
                .ToArray();

            WCDR[0].IsRequired = 0
            WCDR[0].CalculatedAmount = 0
            WCDR[0].CalculatedCoverAmount = 0
            WCDR[0].CalculatedWCCLass = 0
            WCDR[0].CalculatedRiders = 0
        }

        UpdateWCCovers(WCDR);

        InsuranceClassRow = $.Enumerable.From(ko.mapping.toJS(MyApp_GVM.List_FireClasses))
        .Where("$.OFFER_INSURANCECLASSES_ID  == " + parseInt(_TLM7OfferData.OFFER_INSURANCECLASSES_ID().toString()) + "")
        .ToArray();

        FromClass = parseInt(InsuranceClassRow[0].WCClassID.toString());
        //Calculate the Premium based on Group Cover
        //Calculate the Premium 
        WCDR = $.Enumerable.From(ko.mapping.toJS(_TLM7OfferData.WCCovers()))
            .Where("$.IsIncluded==1 && $.OFFER_LM7COVERS_ID == 34")
            .ToArray();

        //WCWorkerMinPrem = $.Enumerable.From(ko.mapping.toJS(JSON.parse(sessionStorage.getItem('WorkerMinPremium'))))
        //.Where("$.EMPLOYEENO ==" + parseInt(WCDR[0].CalculatedWCCLass.toString()))
        //.ToArray();


        WCDR[0].CalculatedPrem = parseInt(WCDR[0].CalculatedCoverAmount.toString()) * 12 * parseFloat(InsuranceClassRow[0].WCSalaryRate.toString()); //* parseInt(WCDR[0].CalculatedWCCLass.toString());

        //Check Minimum Premium Based on Employee Number
        //if (WCWorkerMinPrem[0] != undefined) {
        //    if (WCDR[0].CalculatedPrem < parseInt(WCWorkerMinPrem[0].MINPREMIUM)) {
        //        WCDR[0].CalculatedPrem = WCWorkerMinPrem[0].MINPREMIUM;
        //    }
        //}


        //Calculate Premium based in annual salary
        _TLM7OfferData.LM7Premium()[4].TotalUS(parseInt(WCDR[0].CalculatedCoverAmount * 12) * parseInt(WCDR[0].CalculatedWCCLass.toString()));
        _TLM7OfferData.LM7Premium()[4].Rate(parseFloat(InsuranceClassRow[0].WCSalaryRate.toString()));



        UpdateWCCovers(WCDR);

        if (parseInt(CoverCode.toString()) != 47 && parseInt(CoverCode.toString()) != 48) {
            _TLM7OfferData.LM7Premium()[4].Premium(WCDR[0].CalculatedPrem);
        }

        if (parseInt(FromClass.toString()) != 0 && parseInt(ToClass.toString()) != 0 && parseInt(FromClass.toString()) <= parseInt(ToClass.toString()) && parseInt(CoverCode.toString()) != 50) {

            WCClassrateDR = $.Enumerable.From(ko.mapping.toJS(JSON.parse(sessionStorage.getItem('WCClassRate'))))
            .Where("$.DefaultClass ==" + parseInt(FromClass.toString()) + " && $.ChoosedClass==" + parseInt(ToClass.toString()))
            .ToArray();
            WCDR[0].CalculatedRiders = WCDR[0].CalculatedPrem * parseFloat(WCClassrateDR[0].Rate.toString());
            _TLM7OfferData.LM7Premium()[4].Premium(_TLM7OfferData.LM7Premium()[4].Premium() + parseInt(WCDR[0].CalculatedRiders.toString()));
            UpdateWCCovers(WCClassrateDR);
        }


        //Calculate Delivery motorcycle 
        if (parseInt(CoverCode.toString()) == 50) {
            WCDeliveryDR = $.Enumerable.From(ko.mapping.toJS(_TLM7OfferData.WCCovers()))
            .Where("$.IsIncluded==1 && $.OFFER_LM7COVERS_ID == 50")
            .ToArray();
            WCDeliveryDR[0].CalculatedPrem = Math.round(parseInt(WCDeliveryDR[0].CalculatedWCCLass.toString()) * 150);
            _TLM7OfferData.LM7Premium()[4].Premium(_TLM7OfferData.LM7Premium()[4].Premium() + Math.round(parseInt(WCDeliveryDR[0].CalculatedWCCLass.toString()) * 150));
            UpdateWCCovers(WCDeliveryDR);
        }


        //Calculate Additional Hours
        if (parseInt(CoverCode.toString()) == 47) {
            WCAdditionalRateDR = $.Enumerable.From(ko.mapping.toJS(_TLM7OfferData.WCCovers()))
                .Where("$.IsIncluded==1 && $.OFFER_LM7COVERS_ID == 47")
                .ToArray();

            if (between(parseInt(WCAdditionalRateDR[0].CalculatedCoverAmount.toString()), 1, 4)) {
                WCAdditionalRateDR[0].CalculatedPrem = Math.round(parseInt(_TLM7OfferData.LM7Premium()[4].Premium()) * parseFloat(FourAdditionalHoursRate.toString()));
                //WCAdditionalRateDR[0].CalculatedPrem = Math.round(parseInt(WCDR[0].CalculatedPrem.toString()) * parseFloat(FourAdditionalHoursRate.toString()));
                //_TLM7OfferData.LM7Premium()[4].Premium(_TLM7OfferData.LM7Premium()[4].Premium() + Math.round(parseInt(WCDR[0].CalculatedPrem.toString()) * parseFloat(FourAdditionalHoursRate.toString())));
                _TLM7OfferData.LM7Premium()[4].Premium(_TLM7OfferData.LM7Premium()[4].Premium() + Math.round(parseInt(_TLM7OfferData.LM7Premium()[4].Premium()) * parseFloat(FourAdditionalHoursRate.toString())));
            }

            if (between(parseInt(WCAdditionalRateDR[0].CalculatedCoverAmount.toString()), 5, 8)) {
                WCAdditionalRateDR[0].CalculatedPrem = Math.round(parseInt(_TLM7OfferData.LM7Premium()[4].Premium()) * parseFloat(EightAdditionalHoursRate.toString()));
                //WCAdditionalRateDR[0].CalculatedPrem = Math.round(parseInt(WCDR[0].CalculatedPrem.toString()) * parseFloat(EightAdditionalHoursRate.toString()));
                //_TLM7OfferData.LM7Premium()[4].Premium(_TLM7OfferData.LM7Premium()[4].Premium() + Math.round(parseInt(WCDR[0].CalculatedPrem.toString()) * parseFloat(EightAdditionalHoursRate.toString())));
                _TLM7OfferData.LM7Premium()[4].Premium(_TLM7OfferData.LM7Premium()[4].Premium() + Math.round(parseInt(_TLM7OfferData.LM7Premium()[4].Premium()) * parseFloat(EightAdditionalHoursRate.toString())));
            }

            if (between(parseInt(WCAdditionalRateDR[0].CalculatedCoverAmount.toString()), 9, 12)) {
                WCAdditionalRateDR[0].CalculatedPrem = Math.round(parseInt(_TLM7OfferData.LM7Premium()[4].Premium()) * parseFloat(TwelveAdditionalHoursRate.toString()));
                //WCAdditionalRateDR[0].CalculatedPrem = Math.round(parseInt(WCDR[0].CalculatedPrem.toString()) * parseFloat(TwelveAdditionalHoursRate.toString()));
                //_TLM7OfferData.LM7Premium()[4].Premium(_TLM7OfferData.LM7Premium()[4].Premium() + Math.round(parseInt(WCDR[0].CalculatedPrem.toString()) * parseFloat(TwelveAdditionalHoursRate.toString())));
                _TLM7OfferData.LM7Premium()[4].Premium(_TLM7OfferData.LM7Premium()[4].Premium() + Math.round(parseInt(_TLM7OfferData.LM7Premium()[4].Premium()) * parseFloat(TwelveAdditionalHoursRate.toString())));
            }

            if (between(parseInt(WCAdditionalRateDR[0].CalculatedCoverAmount.toString()), 13, 16)) {
                WCAdditionalRateDR[0].CalculatedPrem = Math.round(parseInt(_TLM7OfferData.LM7Premium()[4].Premium()) * parseFloat(SixteenAdditionalHoursRate.toString()));
                //WCAdditionalRateDR[0].CalculatedPrem = Math.round(parseInt(WCDR[0].CalculatedPrem.toString()) * parseFloat(SixteenAdditionalHoursRate.toString()));
                //_TLM7OfferData.LM7Premium()[4].Premium(_TLM7OfferData.LM7Premium()[4].Premium() + Math.round(parseInt(WCDR[0].CalculatedPrem.toString()) * parseFloat(SixteenAdditionalHoursRate.toString())));
                _TLM7OfferData.LM7Premium()[4].Premium(_TLM7OfferData.LM7Premium()[4].Premium() + Math.round(parseInt(_TLM7OfferData.LM7Premium()[4].Premium()) * parseFloat(SixteenAdditionalHoursRate.toString())));
            }
            UpdateWCCovers(WCAdditionalRateDR);
        }

        //Calculate Additional Days
        if (parseInt(CoverCode.toString()) == 48) {
            WCAdditionalRateDR = $.Enumerable.From(ko.mapping.toJS(_TLM7OfferData.WCCovers()))
            .Where("$.IsIncluded==1 && $.OFFER_LM7COVERS_ID == 48")
            .ToArray();
            //if (between(parseInt(WCAdditionalRateDR[0].CalculatedCoverAmount.toString()), 1, 1)) 
            if (between(parseInt(WCAdditionalRateDR[0].CalculatedCoverAmount.toString()), 1, 2)) {
                WCAdditionalRateDR[0].CalculatedPrem = Math.round(parseInt(_TLM7OfferData.LM7Premium()[4].Premium()) * parseFloat(OneAdditionalDaysRate.toString()));
                //WCAdditionalRateDR[0].CalculatedPrem = Math.round(parseInt(WCDR[0].CalculatedPrem.toString()) * parseFloat(OneAdditionalDaysRate.toString()));
                //_TLM7OfferData.LM7Premium()[4].Premium(_TLM7OfferData.LM7Premium()[4].Premium() + Math.round(parseInt(WCDR[0].CalculatedPrem.toString()) * parseFloat(OneAdditionalDaysRate.toString())));
                _TLM7OfferData.LM7Premium()[4].Premium(_TLM7OfferData.LM7Premium()[4].Premium() + Math.round(parseInt(_TLM7OfferData.LM7Premium()[4].Premium()) * parseFloat(OneAdditionalDaysRate.toString())));
            }
            UpdateWCCovers(WCAdditionalRateDR);
        }


        for (i = 0; i <= _TLM7OfferData.LM7Premium().length - 3; i++) {
            LD_TotalPrem += parseInt(_TLM7OfferData.LM7Premium()[i].Premium().toString());
        }


        if (parseInt(LD_TotalPrem.toString()) <= parseInt(PremPolicyCost)) {
            _TLM7OfferData.LM7Premium()[10].Premium(parseInt(PolicyCostLessThan250.toString()));
        }
        else if (parseInt(LD_TotalPrem.toString()) > parseInt(PremPolicyCost)) {
            _TLM7OfferData.LM7Premium()[10].Premium(parseInt(PolicyCostMore250.toString()));
        }

        _TLM7OfferData.LM7Premium()[11].Premium(0);

        _TLM7OfferData.LM7Premium()[11].Premium(0);
        for (i = 0; i <= _TLM7OfferData.LM7Premium().length - 2; i++) {
            _TLM7OfferData.LM7Premium()[11].Premium(_TLM7OfferData.LM7Premium()[11].Premium() + parseInt(_TLM7OfferData.LM7Premium()[i].Premium()));
        }

    }
    catch (e) {
        alert("CalculateWCPrem: " + e.message);
    }

}
/* --------------------------------------------------------------- */
/* --------------------------------------------------------------- */
function CalculateOtherTPLPrem(CoverCode, CoverNo) {
    try {
        ////debugger;
        var TPLDR = [];
        var ELevatorPremDR = [];
        var LD_TotalPrem = 0;
        var ParkingPremDR = [];
        TPLDR = $.Enumerable.From(ko.mapping.toJS(_TLM7OfferData.TPLCovers()))
            .Where("$.IsIncluded==1 && $.OFFER_LM7COVERS_ID ==" + parseInt(CoverCode.toString()))
            .ToArray();
        ELevatorPremDR = $.Enumerable.From(ko.mapping.toJS(JSON.parse(sessionStorage.getItem('ElevatorPrem'))))
        .Where("$.FromElevatorNO <=" + parseInt(CoverNo.toString()) + " && $.ToElevatorNO>=" + parseInt(CoverNo.toString()))
        .ToArray();
        ParkingPremDR = $.Enumerable.From(ko.mapping.toJS(JSON.parse(sessionStorage.getItem('ParkingPrem'))))
        .Where("$.FromParkingNo <=" + parseInt(CoverNo.toString()) + " && $.ToParkingNo>=" + parseInt(CoverNo.toString()))
        .ToArray();

        //'Elevatlor Cover Code
        if (parseInt(CoverCode.toString()) == 44) {
            if (ELevatorPremDR.length > 0) {
                TPLDR[0].CalculatedPrem = ELevatorPremDR[0].Premium;
                _TLM7OfferData.LM7Premium()[6].Premium(ELevatorPremDR[0].Premium);
            }
            else {
                jq_DisplayNotification('Elevator Number Not Allowed.', 'fail');
                ll_Exit = 1;
                return;
            }
            UpdateTPLCovers(TPLDR);

        }
            // 'Parking Cover Code
        else if (parseInt(CoverCode.toString()) == 45) {
            if (ParkingPremDR.length > 0) {
                TPLDR[0].CalculatedPrem = ParkingPremDR[0].Premium;
                _TLM7OfferData.LM7Premium()[7].Premium(ParkingPremDR[0].Premium);
            }
            else {
                jq_DisplayNotification('Parking Number Not Allowed.', 'fail');
                ll_Exit = 1;
                return;
            }
            UpdateTPLCovers(TPLDR);

        }
            //'Poisoning
        else if (parseInt(CoverCode.toString()) == 46) {
            if (parseInt(TPLDR[0].CoverPremiumRate.toString()) > 0) {
                TPLDR[0].CalculatedPrem = parseInt(TPLDR[0].CoverPremiumRate.toString());
                _TLM7OfferData.LM7Premium()[8].Premium(parseInt(TPLDR[0].CoverPremiumRate.toString()));
            }
            else {
                jq_DisplayNotification('Poisoning Number Not Allowed.', 'fail');
                ll_Exit = 1;
                return;
            }
            UpdateTPLCovers(TPLDR);

        }

        //'CHeck Total Premium and set policyCost =35 if Prem < 250 and PolicyCost=50 if Prem > 250
        for (i = 0; i <= _TLM7OfferData.LM7Premium().length - 3; i++) {
            LD_TotalPrem += parseInt(_TLM7OfferData.LM7Premium()[i].Premium().toString());
        }

        if (parseInt(LD_TotalPrem.toString()) <= parseInt(PremPolicyCost)) {
            _TLM7OfferData.LM7Premium()[10].Premium(parseInt(PolicyCostLessThan250.toString()));
        }
        else if (parseInt(LD_TotalPrem.toString()) > parseInt(PremPolicyCost)) {
            _TLM7OfferData.LM7Premium()[10].Premium(parseInt(PolicyCostMore250.toString()));
        }

        _TLM7OfferData.LM7Premium()[11].Premium(0);

        _TLM7OfferData.LM7Premium()[11].Premium(0);
        for (i = 0; i <= _TLM7OfferData.LM7Premium().length - 2; i++) {
            _TLM7OfferData.LM7Premium()[11].Premium(_TLM7OfferData.LM7Premium()[11].Premium() + parseInt(_TLM7OfferData.LM7Premium()[i].Premium()));
        }

    }
    catch (e) {
        alert("CalculateOtherTPLPrem: " + e.message);
    }
}
/* --------------------------------------------------------------- */
function CalculateTPLPrem(TPLClass) {
    try {
        //////debugger;
        var TPLDR = [];
        var LD_TotalPrem = 0;
        var WCSumInsuredDataRow = [];
        WCSumInsuredDataRow = $.Enumerable.From(ko.mapping.toJS(JSON.parse(sessionStorage.getItem('WCClassesSumInsured'))))
        .Where("$.WCClasseCode ==" + parseInt(TPLClass.toString()) + " && $.OFFER_LM7COVERS_ID==40")
        .ToArray();
        TPLDR = $.Enumerable.From(ko.mapping.toJS(_TLM7OfferData.TPLCovers()))
        .Where("$.IsIncluded==1 && $.OFFER_LM7COVERS_ID == 40")
        .ToArray();
        TPLDR[0].CalculatedPrem = WCSumInsuredDataRow[0].DefaultPrem;
        _TLM7OfferData.LM7Premium()[5].Premium(TPLDR[0].CalculatedPrem);

        UpdateTPLCovers(TPLDR);
        //'CHeck Total Premium and set policyCost =35 if Prem < 250 and PolicyCost=50 if Prem > 250
        for (i = 0; i <= _TLM7OfferData.LM7Premium().length - 3; i++) {
            LD_TotalPrem += parseInt(_TLM7OfferData.LM7Premium()[i].Premium().toString());
        }

        if (parseInt(LD_TotalPrem.toString()) <= parseInt(PremPolicyCost)) {
            _TLM7OfferData.LM7Premium()[10].Premium(parseInt(PolicyCostLessThan250.toString()));
        }
        else if (parseInt(LD_TotalPrem.toString()) > parseInt(PremPolicyCost)) {
            _TLM7OfferData.LM7Premium()[10].Premium(parseInt(PolicyCostMore250.toString()));
        }


        _TLM7OfferData.LM7Premium()[11].Premium(0);
        for (i = 0; i <= _TLM7OfferData.LM7Premium().length - 2; i++) {
            _TLM7OfferData.LM7Premium()[11].Premium(_TLM7OfferData.LM7Premium()[11].Premium() + parseInt(_TLM7OfferData.LM7Premium()[i].Premium()));
        }

    }
    catch (e) {
        alert("CalculateTPLPrem: " + e.message);
    }

}

/* --------------------------------------------------------------- */
function CalculateFirePrem() {
    try {
        ////debugger;
        // alert(_Service_Method);
        var LM7DR = [];
        var AlliedPerilsDR = [];
        var BurglaryDR = [];
        var CashInTransitDR = [];
        var AgreedValuesDR = [];
        var AddOptCoverDR = [];
        var InsuranceClassRow = [];
        var AddBrokerPremDR = [];
        var AddVictoirePremDR = [];
        var TotalSumInsuredDR = [];
        var LI_TotalPrem = 0;
        var LD_TotalPrem = 0;
        var BrokerRate = 0;
        var TotalUS = 0;
        var TotalRiders = 0; var TotalAddOptCover = 0;

        InsuranceClassRow = $.Enumerable.From(ko.mapping.toJS(MyApp_GVM.List_FireClasses))
            .Where("$.OFFER_INSURANCECLASSES_ID  == " + parseInt(_TLM7OfferData.OFFER_INSURANCECLASSES_ID().toString()) + "")
            .ToArray();

        LM7DR = $.Enumerable.From(ko.mapping.toJS(_TLM7OfferData.LM7Covers()))
        .Where("$.GroupCoverID == 0  && $.IsIncluded==1 && $.OFFER_LM7COVERS_ID != 0 && $.OFFER_LM7COVERS_ID != 49")
        .ToArray();

        _TLM7OfferData.LM7Premium()[0].Premium(0);
        _TLM7OfferData.LM7Premium()[0].TotalUS(0);
        _TLM7OfferData.LM7Premium()[0].Rate(0);
        _TLM7OfferData.LM7Premium()[2].Premium(0);
        _TLM7OfferData.LM7Premium()[3].Premium(0);
        _TLM7OfferData.LM7Premium()[9].Premium(0);
        _TLM7OfferData.LM7Premium()[10].Premium(0);
        _TLM7OfferData.LM7Premium()[11].Premium(0);

        LI_TotalPrem = 0;

        if (_TLM7OfferData.BrokerRate() != null && _TLM7OfferData.BrokerRate() != 0) {
            BrokerRate = parseFloat(_TLM7OfferData.BrokerRate().toString());
        }
        else {
            BrokerRate = InsuranceClassRow[0].F7BrokerRate;
        }


        ko.utils.arrayForEach(LM7DR, function (item) {
            //////debugger;
            item.CalculatedPrem = parseFloat(item.CalculatedAmount.toString()) * parseFloat(BrokerRate.toString());

            TotalUS += parseFloat(item.CalculatedAmount.toString());
            _TLM7OfferData.TotalSumInsured(TotalUS);
            _TLM7OfferData.MaxSumInsured(InsuranceClassRow[0].MaxTotSumIns);
            _TLM7OfferData.LM7Premium()[0].TotalUS(TotalUS);
            _TLM7OfferData.LM7Premium()[0].Rate(parseFloat(BrokerRate.toString()));

            LI_TotalPrem += parseInt(item.CalculatedPrem.toString());
            _TLM7OfferData.LM7Premium()[0].Premium(Math.round(LI_TotalPrem / 1000));
        });

        if (LM7DR.length > 0) {
            UpdateFireCovers(LM7DR);
        }

        if (_TLM7OfferData.LM7Premium()[0].TotalUS() != "") {
            if (parseInt(TotalUS.toString()) > parseInt(InsuranceClassRow[0].MaxTotSumIns.toString())) {
                showToast('error', "Sum Insured Exceeds " + InsuranceClassRow[0].MaxTotSumIns + " (MAXIMUM defined) !", 'Error');
            }

        }

        //$(".FireTotalSumInsured").show();
        //$('#FireSumInsured').html("<p>Your Total Sum Insured: " + $.number(TotalUS) + "$</p>" + "<p style='color:red'><b>Maximumn Sum Insured is: " + $.number(InsuranceClassRow[0].MaxTotSumIns.toString()) + "$</b></p>");

        //Calculate Additional riders for allied Perils which mean groupe 9 (GroupCoverID=9) from covercode 10 to 22
        AlliedPerilsDR = $.Enumerable.From(ko.mapping.toJS(_TLM7OfferData.LM7Covers()))
        .Where("$.GroupCoverID == 9  && $.IsIncluded==1 && $.OFFER_LM7COVERS_ID != 9")
        .ToArray();
        ko.utils.arrayForEach(AlliedPerilsDR, function (item) {
            //////debugger;
            item.CalculatedRiders = (parseInt(item.CalculatedAmount.toString()) - parseInt(item.CalculatedCoverAmount.toString())) * parseFloat(BrokerRate.toString()) * parseFloat(BrokerRate.toString()) / 1000;
            if (parseInt(item.CalculatedRiders.toString()) < 0) {
                item.CalculatedRiders = 0;
            }
            TotalRiders += parseInt(item.CalculatedRiders.toString());
        });

        _TLM7OfferData.LM7Premium()[2].Premium(Math.round(TotalRiders));
        if (AlliedPerilsDR.length > 0) {
            UpdateFireCovers(AlliedPerilsDR);
        }


        //Calculate Additional riders for Cash in transit and or Hold-Up which mean groupe 23 (GroupCoverID=23) and covercode 25
        CashInTransitDR = $.Enumerable.From(ko.mapping.toJS(_TLM7OfferData.LM7Covers()))
        .Where("$.GroupCoverID == 23  && $.IsIncluded==1 && $.OFFER_LM7COVERS_ID == 25")
        .ToArray();
        ko.utils.arrayForEach(CashInTransitDR, function (item) {
            //////debugger;
            item.CalculatedRiders = Math.round((parseInt(item.CalculatedAmount.toString()) - parseInt(item.CalculatedCoverAmount.toString())) * parseFloat(item.CoverPremiumRate.toString())); //* parseFloat(BrokerRate.toString()) / 1000;
            if (parseInt(item.CalculatedRiders.toString()) < 0) {
                item.CalculatedRiders = 0;
            }
            TotalRiders += parseInt(item.CalculatedRiders.toString());
        });
        _TLM7OfferData.LM7Premium()[2].Premium(Math.round(TotalRiders));

        if (CashInTransitDR.length > 0) {
            UpdateFireCovers(CashInTransitDR);
        }

        //Calculate Additional riders for Burglary Covers which mean groupe 23 (GroupCoverID=23) from covercode 24 to 26 exception Cash in transit and Hold UP
        BurglaryDR = $.Enumerable.From(ko.mapping.toJS(_TLM7OfferData.LM7Covers()))
        .Where("$.GroupCoverID == 23  && $.IsIncluded==1 && $.OFFER_LM7COVERS_ID != 23 && $.OFFER_LM7COVERS_ID != 25")
        .ToArray();
        ko.utils.arrayForEach(BurglaryDR, function (item) {
            ////debugger;
            item.CalculatedRiders = Math.round((parseInt(item.CalculatedAmount.toString()) - parseInt(item.CalculatedCoverAmount.toString())) * parseFloat(BrokerRate.toString()) / 1000);
            if (parseInt(item.CalculatedRiders.toString()) < 0) {
                item.CalculatedRiders = 0;
            }
            TotalRiders += parseInt(item.CalculatedRiders.toString());
        });
        _TLM7OfferData.LM7Premium()[2].Premium(Math.round(TotalRiders));

        if (BurglaryDR.length > 0) {
            UpdateFireCovers(BurglaryDR);
        }

        //Calculate Additional riders for Additional Optional Covers which mean groupe 27 (GroupCoverID=27) from covercode 28 to 29
        AddOptCoverDR = $.Enumerable.From(ko.mapping.toJS(_TLM7OfferData.LM7Covers()))
        .Where("$.GroupCoverID == 27  && $.IsIncluded==1 && $.OFFER_LM7COVERS_ID != 27")
        .ToArray();
        ko.utils.arrayForEach(AddOptCoverDR, function (item) {
            //////debugger;
            item.CalculatedRiders = Math.round(parseInt(item.CalculatedAmount.toString()) * parseFloat(item.CoverPremiumRate.toString()) * parseFloat(BrokerRate.toString()) / 1000);
            TotalAddOptCover += parseInt(item.CalculatedRiders.toString());
        });
        _TLM7OfferData.LM7Premium()[3].Premium(Math.round(TotalAddOptCover));
        if (AddOptCoverDR.length > 0) {
            UpdateFireCovers(AddOptCoverDR);
        }

        //////debugger;
        //Calculate Additional Premium for Brokers
        AddBrokerPremDR = $.Enumerable.From(ko.mapping.toJS(_TLM7OfferData.LM7Covers()))
        .Where("$.IsIncluded==1 && $.OFFER_LM7COVERS_ID == 31")
        .ToArray();
        ko.utils.arrayForEach(AddBrokerPremDR, function (item) {
            //////debugger;
            item.CalculatedPrem = parseInt(item.CalculatedCoverAmount.toString());
            _TLM7OfferData.LM7Premium()[9].Premium(Math.round(parseInt(item.CalculatedCoverAmount.toString())));
        });
        if (AddBrokerPremDR.length > 0) {
            UpdateFireCovers(AddBrokerPremDR);
        }

        //Calculate Agreed Values
        AgreedValuesDR = $.Enumerable.From(ko.mapping.toJS(_TLM7OfferData.LM7Covers()))
        .Where("$.IsIncluded==1 && $.OFFER_LM7COVERS_ID == 49")
        .ToArray();
        ko.utils.arrayForEach(AgreedValuesDR, function (item) {
            //////debugger;
            item.CalculatedPrem = Math.round(parseInt(item.CalculatedCoverAmount.toString()) * 0.0005);
            _TLM7OfferData.LM7Premium()[1].TotalUS(item.CalculatedCoverAmount);
            _TLM7OfferData.LM7Premium()[1].Rate(0.0005);
            _TLM7OfferData.LM7Premium()[1].Premium(Math.round(parseInt(item.CalculatedCoverAmount.toString()) * 0.0005));
        });
        if (AgreedValuesDR.length > 0) {
            UpdateFireCovers(AgreedValuesDR);
        }

        //if (_UserInfo.IS_UNDERWRITER.toString().toUpperCase() == "TRUE") {
        //    //Calculate Additional Premium for Victoire
        //    AddVictoirePremDR = $.Enumerable.From(ko.mapping.toJS(_TLM7OfferData.LM7Covers()))
        //    .Where("$.IsIncluded==1 && $.OFFER_LM7COVERS_ID == 32")
        //    .ToArray();
        //    ko.utils.arrayForEach(AddVictoirePremDR, function (item) {
        //        //////debugger;
        //        item.CalculatedPrem = parseInt(item.CalculatedCoverAmount.toString());
        //        _TLM7OfferData.LM7Premium()[0].Premium(parseInt(_TLM7OfferData.LM7Premium()[0].Premium().toString()) + parseInt(item.CalculatedPrem.toString()));
        //    });
        //}

        //if (AddVictoirePremDR.length > 0) {
        //    UpdateFireCovers(AddVictoirePremDR);
        //}

        //CHeck Total Premium and set policyCost =35 if Prem < 250 and PolicyCost=50 if Prem > 250
        for (i = 0; i <= _TLM7OfferData.LM7Premium().length - 3; i++) {
            LD_TotalPrem += parseInt(_TLM7OfferData.LM7Premium()[i].Premium().toString());
        }

        if (parseInt(LD_TotalPrem.toString()) <= parseInt(PremPolicyCost)) {
            _TLM7OfferData.LM7Premium()[10].Premium(parseInt(PolicyCostLessThan250.toString()));
        }
        else if (parseInt(LD_TotalPrem.toString()) > parseInt(PremPolicyCost)) {
            _TLM7OfferData.LM7Premium()[10].Premium(parseInt(PolicyCostMore250.toString()));
        }

        //Calculate Total Premium
        for (i = 0; i <= _TLM7OfferData.LM7Premium().length - 2; i++) {
            _TLM7OfferData.LM7Premium()[11].Premium(parseInt(_TLM7OfferData.LM7Premium()[11].Premium().toString()) + parseInt(_TLM7OfferData.LM7Premium()[i].Premium().toString()))
        }
    }
    catch (e) {
        alert("CalculateFirePrem:" + e.message);
    }
}
/* --------------------------------------------------------------- */
/* --------------------------------------------------------------- */
function RecalculatePrem() {
    try {
        //alert('test');
        //////debugger;
        var LD_TotalPrem = 0;
        //CHeck Total Premium and set policyCost =35 if Prem < 250 and PolicyCost=50 if Prem > 250
        for (l = 0; l <= _TLM7OfferData.LM7Premium().length - 3; l++) {
            LD_TotalPrem += parseInt(_TLM7OfferData.LM7Premium()[l].Premium().toString());
        }
        //Substract Policy Cost
        _TLM7OfferData.LM7Premium()[11].Premium(parseInt(_TLM7OfferData.LM7Premium()[11].Premium().toString()) - parseInt(_TLM7OfferData.LM7Premium()[10].Premium().toString()));

        if (parseInt(LD_TotalPrem.toString()) <= parseInt(PremPolicyCost)) {
            _TLM7OfferData.LM7Premium()[10].Premium(parseInt(PolicyCostLessThan250.toString()));
        }
        else if (parseInt(LD_TotalPrem.toString()) > parseInt(PremPolicyCost)) {
            _TLM7OfferData.LM7Premium()[10].Premium(parseInt(PolicyCostMore250.toString()));
        }

        //Adding New Policy Cost
        _TLM7OfferData.LM7Premium()[11].Premium(_TLM7OfferData.LM7Premium()[11].Premium() + _TLM7OfferData.LM7Premium()[10].Premium());
    }
    catch (e) {
        alert("RecalculatePrem: " + e.message);
    }
}
/* --------------------------------------------------------------- */

///* --------------------------------------------------------------- */

//function CalculateWCPrem(ToClass, CoverCode) {
//    try {
//        var WCDR = [];
//        var InsuranceClassRow = [];
//        var WCClassrateDR = [];
//        var WCAdditionalRateDR = [];
//        var FromClass;
//        var LD_TotalPrem = 0;
//        //////debugger;
//        //When Salary Amount is changed reset Hours and Day Premm
//        if (parseInt(CoverCode.toString()) == 34) {
//            WCDR = $.Enumerable.From(ko.mapping.toJS(_TLM7OfferData.WCCovers()))
//            .Where("$.IsIncluded==1 && $.OFFER_LM7COVERS_ID == 47")
//            .ToArray();

//            WCDR[0].IsRequired = 0
//            WCDR[0].CalculatedAmount = 0
//            WCDR[0].CalculatedCoverAmount = 0
//            WCDR[0].CalculatedWCCLass = 0
//            WCDR[0].CalculatedRiders = 0

//            WCDR = $.Enumerable.From(ko.mapping.toJS(_TLM7OfferData.WCCovers()))
//                .Where("$.IsIncluded==1 && $.OFFER_LM7COVERS_ID == 48")
//                .ToArray();

//            WCDR[0].IsRequired = 0
//            WCDR[0].CalculatedAmount = 0
//            WCDR[0].CalculatedCoverAmount = 0
//            WCDR[0].CalculatedWCCLass = 0
//            WCDR[0].CalculatedRiders = 0
//        }

//        UpdateWCCovers(WCDR);

//        InsuranceClassRow = $.Enumerable.From(ko.mapping.toJS(MyApp_GVM.List_FireClasses))
//        .Where("$.OFFER_INSURANCECLASSES_ID  == " + parseInt(_TLM7OfferData.OFFER_INSURANCECLASSES_ID().toString()) + "")
//        .ToArray();

//        FromClass = parseInt(InsuranceClassRow[0].WCClassID.toString());
//        //Calculate the Premium based on Group Cover
//        //Calculate the Premium 
//        WCDR = $.Enumerable.From(ko.mapping.toJS(_TLM7OfferData.WCCovers()))
//            .Where("$.IsIncluded==1 && $.OFFER_LM7COVERS_ID == 34")
//            .ToArray();

//        WCDR[0].CalculatedPrem = parseInt(WCDR[0].CalculatedCoverAmount.toString()) * parseFloat(InsuranceClassRow[0].WCSalaryRate.toString());

//        _TLM7OfferData.LM7Premium()[3].TotalUS(parseInt(WCDR[0].CalculatedCoverAmount));
//        _TLM7OfferData.LM7Premium()[3].Rate(parseFloat(InsuranceClassRow[0].WCSalaryRate.toString()));

//        UpdateWCCovers(WCDR);

//        if (parseInt(CoverCode.toString()) != 47 && parseInt(CoverCode.toString()) != 48) {
//            _TLM7OfferData.LM7Premium()[3].Premium(WCDR[0].CalculatedPrem);
//        }
//        //////debugger;
//        if (parseInt(FromClass.toString()) != 0 && parseInt(ToClass.toString()) != 0 && parseInt(FromClass.toString()) <= parseInt(ToClass.toString())) {

//            WCClassrateDR = $.Enumerable.From(ko.mapping.toJS(JSON.parse(sessionStorage.getItem('WCClassRate'))))
//            .Where("$.DefaultClass ==" + parseInt(FromClass.toString()) + " && $.ChoosedClass==" + parseInt(ToClass.toString()))
//            .ToArray();
//            WCDR[0].CalculatedRiders = WCDR[0].CalculatedPrem * parseFloat(WCClassrateDR[0].Rate.toString());
//            _TLM7OfferData.LM7Premium()[3].Premium(_TLM7OfferData.LM7Premium()[3].Premium() + parseInt(WCDR[0].CalculatedRiders.toString()));
//            UpdateWCCovers(WCClassrateDR);
//        }

//        //Calculate Additional Hours
//        if (parseInt(CoverCode.toString()) == 47) {
//            WCAdditionalRateDR = $.Enumerable.From(ko.mapping.toJS(_TLM7OfferData.WCCovers()))
//                .Where("$.IsIncluded==1 && $.OFFER_LM7COVERS_ID == 47")
//                .ToArray();

//            if (between(parseInt(WCAdditionalRateDR[0].CalculatedCoverAmount.toString()), 1, 4)) {
//                WCAdditionalRateDR[0].CalculatedPrem = Math.round(parseInt(WCDR[0].CalculatedPrem.toString()) * parseFloat(FourAdditionalHoursRate.toString()));
//                _TLM7OfferData.LM7Premium()[3].Premium(_TLM7OfferData.LM7Premium()[3].Premium() + Math.round(parseInt(WCDR[0].CalculatedPrem.toString()) * parseFloat(FourAdditionalHoursRate.toString())));
//            }

//            if (between(parseInt(WCAdditionalRateDR[0].CalculatedCoverAmount.toString()), 5, 8)) {
//                WCAdditionalRateDR[0].CalculatedPrem = Math.round(parseInt(WCDR[0].CalculatedPrem.toString()) * parseFloat(EightAdditionalHoursRate.toString()));
//                _TLM7OfferData.LM7Premium()[3].Premium(_TLM7OfferData.LM7Premium()[3].Premium() + Math.round(parseInt(WCDR[0].CalculatedPrem.toString()) * parseFloat(EightAdditionalHoursRate.toString())));
//            }

//            if (between(parseInt(WCAdditionalRateDR[0].CalculatedCoverAmount.toString()), 9, 12)) {
//                WCAdditionalRateDR[0].CalculatedPrem = Math.round(parseInt(WCDR[0].CalculatedPrem.toString()) * parseFloat(TwelveAdditionalHoursRate.toString()));
//                _TLM7OfferData.LM7Premium()[3].Premium(_TLM7OfferData.LM7Premium()[3].Premium() + Math.round(parseInt(WCDR[0].CalculatedPrem.toString()) * parseFloat(TwelveAdditionalHoursRate.toString())));
//            }

//            if (between(parseInt(WCAdditionalRateDR[0].CalculatedCoverAmount.toString()), 13, 16)) {
//                WCAdditionalRateDR[0].CalculatedPrem = Math.round(parseInt(WCDR[0].CalculatedPrem.toString()) * parseFloat(SixteenAdditionalHoursRate.toString()));
//                _TLM7OfferData.LM7Premium()[3].Premium(_TLM7OfferData.LM7Premium()[3].Premium() + Math.round(parseInt(WCDR[0].CalculatedPrem.toString()) * parseFloat(SixteenAdditionalHoursRate.toString())));
//            }
//            UpdateWCCovers(WCAdditionalRateDR);
//        }

//        //Calculate Additional Days
//        if (parseInt(CoverCode.toString()) == 48) {
//            WCAdditionalRateDR = $.Enumerable.From(ko.mapping.toJS(_TLM7OfferData.WCCovers()))
//            .Where("$.IsIncluded==1 && $.OFFER_LM7COVERS_ID == 48")
//            .ToArray();
//            if (between(parseInt(WCAdditionalRateDR[0].CalculatedCoverAmount.toString()), 1, 1)) {
//                WCAdditionalRateDR[0].CalculatedPrem = Math.round(parseInt(WCDR[0].CalculatedPrem.toString()) * parseFloat(OneAdditionalDaysRate.toString()));
//                _TLM7OfferData.LM7Premium()[3].Premium(_TLM7OfferData.LM7Premium()[3].Premium() + Math.round(parseInt(WCDR[0].CalculatedPrem.toString()) * parseFloat(OneAdditionalDaysRate.toString())));
//            }
//            UpdateWCCovers(WCAdditionalRateDR);
//        }

//        for (i = 0; i <= _TLM7OfferData.LM7Premium().length - 3; i++) {
//            LD_TotalPrem += parseInt(_TLM7OfferData.LM7Premium()[i].Premium().toString());
//        }


//        if (parseInt(LD_TotalPrem.toString()) <= parseInt(PremPolicyCost)) {
//            _TLM7OfferData.LM7Premium()[9].Premium(parseInt(PolicyCostLessThan250.toString()));
//        }
//        else if (parseInt(LD_TotalPrem.toString()) > parseInt(PremPolicyCost)) {
//            _TLM7OfferData.LM7Premium()[9].Premium(parseInt(PolicyCostMore250.toString()));
//        }

//        _TLM7OfferData.LM7Premium()[10].Premium(0);

//        _TLM7OfferData.LM7Premium()[10].Premium(0);
//        for (i = 0; i <= _TLM7OfferData.LM7Premium().length - 2; i++) {
//            _TLM7OfferData.LM7Premium()[10].Premium(_TLM7OfferData.LM7Premium()[10].Premium() + parseInt(_TLM7OfferData.LM7Premium()[i].Premium()));
//        }

//    }
//    catch (e) {
//        alert("CalculateWCPrem: " + e.message);
//    }

//}
///* --------------------------------------------------------------- */

///* --------------------------------------------------------------- */
//function CalculateOtherTPLPrem(CoverCode, CoverNo) {
//    try {
//        ////////debugger;
//        var TPLDR = [];
//        var ELevatorPremDR = [];
//        var LD_TotalPrem = 0;
//        var ParkingPremDR = [];
//        TPLDR = $.Enumerable.From(ko.mapping.toJS(_TLM7OfferData.TPLCovers()))
//            .Where("$.IsIncluded==1 && $.OFFER_LM7COVERS_ID ==" + parseInt(CoverCode.toString()))
//            .ToArray();
//        ELevatorPremDR = $.Enumerable.From(ko.mapping.toJS(JSON.parse(sessionStorage.getItem('ElevatorPrem'))))
//        .Where("$.FromElevatorNO <=" + parseInt(CoverNo.toString()) + " && $.ToElevatorNO>=" + parseInt(CoverNo.toString()))
//        .ToArray();
//        ParkingPremDR = $.Enumerable.From(ko.mapping.toJS(JSON.parse(sessionStorage.getItem('ParkingPrem'))))
//        .Where("$.FromParkingNo <=" + parseInt(CoverNo.toString()) + " && $.ToParkingNo>=" + parseInt(CoverNo.toString()))
//        .ToArray();

//        //'Elevatlor Cover Code
//        if (parseInt(CoverCode.toString()) == 44) {
//            if (ELevatorPremDR.length > 0) {
//                TPLDR[0].CalculatedPrem = ELevatorPremDR[0].Premium;
//                _TLM7OfferData.LM7Premium()[5].Premium(ELevatorPremDR[0].Premium);
//            }
//            else {
//                jq_DisplayMessage("MSG_GeneralError", "", 'Elevator Number Not Allowed.');
//                ll_Exit = 1;
//                return;
//            }
//            UpdateTPLCovers(TPLDR);

//        }
//            // 'Parking Cover Code
//        else if (parseInt(CoverCode.toString()) == 45) {
//            if (ParkingPremDR.length > 0) {
//                TPLDR[0].CalculatedPrem = ParkingPremDR[0].Premium;
//                _TLM7OfferData.LM7Premium()[6].Premium(ParkingPremDR[0].Premium);
//            }
//            else {
//                jq_DisplayMessage("MSG_GeneralError", "", 'Parking Number Not Allowed.');
//                ll_Exit = 1;
//                return;
//            }
//            UpdateTPLCovers(TPLDR);

//        }
//            //'Poisoning
//        else if (parseInt(CoverCode.toString()) == 46) {
//            if (parseInt(TPLDR[0].CoverPremiumRate.toString()) > 0) {
//                _TLM7OfferData.LM7Premium()[7].Premium(parseInt(TPLDR[0].CoverPremiumRate.toString()));
//            }
//            else {
//                jq_DisplayMessage("MSG_GeneralError", "", 'Poisoning Number Not Allowed.');
//                ll_Exit = 1;
//                return;
//            }
//            UpdateTPLCovers(TPLDR);

//        }

//        //'CHeck Total Premium and set policyCost =35 if Prem < 250 and PolicyCost=50 if Prem > 250
//        for (i = 0; i <= _TLM7OfferData.LM7Premium().length - 3; i++) {
//            LD_TotalPrem += parseInt(_TLM7OfferData.LM7Premium()[i].Premium().toString());
//        }

//        if (parseInt(LD_TotalPrem.toString()) <= parseInt(PremPolicyCost)) {
//            _TLM7OfferData.LM7Premium()[9].Premium(parseInt(PolicyCostLessThan250.toString()));
//        }
//        else if (parseInt(LD_TotalPrem.toString()) > parseInt(PremPolicyCost)) {
//            _TLM7OfferData.LM7Premium()[9].Premium(parseInt(PolicyCostMore250.toString()));
//        }

//        _TLM7OfferData.LM7Premium()[10].Premium(0);

//        _TLM7OfferData.LM7Premium()[10].Premium(0);
//        for (i = 0; i <= _TLM7OfferData.LM7Premium().length - 2; i++) {
//            _TLM7OfferData.LM7Premium()[10].Premium(_TLM7OfferData.LM7Premium()[10].Premium() + parseInt(_TLM7OfferData.LM7Premium()[i].Premium()));
//        }

//    }
//    catch (e) {
//        alert("CalculateOtherTPLPrem: " + e.message);
//    }
//}
///* --------------------------------------------------------------- */

//function CalculateTPLPrem(TPLClass) {
//    try {
//        ////////debugger;
//        var TPLDR = [];
//        var LD_TotalPrem = 0;
//        var WCSumInsuredDataRow = [];
//        WCSumInsuredDataRow = $.Enumerable.From(ko.mapping.toJS(JSON.parse(sessionStorage.getItem('WCClassesSumInsured'))))
//        .Where("$.WCClasseCode ==" + parseInt(TPLClass.toString()) + " && $.OFFER_LM7COVERS_ID==40")
//        .ToArray();
//        TPLDR = $.Enumerable.From(ko.mapping.toJS(_TLM7OfferData.TPLCovers()))
//        .Where("$.IsIncluded==1 && $.OFFER_LM7COVERS_ID == 40")
//        .ToArray();
//        TPLDR[0].CalculatedPrem = WCSumInsuredDataRow[0].DefaultPrem;
//        _TLM7OfferData.LM7Premium()[4].Premium(TPLDR[0].CalculatedPrem);

//        UpdateTPLCovers(TPLDR);
//        //'CHeck Total Premium and set policyCost =35 if Prem < 250 and PolicyCost=50 if Prem > 250
//        for (i = 0; i <= _TLM7OfferData.LM7Premium().length - 3; i++) {
//            LD_TotalPrem += parseInt(_TLM7OfferData.LM7Premium()[i].Premium().toString());
//        }

//        if (parseInt(LD_TotalPrem.toString()) <= parseInt(PremPolicyCost)) {
//            _TLM7OfferData.LM7Premium()[9].Premium(parseInt(PolicyCostLessThan250.toString()));
//        }
//        else if (parseInt(LD_TotalPrem.toString()) > parseInt(PremPolicyCost)) {
//            _TLM7OfferData.LM7Premium()[9].Premium(parseInt(PolicyCostMore250.toString()));
//        }


//        _TLM7OfferData.LM7Premium()[10].Premium(0);
//        for (i = 0; i <= _TLM7OfferData.LM7Premium().length - 2; i++) {
//            _TLM7OfferData.LM7Premium()[10].Premium(_TLM7OfferData.LM7Premium()[10].Premium() + parseInt(_TLM7OfferData.LM7Premium()[i].Premium()));
//        }

//    }
//    catch (e) {
//        alert("CalculateTPLPrem: " + e.message);
//    }

//}

///* --------------------------------------------------------------- */
//function CalculateFirePrem() {
//    try {
//        ////////debugger;
//        // alert(_Service_Method);
//        var LM7DR = [];
//        var AlliedPerilsDR = [];
//        var BurglaryDR = [];
//        var AddOptCoverDR = [];
//        var InsuranceClassRow = [];
//        var AddBrokerPremDR = [];
//        var AddVictoirePremDR = [];
//        var TotalSumInsuredDR = [];
//        var LI_TotalPrem = 0;
//        var LD_TotalPrem = 0;
//        var BrokerRate = 0;
//        var TotalUS = 0;
//        var TotalRiders = 0; var TotalAddOptCover = 0;

//        InsuranceClassRow = $.Enumerable.From(ko.mapping.toJS(MyApp_GVM.List_FireClasses))
//            .Where("$.OFFER_INSURANCECLASSES_ID  == " + parseInt(_TLM7OfferData.OFFER_INSURANCECLASSES_ID().toString()) + "")
//            .ToArray();

//        LM7DR = $.Enumerable.From(ko.mapping.toJS(_TLM7OfferData.LM7Covers()))
//        .Where("$.GroupCoverID == 0  && $.IsIncluded==1 && $.OFFER_LM7COVERS_ID != 0")
//        .ToArray();

//        _TLM7OfferData.LM7Premium()[0].Premium(0);
//        _TLM7OfferData.LM7Premium()[0].TotalUS(0);
//        _TLM7OfferData.LM7Premium()[0].Rate(0);
//        _TLM7OfferData.LM7Premium()[1].Premium(0);
//        _TLM7OfferData.LM7Premium()[2].Premium(0);
//        _TLM7OfferData.LM7Premium()[8].Premium(0);
//        _TLM7OfferData.LM7Premium()[9].Premium(0);
//        _TLM7OfferData.LM7Premium()[10].Premium(0);

//        LI_TotalPrem = 0;

//        if (_TLM7OfferData.BrokerRate() != null && _TLM7OfferData.BrokerRate() != 0) {
//            BrokerRate = parseFloat(_TLM7OfferData.BrokerRate().toString());
//        }
//        else {
//            BrokerRate = InsuranceClassRow[0].F7BrokerRate;
//        }

//        ko.utils.arrayForEach(LM7DR, function (item) {
//            ////////debugger;
//            item.CalculatedPrem = parseFloat(item.CalculatedAmount.toString()) * parseFloat(BrokerRate.toString());

//            TotalUS += parseFloat(item.CalculatedAmount.toString());
//            _TLM7OfferData.TotalSumInsured(TotalUS);
//            _TLM7OfferData.MaxSumInsured(InsuranceClassRow[0].MaxTotSumIns);
//            _TLM7OfferData.LM7Premium()[0].TotalUS(TotalUS);
//            _TLM7OfferData.LM7Premium()[0].Rate(parseFloat(BrokerRate.toString()));

//            LI_TotalPrem += parseInt(item.CalculatedPrem.toString());
//            _TLM7OfferData.LM7Premium()[0].Premium(Math.round(LI_TotalPrem / 1000));
//        });

//        if (LM7DR.length > 0) {
//            UpdateFireCovers(LM7DR);
//        }

//        if (_TLM7OfferData.LM7Premium()[0].TotalUS() != "") {
//            if (parseInt(TotalUS.toString()) > parseInt(InsuranceClassRow[0].MaxTotSumIns.toString())) {
//                showToast("Sum Insured Exceeds " + InsuranceClassRow[0].MaxTotSumIns + " (MAXIMUM defined) !", 'fail');
//            }

//        }

//        $(".FireTotalSumInsured").show();
//        $('#FireSumInsured').html("<p>Your Total Sum Insured: " + $.number(TotalUS) + "$</p>" + "<p style='color:red'><b>Maximumn Sum Insured is: " + $.number(InsuranceClassRow[0].MaxTotSumIns.toString()) + "$</b></p>");

//        //Calculate Additional riders for allied Perils which mean groupe 9 (GroupCoverID=9) from covercode 10 to 22
//        AlliedPerilsDR = $.Enumerable.From(ko.mapping.toJS(_TLM7OfferData.LM7Covers()))
//        .Where("$.GroupCoverID == 9  && $.IsIncluded==1 && $.OFFER_LM7COVERS_ID != 9")
//        .ToArray();
//        ko.utils.arrayForEach(AlliedPerilsDR, function (item) {
//            ////////debugger;
//            item.CalculatedRiders = (parseInt(item.CalculatedAmount.toString()) - parseInt(item.CalculatedCoverAmount.toString())) * parseFloat(BrokerRate.toString()) * parseFloat(BrokerRate.toString()) / 1000;
//            if (parseInt(item.CalculatedRiders.toString()) < 0) {
//                item.CalculatedRiders = 0;
//            }
//            TotalRiders += parseInt(item.CalculatedRiders.toString());
//        });

//        _TLM7OfferData.LM7Premium()[1].Premium(Math.round(TotalRiders));
//        if (AlliedPerilsDR.length > 0) {
//            UpdateFireCovers(AlliedPerilsDR);
//        }

//        //Calculate Additional riders for Burglary Covers which mean groupe 23 (GroupCoverID=23) from covercode 24 to 26
//        BurglaryDR = $.Enumerable.From(ko.mapping.toJS(_TLM7OfferData.LM7Covers()))
//        .Where("$.GroupCoverID == 23  && $.IsIncluded==1 && $.OFFER_LM7COVERS_ID != 23")
//        .ToArray();
//        ko.utils.arrayForEach(BurglaryDR, function (item) {
//            ////////debugger;
//            item.CalculatedRiders = (parseInt(item.CalculatedAmount.toString()) - parseInt(item.CalculatedCoverAmount.toString())) * parseFloat(BrokerRate.toString()) * parseFloat(BrokerRate.toString()) / 1000;
//            if (parseInt(item.CalculatedRiders.toString()) < 0) {
//                item.CalculatedRiders = 0;
//            }
//            TotalRiders += parseInt(item.CalculatedRiders.toString());
//        });
//        _TLM7OfferData.LM7Premium()[1].Premium(Math.round(TotalRiders));

//        if (BurglaryDR.length > 0) {
//            UpdateFireCovers(BurglaryDR);
//        }

//        //Calculate Additional riders for Additional Optional Covers which mean groupe 27 (GroupCoverID=27) from covercode 28 to 29
//        AddOptCoverDR = $.Enumerable.From(ko.mapping.toJS(_TLM7OfferData.LM7Covers()))
//        .Where("$.GroupCoverID == 27  && $.IsIncluded==1 && $.OFFER_LM7COVERS_ID != 27")
//        .ToArray();
//        ko.utils.arrayForEach(AddOptCoverDR, function (item) {
//            ////////debugger;
//            item.CalculatedRiders = parseInt(item.CalculatedAmount.toString()) * parseFloat(item.CoverPremiumRate.toString()) * parseFloat(BrokerRate.toString()) / 1000;
//            TotalAddOptCover += parseInt(item.CalculatedRiders.toString());
//        });
//        _TLM7OfferData.LM7Premium()[2].Premium(Math.round(TotalAddOptCover));
//        if (AddOptCoverDR.length > 0) {
//            UpdateFireCovers(AddOptCoverDR);
//        }

//        ////////debugger;
//        //Calculate Additional Premium for Brokers
//        AddBrokerPremDR = $.Enumerable.From(ko.mapping.toJS(_TLM7OfferData.LM7Covers()))
//        .Where("$.IsIncluded==1 && $.OFFER_LM7COVERS_ID == 31")
//        .ToArray();
//        ko.utils.arrayForEach(AddBrokerPremDR, function (item) {
//            ////////debugger;
//            item.CalculatedPrem = parseInt(item.CalculatedCoverAmount.toString());
//            _TLM7OfferData.LM7Premium()[8].Premium(Math.round(parseInt(item.CalculatedCoverAmount.toString())));
//        });
//        if (AddBrokerPremDR.length > 0) {
//            UpdateFireCovers(AddBrokerPremDR);
//        }

//        //if (_UserInfo.IS_UNDERWRITER.toString().toUpperCase() == "TRUE") {
//        //    //Calculate Additional Premium for Victoire
//        //    AddVictoirePremDR = $.Enumerable.From(ko.mapping.toJS(_TLM7OfferData.LM7Covers()))
//        //    .Where("$.IsIncluded==1 && $.OFFER_LM7COVERS_ID == 32")
//        //    .ToArray();
//        //    ko.utils.arrayForEach(AddVictoirePremDR, function (item) {
//        //        ////////debugger;
//        //        item.CalculatedPrem = parseInt(item.CalculatedCoverAmount.toString());
//        //        _TLM7OfferData.LM7Premium()[0].Premium(parseInt(_TLM7OfferData.LM7Premium()[0].Premium().toString()) + parseInt(item.CalculatedPrem.toString()));
//        //    });
//        //}

//        if (AddVictoirePremDR.length > 0) {
//            UpdateFireCovers(AddVictoirePremDR);
//        }

//        //CHeck Total Premium and set policyCost =35 if Prem < 250 and PolicyCost=50 if Prem > 250
//        for (i = 0; i <= _TLM7OfferData.LM7Premium().length - 3; i++) {
//            LD_TotalPrem += parseInt(_TLM7OfferData.LM7Premium()[i].Premium().toString());
//        }

//        if (parseInt(LD_TotalPrem.toString()) <= parseInt(PremPolicyCost)) {
//            _TLM7OfferData.LM7Premium()[9].Premium(parseInt(PolicyCostLessThan250.toString()));
//        }
//        else if (parseInt(LD_TotalPrem.toString()) > parseInt(PremPolicyCost)) {
//            _TLM7OfferData.LM7Premium()[9].Premium(parseInt(PolicyCostMore250.toString()));
//        }
//        ////debugger;
//        //Calculate Total Premium
//        for (i = 0; i <= _TLM7OfferData.LM7Premium().length - 2; i++) {
//            _TLM7OfferData.LM7Premium()[10].Premium(parseInt(_TLM7OfferData.LM7Premium()[10].Premium().toString()) + parseInt(_TLM7OfferData.LM7Premium()[i].Premium().toString()))
//        }
//    }
//    catch (e) {
//        alert("CalculateFirePrem:" + e.message);
//    }
//}

///* --------------------------------------------------------------- */
///* --------------------------------------------------------------- */
//function RecalculatePrem() {
//    try {
//        //alert('test');
//        ////////debugger;
//        var LD_TotalPrem = 0;
//        //CHeck Total Premium and set policyCost =35 if Prem < 250 and PolicyCost=50 if Prem > 250
//        for (l = 0; l <= _TLM7OfferData.LM7Premium().length - 3; l++) {
//            LD_TotalPrem += parseInt(_TLM7OfferData.LM7Premium()[l].Premium().toString());
//        }
//        //Substract Policy Cost
//        _TLM7OfferData.LM7Premium()[10].Premium(parseInt(_TLM7OfferData.LM7Premium()[10].Premium().toString()) - parseInt(_TLM7OfferData.LM7Premium()[9].Premium().toString()));

//        if (parseInt(LD_TotalPrem.toString()) <= parseInt(PremPolicyCost)) {
//            _TLM7OfferData.LM7Premium()[9].Premium(parseInt(PolicyCostLessThan250.toString()));
//        }
//        else if (parseInt(LD_TotalPrem.toString()) > parseInt(PremPolicyCost)) {
//            _TLM7OfferData.LM7Premium()[9].Premium(parseInt(PolicyCostMore250.toString()));
//        }

//        //Adding New Policy Cost
//        _TLM7OfferData.LM7Premium()[10].Premium(_TLM7OfferData.LM7Premium()[10].Premium() + _TLM7OfferData.LM7Premium()[9].Premium());
//    }
//    catch (e) {
//        alert("RecalculatePrem: " + e.message);
//    }
//}
///* --------------------------------------------------------------- */

function UpdateFireCovers(DR) {
    try {
        ////////debugger;

        //////////////////////////////////Update TLM7OfferData.LM7Covers //////////////////////////////////////////////////////////
        ko.utils.arrayForEach(DR, function (item) {
            ////////debugger;
            var match = ko.utils.arrayFirst(_TLM7OfferData.LM7Covers(), function (item2) {
                ////////debugger;
                if (item2.OFFER_LM7COVERS_ID() == item.OFFER_LM7COVERS_ID) {
                    return true;
                }
            });
            if (match) {
                // //////debugger;
                var index = _TLM7OfferData.LM7Covers.indexOf(match);
                _TLM7OfferData.LM7Covers.splice(index, 1, new TLM7CoverData(-1, item.InsuranceCateg, item.CoverSumInsRate, item.CoverPremiumRate, 0, item.OFFER_LM7COVERS_ID, item.CoverDesc_EN, item.CoverDesc_AR, item.CalculatedAmount,
            item.CalculatedCoverAmount, item.CalculatedRiders, item.Deductible_EN, item.Deductible_AR, item.IsCoverGroupID, item.IsRequired, item.IsEnabled, item.IsIncluded,
            item.CovRelatedCover, item.ToolTipDesc_EN, item.ToolTipDesc_AR, item.GroupCoverID, item.CalculatedWCCLass, item.CalculatedTPLCLass, item.MinCoverAmount, item.MaxCoverAmount,
            item.DefaultCoverAmount, item.DefaultCoverPremiumRate, item.LM7Grid, item.WCGrid, item.TPLGrid, item.CalculatedPrem, item.IsAddedToSumIns, item.EnableHelp));
            }
        });
        //////////////////////////////////Update TLM7OfferData.LM7Covers //////////////////////////////////////////////////////////
    }
    catch (e) {
        alert("UpdateFireCovers: " + e.message);
    }

}
/* --------------------------------------------------------------- */
/* --------------------------------------------------------------- */
function UpdateWCCovers(DR) {
    try {
        //////////////////////////////////Update TLM7OfferData.WCCovers //////////////////////////////////////////////////////////
        ko.utils.arrayForEach(DR, function (item) {
            ////////debugger;
            var match = ko.utils.arrayFirst(_TLM7OfferData.WCCovers(), function (item2) {
                ////////debugger;
                if (item2.OFFER_LM7COVERS_ID() == item.OFFER_LM7COVERS_ID) {
                    return true;
                }
            });
            if (match) {
                ////////debugger;
                var index = _TLM7OfferData.WCCovers.indexOf(match);
                _TLM7OfferData.WCCovers.splice(index, 1, new TWCCoverData(-1, item.InsuranceCateg, item.CoverSumInsRate, item.CoverPremiumRate, 0, item.OFFER_LM7COVERS_ID, item.CoverDesc_EN, item.CoverDesc_AR, item.CalculatedAmount,
            item.CalculatedCoverAmount, item.CalculatedRiders, item.Deductible_EN, item.Deductible_AR, item.IsCoverGroupID, item.IsRequired, item.IsEnabled, item.IsIncluded,
            item.CovRelatedCover, item.ToolTipDesc_EN, item.ToolTipDesc_AR, item.GroupCoverID, item.CalculatedWCCLass, item.CalculatedTPLCLass, item.MinCoverAmount, item.MaxCoverAmount,
            item.DefaultCoverAmount, item.DefaultCoverPremiumRate, item.LM7Grid, item.WCGrid, item.TPLGrid, item.CalculatedPrem, item.IsAddedToSumIns, item.EnableHelp));
            }
        });
        //////////////////////////////////Update TLM7OfferData.LM7Covers //////////////////////////////////////////////////////////
    }
    catch (e) {
        alert("UpdateWCCovers: " + e.message);
    }

}

/* --------------------------------------------------------------- */
/* --------------------------------------------------------------- */
function UpdateTPLCovers(DR) {
    try {
        //////////////////////////////////Update TLM7OfferData.WCCovers //////////////////////////////////////////////////////////
        ko.utils.arrayForEach(DR, function (item) {
            ////////debugger;
            var match = ko.utils.arrayFirst(_TLM7OfferData.TPLCovers(), function (item2) {
                ////////debugger;
                if (item2.OFFER_LM7COVERS_ID() == item.OFFER_LM7COVERS_ID) {
                    return true;
                }
            });
            if (match) {
                ////////debugger;
                var index = _TLM7OfferData.TPLCovers.indexOf(match);
                _TLM7OfferData.TPLCovers.splice(index, 1, new TTPLCoverData(-1, item.InsuranceCateg, item.CoverSumInsRate, item.CoverPremiumRate, 0, item.OFFER_LM7COVERS_ID, item.CoverDesc_EN, item.CoverDesc_AR, item.CalculatedAmount,
            item.CalculatedCoverAmount, item.CalculatedRiders, item.Deductible_EN, item.Deductible_AR, item.IsCoverGroupID, item.IsRequired, item.IsEnabled, item.IsIncluded,
            item.CovRelatedCover, item.ToolTipDesc_EN, item.ToolTipDesc_AR, item.GroupCoverID, item.CalculatedWCCLass, item.CalculatedTPLCLass, item.MinCoverAmount, item.MaxCoverAmount,
            item.DefaultCoverAmount, item.DefaultCoverPremiumRate, item.LM7Grid, item.WCGrid, item.TPLGrid, item.CalculatedPrem, item.IsAddedToSumIns, item.EnableHelp));
            }
        });
        //////////////////////////////////Update TLM7OfferData.LM7Covers //////////////////////////////////////////////////////////
    }
    catch (e) {
        alert("UpdateTPLCovers: " + e.message);
    }

}

/* ----------------------------------------------------------------------------- */
function Btn_SaveFireOffer_Click() {
    try {
        //alert('test');
        //////debugger;
        var ContentDataRow = [];
        /* ------------------------------------- */
        if ($("#Frm_FireQuotation").valid()) {

            //if (_UserInfo.IS_UNDERWRITER.toString().toUpperCase() == "FALSE") {
                var InsuranceClassRow = [];
                InsuranceClassRow = $.Enumerable.From(ko.mapping.toJS(MyApp_GVM.List_FireClasses))
                .Where("$.OFFER_INSURANCECLASSES_ID  == " + parseInt(_TLM7OfferData.OFFER_INSURANCECLASSES_ID().toString()) + "")
                .ToArray();

                if (_TLM7OfferData.LM7Premium()[0].TotalUS() != "") {
                    if (parseInt(_TLM7OfferData.LM7Premium()[0].TotalUS().toString()) > parseInt(InsuranceClassRow[0].MaxTotSumIns.toString())) {
                        showToast("Sum Insured Exceeds " + InsuranceClassRow[0].MaxTotSumIns + " (MAXIMUM defined) !", 'fail');
                        jq_HideMobileLoaderAdv("pg_GetFireQuotation");
                        return;
                    }

                }

                //2) Minimum Premium in the Premium Table is 50$
                if (parseInt(_TLM7OfferData.LM7Premium()[11].Premium().toString()) < parseInt(MinPremium.toString())) {
                    showToast("Minimum Premium should be " + MinPremium, 'fail');
                    jq_HideMobileLoaderAdv("pg_GetFireQuotation");
                    return;
                }

                //3) Minimum Neighbors Value is 10000
                //var FireDataRow = [];
                //FireDataRow = $.Enumerable.From(ko.mapping.toJS(_TLM7OfferData.LM7Covers()))
                //.Where("$.OFFER_LM7COVERS_ID ==2")
                //.ToArray();
                //if (FireDataRow.length > 0) {
                //    if (FireDataRow[0].CalculatedAmount.toString() != "0" && FireDataRow[0].MinCoverAmount != null) {
                //        if (parseFloat(FireDataRow[0].CalculatedAmount.toString()) < parseFloat(FireDataRow[0].MinCoverAmount.toString())) {
                //            showToast("Neighbors Minimum Sum Insured is: " + FireDataRow[0].MinCoverAmount.toString(), 'fail');
                //            jq_HideMobileLoaderAdv("pg_GetFireQuotation");
                //            return;
                //        }
                //    }
                //}

                //4) Max Suminsured of Covers 6,7,8 is 50% of the Content
                //ContentDataRow = [];
                //ContentDataRow = $.Enumerable.From(ko.mapping.toJS(_TLM7OfferData.LM7Covers()))
                //.Where("$.OFFER_LM7COVERS_ID ==3")
                //.ToArray();

                //var LossOfUseDataRow = [];
                //LossOfUseDataRow = $.Enumerable.From(ko.mapping.toJS(_TLM7OfferData.LM7Covers()))
                //.Where("$.OFFER_LM7COVERS_ID == 6 || $.OFFER_LM7COVERS_ID == 7 || $.OFFER_LM7COVERS_ID == 8 && $.IsIncluded==1 && $.IsRequired==1")
                //.ToArray();

                //ko.utils.arrayForEach(LossOfUseDataRow, function (item) {
                //    ////////debugger;
                //    if (item.CalculatedAmount.toString() != "0") {
                //        if (parseFloat(item.CalculatedAmount.toString()) > (parseFloat(ContentDataRow[0].CalculatedAmount.toString()) * 0.5)) {
                //            showToast("Maximum Sum Insured of Cover Code " + item.CoverDesc_EN + " Should be Less or Equal to 50% of the Content!", 'fail');
                //            jq_HideMobileLoaderAdv("pg_GetFireQuotation");
                //            return;
                //        }
                //    }
                //});

                //5) Max Suminsured of Architect fees is 10% of content
                //var ArchitectFeesDataRow = [];
                //ArchitectFeesDataRow = $.Enumerable.From(ko.mapping.toJS(_TLM7OfferData.LM7Covers()))
                //.Where("$.OFFER_LM7COVERS_ID ==4")
                //.ToArray();
                //if (parseFloat(ArchitectFeesDataRow[0].CalculatedAmount.toString()) > (parseFloat(ContentDataRow[0].CalculatedAmount.toString()) * 0.1)) {
                //    //showToast('error', "Maximum Sum Insured of Architect Fees Should be Less or Equal to 10% of the Content!", 'Error');
                //    showToast("Please Increase your content values!", 'fail');
                //    jq_HideMobileLoaderAdv("pg_GetFireQuotation");
                //    return;
                //}

                //6) Max Suminsured of Removal of debris is 10% of content
                //var RemovalDebrisDataRow = [];
                //RemovalDebrisDataRow = $.Enumerable.From(ko.mapping.toJS(_TLM7OfferData.LM7Covers()))
                //.Where("$.OFFER_LM7COVERS_ID ==5")
                //.ToArray();
                //if (parseFloat(RemovalDebrisDataRow[0].CalculatedAmount.toString()) > (parseFloat(ContentDataRow[0].CalculatedAmount.toString()) * 0.1)) {
                //    //showToast('error', "Maximum Sum Insured of Removal of debris Should be Less or Equal to 10% of the Content!", 'Error');
                //    showToast("Please Increase your content values!", 'fail');
                //    jq_HideMobileLoaderAdv("pg_GetFireQuotation");
                //    return;
                //}

                //7) Max Sum Insured of all allied Perils is the Content + Building
                //var BuildingDataRow = [];
                //BuildingDataRow = $.Enumerable.From(ko.mapping.toJS(_TLM7OfferData.LM7Covers()))
                //.Where("$.OFFER_LM7COVERS_ID ==1")
                //.ToArray();
                //var AlliedPerilsDatarow = [];
                //AlliedPerilsDatarow = $.Enumerable.From(ko.mapping.toJS(_TLM7OfferData.LM7Covers()))
                //.Where("$.OFFER_LM7COVERS_ID == 10 || $.OFFER_LM7COVERS_ID == 11 || $.OFFER_LM7COVERS_ID == 12 || $.OFFER_LM7COVERS_ID == 13 || $.OFFER_LM7COVERS_ID == 14 || $.OFFER_LM7COVERS_ID == 15 || $.OFFER_LM7COVERS_ID == 16 || $.OFFER_LM7COVERS_ID == 17 || $.OFFER_LM7COVERS_ID == 18 || $.OFFER_LM7COVERS_ID == 19 || $.OFFER_LM7COVERS_ID == 20 || $.OFFER_LM7COVERS_ID == 21 || $.OFFER_LM7COVERS_ID == 22 && $.IsIncluded==1 && $.IsRequired==1")
                ////.Where("$.OFFER_LM7COVERS_ID in (10,11,12,13,14,15,16,17,18,19,20,21,22) && $.IsIncluded==1 && $.IsRequired==1")
                //.ToArray();

                //ko.utils.arrayForEach(AlliedPerilsDatarow, function (item) {
                //    ////////debugger;
                //    if (item.CalculatedAmount.toString() != "0") {
                //        if (parseFloat(item.CalculatedAmount.toString()) > (parseFloat(ContentDataRow[0].CalculatedAmount.toString()) + parseFloat(BuildingDataRow[0].CalculatedAmount.toString()))) {
                //            showToast("Maximum Sum Insured of Cover Code " + item.CoverDesc_EN + " Should be Less or Equal to the sum of the Content and Building!", 'fail');
                //            jq_HideMobileLoaderAdv("pg_GetFireQuotation");
                //            return;
                //        }
                //    }
                //});

                //8) EarthQuake Pendingggggggggggggggggggggggggggg

                //9) Max Sum Insured to SRCC is 2500000
                //var SRCCDataRow = [];
                //SRCCDataRow = $.Enumerable.From(ko.mapping.toJS(_TLM7OfferData.LM7Covers()))
                //.Where("$.OFFER_LM7COVERS_ID ==29")
                //.ToArray();

                //if (SRCCDataRow.length > 0) {
                //    if (SRCCDataRow[0].CalculatedAmount.toString() != "0" && SRCCDataRow[0].MaxCoverAmount != null) {
                //        if (parseFloat(SRCCDataRow[0].CalculatedAmount.toString()) > parseFloat(SRCCDataRow[0].MaxCoverAmount.toString())) {
                //            showToast("Maximum Sum Insured of SRCC Should be Less or Equal to " + SRCCDataRow[0].MaxCoverAmount.toString(), 'fail');
                //            jq_HideMobileLoaderAdv("pg_GetFireQuotation");
                //            return;
                //        }
                //    }
                //}

                //10) Max Sum Insured to Burglary is 570000
                //var BurglaryDataRow = [];
                //BurglaryDataRow = $.Enumerable.From(ko.mapping.toJS(_TLM7OfferData.LM7Covers()))
                //.Where("$.OFFER_LM7COVERS_ID ==24")
                //.ToArray();

                //if (BurglaryDataRow.length > 0) {
                //    if (BurglaryDataRow[0].CalculatedAmount.toString() != "0" && BurglaryDataRow[0].MaxCoverAmount != null) {
                //        if (parseFloat(BurglaryDataRow[0].CalculatedAmount.toString()) > parseFloat(BurglaryDataRow[0].MaxCoverAmount.toString())) {
                //            showToast("Maximum Sum Insured of Burglary Should be Less or Equal to " + BurglaryDataRow[0].MaxCoverAmount.toString(), 'fail');
                //            jq_HideMobileLoaderAdv("pg_GetFireQuotation");
                //            return;
                //        }
                //    }
                //}

                //12) Max Sum Insured to Cash in transit/ or Hold Up is 50000
                //var CashInTransitDatRow = [];
                //CashInTransitDatRow = $.Enumerable.From(ko.mapping.toJS(_TLM7OfferData.LM7Covers()))
                //.Where("$.OFFER_LM7COVERS_ID ==25")
                //.ToArray();

                //if (CashInTransitDatRow.length > 0) {
                //    if (CashInTransitDatRow[0].CalculatedAmount.toString() != "0" && CashInTransitDatRow[0].MaxCoverAmount != null) {
                //        if (parseFloat(CashInTransitDatRow[0].CalculatedAmount.toString()) > parseFloat(CashInTransitDatRow[0].MaxCoverAmount.toString())) {
                //            showToast("Maximum Sum Insured of Cash in Transit Should be Less or Equal to " + CashInTransitDatRow[0].MaxCoverAmount.toString(), 'fail');
                //            jq_HideMobileLoaderAdv("pg_GetFireQuotation");
                //            return;
                //        }
                //    }
                //}

                //13) Max Sum Insured to Cash And/Or jewels in safe is 260000
                //var CashInSafeDatRow = [];
                //CashInSafeDatRow = $.Enumerable.From(ko.mapping.toJS(_TLM7OfferData.LM7Covers()))
                //.Where("$.OFFER_LM7COVERS_ID ==26")
                //.ToArray();

                //if (CashInSafeDatRow.length > 0) {
                //    if (CashInSafeDatRow[0].CalculatedAmount.toString() != "0" && CashInSafeDatRow[0].MaxCoverAmount != null) {
                //        if (parseFloat(CashInSafeDatRow[0].CalculatedAmount.toString()) > parseFloat(CashInSafeDatRow[0].MaxCoverAmount.toString())) {
                //            showToast("Maximum Sum Insured of Cash and or valuables in safe Should be Less or Equal to " + CashInSafeDatRow[0].MaxCoverAmount.toString(), 'fail');
                //            jq_HideMobileLoaderAdv("pg_GetFireQuotation");
                //            return;
                //        }
                //    }
                //}
            //}
            //if ($("#Btn_Save").is(":visible") == true) {
               // jq_HideNotification();
                Edit_FireOffer();
           // }
        }
        /* ------------------------------------- */
        return false;
    }
    catch (e) {
        alert("Btn_SaveFireOffer_Click : " + e.message);
    }
}
/* --------------------------------------------------------------- */
/* ----------------------------------------------------------------------------- */
function Btn_ShareFireOffer_Click() {
    try {
        //alert('test');
        //////debugger;
        var ContentDataRow = [];
        /* ------------------------------------- */
        if ($("#Frm_FireQuotation").valid()) {

            //if (_UserInfo.IS_UNDERWRITER.toString().toUpperCase() == "FALSE") {
            var InsuranceClassRow = [];
            InsuranceClassRow = $.Enumerable.From(ko.mapping.toJS(MyApp_GVM.List_FireClasses))
            .Where("$.OFFER_INSURANCECLASSES_ID  == " + parseInt(_TLM7OfferData.OFFER_INSURANCECLASSES_ID().toString()) + "")
            .ToArray();

            if (_TLM7OfferData.LM7Premium()[0].TotalUS() != "") {
                if (parseInt(_TLM7OfferData.LM7Premium()[0].TotalUS().toString()) > parseInt(InsuranceClassRow[0].MaxTotSumIns.toString())) {
                    showToast("Sum Insured Exceeds " + InsuranceClassRow[0].MaxTotSumIns + " (MAXIMUM defined) !", 'fail');
                    jq_HideMobileLoaderAdv("pg_GetFireQuotation");
                    return;
                }

            }

            //2) Minimum Premium in the Premium Table is 50$
            if (parseInt(_TLM7OfferData.LM7Premium()[11].Premium().toString()) < parseInt(MinPremium.toString())) {
                showToast("Minimum Premium should be " + MinPremium, 'fail');
                jq_HideMobileLoaderAdv("pg_GetFireQuotation");
                return;
            }

            //3) Minimum Neighbors Value is 10000
            //var FireDataRow = [];
            //FireDataRow = $.Enumerable.From(ko.mapping.toJS(_TLM7OfferData.LM7Covers()))
            //.Where("$.OFFER_LM7COVERS_ID ==2")
            //.ToArray();
            //if (FireDataRow.length > 0) {
            //    if (FireDataRow[0].CalculatedAmount.toString() != "0" && FireDataRow[0].MinCoverAmount != null) {
            //        if (parseFloat(FireDataRow[0].CalculatedAmount.toString()) < parseFloat(FireDataRow[0].MinCoverAmount.toString())) {
            //            showToast("Neighbors Minimum Sum Insured is: " + FireDataRow[0].MinCoverAmount.toString(), 'fail');
            //            jq_HideMobileLoaderAdv("pg_GetFireQuotation");
            //            return;
            //        }
            //    }
            //}

            //4) Max Suminsured of Covers 6,7,8 is 50% of the Content
            //ContentDataRow = [];
            //ContentDataRow = $.Enumerable.From(ko.mapping.toJS(_TLM7OfferData.LM7Covers()))
            //.Where("$.OFFER_LM7COVERS_ID ==3")
            //.ToArray();

            //var LossOfUseDataRow = [];
            //LossOfUseDataRow = $.Enumerable.From(ko.mapping.toJS(_TLM7OfferData.LM7Covers()))
            //.Where("$.OFFER_LM7COVERS_ID == 6 || $.OFFER_LM7COVERS_ID == 7 || $.OFFER_LM7COVERS_ID == 8 && $.IsIncluded==1 && $.IsRequired==1")
            //.ToArray();

            //ko.utils.arrayForEach(LossOfUseDataRow, function (item) {
            //    ////////debugger;
            //    if (item.CalculatedAmount.toString() != "0") {
            //        if (parseFloat(item.CalculatedAmount.toString()) > (parseFloat(ContentDataRow[0].CalculatedAmount.toString()) * 0.5)) {
            //            showToast("Maximum Sum Insured of Cover Code " + item.CoverDesc_EN + " Should be Less or Equal to 50% of the Content!", 'fail');
            //            jq_HideMobileLoaderAdv("pg_GetFireQuotation");
            //            return;
            //        }
            //    }
            //});

            //5) Max Suminsured of Architect fees is 10% of content
            //var ArchitectFeesDataRow = [];
            //ArchitectFeesDataRow = $.Enumerable.From(ko.mapping.toJS(_TLM7OfferData.LM7Covers()))
            //.Where("$.OFFER_LM7COVERS_ID ==4")
            //.ToArray();
            //if (parseFloat(ArchitectFeesDataRow[0].CalculatedAmount.toString()) > (parseFloat(ContentDataRow[0].CalculatedAmount.toString()) * 0.1)) {
            //    //showToast('error', "Maximum Sum Insured of Architect Fees Should be Less or Equal to 10% of the Content!", 'Error');
            //    showToast("Please Increase your content values!", 'fail');
            //    jq_HideMobileLoaderAdv("pg_GetFireQuotation");
            //    return;
            //}

            //6) Max Suminsured of Removal of debris is 10% of content
            //var RemovalDebrisDataRow = [];
            //RemovalDebrisDataRow = $.Enumerable.From(ko.mapping.toJS(_TLM7OfferData.LM7Covers()))
            //.Where("$.OFFER_LM7COVERS_ID ==5")
            //.ToArray();
            //if (parseFloat(RemovalDebrisDataRow[0].CalculatedAmount.toString()) > (parseFloat(ContentDataRow[0].CalculatedAmount.toString()) * 0.1)) {
            //    //showToast('error', "Maximum Sum Insured of Removal of debris Should be Less or Equal to 10% of the Content!", 'Error');
            //    showToast("Please Increase your content values!", 'fail');
            //    jq_HideMobileLoaderAdv("pg_GetFireQuotation");
            //    return;
            //}

            //7) Max Sum Insured of all allied Perils is the Content + Building
            //var BuildingDataRow = [];
            //BuildingDataRow = $.Enumerable.From(ko.mapping.toJS(_TLM7OfferData.LM7Covers()))
            //.Where("$.OFFER_LM7COVERS_ID ==1")
            //.ToArray();
            //var AlliedPerilsDatarow = [];
            //AlliedPerilsDatarow = $.Enumerable.From(ko.mapping.toJS(_TLM7OfferData.LM7Covers()))
            //.Where("$.OFFER_LM7COVERS_ID == 10 || $.OFFER_LM7COVERS_ID == 11 || $.OFFER_LM7COVERS_ID == 12 || $.OFFER_LM7COVERS_ID == 13 || $.OFFER_LM7COVERS_ID == 14 || $.OFFER_LM7COVERS_ID == 15 || $.OFFER_LM7COVERS_ID == 16 || $.OFFER_LM7COVERS_ID == 17 || $.OFFER_LM7COVERS_ID == 18 || $.OFFER_LM7COVERS_ID == 19 || $.OFFER_LM7COVERS_ID == 20 || $.OFFER_LM7COVERS_ID == 21 || $.OFFER_LM7COVERS_ID == 22 && $.IsIncluded==1 && $.IsRequired==1")
            ////.Where("$.OFFER_LM7COVERS_ID in (10,11,12,13,14,15,16,17,18,19,20,21,22) && $.IsIncluded==1 && $.IsRequired==1")
            //.ToArray();

            //ko.utils.arrayForEach(AlliedPerilsDatarow, function (item) {
            //    ////////debugger;
            //    if (item.CalculatedAmount.toString() != "0") {
            //        if (parseFloat(item.CalculatedAmount.toString()) > (parseFloat(ContentDataRow[0].CalculatedAmount.toString()) + parseFloat(BuildingDataRow[0].CalculatedAmount.toString()))) {
            //            showToast("Maximum Sum Insured of Cover Code " + item.CoverDesc_EN + " Should be Less or Equal to the sum of the Content and Building!", 'fail');
            //            jq_HideMobileLoaderAdv("pg_GetFireQuotation");
            //            return;
            //        }
            //    }
            //});

            //8) EarthQuake Pendingggggggggggggggggggggggggggg

            //9) Max Sum Insured to SRCC is 2500000
            //var SRCCDataRow = [];
            //SRCCDataRow = $.Enumerable.From(ko.mapping.toJS(_TLM7OfferData.LM7Covers()))
            //.Where("$.OFFER_LM7COVERS_ID ==29")
            //.ToArray();

            //if (SRCCDataRow.length > 0) {
            //    if (SRCCDataRow[0].CalculatedAmount.toString() != "0" && SRCCDataRow[0].MaxCoverAmount != null) {
            //        if (parseFloat(SRCCDataRow[0].CalculatedAmount.toString()) > parseFloat(SRCCDataRow[0].MaxCoverAmount.toString())) {
            //            showToast("Maximum Sum Insured of SRCC Should be Less or Equal to " + SRCCDataRow[0].MaxCoverAmount.toString(), 'fail');
            //            jq_HideMobileLoaderAdv("pg_GetFireQuotation");
            //            return;
            //        }
            //    }
            //}

            //10) Max Sum Insured to Burglary is 570000
            //var BurglaryDataRow = [];
            //BurglaryDataRow = $.Enumerable.From(ko.mapping.toJS(_TLM7OfferData.LM7Covers()))
            //.Where("$.OFFER_LM7COVERS_ID ==24")
            //.ToArray();

            //if (BurglaryDataRow.length > 0) {
            //    if (BurglaryDataRow[0].CalculatedAmount.toString() != "0" && BurglaryDataRow[0].MaxCoverAmount != null) {
            //        if (parseFloat(BurglaryDataRow[0].CalculatedAmount.toString()) > parseFloat(BurglaryDataRow[0].MaxCoverAmount.toString())) {
            //            showToast("Maximum Sum Insured of Burglary Should be Less or Equal to " + BurglaryDataRow[0].MaxCoverAmount.toString(), 'fail');
            //            jq_HideMobileLoaderAdv("pg_GetFireQuotation");
            //            return;
            //        }
            //    }
            //}

            //12) Max Sum Insured to Cash in transit/ or Hold Up is 50000
            //var CashInTransitDatRow = [];
            //CashInTransitDatRow = $.Enumerable.From(ko.mapping.toJS(_TLM7OfferData.LM7Covers()))
            //.Where("$.OFFER_LM7COVERS_ID ==25")
            //.ToArray();

            //if (CashInTransitDatRow.length > 0) {
            //    if (CashInTransitDatRow[0].CalculatedAmount.toString() != "0" && CashInTransitDatRow[0].MaxCoverAmount != null) {
            //        if (parseFloat(CashInTransitDatRow[0].CalculatedAmount.toString()) > parseFloat(CashInTransitDatRow[0].MaxCoverAmount.toString())) {
            //            showToast("Maximum Sum Insured of Cash in Transit Should be Less or Equal to " + CashInTransitDatRow[0].MaxCoverAmount.toString(), 'fail');
            //            jq_HideMobileLoaderAdv("pg_GetFireQuotation");
            //            return;
            //        }
            //    }
            //}

            //13) Max Sum Insured to Cash And/Or jewels in safe is 260000
            //var CashInSafeDatRow = [];
            //CashInSafeDatRow = $.Enumerable.From(ko.mapping.toJS(_TLM7OfferData.LM7Covers()))
            //.Where("$.OFFER_LM7COVERS_ID ==26")
            //.ToArray();

            //if (CashInSafeDatRow.length > 0) {
            //    if (CashInSafeDatRow[0].CalculatedAmount.toString() != "0" && CashInSafeDatRow[0].MaxCoverAmount != null) {
            //        if (parseFloat(CashInSafeDatRow[0].CalculatedAmount.toString()) > parseFloat(CashInSafeDatRow[0].MaxCoverAmount.toString())) {
            //            showToast("Maximum Sum Insured of Cash and or valuables in safe Should be Less or Equal to " + CashInSafeDatRow[0].MaxCoverAmount.toString(), 'fail');
            //            jq_HideMobileLoaderAdv("pg_GetFireQuotation");
            //            return;
            //        }
            //    }
            //}
            //}
            //if ($("#Btn_Save").is(":visible") == true) {
            // jq_HideNotification();
            Edit_FireOfferShare();
            // }
        }
        /* ------------------------------------- */
        return false;
    }
    catch (e) {
        alert("Btn_SaveFireOffer_Click : " + e.message);
    }
}
/* --------------------------------------------------------------- */
function Edit_FireOffer() {
    try {
        ll_Exit = 0;
        ////debugger;
        _TLM7OfferData.MyFIRECOVERS_SUB_CATEGORIES_DATA([]);
        ko.utils.arrayForEach(_FIRECOVERS_SUB_CATEGORIES(), function (item) {
            ////////debugger;
            var FIRECOVERS_SUB_CATEGORIES_Obj = new Object();
            FIRECOVERS_SUB_CATEGORIES_Obj.FIRECOVERS_SUB_CATEGORIES_DATA_ID = 0;
            FIRECOVERS_SUB_CATEGORIES_Obj.OFFER_LM7COVERS_ID = item.OFFER_LM7COVERS_ID();
            FIRECOVERS_SUB_CATEGORIES_Obj.OFFER_INSURANCECLASSES_ID = item.OFFER_INSURANCECLASSES_ID();
            FIRECOVERS_SUB_CATEGORIES_Obj.SUB_CATEGORY_DESC_EN = item.SUB_CATEGORY_DESC_EN();
            FIRECOVERS_SUB_CATEGORIES_Obj.SUB_CATEGORY_DESC_AR = item.SUB_CATEGORY_DESC_AR();
            FIRECOVERS_SUB_CATEGORIES_Obj.DEFAULT_AMOUNT = item.DEFAULT_AMOUNT();
            FIRECOVERS_SUB_CATEGORIES_Obj.OFFER_LM7OFFERDATA_ID = 0;

            _TLM7OfferData.MyFIRECOVERS_SUB_CATEGORIES_DATA.push(FIRECOVERS_SUB_CATEGORIES_Obj);
        });
        /* Call the Service. */
        _TLM7OfferData.LoggedInEmail(_UserInfo.EMAIL);
        //_TLM7OfferData.BrokerCode(parseInt(_UserInfo.BROKERCODE.toString()));

        //alert(_TLM7OfferData.LoggedInEmail() + '///////' + _TLM7OfferData.BrokerCode() + '////deded///////' + _UserInfo.BROKERCODE);
        /* ---------------- */
        _Params = ko.mapping.toJSON(_TLM7OfferData);
        //alert(_Params);
        _Service_Method = "Edit_FireOffer";
        _Async = true;
        CallService('Service_Call_Completed_FireOffer');
        /* ---------------- */
    }
    catch (e) {
        alert("Edit_Fire: " + e.message);
    }
}
/* --------------------------------------------------------------- */
function Edit_FireOfferShare() {
    try {
        ll_Exit = 0;
        ////debugger;
        _TLM7OfferData.MyFIRECOVERS_SUB_CATEGORIES_DATA([]);
        ko.utils.arrayForEach(_FIRECOVERS_SUB_CATEGORIES(), function (item) {
            ////////debugger;
            var FIRECOVERS_SUB_CATEGORIES_Obj = new Object();
            FIRECOVERS_SUB_CATEGORIES_Obj.FIRECOVERS_SUB_CATEGORIES_DATA_ID = 0;
            FIRECOVERS_SUB_CATEGORIES_Obj.OFFER_LM7COVERS_ID = item.OFFER_LM7COVERS_ID();
            FIRECOVERS_SUB_CATEGORIES_Obj.OFFER_INSURANCECLASSES_ID = item.OFFER_INSURANCECLASSES_ID();
            FIRECOVERS_SUB_CATEGORIES_Obj.SUB_CATEGORY_DESC_EN = item.SUB_CATEGORY_DESC_EN();
            FIRECOVERS_SUB_CATEGORIES_Obj.SUB_CATEGORY_DESC_AR = item.SUB_CATEGORY_DESC_AR();
            FIRECOVERS_SUB_CATEGORIES_Obj.DEFAULT_AMOUNT = item.DEFAULT_AMOUNT();
            FIRECOVERS_SUB_CATEGORIES_Obj.OFFER_LM7OFFERDATA_ID = 0;

            _TLM7OfferData.MyFIRECOVERS_SUB_CATEGORIES_DATA.push(FIRECOVERS_SUB_CATEGORIES_Obj);
        });
        /* Call the Service. */
        _TLM7OfferData.LoggedInEmail(_UserInfo.EMAIL);
        //_TLM7OfferData.BrokerCode(parseInt(_UserInfo.BROKERCODE.toString()));

        //alert(_TLM7OfferData.LoggedInEmail() + '///////' + _TLM7OfferData.BrokerCode() + '////deded///////' + _UserInfo.BROKERCODE);
        /* ---------------- */
        _Params = ko.mapping.toJSON(_TLM7OfferData);
        //alert(_Params);
        _Service_Method = "Edit_FireOfferShare";
        _Async = true;
        CallService('Service_Call_Completed_FireOffer');
        /* ---------------- */
    }
    catch (e) {
        alert("Edit_FireOfferShare: " + e.message);
    }
}

/* --------------------------------------------------------------- */
function Edit_FireOfferShare_Completed(i_Response) {
    try {
        ////////debugger;
        jq_HideMobileLoaderAdv("pg_GetFireQuotation");

        // Show spinner dialog with message
        // Note: spinner dialog is cancelable by default
        SpinnerDialog.show(null, "Please wait to share your Fire Offer");

        setTimeout(function () {
            SpinnerDialog.hide();
        }, 30000);


        var inputUri = encodeURI('http://mobile.victoire.com.lb/MobileOffers/FireOffer_' + i_Response.My_Result.OFFER_LM7OFFERDATA_ID + '.pdf');
        //alert('ekdjekdj kede done');
        window.plugins.socialsharing.share('Here is your Fire Offer Shared File', 'Your Fire Offer', inputUri);
        /* ----------------- */
        ko.mapping.fromJS(i_Response.My_TLM7OfferData, _TLM7OfferData);

    }
    catch (e) {
        alert("Edit_FireOfferShare_Completed: " + e.message);
    }
}
/* --------------------------------------------------------------- */

/* --------------------------------------------------------------- */
function Edit_FireOffer_Completed(i_Response) {
    try {
        ////////debugger;
        jq_HideMobileLoaderAdv("pg_GetFireQuotation");
        //showToast('Saved. Please Check You Email. Thank You!', 'success');
        jq_DisplayMessage("MSG_GeneralInfo", "Successfull!", "Your Fire Offer Has Been Sent Successfully! please don't forget to check your junk mail too.", null, null, null, null);
        /* ----------------- */
        ko.mapping.fromJS(i_Response.My_TLM7OfferData, _TLM7OfferData);

    }
    catch (e) {
        alert("Edit_Fire_Completed: " + e.message);
    }
}
/* --------------------------------------------------------------- */
/* Btn_Clear_Click. */
/* --------------------------------------------------------------- */
function Btn_Clear_Click() {

    window.location.reload();
}

function Btn_AddContent_Click() {
    //////debugger;
    //    //alert('1');
    if (_FIRECOVERS_SUB_CATEGORIES().length > 0) {
        //        //alert('2f');
        var SubcategoriesPrem = 0;
        //var CoverID = _FIRECOVERS_SUB_CATEGORIES()[0].OFFER_LM7COVERS_ID();
        $(".SubCategoryFire").each(function () {
            //////debugger;
            var ControlID;
            var ControlValue;
            //alert($(this).val());
            SubcategoriesPrem += parseFloat($(this).val().toString().replace(/,/g, ""));
            ControlID = $(this)["0"].id;
            ControlValue = parseFloat($(this).val().toString().replace(/,/g, ""));
            ko.utils.arrayForEach(_FIRECOVERS_SUB_CATEGORIES(), function (item) {
                //////debugger;
                if (parseInt(item.FIRECOVERS_SUB_CATEGORIES_ID().toString()) == parseInt(ControlID.replace("DEFAULT_AMOUNT_", "").toString()))
                {
                    item.DEFAULT_AMOUNT(ControlValue);
                }
            });

        });
        //Get Building Covers and set the amount
        //ko.utils.arrayForEach(_FIRECOVERS_SUB_CATEGORIES(), function (item) {
        //    ////////debugger;
        //    SubcategoriesPrem += parseFloat(item.DEFAULT_AMOUNT().toString().replace(/,/g, ""));
        //});

        //var CoverAmount = "#CalculatedAmount_" + (parseInt(CoverID) - 1).toString();
        $("#txt_ContentAmount").val(Math.round(parseFloat(SubcategoriesPrem))).trigger("change");

        //$("#DIV_Content_FireSubCateg").dialog('close');

        $(document).trigger('simpledialog', { 'method': 'close' });

        //switch (_TLM7OfferData.language()) {
        //    case "EN":
        //        return  _TLM7OfferData.CalculatedSubCategoriesAmount('Total Amount >>>' + $.number(Math.round(parseFloat(SubcategoriesPrem))) + '$');
        //        break;
        //    case "AR":
        //        return _TLM7OfferData.CalculatedSubCategoriesAmount('المبلغ العام >>>' + $.number(Math.round(parseFloat(SubcategoriesPrem))) + '$');
        //        break;
        //    default:
        //        return _TLM7OfferData.CalculatedSubCategoriesAmount('Total Amount >>>' + $.number(Math.round(parseFloat(SubcategoriesPrem))) + '$');
        //        break;
        //}
    }
}

function ShowFireContentSubCategories(obj) {
    //////debugger;
    //alert('new');
    if (_FIRECOVERS_SUB_CATEGORIES().length == 0) {
        FIRECOVERS_SUB_CATEGORIES_FILTERED = $.Enumerable.From(ko.mapping.toJS(JSON.parse(sessionStorage.getItem('FireCoversSubCategories'))))
        .Where("$.OFFER_LM7COVERS_ID ==" + obj)
        .ToArray();
        ko.mapping.fromJS(FIRECOVERS_SUB_CATEGORIES_FILTERED, _FIRECOVERS_SUB_CATEGORIES);
        _TLM7OfferData.MyFIRECOVERS_SUB_CATEGORIES_DATA([]);
        ko.utils.arrayForEach(_FIRECOVERS_SUB_CATEGORIES(), function (item) {
            ////////debugger;
            var FIRECOVERS_SUB_CATEGORIES_Obj = new Object();
            FIRECOVERS_SUB_CATEGORIES_Obj.FIRECOVERS_SUB_CATEGORIES_DATA_ID = 0;
            FIRECOVERS_SUB_CATEGORIES_Obj.OFFER_LM7COVERS_ID = item.OFFER_LM7COVERS_ID();
            FIRECOVERS_SUB_CATEGORIES_Obj.OFFER_INSURANCECLASSES_ID = item.OFFER_INSURANCECLASSES_ID();
            FIRECOVERS_SUB_CATEGORIES_Obj.SUB_CATEGORY_DESC_EN = item.SUB_CATEGORY_DESC_EN();
            FIRECOVERS_SUB_CATEGORIES_Obj.SUB_CATEGORY_DESC_AR = item.SUB_CATEGORY_DESC_AR();
            FIRECOVERS_SUB_CATEGORIES_Obj.DEFAULT_AMOUNT = item.DEFAULT_AMOUNT();
            FIRECOVERS_SUB_CATEGORIES_Obj.OFFER_LM7OFFERDATA_ID = 0;

            _TLM7OfferData.MyFIRECOVERS_SUB_CATEGORIES_DATA.push(FIRECOVERS_SUB_CATEGORIES_Obj);
        });

    }


    //$('#inlinecontent ul').remove();
    //var labels = '<ul data-role="listview"  id="listFireSubCategoriesfrom" data-mini="true"  style="overflow: auto;-webkit-overflow-scrolling: touch;max-height: 250px;">';

    //ko.utils.arrayForEach(_FIRECOVERS_SUB_CATEGORIES(), function (item) {
    //        //////debugger;
    //        labels += '<li data-icon="up">';
    //        labels += '<label for="DEFAULT_AMOUNT_' + item.FIRECOVERS_SUB_CATEGORIES_ID() + '" style="font-weight: bold" id="lbl_SubCate_' + item.FIRECOVERS_SUB_CATEGORIES_ID() + '"></label>';
    //        //labels += '<label style=" font-size:12px;white-space:normal" data-bind="text:' + item.SUB_CATEGORY_DESC_EN + '"></label>';
    //        labels += '<input type="text" style="width: 90%; font-size: 12px" id="DEFAULT_AMOUNT_' + item.FIRECOVERS_SUB_CATEGORIES_ID() + '"/>';
    //        //labels += '<input type="text" data-mini="true" style="width: 90%;" data-bind="value:' + item.DEFAULT_AMOUNT + '" />';
    //        labels += '</li>';
    //    });

    //    labels += '</ul>';

    //    $("#inlinecontent").prepend(labels);

    //    //$("#listFireSubCategoriesfrom").listview('refresh').trigger('create');

    //    ko.utils.arrayForEach(_FIRECOVERS_SUB_CATEGORIES(), function (item) {
    //        //////debugger;
    //        var LableID = 'lbl_SubCate_' + item.FIRECOVERS_SUB_CATEGORIES_ID();
    //        ko.applyBindingsToNode(document.getElementById(LableID), {
    //            text: item.SUB_CATEGORY_DESC_EN(),
    //            valueUpdate: 'keydown'
    //        });
    //    });

    //    ko.utils.arrayForEach(_FIRECOVERS_SUB_CATEGORIES(), function (item) {
    //        //////debugger;
    //        var ControlID = 'DEFAULT_AMOUNT_' + item.FIRECOVERS_SUB_CATEGORIES_ID();
    //        ko.applyBindingsToNode(document.getElementById(ControlID), {
    //            value: item.DEFAULT_AMOUNT(),
    //            valueUpdate: 'keydown'
    //        });

    //    });

    //jq_OpenUIDialog_ByRef($("#DIV_Content_FireSubCateg"), _TLM7OfferData.language().toString() == "EN" ? "Content Details" : "تفاصيل المحتوى", 500, 300);
    //$('#popup_FireOffer').show();

    //$("#popup_FireOffer").popup('open', { transition: 'flip', positionTo: 'window' });
    //$('#popup_FireOffer').simpledialog2();
    // e.preventDefault();
}

function SetSubCategoriesCoverDesc(obj) {
    ////////debugger;
    switch (_TLM7OfferData.language()) {
        case "EN":
            return obj.SUB_CATEGORY_DESC_EN();
            break;
        case "AR":
            return obj.SUB_CATEGORY_DESC_AR();
            break;
        default:
            return obj.SUB_CATEGORY_DESC_EN();
            break;
    }
}