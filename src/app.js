const express = require('express');
const { verificacion } = require('./db/conexion');
const router = require('./routes/developerRoutes');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

app.use('/api', router);

verificacion().then(() => {
  app.listen(PORT, () => {
      console.log(`Server started on port ${PORT}`);
  });
}).catch(error => {
  console.error('Error al iniciar el servidor:', error);
});