var projectRepo = function(){
    var get = function(id){
        console.log("Getting project " + id);

        return {
            name : 'new project from db'
        }
    }

    console.log("newing up project repo");
    
    return {
        get : get
    }
}

module.exports = projectRepo();