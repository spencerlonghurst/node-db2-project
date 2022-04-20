exports.up = function (knex) {
  return knex.schema.createTable('cars', tbl => {
    tbl.increments(); // Or you can include 'id', but id is default so it isn't neccesary here
    tbl.string('vin', 17).notNullable().unique();
    tbl.string('make').notNullable();
    tbl.string('model').notNullable();
    tbl.numeric('mileage').notNullable();
    tbl.string('title');
    tbl.string('transmission');
  })
};

exports.down = function (knex) {
  // DO YOUR MAGIC
};
