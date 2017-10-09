var task = require('./task');
var repoFactoryCache = require('./repoFactoryCache');

var taskRepo = repoFactoryCache.getRepo("task");
var userRepo = repoFactoryCache.getRepo("user");
var projectRepo = repoFactoryCache.getRepo("project");

var task1 = new task(taskRepo.get(1));
task1.user = userRepo.get(1);
task1.project = projectRepo.get(1);

console.log(task1);
task1.save();