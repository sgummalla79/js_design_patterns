//base class
var Task = function(name){
    this.name = name;
    this.completed = false;
}

Task.prototype.complete = function(){
    console.log('completing task: ' + this.name + ' - completed status : ' + this.completed);
    this.completed = true;
}

Task.prototype.save = function(){
    console.log('saving task: ' + this.name + ' - completed status : ' + this.completed);
}

//inheritance
var urgentTask = function(name, priority){
    Task.call(this, name);
    this.priority = priority;
}

urgentTask.prototype = Object.create(Task.prototype);

urgentTask.prototype.save = function(){
    console.log("Urgent Tasks Save");
    Task.prototype.save.call(this);
}

//Execution
var myTask = new Task('Legacy Task');
myTask.complete();
myTask.save();

var myUrgentTask = new urgentTask('Urgent Task', 1);
console.log(myUrgentTask);
myUrgentTask.complete();
myUrgentTask.save();
