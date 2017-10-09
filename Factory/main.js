var task = require('./task');
var repoFactory = require('./repoFactory');


var taskRepo = repoFactory.getRepo("task");
var userRepo = repoFactory.getRepo("user");
var projectRepo = repoFactory.getRepo("project");

var task1 = new task(taskRepo.get(1));
task1.user = userRepo.get(1);
task1.project = projectRepo.get(1);

console.log(task1);
task1.save();