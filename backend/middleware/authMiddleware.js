const jwt = require('jsonwebtoken')
const asyncHandler = require('express-async-handler')
const User = require('../models/usersModel')

const protect = asyncHandler(async (req, res, next) => {
    let token

    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        try {
            // Obtenemos el token
            token = req.headers.authorization.split(' ')[1]

            // Verificamos que el token esté firmado por nuestro back
            const decoded = jwt.verify(token, process.env.JWT_SECRET)

            // Obtener los datos del usuario logueado
            req.user = await User.findById(decoded.id_usuario).select('-password')

            next()
        } catch (error) {
            res.status(401)
            throw new Error("No autorizado, token fallido o malformado")
        }
    }

    if (!token) {
        res.status(401)
        throw new Error("Acceso no autorizado, no proporcionaste un token")
    }
})

module.exports = protect
