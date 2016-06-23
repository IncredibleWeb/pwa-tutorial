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

    // register the service worker if available
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('./sw.js').then(function(reg) {
            console.log('Successfully registered service worker', reg);
        }).catch(function(err) {
            console.warn('Error whilst registering service worker', err);
        });
    }

})(jQuery);
