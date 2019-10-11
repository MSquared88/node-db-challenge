
exports.up = function(knex) {
	return knex.schema.createTable('tasks', tbl => {
		tbl
			.increments()
		
		tbl
			.integer('projects_id')
			.unsigned()
			.references('id')
			.inTable('projects')
			.notNullable()
			.onUpdate('CASCADE')
			.onDelete('CASCADE')
		
		tbl
			.string('description',255)
			.notNullable()

		tbl
			.text('notes')
		
		tbl
			.boolean('completed')
			.defaultTo(false)
			.notNullable()
	})
	.createTable('project_resources', tbl => {
		tbl
			.increments()

		tbl
			.integer('project_id')
			.unsigned()
			.references('id')
			.inTable('projects')
			.notNullable()
			.onUpdate('CASCADE')
			.onDelete('CASCADE')
		
		tbl
			.integer('resource_id')
			.unsigned()
			.references('id')
			.inTable('resources')
			.notNullable()
			.onUpdate('CASCADE')
			.onDelete('CASCADE')
		
		tbl
			.float('resource_quantity')
			.notNullable()
	})
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExsists('tasks').dropTableIfExsists('project_resources')
};
