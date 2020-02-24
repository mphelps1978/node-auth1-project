
exports.up = function(knex) {
  return knex.schema.createTable('accounts', tbl =>{
    tbl.increments();
    tbl.text('username', 128)
      .notNullable();
    tbl.text('password', 128)
      .notNullable();

  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('accounts')
};
