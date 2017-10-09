var taskRepo = function(){
    var get = function(id){
        console.log("Getting Task " + id);

        return {
            name : 'new task from db'
        }
    }

    var save = function(task){
        console.log("saving " + task.name + " to the db");
    }

    console.log("newing up task repo");
    
    return {
        get : get,
        save : save
    }
}
    
 module.exports = taskRepo();