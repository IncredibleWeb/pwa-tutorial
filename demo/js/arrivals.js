(function() {
    function ArrivalViewModel() {
        var self = this;
        self.title = "";
        self.status = "";
        self.time = "";
    }

    function ArrivalApiService() {
        var self = this;

        // retrieves all arrivals from the API
        self.getAll = function() {
            return $.get("./api/data.json").then(function(response) {
                return response;
            });
        };
    }

    function ArrivalAdapter() {
        var self = this;

        self.toArrivalViewModel = function(data) {
            if (data) {
                var vm = new ArrivalViewModel();
                vm.title = data.title;
                vm.status = data.status;
                vm.time = data.time;
                return vm;
            }
            return null;
        };

        self.toArrivalViewModels = function(data) {
            if (data && data.length > 0) {
                return _.map(data, function(item) {
                    return self.toArrivalViewModel(item);
                });
            }
            return [];
        };
    }

    function ArrivalController(arrivalApiService, arrivalAdapter) {
        var self = this;

        self.getAll = function() {
            // retrieve all the arrivals from the API
            return arrivalApiService.getAll().then(function(response) {
                return arrivalAdapter.toArrivalViewModels(response);
            });
        };
    }

    (function($) {
        // initialize the services and adapters
        var arrivalApiService = new ArrivalApiService();
        var arrivalAdapter = new ArrivalAdapter();

        // initialize the controller
        var arrivalController = new ArrivalController(arrivalApiService, arrivalAdapter);

        // check if the user is connected
        if (navigator.onLine) {
            // retrieve all routes
            $(".arrivals-list").addClass("loading");
            arrivalController.getAll().then(function(response) {
                // bind the arrivals to the UI
                $.vm.arrivals(response);
                $(".arrivals-list").removeClass("loading");
            });
            ko.applyBindings($.vm);
        } else {
            // load html template
            
        }

    })(jQuery);
})();
