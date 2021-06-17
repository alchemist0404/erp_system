const routerx = require('express-promise-router')
const router = routerx()

const { 
    addCustomer, 
    getCustomer, 
    updateCustomer, 
    deleteCustomer,
    deleteMultiCustomers
} = require('../controllers/customerController')

router.get('/', getCustomer)
router.post('/', addCustomer)
router.put('/:id', updateCustomer)
router.delete('/:id', deleteCustomer)
router.post('/delete', deleteMultiCustomers)

module.exports = router