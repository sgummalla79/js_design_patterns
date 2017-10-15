var taskService = require('./TaskService');

var TaskServiceFacade = function(){
    var completeAndNotify = function(task){
        taskService.complete(task);

        if (task.completed){
            taskService.setCompletedDate(task);
            taskService.notifyCompletion(task, task.user);
            taskService.save(task);
        }
    }

    return{
        completeAndNotify : completeAndNotify
    }
}

module.exports = TaskServiceFacade();
