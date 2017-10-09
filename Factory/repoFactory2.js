var repoFactory = function(){
    var repos = this;
    var repoFactories = [
        {
            name : 'task',
            source : './taskRepository'
        },
        {
            name : 'user',
            source : './userRepository'
        },
        {
            name : 'project',
            source : './projectRepository'
        }
    ]

    repoFactories.forEach(function(repo){
        repos[repo.name] = require(repo.source);
    });
}

module.exports = repoFactory;