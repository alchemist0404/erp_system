const routerx = require('express-promise-router')
const router = routerx()

const providerController = require('../controllers/providerController')

router.post('/playerAuthenticate', providerController.playerAuthenticate)
router.post('/actionBetPlayerAuthenticate', providerController.actionBetPlayerAuthenticate)
router.post('/actionBetPlayerBalance', providerController.actionBetPlayerBalance)

module.exports = router