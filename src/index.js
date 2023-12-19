require('dotenv').config()
// Importar la variable app
const app = require('./server.js')
// Importar el método connection
const connection = require('./database.js')

// Ejecutar servidor en el puerto 3000
app.listen(app.get('port'),()=>{
    console.log(`Server on port ${app.get('port')}`);
})

// Ejecutar en servidor
connection()
