var task = require('./task');
var repoFactory = require('./repoFactory2');

var repos = new repoFactory();

var task1 = new task(repos.task.get(1));
task1.user = repos.user.get(1);
task1.project = repos.project.get(1);

console.log(task1);
task1.save();