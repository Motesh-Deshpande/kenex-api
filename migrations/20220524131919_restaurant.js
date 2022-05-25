/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('restaurant', restro => {
        restro.uuid('id').primary().defaultTo(knex.raw('uuid_generate_v4()'))
        restro.string('name')
        restro.string('address')
        restro.string('cost')
        restro.jsonb('cusineTypes')
        restro.boolean('vegOnly')
        restro.boolean('isOpen')
        restro.timestamp('created_at').defaultTo(knex.fn.now())
        restro.timestamp('updated_at').defaultTo(knex.fn.now())
      })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('restaurant')
};
