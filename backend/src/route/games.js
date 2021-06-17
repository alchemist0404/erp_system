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
    manageGamehilow,
    manageGameameroullete,
    manageGamebaccarat
} = require('../controllers/gamesController')

router.get('/:id', getGameById)
router.get('/', getGame)
router.post('/', addGame)
router.put('/:id', updateGame)
router.delete('/:id', deleteGame)
router.post('/getByRoute', getByRouteGame)
router.post('/delete', deleteMultiGames)
router.post('/manageGamehilow', manageGamehilow)
router.post('/manageGameameroullete', manageGameameroullete)
router.post('/manageGamebaccarat', manageGamebaccarat)

module.exports = router