const auth =  require('./auth');
const games =  require('./games');
const customers =  require('./customers');
const rtp =  require('./rtp');
const profit =  require('./profit');
const betHistory =  require('./betHistory');
const provider =  require('./provider');
const routerx = require('express-promise-router');

const router = routerx()
router.use('/auth', auth)
router.use('/games', games)
router.use('/customers', customers)
router.use('/rtp', rtp)
router.use('/profit', profit)
router.use('/betHistory', betHistory)
router.use('/provider', provider)

module.exports = router