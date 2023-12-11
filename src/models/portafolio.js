// Importar el esquema y el modelo
const {Squema, model} = require('mongoose')

// Crea un nuevo esquema portafolioSchema
const portafolioSchema = new Schema (
    {
        title:{
            type:String,
            require:true
        },
        description:{
            type:String,
            require:true
        },
        category:{
            type:String,
            require:true
        }
    },
    {
        timestamps:true
    }
)

// Exportar el modelo
module.exports = model('portafolio',portafolioSchema)