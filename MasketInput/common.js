$(document).ready(function() {



  /**
   * Minified by jsDelivr using UglifyJS v3.3.16.
   * Original file: /npm/jquery.maskedinput@1.4.1/gruntfile.js
   *
   * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
   */
  "use strict";module.exports=function(s){s.initConfig({pkg:require("./package.json"),uglify:{options:{banner:'/*\n    <%= pkg.description %>\n    Copyright (c) 2007 - <%= grunt.template.today("yyyy") %> <%= pkg.author %>\n    Licensed under the MIT license (http://digitalbush.com/projects/masked-input-plugin/#license)\n    Version: <%= pkg.version %>\n*/\n'},dev:{options:{beautify:!0,mangle:!1},files:{"dist/jquery.maskedinput.js":["src/jquery.maskedinput.js"]}},min:{files:{"dist/jquery.maskedinput.min.js":["src/jquery.maskedinput.js"]}}},jasmine:{full:{src:"src/**/*.js",options:{specs:"spec/*[S|s]pec.js",vendor:["spec/lib/matchers.js","spec/lib/jasmine-species/jasmine-grammar.js","spec/lib/setup.js","lib/jquery-1.9.0.min.js","spec/lib/jquery.keymasher.js"]}}},nugetpack:{dist:{src:"jquery.maskedinput.nuspec",dest:"dist/"}}}),s.loadNpmTasks("grunt-contrib-jasmine"),s.loadNpmTasks("grunt-contrib-uglify"),s.loadNpmTasks("grunt-nuget"),s.registerTask("test",["jasmine"]),s.registerTask("pack",["default","nugetpack"]),s.registerTask("default",["test","uglify"])};
  //# sourceMappingURL=/sm/20cf13eb03624a810b79420dbdce998f73b8a672be67ffb869ed34091309381e.map









});
