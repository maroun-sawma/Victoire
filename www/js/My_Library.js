var _Lat = 0; // Latitude
var _Lng = 0; // Longitude

/* --------------------------------------------------------------- */
var _Startup_Data_Signature = "";
/* --------------------------------------------------------------- */

/* --------------------------------------------------------------- */
var _Params_Get_Startup_Data_Signature = new Object();
_Params_Get_Startup_Data_Signature.OWNER_ID = 1;

var _Params_Get_Startup_Data = new Object();
_Params_Get_Startup_Data.OWNER_ID = 1;
_Params_Get_Startup_Data.FISCAL_YEAR_ID = 1;
/* --------------------------------------------------------------- */

//var pp;
// ---------------------------------------------------------------
$(document).ready(function () {
    // ------------------------
    /* -------------------------------------------------- */
        $("div[data-role='popup']").enhanceWithin().popup();

    $.validator.setDefaults({
        highlight: function (input) {
            $(input).addClass("error");
        },
        unhighlight: function (input) {
            $(input).removeClass("error");
        }


    });
    // ------------------------
    $('body').prepend('<div id="block-ui"></div>');

    $('input').keypress(function (e) {
        var code = (e.keyCode ? e.keyCode : e.which);
        if ((code == 13) || (code == 10)) {
            //alert('my library');
            $(this).blur();
            return false;
        }
    });

    // ------------------------
    //$('<link href="' + _App_Base_Url + 'css/CustomThemes_LH.css" rel="stylesheet" type="text/css" />').insertAfter($('title'));
    // ------------------------
    //$('head').append('<script type="text/javascript" src="http://maps.googleapis.com/maps/api/js?key=AIzaSyADpMW2vPHpiCMd2HSUvSDfWdnZqv_OQVo&sensor=true"></script>');    
    // ------------------------       
});

function js_LocationMap(i_mapMode) {
    sessionStorage["mapMode"] = i_mapMode;
    try {
        ////////debugger;
        //alert('js_LocationMap');
        switch (i_mapMode) {
            case "I": // INDIVIDUAL

                runGPSMethodHandler = function () {
                    ////////debugger;
                    if (_Lat != '' && _Lat != 0 && _Lat != null && _Lng != '' && _Lng != 0 && _Lng != null) {
                        sessionStorage["LAT"] = _Lat;
                        sessionStorage["LNG"] = _Lng;
                        // --------------------------------------------------------------- /
                        //alert('here to be')
                        //jq_NavigateToPage("LocationMap.htm", "{ transition: 'flow', reload: true, role: 'dialog'}");
                        $(":mobile-pagecontainer").pagecontainer("change", "#pg_LocationMap");
                        //$.mobile.pageContainer.pagecontainer("change", "LocationMap.htm");
                        //$.mobile.pageContainer.pagecontainer("change", "LocationMap.htm", { transition: 'flow', reload: true, role: 'dialog' });
                    }
                    else {
                        //alert('no GPS')
                        if (_is_GPS_Enabled != 2) {
                            js_MyCustomMessage('Your GPS is turned off. Please turn it on to see the map.');
                        }
                    }
                }
                /* Call GPS Geolocation */
                js_GetGPSGeolocation();
                /* ---------------- */
                break;
            default:
                js_MyCustomMessage('Your GPS is turned off. Please turn it on to see the map.');
                break;
        }
    }
    catch (e) {
        alert("js_LocationMap: " + e.message);
    }
    //return false;
}

/* --------------------------------------------------------------- */
var runGPSMethodHandler = function () { };
var _is_GPS_Enabled = 0;

function js_GetGPSGeolocation() {
    ////////debugger;
    try {
        _is_GPS_Enabled = 0;
        /* GPS geolocation */
        //alert(navigator.geolocation);
        var options = { timeout: 10000, enableHighAccuracy: true, maximumAge: 90000 };
        if (navigator.geolocation) {
            //alert('inside');
            navigator.geolocation.getCurrentPosition(function (pos) {
                //alert('3kjek3jed' + pos.coords.latitude);
                //

                ////////debugger;

                _Lat = pos.coords.latitude; //'33.873344';
                _Lng = pos.coords.longitude;//'35.518117';

                _is_GPS_Enabled = 1;

                /* Method that will be executed in each page trying to access GPS */
                /* ---------------- */
                runGPSMethodHandler();
                /* ---------------- */
            },
            function (error) {
                //alert('Please enable the GPS Service on your device to locate Victoire Branches.');
                showToast('Please enable the GPS Service on your device to locate Victoire Branches.!', 'fail');
                _is_GPS_Enabled = 2;

                /* Method that will be executed in each page trying to access GPS */
                /* ---------------- */
                runGPSMethodHandler();
                /* ---------------- */
                /*error.code*/
           }, options);
        }
        else {
            alert('Geolocation not supported on this browser!');
            _is_GPS_Enabled = 0;

            /* Method that will be executed in each page trying to access GPS */
            /* ---------------- */
            runGPSMethodHandler();
            /* ---------------- */
        }
        /*------------------------------------------------------------*/
    }
    catch (e) {
        alert("js_GetGPSGeolocation: " + e.message);
    }
}

/* --------------------------------------------------------------- */
var runMethodHandler = function () { };
function Get_Latest_Sys_Params() {
    try {
        /* ---------------- */
        Get_Startup_Data_Signature(1);
        /* ---------------- */
    }
    catch (e) {
        alert("Get_Latest_Sys_Params: " + e.message);
    }
}
/* --------------------------------------------------------------- */

/* --------------------------------------------------------------- */
function Get_Startup_Data_Signature(i_OWNER_ID) {
    try {
        _Params_Get_Startup_Data_Signature.OWNER_ID = i_OWNER_ID;
        _Params = JSON.stringify(_Params_Get_Startup_Data_Signature);

        _Service_Method = "Get_Startup_Data_Signature";

        CallService('Service_Call_Completed_DocReady');
    }
    catch (e) {
        alert("Get_Startup_Data_Signature: " + e.Message);
    }
}
/* --------------------------------------------------------------- */

/* --------------------------------------------------------------- */
function Get_Startup_Data_Signature_Completed(i_Input) {
    try {
        _Startup_Data_Signature = i_Input.My_Result;

        if (localStorage.getItem("_Startup_Data_Signature") == undefined ||
            localStorage.getItem("_Startup_Data_Signature") != _Startup_Data_Signature) {
            localStorage.setItem("_Startup_Data_Signature", _Startup_Data_Signature)

            Get_Startup_Data(_UserInfo.OwnerID, _UserInfo.UserID);
        }
        else {
            /* Method that will be executed in each page */
            /* ---------------- */
            runMethodHandler();
            /* ---------------- */
        }
    }
    catch (e) {
        alert("Get_Startup_Data_Signature_Completed: " + e.Message);
    }
}
/* --------------------------------------------------------------- */

/* --------------------------------------------------------------- */
function Get_Startup_Data(i_OWNER_ID) {
    try {
        var i_TSURL = _App_Base_Url.replace('http://', '');
        i_TSURL = i_TSURL.substring(0, i_TSURL.lastIndexOf('/'));
        _Params_Get_Startup_Data.OWNER_ID = i_OWNER_ID;
        _Params_Get_Startup_Data.HTTP_POST = i_TSURL; //"localhost/SBM";

        _Params = JSON.stringify(_Params_Get_Startup_Data);

        _Service_Method = "Get_Startup_Data";

        CallService('Service_Call_Completed_DocReady');
    }
    catch (e) {
        alert("Get_Startup_Data: " + e.Message);
    }
}
/* --------------------------------------------------------------- */

/* --------------------------------------------------------------- */
function Get_Startup_Data_Completed(i_Input) {
    try {
        // TravelSites        
        // ---------------        
        localStorage.setItem("TravelSite", JSON.stringify(i_Input.My_Result.My_TravelSite));
        // ---------------

        // Classes        
        // ---------------        
        localStorage.setItem("Classes", JSON.stringify(i_Input.My_Result.My_Classes));
        // ---------------

        // Regions        
        // ---------------        
        localStorage.setItem("Regions", JSON.stringify(i_Input.My_Result.My_Regions));
        // ---------------

        // Member Country Residence        
        // ---------------        
        localStorage.setItem("Countries", JSON.stringify(i_Input.My_Result.My_Countries));
        // ---------------

        // Member Learn        
        // ---------------        
        localStorage.setItem("ContactSources", JSON.stringify(i_Input.My_Result.My_Contact_Sources));
        // ---------------

        // Time List
        // ---------------        
        localStorage.setItem("TimeList", JSON.stringify(i_Input.My_Result.My_Time_List));
        // ---------------

        // Airlines                
        // ---------------        
        localStorage.setItem("Airlines", JSON.stringify(i_Input.My_Result.My_AirLines));
        // ---------------        

        // Startup Data
        // ---------------
        localStorage.setItem("_Startup_Data", JSON.stringify(i_Input.My_Result));
        // ---------------

        /* Method that will be executed in each page */
        /* ---------------- */
        runMethodHandler();
        /* ---------------- */
    }
    catch (e) {
        alert("Get_Startup_Data_Completed: " + e.Message);
    }
}
/* --------------------------------------------------------------- */

/* --------------------------------------------------------------- */
function Service_Call_Completed_DocReady(i_Response) {
    try {
        switch (_Service_Method) {
            case "Get_Startup_Data_Signature":
                Get_Startup_Data_Signature_Completed(i_Response);
                break;
            case "Get_Startup_Data":
                Get_Startup_Data_Completed(i_Response);
                break;
        }
    }
    catch (e) {
        alert("Service_Call_Completed:" + e.message);
    }
}
/* --------------------------------------------------------------- */

// ---------------------------------------------------------------    
var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
// ---------------------------------------------------------------

// ---------------------------------------------------------------
//$(document).ajaxStart(function () {
//    alert('ajax Start');
//    $.mobile.showPageLoadingMsg();
//}).ajaxStop(function () {
//    alert('ajax End');
//    $.mobile.hidePageLoadingMsg();
//});
// ---------------------------------------------------------------       

// ------------------------
function js_To_DB_Date(dt_ui_date) {
    try {
        if (dt_ui_date != null) {
            var monthsOfYearShort = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

            var d = dt_ui_date.split('-')[0];
            var m = dt_ui_date.split('-')[1];
            var y = dt_ui_date.split('-')[2];

            if (d.toString().length == 1)
                d = "0" + d;

            m = parseInt(monthsOfYearShort.indexOf(m) + 1);

            if (m.toString().length == 1)
                m = "0" + m;

            return y + '-' + m + '-' + d
        }
    }
    catch (e) {
        alert("js_To_DB_Date: " + e.message);
    }
}

function ToJSDate(value) {
    var pattern = /Date\(([^)]+)\)/;
    var results = pattern.exec(value);
    var dt = new Date(parseFloat(results[1]));
    return dt.getDate() + "/" + (dt.getMonth() + 1) + "/" + dt.getFullYear();
}

function ToWCFDate(value) {
    var dtArr = value.split("/");
    var dt = new Date(dtArr[2], --dtArr[1], dtArr[0]);
    var date = '\/Date(' + dt.getTime() + '+0530)\/';
    return date;
}


function convertDate(inputFormat) {
    function pad(s) { return (s < 10) ? '0' + s : s; }
    var d = new Date(inputFormat);
    return [pad(d.getDate()), pad(d.getMonth() + 1), d.getFullYear()].join('/');
}


// ------------------------       
function InitControlsProperties() {
    try {
        $('a[data-role="button"]').buttonMarkup({ theme: "i" });
        $('select').selectmenu({ mini: "true", theme: "h", inline: "true" });
        $("input[type='text']").textinput({ mini: "true", theme: "c" });
        $("input[type='range']").textinput({ mini: "true", theme: "c", highlight: "true" });
        $("input[type='checkbox']").checkboxradio({ mini: "true", theme: "c" });
        $("input[type='radio']").checkboxradio({ mini: "true", theme: "c" });

        $("[data-role=footer]").fixedtoolbar({ tapToggle: false });
        //$("[data-role=content]").fixedtoolbar({ tapToggle: false });
        /*pp = $('<div data-role=\"popup\" id=\"noInternet\" class=\"ui-content\" data-theme=\"d\"><a href=\"javascript:closePopup()\" data-role=\"button\" data-theme=\"a\" data-icon=\"delete\" data-iconpos=\"notext\" class=\"ui-btn-right\">Close</a><p>No Internet connection. Please retry when connection is restored!</p></div>');
        pp.appendTo($('body'));
        pp.popup({ positionTo: "window" });
        $('body').trigger('create');*/
    }
    catch (e) {
        alert('InitControlsProperties: ' + e.massage);
    }
}
// ------------------------
/*function closePopup() {
pp.popup("close");
}*/

// ------------------------
function js_MyCustomMessage(i_msg) {
    try {
        alert(i_msg);
        /*var $popUpMessage = $("<div data-role=\"popup\" id=\"popupDialog\" data-overlay-theme=\"d\" style=\"max-width:300px;\" class=\"ui-corner-all\">" +
        "<div data-role=\"header\" data-theme=\"a\" class=\"ui-corner-top\">" +
        "<h1>Alert</h1>" +
        "</div>" +
        "<div data-role=\"content\" data-theme=\"d\" style=\"padding:0 15px 15px; max-width:300px;\" class=\"ui-corner-bottom\">" +
        "<p><strong>Error</strong></p>" +
        "<a href=\"#\" data-role=\"button\" data-rel=\"back\" data-inline=\"true\" data-mini=\"true\" data-theme=\"c\">Ok</a>" +
        "</div>" +
        "</div>");*/

        //$('#ct_BookingSubmission').append($popUpMessage);
        //$popUpMessage.popup();        
        //$popUpMessage.popup('open');        
    }
    catch (e) {
        alert('js_MyCustomMessage: ' + e.message);
    }
}
// ------------------------

// ------------------------
function js_MyPopup(i_FieldName, e) {
    try {
        sessionStorage["popFieldName"] = "";
        sessionStorage["popFieldName"] = i_FieldName;
        $.mobile.changePage(_App_Base_Url + "book/PopDetails.html", {
            transition: 'pop',
            role: 'dialog'
        });
        e.preventDefault();
        e.stopPropagation();
        //return false;
    }
    catch (e) {
        alert('js_MyPopup: ' + e.message);
    }
}
// ------------------------

function js_GoToHomePage() {
    // Clear the sessionStorage responsible of filling the screen when clicking back button
    sessionStorage["Param_Home"] = '';
    $.mobile.changePage(_App_Base_Url); //default.htm
    //return false;
}

function js_CallPhone() {
    if (device.platform.toString() == "iOS") {
        window.open("tel:01389067", "_system");
    }
    else {

        window.location.href = "tel:01389067";
    }

    //window.location = 'tel:01389067';
    //window.location = 'tel:' + $.parseJSON(localStorage["TravelSite"]).TSphone + '';
    //return false;
}

function js_CallPhoneWithNum(PhoneNumber) {
    //alert(PhoneNumber);
    //window.location = 'tel:' + PhoneNumber;
    debugger;
    if (device.platform.toString() == "iOS") {
        window.open("tel:" + PhoneNumber, "_system");
    }
    else {
        window.location.href = "tel:" + PhoneNumber;
    }
}

function js_MyAccount() {
    if (sessionStorage["LoginMemberID"] == undefined || sessionStorage["LoginMemberID"] == ''
    || sessionStorage["LoginMemberID"] == null || sessionStorage["LoginBookID"] == undefined
    || sessionStorage["LoginBookID"] == '' || sessionStorage["LoginBookID"] == null) {
        $.mobile.changePage(_App_Base_Url + "book/MyAccountLogin.html");
    }
    else {
        $.mobile.changePage(_App_Base_Url + "book/MyAccount.html");
    }

    //return false;
}

function js_Reviews() {
    $.mobile.changePage(_App_Base_Url + "book/hotels/Reviews.html");
    //return false;
}

function js_Logout() {
    sessionStorage["LoginMemberID"] = '';
    sessionStorage["LoginBookID"] = '';
    $.mobile.changePage(_App_Base_Url + "book/MyAccountLogin.html");
    //return false;
}

function js_ProfileUpdate() {
    $.mobile.changePage(_App_Base_Url + "book/ProfileUpdate.html");
    //return false;
}

function js_BookingCancellation() {
    $.mobile.changePage(_App_Base_Url + "book/BookingCancellation.html");
    //return false;
}

function js_Rooms() {
    // Clear the sessionStorage responsible of filling the screen when clicking back button
    sessionStorage["_Selected_BookingRequiredData"] = '';
    $.mobile.changePage(_App_Base_Url + "hotel/" + _a + "/");
    //return false;
}

// FOR MOBILE //
/////////////////////////////////////////////////////////////////////
// --------------------------------------------------------------- /
function jq_ShowMobileLoader() {
    try {
        //alert('before');
        $.mobile.loading("show");
    } catch (e) { }
}
// --------------------------------------------------------------- /

// --------------------------------------------------------------- /
function jq_HideMobileLoader() {
    try {
        //alert('after');
        $.mobile.loading("hide");
    }
    catch (e) { }
}
// --------------------------------------------------------------- /
function jq_ShowMobileLoaderAdv(PageID) {
    try {
        //alert('before');
        var ID = "#" + PageID + ""
        //$(ID).LoadingOverlay("show");
        $(ID).append("<div class='ui-loader-background'> </div>");
        $.mobile.showPageLoadingMsg();

    } catch (e) { }
}
// --------------------------------------------------------------- /

// --------------------------------------------------------------- /
function jq_HideMobileLoaderAdv(PageID) {
    try {
        //alert('after');\
        //var ID = "#" + PageID + ""
        //$(ID).LoadingOverlay("hide");
        //$('body').append("<div class='ui-loader-background'> </div>");
        $.mobile.hidePageLoadingMsg();
    }
    catch (e) { }
}
/////////////////////////////////////////////////////////////////////

// --------------------------------------------------------------- /
//function jq_NavigateToPage(i_PageId,i_PageName,i_Options) {
//    try {
//        ////////debugger;
//        var currentPageId = $(":mobile-pagecontainer").pagecontainer("getActivePage")[0].id;
//        if (currentPageId != i_PageId) {
//            jq_ShowMobileLoader();
//        }
//        //$(":mobile-pagecontainer").pagecontainer("change", "#" + i_PageId/, { role: "dialog" }/);
//        var func = function () {
//            if (i_Options != null) {
//                ////////debugger;
//                //$(":mobile-pagecontainer").pagecontainer("change", "#" + i_PageId, i_Options);
//                $(":mobile-pagecontainer").pagecontainer("change", "" + i_PageName, { transition: 'flow', reload: true });

//            }
//            else {
//                //alert('here');
//                $(":mobile-pagecontainer").pagecontainer("change", "" + i_PageName);
//            }
//        }
//        setTimeout(func, 300);
//    }
//    catch (e) {
//        alert("jq_NavigateToPage: " + e.message);
//    }
//}
function jq_NavigateToPage(i_PageId, i_Options) {
    ////////debugger;
    try {
        var currentPageId = $(":mobile-pagecontainer").pagecontainer("getActivePage")[0].id;
        if (currentPageId != i_PageId) {
            jq_ShowMobileLoader();
        }
        //$(":mobile-pagecontainer").pagecontainer("change", "#" + i_PageId/*, { role: "dialog" }*/);
        var func = function () {
            if (i_Options != null) {
                $(":mobile-pagecontainer").pagecontainer("change", "#" + i_PageId, i_Options);
            }
            else {
                $(":mobile-pagecontainer").pagecontainer("change", "#" + i_PageId);
            }
        }
        setTimeout(func, 300);
    }
    catch (e) {
        alert("jq_NavigateToPage: " + e.message);
    }
}
// --------------------------------------------------------------- /
function js_Deals() {
    sessionStorage["Deals"] = 1;
    $.mobile.changePage(_App_Base_Url + "book/hotels/Listing.html");
    //return false;
}

function js_PrintVoucher() {
    window.open(_App_Base_Url + "book/voucher.html", "Voucher", "scrollbars=YES,width=650,height=600");
    return false;
}

/* js_Map_Handle_Selected_Ac */
/* --------------------------------------------------------------- */
function js_Map_Handle_Selected_Ac(i_AcNameURL) {
    // Clear the sessionStorage responsible of filling the screen when clicking back button
    sessionStorage["_Selected_BookingRequiredData"] = '';
    $.mobile.changePage(_App_Base_Url + "hotel/" + $.trim(i_AcNameURL) + "/");
    //return false;
}
/* --------------------------------------------------------------- */

/* js_Handle_Selected_Row_AcListing */
/* --------------------------------------------------------------- */
function js_Handle_Selected_Row_AcListing(i_Input, event) {
    try {
        var js_Selected_Ac = Get_Grid_Selected_Object("AcID", i_Input, _Ac_List);
        sessionStorage.setItem("_Selected_Ac", JSON.stringify(js_Selected_Ac));
        /* ------------------------------------------------- */
        // Clear the sessionStorage responsible of filling the screen when clicking back button
        sessionStorage["_Selected_BookingRequiredData"] = '';
        /* Redirect To Next Page */
        $.mobile.changePage(_App_Base_Url + "hotel/" + js_Selected_Ac.AcNameURL + "/");
        //window.location.href = _App_Base_Url + "hotel/" + js_Selected_Ac.AcNameURL;
        /* ------------------------------------------------- */
        event.preventDefault();
        event.stopPropagation();
        //return false;
    }
    catch (e) {
        alert("js_Handle_Selected_Row_AcListing: " + e.Message);
    }
}
/* --------------------------------------------------------------- */

/* --------------------------------------------------------------- */
var _pageName = '';
var _l = '';
var _a = '';
function js_FncCommon() {
    ////////debugger;
    try {
        //alert('test 1');
        // Check if Internet exists //
        if (!navigator.onLine) {
            js_MyCustomMessage("No Internet connection. Please retry when connection is restored!"); return false;
        }

        // ------------------------
        /* Check if Affiliate is sent in Query String */
        if ($.urlParam('affiliate') != '')
            sessionStorage['affiliate'] = $.urlParam('affiliate');
        else {
            if (sessionStorage['affiliate'] == undefined) {
                sessionStorage['affiliate'] = '';
            }
        }
        // ------------------------
        /* Get Page Name in order to set page level onBeforeShow rules */        
        //alert(window.location.href);
        //var pathname = window.location.href; //window.location.pathname;
        //if (pathname.indexOf('/Broker') != -1) {
        //    var i_Index = pathname.indexOf('/Broker');
        //    var url_part = pathname.substr(i_Index).replace('/Broker', '').replace('/', '');            
        //    _l = url_part; // Global for LISTING page For Broker
        //    pagename = "LISTING";
        //}
        //else if (pathname.indexOf('/User/') != -1) {
        //    var i_Index = pathname.indexOf('/user/');
        //    var url_part = pathname.substr(i_Index).replace('/User/', '').replace('/', '');            
        //    _a = url_part; // Global for DETAILS page for User
        //    pagename = "DETAILS";
        //}
        //else {
        //    var dirs = pathname.split('/');
        //    var pagename = dirs[dirs.length - 1].split('?')[0].split('.')[0];
        //}        
        
        //_pageName = pagename.toUpperCase();

        //switch (pagename.toUpperCase()) {
        //    case "LISTING":
        //        if (_l == '')
        //            _l = $.trim($.urlParam('a'));

        //        if (_l == '' && (sessionStorage["Param_Home"] == undefined || sessionStorage["Param_Home"] == '') && sessionStorage["Deals"] != 1) {
        //            $.mobile.changePage(_App_Base_Url); //default.htm
        //            return false;
        //        }
        //        break;
        //    case "DETAILS":
        //        if (_a == '')
        //            _a = $.trim($.urlParam('a'));

        //        if (_a == '' && (sessionStorage["_Selected_Ac"] == undefined || sessionStorage["_Selected_Ac"] == '')) {
        //            $.mobile.changePage(_App_Base_Url); //default.htm
        //            return false;
        //        }
        //        break;
        //    case "REVIEWS":
        //    case "BOOKING":
        //    case "BOOKINGSUBMISSION":
        //        //alert(sessionStorage["_Selected_Ac"]);
        //        if (sessionStorage["_Selected_Ac"] == undefined || sessionStorage["_Selected_Ac"] == '' || sessionStorage["_Selected_Ac"] == null) {
        //            $.mobile.changePage(_App_Base_Url); //default.htm
        //            return false;
        //        }
        //        break;
        //    case "PROFILEUPDATE":
        //    case "BOOKINGCANCELLATION":
        //    case "MYACCOUNT":
        //        if (sessionStorage["LoginMemberID"] == undefined || sessionStorage["LoginMemberID"] == '' || sessionStorage["LoginMemberID"] == null
        //        || sessionStorage["LoginBookID"] == undefined || sessionStorage["LoginBookID"] == '' || sessionStorage["LoginBookID"] == null) {
        //            $.mobile.changePage(_App_Base_Url + 'book/MyAccountLogin.html');
        //            return false;
        //        }
        //        break;
        //    default: break;
        //}
        // ------------------------
        return true;
    }
    catch (e) {
        alert('js_FncCommon: ' + e.message);
    }
}
/* --------------------------------------------------------------- */

/* --------------------------------------------------------------- */
function js_linkedCheckin(date, name) {
    try {
        // The widget itself
        var self = this;
        if (self.theDate != null) {
            // Call _formatter with the OUTPUT format...
            $('#' + name).val(self._formatter('%d-%b-%Y', date));
        }
    }
    catch (e) {
        alert("js_linkedCheckin: " + e.message);
    }
}
/* --------------------------------------------------------------- */
// ---------------------------------------------------------------
var _App_Base_Url = "http://mobile.victoire.com.lb/";
//var _App_Base_Url = "http://test.victoire.com.lb/";
//var _App_Base_Url = "http://" + window.location.host + "/";
// ---------------------------------------------------------------
// ---------------------------------------------------------------
var _WCF_Base_Url = "http://mobile.victoire.com.lb/Service.svc";
//var _WCF_Base_Url = "http://test.victoire.com.lb/Service.svc";
//var _WCF_Base_Url = "http://" + window.location.host + "/Service.svc";

var _Service_Method = "";
var _Params = "";
var _Ticket = "";
var _Timeout = 15000;
var _Content_Type = "application/json; charset=utf-8";
var _Type = "POST"; //"GET"
var _Data_Type = "json"; //jsonp
var _ProcessData = false;
var _LIST_ITEMS_PER_PAGE = 5;
var _UserInfo = "";
var _GarageInfo = "";

if (sessionStorage.getItem('UserInfo') != null) {
    _UserInfo = JSON.parse(localStorage.getItem('UserInfo'));
}

if (localStorage.getItem('GarageInfo') != null) {
    _GarageInfo = JSON.parse(localStorage.getItem('GarageInfo'));
}
// ---------------------------------------------------------------

// ---------------------------------------------------------------
var Type = _Type;
var Url = "";
var Timeout = _Timeout;
var ContentType = _Content_Type;
var DataType = _Data_Type;
var ProcessData = _ProcessData;
// ---------------------------------------------------------------

// ---------------------------------------------------------------
function js_Prepare_WCF_Url_For_Call() {
    ////////debugger;
    try {
        var js_Return = "";

        if (_Ticket != null && _Ticket != "") {
            _Ticket = _UserInfo.Ticket;
        }
        else {
            _Ticket = "";
        }

        js_Return = _WCF_Base_Url + "/" + _Service_Method + "?" + "Ticket=" + _Ticket;
        //alert(js_Return);
        return js_Return;
    }
    catch (e) {
        alert("js_Prepare_WCF_Url_For_Call: " + e.message);
    }
}
// ---------------------------------------------------------------
var i_CallService_Count = 0;
var _Service_Method_Completed = '';
function CallService(i_Service_Method) {
    ////////debugger;
    try {
        /* Set Service Method Completed to use in ServiceFailed method */
        _Service_Method_Completed = i_Service_Method;

        // Check if Internet exists //
        //if (!navigator.onLine) {
        //    js_MyCustomMessage("No Internet connection. Please retry when connection is restored!!"); return false;
        //}

        $('#block-ui').height($(window).height() + $(window).scrollTop());
        if ($('#block-ui').is(":hidden")) {
            $('#block-ui').show();
            $.mobile.loading('show');
        }

        i_CallService_Count += 1;

        $.ajax({
            type: Type,
            url: js_Prepare_WCF_Url_For_Call(),
            //data: "Input=" + encodeURIComponent(_Params),
            data: _Params,
            contentType: ContentType,
            //timeout: Timeout,
            dataType: DataType,
            processdata: ProcessData,
            success: function (i_Srv_Response) {
                ////////debugger;
                //alert('succeeedddddddddddd');
                if (i_Srv_Response.ExceptionMsg != '') {
                    //alert(i_Srv_Response);
                    i_CallService_Count = 0;
                    //if (_pageName == 'DETAILS')
                    //    $.mobile.changePage($.mobile.changePage(_App_Base_Url));
                    //else
                     //alert('succeeed ' + i_Srv_Response.ExceptionMsg);
                }
                else {
                    js_ExecuteFunctionByName(i_Service_Method, window, i_Srv_Response);
                    i_CallService_Count -= 1;
                }

                //alert(i_CallService_Count);
                if (i_CallService_Count == 0) {
                    if ($('#block-ui').is(":visible")) {
                        $('#block-ui').hide();
                        $.mobile.loading('hide');
                    }
                }
            },
            error: ServiceFailed
        });
    }
    catch (e) {
        alert("CallService Error: " + e.Message);
    }
}

// ---------------------------------------------------------------
function js_ExecuteFunctionByName(functionName, context /*, args */) {
    ////////debugger;
    //alert('1');
    try {
        var args = Array.prototype.slice.call(arguments).splice(2);
        var namespaces = functionName.split(".");
        var func = namespaces.pop();
        for (var i = 0; i < namespaces.length; i++) {
            context = context[namespaces[i]];
        }
        return context[func].apply(this, args);
    }
    catch (e) {
        alert('js_ExecuteFunctionByName: ' + e.message);
    }
}

// ---------------------------------------------------------------
function ServiceFailed(xhr, textStatus, errorThrown) {
    ////////debugger;
    //alert('ServiceFailed ' + xhr.My_Exception_Message);

    try {
        //alert('test 2');
        i_CallService_Count = 0;
        if ($('#block-ui').is(":visible")) {
            $('#block-ui').hide();
            $.mobile.loading('hide');
        }

        js_MyCustomMessage("No Internet connection.\n. Please retry when connection is restored!\n" + textStatus + "~" + errorThrown); //\n + textStatus + "~" + errorThrown
        /* Automatic Recall of Service in case of failure */
        //CallService(_Service_Method_Completed);

        //alert(xhr.My_Exception_Message);
        /*var js_response = xhr.responseText.replace(/[\r\n]/g, ' ').match(/<body.*>(.*)<\/body>/);
        js_response = js_response.toString().substring(js_response.toString().indexOf("request."), js_response.toString().indexOf("for more details"));
        js_response = js_response.trim();
        js_response = js_response.replace(_Service_Method, "");
        js_response = js_response.replace("request.", "");
        js_response = js_response.replace("request.", "for more details");
        js_response = js_response.replace("The exception message is ' : ", "");
        js_response = js_response.replace("See server logs", "");

        alert(js_response);*/

        //js_MyCustomMessage("Internet connection lost.\nPlease check your internet connection and then click OK the page will try to refresh!\n" + textStatus + "~" + errorThrown);
        //$.mobile.changePage(window.location.href, { allowSamePageTransition:true, reloadPage:true, transition: 'none' });
        //return false;
    }
    catch (e) {
        alert("ServiceFailed: " + e.Message);
        return false;
    }

}
// ---------------------------------------------------------------

// ---------------------------------------------------------------
function Get_Related_List_From_Storage(js_Storage_Key) {
    try {

        // ------------------
        var js_List_Items = [];
        // ------------------ 

        // ------------------ 
        js_Related_Entries = JSON.parse(localStorage.getItem(js_Storage_Key));
        // ------------------ 

        // ------------------
        if (js_Related_Entries != null) {
            for (var i = 0; i < js_Related_Entries.length; i++) {
                js_List_Items.push(js_Related_Entries[i]);
            }
        }
        // ------------------                                

        // ------------------                               
        return js_List_Items;
        // ------------------                                

    }
    catch (e) {
        alert("Get_Related_List_From_Storage:" + e.Message);
    }
}
// ---------------------------------------------------------------

/* --------------------------------------------------------------- */
function Get_Grid_Selected_Object(i_Object_ID, i_Selected_ID, i_Data_List) {
    try {
        // ------------------------
        var js_Return = "";
        // ------------------------

        // ------------------------
        if (i_Data_List != null) {
            for (oItem in i_Data_List) {
                if (i_Data_List[oItem][i_Object_ID] == i_Selected_ID) {
                    js_Return = i_Data_List[oItem];
                }
            }
        }
        // ------------------------

        // ------------------------
        return js_Return;
        // ------------------------
    }
    catch (e) {
        alert("Get_Grid_Selected_Object: " + e.Message);
    }
}
/* --------------------------------------------------------------- */

/* --------------------------------------------------------------- */
// Used for getting querystring variables
$.urlParam = function (name) {
    try {
        var results = new RegExp('[\\?&]' + name + '=([^&#]*)').exec(window.location.href);
        return results[1] || '';
    }
    catch (e) {
        return '';
        //alert('urlParam: ' + e.message);
    }
}
/* --------------------------------------------------------------- */

/**************************************************/
 ///////////////////////////////////////////////////////
    $.validator.setDefaults({
        highlight: function (input) {
            /* add code for default*/
            if (!$(input).is("select")) {
                $(input).addClass("input_error");
            }
        },
        unhighlight: function (input) {
            /* add code for default*/
            $(input).removeClass("input_error");
        },
        errorPlacement: function (error, element) {
            if (element.is("textarea")) {
                error.insertAfter(element);
            }
            else if (element.is(':radio') || element.is(':checkbox')) {
                error.insertAfter($(element).closest("fieldset"));
            }
            else {
                error.insertAfter($(element).parent());
            }
            /*if (element.is("select")) {
            error.insertAfter($(element).parent());
            } 
            else {
            error.insertAfter(element);
            }*/
        }
    });


    /* JQUERY UI Download Tariff */
    /* --------------------------------------------------------------- */
    function jq_DownloadTariff(i_Title, i_Msg,PDFName) {
        try {

            //alert('confirm');
            var conf_Title = i_Title != '' ? i_Title : 'Confirmation';
            var conf_Msg = i_Msg;

            $("#popup_DownloadTariff").find("#DownloadTariff_Title").html(conf_Title);
            $("#popup_DownloadTariff").find("#DownloadTariff_Msg").html(conf_Msg);

            $("#btn_DownloadTariff").removeClass("ui-btn-active");
            $("#btn_DownloadTariff").off().on("click", function (e) {
                
                alert('Download');
                // -------------------------------
                switch(PDFName) {
                    case 'AllRiskTariff.pdf':
                        downloadPdf('http://mobile.victoire.com.lb/tarif/' + PDFName, PDFName);
                        break;
                    case '':

                        break;
                    default:
                }



                e.preventDefault();
            });
            $("#btn_CloseDownloadTariff").removeClass("ui-btn-active");
            $("#btn_CloseDownloadTariff").off().on("click", function (e) {

                alert('close');
                $("#popup_DownloadTariff").popup('close');
                e.preventDefault();
            });

            $("#popup_DownloadTariff").popup('open', { transition: 'pop', positionTo: 'window' });
            var func = function () { $("#btn_DownloadTariff").focus(); }
        }
        catch (e) {
            alert("jq_DownloadTariff: " + e.Message);
        }
    }
/* --------------------------------------------------------------- */
    function downloadPdf(PDFurl, PDFName) {
        var fileTransfer = new FileTransfer();
        var inputUri = encodeURI(PDFurl);
        var outputPath = cordova.file.externalDataDirectory + PDFName;
        // var outputPath = "/storage/emulated/0/Download/helloworld.pdf";
        alert("Starting download to " + outputPath);
        fileTransfer.download(
              inputUri,
              outputPath,
            function (entry) {
                alert("Download complete: " + entry.fullPath + ", URL=" + entry.toURL());
                cordova.plugins.fileOpener2.open(
                    entry.toURL(), // You can also use a Cordova-style file uri: cdvfile://localhost/persistent/Download/starwars.pdf
                    'application/pdf',
                    {
                        error: function (e) {
                            alert('fileOpener2 error status: ' + e.status + ' - Error message: ' + e.message);
                        },
                        success: function () {
                            alert('fileOpener2 file opened successfully');
                        }
                    }
                );
            },
            function (error) {
                alert("download error: source=" + error.source + ", target=" + error.target + ", error code=" + error.code);
            });
}

    /* --------------------------------------------------------------- */
    /* JQUERY UI CONFIRMATION MESSAGE */
    /* --------------------------------------------------------------- */
    function jq_ConfirmationMessage(i_Title, i_Msg, i_OK_Handler, i_CANCEL_Handler, i_FocusElemId) {
        try {

            //alert('confirm');
            var conf_Title = i_Title != '' ? i_Title : 'Confirmation';
            var conf_Msg = i_Msg;

            $("#popup_ConfDialog").find("#ConfDialog_Title").html(conf_Title);
            $("#popup_ConfDialog").find("#ConfDialog_Msg").html(conf_Msg);

            $("#ConfDialog_Btn_OK").removeClass("ui-btn-active");
            $("#ConfDialog_Btn_OK").off().on("click", function (e) {
                if (i_OK_Handler)
                {
                    if (device.platform.toUpperCase() == 'IOS')
                    {
                        //var ref = cordova.InAppBrowser.open('https://itunes.apple.com/us/app/victoire-insurance/id1103809718?mt=8', '_system', 'location=yes');
                        //window.location.href = 'https://itunes.apple.com/us/app/victoire-insurance/id1103809718?mt=8'
                        cordova.plugins.market.open('id1103809718')
                    }
                    else if (device.platform.toUpperCase() == 'ANDROID')
                    {
                        //var ref = cordova.InAppBrowser.open('https://play.google.com/store/apps/details?id=com.Victoire.www&hl=en', '_self', 'location=yes');
                        //window.location.href = 'https://play.google.com/store/apps/details?id=com.Victoire.www&hl=en'

                        cordova.plugins.market.open('com.Victoire.www')
                    }

                }
                    //i_OK_Handler();

                $("#popup_ConfDialog").popup('close');
                // Element to Focus after close //
                // -------------------------------
                if (i_FocusElemId) {
                    var func = function () { $("#" + i_FocusElemId).focus(); }
                    setTimeout(func, 100);
                }
                // -------------------------------
                e.preventDefault();
            });
            $("#ConfDialog_Btn_CANCEL").removeClass("ui-btn-active");
            $("#ConfDialog_Btn_CANCEL").off().on("click", function (e) {
                if (i_CANCEL_Handler)
                    i_CANCEL_Handler();

                $("#popup_ConfDialog").popup('close');
                // Element to Focus after close //
                // -------------------------------
                if (i_FocusElemId) {
                    var func = function () { $("#" + i_FocusElemId).focus(); }
                    setTimeout(func, 100);
                }
                // -------------------------------
                e.preventDefault();
            });

            $("#popup_ConfDialog").popup('open', { transition: 'pop', positionTo: 'window' });
            var func = function () { $("#ConfDialog_Btn_OK").focus(); }
            setTimeout(func, 300);
        }
        catch (e) {
            alert("jq_ConfirmationMessage: " + e.Message);
        }
    }
/* --------------------------------------------------------------- */
    /* --------------------------------------------------------------- */
    /* JQUERY UI CONFIRMATION MESSAGE */
    /* --------------------------------------------------------------- */
    function jq_ConfirmationMessage2(i_Title, i_Msg, i_OK_Handler, i_CANCEL_Handler, i_FocusElemId) {
        try {

            //alert('confirm');
            var conf_Title = i_Title != '' ? i_Title : 'Confirmation';
            var conf_Msg = i_Msg;

            $("#popup_ConfDialog").find("#ConfDialog_Title").html(conf_Title);
            $("#popup_ConfDialog").find("#ConfDialog_Msg").html(conf_Msg);

            $("#ConfDialog_Btn_OK").removeClass("ui-btn-active");
            $("#ConfDialog_Btn_OK").off().on("click", function (e) {
                if (i_OK_Handler) {
                    ////debugger;
                    i_OK_Handler();
                }
                //i_OK_Handler();

                $("#popup_ConfDialog").popup('close');
                // Element to Focus after close //
                // -------------------------------
                if (i_FocusElemId) {
                    var func = function () { $("#" + i_FocusElemId).focus(); }
                    setTimeout(func, 100);
                }
                // -------------------------------
                e.preventDefault();
            });
            $("#ConfDialog_Btn_CANCEL").removeClass("ui-btn-active");
            $("#ConfDialog_Btn_CANCEL").off().on("click", function (e) {
                if (i_CANCEL_Handler)
                    i_CANCEL_Handler();

                $("#popup_ConfDialog").popup('close');
                // Element to Focus after close //
                // -------------------------------
                if (i_FocusElemId) {
                    var func = function () { $("#" + i_FocusElemId).focus(); }
                    setTimeout(func, 100);
                }
                // -------------------------------
                e.preventDefault();
            });

            $("#popup_ConfDialog").popup('open', { transition: 'pop', positionTo: 'window' });
            var func = function () { $("#ConfDialog_Btn_OK").focus(); }
            setTimeout(func, 300);
        }
        catch (e) {
            alert("jq_ConfirmationMessage2: " + e.Message);
        }
    }
    /* --------------------------------------------------------------- */

    // ---------------------------------------------------------------
    function Notify(i_Msg) {
        try {
            console.log(i_Msg);
            //alert(i_Msg);
        }
        catch (e) { }
    }
    // ---------------------------------------------------------------

    /* --------------------------------------------------------------- */
    function jq_DisplayMessage(i_Msg_Name, i_Title, i_Msg,i_Action,i_FocusElemId,i_Silent,i_PageID) {
        try {

            //alert('display');

            ////////debugger;

            if (i_Silent != null) {
                Notify(i_Msg);
                return;
            }

            var disp_Title = i_Msg_Name == "MSG_GeneralError" && i_Title == "" ? "Oops!" : i_Title;
            var disp_Msg = i_Msg;

            $("#popup_DispDialog").find("#DispDialog_Title").html(disp_Title);
            $("#popup_DispDialog").find("#DispDialog_Msg").html(disp_Msg);

            $("#DispDialog_Btn_CLOSE").removeClass("ui-btn-active");
            $("#DispDialog_Btn_CLOSE").off().on("click", function (e) {
                if (i_Action != null && i_PageID !=null) {
                    //alert(i_Action);
                    //var func = function () { i_Action; }
                    //setTimeout(func, 100);
                    //$.mobile.changePage(i_Action);
                    jq_NavigateToPage("" + i_PageID, "" + i_Action, null);
                }
                else {
                    $("#popup_DispDialog").popup('close');
                    // Element to Focus after close //
                    // -------------------------------
                    if (i_FocusElemId) {
                        var func = function () { $("#" + i_FocusElemId).focus(); }
                        setTimeout(func, 100);
                    }
                    // -------------------------------
                    e.preventDefault();

                }
            });

            if (i_Msg_Name) {
                switch (i_Msg_Name) {
                    case "MSG_GeneralError":
                        if (!$("#popup_DispDialog div[role='banner']").hasClass("frbgred")) {
                            //$("#DispDialog_Icon").removeClass("ui-icon-info").addClass("ui-icon-alert");
                            $("#popup_DispDialog div[role='banner']").removeClass("frbgblue").addClass("frbgred");
                        }
                        break;
                    case "MSG_GeneralInfo":
                        if (!$("#popup_DispDialog div[role='banner']").hasClass("frbgblue")) {
                            //$("#DispDialog_Icon").removeClass("ui-icon-alert").addClass("ui-icon-info");
                            $("#popup_DispDialog div[role='banner']").removeClass("frbgred").addClass("frbgblue");
                        }
                        break;
                }
            }
            window.scrollTo(0, 0);
            $("#popup_DispDialog").popup('open', { transition: 'flip', positionTo: 'window' });
            //var func = function () { $("#DispDialog_Btn_CLOSE").focus(); }
            //setTimeout(func, 300);
        }
        catch (e) {
            alert("jq_DisplayMessage: " + e.Message);
        }
    }
/* --------------------------------------------------------------- */
    /* --------------------------------------------------------------- */
    function jq_DisplayMessageByPosition(i_Msg_Name, i_Title, i_Msg, i_Action, i_FocusElemId, i_Silent, i_PageID, specified_position_id) {
        try {

            //alert('display');

            ////////debugger;

            if (i_Silent != null) {
                Notify(i_Msg);
                return;
            }

            var disp_Title = i_Msg_Name == "MSG_GeneralError" && i_Title == "" ? "Oops!" : i_Title;
            var disp_Msg = i_Msg;

            $("#popup_DispDialog").find("#DispDialog_Title").html(disp_Title);
            $("#popup_DispDialog").find("#DispDialog_Msg").html(disp_Msg);

            $("#DispDialog_Btn_CLOSE").removeClass("ui-btn-active");
            $("#DispDialog_Btn_CLOSE").off().on("click", function (e) {
                if (i_Action != null && i_PageID != null) {
                    //alert(i_Action);
                    //var func = function () { i_Action; }
                    //setTimeout(func, 100);
                    //$.mobile.changePage(i_Action);
                    jq_NavigateToPage("" + i_PageID, "" + i_Action, null);
                }
                else {
                    $("#popup_DispDialog").popup('close');
                    // Element to Focus after close //
                    // -------------------------------
                    if (i_FocusElemId) {
                        var func = function () { $("#" + i_FocusElemId).focus(); }
                        setTimeout(func, 100);
                    }
                    // -------------------------------
                    e.preventDefault();

                }
            });

            if (i_Msg_Name) {
                switch (i_Msg_Name) {
                    case "MSG_GeneralError":
                        if (!$("#popup_DispDialog div[role='banner']").hasClass("frbgred")) {
                            //$("#DispDialog_Icon").removeClass("ui-icon-info").addClass("ui-icon-alert");
                            $("#popup_DispDialog div[role='banner']").removeClass("frbgblue").addClass("frbgred");
                        }
                        break;
                    case "MSG_GeneralInfo":
                        if (!$("#popup_DispDialog div[role='banner']").hasClass("frbgblue")) {
                            //$("#DispDialog_Icon").removeClass("ui-icon-alert").addClass("ui-icon-info");
                            $("#popup_DispDialog div[role='banner']").removeClass("frbgred").addClass("frbgblue");
                        }
                        break;
                }
            }
            window.scrollTo(0, 0);
            $("#popup_DispDialog").popup('open', { transition: 'flip', positionTo: '#' + specified_position_id });
            //var func = function () { $("#DispDialog_Btn_CLOSE").focus(); }
            //setTimeout(func, 300);
        }
        catch (e) {
            alert("jq_DisplayMessage: " + e.Message);
        }
    }
    /* --------------------------------------------------------------- */

    /* --------------------------------------------------------------- */
    function jq_DisplayMessageForClaim(i_Msg_Name, i_Title, i_Msg, i_Action, i_FocusElemId, i_Silent, i_PageID) {
        try {

            //alert('display');

            ////////debugger;

            if (i_Silent != null) {
                Notify(i_Msg);
                return;
            }

            var disp_Title = i_Msg_Name == "MSG_GeneralError" && i_Title == "" ? "Oops!" : i_Title;
            var disp_Msg = i_Msg;

            $("#popup_DispDialog").find("#DispDialog_Title").html(disp_Title);
            $("#popup_DispDialog").find("#DispDialog_Msg").html(disp_Msg);

            $("#DispDialog_Btn_CLOSE").removeClass("ui-btn-active");
            $("#DispDialog_Btn_CLOSE").off().on("click", function (e) {
                if (i_Action != null && i_PageID != null) {
                    //alert(i_Action);
                    //var func = function () { i_Action; }
                    //setTimeout(func, 100);
                    //$.mobile.changePage(i_Action);
                    jq_NavigateToPage("" + i_PageID);//, "" + i_Action, null);
                    //window.location = "" + i_Action;
                }
                else {
                    $("#popup_DispDialog").popup('close');
                    // Element to Focus after close //
                    // -------------------------------
                    if (i_FocusElemId) {
                        var func = function () { $("#" + i_FocusElemId).focus(); }
                        setTimeout(func, 100);
                    }
                    // -------------------------------
                    e.preventDefault();

                }
            });

            if (i_Msg_Name) {
                switch (i_Msg_Name) {
                    case "MSG_GeneralError":
                        if (!$("#popup_DispDialog div[role='banner']").hasClass("frbgred")) {
                            //$("#DispDialog_Icon").removeClass("ui-icon-info").addClass("ui-icon-alert");
                            $("#popup_DispDialog div[role='banner']").removeClass("frbgblue").addClass("frbgred");
                        }
                        break;
                    case "MSG_GeneralInfo":
                        if (!$("#popup_DispDialog div[role='banner']").hasClass("frbgblue")) {
                            //$("#DispDialog_Icon").removeClass("ui-icon-alert").addClass("ui-icon-info");
                            $("#popup_DispDialog div[role='banner']").removeClass("frbgred").addClass("frbgblue");
                        }
                        break;
                }
            }
            window.scrollTo(0, 0);
            $("#popup_DispDialog").popup('open', { transition: 'flip', positionTo: 'window' });
            //var func = function () { $("#DispDialog_Btn_CLOSE").focus(); }
            //setTimeout(func, 300);
        }
        catch (e) {
            alert("jq_DisplayMessage: " + e.Message);
        }
    }
    /* --------------------------------------------------------------- */

    function calcAge(dateString) {
        ////////debugger;
        var d = new Date();
        var birthday = new Date(dateString);
        return (parseInt(d.getFullYear()) - parseInt(birthday.getFullYear()));
    }

    // parse a date in yyyy-mm-dd format from dd/mm/yyyy
    function jq_parseDate2(i_dateString) {
        //var parts = i_dateString.split("/");
        //return new Date(parseInt(parts[2], 10),
        //                  parseInt(parts[1], 10) - 1,
        //                  parseInt(parts[0], 10));
        return i_dateString.split("/").reverse().join("-");
    }

    function getFormattedDate(date) {
        var year = date.getFullYear();
        var month = (1 + date.getMonth()).toString();
        month = month.length > 1 ? month : '0' + month;
        var day = date.getDate().toString();
        day = day.length > 1 ? day : '0' + day;
        return day + '/' + month + '/' + year;
    }

    /******** QueryString parser ******/
    function jq_parseQuery(query) {
        var Params = new Object();
        if (!query) return Params; // return empty object
        var Pairs = query.split(/[;&]/);
        for (var i = 0; i < Pairs.length; i++) {
            var KeyVal = Pairs[i].split('=');
            if (!KeyVal || KeyVal.length != 2) continue;
            var key = unescape(KeyVal[0]);
            var val = unescape(KeyVal[1]);
            val = val.replace(/\+/g, ' ');
            Params[key] = val;
        }
        return Params;
    }
/******** /QueryString parser ******/
    var showToast = function (message,type) {
        try {
            window.plugins.toast.showWithOptions({
                message: message,
                duration: type.toLowerCase() == "success" ? "long" : "long",   //"long", // 2000 ms
                position: "top",
                styling: {
                    //opacity: 0.75, // 0.0 (transparent) to 1.0 (opaque). Default 0.8
                    backgroundColor: type.toLowerCase() == "success" ? '#68a581' : '#e42112' //'#8b734b', // make sure you use #RRGGBB. Default #333333
                    //textColor: '#FFFF00', // Ditto. Default #FFFFFF
                    //textSize: 20.5, // Default is approx. 13.
                    //cornerRadius: 16, // minimum is 0 (square). iOS default 20, Android default 100
                    //horizontalPadding: 20, // iOS default 16, Android default 50
                    //verticalPadding: 16 // iOS default 12, Android default 30
                }
            });
        } catch (error) {
            alert('Notification', message);
        }
    }

/// --------------------------------------------------------------- /

/// --------------------------------------------------------------- /
        function ordinal_suffix_of(i, text) {
            ////////debugger;
            var j = i % 10,
                k = i % 100;
            if (j == 1 && k != 11) {
                return i + "<sup>st</sup>" + ' ' + text;
            }
            if (j == 2 && k != 12) {
                return i + "<sup>nd</sup>" + ' ' + text;
            }
            if (j == 3 && k != 13) {
                return i + "<sup>rd</sup>" + ' ' + text;
            }
            return i + "<sup>th</sup>" + ' ' + text;
        }

        ko.virtualElements.allowedBindings.jqmRefreshList = true;
        ko.bindingHandlers.jqmRefreshList = {
            update: function (element, valueAccessor) {
                try {
                    ko.utils.unwrapObservable(valueAccessor()); // make this update fire each time the array is updated.
                    // locate the listview
                    var listview = $(element).parents().andSelf().filter("[data-role='listview']");
            
                    if (listview) {
                        try {
                            $(listview).listview('refresh').enhanceWithin();
                        }
                        catch (e) { console.log(e.message); }
                    }
                }
                catch (e) { console.log(e.message); }
            }
        };

        function RemoveInputDefaulValue(InputFieldName, DefaultValue) {
            ////////debugger;
            var Input = $('input[name=' + InputFieldName + ']');
            var default_value = DefaultValue;

            $(Input).focus(function () {
                if ($(this).val() == default_value) {
                    $(this).val("");
                }
            }).blur(function () {
                if ($(this).val().length == 0) /*Small update*/ {
                    $(this).val(default_value);
                }
            });
        }

        function RemoveInputDefaulValueByIDOnFocus(InputFieldName, DefaultValue) {
            ////////debugger;
            //alert('22');

            if ($("#" + InputFieldName + "").val() == DefaultValue) {
                $("#" + InputFieldName + "").val("");
            }

        }

        function RemoveInputDefaulValueByIDOnBlur(InputFieldName, DefaultValue) {
            ////////debugger;
            //alert('2');

            if (($("#" + InputFieldName + "").val().length == 0)) {/*Small update*/
                $("#" + InputFieldName + "").val(DefaultValue);
            }
        }


        function RemoveInputDefaulValue(InputFieldName, DefaultValue) {
            ////////debugger;
            var Input = $('input[name=' + InputFieldName + ']');
            var default_value = DefaultValue;

            $(Input).focus(function () {
                if ($(this).val() == default_value) {
                    $(this).val("");
                }
            }).blur(function () {
                if ($(this).val().length == 0) /*Small update*/ {
                    $(this).val(default_value);
                }
            });
        }
        var toMoney = function (num) {
            //return '$' + (num.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,'));
            if (!ko.validation.utils.isEmptyVal(num)) {
                ////////debugger;
                return (parseFloat(num).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,').replace(/\.?0+$/, ''));
            }
            return null;
        };

        ko.bindingHandlers.money = {
            update: function (element, valueAccessor, allBindings) {
                ////////debugger;
                var $el = $(element);
                var method;

                // Gives us the real value if it is a computed observable or not
                var valueUnwrapped = ko.utils.unwrapObservable(valueAccessor());

                if ($el.is(':input')) {
                    method = 'val';
                } else {
                    method = 'text';
                }
                return $el[method](toMoney(valueUnwrapped));
            }
        };


        ko.bindingHandlers.mobileEnable = {
            update: function (el) {
                ko.bindingHandlers.enable.update.apply(el, arguments);
                //$.fn.button && $(el).button('refresh');
            }
        }

        var mappingOptions = {
            child: {
                create: function (options) {
                    return options.data != null ? ko.observable(ko.mapping.fromJS(options.data)) : ko.observable();
                }
            }
        }

        var specialKeys = new Array();
        specialKeys.push(8); //Backspace
        function IsNumeric(e) {
            var keyCode = e.which ? e.which : e.keyCode
            var ret = ((keyCode >= 48 && keyCode <= 57) || specialKeys.indexOf(keyCode) != -1);
            document.getElementById("error").style.display = ret ? "none" : "inline";
            return ret;
        }

        function Validate(e) {
            var keyCode = e.keyCode || e.which;

            var lblError = document.getElementById("lblError");
            lblError.innerHTML = "";

            //Regex for Valid Characters i.e. Alphabets.
            var regex = /^[A-Za-z]+$/;

            //Validate TextBox value against the Regex.
            var isValid = regex.test(String.fromCharCode(keyCode));
            if (!isValid) {
                lblError.innerHTML = "Only Alphabets allowed.";
            }

            return isValid;
        }
