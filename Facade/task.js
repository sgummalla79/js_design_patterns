var taskServiceFacade = require('./taskServiceFacade');

var Task = function(data){
    this.name = data.name;
    this.priority = data.priority;
    this.project = data.project;
    this.user = data.user;
    this.completed = data.completed;
}

var myTask = new Task({
    name : 'MyTask',
    priority : 1,
    project : 'courses',
    user : 'John',
    completed : false
});

taskServiceFacade.completeAndNotify(myTask);
console.log(myTask);


