chrome.tabs.onActivated.addListener(function (activeInfo) {
    chrome.debugger.attach({ //debug at current tab
        tabId: activeInfo.tabId
    }, "1.0", function () {
        chrome.debugger.sendCommand({ //first enable the Network
            tabId: activeInfo.tabId
        }, "Network.enable");

        chrome.debugger.onEvent.addListener(function (debuggeeId, message, params) {
            if (activeInfo.tabId === debuggeeId.tabId && message === "Network.responseReceived") { //response return
                chrome.debugger.sendCommand({
                    tabId: debuggeeId.tabId
                }, "Network.getResponseBody", {
                    "requestId": params.requestId
                }, function (response) {
                    alert(response);
                    chrome.debugger.detach(debuggeeId);
                });
            }
        });
    });
});