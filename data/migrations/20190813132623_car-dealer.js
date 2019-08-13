//The migration file is stubbed out have both an up and a down function. Within the up function, we write the ended database changes. Within the down function, we write the code that will undo these changes. This allows us to undo any changes made to the schema if necessary. 


exports.up = function(knex, Promise) {
  //return statement
return knex.schema.createTable("cars", tbl=>{
    // creates a primary key called id
    tbl.increments();
    //creates a field which is both required and unique
    tbl
    .string("VIN", 128)
    .unique()
    .notNullable();

    tbl
    .string("make", 128)
    .unique()
    .notNullable();

    tbl
    .string("model", 128)
    .unique()
    .notNullable();
        
    tbl
    .integer("mileage", 120)
    .notNullable();

    tbl
    .string("transmission_type", 128)
    .notNullable();

    tbl
    .string("title_status", 128)
    .notNullable();

})
};

exports.down = function(knex, Promise) {
  //drops the entire table
  return knex.schema.dropTableIfExists("cars");
};
