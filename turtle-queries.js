const database = require('./database-connection');

module.exports = {
  list() {
    return database('turtle').select();
  },
  read(id) {
    return database('turtle')
      .where('id', id)
      .first();
  },
  create(turtle) {
    return database('turtle')
      .insert(turtle)
      .returning('*')
      .then(record => record[0]);
  },
  update(id, turtle) {
    return database('turtle')
      .update(turtle)
      .where('id', id)
      .returning('*')
      .then(record => record[0]);
  },
  delete(id) {
    return database('turtle')
      .where('id', id)
      .del();
  }
};
