var repo = (function(){
    return {
        tasks : {},
        commands : [],
        get : function(id){
            console.log('Getting Task : '+ id);
            return{
                name : 'new task from db'
            }
        },
        save : function(task){
            console.log('Saving ' + task.name + ' to the db.');
            if (!repo.tasks[task.name]){
                repo.tasks[task.name] = task;
            }
        }
    }
})();

repo.replay = function(){
    for (var i = 0; i < repo.commands.length; i++) {
        var command = repo.commands[i];
        repo.executeNoLog(command.name, command.obj);
    } 
}

repo.executeNoLog = function(name){
    var args = Array.prototype.splice.call(arguments, 1);

    if (repo[name]){
        return repo[name].apply(repo, args);
    }

    return false;
}


repo.execute = function(name){
    var args = Array.prototype.splice.call(arguments, 1);

    if (repo[name]){
        repo.commands.push({
            name : name,
            obj : args[0]
        });

        return repo[name].apply(repo, args);
    }

    return false;
}

repo.execute('save',{
    id : 1,
    name : 'Task 1',
    completed : false
});

repo.execute('save',{
    id : 1,
    name : 'Task 2',
    completed : false
});

repo.execute('save',{
    id : 1,
    name : 'Task 3',
    completed : false
});

repo.execute('save',{
    id : 1,
    name : 'Task 4',
    completed : false
});
console.log(repo.tasks);
repo.tasks = {};
repo.replay();
console.log(repo.tasks);