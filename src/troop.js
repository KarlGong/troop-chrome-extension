angular.module("troop", [])
    .controller("troopController", function ($scope) {
        var troopServicePattern = /^.+?queryproxy.*?$/;

        $scope.requests = [];

        var currentTab;

        

        chrome.devtools.network.onRequestFinished.addListener(
            function (entry) {
                if (entry.request.url.match(troopServicePattern)) {
                    var params = unescape(entry.request.postData.params[0].value).split("|");
                    for (var i = 0; i < params.length; i++) {
                        var splitterIndex = params[i].indexOf("!");
                        var troopCommand = params[i].substring(0, splitterIndex);
                        var troopParam = params[i].substring(splitterIndex + 1);
                        if (troopParam.charAt(0) === "'" && troopParam.charAt(troopParam.length - 1) === "'") {
                            troopParam = troopParam.substring(1, params[i].length - 2);
                        }

                        $scope.requests.push({
                            troop: {
                                command: troopCommand,
                                param: troopParam,
                            },
                            request: entry.request,
                            response: entry.response
                        });

                    }

                }
            });

    });



