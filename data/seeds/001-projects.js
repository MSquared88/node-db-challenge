
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {name: 'build bird house', description: 'build a bird house', completed: false},
        {name: 'seed grass', description: 'throw seeds on lawn', completed: false},
      ]);
    });
};
