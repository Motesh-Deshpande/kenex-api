/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('restaurant').del()
  await knex('restaurant').insert([
    { name: 'grill bar 1',address: 'banglore', cost: 'high', cusineTypes: JSON.stringify(['italian', 'french']), vegOnly: true, isOpen: true,},
    { name: 'grill bar 2',address: 'banglore', cost: 'low', cusineTypes: JSON.stringify(['indian', 'mexican']), vegOnly: true, isOpen: true,},
    { name: 'grill bar 3' ,address: 'banglore', cost: 'medium', cusineTypes: JSON.stringify(['mexican', 'french']), vegOnly: false, isOpen: true,},
    { name: 'grill bar 4',address: 'banglore', cost: 'high', cusineTypes: JSON.stringify(['italian', 'indian']), vegOnly: false, isOpen: true,},
    { name: 'grill bar 5',address: 'banglore', cost: 'low', cusineTypes: JSON.stringify(['french', 'indian']), vegOnly: false, isOpen: true,},
    { name: 'grill bar 6',address: 'banglore', cost: 'low', cusineTypes: JSON.stringify(['italian', 'french']), vegOnly: false, isOpen: true,},
    { name: 'grill bar 7',address: 'banglore', cost: 'high', cusineTypes: JSON.stringify(['italian', 'indian']), vegOnly: false, isOpen: true,},
  ]);
};
