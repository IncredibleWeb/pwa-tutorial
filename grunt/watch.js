module.exports = {
    js: {
        files: ['<%= paths.js %>/**/*.js', '!<%= paths.build %>/**/*.js'],
        tasks: ['uglify:dev'],
        options: {
            spawn: false,
            livereload: true
        }
    }
};
