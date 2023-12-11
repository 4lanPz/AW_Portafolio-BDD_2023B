// Importar routes de express
const {Router} = require('express')
// Instanciar routes
const router = Router()

router.get('/',(req,res)=>{
    res.render('index')
})

router.get('/login',(req,res)=>{
    res.render('login')
})

module.exports = router