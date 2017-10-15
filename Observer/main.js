var Task = require('./task');

var notificationService = function(){
    var message = 'Notifying ';
    this.update = function(task){
        console.log(message + task.user + ' for task ' + task.name);
    }
}

var loggingService = function(){
    var message = 'Logging ';
    this.update = function(task){
        console.log(message + task.user + ' for task ' + task.name);
    }
}

var auditingService = function(){
    var message = 'Auditing ';
    this.update = function(task){
        console.log(message + task.user + ' for task ' + task.name);
    }
}

var ObserverList = function(){
    this.observerList = [];
}

ObserverList.prototype.add = function(obj){
    this.observerList.push(obj);
}

ObserverList.prototype.get = function(index){
    if (index > -1 && index < this.observerList.length){
        return this.observerList[index];
    }
}

ObserverList.prototype.removeAt = function(index){
    if (index > -1 && index < this.observerList.length){
        return this.observerList.splice(index, 1);
    }
}

ObserverList.prototype.count = function(){
    return this.observerList.length;
}

ObserverList.prototype.indexOf = function(obj){
    for (var index = 0; index < this.observerList.length; index++) {
        if (this.observerList[index] === obj)
            return index;
    }
}

//ObservableTask
var ObservableTask = function(data){
    Task.call(this, data);
    this.observers = new ObserverList();
}

ObservableTask.prototype.addObserver = function(observer){
    this.observers.add(observer);
}

ObservableTask.prototype.removeObserver = function(observer){
    this.observers.removeAt(this.observers.indexOf(observer));
}

ObservableTask.prototype.notify = function(context){
    var observerCount = this.observers.count();
    for (var i = 0; i < observerCount; i++) {
        this.observers.get(i)(context);
    }
}

ObservableTask.prototype.save = function(){
    this.notify(this);
    Task.prototype.save.call(this);
}

var notify = new notificationService();
var log = new loggingService();
var audit = new auditingService();

var task1 = new ObservableTask({name : 'create a demo for constructors', user : 'John'});
task1.addObserver(notify.update);
task1.addObserver(log.update);
task1.addObserver(audit.update);
task1.save();

task1.removeObserver(log.update);

task1.save();
