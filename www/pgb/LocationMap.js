var _Params_Get_Ac_By_Map = new Object();
_Params_Get_Ac_By_Map.Latitude = "0";
_Params_Get_Ac_By_Map.Longitude = "0";
/* -------------------------------------------------- */
$(document).on("pagebeforecreate", "#pg_LocationMap", function (event, ui) {
//$('#pg_LocationMap').bind("pagebeforecreate", function (event) {
    /* ---------------- */
    /* ---------------- */
    //alert('page before create in LocationMap.js');
});

$(document).on("pagebeforeshow", "#pg_LocationMap", function (event, ui) {
//$('#pg_LocationMap').bind('pageshow', function (event, ui) {

    //alert('page page show in LocationMap.js');
    /* -------------------------------------------------- */
    //debugger;
    js_initializeMap(sessionStorage["LAT"], sessionStorage["LNG"]);
    /* -------------------------------------------------- */ 
});

/* --------------------------------------------------------------- */
var map;
var infowindow;

function js_initializeMap(i_Lat, i_Lng) {
    try {
        ////////debugger;


        var height = $(window).height() - 50;
        var width = $(window).width();

        $("#div_MapCanvas").height(height);
        $("#div_MapCanvas").width(width);

        //alert(i_Lat + ' ' + i_Lng);

        var myLatlng = new google.maps.LatLng(i_Lat, i_Lng);

        var myOptions = {
            center: myLatlng,
            zoom: 13,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        map = new google.maps.Map($("#div_MapCanvas")[0], myOptions);



        var func = function () {

            //jq_ShowMobileLoader();
            jq_ShowMobileLoaderAdv("pg_LocationMap");
            GetData_Get_Ac_By_Map();
        };

        setTimeout(func, 300);

        /* ---------------- */

        /* ---------------- */

        //if (sessionStorage["mapMode"] == 'I') {            
        /*var request = {
        location: myLatlng,
        radius: '5000',
        query: 'hotel'
        };

        infowindow = new google.maps.InfoWindow();
        var service = new google.maps.places.PlacesService(map);
        service.textSearch(request, callback);*/
        //}
    }
    catch (e) {
        alert('js_initializeMap: ' + e.message);
    }
}

function callback(results, status) {
    if (status == google.maps.places.PlacesServiceStatus.OK) {
        for (var i = 0; i < results.length; i++) {
            createMarker(results[i]);
        }
    }
}

function createMarker(place) {
    var image = 'images/marker_red.gif';
    var placeLoc = place.geometry.location;
    var marker = new google.maps.Marker({
        icon: image,
        map: map,
        position: placeLoc
    });

    google.maps.event.addListener(marker, 'click', function () {
        infowindow.setContent(place.name);
        infowindow.open(map, this);
    });
}

function createOfficeMarker(MyAc, HotelLatLon) {
    ////////debugger;
    var image = 'images/GPSIcon.png';
    var placeLoc = HotelLatLon;
    var marker = new google.maps.Marker({
        icon: image,
        map: map,
        position: placeLoc
    });
    google.maps.event.addListener(marker, 'click', function () {
        ////////debugger;
        var OfficeHTML = "<table style=\"font-size:12px; cursor:pointer;color:#487ead\" >" +
                            "<tr>" +
                                "<td style=\"width:70px\">" +
                                    "<img alt=\"\" src=\"images/About.png\" width=\"60\" height=\"60\" class=\"SBMrounding\">" +
                                "</td>" +
                                "<td style=\"vertical-align:top\"><a href=javascript:js_CallPhoneWithNum('" + MyAc.ContactNumber + "') style=\"font-size:12px; cursor:pointer;color:red\" >" +
                                    "<span style=\"font-weight:bold\">" + MyAc.OfficeName + "</span><br>" +
                                    "<span>Phone: " + MyAc.ContactNumber + "</span>" +
                                "</a></td>" +
                            "</tr>" +
                            "<tr>" +
                                "<td colspan=\"2\">" +
                                    "<span>" + MyAc.ShortDesc + "</span>" +
                                "</td>" +
                            "</tr>" +
                        "</table>"

        infowindow.setContent(OfficeHTML);
        
        infowindow.open(map, this);
    });
}
/* --------------------------------------------------------------- */

/* GetData_Get_Ac_By_Map */
/* --------------------------------------------------------------- */
function GetData_Get_Ac_By_Map() {
    try {
        /* ---------------- */

        /* ---------------- */

        /* ---------------- */
        //GatherUIData_Get_Ac_By_Map();
        /* ---------------- */

        /* ---------------- */
        _Params = JSON.stringify(_Params_Get_Ac_By_Map);
        _Service_Method = "Get_Ac_By_Map";
        CallService('Service_Call_Completed_LocationMap');
        /* ---------------- */
    }
    catch (e) {
        alert("GetData_Get_Ac_By_Map: " + e.Message);
    }
}
/* --------------------------------------------------------------- */

/* GatherUIData_Get_Ac_By_Map */
/* --------------------------------------------------------------- */
function GatherUIData_Get_Ac_By_Map() {
    try {
        // To Collect Non Visual Data.
        _Params_Get_Ac_By_Map.TSlanguage = $.parseJSON(localStorage["TravelSite"]).TSlanguage;
        _Params_Get_Ac_By_Map.TScountry = $.parseJSON(localStorage["TravelSite"]).TScountry;
    }
    catch (e) {
        alert("GatherUIData_Get_Ac_By_Map: " + e.Message);
    }
}
/* --------------------------------------------------------------- */

// Get_Ac_By_Map_Completed
/* --------------------------------------------------------------- */
function Get_Ac_By_Map_Completed(i_Input) {
    ////////debugger;
    try {
        infowindow = new google.maps.InfoWindow({ maxWidth: 200 });
        //jq_HideMobileLoader();
        jq_HideMobileLoaderAdv("pg_LocationMap");
        $.each(i_Input.My_Result, function (i, My_Ac) {
            var OfficeLatlng = new google.maps.LatLng(My_Ac.OfficeLat, My_Ac.OfficeLon);
            if (sessionStorage["mapMode"] == 'I') {
                createOfficeMarker(My_Ac, OfficeLatlng);
            }
        });

        var options = {};
        if (sessionStorage["mapMode"] == 'H') {
            var image = 'images/marker_green.png';
            options = { icon: image, map: map, position: map.getCenter(), animation: google.maps.Animation.DROP };
        }
        else {
            options = { map: map, position: map.getCenter(), animation: google.maps.Animation.DROP };
        }


        var marker = new google.maps.Marker(options);

        google.maps.event.addListener(marker, 'click', function () {
            showToast('your Location!', 'fail');
        })

        map.setCenter(marker.getPosition());
        map.panTo(marker.getPosition());

        setTimeout(function () {
            //alert('map');
            google.maps.event.trigger(map, 'resize');
        }, 500);

        //google.maps.event.addListenerOnce(map, 'idle', function () {
        //    google.maps.event.trigger(map, 'resize');
        //});

    }
    catch (e) {
        alert("Get_Ac_By_Map_Completed: " + e.Message);
    }
}
/* --------------------------------------------------------------- */

/* --------------------------------------------------------------- */
function Service_Call_Completed_LocationMap(i_Response) {
    try {
        switch (_Service_Method) {
            case "Get_Ac_By_Map":
                Get_Ac_By_Map_Completed(i_Response);
                break;
        }
    }
    catch (e) {
        alert("Service_Call_Completed:" + e.message);
    }
}
/* --------------------------------------------------------------- */

