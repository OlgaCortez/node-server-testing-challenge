
exports.seed = function(knex, Promise) {
  return knex('dogs')
    .truncate()
    .then(function() {
      return knex('dogs').insert([
        { name: 'Cockapoo' },
        { name: 'Husky' },
        { name: 'Beagle' },
        { name: 'Pomeranian' },
        { name: 'Bulldog' },
        { name: 'Poodle' },
        { name: 'Pug' },
        { name: 'Boxer' },
        { name: 'Maltese' },
        { name: 'Papillon' },
      ]);
    });
};
