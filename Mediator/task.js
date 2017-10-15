var Task = function(data){
    this.name = data.name;
    this.priority = data.priority;
    this.user = data.user;
    this.project = data.project;
    this.completed = data.completed;
}

Task.prototype.complete = function(){
    console.log('completing the task ' + this.name);
}

Task.prototype.save = function(){
    console.log('saving the task ' + this.name);
}

module.exports = Task;