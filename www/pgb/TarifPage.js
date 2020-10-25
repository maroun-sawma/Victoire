// define global viewer options here

$(document).on("pagebeforecreate", "#pg_Tarif", function (event, ui) {

    //if (localStorage.getItem('UserInfo') != null && localStorage.getItem('UserInfo') != "null") {
    //    jq_NavigateToPage('pg_BrokerLogin');
    //}

    $('#BrokerTarifLogout').bind('tap', function () {

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

            alert("GarageLogout: " + e.Message);
        }

    });

    $(this).on("click", "#tariff_home", function (e) {
        jq_NavigateToPage('pg_home');
        e.preventDefault();
    });

    $('#lbl_MotorAllRiskTariff').bind('tap', function () {
        try {
            //alert(device.platform);
            ////https://www.raymondcamden.com/2016/06/26/linking-to-pdfs-in-cordova-apps
            //For IOS//////////////////////////////////////////////////////////////////////////////////
            if (device.platform.toUpperCase() == 'IOS')
            {


                cordova.plugins.SitewaertsDocumentViewer.viewDocument(
                    "tarif/AllRiskTariff.pdf", "application/pdf", {
                        title: "Victoire Tariff",
                        documentView: {closeLabel: "Close"},
                        navigationView: {closeLabel: "Close"},
                        email: {enabled: true},
                        print: {enabled: true},
                        openWith: {enabled: true},
                        search: {enabled: true}
                    }, onShow, onClose, onMissingApp, onError);

                //var ref = cordova.InAppBrowser.open('tarif/AllRiskTariff.pdf', '_blank', 'location=no');
            }
            else
                if (device.platform.toUpperCase() == 'ANDROID')
                {
                    //For ANDROId///////////////////////////////////////////////////////////////////////////////////////////////
                    window.resolveLocalFileSystemURL(cordova.file.applicationDirectory + 'www/tarif/AllRiskTariff.pdf', function (fileEntry) {
                        window.resolveLocalFileSystemURL(cordova.file.externalDataDirectory, function (dirEntry) {
                            fileEntry.copyTo(dirEntry, 'file.pdf', function (newFileEntry) {
                                cordova.plugins.fileOpener2.open(newFileEntry.nativeURL, 'application/pdf',
                                {
                                    error: function (e) {
                                        alert('Error status: ' + e.status + ' - Error message: ' + e.message);
                                    },
                                    success: function () {
                                        //alert('file opened successfully');
                                    }
                                }
                                );
                            });
                        });
                    });
                }
        }
        catch (e) {
            alert("lbl_MotorAllRiskTariff: " + e.Message);
        }
    });

    $('#lbl_MotorAllRisk03Tariff').bind('tap', function () {
        //alert('Camera Clicked');
        try {
            //alert(device.platform);
            ////https://www.raymondcamden.com/2016/06/26/linking-to-pdfs-in-cordova-apps
            //For IOS//////////////////////////////////////////////////////////////////////////////////
            if (device.platform.toUpperCase() == 'IOS') {
                //var ref = cordova.InAppBrowser.open('tarif/AllRiskTariff.pdf', '_blank', 'location=no');

                 cordova.plugins.SitewaertsDocumentViewer.viewDocument(
                "tarif/AllRiskTariff.pdf", "application/pdf", {
                    title: "Victoire Tariff",
                    documentView: { closeLabel: "Close" },
                    navigationView: { closeLabel: "Close" },
                    email: { enabled: true },
                    print: { enabled: true },
                    openWith: { enabled: true },
                    search: { enabled: true }
                }, onShow, onClose, onMissingApp, onError);
            }
            else
                if (device.platform.toUpperCase() == 'ANDROID') {
                    //For ANDROId///////////////////////////////////////////////////////////////////////////////////////////////
                    window.resolveLocalFileSystemURL(cordova.file.applicationDirectory + 'www/tarif/AllRiskTariff.pdf', function (fileEntry) {
                        window.resolveLocalFileSystemURL(cordova.file.externalDataDirectory, function (dirEntry) {
                            fileEntry.copyTo(dirEntry, 'file.pdf', function (newFileEntry) {
                                cordova.plugins.fileOpener2.open(newFileEntry.nativeURL, 'application/pdf',
                                {
                                    error: function (e) {
                                        console.log('Error status: ' + e.status + ' - Error message: ' + e.message);
                                    },
                                    success: function () {
                                        //console.log('file opened successfully');
                                    }
                                }
                                );
                            });
                        });
                    });
                }

        }
        catch (e) {
            alert("lbl_MotorAllRisk03Tariff: " + e.Message);
        }

    });

    $('#lbl_BodilyMotorTariff').bind('tap', function () {
        //alert('Camera Clicked');
        try {

            //alert(device.platform);
            ////https://www.raymondcamden.com/2016/06/26/linking-to-pdfs-in-cordova-apps
            //For IOS//////////////////////////////////////////////////////////////////////////////////
            if (device.platform.toUpperCase() == 'IOS') {
                //var ref = cordova.InAppBrowser.open('tarif/BodilyTariff.pdf', '_blank', 'location=no');
                    cordova.plugins.SitewaertsDocumentViewer.viewDocument(
                    "tarif/BodilyTariff.pdf", "application/pdf", {
                        title: "Victoire Tariff",
                        documentView: { closeLabel: "Close" },
                        navigationView: { closeLabel: "Close" },
                        email: { enabled: true },
                        print: { enabled: true },
                        openWith: { enabled: true },
                        search: { enabled: true }
                    }, onShow, onClose, onMissingApp, onError);

            }
            else
                if (device.platform.toUpperCase() == 'ANDROID') {
                    //For ANDROId///////////////////////////////////////////////////////////////////////////////////////////////
                    window.resolveLocalFileSystemURL(cordova.file.applicationDirectory + 'www/tarif/BodilyTariff.pdf', function (fileEntry) {
                        window.resolveLocalFileSystemURL(cordova.file.externalDataDirectory, function (dirEntry) {
                            fileEntry.copyTo(dirEntry, 'file.pdf', function (newFileEntry) {
                                cordova.plugins.fileOpener2.open(newFileEntry.nativeURL, 'application/pdf',
                                {
                                    error: function (e) {
                                        alert('Error status: ' + e.status + ' - Error message: ' + e.message);
                                    },
                                    success: function () {
                                        //alert('file opened successfully');
                                    }
                                }
                                );
                            });
                        });
                    });
                }
        }
        catch (e) {
            alert("lbl_BodilyMotorTariff: " + e.Message);
        }

    });

    $('#lbl_MaterialMotorTariff').bind('tap', function () {
        //alert('Camera Clicked');
        try {
            //alert(device.platform);
            ////https://www.raymondcamden.com/2016/06/26/linking-to-pdfs-in-cordova-apps
            //For IOS//////////////////////////////////////////////////////////////////////////////////
            if (device.platform.toUpperCase() == 'IOS') {
                //var ref = cordova.InAppBrowser.open('tarif/MaterialMotorTariff.pdf', '_blank', 'location=no');
                    cordova.plugins.SitewaertsDocumentViewer.viewDocument(
                    "tarif/MaterialMotorTariff.pdf", "application/pdf", {
                        title: "Victoire Tariff",
                        documentView: { closeLabel: "Close" },
                        navigationView: { closeLabel: "Close" },
                        email: { enabled: true },
                        print: { enabled: true },
                        openWith: { enabled: true },
                        search: { enabled: true }
                    }, onShow, onClose, onMissingApp, onError);
            }
            else
                if (device.platform.toUpperCase() == 'ANDROID') {
                    //For ANDROId///////////////////////////////////////////////////////////////////////////////////////////////
                    window.resolveLocalFileSystemURL(cordova.file.applicationDirectory + 'www/tarif/MaterialMotorTariff.pdf', function (fileEntry) {
                        window.resolveLocalFileSystemURL(cordova.file.externalDataDirectory, function (dirEntry) {
                            fileEntry.copyTo(dirEntry, 'file.pdf', function (newFileEntry) {
                                cordova.plugins.fileOpener2.open(newFileEntry.nativeURL, 'application/pdf',
                                {
                                    error: function (e) {
                                        alert('Error status: ' + e.status + ' - Error message: ' + e.message);
                                    },
                                    success: function () {
                                        //alert('file opened successfully');
                                    }
                                }
                                );
                            });
                        });
                    });
                }

        }
        catch (e) {
            alert("lbl_MaterialMotorTariff: " + e.Message);
        }

    });

    $('#lbl_SinglePremiumTariff').bind('tap', function () {
        //alert('Camera Clicked');
        try {

            //alert(device.platform);
            ////https://www.raymondcamden.com/2016/06/26/linking-to-pdfs-in-cordova-apps
            //For IOS//////////////////////////////////////////////////////////////////////////////////
            if (device.platform.toUpperCase() == 'IOS') {
                //var ref = cordova.InAppBrowser.open('tarif/SinglePremiumTariff.pdf', '_blank', 'location=no');

                cordova.plugins.SitewaertsDocumentViewer.viewDocument(
                "tarif/SinglePremiumTariff.pdf", "application/pdf", {
                    title: "Victoire Tariff",
                    documentView: { closeLabel: "Close" },
                    navigationView: { closeLabel: "Close" },
                    email: { enabled: true },
                    print: { enabled: true },
                    openWith: { enabled: true },
                    search: { enabled: true }
                }, onShow, onClose, onMissingApp, onError);
            }
            else
                if (device.platform.toUpperCase() == 'ANDROID') {
                    //For ANDROId///////////////////////////////////////////////////////////////////////////////////////////////
                    window.resolveLocalFileSystemURL(cordova.file.applicationDirectory + 'www/tarif/SinglePremiumTariff.pdf', function (fileEntry) {
                        window.resolveLocalFileSystemURL(cordova.file.externalDataDirectory, function (dirEntry) {
                            fileEntry.copyTo(dirEntry, 'file.pdf', function (newFileEntry) {
                                cordova.plugins.fileOpener2.open(newFileEntry.nativeURL, 'application/pdf',
                                {
                                    error: function (e) {
                                        alert('Error status: ' + e.status + ' - Error message: ' + e.message);
                                    },
                                    success: function () {
                                        //alert('file opened successfully');
                                    }
                                }
                                );
                            });
                        });
                    });
                }
        }
        catch (e) {
            alert("lbl_SinglePremiumTariff: " + e.Message);
        }

    });

    $('#lbl_TOWINGCONDITIONSTariff').bind('tap', function () {
        //alert('Camera Clicked');
        try {

            //alert(device.platform);
            ////https://www.raymondcamden.com/2016/06/26/linking-to-pdfs-in-cordova-apps
            //For IOS//////////////////////////////////////////////////////////////////////////////////
            if (device.platform.toUpperCase() == 'IOS') {
                //var ref = cordova.InAppBrowser.open('tarif/SinglePremiumTariff.pdf', '_blank', 'location=no');

                cordova.plugins.SitewaertsDocumentViewer.viewDocument(
                "tarif/towingConditions.pdf", "application/pdf", {
                    title: "Towing Conditions",
                    documentView: { closeLabel: "Close" },
                    navigationView: { closeLabel: "Close" },
                    email: { enabled: true },
                    print: { enabled: true },
                    openWith: { enabled: true },
                    search: { enabled: true }
                }, onShow, onClose, onMissingApp, onError);
            }
            else
                if (device.platform.toUpperCase() == 'ANDROID') {
                    //For ANDROId///////////////////////////////////////////////////////////////////////////////////////////////
                    window.resolveLocalFileSystemURL(cordova.file.applicationDirectory + 'www/tarif/towingConditions.pdf', function (fileEntry) {
                        window.resolveLocalFileSystemURL(cordova.file.externalDataDirectory, function (dirEntry) {
                            fileEntry.copyTo(dirEntry, 'file.pdf', function (newFileEntry) {
                                cordova.plugins.fileOpener2.open(newFileEntry.nativeURL, 'application/pdf',
                                {
                                    error: function (e) {
                                        alert('Error status: ' + e.status + ' - Error message: ' + e.message);
                                    },
                                    success: function () {
                                        //alert('file opened successfully');
                                    }
                                }
                                );
                            });
                        });
                    });
                }
        }
        catch (e) {
            alert("lbl_SinglePremiumTariff: " + e.Message);
        }

    });

    $('#lbl_OrangeCardTariff').bind('tap', function () {
        //alert('Camera Clicked');
        try {

            //alert(device.platform);
            ////https://www.raymondcamden.com/2016/06/26/linking-to-pdfs-in-cordova-apps
            //For IOS//////////////////////////////////////////////////////////////////////////////////
            if (device.platform.toUpperCase() == 'IOS') {
                //var ref = cordova.InAppBrowser.open('tarif/OrangeCardTariff.pdf', '_blank', 'location=no');
                cordova.plugins.SitewaertsDocumentViewer.viewDocument(
                "tarif/OrangeCardTariff.pdf", "application/pdf", {
                    title: "Victoire Tariff",
                    documentView: { closeLabel: "Close" },
                    navigationView: { closeLabel: "Close" },
                    email: { enabled: true },
                    print: { enabled: true },
                    openWith: { enabled: true },
                    search: { enabled: true }
                }, onShow, onClose, onMissingApp, onError);
            }
            else
                if (device.platform.toUpperCase() == 'ANDROID') {
                    //For ANDROId///////////////////////////////////////////////////////////////////////////////////////////////
                    window.resolveLocalFileSystemURL(cordova.file.applicationDirectory + 'www/tarif/OrangeCardTariff.pdf', function (fileEntry) {
                        window.resolveLocalFileSystemURL(cordova.file.externalDataDirectory, function (dirEntry) {
                            fileEntry.copyTo(dirEntry, 'file.pdf', function (newFileEntry) {
                                cordova.plugins.fileOpener2.open(newFileEntry.nativeURL, 'application/pdf',
                                {
                                    error: function (e) {
                                        alert('Error status: ' + e.status + ' - Error message: ' + e.message);
                                    },
                                    success: function () {
                                        //alert('file opened successfully');
                                    }
                                }
                                );
                            });
                        });
                    });
                }
        }
        catch (e) {
            alert("lbl_OrangeCardTariff: " + e.Message);
        }

    });

    $('#lbl_MotorcycleAllRiskTariff').bind('tap', function () {
        //alert('Camera Clicked');
        try {
            //alert(device.platform);
            ////https://www.raymondcamden.com/2016/06/26/linking-to-pdfs-in-cordova-apps
            //For IOS//////////////////////////////////////////////////////////////////////////////////
            if (device.platform.toUpperCase() == 'IOS') {
                //var ref = cordova.InAppBrowser.open('tarif/MotorcycleAllRiskTariff.pdf', '_blank', 'location=no');

                cordova.plugins.SitewaertsDocumentViewer.viewDocument(
                "tarif/MotorcycleAllRiskTariff.pdf", "application/pdf", {
                    title: "Victoire Tariff",
                    documentView: { closeLabel: "Close" },
                    navigationView: { closeLabel: "Close" },
                    email: { enabled: true },
                    print: { enabled: true },
                    openWith: { enabled: true },
                    search: { enabled: true }
                }, onShow, onClose, onMissingApp, onError);
            }
            else
                if (device.platform.toUpperCase() == 'ANDROID') {
                    //For ANDROId///////////////////////////////////////////////////////////////////////////////////////////////
                    window.resolveLocalFileSystemURL(cordova.file.applicationDirectory + 'www/tarif/MotorcycleAllRiskTariff.pdf', function (fileEntry) {
                        window.resolveLocalFileSystemURL(cordova.file.externalDataDirectory, function (dirEntry) {
                            fileEntry.copyTo(dirEntry, 'file.pdf', function (newFileEntry) {
                                cordova.plugins.fileOpener2.open(newFileEntry.nativeURL, 'application/pdf',
                                {
                                    error: function (e) {
                                        alert('Error status: ' + e.status + ' - Error message: ' + e.message);
                                    },
                                    success: function () {
                                        //alert('file opened successfully');
                                    }
                                }
                                );
                            });
                        });
                    });
                }

        }
        catch (e) {
            alert("lbl_MotorcycleAllRiskTariff: " + e.Message);
        }

    });

    $('#lbl_MotorcycleTotalLossTariff').bind('tap', function () {
        //alert('Camera Clicked');
        try {

            //alert(device.platform);
            ////https://www.raymondcamden.com/2016/06/26/linking-to-pdfs-in-cordova-apps
            //For IOS//////////////////////////////////////////////////////////////////////////////////
            if (device.platform.toUpperCase() == 'IOS') {
                //var ref = cordova.InAppBrowser.open('tarif/MotorcycleTotalLossTariff.pdf', '_blank', 'location=no');
                cordova.plugins.SitewaertsDocumentViewer.viewDocument(
                "tarif/MotorcycleTotalLossTariff.pdf", "application/pdf", {
                    title: "Victoire Tariff",
                    documentView: { closeLabel: "Close" },
                    navigationView: { closeLabel: "Close" },
                    email: { enabled: true },
                    print: { enabled: true },
                    openWith: { enabled: true },
                    search: { enabled: true }
                }, onShow, onClose, onMissingApp, onError);
            }
            else
                if (device.platform.toUpperCase() == 'ANDROID') {
                    //For ANDROId///////////////////////////////////////////////////////////////////////////////////////////////
                    window.resolveLocalFileSystemURL(cordova.file.applicationDirectory + 'www/tarif/MotorcycleTotalLossTariff.pdf', function (fileEntry) {
                        window.resolveLocalFileSystemURL(cordova.file.externalDataDirectory, function (dirEntry) {
                            fileEntry.copyTo(dirEntry, 'file.pdf', function (newFileEntry) {
                                cordova.plugins.fileOpener2.open(newFileEntry.nativeURL, 'application/pdf',
                                {
                                    error: function (e) {
                                        alert('Error status: ' + e.status + ' - Error message: ' + e.message);
                                    },
                                    success: function () {
                                        //alert('file opened successfully');
                                    }
                                }
                                );
                            });
                        });
                    });
                }
        }
        catch (e) {
            alert("lbl_MotorcycleTotalLossTariff: " + e.Message);
        }

    });

    $('#lbl_TaxiMotorTariff').bind('tap', function () {
        //alert('Camera Clicked');
        try {
            //alert(device.platform);
            ////https://www.raymondcamden.com/2016/06/26/linking-to-pdfs-in-cordova-apps
            //For IOS//////////////////////////////////////////////////////////////////////////////////
            if (device.platform.toUpperCase() == 'IOS') {
                //var ref = cordova.InAppBrowser.open('tarif/TaxiTariff.pdf', '_blank', 'location=no');
                cordova.plugins.SitewaertsDocumentViewer.viewDocument(
                    "tarif/TaxiTariff.pdf", "application/pdf", {
                        title: "Victoire Tariff",
                        documentView: { closeLabel: "Close" },
                        navigationView: { closeLabel: "Close" },
                        email: { enabled: true },
                        print: { enabled: true },
                        openWith: { enabled: true },
                        search: { enabled: true }
                    }, onShow, onClose, onMissingApp, onError);
            }
            else
                if (device.platform.toUpperCase() == 'ANDROID') {
                    //For ANDROId///////////////////////////////////////////////////////////////////////////////////////////////
                    window.resolveLocalFileSystemURL(cordova.file.applicationDirectory + 'www/tarif/TaxiTariff.pdf', function (fileEntry) {
                        window.resolveLocalFileSystemURL(cordova.file.externalDataDirectory, function (dirEntry) {
                            fileEntry.copyTo(dirEntry, 'file.pdf', function (newFileEntry) {
                                cordova.plugins.fileOpener2.open(newFileEntry.nativeURL, 'application/pdf',
                                {
                                    error: function (e) {
                                        alert('Error status: ' + e.status + ' - Error message: ' + e.message);
                                    },
                                    success: function () {
                                        //alert('file opened successfully');
                                    }
                                }
                                );
                            });
                        });
                    });
                }

        }
        catch (e) {
            alert("lbl_TaxiMotorTariff: " + e.Message);
        }

    });

    $('#lbl_VansMotorTariff').bind('tap', function () {
        //alert('Camera Clicked');
        try {

            //alert(device.platform);
            ////https://www.raymondcamden.com/2016/06/26/linking-to-pdfs-in-cordova-apps
            //For IOS//////////////////////////////////////////////////////////////////////////////////
            if (device.platform.toUpperCase() == 'IOS') {
               // var ref = cordova.InAppBrowser.open('tarif/VansTariff.pdf', '_blank', 'location=no');

                cordova.plugins.SitewaertsDocumentViewer.viewDocument(
                "tarif/VansTariff.pdf", "application/pdf", {
                    title: "Victoire Tariff",
                    documentView: { closeLabel: "Close" },
                    navigationView: { closeLabel: "Close" },
                    email: { enabled: true },
                    print: { enabled: true },
                    openWith: { enabled: true },
                    search: { enabled: true }
                }, onShow, onClose, onMissingApp, onError);
            }
            else
                if (device.platform.toUpperCase() == 'ANDROID') {
                    //For ANDROId///////////////////////////////////////////////////////////////////////////////////////////////
                    window.resolveLocalFileSystemURL(cordova.file.applicationDirectory + 'www/tarif/VansTariff.pdf', function (fileEntry) {
                        window.resolveLocalFileSystemURL(cordova.file.externalDataDirectory, function (dirEntry) {
                            fileEntry.copyTo(dirEntry, 'file.pdf', function (newFileEntry) {
                                cordova.plugins.fileOpener2.open(newFileEntry.nativeURL, 'application/pdf',
                                {
                                    error: function (e) {
                                        alert('Error status: ' + e.status + ' - Error message: ' + e.message);
                                    },
                                    success: function () {
                                        //alert('file opened successfully');
                                    }
                                }
                                );
                            });
                        });
                    });
                }
        }
        catch (e) {
            alert("lbl_VansMotorTariff: " + e.Message);
        }

    });

    $('#lbl_WorkmenCompensationTariff').bind('tap', function () {
        //alert('Camera Clicked');
        try {
            //alert(device.platform);
            ////https://www.raymondcamden.com/2016/06/26/linking-to-pdfs-in-cordova-apps
            //For IOS//////////////////////////////////////////////////////////////////////////////////
            if (device.platform.toUpperCase() == 'IOS') {
                //var ref = cordova.InAppBrowser.open('tarif/WorkmenTariff.pdf', '_blank', 'location=no');

                cordova.plugins.SitewaertsDocumentViewer.viewDocument(
                "tarif/WorkmenTariff.pdf", "application/pdf", {
                    title: "Victoire Tariff",
                    documentView: { closeLabel: "Close" },
                    navigationView: { closeLabel: "Close" },
                    email: { enabled: true },
                    print: { enabled: true },
                    openWith: { enabled: true },
                    search: { enabled: true }
                }, onShow, onClose, onMissingApp, onError);
            }
            else
                if (device.platform.toUpperCase() == 'ANDROID') {
                    //For ANDROId///////////////////////////////////////////////////////////////////////////////////////////////
                    window.resolveLocalFileSystemURL(cordova.file.applicationDirectory + 'www/tarif/WorkmenTariff.pdf', function (fileEntry) {
                        window.resolveLocalFileSystemURL(cordova.file.externalDataDirectory, function (dirEntry) {
                            fileEntry.copyTo(dirEntry, 'file.pdf', function (newFileEntry) {
                                cordova.plugins.fileOpener2.open(newFileEntry.nativeURL, 'application/pdf',
                                {
                                    error: function (e) {
                                        alert('Error status: ' + e.status + ' - Error message: ' + e.message);
                                    },
                                    success: function () {
                                        //alert('file opened successfully');
                                    }
                                }
                                );
                            });
                        });
                    });
                }

        }
        catch (e) {
            alert("lbl_WorkmenCompensationTariff: " + e.Message);
        }

    });

    $('#lbl_SchoolLiabilityTariff').bind('tap', function () {
        //alert('Camera Clicked');
        try {

            //alert(device.platform);
            ////https://www.raymondcamden.com/2016/06/26/linking-to-pdfs-in-cordova-apps
            //For IOS//////////////////////////////////////////////////////////////////////////////////
            if (device.platform.toUpperCase() == 'IOS') {
                //var ref = cordova.InAppBrowser.open('tarif/SchoolingTariff.pdf', '_blank', 'location=no');

                cordova.plugins.SitewaertsDocumentViewer.viewDocument(
                "tarif/SchoolingTariff.pdf", "application/pdf", {
                    title: "Victoire Tariff",
                    documentView: { closeLabel: "Close" },
                    navigationView: { closeLabel: "Close" },
                    email: { enabled: true },
                    print: { enabled: true },
                    openWith: { enabled: true },
                    search: { enabled: true }
                }, onShow, onClose, onMissingApp, onError);
            }
            else
                if (device.platform.toUpperCase() == 'ANDROID') {
                    //For ANDROId///////////////////////////////////////////////////////////////////////////////////////////////
                    window.resolveLocalFileSystemURL(cordova.file.applicationDirectory + 'www/tarif/SchoolingTariff.pdf', function (fileEntry) {
                        window.resolveLocalFileSystemURL(cordova.file.externalDataDirectory, function (dirEntry) {
                            fileEntry.copyTo(dirEntry, 'file.pdf', function (newFileEntry) {
                                cordova.plugins.fileOpener2.open(newFileEntry.nativeURL, 'application/pdf',
                                {
                                    error: function (e) {
                                        alert('Error status: ' + e.status + ' - Error message: ' + e.message);
                                    },
                                    success: function () {
                                        //alert('file opened successfully');
                                    }
                                }
                                );
                            });
                        });
                    });
                }
        }
        catch (e) {
            alert("lbl_SchoolLiabilityTariff: " + e.Message);
        }

    });

    $('#lbl_FireTariff').bind('tap', function () {
        //alert('Camera Clicked');
        try {
            //alert(device.platform);
            ////https://www.raymondcamden.com/2016/06/26/linking-to-pdfs-in-cordova-apps
            //For IOS//////////////////////////////////////////////////////////////////////////////////
            if (device.platform.toUpperCase() == 'IOS') {
                //var ref = cordova.InAppBrowser.open('tarif/FireTariff.pdf', '_blank', 'location=no');

                cordova.plugins.SitewaertsDocumentViewer.viewDocument(
                "tarif/FireTariff.pdf", "application/pdf", {
                    title: "Victoire Tariff",
                    documentView: { closeLabel: "Close" },
                    navigationView: { closeLabel: "Close" },
                    email: { enabled: true },
                    print: { enabled: true },
                    openWith: { enabled: true },
                    search: { enabled: true }
                }, onShow, onClose, onMissingApp, onError);
            }
            else
                if (device.platform.toUpperCase() == 'ANDROID') {
                    //For ANDROId///////////////////////////////////////////////////////////////////////////////////////////////
                    window.resolveLocalFileSystemURL(cordova.file.applicationDirectory + 'www/tarif/FireTariff.pdf', function (fileEntry) {
                        window.resolveLocalFileSystemURL(cordova.file.externalDataDirectory, function (dirEntry) {
                            fileEntry.copyTo(dirEntry, 'file.pdf', function (newFileEntry) {
                                cordova.plugins.fileOpener2.open(newFileEntry.nativeURL, 'application/pdf',
                                {
                                    error: function (e) {
                                        alert('Error status: ' + e.status + ' - Error message: ' + e.message);
                                    },
                                    success: function () {
                                        //alert('file opened successfully');
                                    }
                                }
                                );
                            });
                        });
                    });
                }

        }
        catch (e) {
            alert("lbl_FireTariff: " + e.Message);
        }

    });

    $('#lbl_MedicalClassA').bind('tap', function () {
        //alert('Camera Clicked');
        try {
            //alert(device.platform);
            ////https://www.raymondcamden.com/2016/06/26/linking-to-pdfs-in-cordova-apps
            //For IOS//////////////////////////////////////////////////////////////////////////////////
            if (device.platform.toUpperCase() == 'IOS') {
                //var ref = cordova.InAppBrowser.open('tarif/ClassA.pdf', '_blank', 'location=no');

                cordova.plugins.SitewaertsDocumentViewer.viewDocument(
                "tarif/ClassA.pdf", "application/pdf", {
                    title: "Victoire Tariff",
                    documentView: { closeLabel: "Close" },
                    navigationView: { closeLabel: "Close" },
                    email: { enabled: true },
                    print: { enabled: true },
                    openWith: { enabled: true },
                    search: { enabled: true }
                }, onShow, onClose, onMissingApp, onError);
            }
            else
                if (device.platform.toUpperCase() == 'ANDROID') {
                    //For ANDROId///////////////////////////////////////////////////////////////////////////////////////////////
                    window.resolveLocalFileSystemURL(cordova.file.applicationDirectory + 'www/tarif/ClassA.pdf', function (fileEntry) {
                        window.resolveLocalFileSystemURL(cordova.file.externalDataDirectory, function (dirEntry) {
                            fileEntry.copyTo(dirEntry, 'file.pdf', function (newFileEntry) {
                                cordova.plugins.fileOpener2.open(newFileEntry.nativeURL, 'application/pdf',
                                {
                                    error: function (e) {
                                        alert('Error status: ' + e.status + ' - Error message: ' + e.message);
                                    },
                                    success: function () {
                                        //alert('file opened successfully');
                                    }
                                }
                                );
                            });
                        });
                    });
                }

        }
        catch (e) {
            alert("lbl_MedicalClassA: " + e.Message);
        }

    });

    $('#lbl_MedicalClassB').bind('tap', function () {
        //alert('Camera Clicked');
        try {
            //alert(device.platform);
            ////https://www.raymondcamden.com/2016/06/26/linking-to-pdfs-in-cordova-apps
            //For IOS//////////////////////////////////////////////////////////////////////////////////
            if (device.platform.toUpperCase() == 'IOS') {
                //var ref = cordova.InAppBrowser.open('tarif/ClassB.pdf', '_blank', 'location=no');

                cordova.plugins.SitewaertsDocumentViewer.viewDocument(
                "tarif/ClassB.pdf", "application/pdf", {
                    title: "Victoire Tariff",
                    documentView: { closeLabel: "Close" },
                    navigationView: { closeLabel: "Close" },
                    email: { enabled: true },
                    print: { enabled: true },
                    openWith: { enabled: true },
                    search: { enabled: true }
                }, onShow, onClose, onMissingApp, onError);
            }
            else
                if (device.platform.toUpperCase() == 'ANDROID') {
                    //For ANDROId///////////////////////////////////////////////////////////////////////////////////////////////
                    window.resolveLocalFileSystemURL(cordova.file.applicationDirectory + 'www/tarif/ClassB.pdf', function (fileEntry) {
                        window.resolveLocalFileSystemURL(cordova.file.externalDataDirectory, function (dirEntry) {
                            fileEntry.copyTo(dirEntry, 'file.pdf', function (newFileEntry) {
                                cordova.plugins.fileOpener2.open(newFileEntry.nativeURL, 'application/pdf',
                                {
                                    error: function (e) {
                                        alert('Error status: ' + e.status + ' - Error message: ' + e.message);
                                    },
                                    success: function () {
                                        //alert('file opened successfully');
                                    }
                                }
                                );
                            });
                        });
                    });
                }

        }
        catch (e) {
            alert("lbl_MedicalClassB: " + e.Message);
        }

    });

    $('#lbl_MedicalClassSPL').bind('tap', function () {
        //alert('Camera Clicked');
        try {
            //alert(device.platform);
            ////https://www.raymondcamden.com/2016/06/26/linking-to-pdfs-in-cordova-apps
            //For IOS//////////////////////////////////////////////////////////////////////////////////
            if (device.platform.toUpperCase() == 'IOS') {
                //var ref = cordova.InAppBrowser.open('tarif/ClassSPL.pdf', '_blank', 'location=no');

                cordova.plugins.SitewaertsDocumentViewer.viewDocument(
                    "tarif/ClassSPL.pdf", "application/pdf", {
                        title: "Victoire Tariff",
                        documentView: { closeLabel: "Close" },
                        navigationView: { closeLabel: "Close" },
                        email: { enabled: true },
                        print: { enabled: true },
                        openWith: { enabled: true },
                        search: { enabled: true }
                    }, onShow, onClose, onMissingApp, onError);
            }
            else
                if (device.platform.toUpperCase() == 'ANDROID') {
                    //For ANDROId///////////////////////////////////////////////////////////////////////////////////////////////
                    window.resolveLocalFileSystemURL(cordova.file.applicationDirectory + 'www/tarif/ClassSPL.pdf', function (fileEntry) {
                        window.resolveLocalFileSystemURL(cordova.file.externalDataDirectory, function (dirEntry) {
                            fileEntry.copyTo(dirEntry, 'file.pdf', function (newFileEntry) {
                                cordova.plugins.fileOpener2.open(newFileEntry.nativeURL, 'application/pdf',
                                {
                                    error: function (e) {
                                        alert('Error status: ' + e.status + ' - Error message: ' + e.message);
                                    },
                                    success: function () {
                                        //alert('file opened successfully');
                                    }
                                }
                                );
                            });
                        });
                    });
                }

        }
        catch (e) {
            alert("lbl_MedicalClassSPL: " + e.Message);
        }

    });

    $('#lbl_MedicalClassHDIP').bind('tap', function () {
        //alert('Camera Clicked');
        try {
            //alert(device.platform);
            ////https://www.raymondcamden.com/2016/06/26/linking-to-pdfs-in-cordova-apps
            //For IOS//////////////////////////////////////////////////////////////////////////////////
            if (device.platform.toUpperCase() == 'IOS') {
                //var ref = cordova.InAppBrowser.open('tarif/HDIP.pdf', '_blank', 'location=no');

                cordova.plugins.SitewaertsDocumentViewer.viewDocument(
                "tarif/HDIP.pdf", "application/pdf", {
                    title: "Victoire Tariff",
                    documentView: { closeLabel: "Close" },
                    navigationView: { closeLabel: "Close" },
                    email: { enabled: true },
                    print: { enabled: true },
                    openWith: { enabled: true },
                    search: { enabled: true }
                }, onShow, onClose, onMissingApp, onError);
            }
            else
                if (device.platform.toUpperCase() == 'ANDROID') {
                    //For ANDROId///////////////////////////////////////////////////////////////////////////////////////////////
                    window.resolveLocalFileSystemURL(cordova.file.applicationDirectory + 'www/tarif/HDIP.pdf', function (fileEntry) {
                        window.resolveLocalFileSystemURL(cordova.file.externalDataDirectory, function (dirEntry) {
                            fileEntry.copyTo(dirEntry, 'file.pdf', function (newFileEntry) {
                                cordova.plugins.fileOpener2.open(newFileEntry.nativeURL, 'application/pdf',
                                {
                                    error: function (e) {
                                        alert('Error status: ' + e.status + ' - Error message: ' + e.message);
                                    },
                                    success: function () {
                                        //alert('file opened successfully');
                                    }
                                }
                                );
                            });
                        });
                    });
                }

        }
        catch (e) {
            alert("lbl_MedicalClassHDIP: " + e.Message);
        }

    });


    

    $('#lbl_MedicalAllTariff').bind('tap', function () {
        //alert('Camera Clicked');
        try {
            //alert(device.platform);
            ////https://www.raymondcamden.com/2016/06/26/linking-to-pdfs-in-cordova-apps
            //For IOS//////////////////////////////////////////////////////////////////////////////////
            if (device.platform.toUpperCase() == 'IOS') {
                //var ref = cordova.InAppBrowser.open('tarif/Ambulatory85.pdf', '_blank', 'location=no');

                cordova.plugins.SitewaertsDocumentViewer.viewDocument(
                "tarif/VICMedicalTariff2019.pdf", "application/pdf", {
                    title: "Victoire Tariff",
                    documentView: { closeLabel: "Close" },
                    navigationView: { closeLabel: "Close" },
                    email: { enabled: true },
                    print: { enabled: true },
                    openWith: { enabled: true },
                    search: { enabled: true }
                }, onShow, onClose, onMissingApp, onError);
            }
            else
                if (device.platform.toUpperCase() == 'ANDROID') {
                    //For ANDROId///////////////////////////////////////////////////////////////////////////////////////////////
                    window.resolveLocalFileSystemURL(cordova.file.applicationDirectory + 'www/tarif/VICMedicalTariff2019.pdf', function (fileEntry) {
                        window.resolveLocalFileSystemURL(cordova.file.externalDataDirectory, function (dirEntry) {
                            fileEntry.copyTo(dirEntry, 'file.pdf', function (newFileEntry) {
                                cordova.plugins.fileOpener2.open(newFileEntry.nativeURL, 'application/pdf',
                                {
                                    error: function (e) {
                                        alert('Error status: ' + e.status + ' - Error message: ' + e.message);
                                    },
                                    success: function () {
                                        //alert('file opened successfully');
                                    }
                                }
                                );
                            });
                        });
                    });
                }

        }
        catch (e) {
            alert("lbl_MedicalAllTariff: " + e.Message);
        }

    });

    $('#lbl_MedicalClassAmb').bind('tap', function () {
        //alert('Camera Clicked');
        try {
            //alert(device.platform);
            ////https://www.raymondcamden.com/2016/06/26/linking-to-pdfs-in-cordova-apps
            //For IOS//////////////////////////////////////////////////////////////////////////////////
            if (device.platform.toUpperCase() == 'IOS') {
                //var ref = cordova.InAppBrowser.open('tarif/Ambulatory85.pdf', '_blank', 'location=no');

                cordova.plugins.SitewaertsDocumentViewer.viewDocument(
                "tarif/Ambulatory85.pdf", "application/pdf", {
                    title: "Victoire Tariff",
                    documentView: { closeLabel: "Close" },
                    navigationView: { closeLabel: "Close" },
                    email: { enabled: true },
                    print: { enabled: true },
                    openWith: { enabled: true },
                    search: { enabled: true }
                }, onShow, onClose, onMissingApp, onError);
            }
            else
                if (device.platform.toUpperCase() == 'ANDROID') {
                    //For ANDROId///////////////////////////////////////////////////////////////////////////////////////////////
                    window.resolveLocalFileSystemURL(cordova.file.applicationDirectory + 'www/tarif/Ambulatory85.pdf', function (fileEntry) {
                        window.resolveLocalFileSystemURL(cordova.file.externalDataDirectory, function (dirEntry) {
                            fileEntry.copyTo(dirEntry, 'file.pdf', function (newFileEntry) {
                                cordova.plugins.fileOpener2.open(newFileEntry.nativeURL, 'application/pdf',
                                {
                                    error: function (e) {
                                        alert('Error status: ' + e.status + ' - Error message: ' + e.message);
                                    },
                                    success: function () {
                                        //alert('file opened successfully');
                                    }
                                }
                                );
                            });
                        });
                    });
                }

        }
        catch (e) {
            alert("lbl_MedicalClassAmb: " + e.Message);
        }

    });

    $('#lbl_MedicalClassAmbL').bind('tap', function () {
        //alert('Camera Clicked');
        try {
            //alert(device.platform);
            ////https://www.raymondcamden.com/2016/06/26/linking-to-pdfs-in-cordova-apps
            //For IOS//////////////////////////////////////////////////////////////////////////////////
            if (device.platform.toUpperCase() == 'IOS') {
                //var ref = cordova.InAppBrowser.open('tarif/AmbulatoryLimited80.pdf', '_blank', 'location=no');

                cordova.plugins.SitewaertsDocumentViewer.viewDocument(
                "tarif/AmbulatoryLimited80.pdf", "application/pdf", {
                    title: "Victoire Tariff",
                    documentView: { closeLabel: "Close" },
                    navigationView: { closeLabel: "Close" },
                    email: { enabled: true },
                    print: { enabled: true },
                    openWith: { enabled: true },
                    search: { enabled: true }
                }, onShow, onClose, onMissingApp, onError);
            }
            else
                if (device.platform.toUpperCase() == 'ANDROID') {
                    //For ANDROId///////////////////////////////////////////////////////////////////////////////////////////////
                    window.resolveLocalFileSystemURL(cordova.file.applicationDirectory + 'www/tarif/AmbulatoryLimited80.pdf', function (fileEntry) {
                        window.resolveLocalFileSystemURL(cordova.file.externalDataDirectory, function (dirEntry) {
                            fileEntry.copyTo(dirEntry, 'file.pdf', function (newFileEntry) {
                                cordova.plugins.fileOpener2.open(newFileEntry.nativeURL, 'application/pdf',
                                {
                                    error: function (e) {
                                        alert('Error status: ' + e.status + ' - Error message: ' + e.message);
                                    },
                                    success: function () {
                                        //alert('file opened successfully');
                                    }
                                }
                                );
                            });
                        });
                    });
                }

        }
        catch (e) {
            alert("lbl_MedicalClassAmbL: " + e.Message);
        }

    });

    $('#lbl_MedicalClassXPAT').bind('tap', function () {
        //alert('Camera Clicked');
        try {
            //alert(device.platform);
            ////https://www.raymondcamden.com/2016/06/26/linking-to-pdfs-in-cordova-apps
            //For IOS//////////////////////////////////////////////////////////////////////////////////
            if (device.platform.toUpperCase() == 'IOS') {
                //var ref = cordova.InAppBrowser.open('tarif/Expat.pdf', '_blank', 'location=no');
                cordova.plugins.SitewaertsDocumentViewer.viewDocument(
                "tarif/Expat.pdf", "application/pdf", {
                    title: "Victoire Tariff",
                    documentView: { closeLabel: "Close" },
                    navigationView: { closeLabel: "Close" },
                    email: { enabled: true },
                    print: { enabled: true },
                    openWith: { enabled: true },
                    search: { enabled: true }
                }, onShow, onClose, onMissingApp, onError);
            }
            else
                if (device.platform.toUpperCase() == 'ANDROID') {
                    //For ANDROId///////////////////////////////////////////////////////////////////////////////////////////////
                    window.resolveLocalFileSystemURL(cordova.file.applicationDirectory + 'www/tarif/Expat.pdf', function (fileEntry) {
                        window.resolveLocalFileSystemURL(cordova.file.externalDataDirectory, function (dirEntry) {
                            fileEntry.copyTo(dirEntry, 'file.pdf', function (newFileEntry) {
                                cordova.plugins.fileOpener2.open(newFileEntry.nativeURL, 'application/pdf',
                                {
                                    error: function (e) {
                                        alert('Error status: ' + e.status + ' - Error message: ' + e.message);
                                    },
                                    success: function () {
                                        //alert('file opened successfully');
                                    }
                                }
                                );
                            });
                        });
                    });
                }

        }
        catch (e) {
            alert("lbl_MedicalClassXPAT: " + e.Message);
        }

    });

    $('#lbl_AjialU').bind('tap', function () {
        //alert('Camera Clicked');
        try {
            //alert(device.platform);
            ////https://www.raymondcamden.com/2016/06/26/linking-to-pdfs-in-cordova-apps
            //For IOS//////////////////////////////////////////////////////////////////////////////////
            if (device.platform.toUpperCase() == 'IOS') {
                //var ref = cordova.InAppBrowser.open('tarif/U.pdf', '_blank', 'location=no');

                cordova.plugins.SitewaertsDocumentViewer.viewDocument(
                "tarif/U.pdf", "application/pdf", {
                    title: "Victoire Tariff",
                    documentView: { closeLabel: "Close" },
                    navigationView: { closeLabel: "Close" },
                    email: { enabled: true },
                    print: { enabled: true },
                    openWith: { enabled: true },
                    search: { enabled: true }
                }, onShow, onClose, onMissingApp, onError);
            }
            else
                if (device.platform.toUpperCase() == 'ANDROID') {
                    //For ANDROId///////////////////////////////////////////////////////////////////////////////////////////////
                    window.resolveLocalFileSystemURL(cordova.file.applicationDirectory + 'www/tarif/U.pdf', function (fileEntry) {
                        window.resolveLocalFileSystemURL(cordova.file.externalDataDirectory, function (dirEntry) {
                            fileEntry.copyTo(dirEntry, 'file.pdf', function (newFileEntry) {
                                cordova.plugins.fileOpener2.open(newFileEntry.nativeURL, 'application/pdf',
                                {
                                    error: function (e) {
                                        alert('Error status: ' + e.status + ' - Error message: ' + e.message);
                                    },
                                    success: function () {
                                        //alert('file opened successfully');
                                    }
                                }
                                );
                            });
                        });
                    });
                }

        }
        catch (e) {
            alert("lbl_Ajial: " + e.Message);
        }

    });

    $('#lbl_AjialBA').bind('tap', function () {
        //alert('Camera Clicked');
        try {
            //alert(device.platform);
            ////https://www.raymondcamden.com/2016/06/26/linking-to-pdfs-in-cordova-apps
            //For IOS//////////////////////////////////////////////////////////////////////////////////
            if (device.platform.toUpperCase() == 'IOS') {
                //var ref = cordova.InAppBrowser.open('tarif/BA.pdf', '_blank', 'location=no');

                cordova.plugins.SitewaertsDocumentViewer.viewDocument(
                "tarif/BA.pdf", "application/pdf", {
                    title: "Victoire Tariff",
                    documentView: { closeLabel: "Close" },
                    navigationView: { closeLabel: "Close" },
                    email: { enabled: true },
                    print: { enabled: true },
                    openWith: { enabled: true },
                    search: { enabled: true }
                }, onShow, onClose, onMissingApp, onError);
            }
            else
                if (device.platform.toUpperCase() == 'ANDROID') {
                    //For ANDROId///////////////////////////////////////////////////////////////////////////////////////////////
                    window.resolveLocalFileSystemURL(cordova.file.applicationDirectory + 'www/tarif/BA.pdf', function (fileEntry) {
                        window.resolveLocalFileSystemURL(cordova.file.externalDataDirectory, function (dirEntry) {
                            fileEntry.copyTo(dirEntry, 'file.pdf', function (newFileEntry) {
                                cordova.plugins.fileOpener2.open(newFileEntry.nativeURL, 'application/pdf',
                                {
                                    error: function (e) {
                                        alert('Error status: ' + e.status + ' - Error message: ' + e.message);
                                    },
                                    success: function () {
                                        //alert('file opened successfully');
                                    }
                                }
                                );
                            });
                        });
                    });
                }

        }
        catch (e) {
            alert("lbl_Ajial: " + e.Message);
        }

    });

    $('#lbl_AjialSPLF').bind('tap', function () {
        //alert('Camera Clicked');
        try {
            //alert(device.platform);
            ////https://www.raymondcamden.com/2016/06/26/linking-to-pdfs-in-cordova-apps
            //For IOS//////////////////////////////////////////////////////////////////////////////////
            if (device.platform.toUpperCase() == 'IOS') {
                //var ref = cordova.InAppBrowser.open('tarif/SPLF.pdf', '_blank', 'location=no');

                cordova.plugins.SitewaertsDocumentViewer.viewDocument(
                "tarif/SPLF.pdf", "application/pdf", {
                    title: "Victoire Tariff",
                    documentView: { closeLabel: "Close" },
                    navigationView: { closeLabel: "Close" },
                    email: { enabled: true },
                    print: { enabled: true },
                    openWith: { enabled: true },
                    search: { enabled: true }
                }, onShow, onClose, onMissingApp, onError);
            }
            else
                if (device.platform.toUpperCase() == 'ANDROID') {
                    //For ANDROId///////////////////////////////////////////////////////////////////////////////////////////////
                    window.resolveLocalFileSystemURL(cordova.file.applicationDirectory + 'www/tarif/SPLF.pdf', function (fileEntry) {
                        window.resolveLocalFileSystemURL(cordova.file.externalDataDirectory, function (dirEntry) {
                            fileEntry.copyTo(dirEntry, 'file.pdf', function (newFileEntry) {
                                cordova.plugins.fileOpener2.open(newFileEntry.nativeURL, 'application/pdf',
                                {
                                    error: function (e) {
                                        alert('Error status: ' + e.status + ' - Error message: ' + e.message);
                                    },
                                    success: function () {
                                        //alert('file opened successfully');
                                    }
                                }
                                );
                            });
                        });
                    });
                }

        }
        catch (e) {
            alert("lbl_AjialSPLF: " + e.Message);
        }

    });

    $('#lbl_PATariff').bind('tap', function () {
        //alert('Camera Clicked');
        try {
            //alert(device.platform);
            ////https://www.raymondcamden.com/2016/06/26/linking-to-pdfs-in-cordova-apps
            //For IOS//////////////////////////////////////////////////////////////////////////////////
            if (device.platform.toUpperCase() == 'IOS') {
                //var ref = cordova.InAppBrowser.open('tarif/PATariff.pdf', '_blank', 'location=no');

                cordova.plugins.SitewaertsDocumentViewer.viewDocument(
                "tarif/PATariff.pdf", "application/pdf", {
                    title: "Victoire Tariff",
                    documentView: { closeLabel: "Close" },
                    navigationView: { closeLabel: "Close" },
                    email: { enabled: true },
                    print: { enabled: true },
                    openWith: { enabled: true },
                    search: { enabled: true }
                }, onShow, onClose, onMissingApp, onError);
            }
            else
                if (device.platform.toUpperCase() == 'ANDROID') {
                    //For ANDROId///////////////////////////////////////////////////////////////////////////////////////////////
                    window.resolveLocalFileSystemURL(cordova.file.applicationDirectory + 'www/tarif/PATariff.pdf', function (fileEntry) {
                        window.resolveLocalFileSystemURL(cordova.file.externalDataDirectory, function (dirEntry) {
                            fileEntry.copyTo(dirEntry, 'file.pdf', function (newFileEntry) {
                                cordova.plugins.fileOpener2.open(newFileEntry.nativeURL, 'application/pdf',
                                {
                                    error: function (e) {
                                        alert('Error status: ' + e.status + ' - Error message: ' + e.message);
                                    },
                                    success: function () {
                                        //alert('file opened successfully');
                                    }
                                }
                                );
                            });
                        });
                    });
                }

        }
        catch (e) {
            alert("lbl_AjialSPLF: " + e.Message);
        }

    });

    $('#lbl_LCMPTariff').bind('tap', function () {
        //alert('Camera Clicked');
        try {
            //alert(device.platform);
            ////https://www.raymondcamden.com/2016/06/26/linking-to-pdfs-in-cordova-apps
            //For IOS//////////////////////////////////////////////////////////////////////////////////
            if (device.platform.toUpperCase() == 'IOS') {
                //var ref = cordova.InAppBrowser.open('tarif/PATariff.pdf', '_blank', 'location=no');

                cordova.plugins.SitewaertsDocumentViewer.viewDocument(
                "tarif/LCMPtariff.pdf", "application/pdf", {
                    title: "Victoire Tariff",
                    documentView: { closeLabel: "Close" },
                    navigationView: { closeLabel: "Close" },
                    email: { enabled: true },
                    print: { enabled: true },
                    openWith: { enabled: true },
                    search: { enabled: true }
                }, onShow, onClose, onMissingApp, onError);
            }
            else
                if (device.platform.toUpperCase() == 'ANDROID') {
                    //For ANDROId///////////////////////////////////////////////////////////////////////////////////////////////
                    window.resolveLocalFileSystemURL(cordova.file.applicationDirectory + 'www/tarif/LCMPtariff.pdf', function (fileEntry) {
                        window.resolveLocalFileSystemURL(cordova.file.externalDataDirectory, function (dirEntry) {
                            fileEntry.copyTo(dirEntry, 'file.pdf', function (newFileEntry) {
                                cordova.plugins.fileOpener2.open(newFileEntry.nativeURL, 'application/pdf',
                                {
                                    error: function (e) {
                                        alert('Error status: ' + e.status + ' - Error message: ' + e.message);
                                    },
                                    success: function () {
                                        //alert('file opened successfully');
                                    }
                                }
                                );
                            });
                        });
                    });
                }

        }
        catch (e) {
            alert("LCMPtariff: " + e.Message);
        }

    });

});

$(document).on("pagebeforeshow", "#pg_Tarif", function (event, ui) {

    if (localStorage.getItem('UserInfo') == null || localStorage.getItem('UserInfo') == "null") {
        jq_NavigateToPage('pg_BrokerLogin');
    }
});

//onShow
function onShow() {
    window.console.log('document shown');
    //e.g. track document usage
}

//onClose
function onClose() {
    window.console.log('document closed');
    //e.g. remove temp files
}

// onMissingApp
function onMissingApp(appId, installer) {
    if (confirm("Do you want to install the free PDF Viewer App "
            + appId + " for Android?")) {
        installer();
    }
}


// onError
function onError(error) {
    window.console.log(error);
    alert("Sorry! Cannot view document.");
}


