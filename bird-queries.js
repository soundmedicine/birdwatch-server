const database = require("./database-connection");

module.exports = {
    list(){
        return database('bird').select()
    },
    read(id){
        return database('bird').where('id', id).first()
    },
    create(bird){
        return database('bird').insert(bird).returning('*')
        .then(record => record[0])
    },
    update(id, bird){
        return database('bird').update(bird).where('id', id).returning('*')
        .then(record => record[0])
    },
    delete(id){
        return database('bird').where('id', id).del()
    }
};
