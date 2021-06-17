const routerx = require('express-promise-router')
const router = routerx()

const { 
    addRtp, 
    getRtp, 
    updateRtp, 
    deleteRtp,
    deleteMultiRtps
} = require('../controllers/rtpController')

router.get('/', getRtp)
router.post('/', addRtp)
router.put('/:id', updateRtp)
router.delete('/:id', deleteRtp)
router.post('/delete', deleteMultiRtps)

module.exports = router