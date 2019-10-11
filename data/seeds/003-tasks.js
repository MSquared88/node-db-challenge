
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tasks').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        {projects_id: 1, description: 'cut wood to right size', notes: '', completed: false},
        {projects_id: 1, description: 'screw wood in correct places', notes: '', completed: false},
        {projects_id: 2, description: 'fill the spreader with the seed', notes: '', completed: false},
        {projects_id: 2, description: 'spread the seed over lawn', notes: '', completed: false},
      ]);
    });
};
