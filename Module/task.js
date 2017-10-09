var repo = require('./taskRepository');

var task = function(data){
    this.name = data.name;
    this.completed = false;

    this.complete = function(){
        console.log('completing task : ' + this.name);
        this.completed = true;
    }

    this.save = function(){
        console.log('saving task : ' + this.name);
        repo.save(this);
    }
}

module.exports = task;