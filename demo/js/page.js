(function($) {

    // declare the view model used within the page
    function ViewModel() {
        var self = this;
        self.arrivals = ko.observableArray([]);
    }

    // expose the view model through $
    var vm = new ViewModel();
    $.extend($, {
        vm: vm
    });

    $(function() {
        // fastclick
        FastClick.attach(document.body);
    });

})(jQuery);