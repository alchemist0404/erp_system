const routerx = require('express-promise-router')
const router = routerx()

const { 
    addProfit, 
    getProfits, 
    getAllProfits, 
    updateProfit, 
    deleteProfit,
    deleteMultiProfits
} = require('../controllers/profitController')

router.get('/all', getAllProfits)
router.get('/:id', getProfits)
router.post('/', addProfit)
router.put('/:id', updateProfit)
router.delete('/:id', deleteProfit)
router.post('/delete', deleteMultiProfits)

module.exports = router