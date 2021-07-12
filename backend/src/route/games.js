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
    checkAmericanRoulleteGameBank,
    manageGamebaccarat,
    checkBlackjackGameBank,
    updateBlackjackGameBank,
    checkCrapsGameBank,
    checkJackorBetterGameBank,
    updateGameBankWithWinAmount,
    checkStudPokerGameBank,
    check3CardPokerGameBank,
    check3DRoulleteGameBank
} = require('../controllers/gamesController')

router.get('/:id', getGameById)
router.get('/', getGame)
router.post('/', addGame)
router.put('/:id', updateGame)
router.delete('/:id', deleteGame)
router.post('/getByRoute', getByRouteGame)
router.post('/delete', deleteMultiGames)
router.post('/manageNormalGame', manageNormalGame)
router.post('/checkAmericanRoulleteGameBank', checkAmericanRoulleteGameBank)
router.post('/manageGamebaccarat', manageGamebaccarat)
router.post('/checkBlackjackGameBank', checkBlackjackGameBank)
router.post('/updateBlackjackGameBank', updateBlackjackGameBank)
router.post('/checkCrapsGameBank', checkCrapsGameBank)
router.post('/checkJackorBetterGameBank', checkJackorBetterGameBank)
router.post('/updateGameBankWithWinAmount', updateGameBankWithWinAmount)
router.post('/checkStudPokerGameBank', checkStudPokerGameBank)
router.post('/check3CardPokerGameBank', check3CardPokerGameBank)
router.post('/check3DRoulleteGameBank', check3DRoulleteGameBank)

module.exports = router