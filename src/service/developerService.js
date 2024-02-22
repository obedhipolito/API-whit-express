const conexion = require('../db/conexion');

async function getAllDevelopers() {
    let client;
    try {
        client = await conexion.pool.connect();
        const result = await client.query('SELECT * FROM desarrolladores');
        return result.rows;
    } catch (error) {
        console.error('Error al obtener desarrolladores:', error);
        throw new Error('Error al obtener desarrolladores');
    } finally {
        if (client) {
            client.release();
        }
    }
}   

async function getDeveloperById(id) {
    let client;
    try {
        client = await conexion.pool.connect();
        const result = await client.query('SELECT * FROM desarrolladores WHERE id = $1', [id]);
        return result.rows[0];
    } catch (error) {
        console.error('Error al obtener desarrollador por ID:', error);
        throw new Error('Error al obtener desarrollador por ID');
    } finally {
        if (client) {
            client.release();
        }
    }
}

async function createDeveloper(nombre, edad, habilidades) {
    let client;
    try {
        client = await conexion.pool.connect();
        const result = await client.query('INSERT INTO desarrolladores (nombre, edad, habilidades) VALUES ($1, $2, $3) RETURNING *', [nombre, edad, habilidades]);
        return result.rows[0];
    } catch (error) {
        console.error('Error al crear desarrollador:', error);
        throw new Error('Error al crear desarrollador');
    } finally {
        if (client) {
            client.release();
        }
    }
}

async function updateDeveloper(id, nombre, edad, habilidades) {
    let client;
    try {
        client = await conexion.pool.connect();
        const result = await client.query('UPDATE desarrolladores SET nombre = $1, edad = $2, habilidades = $3 WHERE id = $4 RETURNING *', [nombre, edad, habilidades, id]);
        return result.rows[0];
    } catch (error) {
        console.error('Error al actualizar desarrollador:', error);
        throw new Error('Error al actualizar desarrollador');
    } finally {
        if (client) {
            client.release();
        }
    }
}

async function deleteDeveloper(id) {
    let client;
    try {
        client = await conexion.pool.connect();
        await client.query('DELETE FROM desarrolladores WHERE id = $1', [id]);
    } catch (error) {
        console.error('Error al eliminar desarrollador:', error);
        throw new Error('Error al eliminar desarrollador');
    } finally {
        if (client) {
            client.release();
        }
    }
}

module.exports = {
    getAllDevelopers,
    getDeveloperById,
    createDeveloper,
    updateDeveloper,
    deleteDeveloper
}