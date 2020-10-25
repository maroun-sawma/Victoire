
(function () {
    var MediaImage;
    $('#CamerapopupDialog').hide();

    var onSuccess = function (uri) {
        //alert(uri);
        $('#camera-image').css({
            'background-image': 'url('+uri+')',
            'background-size':  '100%'
        });
    };

    var onFail = function() {
        console.log('Failed to get an image');
    };

    // Called when capture operation is finished
    //
    function captureSuccess(mediaFiles) {
        var i, len;
        for (i = 0, len = mediaFiles.length; i < len; i += 1) {
            MediaImage = mediaFiles[i];
            //alert(MediaImage.fullPath);
            //alert(mediaFiles[i].name);
            $('#camera-image').css({
                'background-image': 'url(' + mediaFiles[i].fullPath + ')',
                'background-size': '100%'
            });
            
           // uploadFile(mediaFiles[i]);
        }
        //$('#CamerapopupDialog').popup('open');
        $('#CamerapopupDialog').show();
    }
    // Called if something bad happens.
    // 
    function captureError(error) {
        var msg = 'An error occurred during capture: ' + error.code;
        navigator.notification.alert(msg, null, 'Uh oh!');
    }


    $('#camera button[data-icon="plus"]').bind('tap', function () {
        //alert(navigator.camera);
        //navigator.camera.getPicture(onSuccess, onFail, {
        //    quality: 50,
        //    destinationType: navigator.camera.DestinationType.FILE_URI
        //});
        // Launch device camera application, 
        // allowing user to capture up to 2 images
        navigator.device.capture.captureImage(captureSuccess, captureError, { limit: 1 });
    });

    $(this).on("click", "#btn_upload", function (event) {
    //$("#btn_upload").bind("click", function (event) {
        $('#CamerapopupDialog').hide();
        uploadFile(MediaImage);
    });

    $(this).on("click", "#btn_Cancel", function (event) {
    //$("#btn_Cancel").bind("click", function (event) {
        $('#CamerapopupDialog').hide();
    });

    // Upload files to server
    function uploadFile(mediaFile) {
 
            var ft = new FileTransfer(),
            path = mediaFile.fullPath,
            name = mediaFile.name;

            ft.upload(path,
                "http://mobile.victoire.com.lb/CameraHandler.ashx",
                function (result) {
                    console.log('Upload success: ' + result.responseCode);
                    console.log(result.bytesSent + ' bytes sent');
                },
                function (error) {
                    console.log('Error uploading file ' + path + ': ' + error.code);
                },
                { fileName: name });
    }

    $('#camera button[data-icon="search"]').bind('tap', function () {
        alert(navigator.camera);
        navigator.camera.getPicture(onSuccess, onFail, {
            quality: 50,
            destinationType: navigator.camera.DestinationType.FILE_URI,
            sourceType: navigator.camera.PictureSourceType.PHOTOLIBRARY
        });
    });

})();
