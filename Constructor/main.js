var constructorPattern = require("./constructorPattern");
var protoType = require("./protoType");
var usingClasses = require("./usingClasses");


var task1 = new usingClasses("create a demo for constructors");
var task2 = new usingClasses("create a demo for modules");
var task3 = new usingClasses("create a demo for singletons");
var task4 = new usingClasses("create a demo for prototypes");

task1.complete();
task2.save();
task3.save();
task4.save();