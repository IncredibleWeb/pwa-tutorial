var vendorBundle = [
    "<%= paths.vendor %>/knockout-3.3.0.js",
];

module.exports = function(grunt) {
    global.vendorBundle = vendorBundle;
    require('load-grunt-config')(grunt, {
        data: {
            init: true,
            paths: {
                js: 'demo/js',
                build: 'demo/js/build',
                vendor: 'demo/js/vendor'
            }
        }
    });
};
