module.exports = function (grunt) {
    grunt.registerTask('dev', ['uglify:dev']);
    grunt.registerTask('dev_watch', ['uglify:dev', 'watch']);
};