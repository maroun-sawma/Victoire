
MyApp_GVM.List_Expert = ko.mapping.fromJS([]);

MyApp_GVM.List_Regions = ko.mapping.fromJS([]);
var List_Regions_Filtered = [];

MyApp_GVM.List_Expert_Filtered = ko.mapping.fromJS([]);
var Expert_Filtered = [];

var Validator_Login;
/* ---------------- */
var _Params_Get_ClaimForm_By_ID = new Object();
_Params_Get_ClaimForm_By_ID.ClaimDate = moment().format("DD/MM/YYYY"); //convertDate(new Date());
_Params_Get_ClaimForm_By_ID.ClaimPlace = "";
_Params_Get_ClaimForm_By_ID.RegionID = 0;
_Params_Get_ClaimForm_By_ID.ExpertRegionDetailsID = 0;
_Params_Get_ClaimForm_By_ID.ClaimThirdParty = "";
_Params_Get_ClaimForm_By_ID.ClaimOther = "";
_Params_Get_ClaimForm_By_ID.ClaimDetails = "";
_Params_Get_ClaimForm_By_ID.PolicyDesc = "";//sessionStorage["Policy_Desc"];
_Params_Get_ClaimForm_By_ID.ToEmail = "";
_Params_Get_ClaimForm_By_ID.ClaimImages = "";
_Params_Get_ClaimForm_By_ID.ClaimImagesNo = 0;
_Params_Get_ClaimForm_By_ID.ImagesPath = [];


/* ---------------- */
var _Params_Get_ClaimForm, __Params_Get_ClaimForm; // KO
/* ---------------- */
__Params_Get_ClaimForm = ko.mapping.fromJS(_Params_Get_ClaimForm_By_ID);

var _Params_Update_ClaimForm = new Object();
var MediaImage;
var ImageUploaded;
var ImageCounter;

/*---------------------------------------------------------------*/
// ----------------------------------
var Image_Path = function (_ImgPath) {
    //alert('test member family');
    var self = this;
    self.ImgPath = ko.observable(_ImgPath).extend({ required: true });
    self._Errors = ko.validation.group(self); // USED FOR KO VALIDATION //
};
/*---------------------------------------------------------------*/

$(function () {
    //////debugger;
    //alert('1');
    //$('#txt_ClaimForm_Date').scroller({
    //    preset: 'date',
    //    theme: 'mobiscroll-dark',
    //    display: 'bubble',
    //    mode: 'scroller',
    //    animate: 'swing',
    //    dateOrder: 'yy MMdd',
    //    dateFormat: "dd/mm/yy"
    //});

    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1; //January is 0!
    var yyyy = today.getFullYear();
    var mm2 = mm - 1;

    //if (dd < 10) {
    //    dd = '0' + dd
    //}

    //if (mm < 10) {
    //    mm = '0' + mm
    //}

    // Mobiscroll Date & Time initialization
    $('#txt_ClaimForm_Date').mobiscroll().date({
        theme: 'android-holo-light',        // Specify theme like: theme: 'ios' or omit setting to use default 
        display: 'bubble',    // Specify display mode like: display: 'bottom' or omit setting to use default
        mode: 'mixed',          // More info about mode: http://docs.mobiscroll.com/2-17-1/datetime#!opt-mode
        minDate: new Date(yyyy, mm-2, dd),  // More info about minDate: http://docs.mobiscroll.com/2-17-1/datetime#!opt-minDate
        maxDate: new Date(yyyy, mm-1, dd),   // More info about maxDate: http://docs.mobiscroll.com/2-17-1/datetime#!opt-maxDate
        animate: 'swing',
        dateOrder: 'yy MMdd',
        dateFormat: "dd/mm/yy"
    });

    ImageUploaded = '';
    ImageCounter = 0;


    var params = sessionStorage["Param_DeclaireClaim"]
});


$(document).on("pagebeforecreate", "#pg_ClaimForm", function (event, ui) {
    //////debugger;
    ImageUploaded = '';
    ImageCounter = 0;

    Validator_Login = $("#Frm_ClaimForm").validate({
        rules: {
            txt_ClaimForm_Date: { required: true },
            txt_ClaimForm_Place: { required: true },
            txt_ClaimForm_Mobile: { required: false, minlength: 8, maxlength: 14 },
            ddl_ClaimForm_Expert: { required: true },
            ddl_ClaimForm_Garage: { required: true },
            txt_ClaimForm_Details: { required: false },
            txt_ClaimForm_ThirdParty: { required: true },
            ddl_ClaimForm_Region: { required: true }
        }
    });


    /* ---------------- */
    $("#ddl_ClaimForm_Region").bind("change", function (event, ui) {
        /* ---------------- */
        ////////debugger;

        /* ---------------- */
        if ($(this).val() != '') {
            //alert($(this).val());
            Expert_Filtered = $.Enumerable.From(ko.mapping.toJS(MyApp_GVM.List_Expert))
                        .Where("$.OtherDetails =='" + $(this).val() + "'")
                        .ToArray();

            ko.mapping.fromJS(Expert_Filtered, MyApp_GVM.List_Expert_Filtered);
        }
        /* ---------------- */
    });
    /* ---------------- */



    $(this).on("click", "#btn_SubmitClaim", function (event) {

        //debugger;
        if ($("#Frm_ClaimForm").valid()) {
            /* ---------------- */
            if (ImageCounter >= 0) {
                /* ---------------- */

                    //jq_ShowMobileLoader();
                    jq_ShowMobileLoaderAdv("pg_ClaimForm");
                    GetDataClaimForm();
            }
            else {
                jq_DisplayMessageForClaim("MSG_GeneralError", "", "Please Upload your Images before submitting your form!");
                return false;
            }

        }
        else {
            // Focus invalid input
            // -------------------
            Validator_Login.focusInvalid();
            // -------------------
        }
        /* ---------------- */
        event.preventDefault();
        event.stopPropagation();
    });


    $('#Claim_Photo').bind('tap', function () {
        //alert('Camera Clicked');
        try {

            debugger;
            //__Params_Get_ClaimForm.ImagesPath.push(new Image_Path('http://mobile.victoire.com.lb/resources/android/splash/drawable-land-xxhdpi-screen.png'));

            if (ImageCounter <= 12) {
                //alert('inside')
                //navigator.device.capture.captureImage(captureSuccess, captureError, { limit: 1 });
                navigator.camera.getPicture(captureSuccess, captureError, {
                    quality: 50,
                    destinationType: Camera.DestinationType.FILE_URI,
                    sourceType: Camera.PictureSourceType.CAMERA,
                    encodingType: Camera.EncodingType.JPEG,
                    targetWidth: 700,
                    targetHeight: 700,
                    saveToPhotoAlbum: true,
                    correctOrientation: true
                });
            }
            else {
                jq_DisplayMessageForClaim("MSG_GeneralError", "", "You have exceeded maximum uploaded images!");
                return false;
            }

        }
        catch (e) {
            alert("Claim_Photo: " + e.Message);
        }

    });

    //$('#txt_ClaimForm_Date').bind('tap', function () {
    //    //alert('Camera Clicked');
    //    try {
    //        var options = {
    //            date: new Date(),
    //            mode: 'date'
    //        };

    //        datePicker.show(options, onSuccess, onError);

    //    }
    //    catch (e) {
    //        alert("ClaimForm_Date: " + e.Message);
    //    }

    //});

    $(this).on("click", "#btn_upload", function (event) {
        //$("#btn_upload").bind("click", function (event) {
        $('#CamerapopupDialog').hide();
        //alert(MediaImage);
        //alert(MediaImage.substr(MediaImage.lastIndexOf('/') + 1))

        var func = function () {

            //jq_ShowMobileLoader();
            jq_ShowMobileLoaderAdv("pg_ClaimForm");
            uploadFile(MediaImage);
        };

        setTimeout(func, 400);

    });

    $(this).on("click", "#btn_Cancel", function (event) {
        //$("#btn_Cancel").bind("click", function (event) {
        $('#CamerapopupDialog').hide();
    });
});

$(document).on("pagebeforeshow", "#pg_ClaimForm", function (event, ui) {

    //$('#pg_ClaimForm').bind('pageshow', function (event, ui) {

    ////////debugger;
    //alert('3');
    /* -------------------------------------------------- */
    //if (!js_FncCommon()) { return; };
    /* -------------------------------------------------- */
    Validator_Login.resetForm();
    /* SEO */
    /* -------------------------------------------------- */
    $("meta[name=description]").attr("content", "Adding Claim at Victoire Insurance Company");
    $("title").html("Adding Claim at Victoire Insurance Company");
    /* -------------------------------------------------- */


        //jq_ShowMobileLoader();
        jq_ShowMobileLoaderAdv("pg_ClaimForm");
        GetDataForClaimForm();
    /* ---------------- */

    /* ---------------- */
});

function onSuccess(date) {
    alert('Selected date: ' + date);
}

function onError(error) { // Android only
    alert('Error: ' + error);
}

/* GetData_Get_Member_By_ID */
/* --------------------------------------------------------------- */
function GetDataForClaimForm() {
    //////debugger;
    try {
        /* ---------------- */
        /* ---------------- */
        /* ---------------- */
        //GatherUIData_Get_Member_By_ID();
        /* ---------------- */
        /* ---------------- */
        _Params = ko.mapping.toJSON(__Params_Get_ClaimForm);

        _Service_Method = "GetClaimFormData";
        CallService('Service_Call_Completed_ClaimForm');
        /* ---------------- */
    }
    catch (e) {
        alert("GetDataForClaimForm(): " + e.Message);
    }
}
/* --------------------------------------------------------------- */

/* --------------------------------------------------------------- */
function GetClaimFormData_Completed(i_Input) {
    //////debugger;
    /* Get Claim Data */
    _Params_Get_ClaimForm = i_Input.My_Result;
    /* ---------------- */
    //jq_HideMobileLoader();
    jq_HideMobileLoaderAdv("pg_ClaimForm");
    try {

        MyApp_GVM.List_Expert = ko.mapping.fromJS(i_Input.My_Result);

        List_Regions_Filtered = $.Enumerable.From(ko.mapping.toJS(MyApp_GVM.List_Expert))
                                .Where("$.OtherDetails == '0'")
                                .ToArray();

        ko.mapping.fromJS(List_Regions_Filtered, MyApp_GVM.List_Regions);

        jq_HideMobileLoaderAdv("pg_ClaimForm");

    }
    catch (e) {
        alert("GetClaimFormData_Completed: " + e.Message);
    }
}
/* --------------------------------------------------------------- */

/* GetData_Update_Profile */
/* --------------------------------------------------------------- */
function GetDataClaimForm() {
    //////debugger;
    try {

        /* ---------------- */
        GatherUIDataClaimForm();
        /* ---------------- */

        /* ---------------- */
        _Params = ko.mapping.toJSON(__Params_Get_ClaimForm);

        //alert(_Params);

        _Service_Method = "Update_ClaimData";
        CallService('Service_Call_Completed_ClaimForm');
        /* ---------------- */
    }
    catch (e) {
        alert("GatherUIDataClaimForm(): " + e.Message);
    }
}
/* --------------------------------------------------------------- */

/* GatherUIData_Update_Profile */
/* --------------------------------------------------------------- */
function GatherUIDataClaimForm() {
    try {
        //////debugger;
        // To Collect Non Visual Data.
        //_Params_Update_ClaimForm = ko.mapping.toJS(__Params_Get_ClaimForm);
        __Params_Get_ClaimForm.ClaimDate(jq_parseDate2(__Params_Get_ClaimForm.ClaimDate()));
        __Params_Get_ClaimForm.ClaimImages(ImageUploaded);
        __Params_Get_ClaimForm.ClaimImagesNo(ImageCounter);
        __Params_Get_ClaimForm.PolicyDesc(MyApp_GVM.PolicyDesc());
    }
    catch (e) {
        alert("GatherUIDataClaimForm: " + e.Message);
    }
}
/* --------------------------------------------------------------- */

// Update_Profile_Completed
/* --------------------------------------------------------------- */
function Update_ClaimData_Completed(i_Input) {
    try {
        //jq_HideMobileLoader();
        jq_HideMobileLoaderAdv("pg_ClaimForm");

        jq_DisplayMessageForClaim("MSG_GeneralInfo", "Successfull!", "Your Claim Has Been Added Successfully!", "index.html", null, null, "pg_home");
    }
    catch (e) {
        alert("Update_ClaimData_Completed: " + e.Message);
    }
}
/* --------------------------------------------------------------- */

/* --------------------------------------------------------------- */
function Service_Call_Completed_ClaimForm(i_Response) {
    //////////debugger;
    try {
        switch (_Service_Method) {
            case "GetClaimFormData":
                GetClaimFormData_Completed(i_Response);
                break;
            case "Update_ClaimData":
                Update_ClaimData_Completed(i_Response);
                break;
        }
    }
    catch (e) {
        alert("Service_Call_Completed:" + e.message);
    }
}
/* --------------------------------------------------------------- */

/* -------------------Phonegapp Camera API device----------------------- */
// Called when capture operation is finished
//
function captureSuccess(mediaFiles) {
    //alert('Capture Success');
    var i, len;
    //for (i = 0, len = mediaFiles.length; i < len; i += 1) {
    MediaImage = mediaFiles //mediaFiles[i];

    //alert(MediaImage.fullPath);
    //alert(MediaImage.name);
    //alert(mediaFiles);
    //alert(MediaImage.fullPath);
    //alert(mediaFiles[i].name);
    //__Params_Get_ClaimForm.ImagesPath.push(new Image_Path(mediaFiles));
    __Params_Get_ClaimForm.ImagesPath.push(new Image_Path(mediaFiles));

    //$('#camera-image').css({
    //    'background-image': 'url(' + mediaFiles + ')',
    //    'background-size': '100%'
    //});

    var func = function () {

        //jq_ShowMobileLoader();
        jq_ShowMobileLoaderAdv("pg_ClaimForm");
        //alert('upload 1');
        uploadFile(MediaImage);
    };

    setTimeout(func, 400);



    // uploadFile(mediaFiles[i]);
    // }\
    //alert('test 1');
    //$('#CamerapopupDialog').popup('open');
    //alert('test 2');
    //$('#CamerapopupDialog').show();
}
// Called if something bad happens.
// 
function captureError(error) {
    alert('Capture error' + error.code);
    var msg = 'An error occurred during capture: ' + error.code;
    navigator.notification.alert(msg, null, 'Uh oh!');
}

// Upload files to server
function uploadFile(mediaFile) {
    try {
        var min = 1;
        var max = 9000
        var Image
        //alert(sessionStorage["Policy_Desc"]);
        var win = function (r) {
            //alert('Uploaded');
            console.log("Code = " + r.responseCode);
            console.log("Response = " + r.response);
            console.log("Sent = " + r.bytesSent);
        }

        var fail = function (error) {
            alert("An error has occurred: Code = " + error.code);
            console.log("upload error source " + error.source);
            console.log("upload error target " + error.target);
        }

        var options = new FileUploadOptions();
        var ImageName = mediaFile.substr(mediaFile.lastIndexOf('/') + 1);
        var ImageWithoutExt = ImageName.substring(0, ImageName.length - 4);
        var ImageExt = ImageName.substring(ImageName.length - 4);
        options.fileKey = "file";
        options.fileName = ImageWithoutExt + '_' + Math.floor(Math.random() * (max - min + 1) + min) + '_' + sessionStorage["Policy_Desc"] + ImageExt;
        options.mimeType = "text/plain";

        var params = {};
        params.value1 = "test";
        params.value2 = "param";

        options.params = params;

        var ft = new FileTransfer();
        ImageUploaded += options.fileName + '~';
        ImageCounter++;
        //alert('upload 2');
        ft.upload(mediaFile , encodeURI("http://mobile.victoire.com.lb/CameraHandler.ashx"), win, fail, options);
        //jq_HideMobileLoader();
        jq_HideMobileLoaderAdv("pg_ClaimForm");
    }
    catch (e) {
        alert("uploadFile:" + e.message);
    }

}
/* ----------------End Phonegappe Camera Device------------------------- */


