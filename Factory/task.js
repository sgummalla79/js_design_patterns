class task{
    constructor(data){
        this.name = data.name;
        this.completed = false;
    }

    complete(){
        console.log('completing task : ' + this.name);
        this.completed = true;
    }

    save(){
        console.log('saving task : ' + this.name);
    }
}

module.exports = task;