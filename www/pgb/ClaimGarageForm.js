//////debugger;

MyApp_GVM.List_GarageExpert = ko.mapping.fromJS([]);
MyApp_GVM.List_Garage = ko.mapping.fromJS([]);

MyApp_GVM.List_GarageRegions = ko.mapping.fromJS([]);
var List_Regions_Filtered = [];

MyApp_GVM.List_Expert_Filtered = ko.mapping.fromJS([]);
var Expert_Filtered = [];

var Validator_Login;
//////debugger;
/* ---------------- */
var _Params_Get_GarageClaimForm_By_ID = new Object();
_Params_Get_GarageClaimForm_By_ID.ClaimDate = convertDate(new Date());
_Params_Get_GarageClaimForm_By_ID.ClaimMobile = ""; //_GarageInfo.MOBILE;
_Params_Get_GarageClaimForm_By_ID.ClaimDetails = "";
_Params_Get_GarageClaimForm_By_ID.GARAGE_DESC = ""; //_GarageInfo.GARAGE_DESC;
_Params_Get_GarageClaimForm_By_ID.PolicyDesc = "";//sessionStorage["Policy_GarageDesc"];
_Params_Get_GarageClaimForm_By_ID.ToEmail = "";
_Params_Get_GarageClaimForm_By_ID.ClaimImages = "";
_Params_Get_GarageClaimForm_By_ID.ClaimImagesNo = 0;


/* --------------------------------------- */
var __Params_Get_GarageClaimForm; // KO
/* ---------------- */
__Params_Get_GarageClaimForm = ko.mapping.fromJS(_Params_Get_GarageClaimForm_By_ID);
/* --------------------------------------- */
var _Params_Update_GarageClaimForm = new Object();
var GarageMediaImage;
var GarageImageUploaded;
var GarageImageCounter;

$(function () {
    ////////debugger;
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
    $('#txt_GarageClaimForm_Date').mobiscroll().date({
        theme: 'android-holo-light',        // Specify theme like: theme: 'ios' or omit setting to use default 
        display: 'bubble',    // Specify display mode like: display: 'bottom' or omit setting to use default
        mode: 'mixed',          // More info about mode: http://docs.mobiscroll.com/2-17-1/datetime#!opt-mode
        minDate: new Date(yyyy, mm - 2, dd),  // More info about minDate: http://docs.mobiscroll.com/2-17-1/datetime#!opt-minDate
        maxDate: new Date(yyyy, mm - 1, dd),   // More info about maxDate: http://docs.mobiscroll.com/2-17-1/datetime#!opt-maxDate
        animate: 'swing',
        dateOrder: 'yy MMdd',
        dateFormat: "dd/mm/yy"
    });

    ImageGarageUploaded = '';
    ImageGarageCounter = 0;


    //var params = sessionStorage["Param_DeclaireClaim"]
});


$(document).on("pagebeforecreate", "#pg_ClaimGarageForm", function (event, ui) {

    ImageGarageUploaded = '';
    ImageGarageCounter = 0;

    Validator_Login = $("#Frm_ClaimGarageForm").validate({
        rules: {
            txt_GarageClaimForm_Date: { required: true },
            txt_GarageClaimForm_Mobile: { required: false, minlength: 8, maxlength: 14 },
            txt_ClaimForm_Garage: { required: true },
            txt_GarageClaimForm_Details: { required: false }
        }
    });



    $(this).on("click", "#btn_SubmitGarageClaim", function (event) {

        if ($("#Frm_ClaimGarageForm").valid()) {
            /* ---------------- */
            if (ImageGarageCounter > 0) {
                /* ---------------- */
                    //jq_ShowMobileLoader();
                    jq_ShowMobileLoaderAdv("pg_ClaimGarageForm");
                Update_GarageClaimData();
            }
            else {
                jq_DisplayMessage("MSG_GeneralError", "", "Please Upload your Images before submitting your form!");
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

        /* ---------------- */

        /* ---------------- */
        event.preventDefault();
        event.stopPropagation();
    });


    $('#GarageClaim_Photo').bind('tap', function () {
        //alert('Camera Clicked');
        try {
            if (ImageGarageCounter <= 10) {
                //alert('inside')
                //navigator.device.capture.captureImage(captureSuccess, captureError, { limit: 1 });
                navigator.camera.getPicture(captureGarageSuccess, captureGarageError, {
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
            alert("GarageClaim_Photo: " + e.Message);
        }

    });


    $('#Claim_GarageGallery').bind('tap', function () {
        //alert('Camera Clicked');
        //https://www.npmjs.com/package/cordova-plugin-imagepicker
        try {
            //if (ImageCounter <= 6) {
            window.imagePicker.getPictures(GallerySuccess, GalleryError, {
                // max images to be selected, defaults to 15. If this is set to 1, upon
                // selection of a single image, the plugin will return it.
                maximumImagesCount: 10,
                // max width and height to allow the images to be.  Will keep aspect
                // ratio no matter what.  So if both are 800, the returned image
                // will be at most 800 pixels wide and 800 pixels tall.  If the width is
                // 800 and height 0 the image will be 800 pixels wide if the source
                // is at least that wide.
                width: 700,
                height: 700,
                // quality of resized image, defaults to 100
                quality: 50 //int(0 - 100)
            });

            //}
            //else {
            //    jq_DisplayMessage("MSG_GeneralError", "", "You have exceeded maximum uploaded images!");
            //    return false;
            //}

        }
        catch (e) {
            alert("Claim_GarageGallery: " + e.Message);
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

    $(this).on("click", "#btn_uploadGarage", function (event) {
        //$("#btn_upload").bind("click", function (event) {
        $('#CamerapopupGarageDialog').hide();
        //alert(MediaImage);
        //alert(MediaImage.substr(MediaImage.lastIndexOf('/') + 1))

        var func = function () {

            //jq_ShowMobileLoader();
            jq_ShowMobileLoaderAdv("pg_ClaimGarageForm");
            uploadGarageFile(MediaImage);
        };

        setTimeout(func, 400);

    });

    $(this).on("click", "#btn_CancelGarageUpload", function (event) {
        //$("#btn_Cancel").bind("click", function (event) {
        $('#CamerapopupGarageDialog').hide();
    });
});

$(document).on("pagebeforeshow", "#pg_ClaimGarageForm", function (event, ui) {

    //$('#pg_ClaimForm').bind('pageshow', function (event, ui) {

    //debugger;
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

    __Params_Get_GarageClaimForm.ClaimMobile(MyApp_GVM.GarageMOBILE());
    __Params_Get_GarageClaimForm.GARAGE_DESC(MyApp_GVM.GARAGE_DESC());
    __Params_Get_GarageClaimForm.PolicyDesc(MyApp_GVM.PolicyGarageDesc());

    //ko.applyBindings(__Params_Get_ClaimForm, document.getElementById('ct_ClaimGarageForm'));

    //var func = function () {

    //    jq_ShowMobileLoader();
    //GetGarageClaimFormData();
    //};

    //setTimeout(func, 300);
    /* ---------------- */

    /* ---------------- */
});


/* GetData_Update_Profile */
/* --------------------------------------------------------------- */
function Update_GarageClaimData() {
    //////////debugger;
    try {
        /* ---------------- */
        GatherUIDataGarageClaimForm();
        /* ---------------- */
        /* ---------------- */
        _Params = ko.mapping.toJSON(__Params_Get_GarageClaimForm);
        //alert(_Params);
        _Service_Method = "Update_GarageClaimData";
        CallService('Service_Call_Completed_GarageClaimForm');
        /* ---------------- */
    }
    catch (e) {
        alert("Update_GarageClaimData(): " + e.Message);
    }
}
/* --------------------------------------------------------------- */

/* GatherUIData_Update_Profile */
/* --------------------------------------------------------------- */
function GatherUIDataGarageClaimForm() {
    try {
        // To Collect Non Visual Data.
        //_Params_Update_ClaimForm = ko.mapping.toJS(__Params_Get_ClaimForm);
        __Params_Get_GarageClaimForm.ClaimDate(jq_parseDate2(__Params_Get_GarageClaimForm.ClaimDate()));
        __Params_Get_GarageClaimForm.ClaimImages(ImageGarageUploaded);
        __Params_Get_GarageClaimForm.ClaimImagesNo(ImageGarageCounter);
    }
    catch (e) {
        alert("GatherUIDataGarageClaimForm: " + e.Message);
    }
}
/* --------------------------------------------------------------- */

// Update_Profile_Completed
/* --------------------------------------------------------------- */
function Update_GarageClaimData_Completed(i_Input) {
    try {
        //jq_HideMobileLoader();
        jq_HideMobileLoaderAdv("pg_ClaimGarageForm");

        jq_DisplayMessageForClaim("MSG_GeneralInfo", "Successfull!", "Your Claim Has Been Added Successfully!", "index.html", null, null, "pg_home");
    }
    catch (e) {
        alert("Update_GarageClaimData_Completed: " + e.Message);
    }
}
/* --------------------------------------------------------------- */

/* --------------------------------------------------------------- */
function Service_Call_Completed_GarageClaimForm(i_Response) {
    //////////debugger;
    try {
        switch (_Service_Method) {
            case "GetGarageClaimFormData":
                GetGarageClaimFormData_Completed(i_Response);
                break;
            case "Update_GarageClaimData":
                Update_GarageClaimData_Completed(i_Response);
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
function captureGarageSuccess(mediaFiles) {
    //alert('Capture Success');
    var i, len;
    //for (i = 0, len = mediaFiles.length; i < len; i += 1) {
    MediaImage = mediaFiles //mediaFiles[i];
    $('#Garagecamera-image').css({
        'background-image': 'url(' + mediaFiles + ')',
        'background-size': '100%'
    });

    var func = function () {

        //jq_ShowMobileLoader();
        jq_ShowMobileLoaderAdv("pg_ClaimGarageForm");
        uploadGarageFile(MediaImage);
    };

    setTimeout(func, 400);
}
// Called if something bad happens.
// 
function captureGarageError(error) {
    //alert('Capture error' + error.code);
    var msg = 'An error occurred during capture: ' + error.code;
    navigator.notification.alert(msg, null, 'Uh oh!');
}
//
function GallerySuccess(mediaFiles) {
    //alert('Capture Success');
    var i, len;
    //for (i = 0, len = mediaFiles.length; i < len; i += 1) {

    for (var i = 0; i < mediaFiles.length; i++) {
        MediaImage = mediaFiles[i];
        $('#Garagecamera-image').css({
            'background-image': 'url(' + mediaFiles[0] + ')',
            'background-size': '100%'
        });

        //var func = function () {
        //jq_ShowMobileLoader();
        jq_ShowMobileLoaderAdv("pg_ClaimGarageForm");
        uploadGarageFile(MediaImage);
        //};

        //setTimeout(func, 300);
    }
}
// Called if something bad happens.

function GalleryError(error) {
    //alert('Capture error' + error.code);
    var msg = 'An error occurred during capture: ' + error.code;
    showToast(msg, 'fail');
}


// Upload files to server
function uploadGarageFile(mediaFile) {
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
        options.fileName = ImageWithoutExt + '_' + Math.floor(Math.random() * (max - min + 1) + min) + '_' + sessionStorage["Policy_GarageDesc"] + ImageExt;
        options.mimeType = "text/plain";

        var params = {};
        params.value1 = "test";
        params.value2 = "param";

        options.params = params;

        var ft = new FileTransfer();
        ImageGarageUploaded += options.fileName + '~';
        ImageGarageCounter++;
        ft.upload(mediaFile, encodeURI("http://mobile.victoire.com.lb/CameraGarageHandler.ashx"), win, fail, options);
        //jq_HideMobileLoader();
        jq_HideMobileLoaderAdv("pg_ClaimGarageForm");
    }
    catch (e) {
        alert("uploadGarageFile:" + e.message);
    }

}
/* ----------------End Phonegappe Camera Device------------------------- */


