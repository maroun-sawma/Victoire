// Global Application View Model //
/***********************************/
var MyApp_GVM = {
    PolicyGarageDesc:ko.observable(""),
    GarageMOBILE:ko.observable(""),
    GARAGE_DESC: ko.observable(""),
    UserID:ko.observable(75),
    OwnerID:ko.observable(1),
    BROKERCODE:ko.observable("3"),
    AGENTS_NAME:ko.observable(""),
    EMAIL: ko.observable(""),
    PolicyDesc: ko.observable(""),
    AccountNumber: ko.observable("")
};
/***********************************/

$(document).ready
(
function () {
    //alert('start up');

    document.addEventListener("deviceready", onDeviceReady, false);
    $(document).on("pagecontainertransition", contentHeight);
    //$(window).on("throttledresize orientationchange", contentHeight);
    var homePage = "pg_home";

    //Handle back buttons decently for Android and Windows Phone 8 ...
    function onDeviceReady() {
        document.addEventListener("backbutton", function (e) {
            if ($.mobile.activePage.is('#' + homePage)) {
                //alert('back 1');
                e.preventDefault();
                navigator.app.exitApp();
            } else {
                //alert('back 2');
                //history.back();
                //window.history.back();
                $.mobile.back();
            }
        }, false);
    }


    ////////debugger;
    ko.applyBindings(MyApp_GVM);

    //////debugger;
    //alert('ekjdkejd kej dk');
    $(document).on("click", ".HeaderLogo", function (e) {
        //alert('1');
        jq_NavigateToPage("pg_home");
        e.preventDefault();
    });

    $(document).on("click", ".LogoLHonly", function (e) {
       // alert('1');
        jq_NavigateToPage("pg_home");
        e.preventDefault();
    });

    $(document).on("click", ".nav_help", function (e) {
        jq_NavigateToPage("pg_UsefulNumber");
        e.preventDefault();
    });

    $(document).on("click", ".nav_pay", function (e) {
        jq_NavigateToPage("pg_PaymentOptions");
        e.preventDefault();
    });

    //link of home page icons

    $(this).on("click", "#HomeProducts", function (e) {
        jq_NavigateToPage("pg_Products");
        e.preventDefault();

    });

    //$(document).on("click", ".HomeClaims", function (e) {
    $(this).on("click", "#HomeClaims", function (e) {
        jq_NavigateToPage("pg_Claim");
        e.preventDefault();
    });

    //$(document).on("click", ".HomeBrokers", function (e) {
    $(this).on("click", "#HomeBrokers", function (e) {
       // alert('edlekdle d');
        jq_NavigateToPage("pg_BrokerLogin");
        e.preventDefault();
    });

    //$(document).on("click", ".HomeUsefulNo", function (e) {
    $(this).on("click", "#HomeUsefulNo", function (e) {
        jq_NavigateToPage("pg_Useful");
        e.preventDefault();
    });

    //$(document).on("click", ".HomeBranches", function (e) {
    $(this).on("click", "#HomeBranches", function (e) {
        jq_NavigateToPage("pg_BranchesList");
        e.preventDefault();
    });

    //$(document).on("click", ".HomeAboutUS", function (e) {
    $(this).on("click", "#HomeAboutUS", function (e) {
        jq_NavigateToPage("pg_About");
        e.preventDefault();
    });


    //Smal Menu on pages
    $(document).on("click", ".nav_Productsm", function (e) {
        jq_NavigateToPage("pg_Products");
        e.preventDefault();
    });

    $(document).on("click", ".nav_Claimm", function (e) {
        jq_NavigateToPage("pg_Claim");
        e.preventDefault();
    });

    $(document).on("click", ".nav_Brokerm", function (e) {
        jq_NavigateToPage("pg_BrokerLogin");
        e.preventDefault();
    });

    $(document).on("click", ".nav_Usefulm", function (e) {
        jq_NavigateToPage("pg_Useful");
        e.preventDefault();
    });

    $(document).on("click", ".nav_MapLocm", function (e) {
        jq_NavigateToPage("pg_BranchesList");
        e.preventDefault();
    });

    //Broker AREA Menu Navigation
    $(document).on("click", ".nav_DueDatePolicies", function (e) {
        jq_NavigateToPage("pg_DueDatePolicies");
        e.preventDefault();
    });

    $(document).on("click", ".nav_Production", function (e) {
        jq_NavigateToPage("pg_Production");
        e.preventDefault();
    });

    $(document).on("click", ".nav_StatementOfAccount", function (e) {
        jq_NavigateToPage("pg_StatementOfAccount");
        e.preventDefault();
    });

    $(document).on("click", ".nav_Tarif", function (e) {
        jq_NavigateToPage("pg_Tarif");
        e.preventDefault();
    });

    $(document).on("click", ".nav_ExpertsBroker", function (e) {
        jq_NavigateToPage("pg_ExpertList");
        e.preventDefault();
    });

    $(document).on("click", ".nav_CalculatorBroker", function (e) {
        jq_NavigateToPage("pg_Products");
        e.preventDefault();
    });

    $(document).on("click", ".nav_Garage", function (e) {
        jq_NavigateToPage("pg_DeclaireGarageClaim");
        e.preventDefault();
    });

    $(document).on("click", ".nav_ScoreCard", function (e) {
        jq_NavigateToPage("pg_ScoreCards");
        e.preventDefault();
    });

    //Products navigation
    $(this).on("click", "#btn_MB_LifeExpansionQuotationForm", function (e) {
        //alert('test');
        jq_NavigateToPage("pg_LifeExpansionQuotationForm");
        e.preventDefault();
    });

    $(this).on("click", "#btn_MB_LifeProtegeQuotationForm", function (e) {
        //alert('test');
        jq_NavigateToPage("pg_LifeProtegeQuotationForm");
        e.preventDefault();
    });

    $(this).on("click", "#btn_MB_LifeEquilibriumQuotationForm", function (e) {
        //alert('test');
        jq_NavigateToPage("pg_LifeEquilibriumQuotationForm");
        e.preventDefault();
    });

    $(this).on("click", "#btn_MB_MedicalForm", function (e) {
        //alert('test');
        jq_NavigateToPage("pg_Medical");
        e.preventDefault();
    });

    $(this).on("click", "#btn_MB_XpatForm", function (e) {
        //alert('test');
        jq_NavigateToPage("pg_XPAT");
        e.preventDefault();
    });

    $(this).on("click", "#btn_MB_TravelSaferForm", function (e) {
        //alert('test');
        jq_NavigateToPage("pg_Travel");
        e.preventDefault();
    });

    $(this).on("click", "#btn_MB_TravelSaferSportForm", function (e) {
        //alert('test');
        jq_NavigateToPage("pg_Travel");
        e.preventDefault();
    });

    $(this).on("click", "#btn_MB_VehiculesThirdPartyForm", function (e) {
        //alert('test');
        jq_NavigateToPage("pg_VehiculesThirdParty");
        e.preventDefault();
    });

    $(this).on("click", "#btn_MB_AllRiskForm", function (e) {
        //alert('test');
        jq_NavigateToPage("pg_AllRisk");
        e.preventDefault();
    });

    $(this).on("click", "#btn_MB_PAForm", function (e) {
        //alert('test');
        jq_NavigateToPage("pg_GetPAQuotation");
        e.preventDefault();
    });

    $(this).on("click", "#btn_MB_MarineForm", function (e) {
        //alert('test');
        jq_NavigateToPage("pg_GetMarineQuotation");
        e.preventDefault();
    });

    $(this).on("click", "#btn_MB_FireForm", function (e) {
        //alert('test');
        jq_NavigateToPage("pg_GetFireQuotation");
        e.preventDefault();
    });

    if (localStorage.getItem('UserInfo') != null && localStorage.getItem('UserInfo') != "null") {
        //alert('session is on');
        var _MainInfo = JSON.parse(localStorage.getItem('UserInfo'));
        MyApp_GVM.UserID(_MainInfo.UserID);
        MyApp_GVM.OwnerID(_MainInfo.OwnerID);
        MyApp_GVM.BROKERCODE(_MainInfo.BROKERCODE);
        MyApp_GVM.AGENTS_NAME(_MainInfo.AGENTS_NAME);
        MyApp_GVM.EMAIL(_MainInfo.EMAIL);
        MyApp_GVM.AccountNumber(_MainInfo.AccountNumber)
    }
    else if (localStorage.getItem('GarageInfo') != null && localStorage.getItem('GarageInfo') != "null") {

        //alert('session is off');
        var _MainGarageInfo = JSON.parse(localStorage.getItem('GarageInfo'));
        MyApp_GVM.GarageMOBILE(_MainGarageInfo.MOBILE);
        MyApp_GVM.GARAGE_DESC(_MainGarageInfo.AGENTS_NAME);
    }    
});


//// http://jsfiddle.net/Palestinian/FyTYs/
function contentHeight() {
    //debugger;
    //alert('calculation');
    var activePage = $.mobile.pageContainer.pagecontainer("getActivePage"),
        screen = $.mobile.getScreenHeight(),
        header = $(".ui-header", activePage).hasClass("ui-header-fixed") ? $(".ui-header", activePage).outerHeight() - 1 : $(".ui-header", activePage).outerHeight(),
        footer = $(".ui-footer", activePage).hasClass("ui-footer-fixed") ? $(".ui-footer", activePage).outerHeight() - 1 : $(".ui-footer", activePage).outerHeight(),
        /* content div has padding of 1em = 16px (32px top+bottom). This step
   can be skipped by subtracting 32px from content var directly. */
        contentCurrent = $(".ui-content", activePage).outerHeight() - $(".ui-content", activePage).height(),
        content = screen - header - footer - contentCurrent;
    /* apply result */
    if (activePage[0].id == "pg_BrokerLogin"){ //|| activePage[0].id == "pg_BrokerArea") {
        //alert('here');
        //debugger;
        $(".ui-content", activePage).height(content);
        //$('#ct_BrokerArea').css('margin-top', (screen - header - footer - $('#ct_BrokerArea').outerHeight()) / 5);
    }
}


