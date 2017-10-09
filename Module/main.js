var taskRepo = require('./taskRepository');
var task = require('./task')

var task1 = new task(taskRepo.get("create a demo for modules"));
var task2 = new task({name : "create a demo for singletons"});
var task3 = new task({name : "create a demo for prototypes"});

task1.complete();
task2.complete();
task3.complete();

task2.save();
task3.save();