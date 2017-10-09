var repoFactory = function(){
    var getRepo = function(repoType){
        if (repoType == "task"){
            if (!this.taskRepo){
                var taskRepository = require('./taskRepository');
                this.taskRepo = new taskRepository();
            }

            return this.taskRepo;
        }
        else if (repoType == "user"){
            if (!this.userRepo){
                var userRepository = require('./userRepository');
                this.userRepo = new userRepository();
            }

            return this.userRepo;
        }
        else if (repoType == "project"){
            if (!this.projectRepo){
                var projectRepository = require('./projectRepository');
                this.projectRepo = new projectRepository();
            }

            return this.projectRepo;
        }
    }

    return {
        getRepo : getRepo
    }
}
    
module.exports = repoFactory;