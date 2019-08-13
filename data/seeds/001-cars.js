
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("cars")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("cars").insert([
        {
          id: 1,
          VIN: "ABCiH8Lam7657",
          make: "mazda",
          model: "3",
          mileage: "80,000",
          transmission_type: "something cool",
          title_status: "clean"
        }
      ]);
    });
};
