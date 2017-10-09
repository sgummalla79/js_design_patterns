var userRepo = function(){
    var get = function(id){
        console.log("Getting user " + id);

        return {
            name : 'new user from db'
        }
    }

    console.log("newing up user repo");
    
    return {
        get : get
    }
}

module.exports = userRepo();