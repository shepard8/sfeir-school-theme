const shelljs = require("shelljs");

shelljs.rm("-rf", "./demo/web_modules");
shelljs.mkdir("-p", "./demo/web_modules/sfeir-school-theme");
shelljs.cp("-rf", "./dist/*", "./demo/web_modules/sfeir-school-theme");
