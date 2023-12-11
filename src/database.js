const mongoose = require('mongoose')


// Crear método para hacer la conexión
connection = async()=>{
    try {
        await mongoose.connect(process.env.MONGODB_URI)
        // respuesta de la promesa si se cumple
        console.log("Database is connected")
    } catch (error) {
        // respuesta si hay un error en la promesa 
        console.log(error);
    }
}

// Exportar método connect
module.exports = connection