// STRETCH
const cars = [
  {
    vin: '11111111111111111',
    make: 'Dodge',
    model: 'Ram',
    mileage: 128000,
    title: 'clean',
    transmission: 'automatic',
  },
  {
    vin: '22222222222222222',
    make: 'Volkswagon',
    model: 'Jetta',
    mileage: 30000,
    title: 'clean',
  },
  {
    vin: '33333333333333333',
    make: 'Ford',
    model: 'Bronco',
    mileage: 200000,
  }
]


// Use either this:

// exports.seed = function(knex) {
//   return knex('cars')
//     .truncate()(() => {
//       return knex('cars').insert(cars)
//     })
// }

// Or you can use the new es7 version with async/await:

exports.seed = async function (knex) {
  await knex('cars').truncate()
  await knex('cars').insert(cars)
}
