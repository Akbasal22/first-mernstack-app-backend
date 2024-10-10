const express = require('express')
const router = express.Router();
const { getAllGames, getSingleGame, updateGame, addGame, deleteGame } = require('../controllers/games');

router.route('/').get(getAllGames).post(addGame)
router.route('/:id').get(getSingleGame).patch(updateGame).delete(deleteGame);

module.exports = router;