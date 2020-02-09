
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resources').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('resources').insert([
        {name: 'wood', description: 'oak'},
        {name: 'screws', description: 'phillips head wood screws'},
        {name: 'seed', description: 'bermuda grass seeds'}
      ]);
    });
};
