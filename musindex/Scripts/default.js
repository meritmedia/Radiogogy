var errColor = "hsla(3,50%,80%,1)";
var noErrColor = "hsla(63,50%,80%,1)";
var DCURL = "https://fb.beatfreaks.com/DataConnect/Musindex/";
var fbObj = "";
var ipObj = "";
var submissionsObj = "";
var idCounter = 0;
var previousSubmissions = 0;
window.fbAsyncInit = function () {
    FB.init({
        appId: '397759553599056',
        xfbml: true,
        version: 'v2.9'
    });

    // ADD ADDITIONAL FACEBOOK CODE HERE
    function onLogin(response) {
        if (response.status == 'connected') {
            FB.api('/me?fields=id,name,email,first_name', function (data) {
                //var welcomeBlock = document.getElementById('fb-welcome');
               // welcomeBlock.innerHTML = 'Hello, ' + data.first_name + '!';
                window.fbObj = data;
                if (fbObj.length > 0) {
                   // console.log("onLogin: " + fbObj.id);
                    idCounter++;
                }
                var myObj = $.getJSON('//ipinfo.io/json', function (data) {
                    window.ipObj = data;
                })
                    .done(function (response) {
                    //    console.log("onLogin: " + ipObj.ip);
                        idCounter++;
                        logAccess(idCounter);

                    });


                 //console.log(fbObj);
                // console.log("Data ID= " + data.id);
                //appLogin(data.id, '397759553599056', data.first_name);
            });

            FB.api(
                '/me',
                'GET',
                { "fields": "id,name,email,first_name" },
                function (response) {
                    if (fbObj === undefined) {
                        window.fbObj = response;
                      //  console.log("FB.api: " + fbObj.id);
                    }
                    else {
                      //  console.log("FB.api: " + fbObj.id);
                    }
                   
                }
            );

        }
    }

    FB.getLoginStatus(function (response) {
        // Check login status on load, and if the user is
        // already logged in, go directly to the welcome message.
        if (response.status == 'connected') {
            onLogin(response);
        } else {
            // Otherwise, show Login dialog first.
            FB.login(function (response) {
                onLogin(response);
            }, { scope: 'user_friends, email' });
        }
    });
};

(function (d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) { return; }
    js = d.createElement(s); js.id = id;
    js.src = "//connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));


function logAccess(idCounter) {
    // console.log("idCounter: " + idCounter);
    if (idCounter >= 1) {
        gotoURL = DCURL + "LogAccess";
        $.get(gotoURL,
            {
                fbID: fbObj.id,
                fbEmail: fbObj.email,
                fbName: fbObj.name,
                ipAddress: ipObj.ip, 
                ipHostname: ipObj.hostname,
                ipCity: ipObj.city,
                ipRegion: ipObj.region,
                ipCountry: ipObj.country,
                ipPostal: ipObj.postal,
                ipLoc: ipObj.loc,
                ipOrg: ipObj.org
            })
            .done(function (data) {
              //  console.log(data);
                submissionsObj = JSON.parse(data);
                if (submissionsObj.length > 0) {
                 //   console.log("You have previous submissions");
                    window.previousSubmissions++;
                    previousSubmissionsAddBtn(window.previousSubmissions);
                    submissionsList(submissionsObj);
                }
                //console.log("Length of myData: " + myData.length);
            });
    }
}


/* END FACEBOOK */

function previousSubmissionsAddBtn(previousSubmissions) {
    if (previousSubmissions === 1) {
        $(".subMenu").append("<span id='submissionsNavBtn2' style='padding:4pt;white-space:nowrap;'><a href='#'>Edit Previous Submissions</a></span>");
        window.previousSubmissions++;
    }
}

$("#about p:nth-of-type(1)").load("text/default1.html");
$("#about p:nth-of-type(2)").load("text/default2.html");
$("#EventFormReg").load("text/eventFormReg.html");
$("#EventFormSearch").load("text/eventFormSearch.html");
$("#ActFormReg").load("text/actFormReg.html");
$("#ActFormSearch").load("text/actFormSearch.html");
$("#contact").load("text/contact.html");
$("#usage").load("text/usage.html");

function hideMe800(elem) {
    $(elem).hide(800);
}

$(".myLinker").click(function () {
    var thisRef = $(this).attr("href");
    //hideMe800(".mySections");
    //$(thisRef).slideDown();
    jumpTo(thisRef);
})

$(document).click(function () {
    hideMe800("#intro");
});

function jumpTo(elem) {
    var target = $(elem);
    var topOffset = parseInt(target.offset().top) - 80;
    $('html, body').animate({ scrollTop: topOffset }, 1000);
}
function gotoForm(elem,editBtn,btnActivate) {
    //console.log("elem: " + elem);
    var target = $("#mainForms");
    var topOffset = parseInt(target.offset().top) - 80;
    //console.log(topOffset);
    $('html, body').animate({ scrollTop: topOffset }, 1000);
    var myElem = $(elem);
  //  console.log(elem + " sliding down");
    if (editBtn !== "") {
      // console.log("gotoForm...")
        if (btnActivate === 0) {
            console.log(editBtn + ":" + btnActivate);
            $(editBtn).prop("disabled", true);
            $(editBtn).hide();
        } else {
          //  console.log(editBtn + ":" + btnActivate);
            $(editBtn).prop("disabled", false);
            $(editBtn).show();
        }
    }
    $(elem).slideDown();
}

$(".regEvent").click(function () { 
    hideMe800(".initForm");
    registerFormClear("Event");
    gotoForm("#EventFormReg","#eventFormRegSubBtn",1);
});
$(".findEvent").click(function () {
    hideMe800(".initForm");
    gotoForm("#EventFormSearch","#eventFormRegSubBtn",0);
});
$(".regAct").click(function () {
    hideMe800(".initForm");
    registerFormClear("Artist");
    gotoForm("#ActFormReg","#actFormRegSubBtn",1);
});
$(".findAct").click(function () {
    hideMe800(".initForm");
    gotoForm("#ActFormSearch","#actFormRegSubBtn",0);
});

jQuery(document.body).on("click", ".cancelSub", function () {
    $("#actFormRegErrMsg").html("");
    hideMe800(".initForm");
    //$('html, body').animate({ scrollTop: 0 }, 1000);
    $(window.opera ? 'html' : 'html, body').animate({ scrollTop: 0 }, 1000);
});

function requiredVal(elem) {
    var goodToGo = 0;
    var myElem = "";
    if ($("input[name=" + elem + "]").attr("name") === undefined) {
        myElem = $("textarea[name=" + elem + "]");
    } else {
        myElem = $("input[name=" + elem + "]");
    }
    var myElemVal = myElem.val();
    if (myElemVal === "") {
        myElem.css("background-color", errColor);
        goodToGo++;
    }
    else {
        myElem.css("background-color", noErrColor);
    }
    return goodToGo;
}

function checkemail(elem) {
    var goodToGo = 0;
    var myElem =  $("input[name=" + elem + "]");
    var str = myElem.val();
    var filter = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z]{2,4})+$/;
    if (filter.test(str)) {
        myElem.css("background-color", noErrColor);

    } else {
        myElem.css("background-color", errColor);
        goodToGo++;
    }
    return goodToGo;
}


function isSearchable(elem, toggle) {
    var testVal = 1;
    if (toggle === 1) {
        testVal = 0
    }
    if (parseInt($(elem).val()) === testVal) {

        $(elem).val(1);
        $(elem + "Btn").val('Include in searches? YES');
        $(elem + "Btn").css("background-color", "hsla(63,50%,80%,1)");
    } else {

        $(elem).val(0);
        $(elem + "Btn").val('Include in searches? NO');
        $(elem + "Btn").css("background-color", "hsla(3,50%,80%,1)");
    }

}



var decodeObj = "";

function writeDropDown(elem, fieldName, myDescription,selectedValue) {
    var dropDownStr = "<select id=\"" + fieldName + "\" name=\"" + fieldName + "\" required><option value=\"\">" + myDescription + "</option>";
    var selectThis = "";
    for (i = 0; i < decodeObj.length; i++) {

        if ( decodeObj[i].decodeid  == selectedValue  ) {
            selectThis = " selected = \"selected\" ";
        }
        else {
            selectThis = "";
        }
        dropDownStr += "<option value=\"" + decodeObj[i].decodeid + "\" " + selectThis + ">" + decodeObj[i].value + "</option>";
    }
    dropDownStr += "</select>";
    $(elem).html(dropDownStr);
}

function loadDecode(safeLbl, elem, fieldName, myDescription, selectedValue) {
    gotoURL = DCURL + "GetDecode";
    $.get(gotoURL,
        { safelbl: safeLbl })
        .done(function (data) {
            decodeObj = JSON.parse(data);
            //console.log(decodeObj);
            writeDropDown(elem, fieldName, myDescription,selectedValue);
        })
}

$("#eventNavBtn").click(function () {
    $(window.opera ? 'html' : 'html, body').animate({ scrollTop: 0 }, 1000);
    $("#eventNavBtn2").click()
});
$("#artistNavBtn").click(function () {
    $(window.opera ? 'html' : 'html, body').animate({  scrollTop: 0 }, 1000);
    $("#artistNavBtn2").click()
});

$("#eventNavBtn2").click(function () {
    if ( $(".navbar-collapse").hasClass("in")) {
        $("button.navbar-toggle").click();
       }
    $(".classMenu").hide(800);
    hideMe800("#section2");
    $("#eventCoordinatorNav").slideToggle(800);
})

$("#artistNavBtn2").click(function () {
    if ($(".navbar-collapse").hasClass("in")) {
        $("button.navbar-toggle").click();
    }
    hideMe800("#section2");
        $(".classMenu").hide(800);
        $("#artistNav").slideToggle(800);

})

jQuery(document.body).on("click", "#submissionsNavBtn2",function () {

    if ($(".navbar-collapse").hasClass("in")) {
        $("button.navbar-toggle").click();
    }
    $(".classMenu").hide(800);
    $("#section2").slideDown();
    //gotoForm("#section2");

})



$("button.navbar-toggle").click(function () {
    if ($(".navbar-collapse").hasClass("collapse")) {
        $(".classMenu").hide(800);
    }
});


$(window).scroll(function () {
   // console.log($(window).scrollTop());
    if ($(window).scrollTop() > 370) {
        $("#stickyHeader").show();
    }
    else
    {
        $("#stickyHeader").hide();
    }
});


$("#stickyHeader button.navbar-toggle").click(function () {
   // console.log("#stickyHeader button.navbar-toggle");
    $("#stickyHeader .navbar-collapse").css("background-color", "hsla(205,60%,30%,1)");
    if ($("#stickyHeader.navbar-collapse").hasClass("in")) {
        $("#stickyHeader .navbar-collapse").css("background-color", "hsla(205,60%,30%,1)");
    }
})


function submissionsList(submissionsObj) {
    var mySubList = "<div id='submissionsList'>";
    for (i = 0; i < submissionsObj.length; i++) {
        mySubList += "<div id='" + submissionsObj[i].miType + "|" + submissionsObj[i].miID +"' class='submissionsListDetail'>";
        mySubList += "<span>" + submissionsObj[i].miName + "</span>";
        mySubList += "<span>" + submissionsObj[i].miType + "</span>";
        mySubList += "<span>" + submissionsObj[i].miSearchable + "</span>";
        mySubList += "<span>" + submissionsObj[i].timestamp + "</span>";
        mySubList += "</div>";
    }
    mySubList += "</div>";
    //console.log(mySubList);
    $("#submissions").html(mySubList);
}

jQuery(document.body).on("click", ".submissionsListDetail", function () {
    var thisID = $(this).attr("id");
    var editObj = thisID.split("|");
    var editBtn = "";
    var btnActivate = 1;
    if (editObj[0] == 'Artist') {
        editBtn = "#actFormRegSubBtn";
    } else {
        editBtn = "#eventFormRegSubBtn";
    }
   // editObj[0] is either "Artist" or "Event" 
    $.post(DCURL + "getSubmission" + editObj[0] , {
        fbID: fbObj.id,
        miType: editObj[0],
        miID: editObj[1]
    })
        .done(function (data) {
            dataObj = JSON.parse(data);
          // console.log(dataObj);
            formPopulate(editObj[0], data,editBtn,btnActivate);
            //gotoForm("#ActFormReg");
        })
})

function formPopulate(miType, data, editBtn, btnActivate) {



    var dataObj = JSON.parse(data);


    // console.log("miType: " + miType);
    if (miType === 'Artist') {
        // actFormPopulate(dataObj);
        $.when(actFormPopulate(dataObj)).done(function () {
            //  console.log("ActForm data loaded");
            gotoForm("#ActFormReg", editBtn,btnActivate);
        })

    } else {

        $.when(eventFormPopulate(dataObj)).done(function () {
            console.log("Event Form data loaded");
            gotoForm("#EventFormReg", editBtn, btnActivate);

        })

    }
}

function eventFormPopulate(dataObj) {
    var thisObj = dataObj; //JSON.parse(dataObj);
    $.each(thisObj, function (key, innerjson) {
        eventID = innerjson.eventid;
        eventName = innerjson.eventName;
        eventDate = innerjson.eventDate;
        startTime = innerjson.startTime;
        endDate = innerjson.endDate;
        endTime = innerjson.endTime;
        eventAddress = innerjson.eventAddress;
        eventCity = innerjson.eventCity;
        eventState = innerjson.eventState;
        sponsor = innerjson.sponsor;
        eventContactName = innerjson.eventContactName;
        eventEmail = innerjson.eventEmail;
        eventPhone = innerjson.eventPhone;
        eventWeb = innerjson.eventWeb;
        fbEventID = innerjson.fbEventID;
        eventDescription = innerjson.eventDescription;
        addlinfo = innerjson.addlinfo;
        eventSearchable = innerjson.eventSearchable;
        console.log("eventSearchable: " + eventSearchable);
        $("input[name=eventID]").val(eventID);
        $("input[name=eventName]").val(eventName);
        $("input[name=eventDate]").val(eventDate);
        $("input[name=startTime]").val(startTime);
        $("input[name=endDate]").val(endDate);
        $("input[name=endTime]").val(endTime);
        $("input[name=eventAddress]").val(eventAddress);
        $("input[name=eventCity]").val(eventCity);
        loadDecode("stateShort", "#eventStateSel", "eventState", "State", eventState);
        $("input[name=sponsor]").val(sponsor);
        $("input[name=eventContactName]").val(eventContactName);
        $("input[name=eventEmail]").val(eventEmail);
        $("input[name=eventPhone]").val(eventPhone);
        $("input[name=eventWeb]").val(eventWeb);
        $("input[name=fbEventID]").val(fbEventID);

        $("textarea[name=eventDescription]").val(eventDescription);
        $("textarea[name=addlinfo]").val(addlinfo);

        $("#eventSearchable").val(eventSearchable);
        isSearchable("#eventSearchable",0);


    });
}

function actFormPopulate(dataObj) {
    var thisObj = dataObj; //JSON.parse(dataObj);
 //   console.log("thisObj:" + thisObj);
    $.each(thisObj, function (key, innerjson) {
        actID = innerjson.actid;
        actName = innerjson.actName;
        actContactName = innerjson.actContactName;
        style = innerjson.style;
        coversRatio = innerjson.coversRatio;
        yearFormed = innerjson.yearFormed;
        actWeb = innerjson.actWeb;
        actEmail = innerjson.actEmail;
        actPhone = innerjson.actPhone;
        actCity = innerjson.actCity;
        actState = innerjson.actState;
        bio = innerjson.bio;
        rider = innerjson.rider;
        price = innerjson.price;
        requiresCartage = innerjson.requiresCartage;
        fbPageID = innerjson.fbPageID;
        actSearchable = innerjson.actSearchable;
        $("input[name=actID]").val(actID);
        $("input[name=actName]").val(actName);
        $("input[name=actContactName]").val(actContactName);

        //$("select[name=style] option[value=" + style + "]").attr('selected', 'selected');

        loadDecode("actStyle", "#styleDropdown", "style", "Musical/Artistic Style", style);

        $("input[name=coversRatio]").attr("value", coversRatio);
        $("#coversRatio").attr("value", coversRatio);
        $("#coversRatioValue").html(coversRatio + "%");

        $("input[name=yearFormed]").attr("value", yearFormed);
        $("#yearFormedValue").html(yearFormed);
        $("#yearFormed").attr("value", yearFormed);

        $("input[name=actWeb]").val(actWeb);
        $("input[name=actEmail]").val(actEmail);
        $("input[name=actPhone]").val(actPhone);
        $("input[name=actCity]").val(actCity);


        loadDecode("stateShort", "#actStateSel", "actState", "State", actState);

        $("textarea[name=bio]").val(bio);
        $("textarea[name=rider]").val(rider);
        $("input[name=price]").val(price);
        $("input[name=requiresCartage]").val(requiresCartage);
        if (requiresCartage === "1") {
            $("input[name=requiresCartageCB]").prop("checked", true);
        }
        else {
            $("input[name=requiresCartageCB]").prop("checked", false);
        }
        $("input[name=fbPageID]").val(fbPageID);
        if (actSearchable === "0") {

        }

        $("#actSearchable").val(actSearchable);
        isSearchable("#actSearchable",0);
    });
}

function registerFormClear(miType) {
    if (miType === 'Artist') {
        registerFormClearArtist();
    }
    else {
        registerFormClearEvent();
    }
}

function registerFormClearArtist() {
    loadDecode("stateShort", "#actStateSel", "actState", "State", "");
    loadDecode("actStyle", "#styleDropdown", "style", "Musical/Artistic Style", "");

    $("input[name=actID]").val("");
    $("input[name=actName]").val("");
    $("input[name=actContactName]").val("");
    $("select[name=style] option[value='']").attr('selected', 'selected');
    
    $("input[name=coversRatio]").attr("value", "0");
    $("#coversRatio").attr("value", "0");
    $("#coversRatioValue").html("0%");
    $("input[name=yearFormed]").attr("value", "2017");
    $("#yearFormedValue").html("2017");
    $("#yearFormed").attr("value", "2017");
    $("input[name=actWeb]").val("");
    $("input[name=actEmail]").val("");
    $("input[name=actPhone]").val("");
    $("input[name=actCity]").val("");

    $("textarea[name=bio]").val("");
    $("textarea[name=rider]").val("");
    $("input[name=price]").val("0.00");
    $("input[name=requiresCartage]").val("0");
    $("input[name=requiresCartageCB]").prop("checked", false);
    $("input[name=fbPageID]").val("");
    $("#actSearchable").val("0");
    isSearchable("#actSearchable");
}

function registerFormClearEvent() {
    $("input[name=eventID]").val("");

    loadDecode("stateShort", "#eventStateSel", "eventState", "State", "");
    $("input[name=eventName]").val("");
    $("input[name=eventContactName]").val("");
    $("input[name=sponsor]").val("");
    $("textarea[name=eventDescription]").val("");
    $("textarea[name=addlinfo]").val("");
    $("input[name=eventDate]").val("");
    $("input[name=startTime]").val("");
    $("input[name=endDate]").val("");
    $("input[name=endTime]").val("");
    $("input[name=eventAddress]").val("");
    $("input[name=eventWeb]").val("");
    $("input[name=eventEmail]").val("");
    $("input[name=eventPhone]").val("");
    $("input[name=eventCity]").val("");
    $("input[name=fbEventID]").val("");
    $("eventSearchable").val("0");
    isSearchable("#eventSearchable");
}