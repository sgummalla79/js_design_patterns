var tasks = require('./taskCollection');

var projects = ['none', 'courses', 'trainings', 'project'];
var priorities = [1,2,3,4,5];
var users = ['suman', 'sunil','sudheer', 'krishna', 'satish','surendra'];
var completed = [true, false];

var initialMemory = process.memoryUsage().heapUsed;

for(var i = 0; i < 100000; i++){
    tasks.add({
        name : 'task' + i,
        priority : priorities[Math.floor((Math.random()* 5))],
        project : projects[Math.floor((Math.random() * 4))],
        users : users[Math.floor((Math.random() * 6))],
        completed : completed[Math.floor((Math.random() * 2))]
    })
}

var afterMemory = process.memoryUsage().heapUsed;
console.log('used memory ' + (afterMemory - initialMemory) /1000000);
console.log("tasks : " + tasks.getCount());
