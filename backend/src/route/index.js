const auth =  require('./auth');
const games =  require('./games');
const customers =  require('./customers');
const rtp =  require('./rtp');
const profit =  require('./profit');
const routerx = require('express-promise-router');

const router = routerx()
router.use('/auth', auth)
router.use('/games', games)
router.use('/customers', customers)
router.use('/rtp', rtp)
router.use('/profit', profit)

module.exports = router