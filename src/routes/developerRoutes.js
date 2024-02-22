const express = require('express');
const router = express.Router();
const developerController = require('../controller/developerController');

router
  .get('/developers', developerController.getAllDevelopers)
  .get('/developers/:id', developerController.getDeveloperById)
  .post('/developers', developerController.createDeveloper)
  .put('/developers/:id', developerController.updateDeveloper)
  .delete('/developers/:id', developerController.deleteDeveloper);
  
module.exports = router;