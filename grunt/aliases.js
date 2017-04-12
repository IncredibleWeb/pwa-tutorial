module.exports = function (grunt) {
    grunt.registerTask('dev', ['uglify:dev']);
    grunt.registerTask('dev_watch', ['uglify:dev', 'watch']);
    grunt.registerTask('default', function () {
        grunt.util.spawn({
            cmd: 'node', args: ['app.js']
        })
        grunt.task.run('watch')
        console.log('');
        console.log('>>> Server started at: http://localhost:3000/ <<<');
    })
};
