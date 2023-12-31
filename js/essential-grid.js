/* Essential grid general settings */
"use strict";
function eggbfc(winw, resultoption) {
    "use strict";
    var lasttop = winw,
        lastbottom = 0,
        smallest = 9999,
        largest = 0,
        samount = 0,
        lamoung = 0,
        lastamount = 0,
        resultid = 0,
        resultidb = 0,
        responsiveEntries = [{
            width: 1400,
            amount: 4
        }, {
            width: 1170,
            amount: 4
        }, {
            width: 1024,
            amount: 4
        }, {
            width: 960,
            amount: 3
        }, {
            width: 778,
            amount: 3
        }, {
            width: 640,
            amount: 2
        }, {
            width: 480,
            amount: 1
        }];
    if (responsiveEntries != undefined && responsiveEntries.length > 0)
        jQuery.each(responsiveEntries, function(index, obj) {
            var curw = obj.width != undefined ? obj.width : 0,
                cura = obj.amount != undefined ? obj.amount : 0;
            if (smallest > curw) {
                smallest = curw;
                samount = cura;
                resultidb = index;
            }
            if (largest < curw) {
                largest = curw;
                lamount = cura;
            }
            if (curw > lastbottom && curw <= lasttop) {
                lastbottom = curw;
                lastamount = cura;
                resultid = index;
            }
        })
    if (smallest > winw) {
        lastamount = samount;
        resultid = resultidb;
    }
    var obj = new Object;
    obj.index = resultid;
    obj.column = lastamount;
    if (resultoption == "id")
        return obj;
    else
        return lastamount;
}
if ("cobbles" == "even") {
    var coh = 0,
        container = jQuery("#esg-grid-6-1");
    var cwidth = container.width(),
        ar = "4:4",
        gbfc = eggbfc(jQuery(window).width(), "id"),
        row = 2;
    ar = ar.split(":");
    aratio = parseInt(ar[0], 0) / parseInt(ar[1], 0);
    coh = cwidth / aratio;
    coh = coh / gbfc.column * row;
    var ul = container.find("ul").first();
    ul.css({
        display: "block",
        height: coh + "px"
    });
}

/* Settings for "Lessons: cobbles" page grid */
var essapi_6;
jQuery(document).ready(function() {
    "use strict";
    essapi_6 = jQuery("#esg-grid-6-1").tpessential({
        gridID: 6,
        layout: "cobbles",
        forceFullWidth: "off",
        lazyLoad: "off",
        row: 2,
        loadMoreAjaxToken: "9da8b58ca9",
        loadMoreAjaxUrl: "#",
        loadMoreAjaxAction: "Essential_Grid_Front_request_ajax",
        ajaxContentTarget: "ess-grid-ajax-container-",
        ajaxScrollToOffset: "0",
        ajaxCloseButton: "off",
        ajaxContentSliding: "on",
        ajaxScrollToOnLoad: "on",
        ajaxNavButton: "off",
        ajaxCloseType: "type1",
        ajaxCloseInner: "false",
        ajaxCloseStyle: "light",
        ajaxClosePosition: "tr",
        space: 30,
        pageAnimation: "fade",
        paginationScrollToTop: "off",
        spinner: "spinner0",
        lightBoxMode: "single",
        animSpeed: 1000,
        delayBasic: 1,
        mainhoverdelay: 1,
        filterType: "single",
        showDropFilter: "hover",
        filterGroupClass: "esg-fgc-6",
        googleFonts: ["Open+Sans:300,400,600,700,800", "Raleway:100,200,300,400,500,600,700,800,900", "Droid+Serif:400,700", "Lato:400,100,300,300italic,400italic,700,700italic,900,900italic"],
        aspectratio: "4:4",
        responsiveEntries: [{
            width: 1400,
            amount: 4
        }, {
            width: 1170,
            amount: 4
        }, {
            width: 1024,
            amount: 4
        }, {
            width: 960,
            amount: 3
        }, {
            width: 778,
            amount: 3
        }, {
            width: 640,
            amount: 2
        }, {
            width: 480,
            amount: 1
        }]
    });

    try {
        jQuery("#esg-grid-6-1 .esgbox").esgbox({
            padding: [0, 0, 0, 0],
            afterLoad: function() {
                if (this.element.hasClass("esgboxhtml5")) {
                    var mp = this.element.data("mp4"),
                        ogv = this.element.data("ogv"),
                        webm = this.element.data("webm");
                    this.content = '<div style="width:100%;height:100%;"><video autoplay="true" loop="" class="rowbgimage" poster="" width="100%" height="auto"><source src="' + mp + '" type="video/mp4"><source src="' + webm + '" type="video/webm"><source src="' + ogv + '" type="video/ogg"></video></div>';
                    var riint = setInterval(function() {
                        jQuery(window).trigger("resize");
                    }, 100);
                    setTimeout(function() {
                        clearInterval(riint);
                    }, 2500);
                };
            },
            beforeShow: function() {
                this.title = jQuery(this.element).attr('lgtitle');
                if (this.title) {
                    this.title = "";
                    this.title = '<div style="padding:0px 0px 0px 0px">' + this.title + '</div>';
                }
            },
            afterShow: function() {},
            openEffect: "fade",
            closeEffect: "fade",
            nextEffect: "fade",
            prevEffect: "fade",
            openSpeed: "normal",
            closeSpeed: "normal",
            nextSpeed: "normal",
            prevSpeed: "normal",
            helpers: {
                media: {},
                title: {
                    type: ""
                }
            }
        });

    } catch (e) {}

});

if ("even" == "even") {
    var coh = 0,
        container = jQuery("#esg-grid-2-1");
    var cwidth = container.width(),
        ar = "4:3",
        gbfc = eggbfc(jQuery(window).width(), "id"),
        row = 2;
    ar = ar.split(":");
    aratio = parseInt(ar[0], 0) / parseInt(ar[1], 0);
    coh = cwidth / aratio;
    coh = coh / gbfc.column * row;
    var ul = container.find("ul").first();
    ul.css({
        display: "block",
        height: coh + "px"
    });
}

if ("masonry" == "even") {
    var coh = 0,
        container = jQuery("#esg-grid-7-1");
    var cwidth = container.width(),
        ar = "4:3",
        gbfc = eggbfc(jQuery(window).width(), "id"),
        row = 3;
    ar = ar.split(":");
    aratio = parseInt(ar[0], 0) / parseInt(ar[1], 0);
    coh = cwidth / aratio;
    coh = coh / gbfc.column * row;
    var ul = container.find("ul").first();
    ul.css({
        display: "block",
        height: coh + "px"
    });
}

/* Settings for "Our Team" page grid */
var essapi_2;
jQuery(document).ready(function() {
    "use strict";
    essapi_2 = jQuery("#esg-grid-2-1").tpessential({
        gridID: 2,
        layout: "even",
        forceFullWidth: "off",
        lazyLoad: "off",
        row: 9999,
        loadMoreAjaxToken: "9da8b58ca9",
        loadMoreAjaxUrl: "#",
        loadMoreAjaxAction: "Essential_Grid_Front_request_ajax",
        ajaxContentTarget: "ess-grid-ajax-container-",
        ajaxScrollToOffset: "0",
        ajaxCloseButton: "off",
        ajaxContentSliding: "on",
        ajaxScrollToOnLoad: "on",
        ajaxNavButton: "off",
        ajaxCloseType: "type1",
        ajaxCloseInner: "false",
        ajaxCloseStyle: "light",
        ajaxClosePosition: "tr",
        space: 30,
        pageAnimation: "fade",
        paginationScrollToTop: "off",
        spinner: "spinner0",
        evenGridMasonrySkinPusher: "off",
        lightBoxMode: "single",
        animSpeed: 1000,
        delayBasic: 1,
        mainhoverdelay: 1,
        filterType: "single",
        showDropFilter: "hover",
        filterGroupClass: "esg-fgc-2",
        googleFonts: ['Open+Sans:300,400,600,700,800', 'Raleway:100,200,300,400,500,600,700,800,900', 'Droid+Serif:400,700', 'Lato:400,100,300,300italic,400italic,700,700italic,900,900italic'],
        aspectratio: "4:3",
        responsiveEntries: [{
            width: 1400,
            amount: 4
        }, {
            width: 1170,
            amount: 4
        }, {
            width: 1024,
            amount: 4
        }, {
            width: 960,
            amount: 3
        }, {
            width: 778,
            amount: 2
        }, {
            width: 640,
            amount: 2
        }, {
            width: 480,
            amount: 1
        }]
    });

    try {
        jQuery("#esg-grid-2-1 .esgbox").esgbox({
            padding: [0, 0, 0, 0],
            afterLoad: function() {
                if (this.element.hasClass("esgboxhtml5")) {
                    var mp = this.element.data("mp4"),
                        ogv = this.element.data("ogv"),
                        webm = this.element.data("webm");
                    this.content = '<div style="width:100%;height:100%;"><video autoplay="true" loop="" class="rowbgimage" poster="" width="100%" height="auto"><source src="' + mp + '" type="video/mp4"><source src="' + webm + '" type="video/webm"><source src="' + ogv + '" type="video/ogg"></video></div>';
                    var riint = setInterval(function() {
                        jQuery(window).trigger("resize");
                    }, 100);
                    setTimeout(function() {
                        clearInterval(riint);
                    }, 2500);
                };
            },
            beforeShow: function() {
                this.title = jQuery(this.element).attr('lgtitle');
                if (this.title) {
                    this.title = "";
                    this.title = '<div style="padding:0px 0px 0px 0px">' + this.title + '</div>';
                }
            },
            afterShow: function() {},
            openEffect: 'fade',
            closeEffect: 'fade',
            nextEffect: 'fade',
            prevEffect: 'fade',
            openSpeed: 'normal',
            closeSpeed: 'normal',
            nextSpeed: 'normal',
            prevSpeed: 'normal',
            helpers: {
                media: {},
                title: {
                    type: ""
                }
            }
        });

    } catch (e) {}

});
var essapi_7;
jQuery(document).ready(function() {
    "use strict";
    essapi_7 = jQuery("#esg-grid-7-1").tpessential({
        gridID: 7,
        layout: "masonry",
        forceFullWidth: "off",
        lazyLoad: "off",
        row: 3,
        loadMoreAjaxToken: "c983c8e72b",
        loadMoreAjaxUrl: "#",
        loadMoreAjaxAction: "Essential_Grid_Front_request_ajax",
        ajaxContentTarget: "ess-grid-ajax-container-",
        ajaxScrollToOffset: "0",
        ajaxCloseButton: "off",
        ajaxContentSliding: "on",
        ajaxScrollToOnLoad: "on",
        ajaxNavButton: "off",
        ajaxCloseType: "type1",
        ajaxCloseInner: "false",
        ajaxCloseStyle: "light",
        ajaxClosePosition: "tr",
        space: 30,
        pageAnimation: "fade",
        paginationScrollToTop: "off",
        spinner: "spinner0",
        lightBoxMode: "single",
        animSpeed: 1000,
        delayBasic: 1,
        mainhoverdelay: 1,
        filterType: "single",
        showDropFilter: "hover",
        filterGroupClass: "esg-fgc-7",
        googleFonts: ['Open+Sans:300,400,600,700,800', 'Raleway:100,200,300,400,500,600,700,800,900', 'Droid+Serif:400,700', 'Lato:400,100,300,300italic,400italic,700,700italic,900,900italic'],
        responsiveEntries: [{
            width: 1400,
            amount: 4
        }, {
            width: 1170,
            amount: 4
        }, {
            width: 1024,
            amount: 4
        }, {
            width: 960,
            amount: 4
        }, {
            width: 778,
            amount: 3
        }, {
            width: 640,
            amount: 2
        }, {
            width: 480,
            amount: 1
        }]
    });

    try {
        jQuery("#esg-grid-7-1 .esgbox").esgbox({
            padding: [0, 0, 0, 0],
            afterLoad: function() {
                if (this.element.hasClass("esgboxhtml5")) {
                    var mp = this.element.data("mp4"),
                        ogv = this.element.data("ogv"),
                        webm = this.element.data("webm");
                    this.content = '<div style="width:100%;height:100%;"><video autoplay="true" loop="" class="rowbgimage" poster="" width="100%" height="auto"><source src="' + mp + '" type="video/mp4"><source src="' + webm + '" type="video/webm"><source src="' + ogv + '" type="video/ogg"></video></div>';
                    var riint = setInterval(function() {
                        jQuery(window).trigger("resize");
                    }, 100);
                    setTimeout(function() {
                        clearInterval(riint);
                    }, 2500);
                };
            },
            beforeShow: function() {
                this.title = jQuery(this.element).attr('lgtitle');
                if (this.title) {
                    this.title = "";
                    this.title = '<div style="padding:0">' + this.title + '</div>';
                }
            },
            afterShow: function() {},
            openEffect: 'fade',
            closeEffect: 'fade',
            nextEffect: 'fade',
            prevEffect: 'fade',
            openSpeed: 'normal',
            closeSpeed: 'normal',
            nextSpeed: 'normal',
            prevSpeed: 'normal',
            helpers: {
                media: {},
                title: {
                    type: ""
                }
            }
        });

    } catch (e) {}

});


