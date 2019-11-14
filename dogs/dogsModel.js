const db = require("../data/dbConfig.js");

module.exports = {
  insert,
  update,
  remove,
  getAll,
  findById
};

function insert(dog) {
  return (
    db("dogs")
      .insert(dog, "id")
      .then(ids => {
        const id = ids[0];
        return db("dogs")
          .where({ id })
          .first();
      })
  );
}

async function update(id, changes) {
  return null;
}

function remove(id) {
  return null;
}

function getAll() {
  return db("dogs");
}

function findById(id) {
  return null;
}
