/*import mysql from "promise-mysql";
import keys from './keys';

const pool = mysql.createPool(keys.database);

pool.getConnection().then(connection => {
    pool.releaseConnection(connection);
    console.log('Conectado a la Base de Datos');
});

export default pool;


//"promise-mysql": "3.3.2",
/*console.log(result[1].titulo)
if (result.length > 0) return res.status(200).json(result);
else return res.status(200).json({ result: "No Hay Juegos Creados" });*/