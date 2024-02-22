const developerService = require('../service/developerService');    

const getAllDevelopers = async (req, res) => {
    try {
        const developers = await developerService.getAllDevelopers();
        res.status(200).json(developers);
    } catch (error) {
        res.status(500).json({ message:'Error al obtener desarroladores' });
    }
}

const getDeveloperById = async (req, res) => {
    try {
        const developer = await developerService.getDeveloperById(req.params.id);
        if (developer) {
            res.status(200).json(developer);
        } else {
            res.status(404).json({ message:'Desarrollador no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ message:'Error al obtener desarrolador por ID' });
    }
}

const createDeveloper = async (req, res) => {
    try {
        const developer = await developerService.createDeveloper(req.body.nombre, req.body.edad, req.body.habilidades);
        res.status(201).json(developer);
    } catch (error) {
        res.status(500).json({ message:'Error al crear desarrolador' });
    }
}

const updateDeveloper = async (req, res) => {
    try {
        const developer = await developerService.updateDeveloper(req.params.id, req.body.nombre, req.body.edad, req.body.habilidades);
        if (developer) {
            res.status(200).json(developer);
        } else {
            res.status(404).json({ message:'Desarrollador no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ message:'Error al actualizar desarrolador' });
    }
}

const deleteDeveloper = async (req, res) => {
    try {
        const developer = await developerService.deleteDeveloper(req.params.id);
        if (developer) {
            res.status(200).json({ message:'Desarrollador eliminado' });
        } else {
            res.status(404).json({ message:'Desarrollador no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ message:'Error al eliminar desarrolador' });
    }
}

module.exports = {
    getAllDevelopers,
    getDeveloperById,
    createDeveloper,
    updateDeveloper,
    deleteDeveloper
}