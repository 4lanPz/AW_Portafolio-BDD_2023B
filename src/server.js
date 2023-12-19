// Importacion de express
const express = require('express')
// Importacion de path
const path = require('path');
// Importar handlebars
const { engine }  = require('express-handlebars')
const methodOverride = require('method-override');
const passport = require('passport');
const session = require('express-session');
const fileUpload = require('express-fileupload')

// Inicializaciones
require('./config/passport')
// Instanciar Express
const app = express()

// Configuraciones
// Variables de configuración
//let port = 3000
app.set('port',process.env.port || 3000)
//let views = "C:\Users\APLICACIONES WEB\Desktop\portafolio"
app.set('views',path.join(__dirname, 'views'))

// Establecer el path de la carpeta views
app.set('views',path.join(__dirname, 'views'))
// Establecer el master page
app.engine('.hbs',engine({
    defaultLayout:'main',
    // Establecer el path de la carpeta layouts
    layoutsDir: path.join(app.get('views'),'layouts'),
    // Establecer el path de la carpeta partials
    partialsDir: path.join(app.get('views'),'partials'),
    // Establecer la extencion de las paginas
    extname:'.hbs'
}))
app.set('view engine','.hbs')

// Middlewares
app.use(methodOverride('_method'))
// app.use(express.json())
// Servidor va a trabajar con información en base a formularios
app.use(express.urlencoded({extended:false}))

app.use(session({ 
    secret: 'secret',
    resave:true,
    saveUninitialized:true
}));
app.use(passport.initialize())
app.use(passport.session())


// Variables globales
app.use((req,res,next)=>{
    res.locals.user = req.user?.name || null
    next()
})

app.use(fileUpload({
    useTempFiles : true,
    tempFileDir : './uploads'
}));

// Rutas
// Primera Ruta
app.get('/',(req,res)=>{
    // res.send("Server on")
    res.render("index")
})
// Ruta 2
app.use(require('./routers/index.routes.js'))
// Ruta 3
app.use(require('./routers/user.routes'))

// Archivos estáticos
// Definir archivos estáticos y públicos
app.use(express.static(path.join(__dirname,'public')))

app.use(require('./routers/portafolio.routes'))
// Exportar la variable app

// Middlewares 

app.use(session({ 
    secret: 'secret',
    resave:true,
    saveUninitialized:true
}));
app.use(passport.initialize())
app.use(passport.session())


module.exports = app