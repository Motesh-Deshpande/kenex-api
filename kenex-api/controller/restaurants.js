const { Restaurant } = require('../models')
const knex = require('../db/knex')

const getAllVeg = async (req, res, next)=>{
 let result = await Restaurant.find({'vegOnly': true});
 return result
}

const getAllLowCostVeg = async (req, res, next)=>{
    let result = await Restaurant.find({'vegOnly': true, cost: 'low'});
    return result
}

const getAllLowCostFrench = async (req, res, next)=>{
    let result = await knex('restaurant').whereJsonSupersetOf('cusineTypes', ['french']).andWhere('cost', 'low')
    return result
}

const getAllHighLowCostFrenchOrItalian = async (req, res, next)=>{
    let ids = []
    let subQueryFrench = await knex('restaurant').whereJsonSupersetOf('cusineTypes', ['french']).select('id')
    subQueryFrench.forEach(element => {
        ids.push(element.id)
    });
    let subQueryItalian = await knex('restaurant').whereJsonSupersetOf('cusineTypes', ['italian']).select('id')
    subQueryItalian.forEach(element => {
        ids.push(element.id)
    });
    let result = await knex('restaurant').whereIn('id', ids).whereNot('cost', 'medium')
    return result
}

const getAllHighLowCostFrenchAndItalian = async (req, res, next)=>{
    let ids = []
    let subQueryFrench = await knex('restaurant').whereJsonSupersetOf('cusineTypes', ['french', 'italian']).select('id')
    subQueryFrench.forEach(element => {
        ids.push(element.id)
    });
    let result = await knex('restaurant').whereIn('id', ids).whereNot('cost', 'medium')
    return result
}

module.exports = {getAllVeg, getAllLowCostVeg, getAllLowCostFrench, getAllHighLowCostFrenchOrItalian, getAllHighLowCostFrenchAndItalian}