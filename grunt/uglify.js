module.exports = {
    dev: {
        options: {
            sourceMap: true,
            sourceMapIncludeSources: true,
            mangle: false
        },
        files: {
            '<%= paths.build %>/script.min.js': ['<%= paths.js %>/page.js', '<%= paths.js %>/**/*.js', '!<%= paths.vendor %>/**/*.js', '!<%= paths.build %>/**/*.js'],
            '<%= paths.build %>/vendor.min.js': global.vendorBundle
        }
    }    
};
