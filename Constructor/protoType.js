//drawbacks
//1. toString copy is created on all objects instead we can create on task prototype

//what is prototype - An encapsulation of properties that an object links to 
var Task = function(name){
    this.name = name;
    this.completed = false;
}

Task.prototype.complete = function(){
    console.log('completing task: ' + this.name);
    this.completed = true;
}

Task.prototype.save = function(){
    console.log('saving task: ' + this.name);
}

module.exports = Task;