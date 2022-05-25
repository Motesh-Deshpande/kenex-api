const router = require('express').Router()
const { getAllVeg, getAllLowCostVeg, getAllLowCostFrench, getAllHighLowCostFrenchOrItalian, getAllHighLowCostFrenchAndItalian } = require('../controller/restaurants')

router.get('/all-veg-restaurants', async (req, res) => {
    const allRestaurants = await getAllVeg()
    res.json({
        status: true,
        result: allRestaurants
    })
})

router.get('/all-low-cost-veg-restaurants', async (req, res) => {
    const allRestaurants = await getAllLowCostVeg()
    res.json({
        status: true,
        result: allRestaurants
    })
})

router.get('/all-low-cost-french-restaurants', async (req, res) => {
    const allRestaurants = await getAllLowCostFrench()
    res.json({
        status: true,
        result: allRestaurants
    })
})

router.get('/all-high-low-cost-french-italian-restaurants', async (req, res) => {
    const allRestaurants = await getAllHighLowCostFrenchOrItalian()
    res.json({
        status: true,
        result: allRestaurants
    })
})

router.get('/all-high-low-cost-french-cum-italian-restaurants', async (req, res) => {
    const allRestaurants = await getAllHighLowCostFrenchAndItalian()
    res.json({
        status: true,
        result: allRestaurants
    })
})
module.exports = router