const routerx = require('express-promise-router')
const router = routerx()

const { 
    getBetHistory
} = require('../controllers/betHistoryController')

router.get('/getBetHistory', getBetHistory)

module.exports = router