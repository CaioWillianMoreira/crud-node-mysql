const express = require('express')
const router = express.Router()
const UsuarioController = require('../controllers/usuarioController')

router.post('/usuarios', UsuarioController.Insert)
router.get('/usuarios', UsuarioController.SearchAll)
router.get('/usuarios/:id', UsuarioController.SearchOne)
router.put('/usuarios/:id', UsuarioController.Update)

module.exports = router
