const mongoose = require('mongoose')

const UserSchema = mongoose.Schema({ //Plantilla para de cómo debe ser el usuario en la BD
    nombre:{
        type: String,
        required:[true, 'por favor teclea el nombre de usuario']
    },
    email:{
        type: String, 
        required:[true, 'teclea el email'],
        unique: true
    },
    password:{
        type: String, 
        required:[true, 'teclea el password']
    },
    esAdmin:{
        type: Boolean,
        default: false
    }
},{
    timestamps: true
})

module.exports = mongoose.model('User', UserSchema)
