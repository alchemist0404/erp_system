const routerx = require('express-promise-router')
const router = routerx()

const { 
    addGame,
    getGame,
    getGameById,
    getByRouteGame,
    updateGame, 
    deleteGame,
    deleteMultiGames,
    manageNormalGame,
    manageGameameroullete,
    manageGamebaccarat,
    checkBlackjackGameBank,
    updateBlackjackGameBank,
    checkCrapsGameBank,
    checkJackorBetterGameBank,
    updateJackorBetterGameBank
} = require('../controllers/gamesController')

router.get('/:id', getGameById)
router.get('/', getGame)
router.post('/', addGame)
router.put('/:id', updateGame)
router.delete('/:id', deleteGame)
router.post('/getByRoute', getByRouteGame)
router.post('/delete', deleteMultiGames)
router.post('/manageNormalGame', manageNormalGame)
router.post('/manageGameameroullete', manageGameameroullete)
router.post('/manageGamebaccarat', manageGamebaccarat)
router.post('/checkBlackjackGameBank', checkBlackjackGameBank)
router.post('/updateBlackjackGameBank', updateBlackjackGameBank)
router.post('/checkCrapsGameBank', checkCrapsGameBank)
router.post('/checkJackorBetterGameBank', checkJackorBetterGameBank)
router.post('/updateJackorBetterGameBank', updateJackorBetterGameBank)

module.exports = router