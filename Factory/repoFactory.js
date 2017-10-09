var repoFactory = function(){
    getRepo = function(repoType){
        if (repoType == "task"){
            var taskRepo = require('./taskRepository');
            return new taskRepo();
        }
        else if (repoType == "user"){
            var userRepo = require('./userRepository');
            return new userRepo();
        }
        else if (repoType == "project"){
            var projectRepo = require('./projectRepository');
            return new projectRepo();
        }
    }

    return {
        getRepo : getRepo
    }
}
    
module.exports = repoFactory;