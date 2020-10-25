
/*------------------------------------------------------------*/
$(document).on("pagebeforecreate", "#pg_BrokerArea", function (event, ui) {
    /*------------------------------------------------------------*/
    //debugger;
    //alert('123 pagebeforecreate');

    //if (localStorage.getItem('UserInfo') != null && localStorage.getItem('UserInfo') != "null") {
    //    jq_NavigateToPage('pg_BrokerLogin');
    //}


    $('#BrokerAreaLogout').bind('tap', function () {

        try {

            localStorage.setItem("UserInfo", null);
            MyApp_GVM.UserID(null);
            MyApp_GVM.OwnerID(null);
            MyApp_GVM.BROKERCODE(null);
            MyApp_GVM.AGENTS_NAME(null);
            MyApp_GVM.EMAIL(null);
            MyApp_GVM.AccountNumber(null)
            jq_NavigateToPage('pg_BrokerLogin');
        }
        catch (e) {
            alert("BrokerLogout: " + e.Message);
        }

    });

    $(this).on("click", "#BrokerAreahome", function (e) {
        jq_NavigateToPage('pg_home');
        e.preventDefault();
    });

    $(this).on("click", "#BrokerAreaLogout", function (event) {

        try {
            //////////debugger;

            localStorage.setItem("UserInfo", null);
            //jq_NavigateToPage('pg_AjialBrokerLogin', "BrokerLogin.html", null);
            jq_NavigateToPage('pg_BrokerLogin');
        }
        catch (e) {
            alert("BrokerLogout: " + e.Message);
        }

        /* ---------------- */
        event.preventDefault();
        event.stopPropagation();
    });

    $(this).on("click", "#img_BA_Tarif", function (event) {

        jq_NavigateToPage('pg_Tarif');
        event.preventDefault();
        event.stopPropagation();
    });

    $(this).on("click", "#img_BA_Statement", function (event) {

        if (localStorage.getItem('UserInfo') == null || localStorage.getItem('UserInfo') == "null") {
            jq_NavigateToPage('pg_BrokerLogin');
        }

        jq_NavigateToPage('pg_StatementOfAccount');
        event.preventDefault();
        event.stopPropagation();
    });

    $(this).on("click", "#img_BA_Production", function (event) {

        if (localStorage.getItem('UserInfo') == null || localStorage.getItem('UserInfo') == "null") {
            jq_NavigateToPage('pg_BrokerLogin');
        }

        jq_NavigateToPage('pg_Production');
        event.preventDefault();
        event.stopPropagation();
    });


    $(this).on("click", "#img_BA_DueDates", function (event) {

        if (localStorage.getItem('UserInfo') == null || localStorage.getItem('UserInfo') == "null") {
            jq_NavigateToPage('pg_BrokerLogin');
        }

        jq_NavigateToPage('pg_DueDatePolicies');
        event.preventDefault();
        event.stopPropagation();
    });

    $(this).on("click", "#img_BA_Experts", function (event) {

        if (localStorage.getItem('UserInfo') == null || localStorage.getItem('UserInfo') == "null") {
            jq_NavigateToPage('pg_BrokerLogin');
        }

        jq_NavigateToPage('pg_ExpertList');
        event.preventDefault();
        event.stopPropagation();
    });

    $(this).on("click", "#img_BA_Calculator", function (event) {

        if (localStorage.getItem('UserInfo') == null || localStorage.getItem('UserInfo') == "null") {
            jq_NavigateToPage('pg_BrokerLogin');
        }

        jq_NavigateToPage('pg_Products');
        event.preventDefault();
        event.stopPropagation();
    });

    $(this).on("click", "#img_BA_DeclaireGarageClaim", function (event) {

        if (localStorage.getItem('UserInfo') == null || localStorage.getItem('UserInfo') == "null") {
            jq_NavigateToPage('pg_BrokerLogin');
        }

        jq_NavigateToPage('pg_DeclaireGarageClaim');
        event.preventDefault();
        event.stopPropagation();
    });

    $(this).on("click", "#img_BA_ScoreCard", function (event) {

        if (localStorage.getItem('UserInfo') == null || localStorage.getItem('UserInfo') == "null") {
            jq_NavigateToPage('pg_BrokerLogin');
        }

        jq_NavigateToPage('pg_ScoreCards');
        event.preventDefault();
        event.stopPropagation();
    });
});
/*------------------------------------------------------------*/
/* --------------------------------------------------------------- */
$(document).on("pagebeforeshow", "#pg_BrokerArea", function (event, ui) {
    //alert('123 pagebeforeshow');
    //debugger;
    if (localStorage.getItem('UserInfo') == null || localStorage.getItem('UserInfo') == "null") {
        jq_NavigateToPage('pg_BrokerLogin');
    }
});