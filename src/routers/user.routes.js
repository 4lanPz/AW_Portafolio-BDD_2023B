const {Router} = require('express')
const { redirectIfAuthenticated } = require('../helpers/validate-auth')
const { renderRegisterForm, registerNewUser, renderLoginForm, loginUser, logoutUser,confirmEmail} = require('../controllers/user.controller')
const router = Router()


router.get('/user/register',renderRegisterForm)
router.post('/user/register',registerNewUser)

router.get('/user/login', redirectIfAuthenticated, renderLoginForm)
router.post('/user/login',loginUser)

router.get('/user/confirmar/:token',confirmEmail)

router.post('/user/logout',logoutUser)

module.exports =router