module.exports=function(grunt){
  grunt.initConfig({
      cssmin:{
          'rectangle.min.css':'index.css'
      }
  });
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.registerTask('default',['cssmin']);
}