/* Members */
var TravelOffer;
var UserID = 75;//62;
//var UserID = 62;//62;
var OwnerID = 1;

//else {
//    alert('edjkejdkejdke jdke d');
//    jq_NavigateToPage('pg_home');
//}

/* Members */
/* --------------------------------------------------------------- */
var TravelPolicy = new Object();
localStorage.setItem("TotalPrem", 0);
TravelPolicy.POLICIES_ID = 0;
TravelPolicy.POLICY_CODE = "NT";
TravelPolicy.POLICY_NO = 0;
TravelPolicy.ENDORSEMENT = 0;
TravelPolicy.POLICY_DESC = "";
TravelPolicy.SHEET_NO = 0;
TravelPolicy.MPLANS_ID = 0;
TravelPolicy.ENTRY_USER_ID = UserID;
TravelPolicy.INSURED_ID = 0;
TravelPolicy.SUBJECTASSURED_ID = 0;
TravelPolicy.OPRDATE = convertDate(new Date());
TravelPolicy.STARTDATE = convertDate(new Date());
TravelPolicy.EXPIRYDATE = convertDate(new Date());
TravelPolicy.CURRENCY_ID = 8;
TravelPolicy.RATE = 0;
TravelPolicy.SUMINSURED = 0;
TravelPolicy.TOTALSUMINSURED = 0;
TravelPolicy.NETPREMIUM = 0;
TravelPolicy.RECEIVEDPREMIUM = 0;
TravelPolicy.ACCESSORIES = 0;
TravelPolicy.POLICY_COST = 0;
TravelPolicy.FIXEDSTAMPS = 0;
TravelPolicy.PROPSTAMPS = 0;
TravelPolicy.MUNITAX = 0;
TravelPolicy.TOTALPREMIUM = 0;
TravelPolicy.PRINTCOUNT = 0;
TravelPolicy.CREATIONDATE = convertDate(new Date());
TravelPolicy.MODIFICATIONDATE = convertDate(new Date());
TravelPolicy.SYNCED = false;
TravelPolicy.SUBUSERS_ID = 0;
TravelPolicy.CANCELLATIONDATE = convertDate(new Date());
TravelPolicy.CANCELLATIONREASON = "";
TravelPolicy.ISCANCELLED = false;
TravelPolicy.ENTRY_DATE = convertDate(new Date());
TravelPolicy.OWNER_ID = OwnerID;
TravelPolicy.IsWorldWide = true;
TravelPolicy.WorldWide = 'W';
TravelPolicy.PLANSTYPE = 'W300';
TravelPolicy.ShowCetificate = 0;
TravelPolicy.My_Members = [];
TravelPolicy.TOTALPREMIUMCOMPUTED = 0;
TravelPolicy.DisableSaveButton = false;
TravelPolicy.EnablePrintButton = false;
TravelPolicy.SylverPrem = 0;
TravelPolicy.SylverPrem_Old = 0;
TravelPolicy.GoldPrem = 0;
TravelPolicy.GoldPrem_Old = 0;
TravelPolicy.SylverSportPrem = 0;
TravelPolicy.SylverSportPrem_Old = 0;
TravelPolicy.GoldSportPrem = 0;
TravelPolicy.GoldSportPrem_Old = 0;
TravelPolicy.AddGoldPrem = 0;
TravelPolicy.AddGoldPrem_Old = 0;
TravelPolicy.AddSylverPrem = 0;
TravelPolicy.AddSylverPrem_Old = 0;
TravelPolicy.IsSportSylverPrem = false;
TravelPolicy.IsSportGoldPrem = false;
TravelPolicy.IsSylverPackage = false;
TravelPolicy.IsGoldPackage = false;

TravelPolicy.SylverPremDetails = "";
TravelPolicy.GoldPremDetails = "";
TravelPolicy.SylverSportPremDetails = "";
TravelPolicy.GoldSportPremDetails = "";

TravelPolicy.SylverPlanshID = 0;
TravelPolicy.GoldPlanshID = 0;
TravelPolicy.SylverSportPlanshID = 0;
TravelPolicy.GoldSportPlanshID = 0;

TravelPolicy.MEMBER_NAME1 = "";
TravelPolicy.MEMBER_BIRTHDATE1 = "";
TravelPolicy.MEMBER_GENDER1 = "";
TravelPolicy.MEMBER_PASSPORT1 = "";

TravelPolicy.MEMBER_NAME2 = "";
TravelPolicy.MEMBER_BIRTHDATE2 = "";
TravelPolicy.MEMBER_GENDER2 = "";
TravelPolicy.MEMBER_PASSPORT2 = "";

TravelPolicy.MEMBER_NAME3 = "";
TravelPolicy.MEMBER_BIRTHDATE3 = "";
TravelPolicy.MEMBER_GENDER3 = "";
TravelPolicy.MEMBER_PASSPORT3 = "";

TravelPolicy.MEMBER_NAME4 = "";
TravelPolicy.MEMBER_BIRTHDATE4 = "";
TravelPolicy.MEMBER_GENDER4 = "";
TravelPolicy.MEMBER_PASSPORT4 = "";

TravelPolicy.MEMBER_NAME5 = "";
TravelPolicy.MEMBER_BIRTHDATE5 = "";
TravelPolicy.MEMBER_GENDER5 = "";
TravelPolicy.MEMBER_PASSPORT5 = "";

TravelPolicy.MEMBER_NAME6 = "";
TravelPolicy.MEMBER_BIRTHDATE6 = "";
TravelPolicy.MEMBER_GENDER6 = "";
TravelPolicy.MEMBER_PASSPORT6 = "";
TravelPolicy.InsNo=0

TravelPolicy.Travel_INSURED = new Object();
TravelPolicy.Travel_INSURED.INSUREDTRAVEL_ID = 0;
TravelPolicy.Travel_INSURED.ENTRY_USER_ID = UserID;
TravelPolicy.Travel_INSURED.TITLE = "";
TravelPolicy.Travel_INSURED.INSURED_NAME = "";
TravelPolicy.Travel_INSURED.INSURED_ADDRESS = "";
TravelPolicy.Travel_INSURED.COUNTRIES_ID = 0;
TravelPolicy.Travel_INSURED.TELEPHONE = "";
TravelPolicy.Travel_INSURED.POBOX = "";
TravelPolicy.Travel_INSURED.EMAIL = "";
TravelPolicy.Travel_INSURED.WORKERSNATIONALITY_ID = 0
TravelPolicy.Travel_INSURED.GENDER = "M";
TravelPolicy.Travel_INSURED.PASSPORT = "";
TravelPolicy.Travel_INSURED.BIRTHDATE = convertDate(new Date());
TravelPolicy.Travel_INSURED.AGE = 0;
TravelPolicy.Travel_INSURED.OWNER_ID = OwnerID;
TravelPolicy.Travel_INSURED.INSURED_NETPREMIUM = 0;
TravelPolicy.Travel_INSURED.INSURED_ACCESSORIES = 0;
TravelPolicy.Travel_INSURED.INSURED_POLICY_COST = 0;
TravelPolicy.Travel_INSURED.INSURED_FIXEDSTAMPS = 0;
TravelPolicy.Travel_INSURED.INSURED_PROPSTAMPS = 0;
TravelPolicy.Travel_INSURED.INSURED_MUNITAX = 0;
TravelPolicy.Travel_INSURED.INSURED_TOTALPREMIUM = 0;

// ----------------------------------
var _Params_Get_Travel_Startup_Data = new Object();
_Params_Get_Travel_Startup_Data.OWNER_ID = 1;

//------------------------------------

var _TravelPolicy = ko.mapping.fromJS(TravelPolicy);
//When Mapping it creates automatically a model thats why no need to create it down.

/*---------------------------------------------------------------*/
// ----------------------------------
var Member_familyTopay = function (_INSUREDTRAVEL_MEMBERS_ID, _MEMBER_NAME, _MEMBER_BIRTHDATE, _MEMBER_AGE, _MEMBER_GENDER, _MEMBER_PASSPORT, _MEMBER_PREMIUM,
        _MEMBER_NETPREMIUM, _MEMBER_ACCESSORIES, _MEMBER_POLICY_COST, _MEMBER_FIXEDSTAMPS, _MEMBER_PROPSTAMPS, _MEMBER_MUNITAX) {
    var self = this;
    self.INSUREDTRAVEL_MEMBERS_ID = _INSUREDTRAVEL_MEMBERS_ID;
    self.MEMBER_NAME = ko.observable(_MEMBER_NAME).extend({ required: true });
    self.MEMBER_BIRTHDATE = ko.observable(_MEMBER_BIRTHDATE).extend({ required: true });
    self.MEMBER_AGE = ko.observable(_MEMBER_AGE);
    self.MEMBER_GENDER = ko.observable(_MEMBER_GENDER).extend({ required: true });
    self.MEMBER_PASSPORT = ko.observable(_MEMBER_PASSPORT).extend({ required: true });
    self.MEMBER_PREMIUM = ko.observable(_MEMBER_PREMIUM).extend({ required: true });
    self.MEMBER_NETPREMIUM = ko.observable(_MEMBER_NETPREMIUM).extend({ required: true });
    self.MEMBER_ACCESSORIES = ko.observable(_MEMBER_ACCESSORIES).extend({ required: true });
    self.MEMBER_POLICY_COST = ko.observable(_MEMBER_POLICY_COST).extend({ required: true });
    self.MEMBER_FIXEDSTAMPS = ko.observable(_MEMBER_FIXEDSTAMPS).extend({ required: true });
    self.MEMBER_PROPSTAMPS = ko.observable(_MEMBER_PROPSTAMPS).extend({ required: true });
    self.MEMBER_MUNITAX = ko.observable(_MEMBER_MUNITAX).extend({ required: true });
    self._TravelPayment_Errors = ko.validation.group(self); // USED FOR KO VALIDATION //
};
/*---------------------------------------------------------------*/

var List_InsuredTravelTitle = [{ "VAL": "Mr", "DESC": "Mr." }, { "VAL": "Ms", "DESC": "Ms." }];
MyApp_GVM.List_InsuredTravelTitle = ko.mapping.fromJS(List_InsuredTravelTitle);

var List_InsuredGender = [{ "VAL": "M", "DESC": "Male" }, { "VAL": "F", "DESC": "Female" }];
MyApp_GVM.List_InsuredGender = ko.mapping.fromJS(List_InsuredGender);

var List_TravelPLans_Type = [{ "PlANSTYPE_VAL": "W300", "PlANSTYPE_DESC": "World Wide 300 000$" }, { "PlANSTYPE_VAL": "W65", "PlANSTYPE_DESC": "World Wide 65 000$" }, { "PlANSTYPE_VAL": "SCH", "PlANSTYPE_DESC": "Schengen" }, { "PlANSTYPE_VAL": "SP16", "PlANSTYPE_DESC": "World Wide 65 000$ Sport 1" }, { "PlANSTYPE_VAL": "SP26", "PlANSTYPE_DESC": "World Wide 65 000$ Sport 2" }, { "PlANSTYPE_VAL": "SP13", "PlANSTYPE_DESC": "World Wide 300 000$ Sport 1" }, { "PlANSTYPE_VAL": "SP23", "PlANSTYPE_DESC": "World Wide 300 000$ Sport 2" }];
MyApp_GVM.List_TravelPLans_Type = ko.mapping.fromJS(List_TravelPLans_Type);

var List_InsuredGender_Fam = [{ "VAL_Fam": "M", "DESC_Fam": "Male" }, { "VAL_Fam": "F", "DESC_Fam": "Female" }];
MyApp_GVM.List_InsuredGender_Fam = ko.mapping.fromJS(List_InsuredGender_Fam);

MyApp_GVM.List_CountyOfResidance = ko.mapping.fromJS([]);
MyApp_GVM.List_Nationality = ko.mapping.fromJS([]);
MyApp_GVM.List_TravelPLans = ko.mapping.fromJS([]);
var TravelPlans_Filtered = [];
var TravelPlans_Filtered_Mem = [];
MyApp_GVM.List_TravelPLans_Mem = ko.mapping.fromJS([]);
MyApp_GVM.List_SubUser = ko.mapping.fromJS([]); //JSON.parse(sessionStorage.getItem('SubUserInfo'));
var age = 0;
var age_Fam = 0;
var ll_Exit = 0;
var TravelMembers = 0;
var TravelDiscount = 0.23;


// ---------------------------------------------------------------------
_TravelPolicy.Travel_INSURED.TITLE.subscribe(function (newval) {
    //alert('4');
    if (newval != null && newval != "") {
        if (newval.toString() == "Mr") {
            _TravelPolicy.Travel_INSURED.GENDER("M");
        }
        else if (newval.toString() == "Ms") {
            _TravelPolicy.Travel_INSURED.GENDER("F");
        }
        else {
            _TravelPolicy.Travel_INSURED.GENDER("M");
        }
    }
});
/* --------------------------------------------------------------- */

$(function () {
    ////////debugger;
    //alert('1');

});


$(document).on("pagebeforecreate", "#pg_TravelPayment", function (event, ui) {

    Validator_Login = $("#Frm_TravelPayment").validate(
            {
                ignore: [],
                rules: {
                    Txt_Tr_InsuredName: { required: true, minlength: 3, maxlength: 50 },
                    DDL_Tr_InsuredTitle: "required",
                    Txt_Tr_Address: { required: true, minlength: 3, maxlength: 200 },
                    DDL_Trp_CountyOfResidance: "required",
                    Txt_Tr_Telephone: { required: true, minlength: 8, maxlength: 25 },
                    Txt_Tr_Email: { required: true, email: true, maxlength: 50 },
                    Txt_Trp_Birthdate: "required",
                    DDL_Tr_Nationality: "required",
                    Txt_Tr_Passport: { required: true, maxlength: 20 }
                }
            });

    $(this).on("click", "#btn_Edit_Data", function (event) {
        ////////debugger;
        //$.mobile.changePage('Travel.html', { dataUrl: "Travel.html?paremeter=123", data: { 'paremeter': '123' }, reloadPage: true, changeHash: true });
        //location.href = "Travel.html"
        jq_NavigateToPage('pg_Travel');
        event.preventDefault();
        event.stopPropagation();
    });


    $(this).on("click", "#btn_BuyPolicy_Travel", function (event) {
        //////debugger;
        try {
            //alert('test');
            ll_Exit = 0;
            var Mem_Error = 0;
            ////////debugger;
            /* ------------------------------------- */
            if ($("#Frm_TravelPayment").valid()) {

                if (parseFloat(_TravelPolicy.SylverPrem()) <= 0 || parseFloat(_TravelPolicy.GoldPrem()) <= 0) {
                    showToast('Premium Could Not Be Zero! Go Back And Check You Info.', 'fail');
                    ll_Exit = 1;
                    return;
                }


                //ko.utils.arrayForEach(_TravelPolicy.My_Members(), function (item) {
                //    //alert('First2');
                //    if (item._Errors().length > 0) {
                //        item._Errors.showAllMessages();
                //        ll_Exit = 1;
                //        Mem_Error = 1;
                //        return;
                //    }
                //});

                //if (Mem_Error == 1) {
                //    showToast('All Family Members Fields are Required!', 'fail');
                //    ll_Exit = 1;
                //    return;
                //}

                //var Insured = $("input.InsuredNumberPayment")

                for (i = 1; i <= 6; i++) {
                    if ($("#Txt_Tr_Name_Fam" + i).is(':visible')) {
                        if ($.trim($("#Txt_Tr_Name_Fam" + i).val()) == "" || $.trim($("#Txt_Tr_Birthdate_Fam" + i).val()) == "" || $.trim($("#Txt_Tr_Passport_Fam" + i).val()) == "") {
                            jq_DisplayMessage("MSG_GeneralError", "", "Please Fill All Insured Data.!");
                            $("#Txt_Tr_Name_Fam" + i).focus();
                            ll_Exit = 1
                            return false;
                        }

                    }
                }

                if (ll_Exit != 1) {
                    //jq_HideMobileLoader();
                    jq_HideMobileLoaderAdv("pg_TravelPayment");
                    jq_ShowMobileLoaderAdv("pg_TravelPayment");
                    Edit_Travel();
                }
            }
            else {
                // Focus invalid input
                // -------------------
                Validator_Login.focusInvalid();
                // -------------------
            }
            /* ------------------------------------- */
            event.preventDefault();
            event.stopPropagation();
        }
        catch (e) {
            alert("Btn_Save_Click : " + e.message);
        }
    });

});

$(document).on("pagebeforeshow", "#pg_TravelPayment", function (event, ui) {
    //////debugger;
    /* -------------------------------------------------- */
    // if (!js_FncCommon()) { return; };
    /* -------------------------------------------------- */
    //alert('page bind');
    /* SEO */
    Validator_Login.resetForm();
    /* -------------------------------------------------- */
    $("meta[name=description]").attr("content", "Get Travel Quotation");
    $("title").html("Get Travel Quotation");
    /* -------------------------------------------------- */

    //_TravelPolicy.My_Members.removeAll();
    /* ---------------- */

    //if (_TravelPolicy.My_Members.length > 0) {
    //    _TravelPolicy.My_Members.removeAll();
    //}



    if (sessionStorage.getItem("_Selected_Travel_Plan") != null) {
        TravelOffer = ko.mapping.fromJSON(sessionStorage.getItem("_Selected_Travel_Plan"));
    }
    else {
        //alert('edjkejdkejdke jdke d');
        jq_NavigateToPage('pg_home');
    }


    //FillYearOfBirth();
    /* ---------------- */
    var func = function () {
        ////////debugger;
        jq_ShowMobileLoaderAdv("pg_TravelPayment");
        Get_Travel_Startup_Data();
    };

    setTimeout(func, 300);
    /* ---------------- */
});

/* --------------------------------------------------------------- */
function Get_Travel_Startup_Data(i_OWNER_ID) {
    try {
        ////////debugger;
        //alert('test');
        _Params = ko.mapping.toJSON(TravelOffer);
        _Service_Method = "Get_Travel_Startup_Data";
        CallService("Service_Call_Completed_Travel");
    }
    catch (e) {
        alert("Get_Travel_Startup_Data: " + e.Message);
    }
}
/* --------------------------------------------------------------- */

/* --------------------------------------------------------------- */
function Service_Call_Completed_Travel(i_Response) {
    ////////debugger;
    try {
        switch (_Service_Method) {
            case "Get_Travel_Startup_Data":
                Get_Travel_Startup_Data_Completed(i_Response);
                break;
            case "Edit_Travel":
                Edit_Travel_Completed(i_Response);
                break;
        }
    }
    catch (e) {
        alert("Service_Call_Completed:" + e.message);
    }
}

// Get_Travel_Startup_Data_Completed
/* --------------------------------------------------------------- */
function Get_Travel_Startup_Data_Completed(i_Input) {
    try {
        //alert('t3est');
        //alert(i_Input.My_Result.My_Sheet);
        //////debugger;
        if (i_Input.My_Result == null) {
            showToast('System Error! Please Contact The Company ', 'fail');
            return;
        }
        jq_HideMobileLoaderAdv("pg_TravelPayment");
        //alert('test');
        ko.mapping.fromJS(i_Input.My_Result.My_Nationalities, MyApp_GVM.List_Nationality);
        ko.mapping.fromJS(i_Input.My_Result.My_Countries, MyApp_GVM.List_CountyOfResidance);
        //ko.mapping.fromJS(i_Response.My_Result.My_TravelOffer, _TravelPolicy);
        _TravelPolicy.SylverPrem(i_Input.My_Result.My_TravelOffer.SylverPrem);
        _TravelPolicy.SylverPrem_Old(i_Input.My_Result.My_TravelOffer.SylverPrem_Old);

        _TravelPolicy.GoldPrem(i_Input.My_Result.My_TravelOffer.GoldPrem);
        _TravelPolicy.GoldPrem_Old(i_Input.My_Result.My_TravelOffer.GoldPrem_Old);

        //var AddSylverPrem = (parseInt(i_Input.My_Result.My_TravelOffer.SylverSportPrem) - parseInt(i_Input.My_Result.My_TravelOffer.SylverPrem));
        _TravelPolicy.AddSylverPrem(parseInt(i_Input.My_Result.My_TravelOffer.SylverSportPrem) - parseInt(i_Input.My_Result.My_TravelOffer.SylverPrem));
        _TravelPolicy.AddSylverPrem_Old(parseInt(i_Input.My_Result.My_TravelOffer.SylverSportPrem_Old) - parseInt(i_Input.My_Result.My_TravelOffer.SylverPrem_Old));

        var AddGoldPrem = (parseInt(i_Input.My_Result.My_TravelOffer.GoldSportPrem) - parseInt(i_Input.My_Result.My_TravelOffer.GoldPrem));
        _TravelPolicy.AddGoldPrem(parseInt(i_Input.My_Result.My_TravelOffer.GoldSportPrem) - parseInt(i_Input.My_Result.My_TravelOffer.GoldPrem));
        _TravelPolicy.AddGoldPrem_Old(parseInt(i_Input.My_Result.My_TravelOffer.GoldSportPrem_Old) - parseInt(i_Input.My_Result.My_TravelOffer.GoldPrem_Old));

        _TravelPolicy.SylverPlanshID(i_Input.My_Result.My_TravelOffer.SylverPlanshID);
        _TravelPolicy.GoldPlanshID(i_Input.My_Result.My_TravelOffer.GoldPlanshID);
        _TravelPolicy.SylverSportPlanshID(i_Input.My_Result.My_TravelOffer.SylverSportPlanshID);
        _TravelPolicy.GoldSportPlanshID(i_Input.My_Result.My_TravelOffer.GoldSportPlanshID);


        _TravelPolicy.SylverPremDetails("Silver Package(Schengen), Covers up to 35,000 €<br />Premium:  " + i_Input.My_Result.My_TravelOffer.SylverPrem.toString() + "$");
        _TravelPolicy.GoldPremDetails("Gold Package(Worldwide), Covers up to 65,000 $<br />Premium: " + i_Input.My_Result.My_TravelOffer.GoldPrem.toString() + "$");
        _TravelPolicy.SylverSportPremDetails("Silver Package(Schengen) with DEDUCTIBLE, Covers up to 35,000 €<br />Premium:  " + i_Input.My_Result.My_TravelOffer.SylverSportPrem.toString() + "$");
        _TravelPolicy.GoldSportPremDetails("Gold Package(Worldwide) with DEDUCTIBLE, Covers up to 65,000 $<br />Premium: " + i_Input.My_Result.My_TravelOffer.GoldSportPrem.toString() + "$");

        //ko.cleanNode(document.getElementById('li_Insured_MembersDetails'));
        Mode_Handler();

        //var element = $('#li_Insured_MembersDetails')[0];
        //ko.cleanNode(element);

        //ko.applyBindings((_TravelPolicy), document.getElementById('ct_TravelPayment'));
    }
    catch (e) {
        alert("Get_Travel_Startup_Data_Completed: " + e.message);
    }
}
/* --------------------------------------------------------------- */

function Mode_Handler() {
    try {

        //////debugger;
        //if (_TravelPolicy.My_Members.length > 0)
        //{
        //    _TravelPolicy.My_Members.removeAll();
        //}
        _TravelPolicy.My_Members=[];
        /* ---------------- */
        if (sessionStorage.getItem("_Selected_Travel_Plan").toString() != "null") {
            TravelOffer = ko.mapping.fromJSON(sessionStorage.getItem("_Selected_Travel_Plan"));

            _TravelPolicy.Travel_INSURED.COUNTRIES_ID(TravelOffer.Travel_INSURED.COUNTRIES_ID());
            _TravelPolicy.STARTDATE(TravelOffer.STARTDATE());
            _TravelPolicy.EXPIRYDATE(TravelOffer.EXPIRYDATE());
            _TravelPolicy.Travel_INSURED.BIRTHDATE(TravelOffer.Travel_INSURED.BIRTHDATE());
            //_TravelPolicy.Travel_INSURED.TITLE("Mr");
            //$("#DDL_Tr_InsuredTitle").selectmenu('refresh');

            //Add Others Family Memmbers To Proposal
            ko.utils.arrayForEach(TravelOffer.My_Members(), function (item) {
                //////debugger;
                //alert(moment(item.MEMBER_BIRTHDATE()).format('DD/MM/YYYY'));
                _TravelPolicy.My_Members.unshift(new Member_familyTopay(-1, '', moment(item.MEMBER_BIRTHDATE()).format('DD/MM/YYYY'), 0, '', '', 0, 0, 0, 0, 0, 0, 0));
            });
            _TravelPolicy.My_Members.reverse();
            _TravelPolicy.InsNo(TravelOffer.My_Members().length);
            ////////debugger;
            for (i = 1; i <= TravelOffer.My_Members().length; i++) {
                //////debugger;
                //$("#Txt_Tr_Birthdate_Fam" + i).val(moment(_TravelPolicy.My_Members()[i - 1].MEMBER_BIRTHDATE()).format("DD/MM/YYYY")).trigger("change");

                switch(i) {
                    case 1:
                        _TravelPolicy.MEMBER_BIRTHDATE1(moment(TravelOffer.My_Members()[0].MEMBER_BIRTHDATE()).format('DD/MM/YYYY'));
                        break;
                    case 2:
                        _TravelPolicy.MEMBER_BIRTHDATE2(moment(TravelOffer.My_Members()[1].MEMBER_BIRTHDATE()).format('DD/MM/YYYY'));
                        break;
                    case 3:
                        _TravelPolicy.MEMBER_BIRTHDATE3(moment(TravelOffer.My_Members()[2].MEMBER_BIRTHDATE()).format('DD/MM/YYYY'));
                        break;
                    case 4:
                        _TravelPolicy.MEMBER_BIRTHDATE4(moment(TravelOffer.My_Members()[3].MEMBER_BIRTHDATE()).format('DD/MM/YYYY'));
                        break;
                    case 5:
                        _TravelPolicy.MEMBER_BIRTHDATE5(moment(TravelOffer.My_Members()[4].MEMBER_BIRTHDATE()).format('DD/MM/YYYY'));
                        break;
                    case 6:
                        _TravelPolicy.MEMBER_BIRTHDATE6(moment(TravelOffer.My_Members()[5].MEMBER_BIRTHDATE()).format('DD/MM/YYYY'));
                        break;
                }


                $("#li_Insured_MembersDetails_" + i).show("fast");
            }

            //sessionStorage.setItem("_Selected_Travel_Plan", null);
        }
    }
    catch (e) {
        alert("Mode_Handler: " + e.message);
    }
}

/* --------------i_FISCAL_YEAR_ID is the USER_ID------------------------------------------------- */
function Edit_Travel() {
    try {
        ll_Exit = 0;
        ////////debugger;
        /* Call the Service. */
        //alert(_TravelPolicy.STARTDATE());

        if ($("#rd_SylverPackage").is(":checked")) {
            _TravelPolicy.TOTALPREMIUM(_TravelPolicy.SylverPrem());
            _TravelPolicy.MPLANS_ID(parseInt($("#rd_SylverPackage").val()));
            _TravelPolicy.PLANSTYPE("W65");
        }
        else if ($("#rd_GoldPackage").is(":checked")) {
            _TravelPolicy.TOTALPREMIUM(_TravelPolicy.GoldPrem());
            _TravelPolicy.MPLANS_ID(parseInt($("#rd_GoldPackage").val()));
            _TravelPolicy.PLANSTYPE("W300");
        }
        else if ($("#rd_SilverSportPackage").is(":checked")) {
            _TravelPolicy.TOTALPREMIUM(_TravelPolicy.SylverPrem());
            _TravelPolicy.MPLANS_ID(parseInt(_TravelPolicy.SylverSportPlanshID()));
            _TravelPolicy.PLANSTYPE("SP16");
        }
        else if ($("#rd_GoldSportPackage").is(":checked")) {
            _TravelPolicy.TOTALPREMIUM(_TravelPolicy.GoldPrem());
            _TravelPolicy.MPLANS_ID(parseInt(_TravelPolicy.GoldSportPlanshID()));
            _TravelPolicy.PLANSTYPE("SP23");
        }

        _TravelPolicy.Travel_INSURED.BIRTHDATE(jq_parseDate2(_TravelPolicy.Travel_INSURED.BIRTHDATE()));
        _TravelPolicy.STARTDATE(jq_parseDate2(_TravelPolicy.STARTDATE()));
        _TravelPolicy.EXPIRYDATE(jq_parseDate2(_TravelPolicy.EXPIRYDATE()));
        _TravelPolicy.OPRDATE(jq_parseDate2(_TravelPolicy.OPRDATE()));
        _TravelPolicy.CREATIONDATE(jq_parseDate2(_TravelPolicy.CREATIONDATE()));
        _TravelPolicy.MODIFICATIONDATE(jq_parseDate2(_TravelPolicy.MODIFICATIONDATE()));
        _TravelPolicy.CANCELLATIONDATE(jq_parseDate2(_TravelPolicy.CANCELLATIONDATE()));

        _TravelPolicy.My_Members = []
        //alert('test');col === "screwdriver" ? " selected " : ""
        for (i = 1; i <= parseInt(_TravelPolicy.InsNo() === undefined ? "0" : _TravelPolicy.InsNo().toString()) ; i++) {
            ////////debugger;
            _TravelPolicy.My_Members.unshift(new Member_familyTopay(-1, $("#Txt_Tr_Name_Fam" + i).val(), $("#Txt_Tr_Birthdate_Fam" + i).val(), 0, $("#DDL_Tr_InsuredGender_FM" + i).val(), $("#Txt_Tr_Passport_Fam" + i).val(), 0, 0, 0, 0, 0, 0, 0));
        }


        _Params = ko.mapping.toJSON(_TravelPolicy);
        _Service_Method = "Edit_Travel";
        _Async = true;
        CallService("Service_Call_Completed_Travel");
        /* ---------------- */
    }
    catch (e) {
        alert("Edit_Travel: " + e.message);
    }
}
/* --------------------------------------------------------------- */


/* --------------------------------------------------------------- */
function Edit_Travel_Completed(i_Response) {
    try {
        //alert('return completed');
        ////////debugger;
        //jq_HideMobileLoader();
        jq_HideMobileLoaderAdv("pg_TravelPayment");
        /* ----------------- */



        //alert('ekdjkejdkejdked');
        showToast('Saved. You Will Be Redirect to the Payment Page. PLease wait!', 'success');
        sessionStorage.setItem("_Selected_Travel_Plan", null);

        //var ref = window.open('http://localhost:4160/MobilePayment.aspx?PolicyCode=' + i_Response.My_Result.POLICY_CODE + "&PolicyNo=" + i_Response.My_Result.POLICY_NO.toString() + "&USER_ID=" + i_Response.My_Result.ENTRY_USER_ID.toString(), '_blank', 'location=yes');
        //ref.addEventListener('loadstart', function (event) { alert('start: ' + event.url); });
        //ref.addEventListener('loadstop', function (event) { alert('stop: ' + event.url); });
        //ref.addEventListener('loaderror', function (event) { alert('error: ' + event.message); });
        //ref.addEventListener('exit', function (event) { alert(event.type); });

        ////////debugger;
        if ( parseInt(i_Response.My_Result.POLICIES_ID) > 0) {
            //cordova.InAppBrowser.open http://localhost:4160/MobilePayment.aspx?PolicyCode=
            var ref = cordova.InAppBrowser.open('https://online.victoire.com.lb/MobilePayment.aspx?PolicyCode=' + i_Response.My_Result.POLICY_CODE + "&PolicyNo=" + i_Response.My_Result.POLICY_NO.toString() + "&USER_ID=" + i_Response.My_Result.ENTRY_USER_ID.toString(), '_blank', 'hideurlbar=yes');

            ref.addEventListener('loadstart', function (event) {
                //alert(event.url);
                if (event.url.toLowerCase().indexOf("mobilepagerouter.aspx") != -1) {
                    try {
                        // ---------------

                        _InApp_Closed = true;
                        // ---------------

                        // ---------------
                        ref.close();
                        // ---------------

                        // ---------------
                        var queryString = event.url.replace(/^[^\?]+\??/, '');
                        var params = jq_parseQuery(queryString);
                        // ---------------

                        // ---------------
                        var cp_status = params["status"];
                        var str_cp_status = cp_status.toString().toLowerCase();
                        var PolicyRef = params["PolicyRef"];
                        var str_PolicyRef = PolicyRef.toString().toLowerCase();
                        var Amount = params["Amount"];
                        //alert(event.url + " " + cp_status + 'ejkejkjdekjdkejkdjekdjekdj');

                        cp_status_Glob = str_cp_status;
                        status_Glob = cp_status.split("~")[0];
                        error_Glob = cp_status.split("~")[1];
                        PolicyRef_Glob = PolicyRef;
                        Amount_Glob = Amount;

                        //$.mobile.changePage('PaymentResult.html', { reverse: true });

                        jq_NavigateToPage('pg_PaymentResult');


                        //$.mobile.changePage('PaymentResult.html?cp_status=' + str_cp_status + "&PolicyRef=" + str_PolicyRef + "&Amount=" + Amount, { reverse: true });
                        // alert(str_cp_status + " " + str_PolicyRef + " " + "Final Direction")
                        // ---------------

                        // ---------------
                        //jq_NavigateToPage("pg_payreturn");
                        // ---------------
                    }
                    catch (e) {
                        jq_DisplayMessage("MSG_GeneralError", "", e.message);
                    }

                }

            });

            ref.addEventListener('loadstop', function (event) {
                //alert(event.url + " " + "Load Stop Event");
                if (event.url.toLowerCase().indexOf("mobilepagerouter.aspx") != -1) {
                    try {
                        // ---------------
                        //alert(event.url + " " + "Load Stop Event");
                        _InApp_Closed = true;
                        // ---------------

                        // ---------------
                        ref.close();
                        // ---------------

                        // ---------------
                        var queryString = event.url.replace(/^[^\?]+\??/, '');
                        var params = jq_parseQuery(queryString);
                        // ---------------

                        // ---------------
                        var cp_status = params["status"];
                        var str_cp_status = cp_status.toString().toLowerCase();
                        var PolicyRef = params["PolicyRef"];
                        var str_PolicyRef = PolicyRef.toString().toLowerCase();
                        var Amount = params["Amount"];
                        //alert(event.url + " " + cp_status + 'mmmmmmmmmmmmmmmmmmmmmm');
                        //alert(str_cp_status + " " + str_PolicyRef + " " + "Final Direction")
                        // ---------------
                        cp_status_Glob = str_cp_status;
                        status_Glob = cp_status.split("~")[0];
                        error_Glob = cp_status.split("~")[1];
                        PolicyRef_Glob = PolicyRef;
                        Amount_Glob = Amount;

                        // $.mobile.changePage('PaymentResult.html', { reverse: true });

                        jq_NavigateToPage('pg_PaymentResult');
                        // ---------------
                        //jq_NavigateToPage("pg_payreturn");
                        // ---------------
                    }
                    catch (e) {
                        jq_DisplayMessage("MSG_GeneralError", "", e.message);
                    }

                }
            });

        }
        else {
            // Focus invalid input
            // -------------------
            //jq_DisplayMessage("MSG_GeneralError", "", "Get An Offer Then Pay Your Policy!");
            return;
            // -------------------
        }
    }
    catch (e) {
        alert("Edit_Travel_Completed: " + e.message);
    }
}
/* --------------------------------------------------------------- */

