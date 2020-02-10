const express = require('express')
const { movieController } = require('../controller')

const router = express.Router()

// ===============
//      MOVIE
// ===============
router.post('/add-movie', movieController.addMovie)
router.get('/get-movie', movieController.getMovie)
router.put('/edit-movie/:idmovie', movieController.updateMovie)
router.delete('/delete-movie/:idmovie', movieController.deleteMovie)

// ==================
//      CATEGORY
// ==================
router.post('/add-category', movieController.addCategory)
router.get('/get-category', movieController.getCategory)
router.put('/edit-category/:idcategory', movieController.updateCategory)
router.delete('/delete-category/:idcategory', movieController.deleteCategory)

// ========================
//      MOVIE CATEGORY 
// ========================
router.post('/add-movcat', movieController.addMovCat)
router.get('/get-movcat', movieController.getMovCat)
router.delete('/delete-movcat', movieController.deleteMovCat)

module.exports = router
