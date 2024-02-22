const { Pool } = require('pg');

const pool = new Pool({
    user: 'obedhipolito',
    host: 'localhost',
    database: 'postulantes',
    password: 'jose0710',
    port: 5432,
});



async function verificacion() {
    try {
        const client = await pool.connect();
        const existeTabla = await client.query(`SELECT EXISTS (SELECT FROM information_schema.tables WHERE table_name = 'desarrolladores')`);
        const tablaExiste = existeTabla.rows[0].exists;

        if (!tablaExiste) {
            await client.query(`
                CREATE TABLE desarrolladores (
                    id SERIAL PRIMARY KEY,
                    nombre VARCHAR(250),
                    edad INT,
                    habilidades VARCHAR(250)
                )
            `);
            console.log('Tabla "desarrolladores" creada exitosamente.');
        } else {
            console.log('La tabla "desarrolladores" ya existe.');
        }

        client.release();
    } catch (error) {
        console.error('Error al verificar/crear tabla de desarrolladores:', error);
    }
}

module.exports = {
    verificacion,
    pool
}
