//Decirle a Mongo q campos requiere tu tarea
const mongoose = require('mongoose')

const TareaSchema = mongoose.Schema({ //Plantilla para de cómo debe ser la tarea en la BD
    descripcion: {
        type: String,
        required:[true, 'por favor teclea una descripcion']
    },
    user:{
        type: mongoose.Schema.Types.ObjectId, //Método para identificar al usuario dependiendo su ID
        require:true,
        ref: 'User'
    }
},{
    timestamps: true  //muestra cuando ese objeto(tareas en este caso) se creó
})

module.exports = mongoose.model('Tarea', TareaSchema)
