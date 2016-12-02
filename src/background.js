// chrome.tabs.getCurrent(function (currentTab) {
//     alert(currentTab);
//     chrome.debugger.attach({ //debug at current tab
//         tabId: currentTab.id
//     }, "1.0", function () {
//         chrome.debugger.sendCommand({ //first enable the Network
//             tabId: currentTab.id
//         }, "Network.enable");
//     });
// });


chrome.tabs.onActivated.addListener(function (activeInfo) {

});


//
// chrome.tabs.query({
//         currentWindow: true,
//         active: true
//     },
//     function (tabArray) {
//         currentTab = tabArray[0];
//         chrome.debugger.attach({ //debug at current tab
//             tabId: currentTab.id
//         }, "1.0", function () {
//             chrome.debugger.sendCommand({ //first enable the Network
//                 tabId: currentTab.id
//             }, "Network.enable");
//         });
//     }
// );
//
// chrome.debugger.onEvent.addListener(function (debuggeeId, message, params) {
//     if (currentTab.id != debuggeeId.tabId) {
//         return;
//     }
//
//     if (message == "Network.responseReceived") { //response return
//         chrome.debugger.sendCommand({
//             tabId: debuggeeId.tabId
//         }, "Network.getResponseBody", {
//             "requestId": params.requestId
//         }, function (response) {
//
//             chrome.debugger.detach(debuggeeId);
//         });
//     }
//
// });