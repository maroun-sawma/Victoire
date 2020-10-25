/* Members */
/* --------------------------------------------------------------- */
var MarineOffer = new Object();
localStorage.setItem("MinPrem", 0);
MarineOffer.OFFERS_ID = 0;
MarineOffer.OFFERS_CODE = "MC";
MarineOffer.OFFER_DESC = "";
MarineOffer.PLANSH_ID = 0;
MarineOffer.ENTRY_USER_ID = MyApp_GVM.UserID();
MarineOffer.INSURED_ID = 0;
MarineOffer.SUBJECTASSURED_ID = 0;
MarineOffer.OPRDATE = moment().format("YYYY-MM-DD");
MarineOffer.STARTDATE = moment().format("YYYY-MM-DD");
MarineOffer.EXPIRYDATE = moment().format("YYYY-MM-DD");
MarineOffer.CURRENCY_ID = 8;
MarineOffer.RATE = 0;
MarineOffer.SUMINSURED = 0;
MarineOffer.TOTALSUMINSURED = 0;
//This IS Main Insured Premium Withount Members
MarineOffer.NETPREMIUM = 0;
MarineOffer.RECEIVEDPREMIUM = 0;
MarineOffer.ACCESSORIES = 0;
MarineOffer.POLICY_COST = 0;
MarineOffer.FIXEDSTAMPS = 0;
MarineOffer.PROPSTAMPS = 0;
MarineOffer.MUNITAX = 0;
MarineOffer.TOTALPREMIUM = 0;
MarineOffer.REINSURANCE_PREMIUM = 0;
MarineOffer.GLOBEMED_PREMNIUM = 0;
MarineOffer.COMISSION_RATE = 0;
MarineOffer.LOADINGVICTOIRE_RATE = 0;
MarineOffer.PRINTCOUNT = 0;
MarineOffer.CREATIONDATE = moment().format("YYYY-MM-DD");
MarineOffer.MODIFICATIONDATE = moment().format("YYYY-MM-DD");
MarineOffer.SYNCED = false;
MarineOffer.SUBUSERS_ID = 0;
MarineOffer.CANCELLATIONDATE = moment().format("YYYY-MM-DD");
MarineOffer.CANCELLATIONREASON = "";
MarineOffer.ISCANCELLED = false;
MarineOffer.ENTRY_DATE = moment().format("YYYY-MM-DD");
MarineOffer.OWNER_ID = 1;// _UserInfo.OwnerID;
MarineOffer.ISWARCOVERALLOWED = true;
MarineOffer.DisableSaveButton = false;
MarineOffer.EnablePrintButton = false;
MarineOffer.EnableExtraServices = false;
MarineOffer.ShowGenerateProposal = false;
MarineOffer.PrintType = "";
MarineOffer.PaymentType = "";
MarineOffer.ShowGenerateProposal = false;
MarineOffer.PrintType = "";
MarineOffer.LoggedInEmail = "";
MarineOffer.AsAgreed = false;
MarineOffer.WithConditions = false;
MarineOffer.BrokerCode = MyApp_GVM.BROKERCODE();
MarineOffer.IsSumInsuredExceeded = false;
MarineOffer.Cloned = false;
//alert(_UserInfo.EMAIL);
MarineOffer.LoggedInEmail = "";
MarineOffer.PLANSTYPE = '';
MarineOffer.ShowCetificate = 0;
MarineOffer.TOTALPREMIUMCOMPUTED = 0;
MarineOffer.MEDICALTOTALPREMIUMA = 0;
MarineOffer.MEDICALTOTALPREMIUMB = 0;
MarineOffer.IsVisible = false;
MarineOffer.PremDetails = "0$";

MarineOffer.My_Members = [];
MarineOffer.My_OFFERSMARINEEXTRA = [];

MarineOffer.My_OFFERS_MARINE = new Object();
MarineOffer.My_OFFERS_MARINE.POLICIES_MARINE_ID = 0;
MarineOffer.My_OFFERS_MARINE.POLICIES_ID = 0;
MarineOffer.My_OFFERS_MARINE.VESSELNAME = "to be declared";
MarineOffer.My_OFFERS_MARINE.CARRIERNAME = "";
MarineOffer.My_OFFERS_MARINE.ORG_COUNTRIES_ID = null;
MarineOffer.My_OFFERS_MARINE.ORG_REGION_ID = null;
MarineOffer.My_OFFERS_MARINE.DEST_COUNTRIES_ID = null;
MarineOffer.My_OFFERS_MARINE.DEST_REGION_ID = null;
MarineOffer.My_OFFERS_MARINE.PACKING_ID = 1;
MarineOffer.My_OFFERS_MARINE.FEESANDCHARGES = 0;
MarineOffer.My_OFFERS_MARINE.GOODSTYPE_ID = null;
MarineOffer.My_OFFERS_MARINE.GOODS_ID = 1;
MarineOffer.My_OFFERS_MARINE.MOREDETAILS = "";
MarineOffer.My_OFFERS_MARINE.SUPPLIERNAME = "";
MarineOffer.My_OFFERS_MARINE.MARINE_AGENT = "";
MarineOffer.My_OFFERS_MARINE.LCREFERENCE = "";

MarineOffer.My_OFFERS_MARINE.BANK_NAME = "";
MarineOffer.My_OFFERS_MARINE.BANK_ID = 0;
MarineOffer.My_OFFERS_MARINE.IsCLAUSE_DESC = false;

MarineOffer.My_OFFERS_MARINE.COVERS_ID = null;
MarineOffer.My_OFFERS_MARINE.ORG_CITIES_ID = 1;
MarineOffer.My_OFFERS_MARINE.DEST_CITIES_ID = 1;
MarineOffer.My_OFFERS_MARINE.ORG_FACILITIES_ID = 1;
MarineOffer.My_OFFERS_MARINE.DEST_FACILITIES_ID = 1;
MarineOffer.My_OFFERS_MARINE.VIA = "";
MarineOffer.My_OFFERS_MARINE.MCLAIMSETTLINGAGENT_ID = 1;
MarineOffer.My_OFFERS_MARINE.SHIPPINGCONVEYANCE_ID = 1;
MarineOffer.My_OFFERS_MARINE.VESSELAGE = 0;
MarineOffer.My_OFFERS_MARINE.ENTRY_USER_ID = 75;//_UserInfo.UserID;
MarineOffer.My_OFFERS_MARINE.ENTRY_DATE = moment().format("YYYY-MM-DD");
MarineOffer.My_OFFERS_MARINE.DEDUCTIBLE_AMOUNT = 0;
MarineOffer.My_OFFERS_MARINE.DECUCTIBLE_RATE = 0;
MarineOffer.My_OFFERS_MARINE.OWNER_ID = 1;// _UserInfo.OwnerID;


MarineOffer.My_INSURED = new Object();
MarineOffer.My_INSURED.INSURED_ID = 0;
MarineOffer.My_INSURED.ENTRY_USER_ID = 75;// _UserInfo.UserID;
MarineOffer.My_INSURED.INSURED_NAME = "";
MarineOffer.My_INSURED.INSURED_ADDRESS = "";
MarineOffer.My_INSURED.TELEPHONE = "";
MarineOffer.My_INSURED.POBOX = "";
MarineOffer.My_INSURED.EMAIL = "";
MarineOffer.My_INSURED.DRIVINGLIC = ""
MarineOffer.My_INSURED.TITLE = ""
MarineOffer.My_INSURED.ENTRY_DATE = moment().format("YYYY-MM-DD");
MarineOffer.My_INSURED.OWNER_ID = 1;//_UserInfo.OwnerID;

// ----------------------------------
// ----------------------------------
var _MarineOffer = ko.mapping.fromJS(MarineOffer);

_MarineOffer.SUMINSURED.subscribe(function (newval) {
    ////////debugger;
    if (newval != null && newval != 0) {
        //alert('11');
        /* ---------------- */
        //$('#Txt_Ma_SumInsured').number(true, 0);
        ////////debugger;
        $.number(newval);
        _MarineOffer.SUMINSURED($.number(newval))
        /* ---------------- */

        if (_MarineOffer.My_OFFERS_MARINE.COVERS_ID() != '' && _MarineOffer.My_OFFERS_MARINE.COVERS_ID() != null && _MarineOffer.My_OFFERS_MARINE.COVERS_ID() !=0) {
            ////////debugger;
            if (_MarineOffer.My_OFFERS_MARINE.ORG_COUNTRIES_ID() != undefined && _MarineOffer.My_OFFERS_MARINE.DEST_COUNTRIES_ID() != undefined && _MarineOffer.My_OFFERS_MARINE.GOODSTYPE_ID() != undefined) {

                jq_ShowMobileLoaderAdv("pg_GetMarineQuotation");
                GetData_Get_CoverRate_By_Cover_ID(_MarineOffer.My_OFFERS_MARINE.COVERS_ID());

                var match = ko.utils.arrayFirst(MyApp_GVM.List_COVERS_USERS_MINPREMIUM, function (item) {
                    ////////debugger;
                    if (item.COVERS_ID().toString() == _MarineOffer.My_OFFERS_MARINE.COVERS_ID().toString() && item.ENTRY_USER_ID().toString() == _UserInfo.UserID.toString()) {
                        return true;
                    }
                });
                if (match) {
                    ////////debugger;
                    localStorage.setItem("MinPrem", match.MINPREMIUM());
                }

                var func = function () {
                    CalculateTotalPrem();
                };

                setTimeout(func, 300);


            }
            else {
                showToast('Please Select Origin & Destination Country and Goods Type in Order to choose a Cover!', 'fail');
                return;
            }
        }

    }
});

//-----------------------------------------------------------------
var Params_Get_CoverRate_By_Cover_ID = new Object();
Params_Get_CoverRate_By_Cover_ID.SOURCE_REGIONS_ID = 0;
Params_Get_CoverRate_By_Cover_ID.DEST_REGIONS_ID = 0;
Params_Get_CoverRate_By_Cover_ID.GOODSTYPE_ID = 0;
Params_Get_CoverRate_By_Cover_ID.COVERS_ID = 0;
Params_Get_CoverRate_By_Cover_ID.USER_ID = 75;//_UserInfo.UserID;

var _Params_Get_CoverRate_By_Cover_ID = ko.mapping.fromJS(Params_Get_CoverRate_By_Cover_ID);
// ----------------------------------
var Params_Get_Goods_By_GOODSTYPE_ID = new Object();
Params_Get_Goods_By_GOODSTYPE_ID.OWNER_ID = 0;
Params_Get_Goods_By_GOODSTYPE_ID.GOODSTYPE_ID = 0;

var _Params_Get_Goods_By_GOODSTYPE_ID = ko.mapping.fromJS(Params_Get_Goods_By_GOODSTYPE_ID);
//-----------------------------------------------------------------//-----------------------------------------------------------------
//-----------------------------------------------------------------//-----------------------------------------------------------------
// ----------------------------------
MyApp_GVM.List_Org_Country = ko.mapping.fromJS([]);
MyApp_GVM.List_Dest_Country = ko.mapping.fromJS([]);
MyApp_GVM.List_GoodsType = ko.mapping.fromJS([]);
MyApp_GVM.List_Covers = ko.mapping.fromJS([]);
MyApp_GVM.List_BrokerCoef_GoodsType = ko.mapping.fromJS([]);
MyApp_GVM.List_COVERS_USERS_MINPREMIUM = ko.mapping.fromJS([]);
MyApp_GVM.List_Regions = ko.mapping.fromJS([]);

var _Params_Get_Marine_Startup_Data = new Object();
_Params_Get_Marine_Startup_Data.OWNER_ID = 1;

/*---------------------------------------------------------------*/

// ------------------------------------------------------------
//_MarineOffer.TOTALPREMIUM = ko.computed(function () {
//    //////debugger;


//}).extend({ throttle: 100 });
// -----------------------------------------------------------
var title = "";
var email = "";


$(document).on("pagebeforecreate", "#pg_GetMarineQuotation", function (event, ui) {
    //$('#pg_Medical').bind("pagebeforecreate", function (event) {
    ////////debugger;


    Validator_Login = $("#Frm_MarineQuotation").validate({
        rules: {
            DDL_Ma_OriginCountry: { required: true },
            DDL_Ma_DestinationCountry: { required: true },
            DDL_Ma_GoodsType: { required: true },
            DDL_Ma_Cover: { required: true },
            Txt_Ma_SumInsured: { required: true,maxlength: 10},
        }
    });

    RemoveInputDefaulValue('Txt_Ma_SumInsured', 0);

    // ----------------------------------
    $("#DDL_Ma_GoodsType").bind("change", function (event, ui) {
        //////debugger;
        if ($.trim($(this).val()) != '') {
            ////////debugger;
            var SelectedVal = $.trim($(this).val());

            var match = ko.utils.arrayFirst(MyApp_GVM.List_GoodsType(), function (item) {
                //////debugger;
                if (item.GOODSTYPE_ID().toString() == SelectedVal.toString()) {
                    return true;
                }
            });
            if (match) {
                //////debugger;
                //MarineOffer.GoodsTypeDesc(match.GOODSTYPE_DESC());
                $("#lbl_GoodsTypeDesc").text(match.GOODSTYPE_DESC());
            }

            _MarineOffer.My_OFFERS_MARINE.COVERS_ID(null);
        }

    });
    /* ------------------------------------------------------------------------------------------- */
    // ----------------------------------
    $("#DDL_Ma_OriginCountry").bind("change", function (event, ui) {
        try {
            //////debugger;
            if ($.trim($(this).val()) == '') {

            }
            else {
                //////debugger;
                _MarineOffer.My_OFFERS_MARINE.COVERS_ID(null);

                var SelectedVal = $.trim($(this).val());
                //alert(ko.mapping.toJSON(_List_Regions));
                var match = ko.utils.arrayFirst(MyApp_GVM.List_Regions(), function (item) {
                    if (item.COUNTRIES_ID().toString() == SelectedVal.toString()) {
                        return true;
                    }
                });
                //alert('test');
                //alert(match);
                if (match) {
                    //alert(match.REGIONS_NAME());
                    _MarineOffer.My_OFFERS_MARINE.ORG_REGION_ID(match.REGIONS_ID());
                    //alert(_Policies.My_POLICIES_MARINE.ORG_REGION_ID());
                }

                //var match2 = ko.utils.arrayFirst(_List_Org_Country(), function (item) {
                //    if (item.COUNTRIES_ID().toString() == SelectedVal.toString()) {
                //        return true;
                //    }
                //});
                //if (match2) {
                //    //alert(_viewModel_WarServices._List_Selected_WarServices_IDs());
                //    _viewModel_WarServices._List_Selected_WarServices_IDs([]);
                //    _MarineOffer.ISWARCOVERALLOWED(match2.ISWARCOVERALLOWED())
                //}
            }
        }
        catch (e) {
            alert('Change: ' + e.message);
        }
    });
    // ----------------------------------
    // ----------------------------------
    $("#DDL_Ma_DestinationCountry").bind("change", function (event, ui) {
        try {
            ////////debugger;
            if ($.trim($(this).val()) == '') {

            }
            else {
                ////////debugger;
                _MarineOffer.My_OFFERS_MARINE.COVERS_ID(null);
                var SelectedVal2 = $.trim($(this).val());
                var match = ko.utils.arrayFirst(MyApp_GVM.List_Regions(), function (item) {
                    if (item.COUNTRIES_ID().toString() === SelectedVal2.toString()) {
                        return true;
                    }
                });
                if (match) {
                    //alert(match.REGIONS_NAME());
                    _MarineOffer.My_OFFERS_MARINE.DEST_REGION_ID(match.REGIONS_ID());
                    //alert(_Policies.My_POLICIES_MARINE.ORG_REGION_ID());
                }
                //var match2 = ko.utils.arrayFirst(_List_Dest_Country(), function (item) {
                //    if (item.COUNTRIES_ID().toString() == SelectedVal.toString()) {
                //        return true;
                //    }
                //});
                //if (match2) {
                //    //alert(match2.ISWARCOVERALLOWED());
                //    _viewModel_WarServices._List_Selected_WarServices_IDs([]);
                //    _MarineOffer.ISWARCOVERALLOWED(match2.ISWARCOVERALLOWED())
                //}

                //GetData_Get_ClaimSettlingAgent_By_COUNTRY_ID();
            }
        }
        catch (e) {
            alert('Change: ' + e.message);
        }
    });
    // ----------------------------------
    // ----------------------------------------------------------------------------------------------------------------- */
    $("#DDL_Ma_Cover").bind("change", function (event, ui) {
      //debugger;

        if ($.trim($(this).val()) != '') {
            ////////debugger;
            var SelectedVal = $.trim($(this).val());
            if (_MarineOffer.My_OFFERS_MARINE.ORG_COUNTRIES_ID() != undefined && _MarineOffer.My_OFFERS_MARINE.DEST_COUNTRIES_ID() != undefined && _MarineOffer.My_OFFERS_MARINE.GOODSTYPE_ID() != undefined) {

                //var func = function () {

                //    jq_ShowMobileLoader();
                jq_ShowMobileLoaderAdv("pg_GetMarineQuotation");
                GetData_Get_CoverRate_By_Cover_ID(SelectedVal);
                //};

                //setTimeout(func, 300);

                   var match = ko.utils.arrayFirst(MyApp_GVM.List_COVERS_USERS_MINPREMIUM, function (item) {
                    ////////debugger;
                    if (item.COVERS_ID().toString() == SelectedVal.toString() && item.ENTRY_USER_ID().toString() == _UserInfo.UserID.toString()) {
                        return true;
                    }
                });
                if (match) {
                    ////////debugger;
                    localStorage.setItem("MinPrem", match.MINPREMIUM());
                }

                var func = function () {
                    CalculateTotalPrem();
                };
                setTimeout(func, 300);
            }
            else {
                showToast('Please Select Origin & Destination Country and Goods Type in Order to choose a Cover!', 'fail');
                return;
            }
        }
    });
    // ------------------------------------------------------------------------------------------------------------------------



    $(this).on("click", "#btn_GetPrices_Marine", function (event) {

        if ($("#Frm_MarineQuotation").valid()) {
            /* ---------------- */
            //////debugger;
                var ExtraServicePrem = 0;
                var CoverPrem = 0;
                var NetPrem = 0;
                var AccessoryFees = 0;
                var PolicyCost = 0;
                var FixedStamps = 0;
                var PropStamps = 0;
                var MunicipalityTax = 0;
                var MinimumPremium = 0;
                //alert('Premium');

                CoverPrem = parseFloat(_MarineOffer.RATE()) * parseInt(_MarineOffer.SUMINSURED().toString().replace(/,/g, ""));

                //alert(ExtraServicePrem);

                NetPrem = CoverPrem;
                //Add Accesssories Fees 50 % of net premium
                //AccessoryFees = 0.5 * parseInt(NetPrem);
                AccessoryFees = 0 * parseInt(NetPrem);

                //Add PolicyCost 15 USD 
                PolicyCost = 15;//parseFloat(_UserInfo.COSTOFPOLICY);
                //Add FixedStamps 1.33 USD
                //FixedStamps = 1.33;
                FixedStamps = 0;
                if (parseInt(localStorage.getItem("MinPrem")) > 0) {
                    MinimumPremium = parseFloat(localStorage.getItem("MinPrem"));
                }
                else
                    MinimumPremium = 0 //parseFloat(_UserInfo.MINIMUMPREMIUM);


                //Add PropStamps (net prem.+acc.fees + policy cost) * 3%.
                //PropStamps = (parseInt(NetPrem) + parseFloat(AccessoryFees) + parseFloat(PolicyCost)) * 0.03;
                PropStamps = (parseInt(NetPrem) + parseFloat(AccessoryFees) + parseFloat(PolicyCost)) * 0;
                //Add Municipality Tax (net prem.+acc.fees + policy cost) * 6%.
                _MarineOffer.PROPSTAMPS(PropStamps);
                _MarineOffer.NETPREMIUM(parseInt(NetPrem));
                _MarineOffer.ACCESSORIES(parseFloat(AccessoryFees));
                _MarineOffer.POLICY_COST(parseFloat(PolicyCost));

                //alert(NetPrem);
                if (NetPrem != 0) {

                    //MunicipalityTax = (parseInt(NetPrem) + parseFloat(AccessoryFees) + parseInt(PolicyCost)) * 0.06;
                    MunicipalityTax = (parseInt(NetPrem) + parseFloat(AccessoryFees) + parseInt(PolicyCost)) * 0;
                    _MarineOffer.MUNITAX = MunicipalityTax;
                    if ($.number(Math.round(NetPrem + AccessoryFees + PolicyCost + FixedStamps + PropStamps + MunicipalityTax)) < parseFloat(MinimumPremium)) {

                        _MarineOffer.TOTALPREMIUM($.number(MinimumPremium));
                        _MarineOffer.PremDetails(_MarineOffer.TOTALPREMIUM().toString() + "$");
                        //$("#ul_Listing_Marine").listview('refresh').trigger('create');
                        _MarineOffer.IsVisible(true);
                        $("#txt_Ma_InsName").focus();

                    }
                    else {

                        _MarineOffer.TOTALPREMIUM($.number(Math.round(NetPrem + AccessoryFees + PolicyCost + FixedStamps + PropStamps + MunicipalityTax)));
                        _MarineOffer.PremDetails(_MarineOffer.TOTALPREMIUM().toString() + "$");
                       // $("#ul_Listing_Marine").listview('refresh').trigger('create');
                        _MarineOffer.IsVisible(true);
                        $("#txt_Ma_InsName").focus();
                    }
                }
                else {
                    _MarineOffer.TOTALPREMIUM(0);
                    _MarineOffer.PremDetails(_MarineOffer.TOTALPREMIUM().toString() + "$");
                    //$("#ul_Listing_Marine").listview('refresh').trigger('create');
                    //$("#sp_NoResults").html("<br><br>Sorry, no results found matching your criteria.");
                }
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


    $(this).on("click", "#btn_SendPrices_Marine", function (event) {
        //////debugger;

        if ($.trim($("#txt_Ma_InsName").val()) == "" || $.trim($("#txt_Ma_Email").val()) == "" || $.trim($("#txt_Ma_Mobile").val()) == "") {
            jq_DisplayMessage("MSG_GeneralError", "", "Please Fill All Your Info.!");
            $("#txt_Ma_InsName").focus();
            return false;
        }

        if ($("#Frm_MarineQuotation").valid()) {

            var func = function () {

                jq_ShowMobileLoaderAdv("pg_GetMarineQuotation");
                Edit_MarineOffer();
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

    $(this).on("click", "#btn_SharePrices_Marine", function (event) {
        //////debugger;

        if ($.trim($("#txt_Ma_InsName").val()) == "" || $.trim($("#txt_Ma_Email").val()) == "" || $.trim($("#txt_Ma_Mobile").val()) == "") {
            jq_DisplayMessage("MSG_GeneralError", "", "Please Fill All Your Info.!");
            $("#txt_Ma_InsName").focus();
            return false;
        }

        if ($("#Frm_MarineQuotation").valid()) {

            var func = function () {

                jq_ShowMobileLoaderAdv("pg_GetMarineQuotation");
                Edit_MarineOfferSharing();
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

$(document).on("pagebeforeshow", "#pg_GetMarineQuotation", function (event, ui) {
    //$('#pg_Medical').bind('pageshow', function (event, ui) {
    ////////debugger;
    /* -------------------------------------------------- */
    // if (!js_FncCommon()) { return; };
    /* -------------------------------------------------- */
    //alert('page bind');
    /* SEO */
    Validator_Login.resetForm();
    /* -------------------------------------------------- */
    $("meta[name=description]").attr("content", "Get Marine Quotation");
    $("title").html("Get Marine Quotation");
    /* -------------------------------------------------- */

    var query = "title=MARINE Insurance:Marine Cargo and Land Transit&email=risques@victoire.com.lb~sami.saad@victoire.com.lb";//$(this).data("url").split("?")[1];
    query = query.replace("title=", "");
    query = query.replace("email=", "");

    title = query.split("&")[0];
    email = query.split("&")[1];

    //alert(title);

    //alert(email);

    //alert(query);

    $('#lblSubject').text(title);


    //ko.applyBindings(_MarineOffer, document.getElementById('ct_GetMarineQuotation'));


    var func = function () {

        jq_ShowMobileLoader();
        /* ------Fill Programme Code Combo-------- */
        Get_Marine_Startup_Data();
    };

    setTimeout(func, 300);

    /* ------End-------- */
    /* Refresh Controls */

    /* ---------------- */

});

function Get_Marine_Startup_Data() {
    ////////debugger;
    try {
        /* ---------------- */
        _Service_Method = "Get_Marine_Startup_Data";
        CallService('Service_Call_Completed_Marine');
        /* ---------------- */
    }
    catch (e) {
        alert("Get_Marine_Startup_Data : " + e.Message);
    }
}


/* --------------------------------------------------------------- */
/* --------------------------------------------------------------- */

function Service_Call_Completed_Marine(i_Response) {
    try {
        // alert(_Service_Method);
        switch (_Service_Method) {
            case "Get_Marine_Startup_Data":
                Get_Marine_Startup_Data_Completed(i_Response);
                break;
            case "Edit_MarineOffer":
                Edit_MarineOffer_Completed(i_Response);
                break;
            case "Edit_MarineOfferSharing":
                Edit_MarineOfferSharing_Completed(i_Response);
                break;
            case "Get_CoverRate_By_Cover_ID":
                Get_CoverRate_By_Cover_ID_Completed(i_Response);
                break;
        }
    }
    catch (e) {
        alert("Service_Call_Completed_Marine:" + e.message);
    }
}

/* --------------------------------------------------------------- */
function Get_Marine_Startup_Data_Completed(i_Input) {
    //////debugger;
    try {
        ko.mapping.fromJS(i_Input.My_Result.My_Org_Country, MyApp_GVM.List_Org_Country);
        ko.mapping.fromJS(i_Input.My_Result.My_Dest_Country, MyApp_GVM.List_Dest_Country);
        ko.mapping.fromJS(i_Input.My_Result.My_GoodsType, MyApp_GVM.List_GoodsType);
        ko.mapping.fromJS(i_Input.My_Result.My_Covers, MyApp_GVM.List_Covers);
        ko.mapping.fromJS(i_Input.My_Result.My_Regions, MyApp_GVM.List_Regions);
        //ko.mapping.fromJS(i_Input.My_Result.My_BROKERSCOEF_GOODSTYPE, _List_BrokerCoef_GoodsType);
        ko.mapping.fromJS(i_Input.My_Result.My_COVERS_USERS_MINPREMIUM, MyApp_GVM.List_COVERS_USERS_MINPREMIUM);

    }
    catch (e) {
        alert("Get_Marine_Startup_Data_Completed: " + e.message);
    }
}
/* --------------------------------------------------------------- */

/* --------------------------------------------------------------- */
function Btn_SaveMarine_Click() {
    try {
        //alert('test');
        ////////debugger;
        /* ------------------------------------- */
        if ($("#Frm_MarineQuotation").valid()) {
            var Currency_obj = ko.utils.arrayFirst(_List_Currencies(), function (obj_Currency) {
                if (obj_Currency.CURRENCY_ID().toString() === _MarineOffer.CURRENCY_ID().toString()) {
                    return true;
                }
            });
            if (parseFloat($('#Txt_Ma_TotalPremium').val().replace(/,/g, "")) <= 0) {
                jq_DisplayMessage("MSG_GeneralError", "", "Goods Type Not Covered. Please Refer To The Company.!");
                jq_HideMobileLoaderAdv("pg_GetMarineQuotation");
                return;
            }

            if (parseFloat($('#Txt_MaF_TotalPremium').val()) > 0) {
                if (parseFloat($('#Txt_MaF_TotalPremium').val().replace(/,/g, "")) < parseFloat($.number(parseFloat(parseFloat(localStorage.getItem("MinPrem")))))) {
                    jq_DisplayMessage("MSG_GeneralError", "", "Min Total Premium should be equal to " + Math.round(parseFloat(parseFloat(localStorage.getItem("MinPrem")) * Currency_obj.TO_USD_RATE())));
                    jq_HideMobileLoaderAdv("pg_GetMarineQuotation");
                    return;
                }
            }


            if (parseFloat($('#Txt_MaF_ReceivedPremium').val().replace(/,/g, "")) > 0) {
                if (parseFloat($('#Txt_MaF_ReceivedPremium').val().replace(/,/g, "")) > parseFloat($('#Txt_MaF_TotalPremium').val().replace(/,/g, ""))) {
                    jq_DisplayMessage("MSG_GeneralError", "", 'Received Premium should be less or equal to Total Premium!');
                    $('#Txt_MaF_ReceivedPremium').val(0);
                    _MarineOffer.RECEIVEDPREMIUM(0);
                    jq_HideMobileLoaderAdv("pg_GetMarineQuotation");
                    return;
                }
            }

            var q = new Date();
            var m = q.getMonth() + 1;
            var d = q.getDay();
            var y = q.getYear();
            var date = new Date(y, m, d);
            var ShippinDate = Date.parse($.datepicker.formatDate("yy-mm-dd", $("#Txt_MaF_ShippingDate").datepicker('getDate')));

            if (ShippinDate < date) {
                jq_DisplayMessage("MSG_GeneralError", "", 'Shipping Date Should be Greater or Equal to Today!', 'fail');
                jq_HideMobileLoaderAdv("pg_GetMarineQuotation");
                return;
            }


            if ($("#Btn_Save").is(":visible") == true) {
                jq_HideNotification();
                Edit_MarineOffer();
            }
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
function Edit_MarineOffer() {
    try {
        ////////debugger;
        /* Call the Service. */
        /* ---------------- */
        _MarineOffer.LoggedInEmail(_UserInfo.EMAIL);
        _MarineOffer.BrokerCode(_UserInfo.BROKERCODE);
        var x = ko.mapping.toJS(_MarineOffer);
        x.SUMINSURED = parseFloat(x.SUMINSURED.toString().replace(/,/g, ""));
        x.TOTALSUMINSURED = parseFloat(x.TOTALSUMINSURED.toString().replace(/,/g, ""));
        x.TOTALPREMIUM = parseFloat(x.TOTALPREMIUM.toString().replace(/,/g, ""));
        x.RECEIVEDPREMIUM = parseFloat(x.RECEIVEDPREMIUM.toString().replace(/,/g, ""));
        x.NETPREMIUM = parseFloat(x.NETPREMIUM.toString().replace(/,/g, ""));

        _Params = JSON.stringify(x);



        //alert(_Params);
        _Service_Method = "Edit_MarineOffer";
        _Async = true;
        CallService('Service_Call_Completed_Marine');
        /* ---------------- */
    }
    catch (e) {
        alert("Edit_MarineOffer: " + e.message);
    }
}
/* --------------------------------------------------------------- */
/* --------------------------------------------------------------- */
function Edit_MarineOfferSharing() {
    try {
        ////////debugger;
        /* Call the Service. */
        /* ---------------- */
        _MarineOffer.LoggedInEmail(_UserInfo.EMAIL);
        _MarineOffer.BrokerCode(_UserInfo.BROKERCODE);
        var x = ko.mapping.toJS(_MarineOffer);
        x.SUMINSURED = parseFloat(x.SUMINSURED.toString().replace(/,/g, ""));
        x.TOTALSUMINSURED = parseFloat(x.TOTALSUMINSURED.toString().replace(/,/g, ""));
        x.TOTALPREMIUM = parseFloat(x.TOTALPREMIUM.toString().replace(/,/g, ""));
        x.RECEIVEDPREMIUM = parseFloat(x.RECEIVEDPREMIUM.toString().replace(/,/g, ""));
        x.NETPREMIUM = parseFloat(x.NETPREMIUM.toString().replace(/,/g, ""));

        _Params = JSON.stringify(x);



        //alert(_Params);
        _Service_Method = "Edit_MarineOfferSharing";
        _Async = true;
        CallService('Service_Call_Completed_Marine');
        /* ---------------- */
    }
    catch (e) {
        alert("Edit_MarineOfferSharing: " + e.message);
    }
}
/* --------------------------------------------------------------- */
/* --------------------------------------------------------------- */
function Edit_MarineOfferSharing_Completed(i_Response) {
    try {

        //debugger;
        //alert('ekdjkejdked');
        jq_HideMobileLoaderAdv("pg_GetMarineQuotation");

        // Show spinner dialog with message
        // Note: spinner dialog is cancelable by default
        SpinnerDialog.show(null, "Please wait to share your Marine Offer");

        setTimeout(function () {
            SpinnerDialog.hide();
        }, 30000);

        //showToast('Saved. Please Check You Email. Thank You!', 'success');
        var inputUri = encodeURI('http://mobile.victoire.com.lb/MobileOffers/MarineOffer_' + i_Response.My_Result.OFFERS_ID + '.pdf');
        //alert('ekdjekdj kede done');
        window.plugins.socialsharing.share('Here is your Marine Offer Shared File', 'Your Marine Offer', inputUri);
        /* ----------------- */

        ko.mapping.fromJS(i_Response.My_MarineOffer, _MarineOffer);


    }
    catch (e) {
        alert("Edit_MarineOffer_Completed: " + e.message);
    }
}
/* --------------------------------------------------------------- */
/* --------------------------------------------------------------- */
function GetData_Get_CoverRate_By_Cover_ID(Cover_ID) {
    try {
        ////////debugger;
        /* ---------------- */
        GatherUIData_Get_CoverRate_By_Cover_ID(Cover_ID);
        /* ---------------- */

        /* ---------------- */
        _Params = ko.mapping.toJSON(_Params_Get_CoverRate_By_Cover_ID);
        _Service_Method = "Get_CoverRate_By_Cover_ID";
        _Async = true;
        CallService('Service_Call_Completed_Marine');
        /* ---------------- */
    }
    catch (e) {
        alert("GetData_Get_CoverRate_By_Cover_ID: " + e.message);
    }
}
/* --------------------------------------------------------------- */

/* --------------------------------------------------------------- */
/* GatherUIData_Get_CoverRate_By_Cover_ID() */
/* --------------------------------------------------------------- */
function GatherUIData_Get_CoverRate_By_Cover_ID(Cover_ID) {
    try {
        // To Collect Non Visual Data.
        ////////debugger;
        //alert(Cover_ID);
        _Params_Get_CoverRate_By_Cover_ID.SOURCE_REGIONS_ID = _MarineOffer.My_OFFERS_MARINE.ORG_REGION_ID();
        _Params_Get_CoverRate_By_Cover_ID.DEST_REGIONS_ID = _MarineOffer.My_OFFERS_MARINE.DEST_REGION_ID();
        _Params_Get_CoverRate_By_Cover_ID.GOODSTYPE_ID = _MarineOffer.My_OFFERS_MARINE.GOODSTYPE_ID();
        _Params_Get_CoverRate_By_Cover_ID.COVERS_ID = Cover_ID;
        _Params_Get_CoverRate_By_Cover_ID.USER_ID = _UserInfo.UserID;

    }
    catch (e) {
        alert("GatherUIData_Get_CoverRate_By_Cover_ID: " + e.message);
    }
}
/* --------------------------------------------------------------- */
// Get_CoverRate_By_Cover_ID_Completed
/* --------------------------------------------------------------- */
function Get_CoverRate_By_Cover_ID_Completed(i_Input) {
    try {
        ////////debugger;
        //alert(i_Input.My_Result.MPLANS_RATE);
        jq_HideMobileLoaderAdv("pg_GetMarineQuotation");
        if (i_Input.My_Result != null) {
            _MarineOffer.RATE(parseFloat(i_Input.My_Result.MPLANS_RATE));
            //_Policies.MPLANS_ID(parseInt(i_Input.My_Result.MPLANS_ID));
        }
        else {
            _MarineOffer.My_OFFERS_MARINE.COVERS_ID(null);
            jq_DisplayMessage("MSG_GeneralError", "", "Selected Regions are not Covered!");
            return;
        }

        //alert(_Policies.RATE);
    }
    catch (e) {
        alert("Get_CoverRate_By_Cover_ID_Completed: " + e.message);
    }
}

/* --------------------------------------------------------------- */
function Edit_MarineOffer_Completed(i_Response) {
    try {
        jq_HideMobileLoaderAdv("pg_GetMarineQuotation");
        //showToast('Saved. Please Check You Email. Thank You!', 'success');

        jq_DisplayMessage("MSG_GeneralInfo", "Successfull!", "Your Marine Offer Has Been Sent Successfully! please don't forget to check your junk mail too.", null, null, null, null);
        /* ----------------- */

        ko.mapping.fromJS(i_Response.My_MarineOffer, _MarineOffer);


    }
    catch (e) {
        alert("Edit_MarineOffer_Completed: " + e.message);
    }
}
/* --------------------------------------------------------------- */
function CalculateTotalPrem() {
    try
    {
        if ($("#Frm_MarineQuotation").valid() && parseInt(_MarineOffer.SUMINSURED().toString().replace(/,/g, "")) > 0) {
            /* ---------------- */
            //////debugger;
            var ExtraServicePrem = 0;
            var CoverPrem = 0;
            var NetPrem = 0;
            var AccessoryFees = 0;
            var PolicyCost = 0;
            var FixedStamps = 0;
            var PropStamps = 0;
            var MunicipalityTax = 0;
            var MinimumPremium = 0;
            //alert('Premium');

            CoverPrem = parseFloat(_MarineOffer.RATE()) * parseInt(_MarineOffer.SUMINSURED().toString().replace(/,/g, ""));

            //alert(ExtraServicePrem);

            NetPrem = CoverPrem;
            //Add Accesssories Fees 50 % of net premium
            //AccessoryFees = 0.5 * parseInt(NetPrem);
            AccessoryFees = 0 * parseInt(NetPrem);

            //Add PolicyCost 15 USD 
            PolicyCost = 15;//parseFloat(_UserInfo.COSTOFPOLICY);
            //Add FixedStamps 1.33 USD
            //FixedStamps = 1.33;
            FixedStamps = 0;
            if (parseInt(localStorage.getItem("MinPrem")) > 0) {
                MinimumPremium = parseFloat(localStorage.getItem("MinPrem"));
            }
            else
                MinimumPremium = 0 //parseFloat(_UserInfo.MINIMUMPREMIUM);


            //Add PropStamps (net prem.+acc.fees + policy cost) * 3%.
            //PropStamps = (parseInt(NetPrem) + parseFloat(AccessoryFees) + parseFloat(PolicyCost)) * 0.03;
            PropStamps = (parseInt(NetPrem) + parseFloat(AccessoryFees) + parseFloat(PolicyCost)) * 0;
            //Add Municipality Tax (net prem.+acc.fees + policy cost) * 6%.
            _MarineOffer.PROPSTAMPS(PropStamps);
            _MarineOffer.NETPREMIUM(parseInt(NetPrem));
            _MarineOffer.ACCESSORIES(parseFloat(AccessoryFees));
            _MarineOffer.POLICY_COST(parseFloat(PolicyCost));

            //alert(NetPrem);
            if (NetPrem != 0) {

                //MunicipalityTax = (parseInt(NetPrem) + parseFloat(AccessoryFees) + parseInt(PolicyCost)) * 0.06;
                MunicipalityTax = (parseInt(NetPrem) + parseFloat(AccessoryFees) + parseInt(PolicyCost)) * 0;
                _MarineOffer.MUNITAX = MunicipalityTax;
                if ($.number(Math.round(NetPrem + AccessoryFees + PolicyCost + FixedStamps + PropStamps + MunicipalityTax)) < parseFloat(MinimumPremium)) {

                    _MarineOffer.TOTALPREMIUM($.number(MinimumPremium));
                    _MarineOffer.PremDetails(_MarineOffer.TOTALPREMIUM().toString() + "$");
                    //$("#ul_Listing_Marine").listview('refresh').trigger('create');
                    _MarineOffer.IsVisible(true);
                    $("#txt_Ma_InsName").focus();

                }
                else {

                    _MarineOffer.TOTALPREMIUM($.number(Math.round(NetPrem + AccessoryFees + PolicyCost + FixedStamps + PropStamps + MunicipalityTax)));
                    _MarineOffer.PremDetails(_MarineOffer.TOTALPREMIUM().toString() + "$");
                    // $("#ul_Listing_Marine").listview('refresh').trigger('create');
                    _MarineOffer.IsVisible(true);
                    $("#txt_Ma_InsName").focus();
                }
            }
            else {
                _MarineOffer.TOTALPREMIUM(0);
                _MarineOffer.PremDetails(_MarineOffer.TOTALPREMIUM().toString() + "$");
                //$("#ul_Listing_Marine").listview('refresh').trigger('create');
                //$("#sp_NoResults").html("<br><br>Sorry, no results found matching your criteria.");
            }
            /* ---------------- */
            //$("#ul_listing_MarineTotalPrem").listview('refresh');
        }
    
    }
    catch (e) {
        alert("CalculateTotalPrem: " + e.message);
    }


}