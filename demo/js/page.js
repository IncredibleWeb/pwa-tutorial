var Page = (function() {

    // declare the view model used within the page
    function ViewModel() {
        var self = this;
        self.arrivals = ko.observableArray([]);
    }

    // expose the view model through the Page module
    return {
        vm: new ViewModel(),
        hideOfflineWarning: function() {
            // enable the live data
            document.querySelector(".arrivals-list").classList.remove('loading')
            // remove the offline message
            document.getElementById("offline").remove();
            // load the live data
        },
        showOfflineWarning: function() {
            // disable the live data
            document.querySelector(".arrivals-list").classList.add('loading')
                // load html template informing the user they are offline
            var request = new XMLHttpRequest();
            request.open('GET', './offline.html', true);

            request.onload = function() {
                if (request.status === 200) {
                    // success
                    // create offline element with HTML loaded from offline.html template
                    var offlineMessageElement = document.createElement("div");
                    offlineMessageElement.setAttribute("id", "offline");
                    offlineMessageElement.innerHTML = request.responseText;
                    document.getElementById("main").appendChild(offlineMessageElement);
                } else {
                    // error retrieving file
                    console.warn('Error retrieving offline.html');
                }
            };

            request.onerror = function() {
                // network errors
                console.error('Connection error');
            };

            request.send();
        }
    }

})();
