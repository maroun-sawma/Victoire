$(document).on("pagebeforecreate", "#pg_PaymentResult", function (event, ui) {



});


$(document).on("pagebeforeshow", "#pg_PaymentResult", function (event, ui) {

    $("meta[name=description]").attr("content", "Payment Result");
    $("title").html("Payment Result");
    /* -------------------------------------------------- */

    ////////debugger;
    // ---------------
    var cp_status = cp_status_Glob;
    var status = cp_status.split("~")[0];
    var error = cp_status.split("~")[1];
    var PolicyRef = PolicyRef_Glob;
    var Amount = Amount_Glob;

    if (parseInt(status) == 0) {

        $("#ul_Success").hide();
        $("#ul_failure").show();

        $('#lblDecReason').text('Thank you for your operation! Declined transaction.:' + ' ' + error);
        $('#lblAmount2').text('DECLINED ' + Amount + ' ' + 'for the following Reference:' + ' ' + PolicyRef);
        $('#lblDecReason2').text('Reason:' + ' ' + error + ' ' + 'NetCommerce');
    }
    else if (parseInt(status) == 1) {

        $("#ul_Success").show();
        $("#ul_failure").hide();
        $('#lblAmount').text('Payment Successful:' + ' ' + Amount);
        $('#lbl_PolicyOrder').text('Payment Order:' + ' ' + PolicyRef);
    }
});

