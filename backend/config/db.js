const mongose = require('mongoose')

//Función para conectar a MongoDB
const connectDB = async() =>{
    try {
        const conn = await mongose.connect(process.env.MONGO_URI)
        console.log(`MongoDb conectado: ${conn.connection.host}`.cyan.underline)
        //Las comillas invertidas es para combinar variables con texto, el signo $ es para exportar
        //una varible
    } catch (error) {
        console.error(error) //Imprime el error
        process.exit(1) //Proceso de salida, proceso de salida de error, es con 1
    }
}

module.exports = connectDB //exportar la función connectDB, para que esté disponible para otros files
