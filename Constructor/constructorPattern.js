//constructor pattern

//1.creates a brand new object
//2.links to an object prototype
//3.binds 'this' to the new object scope

var Task = function(name){
    this.name = name;

    this.completed = false;

    this.complete = function(){
        console.log('completing task: ' + this.name);
        this.completed = true;
    }

    this.save = function(){
        console.log('saving task: ' + this.name);
    }
}

module.exports = Task;
