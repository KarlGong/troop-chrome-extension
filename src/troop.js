$(function () {
    $("table").resizableColumns();
    // $("table").resizableColumns({
    //     store: window.localStorage
    // });


    chrome.devtools.network.onRequestFinished.addListener(function (request) {
            if (request.request.url.indexOf("services/shared/queryproxy") >= 0) {
                $("#a").html("abc");
            }
        }
    );



});


