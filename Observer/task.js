var Task = function(data){
    this.name = data.name;
    this.priority = data.priority;
    this.user = data.user;
    this.project = data.project;
    this.completed = data.completed;
}

Task.prototype.complete = function(){
    console.log('completing task : ' + this.name);
}

Task.prototype.save = function(){
    console.log('saving task : ' + this.name);
}

module.exports = Task;