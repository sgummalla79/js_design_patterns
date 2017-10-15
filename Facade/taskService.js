var TaskService = function(){
    var complete = function(task){
        task.completed = true;
        console.log("completing task: " + task.name);
    }

    var setCompletedDate = function(task){
        task.completedDate = new Date();
        console.log(task.name + ' completed on ' + task.completedDate);
    }

    var notifyCompletion = function(task, user){
        console.log('Notifying ' + user + ' of the completion of ' + task.name);
    }

    var save = function(task){
        console.log('saving task: ' + task.name);
    }

    return {
        complete : complete,
        save: save,
        setCompletedDate : setCompletedDate,
        notifyCompletion : notifyCompletion
    }
}

module.exports = TaskService();