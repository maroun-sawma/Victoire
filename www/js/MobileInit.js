$(document).bind("mobileinit", function () {
    // As of Beta 2, jQuery Mobile's Ajax navigation does not work in all cases (e.g.,
    // when navigating from a mobile to a non-mobile page, or when clicking "back"
    // after a form post), hence disabling it.
    //$.mobile.ajaxEnabled = false;

    //$.mobile.page.prototype.options.domCache = true;

    //$.mobile.defaultPageTransition = "slide";
    //$.mobile.loadingMessageTextVisible = true; //Deprecated
    //$.mobile.loader.prototype.options.textVisible = true;
    //$.mobile.loadingMessage = "Loading ...";          //Deprecated
    //$.mobile.loader.prototype.options.text = "Loading. Please wait ...";
    //$.mobile.loadingMessageTheme = "b";          //Deprecated
    //$.mobile.loader.prototype.options.theme = "e";
    //$.mobile.defaultDialogTransition = "slidein";

    //$.mobile.page.prototype.options.theme = "i";
    //$.mobile.page.prototype.options.contentTheme = "i";
    //$.mobile.page.prototype.options.headerTheme = "i";
    //$.mobile.page.prototype.options.footerTheme = "a";
    
    //$.mobile.page.prototype.options.backBtnTheme
    //$.mobile.listview.prototype.options.mini = true;
    //$.mobile.listview.prototype.options.inset = true;
    //$.mobile.listview.prototype.options.theme = "h";
    //$.mobile.listview.prototype.options.splitTheme = "i";
    //$.mobile.listview.prototype.options.splitIcon = "gear";
    //$.mobile.listview.prototype.options.dividerTheme = "e";
    //$.mobile.listview.prototype.options.countTheme = "a";

    //$.mobile.collapsible.prototype.options.theme = "e";
    //$.mobile.collapsible.prototype.options.contentTheme = "h";
    //$.mobile.collapsible.prototype.options.mini = true;
    //$.mobile.collapsible.prototype.options.collapsed = false;
    //$.mobile.textinput.prototype.options.initSelector = ".myTxtInputs";

    //alert($.support.cssTransform3d);

    $.mobile.defaultPageTransition = "none";

    $.mobile.loader.prototype.options.text = "";
    $.mobile.loader.prototype.options.textVisible = false;
    $.mobile.loader.prototype.options.theme = "a";
    $.mobile.loader.prototype.options.textonly = false;
    $.mobile.loader.prototype.options.html = "";

    $.mobile.page.prototype.options.theme = "c";


    $.mobile.page.prototype.options.theme = "i";
    $.mobile.page.prototype.options.contentTheme = "i";
    $.mobile.page.prototype.options.headerTheme = "i";
    $.mobile.page.prototype.options.footerTheme = "a";

    //$.mobile.page.prototype.options.backBtnTheme
    //$.mobile.listview.prototype.options.mini = true;
    $.mobile.listview.prototype.options.inset = true;
    $.mobile.listview.prototype.options.theme = "c";
    $.mobile.listview.prototype.options.splitTheme = "i";
    $.mobile.listview.prototype.options.splitIcon = "gear";
    $.mobile.listview.prototype.options.dividerTheme = "e";
    $.mobile.listview.prototype.options.countTheme = "a";

    $.mobile.collapsible.prototype.options.theme = "e";
    $.mobile.collapsible.prototype.options.contentTheme = "h";
    $.mobile.collapsible.prototype.options.mini = true;

    $.mobile.hashListeningEnabled = false;
    $.mobile.pushStateEnabled = false;
    $.mobile.changePage.defaults.changeHash = false;
});        