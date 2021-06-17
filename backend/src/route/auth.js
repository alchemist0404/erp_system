const routerx = require('express-promise-router')
const router = routerx()

const { 
    signin,
    signup,
    sessionCheck
} = require('../controllers/authController')

router.post('/signin', signin)
router.post('/signup', signup)
router.post('/sessionCheck', sessionCheck)

module.exports = router