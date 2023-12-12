// Importar routes de express
const {Router} = require('express')
// Instanciar routes
const router = Router()

// router.get('/',(req,res)=>{
//     res.render('index')
// })

// router.get('/login',(req,res)=>{
//     res.render('login')
// })


const {renderIndex,renderLogin} = require('../controllers/index.controllers')


router.get('/',renderIndex)
router.get('/login',renderLogin)


module.exports = router